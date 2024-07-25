import { Routes } from '@angular/router';
import { LoginUsuarioComponent } from './component/login-usuario/login-usuario.component';

export const routes: Routes = [
  { path: '', component: LoginUsuarioComponent }, // Ruta principal que muestra el formulario de inicio de sesión
  { path: 'login', component: LoginUsuarioComponent } // Ruta explícita para /login que también muestra el formulario de inicio de sesión
];
