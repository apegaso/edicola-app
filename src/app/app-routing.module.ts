import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GvButtonsComponent } from './components/gv-buttons/gv-buttons.component';
import { GvVendutiComponent } from './components/gv-venduti/gv-venduti.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gv-buttons', component: GvButtonsComponent },
  { path: 'gv-venduti', component: GvVendutiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
