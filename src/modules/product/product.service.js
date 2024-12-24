import { ProductData } from "../../lib/productData.js"
import { ProductModel } from "./entity/index.js"
import { ResData } from "../../lib/resData.js"
import { idValidate } from "../../lib/idValidate.js"

class ProductService {
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
        const phonedata = new ProductData(data.name, data.price, data.count)
        
        const newData = await this.#repository.create(phonedata)
        const resdata = new ResData(201, "product qo'shildi!", newData)
        return resdata
    }
    async malumotniOchirish(id) {
        const data = await this.#repository.findOne({_id : id})
        
        idValidate(id, data._id)
        
        
        if (!id) {
            const resdata = new ResData(404, "siz kiritgan id dagi malumot mavjud emas!")
            return resdata
        }
        await this.#repository.deleteOne({_id : id})
        const resdata = new ResData(200, `${id} id li malumot o'chirildi!`)
        return resdata
    }
    async idOrqaliTopish(id){
        if (!id) {
            const resdata = new ResData(404, "siz kiritgan id dagi product mavjud emas!")
            return resdata
        }
        const d = await this.#repository.findOne({_id : id})
        const resdata = new ResData(200, `${id} id li product`, d)
        return resdata
    }
}

const productService = new ProductService(ProductModel)
export {productService}