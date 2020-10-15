const {User} = require('../models/User')
let auth = (req, res, next) => {
    // 인증 처리 로직

    // 클라이언트 쿠키에서 토큰을 가져온다.
    let token = req.cookies.x_auth
    // 토큰을 복호화한 다음, 유저를 찾는다.
    User.findByToken(token, (err, user) =>{
        if(err) throw err
        if(!user) return res.json({isAuth : false , error: true})
        req.token = token
        req.user = user
        //next가 없으면 middleware에서 갇힌다. req에 token과 user를 넣어주면 다음 함수의 req의 oject에서 받을 수 있다.
        next()
    })
    // 유저가 있으면 인증 okay

    // 유저가 없으면 인증 No
}

module.exports = {auth}