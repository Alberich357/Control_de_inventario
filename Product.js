//Tarea incompleta, se me juntaron varias cosas y no pude iniciar hasta el sabado, recien ahorita cuando andaba terminando 
//vi que usar el static read form esta mal asi que mejor dejo lo que creo que pueda estar bien para cuando sepa como hacerlo
//sin el read form
export default class Product{
    constructor(id,name, quantity, cost){
        this._id = id;
        this._name = name;
        this._quantity = quantity;
        this._cost = cost;
    }
//metodos de lectura
    getId(){
        return this._id;
    }
    getName(){
        return this._name;
    }
    getQuantity(){
        return this._quantity;
    }
    getCost(){
        return this._cost;
    }
    getFinalCost(){
        return this._cost*this._quantity;
    }
     infoHtml(){
       return `
                 <div>
                     <h3>${this._id} - ${this._name}</h3>
                     <p> $${this._cost} ${this._quantity} Final cost=${this.getFinalCost()}</p>
                 </div>
             `;
     }
}