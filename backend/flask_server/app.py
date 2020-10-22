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

mtcnn = MTCNN(image_size=512, margin=200)

import os
import stegano_encoder
import stegano_decoder

tokenizer = get_tokenizer()
model_comment = comment_model.load_model()

@app.route('/')
@cross_origin()
def index():
    return jsonify(text = 'Hello')

@app.route('/gan/ugotit', methods=['POST'])
@cross_origin()
def run_model():
    image_data = re.sub('^data:image/.+;base64,', '', request.form['userImage'])
    # imageUrl = request.form.get("userImage")
    images = Image.open(BytesIO(base64.b64decode(image_data)))

    images_cropped = mtcnn(images)
    # webtoonify = ugotit(images_cropped)

    images.save("file_image.png")
    print(images, file=sys.stdout)
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


@app.route('/gan/stegano_encode', methods=['POST'])
@cross_origin()
def run_stegano_encoder():
    image_data = re.sub('^data:image/.+;base64,', '', request.form['userImage'])
    # imageUrl = request.form.get("userImage")
    images = Image.open(BytesIO(base64.b64decode(image_data)))
    converted = images.resize((256,256), Image.LANCZOS)
    converted.save("converted.png", format='png')
    
    # steganoimg name => "stegano_of_input_"
    output_img_path = "/WebToonPlatforn_DS/frontend/public/stegano_of_" + "input_"
    # KEY value
    ############ request keys ############
    block_keys = request.form['userKey']
    ##########################################
    
    # stegano encoding
    try:
        _stegano_encode("converted.png", "./data_/output_new.png", block_keys)

        return jsonify({"state" : True})
    except Exception as e:
        print(e)
        return jsonify({"state" : False})


@app.route('/gan/stegano_decode', methods=['POST'])
@cross_origin()
def run_stegano_decoder():

    # steganoimg name => "stegano_of_input_"
    #stegano_img_path = "/WebToonPlatforn_DS/frontend/public/stegano_of_" + "input_"

    try:
        decoded_msg = _stegano_decode("./data_/output_new.png")
        return jsonify({"state" : True, "text" : decoded_msg})
    except Exception as e:
        print(e)
        return jsonify({"state" : False})



def _stegano_encode(cover_img, output_stegano_img, msg, steg = "dense"):
	from stegano_model_ import SteganoGAN
	
	steganogan = SteganoGAN.load(steg, cuda=False)
	steganogan.encode(cover_img, output_stegano_img, msg)


def _stegano_decode(stegano_img, steg="dense"):

    from stegano_model_ import SteganoGAN
    from decoders import DenseDecoder

    steganogan = SteganoGAN.load(steg, cuda=False)
    # Decode the message from stegano_img
    decoded_msg = steganogan.decode(stegano_img)
    return decoded_msg



#debug가 되어있다면, 실시간으로 코드 변경이 적용된다.
if __name__ == "__main__":
    app.run(debug=True)
