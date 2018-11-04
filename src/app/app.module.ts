import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GvButtonsComponent } from './components/gv-buttons/gv-buttons.component';
import {MatButtonModule, MatCardModule, MatGridListModule, MatListModule, MatIconModule, MatSnackBarModule} from '@angular/material';

import 'hammerjs';
import { MatIcon } from '@angular/material';
import { GvVendutiComponent } from './components/gv-venduti/gv-venduti.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    GvButtonsComponent,
    GvVendutiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, MatCardModule, MatGridListModule, MatListModule, MatIconModule, MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
