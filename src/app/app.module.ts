import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ShowScoreComponent } from './show-score/show-score.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { TwowayComponent } from './twoway/twoway.component';
import { SearchComponent } from './search/search.component';
import { MyfilterPipe } from './myfilter.pipe';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AddScoresComponent } from './add-scores/add-scores.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { MenuComponent } from './menu/menu.component';
import { CustomerComponent } from './customer/customer.component';
import { DriverComponent } from './driver/driver.component';
import { DriverfilterPipe } from './driverfilter.pipe';
//import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    ShowScoreComponent,
    FooterComponentComponent,
    TwowayComponent,
    SearchComponent,
    MyfilterPipe,
    RegisterUserComponent,
    AddScoresComponent,
    HeaderComponentComponent,
    MenuComponent,
    CustomerComponent,
    DriverComponent,
    DriverfilterPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
