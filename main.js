import Product from "./Product.js";
import Registry from "./registry.js";
class App {
    constructor() {
        this._registry = new Registry();
        let btnRegister = document.querySelector("#btnRegister");

    btnRegister.addEventListener("click", this._addParticipant);
    }
}
new App;
    

