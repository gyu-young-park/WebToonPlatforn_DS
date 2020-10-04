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
# from text_to_tensor import get_tokenizer,text_to_tensor
# tokenizer = get_tokenizer()
# 여기는  text to tensor 예시
# comment = "화련이랑 싸우면 누가 이기려나"
# res = text_to_tensor(tokenizer, comment)
# print(res) -> 길이 128인 tensor 데이터 반환(comment 길이 + 나머지는 0 padding)
# model(res) -> 0,1,2 중 하나

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
