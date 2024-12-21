import { AppModel } from "../../lib/appModel.js"
import { ResData } from "../../lib/resData.js"
import { App } from "../../lib/appData.js"

class AppService {
    #repository
    constructor(repository) {
        this.#repository = repository
    }
    async barchaIlovalarniOlish() {
        const data = await this.#repository.find()
        const resdata = new ResData(200, "barcha ilovalar olindi!", data)
        return resdata
    }
    async yangiIlovaQoshish(data) {
        const phonedata = new App(data.name, data.volume)
        console.log(phonedata);
        
        const newData = await this.#repository.create(phonedata)
        const resdata = new ResData(201, "ilova qo'shildi!", newData)
        return resdata
    }
    async ilovaniOchirish(id) {
        if (!id) {
            const resdata = new ResData(404, "siz kiritgan id dagi ilova mavjud emas!")
            return resdata
        }
        const deleteData = await this.#repository.deleteOne({appID : id})
        const resdata = new ResData(200, `${id} id li ilova o'chirildi!`)
        return resdata
    }

    async idOrqaliTopish(id){
        if (!id) {
            const resdata = new ResData(404, "siz kiritgan id dagi ilova mavjud emas!")
            return resdata
        }
        const d = await this.#repository.findOne({appID : id})
        const resdata = new ResData(200, `${id} id li ilova`, d)
        return resdata
    }
}

const appService = new AppService(AppModel)
export {appService}