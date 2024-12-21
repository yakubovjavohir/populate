import dotenv from "dotenv"
dotenv.config()


const config = {
    PORT : Number(process.env.PORT),
    URL : process.env.DB_URL
}

export {config}