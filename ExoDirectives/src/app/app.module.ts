import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FruitlistComponent } from './fruitlist/fruitlist.component';
import { TacheComponent } from './tache/tache.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    FruitlistComponent,
    TacheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
