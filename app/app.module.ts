import { NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component';
import {ContatosModule} from './contatos/contatos.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({ // indica que este é o módulo da aplicação
    imports: [
        AppRoutingModule,
        BrowserModule,
        ContatosModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}