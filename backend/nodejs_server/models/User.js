const mongoose = require('mongoose')
const bcrypt = require('bcrypt') // 암호화 장치
const saltRounds = 10 // salt를 이용해서 비밀번호를 암호화해야한다. salt와 saltRounds, salt가 몇개인지 알려주는 것이 saltRounds 이다.
const jwt = require('jsonwebtoken')

// mongoDB는 model과 schema가 있다. schema는 데이터의 전체 구조를 말하고, model은 그 schema에 데이터를 편하게 사용할 수 있는 wrapper를 말한다.
// trim이 true여야 빈칸이 입력되도 변경된다.
/*
    User Model
    name : user's name으로 문자열과 50개 까지의 제한을 갖습니다.
    email : 메일로 trim을 설정하여 빈칸을 받지 않습니다. 또한 유니크한 값으로 산정합니다.
    password : 문자열로 최소 5개 이상입니다.
    lasname : 문자열로 최대 50개의 글자까지 입니다.
    role : 작가, 스텝, 독자를 구분해주는 표시입니다. default는 0으로 독자를 의미합니다. 1은 작가 2는 스텝입니다.
    image: 유저의 이미지
    token : jwt를 의미합니다.
    tokenExp : jwt의 만료 기한입니다.
    publicKey : 유저의 publick key
    privateKey : 유저의 privateKey
*/
const userScheme = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim : true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength : 50
    },
    role: {
        type: Number,
        default : 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    },
    publicKey: {
        type: String
    },
    privateKey: {
        type: String
    }
})

//save메서드 이전에 실행되는 함수, 
userScheme.pre('save', function( next ){
    // new User(req.body)이므로, 해당 스키마에서 req.body정보가 들어간다.
    var user = this
    //password가 바뀔 때만 이 로직을 실행한다. 만약 이메일만 변환하는 경우는 이 코드가 실행되지 않는다.
    if(user.isModified('password')){
        // 비밀번호 암호화, 먼저 salt를 만들어야해서 gen함수를 호출한다.
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err)
            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err)
                user.password = hash
                //이게 있어야 다음 함수가 실행된다. 즉 save가 된다.
                next()
            });
        });
    }else{
        next()
    }
})

userScheme.methods.comparePassword = function(plainPassword, cb){
    // 우리의 비밀번호 123456
    // 암호화된 비밀번호는 해쉬되었기 때문에 복호화된 값과 비교하기 어렵다.
    bcrypt.compare(plainPassword, this.password , function(err, isMatch){
        if(err) return cb(err)
        //cb는 callback함수이다.
        cb(null, isMatch)
    })
}

userScheme.methods.generateToken = function(cb){
    var user = this
    //jsonwebtoken을 이용해서 토큰을 생성하기
    // token = user._id + 'secretToken' , 반대로 'secretToken을 넣어주면 user_id가 나온다.user_id는 자동으로 생성되는 값이다.
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    user.token = token
    user.save(function(err,user){
        if(err) return cb(err)
        cb(null, user)
    })
}
// statics는 클래스에 메서드를 붙이고 methods는 인스턴스에 붙인다.
// 따라서 this에 인스턴스에 대한 정보 가령 id값이나 name값이 있는게 아니라, 클래스에 대한 내용만이 있다.
userScheme.statics.findByToken = function(token, cb){
    var user = this
    // 토큰을 디코딩
    jwt.verify(token, 'secretToken', function(err, decoded){
        //유저 아이디를 이용해서 유저를 찾은 다음에
        //클라이언트에서 가져온 token과 db에 보관된 토큰이 일치하는지 확인
        user.findOne({"_id" : decoded, "token" : token}, function(err, user){
            if(err) return cb(err)
            cb(null,user)
        })
    })
}

const User = mongoose.model('User', userScheme)

module.exports = { User }