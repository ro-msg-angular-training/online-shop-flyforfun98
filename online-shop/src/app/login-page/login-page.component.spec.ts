import {TestBed} from '@angular/core/testing';
import {LoginPageComponent} from './login-page.component';
import {AuthService} from './auth.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterModule} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreModule} from '@ngrx/store';
import {appReducers} from '../store/reducers/app.reducers';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthUser} from '../models/auth-user';
import {of} from 'rxjs';


describe('LoginPageComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginPageComponent,
      ],
      imports: [
        MatFormFieldModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule,
        StoreModule.forRoot(appReducers),
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginPageComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('no user should be logged in', () => {
    const fixture = TestBed.createComponent(LoginPageComponent);
    const authService = fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
    expect(authService.user).toEqual(null);
  });

  it('user with role *admin* should log in', (done) => {
    const fixture = TestBed.createComponent(LoginPageComponent);
    const authService = fixture.debugElement.injector.get(AuthService);

    const username = 'blackj';
    const password = '12345678';

    const authUser = new AuthUser();
    authUser.username = 'blackj';
    authUser.fullname = 'Jack Black';
    authUser.roles = ['user', 'admin'];

    // return authUser when username and password are correctly introduced
    const spy = spyOn(authService, 'authenticate').withArgs(username, password).and.returnValue(of(authUser));
    // apply custom password and username, if they do not match with those from above, test will fail in the call
    spy.apply(null, ['blackj', '12345678']);

    spy.calls.mostRecent().returnValue.subscribe(loggedUser => {
      fixture.detectChanges();
      expect(loggedUser).toEqual(authUser);
      done();
    });

  });
});
