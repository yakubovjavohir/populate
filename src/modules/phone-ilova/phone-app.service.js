import { ResData } from "../../lib/resData.js"
import { Model } from "../../lib/phone-appModel.js"
import { PhoneApp } from "../../lib/phone-appData.js"
import { idValidate } from "../../lib/idValidate.js"

class PhoneAppService {
    #repository
    constructor(repository) {
        this.#repository = repository
    }
    async getPhoneAndApp() {
        const data = await this.#repository.find().populate("PhoneID").populate("AppID").exec()
        const resdata = new ResData(200, "telefon va ilovalar olindi!", data)
        return resdata
    }

    async createPhoneAndApp(data) {
        if (!data.PhoneID || !data.AppID) {
            throw new Error('PhoneID va AppID kirting');
        }
        const dataPhone_app = new PhoneApp(data.PhoneID, data.AppID);
        const newData = await this.#repository.create(dataPhone_app)
        return newData;
    }
    

    async deletePhoneAndApp(id) {
        const data = await this.#repository.findOne({_id : id})
        
        idValidate(id, data._id)
        
        if (!id) {
            const resdata = new ResData(404, "siz kiritgan id dagi ilova va telefon mavjud emas!")
            return resdata
        }
        await this.#repository.deleteOne({_id : id})
        const resdata = new ResData(200, `${id} id li telefon va ilova o'chirildi!`)
        return resdata
    }
}

const phoneAppservice = new PhoneAppService(Model)
export {phoneAppservice}