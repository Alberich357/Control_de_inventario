import Product from "./Product.js";
import Inventory from "./inventory.js";
class App {
    constructor() {
        this._inventory= new Inventory();
            const btnRegister= document.getElementById("btnAdd");
            const  btnSearch=document.getElementById("btnSearch");
            const  btnInsert=document.getElementById("btnInsert");
            const  btnDelete=document.getElementById("btnDelete");
            const  btnList=document.getElementById("btnList");
            const  btnBackwardlist=document.getElementById("btnBackwardlist");
          btnRegister.addEventListener("click", this._addProduct)
          btnSearch.addEventListener("click",  this._searchProduct)
          btnInsert.addEventListener("click",  this._addProduct)
          btnDelete.addEventListener("click",  this._deleteProduct)
          btnList.addEventListener("click",  this._productsList)
          btnBackwardlist.addEventListener("click",  this._backwardsProductsList)
        }

      readForm(){
        let inpId= document.getElementById("txtId");
        let inpName= document.getElementById("txtName");
        let inpQuantity= document.getElementById("txtQuantity");
        let inpCost= document.getElementById("txtCost");
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
        return null;
    }
    
      _searchProduct=()=>{
        let id=document.getElementById('txtId').value;
      let result=this._inventory.search(id);
      let details=document.getElementById('result');
     details.innerHTML=result;
      }
      _addProduct=()=>{
        let product= this.readForm();
        let result=document.getElementById("result");
        if(product!=null){
        let added=this._inventory.add(product);
        result.innerHTML=added;
        return
      }
          result.innerHTML="Error all the fields must be completed"
        console.log(this._inventory)
        return
      }
      _deleteProduct=()=>{
        let id=document.getElementById('txtId').value;
        let details=document.getElementById('result');
     details.innerHTML=this._inventory.delete(id);
    }
    _productsList=()=>{
      let details=document.getElementById('result');
      details.innerHTML=this._inventory.list();
    }
    _backwardsProductsList=()=>{
      let details=document.getElementById('result');
      details.innerHTML=this._inventory.backwardList();
    }
  }
    new App();