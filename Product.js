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
//metodos de escritura 
setId(id){
    return this._id= id;
}
setName(name){
    return this._name= name;
}
}