import { CustomError } from "./customError.js";

function idValidate(kirtlganId, bazadagiId) {
    if (!kirtlganId && !bazadagiId) {
        throw new CustomError(404, "id mavjud emas")
    }
}

export {idValidate}