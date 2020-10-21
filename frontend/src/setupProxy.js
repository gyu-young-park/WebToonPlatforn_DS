const { createProxyMiddleware } = require('http-proxy-middleware')
//왜 프록시 서버를 두는가?? 이걸 두지 않으면 CORS 예러가 생기기 때문이다. 
//실제 배포에서는 사용하지 않는다.
//프록시 서버를 통해서 데이터를 주고받으면 ip를 변경해서 보낼 수 있다. 
// 따라서 방화벽 기능, 웹 필터 기능, 캐쉬 데이터 , 공유 데이터 제공, 보내는 데이터도 임의로 변경 가능
//프록시로 사이트 접근 제한도 가능
const proxyFunction = (app) => {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    )
    // app.use(
    //     '/gan',
    //     createProxyMiddleware({
    //         target: 'http://localhost:5000',
    //         changeOrigin: true,
    //     })
    // )
    
}

module.exports = proxyFunction