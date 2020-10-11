from flask import Flask, jsonify , request
from flask_cors import CORS, cross_origin
from io import BytesIO
from PIL import Image
import sys, base64
import re
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# 동희가 수정한 부분
# import torch
# import json
# from text_to_tensor import get_tokenizer,text_to_data, infer
# tokenizer = get_tokenizer()

# 여기는  text to tensor 예시
# comments = []
# comments.append("화련이랑 싸우면 누가 이기려나")
# data = text_to_data(tokenizer, comments)
# labels = infer(model, data) # json 을 리턴. ex - {"labels" : [0,1,1]}


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
    images.save("file_image.png")
    print(images, file=sys.stdout)
    # image_file = Image.open(imageUrl)
    return image_data


#debug가 되어있다면, 실시간으로 코드 변경이 적용된다.
if __name__ == "__main__":
    app.run(debug=True)
