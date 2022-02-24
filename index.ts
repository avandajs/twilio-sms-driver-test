import {SMS} from "@avanda/app"

export default class TwilioSmsDriver extends SMS.SmsDriver{
    async send(msg): Promise<boolean> {
        return new Promise((resolve) => {

            console.table(msg)
            resolve(true)
        })
    }

}