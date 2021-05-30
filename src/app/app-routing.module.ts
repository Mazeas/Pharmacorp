import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DrugComponent } from './drug/drug.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CreateDrugComponent } from './create-drug/create-drug.component';
import { CreateCommandComponent } from './create-command/create-command.component';
import { CommandComponent } from './command/command.component';




const routes: Routes = [
  { path:'', component:SignInComponent},
  { path:'users', component:IndexComponent},
  { path: 'drugs', component:DrugComponent},
  { path: 'create_drug', component:CreateDrugComponent},
  { path: 'create_command', component:CreateCommandComponent},
  { path: 'commands', component:CommandComponent},
  { path: 'signup', component:SignUpComponent},
  { path: 'signin', component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
