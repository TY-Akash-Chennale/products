import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  product = JSON.parse(localStorage.getItem('products'));
  constructor() { }

  ngOnInit(): void {
  }
  delete(id) {
    console.log("delete function called");
    this.product.splice(id, 1);
    localStorage.setItem('products', JSON.stringify(this.product));
    console.log(this.product);
  }
}
