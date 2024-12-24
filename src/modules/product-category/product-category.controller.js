import { product_category_service } from "./product-category.service.js"
import { productService } from "../product/product.service.js"
import { categoryService } from "../category/category.service.js"

class Product_Category_Controller{
    #productCategoryservice
    #productService
    #categoryService
    constructor(productCategoryservice, productService, categoryService) {
        this.#productCategoryservice = productCategoryservice
        this.#productService = productService
        this.#categoryService = categoryService
    }

    async getAll(req, res, next) {
        try {
            const resdata = await this.#productCategoryservice.getProductAndCategory()
            res.status(200).json(resdata)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            const body = req.body
            const resdata = await this.#productCategoryservice.createProductAndCategory(body)
            res.status(201).json(resdata)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next){
        try {
            const id = req.params.id
            const resdata = await this.#productCategoryservice.deleteProductAndCategory(id)
            res.status(200).json(resdata)
        } catch (error) {
            next(error)
        }
    }
}

const product_category_controller = new Product_Category_Controller(product_category_service, productService, categoryService)
export {product_category_controller}