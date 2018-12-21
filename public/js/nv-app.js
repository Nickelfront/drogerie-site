import { ucfirst } from "./helpers"

export class NvApp {
    constructor() {
        this.router = new NvRouter();
    }

    register(type, object) {
        const dynamicType = `register${ucfirst(type)}`

        this.router[dynamicType](object);

        return this;
    }

    ini() {
        this.router.load()
    }
}