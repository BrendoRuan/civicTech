import { Routes } from '@angular/router';
import { Home } from './user/page/home/home';
import { Registrar } from './user/page/registrar/registrar';
import { Ocorrencia } from './user/page/ocorrencia/ocorrencia';
import { Perfil } from './user/page/perfil/perfil';
import { FeedBack } from './user/feed-back/feed-back';
import { AdminOcorrencias } from './user/admin/admin-ocorrencias/admin-ocorrencias';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: Home},
    {path: 'registrar', component: Registrar},
    {path: 'ocorrencia', component: Ocorrencia},
    {path: 'perfil', component: Perfil},
    {path: 'feedback', component: FeedBack},
    {path: 'admin', component: AdminOcorrencias}
];
