import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SizingGuideComponent } from './sizing-guide/sizing-guide.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { Error404Component } from './error-404/error-404.component';
import { ProductOneRowComponent } from './product-one-row/product-one-row.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';




export const routes: Routes = [

  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'index', component: IndexComponent},
  { path: '', component: IndexComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'product', component: ProductOneRowComponent},
  { path: 'customerservice', component: CustomerServiceComponent},
  { path: 'error', component: Error404Component},
  { path: 'comingsoon', component: ComingSoonComponent},
  { path: 'sizingguide', component: SizingGuideComponent}
    
];

