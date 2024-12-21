import { ID } from "./phoneID.js"

class PhoneApp {
    constructor(phoneID, appID){
        this.app_OBJECT_ID = ID()
        this.PhoneID = phoneID
        this.AppID = appID
    }
}

export {PhoneApp}