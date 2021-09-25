export default class Inventory {
    constructor(){
      this.products=new Array();
    }
    search(id){
      for (let i=0;i<this.products.length;i++){
          if (id<this.products[i].id){
            return "Error product has not been found";
            
          }
          else if(id==this.products[i].id){
            return `Product found ${this.products[i].infoHtml()}`;
          }
        }
       
  }
    searchIndex(id){
      for(let i=0; i<this.products.length; i++){
        if(this.products[i].id >id){
          return -1; 
         }
         else if(id==this.products[i].id){
          return i;
         }
         
     }
     
    }      
   
    searchOrder(id){
      for (let i=0;i<this.products.length;i++){
        if(this.products[i].id==id){
         return -1
        }
        else if(this.products[i].id>id){
            return i;
         }
         
        }
    }

    push(position){
      this.products.push(null)
      for (let i = position, j=this.products.length-1; i < this.products.length-1; i++,j--) {
        this.products[j]=this.products[j-1];
      }
      
    }
}