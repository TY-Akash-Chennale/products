import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  constructor() { }
  val: string;
  product = JSON.parse(localStorage.getItem('products'));
  onSearch(ser){
    console.log("search function called");
    this.val = ser;

  }
  delete(id) {
    console.log("delete function called");
    this.product.splice(id, 1);
    localStorage.setItem('products', JSON.stringify(this.product));
    console.log(this.product);
  }
  ngOnInit(): void {
  }
}
