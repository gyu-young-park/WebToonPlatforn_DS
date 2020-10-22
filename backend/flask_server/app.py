from flask import Flask, jsonify , request
from flask_cors import CORS, cross_origin
from io import BytesIO
from PIL import Image
import sys, base64
import re
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# dhsimpson - comment classifier
import torch
import pandas as pd
import json
from comment_functions import get_tokenizer,text_to_data, infer
import comment_model

tokenizer = get_tokenizer()
model_comment = comment_model.load_model()

# dhsimpson - face detector
from facenet_pytorch import MTCNN

mtcnn = MTCNN(image_size=128, margin=50)

# minsoooooo - u got it , webtoonify(human image to webtoon image)
import ugotit
from torchvision import transforms
import os
import numpy as np
from ugotit import tensor2img,RGB2BGR,save_img

model_webtoonify_freedraw = ugotit.load_model("freedraw_model.pt")
# model_webtoonify_freedraw_male = ugotit.load_model("freedraw_model_male.pt")
# model_webtoonify_freedraw_female = ugotit.load_model("freedraw_model_female.pt")
model_webtoonify_mind_sound = ugotit.load_model("mind_sound_model.pt")

ugotit_transform = transforms.Compose([
            transforms.Resize((128, 128)),
            transforms.ToTensor(),
            transforms.Normalize(mean=(0.5, 0.5, 0.5), std=(0.5, 0.5, 0.5))
        ])

tensor2PIL = transforms.ToPILImage('RGB')


    # images_webtoon = images_webtoon[0].squeeze()#.detach().cpu().numpy().transpose(1,2,0)
    # images_webtoon = tensor2img(images_webtoon)

'''
shin++ 15:05, 2020/10/21 head
'''
import os
import stegano_encoder
import stegano_decoder
'''
shin++ 15:05, 2020/10/21 tail
'''


tokenizer = get_tokenizer()
model_comment = comment_model.load_model()

@app.route('/')
@cross_origin()
def index():
    return jsonify(text = 'Hello')

@app.route('/gan/ugotit', methods=['POST'])
@cross_origin()
def run_model():
    # 유저에게 이미지 받아옴
    image_data = re.sub('^data:image/.+;base64,', '', request.form['userImage'])
    webtoon_title = re.sub('','',request.form['webtoon_title'])
    # 이미지에서 얼굴만 Crop
    images = Image.open(BytesIO(base64.b64decode(image_data)))
    images_cropped = mtcnn(images)
    images_transformed = tensor2PIL(images_cropped)
    images_transformed = ugotit_transform(images_transformed)

    # Ugotit에 넣기 위해 이미지를 Transform
    # images_webtoon = None
    images_transformed = images_transformed.unsqueeze(0)
    #images_webtoon = model_webtoonify_freedraw(images_transformed)
    
    # model_webtoonify_freedraw_male
    # model_webtoonify_freedraw_female

    if webtoon_title=="freedraw":
        images_webtoon = model_webtoonify_freedraw(images_transformed)
    elif webtoon_title=="mind_sound":
        images_webtoon = model_webtoonify_mind_sound(images_transformed)

    # convert 
    images_webtoon = tensor2img(images_webtoon)
    images_webtoon = RGB2BGR(images_webtoon)
    save_img(images_webtoon,"file_image.png")
    # images_webtoon = torch.from_numpy(images_webtoon)
    # images_webtoon = np.ndarray(images_webtoon)
    # images_webtoon.save(os.path.join("file_image.png"))

    #images_webtoon.save("file_image.png")
    #print(images, file=sys.stdout)
    # image_file = Image.open(imageUrl)
    return image_data

@app.route('/nlp/comment_classify', methods=['GET'])
@cross_origin()
def run_comment_classify():
    df = pd.read_csv('webtoon_comments_labeled.csv',encoding='utf-16')
    comments = df['comment'].tolist()
    data = text_to_data(tokenizer, comments[:100])
    result = infer(model_comment, data, comment_model.device)# label, prediction accuracy 리턴
    label_0 = []
    label_1 = []
    label_2 = []
    temp_0 = 0
    temp_1 = 0
    temp_2 = 0
    temp_str = ""

    for idx, res in enumerate(result):
        lbl, acc = res
        temp_str = comments[idx]
        if lbl==0 and temp_0<40:
            label_0.append([ temp_str,lbl,acc[lbl] ])
            temp_0+=1
        elif lbl==1 and temp_1<40:
            label_1.append([ temp_str,lbl,acc[lbl] ])
            temp_1+=1
        elif lbl==2 and temp_0<40:
            label_2.append([ temp_str,lbl,acc[lbl] ])
            temp_2+=1
    label_0.sort(key = lambda label_0: label_0[2], reverse=True)
    label_1.sort(key = lambda label_1: label_1[2], reverse=True)
    label_2.sort(key = lambda label_2: label_2[2], reverse=True)

    return jsonify({"label_0":label_0,
                        "label_1":label_1,
                        "label_2":label_2})
    #return으로 json 결과를 주떼엽><




'''
shin++ 14:10, 2020/10/21 head
'''
@app.route('/gan/stegano_encode', methods=['POST'])
@cross_origin()
def run_stegano_encoder():

    image_data = re.sub('^data:image/.+;base64,', '', request.form['userImage'])
    # imageUrl = request.form.get("userImage")
    images = Image.open(BytesIO(base64.b64decode(image_data)))

    # steganoimg name => "stegano_of_input_"
    output_img_path = "/WebToonPlatforn_DS/frontend/public/stegano_of_" + "input_"

    # KEY value
    ############ request keys ############
    block_keys = ""
    ##########################################

    # stegano encoding
    try:
        stegano_encoder.stegano_encode(images, output_img_path, block_keys)
        return 1
    except:
        return 0


@app.route('/gan/stegano/decode', methods=['POST'])
@cross_origin()
def run_stegano_decoder():

    # steganoimg name => "stegano_of_input_"
    stegano_img_path = "/WebToonPlatforn_DS/frontend/public/stegano_of_" + "input_"

    decoded_msg = stegano_decoder._stegano_decode(stegano_img_path)

    return decoded_msg

'''
shin++ 14:10, 2020/10/21 tail
'''





#debug가 되어있다면, 실시간으로 코드 변경이 적용된다.
if __name__ == "__main__":
    app.run(debug=True)
