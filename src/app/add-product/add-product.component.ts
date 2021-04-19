import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(cat,name, price, quant, desc, pic) {
    let pro: Product = {
      category:cat,
      name: name,
      price: price,
      quantity: quant,
      description: desc,
      picUrl: pic
    }
    console.log(pro);
    if (Array.isArray(JSON.parse(localStorage.getItem('products')))) {
      console.log("yes");
    } else {
      // console.log("no");
      localStorage.setItem('products', JSON.stringify([]));
      console.log("creating the localstorage", localStorage.getItem('products'));

    }

    let p = JSON.parse(localStorage.getItem('products'));
    p.push(pro);

    console.log("after addding product", localStorage.getItem('products'));
    localStorage.setItem('products', JSON.stringify(p));
    alert("product added successfuly");
  }
}
