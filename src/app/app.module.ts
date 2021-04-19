import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FashionComponent } from './view-product/fashion/fashion.component';
import { ElectronicsComponent } from './view-product/electronics/electronics.component';
import { GroceriesComponent } from './view-product/groceries/groceries.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewProductComponent,
    HeaderComponent,
    FooterComponent,
    FashionComponent,
    ElectronicsComponent,
    GroceriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '', component: AddProductComponent
    },
    {
      path: 'view', component: ViewProductComponent,
      children: [
        { path: 'electronics', component: ElectronicsComponent },
        { path: 'fashion', component: FashionComponent },
        { path: 'groceries', component: GroceriesComponent }]
    },
    {
      path: 'add', component: AddProductComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
