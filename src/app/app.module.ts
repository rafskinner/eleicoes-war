import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BocaUrnaComponent } from './boca-urna/boca-urna.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { Routes, RouterModule } from '@angular/router';
import { CargoComponent } from './cargo/cargo.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'candidatos', component: CandidatosComponent },
  { path: 'boca-urna', component: BocaUrnaComponent },
  { path: 'candidatos/:cargo', component: CargoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BocaUrnaComponent,
    CandidatosComponent,
    CargoComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
