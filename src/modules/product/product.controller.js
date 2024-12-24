import { productService } from "./product.service.js"


class ProductController {
    #service
    constructor(service) {
        this.#service = service
    }

    async getAll(req, res, next) {
        try {
            const resdata = await this.#service.barchaMalumotniOlish()
            res.status(200).json(resdata)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            const body = req.body
            const resdata = await this.#service.yangiMaxsulotQoshish(body)
            res.status(201).json(resdata)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next){
        try {
            const id = req.params.id
            const resdata = await this.#service.malumotniOchirish(id)
            res.status(200).json(resdata)
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next){
        try {
            const id = req.params.id
            const resdata = await this.#service.idOrqaliTopish(id)
            res.status(200).json(resdata)
        } catch (error) {
            next(error)
        }
    }
}

const productController = new ProductController(productService)
export {productController}