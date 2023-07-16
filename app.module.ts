import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { MyCartComponent } from './my-cart/my-cart.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    ShoppingFormComponent,
    ShoppingListComponent,
    ShoppingItemComponent,
    MyCartComponent,
    
    
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
