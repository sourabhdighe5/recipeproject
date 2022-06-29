import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipecreateComponent } from './recipecreate/recipecreate.component';

@NgModule({
  declarations: [AppComponent, RecipecreateComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    NgbModule, 
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
