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
    add(product){
      let pos=0;
        if(this.products.length>=20){
  
          return "Error no more than 20 elements can be added ";
        }
  
        
            if(this.products.length!=0){
            
          if(product.getId()<this.products[this.products.length-1].getId()){
            position= this.searchOrder(product.getId());
            if(position>=0){
              this.push(position);
              this.products[pos]=product
              return `you added the product ${product.infoHtml()}`
            }
              return `You have already entered this product`
             }
            }
  
  
             this.products.push(product)
             return `you added the product  ${product.infoHtml()}`
      }
      delete(id){
        let position= this.searchIndex(id);
        let deleted=this.products[position].infoHtml();
        for(let i=position;i<=(this.products.length-1);i++){
         
          this.products[i]=this.productos[i+1];
        }
        this.products.pop()
       return `the product has been eliminated ${deleted}`;
    }
    backwardsList(){
      let details="";
      for(let i=this.products.length-1;i>=0;i--){
        const p = this.products[i];
        details+= p.infoHtml();
    }
    return details;
  }
    list(){
      let info="";
      this.products.forEach(i => {
        info+=i.infoHtml();
      });
      return info;
    }
}