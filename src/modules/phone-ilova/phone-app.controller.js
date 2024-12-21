import { phoneAppservice } from "./phone-app.service.js"
import { phoneService } from "../phone/phone.service.js"
import { appService } from "../app/phone.service.js"

class PhoneAppController{
    #service
    #phoneService
    #appService
    constructor(service, phoneService, appService) {
        this.#service = service
        this.#phoneService = phoneService
        this.#appService = appService
    }

    async getAll(req, res, next) {
        try {
            const resdata = await this.#service.getPhoneAndApp()
            res.status(200).json(resdata)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            const body = req.body
            const resdata = await this.#service.createPhoneAndApp(body)
            res.status(201).json(resdata)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next){
        try {
            const id = req.params.id
            const resdata = await this.#service.deletePhoneAndApp(id)
            res.status(200).json(resdata)
        } catch (error) {
            next(error)
        }
    }
}

const phoneAppcontroller = new PhoneAppController(phoneAppservice, phoneService, appService)
export {phoneAppcontroller}