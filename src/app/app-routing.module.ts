import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Farmer } from './models/farmer';
import { FarmerComponent } from './farmer/farmer.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'',component:FarmerComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
