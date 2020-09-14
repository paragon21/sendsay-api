import Sendsay from 'sendsay-api';

export default class Connector {
    constructor() {
        this.sendsay = new Sendsay()
    }

    async login(login, passwd, sublogin) {
        let answer
        if (sublogin) {
            answer = await this.sendsay.login({
                login: String(login),
                sublogin: String(sublogin),
                password: String(passwd)
            })
        } else {
            answer = await this.sendsay.login({
                login: String(login),
                password: String(passwd) 
            })
        }            
        console.log(answer)
        return answer
    }
}