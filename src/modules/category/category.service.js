import { CategoryModel } from "./entity/index.js"
import { ResData } from "../../lib/resData.js"
import { CategoryData } from "../../lib/categoryData.js"

class CategoryService {
    #repository
    constructor(repository) {
        this.#repository = repository
    }
    async barchaCategorylarniOlish() {
        const data = await this.#repository.find()
        const resdata = new ResData(200, "barcha category olindi!", data)
        return resdata
    }
    async yangiCategoryQoshish(data) {
        const categorydata = new CategoryData(data.name)
        
        const newData = await this.#repository.create(categorydata)
        const resdata = new ResData(201, "category qo'shildi!", newData)
        return resdata
    }
    async CategoryniOchirish(id) {
        if (!id) {
            const resdata = new ResData(404, "siz kiritgan id dagi category mavjud emas!")
            return resdata
        }
        await this.#repository.deleteOne({_id : id})
        const resdata = new ResData(200, `${id} id li category o'chirildi!`)
        return resdata
    }

    async idOrqaliTopish(id){
        if (!id) {
            const resdata = new ResData(404, "siz kiritgan id dagi category mavjud emas!")
            return resdata
        }
        const d = await this.#repository.findOne({_id : id})
        const resdata = new ResData(200, `${id} id li category`, d)
        return resdata
    }
}

const categoryService = new CategoryService(CategoryModel)
export {categoryService}