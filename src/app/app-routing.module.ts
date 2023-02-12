import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'services/:id' , component:ServicesComponent},
  {path:'products' , component:ProductsComponent,
  children: [
    { path: 'detail/:id', component: ProductdetailsComponent }
 ]
  },
  {
    path:"databinding", component: DatabindingComponent
  },
  {path:'clients' , component:ClientsComponent},
  {path:'contact' , component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:"**",component: ErrorComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
