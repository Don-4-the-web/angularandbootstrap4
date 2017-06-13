import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { Nav1Component } from './siteComponents/nav-1/nav-1.component';
import { Jumbotron1Component } from './siteComponents/jumbotron-1/jumbotron-1.component';
import { Carousel1Component } from './siteComponents/carousel-1/carousel-1.component';
import { Accordion1Component } from './siteComponents/accordion-1/accordion-1.component';
import { Tabset1Component } from './siteComponents/tabset-1/tabset-1.component';

@NgModule({
  declarations: [
    AppComponent,
    Nav1Component,
    Jumbotron1Component,
    Carousel1Component,
    Accordion1Component,
    Tabset1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
