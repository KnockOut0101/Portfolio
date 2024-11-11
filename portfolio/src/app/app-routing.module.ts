import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [
  {path:'', redirectTo:'profile', pathMatch:'full'},
  {path:'home', component: ProfileComponent},
  {path:'projects'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    onSameUrlNavigation:'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
