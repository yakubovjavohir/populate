import { ResData } from "../../lib/resData.js"
import { Product_Category_Model } from "./entity/index.js"
import { Product_Category_Data } from "../../lib/product-categoryData.js"
import { idValidate } from "../../lib/idValidate.js"

class Product_Category_Service {
    #repository
    constructor(repository) {
        this.#repository = repository
    }
    async getProductAndCategory() {
        const data = await this.#repository.find().populate("ProductID").populate("CategoryID").exec()
        const resdata = new ResData(200, "product va category olindi!", data)
        return resdata
    }

    async createProductAndCategory(data) {
        if (!data.ProductID || !data.CategoryID) {
            throw new Error('ProductID va CategoryID kirting');
        }
        const dataPhone_app = new Product_Category_Data(data.ProductID, data.CategoryID);
        const newData = await this.#repository.create(dataPhone_app)
        return newData;
    }
    

    async deleteProductAndCategory(id) {
        const data = await this.#repository.findOne({_id : id})
        
        idValidate(id, data._id)
        
        if (!id) {
            const resdata = new ResData(404, "siz kiritgan id dagi CATEGORY va PRODUCT mavjud emas!")
            return resdata
        }
        await this.#repository.deleteOne({_id : id})
        const resdata = new ResData(200, `${id} id li product va category o'chirildi!`)
        return resdata
    }
}

const product_category_service = new Product_Category_Service(Product_Category_Model)
export {product_category_service}