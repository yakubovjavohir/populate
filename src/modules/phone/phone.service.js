import { PhoneData } from "../../lib/phoneData.js"
import { PhoneModel } from "../../lib/phoneModel.js"
import { ResData } from "../../lib/resData.js"
import { idValidate } from "../../lib/idValidate.js"

class PhoneService {
    #repository
    constructor(repository) {
        this.#repository = repository
    }
    async barchaMalumotniOlish() {
        const data = await this.#repository.find()
        const resdata = new ResData(200, "barcha malumotlar olindi!", data)
        return resdata
    }
    async yangiMaxsulotQoshish(data) {
        const phonedata = new PhoneData(data.name, data.brand, data.price, data.count)
        console.log(phonedata);
        
        const newData = await this.#repository.create(phonedata)
        const resdata = new ResData(201, "product qo'shildi!", newData)
        return resdata
    }
    async malumotniOchirish(id) {
        const data = await this.#repository.findOne({PhoneID : id})
        console.log(data.PhoneID);
        console.log(id);
        
        
        idValidate(id, data.PhoneID)
        
        
        if (!id) {
            const resdata = new ResData(404, "siz kiritgan id dagi malumot mavjud emas!")
            return resdata
        }
        const deleteData = await this.#repository.deleteOne({PhoneID : id})
        const resdata = new ResData(200, `${id} id li malumot o'chirildi!`)
        return resdata
    }
}

const phoneService = new PhoneService(PhoneModel)
export {phoneService}