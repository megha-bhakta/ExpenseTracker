import { Routes} from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AddexpenseComponent } from './Components/addexpense/addexpense.component';
import { ListexpenseComponent } from './Components/listexpense/listexpense.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component:HomeComponent},
    {path: 'expenses', component: ListexpenseComponent},
    {path: 'addexpense', component: AddexpenseComponent},
    {path: 'editexpense/:id', component: AddexpenseComponent},
    {path: 'login', component:LoginComponent}
];
