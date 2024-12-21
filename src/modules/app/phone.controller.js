import { appService } from "./phone.service.js"


class AppController {
    #service
    constructor(service) {
        this.#service = service
    }

    async getAll(req, res, next) {
        try {
            const resdata = await this.#service.barchaIlovalarniOlish()
            res.status(200).json(resdata)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            const body = req.body
            const resdata = await this.#service.yangiIlovaQoshish(body)
            res.status(201).json(resdata)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next){
        try {
            const id = Number(req.params.id)
            const resdata = await this.#service.ilovaniOchirish(id)
            res.status(200).json(resdata)
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next){
        try {
            const id = Number(req.params.id)
            const resdata = await this.#service.idOrqaliTopish(id)
            res.status(200).json(resdata)
        } catch (error) {
            next(error)
        }
    }
}

const appController = new AppController(appService)
export {appController}