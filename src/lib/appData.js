import { ID } from "./phoneID.js"

class App {
    constructor(name, volume){
        this.appID = ID()
        this.appName = name
        this.appVolume = volume
    }
}

export {App}