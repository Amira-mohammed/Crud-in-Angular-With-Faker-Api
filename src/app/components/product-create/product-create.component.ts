import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  product = {
    name: '',
    description: '',
    available: false,
  };
  submitted = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  createProduct(): void {
    const data = {
      name: this.product.name,
      description: this.product.description,
    };

    this.productService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: '',
      description: '',
      available: false,
    };
  }
}
