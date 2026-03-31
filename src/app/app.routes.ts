import { Routes } from '@angular/router';
import { Home } from './user/page/home/home';
import { Registrar } from './user/page/registrar/registrar';
import { Ocorrencia } from './user/page/ocorrencia/ocorrencia';
import { Perfil } from './user/page/perfil/perfil';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: Home},
    {path: 'registrar', component: Registrar},
    {path: 'ocorrencia', component: Ocorrencia},
    {path: 'perfil', component: Perfil}
];
