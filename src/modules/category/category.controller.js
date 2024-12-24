import { categoryService } from "./category.service.js"


class CategoryController {
    #service
    constructor(service) {
        this.#service = service
    }

    async getAll(req, res, next) {
        try {
            const resdata = await this.#service.barchaCategorylarniOlish()
            res.status(200).json(resdata)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            const body = req.body
            const resdata = await this.#service.yangiCategoryQoshish(body)
            res.status(201).json(resdata)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next){
        try {
            const id = req.params.id
            const resdata = await this.#service.CategoryniOchirish(id)
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

const categoryController = new CategoryController(categoryService)
export {categoryController}