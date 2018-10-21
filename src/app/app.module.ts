import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { IntroductionComponent } from './chapter/introduction/introduction.component';
import { SetupComponent } from './chapter/setup/setup.component';
import { ComponentsComponent } from './chapter/components/components.component';
import { DataBindingComponent } from './chapter/data-binding/data-binding.component';
import { DirectivesComponent } from './chapter/directives/directives.component';
import { ComponentsIIComponent } from './chapter/components-ii/components-ii.component';
import { ServicesComponent } from './chapter/services/services.component';
import { RoutingComponent } from './chapter/routing/routing.component';
import { HtmlFormsComponent } from './chapter/html-forms/html-forms.component';
import { PipesComponent } from './chapter/pipes/pipes.component';
import { HttpRequestsComponent } from './chapter/http-requests/http-requests.component';
import { ApendicesComponent } from './chapter/apendices/apendices.component';
import { TestComponent } from './test/test.component';
import { CustomDirectivesComponent } from './chapter/custom-directives/custom-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    IntroductionComponent,
    SetupComponent,
    ComponentsComponent,
    DataBindingComponent,
    DirectivesComponent,
    ComponentsIIComponent,
    ServicesComponent,
    RoutingComponent,
    HtmlFormsComponent,
    PipesComponent,
    HttpRequestsComponent,
    ApendicesComponent,
    TestComponent,
    CustomDirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
