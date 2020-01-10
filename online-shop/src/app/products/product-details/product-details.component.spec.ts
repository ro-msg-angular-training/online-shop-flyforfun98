import {TestBed} from '@angular/core/testing';
import {ProductDetailsComponent} from './product-details.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterModule} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreModule} from '@ngrx/store';
import {appReducers} from '../../store/reducers/app.reducers';
import {Product} from '../../models/product';
import {AuthService} from '../../login-page/auth.service';
import {AppConfig} from '../../app.config';
import {AuthUser} from '../../models/auth-user';


describe('ProductDetailsComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductDetailsComponent,
      ],
      imports: [
        MatFormFieldModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule,
        StoreModule.forRoot(appReducers)
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProductDetailsComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('product should have a title and description', () => {
    const fixture = TestBed.createComponent(ProductDetailsComponent);
    const comp = fixture.debugElement.componentInstance;

    const authService = fixture.debugElement.injector.get(AuthService);
    const user = {} as AuthUser;
    user.roles = [AppConfig.ROLE_ADMIN];
    authService.user = user;

    comp.product = {} as Product;
    comp.product.name = 'Laptop X';
    comp.product.description = 'Best laptop in the world!';

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(comp.product.name);
    expect(compiled.querySelector('p').textContent).toContain(comp.product.description);

  });

});
