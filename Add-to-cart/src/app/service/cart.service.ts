import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

   public cartItemList : any =[]                           // cartitem public

   public productList = new BehaviorSubject<any>([]);     // productlist public

   public search = new BehaviorSubject<string>("");          // search public

  constructor() { }
  //get the cart
  getProducts(){
    return this.productList.asObservable();              
  }
    // setproduct this is optional here
  setProduct(product : any){
    this.cartItemList.push(...product);           
    this.productList.next(product);
  }
  // addtocart
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);           
    this.getTotalPrice();
    console.log(this.cartItemList)
  } 
    // this is a gettotalprice
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{                         
      grandTotal += a.total ;
    })
    return grandTotal;
  }
   // remove the cart item
  removeCartItem(product : any) {
    this.cartItemList.map((a:any,index:any)=>{                    
      if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
   // removealldata
removeAllCart(){
  this.cartItemList =[]                                              
  this.productList.next(this.cartItemList);
}

}
