import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: "Home - Arnaud Robot's shop",
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    title: "Catalog - Arnaud Robot's shop",
  },
  {
    path: 'cart',
    component: CartComponent,
    title: "Cart - Arnaud Robot's shop",
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    title: "Sign In - Arnaud Robot's shop",
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: "Register - Arnaud Robot's shop",
  },
  {
    path: 'form-controls',
    component: TemplateFormControlsComponent,
    title: "Form Controls - Arnaud Robot's shop",
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
