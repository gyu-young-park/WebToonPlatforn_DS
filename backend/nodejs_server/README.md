# Config 폴더의 dev.js에 mongoDB 클라우드 키를 설정해주어야 mongoDB가 실행됩니다.  
다음의 형식으로 적어주세요.  
```
module.exports = {
    mongoURI : "keys"
}
```

# 파일 설명  
/config : 키를 관리하는 모듈입니다. 여기서 mongoDB 클라우드 키를 써주지 않으면 mongoDB가 연결되지 않습니다.  
/middleware : auth 처리 밖에 없는데 사용하는 방법은 다음과 같습니다.  
    ```
    app.get('/api/users/auth', auth , (req, res) => {
        //처리
    })
    ```
    이렇게 처리해주면, 사용자의 요청이 (req,res) => {} 로 가기 전에 auth 함수로 갑니다. auth함수에서는 사용자 웹브라우저에 저장된 jwt 쿠키와 현재 DB의 사용자 jwt를 비교합니다. 맞으면 ok, 틀리면 아웃 입니당.  

/models : user 정보에 대한 스키마와 static, methods 들이 정의되어 있습니다.  
/index.js : 서버 실행과 REST API를 모두 여기에 두었습니다. 로그인 시에 JWT토큰이 만들어져 해당 유저의 DB에 저장되고 로그아웃 시에는 JWT토큰을 DB에서 삭제시킵니다. 이 밖에 로그인 세션 검사, klaytn 블록체인 토큰 사용 등 여러 기능들이 정의되어 있습니다.  
Token_function.js : klaytn 토큰 사용 function들을 정의하였습니다.  
