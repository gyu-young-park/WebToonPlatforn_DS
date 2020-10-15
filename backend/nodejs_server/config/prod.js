//heroku같은 경우에는 따로 env에 넣어주는 코드가 있다.
module.exports = {
    mongoURI : process.env.MONGO_URI,
}