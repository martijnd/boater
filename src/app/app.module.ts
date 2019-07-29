import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BoatSelectionComponent } from './boat-selection/boat-selection.component';
import { SelectionCardComponent } from './boat-selection/selection-card/selection-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoatSelectionComponent,
    SelectionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
