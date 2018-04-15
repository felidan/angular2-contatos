import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = 
[
    {
    path: '',
    redirectTo: 'contato',
    pathMatch: 'full'
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes) // forRoot, pois este é o modulo de rotas root
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}