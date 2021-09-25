import Product from "./Product.js";
import Registry from "./registry.js";
class App {
    constructor() {
        this._inventory= new Inventory();
            const btnRegister= document.getElementById("btnAdd");
            const  btnSearch=document.getElementById("btnSearch");
            const  btnBackwardlist=document.getElementById("btnBackwardlist");
            const  btnInsert=document.getElementById("btnInsert");
            const  btnDelete=document.getElementById("btnDelete");
            const  btnList=document.getElementById("btnList");
          btnInsert.addEventListener("click",  this._insertProduct)
          btnBackwardlist.addEventListener("click",  this.BackwardsList)
          btnDelete.addEventListener("click",  this._deleteProduct)
          btnList.addEventListener("click",  this._listProducts)
          btnSearch.addEventListener("click",  this._searchProduct)
        btnRegister.addEventListener("click", this._addProduct)    
      }
      readForm(){
        let inpId=document.getElementById("id");
        let inpName=document.getElementById("name");
        let inpQuantity=document.getElementById("quantity");
        let inpCost=document.getElementById("cost");
        let id=inpId.value;
        let name=inpName.value;
        let quantity=inpQuantity.value
        let cost=inpCost.value
        if(id&&name&&quantity&&cost){
            inpId.value="";
            inpName.value="";
            inpQuantity.value="";
            inpCost.value=""; 
            id=Number(id)
            quantity=Number(quantity)
            cost=Number(cost)
            return new Product(id, name, quantity, cost);
        }
    }
}
new App;
    

