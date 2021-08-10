import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material libs
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { UserCardComponent } from './user-card/user-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StoreModule } from '@ngrx/store';
import { UsersReducer } from './state/user.reducers';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserCardComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    StoreModule.forRoot({users: UsersReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
