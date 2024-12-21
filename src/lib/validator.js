import { CustomError } from "./customError.js"

async function validator(schema, data) {
    const {error} = await schema.validate(data)
    if (error) {
        throw new CustomError(400, "noto'g'ri port yoki url kiritgansiz!")
    }
}

export {validator}