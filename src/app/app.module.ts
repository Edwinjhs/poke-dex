import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyteamComponent } from './components/myteam/myteam.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { YourteamComponent } from './components/yourteam/yourteam.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonesComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MyteamComponent,
    YourteamComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
