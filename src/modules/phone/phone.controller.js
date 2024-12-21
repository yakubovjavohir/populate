import { phoneService } from "./phone.service.js"


class PhoneController {
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
            const id = Number(req.params.id)
            const resdata = await this.#service.malumotniOchirish(id)
            res.status(200).json(resdata)
        } catch (error) {
            next(error)
        }
    }
}

const phoneController = new PhoneController(phoneService)
export {phoneController}