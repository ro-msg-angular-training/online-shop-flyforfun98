import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css',
    '../product-details/product-details.component.css',
    '../product-edit/product-edit.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private productService: ProductService) {
  }


  productForm = this.formBuilder.group({
    productName: new FormControl('', [
      Validators.required
    ]),
    productCategory: new FormControl('', [
      Validators.required
    ]),
    productImage: [''],
    productPrice: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+')
    ]),
    productDescription: ['']
  });

  product: Product;
  productId: number;

  get productName() {
    return this.productForm.get('productName');
  }

  get productCategory() {
    return this.productForm.get('productCategory');
  }

  get productImage() {
    return this.productForm.get('productImage');
  }

  get productPrice() {
    return this.productForm.get('productPrice');
  }

  get productDescription() {
    return this.productForm.get('productDescription');
  }

  ngOnInit() {
  }

  submitFormData() {

    const newProduct = new Product();
    newProduct.name = this.productName.value;
    newProduct.price = this.productPrice.value;
    newProduct.description = this.productDescription.value;
    newProduct.category = this.productCategory.value;
    newProduct.image = this.productImage.value;

    this.productService.createProduct(newProduct).subscribe(() =>
      this.router.navigate(['products'])
    );
  }

  goBack() {
    this.router.navigate(['products']);
  }

}
