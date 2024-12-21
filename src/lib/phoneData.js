import { ID } from "./phoneID.js"

class PhoneData {
    constructor(phoneName, phoneBrand, phonePrice, phoneCount){
        this.PhoneID = ID()
        this.phoneName = phoneName
        this.phoneBrand = phoneBrand
        this.phonePrice = phonePrice
        this.phoneCount = phoneCount
    }
}


export {PhoneData}