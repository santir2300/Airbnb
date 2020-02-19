import { RouterModule, Routes  } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const APP_ROUTES: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home' },
    {path: 'home', component: HomeComponent },
    {path: 'register', component: RegisterComponent },
    {path: 'login', component: LoginComponent },
    {path: 'dashboard', component: DashboardComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
