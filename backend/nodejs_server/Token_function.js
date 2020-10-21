//caver js 라이브러리로 바오밥 테스트넷에 접속
const Caver = require('caver-js')
const caver = new Caver('https://api.baobab.klaytn.net:8651/')
const abi = require('./tokensale_abi.json')
const contract = new caver.klay.Contract(abi, '0xc27db9173a26fa1362a2cd2002399c57f3cd600e')//<-now : 제목으로 address 등록하기, 가져오기 추가한 컨트랙트   prev-> 0x8ddce0eef61897d90b389bc28441fd4478b76e0a

module.exports.balanceOf = async function(_address, _pk){
    try{
        const wallet = caver.klay.accounts.wallet
        const account = caver.klay.accounts.createWithAccountKey(_address, _pk)
        wallet.add(account)
        const res = await contract.methods.balanceOf(_address).call(null)
        wallet.remove(_address)
        return {"success":true,"balance":res}
    }catch(e){
      console.log(e);
      wallet.remove(_address)
      return {"success":false}
    }
}
module.exports.buy_token = async function(_address, _pk, amount){
    try{
        const wallet = caver.klay.accounts.wallet
        const account = caver.klay.accounts.createWithAccountKey(_address, _pk)
        wallet.add(account)
        const result = await contract.methods.buy_token().send({from: _address, gas:300000,value:caver.utils.toHex(caver.utils.toPeb(amount.toString(),"peb"))})
        const res = await contract.methods.balanceOf(_address).call(null)
        wallet.remove(_address)
        return {"success":true,"balance":res}
    }catch(e){
      console.log(e);
      return {"success":false}
    }
}
module.exports.buy_webtoon = async function(_address, _pk, title, amount){// 구매자 지갑주소, 구매자 pk, 구매 웹툰 제목, 토큰량
    try{
        const wallet = caver.klay.accounts.wallet
        const account = caver.klay.accounts.createWithAccountKey(_address, _pk)
        wallet.add(account)
        const result = await contract.methods.buy_webtoon(title,amount).send({from: _address, gas:300000})
        const res = await contract.methods.balanceOf(_address).call(null)
        wallet.remove(_address)
        return {"success":true,"balance":res}
    }catch(e){
      console.log(e);
      return {"success":false}
    }
}
// 토큰이 전부 소진됐을 때, 토큰 충전해주는 함수
module.exports.mint = async function(){
    try{
        // 토큰 생성 컨트랙트 주소 또한 타인에게 보여져선 안 됨. 파일로 부터 불러와야 함(추후 수정)
        const abi_wtt = require('./webtoontoken_abi.json')
        const contract_wtt = new caver.klay.Contract(abi, '0x1db5a705ffe84b22ff17fe06937faeb7a32310f5')

        // 토큰 생성자 지갑 주소 & pk 이므로,  타인에게 보여져선 안 됨. 파일로 부터 불러와야 함(추후 수정)
        const _address = '0x3ca00af7674c9e11c95265c7ea55298c62ba0ff8'
        const _pk = '0x1e00d7192cd70d9c2293168534f268be88029d6491042036d554e358111c73e2'

        const wallet = caver.klay.accounts.wallet
        const account = caver.klay.accounts.createWithAccountKey(_address, _pk)
        wallet.add(account)

        const result = await contract_wtt.methods.mint().send({from: _address,gas: 300000})
        const res = await contract.methods.balanceOf(_address).call(null)
        wallet.remove(_address)
        return {"success":true,"balance":res}
    }catch(e){
        console.log(e)
        return {"success":false}
    }
}
