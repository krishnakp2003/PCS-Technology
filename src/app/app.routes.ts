import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: 'header',
       loadComponent: () => import('./header/header.component').then(m => m.HeaderComponent)
    },
    {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    }
];
@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppRoutes {
   
}