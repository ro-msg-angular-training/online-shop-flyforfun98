import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../models/product';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/state/app.state';
import {selectSelectedProduct} from '../../store/selectors/product.selectors';
import {UpdateProduct} from '../../store/actions/product.actions';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css',
    '../product-details/product-details.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private store: Store<IAppState>) {
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
    this.productId = this.route.snapshot.params.id;
    this.store.select(selectSelectedProduct).subscribe(product => {
      this.product = product;
      this.productName.setValue(this.product.name);
      this.productCategory.setValue(this.product.category);
      this.productPrice.setValue(this.product.price);
      this.productImage.setValue(this.product.image);
      this.productDescription.setValue(this.product.description);
    });

  }

  submitFormData() {
    const editedProduct = new Product();
    editedProduct.id = this.productId;
    editedProduct.name = this.productName.value;
    editedProduct.price = this.productPrice.value;
    editedProduct.description = this.productDescription.value;
    editedProduct.category = this.productCategory.value;
    editedProduct.image = this.productImage.value;


    this.store.dispatch(new UpdateProduct(editedProduct));
  }

  goBack() {
    this.router.navigate(['products/' + this.productId]);
  }
}
