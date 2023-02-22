import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ErrorComponent } from './error/error.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { AlterBackgroundDirective } from './alter-background.directive';
import { LoginComponent } from './login/login.component';
import { ParenttochildComponent } from './parenttochild/parenttochild.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { ProductService } from './api/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    HomeServicesComponent,
    ServicesComponent,
    ProductsComponent,
    ClientsComponent,
    ContactComponent,
    HomeComponent,
    ProductdetailsComponent,
    ErrorComponent,
    DatabindingComponent,
    AlterBackgroundDirective,
    LoginComponent,
    ParenttochildComponent,
    ChildtoparentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
