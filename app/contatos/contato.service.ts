import {Injectable} from '@angular/core';
import { Contato } from "./contato.model";
import { CONTATOS } from "./contatos.mock";
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ContatosListaComponent } from './contatos-lista.component';
@Injectable()

export class ContatoService {

    private apiUrl: string = 'app/contatos';
    constructor(
        private http:Http
    ){}

    getContatos(): Promise<Contato[]>{
        return this.http.get(this.apiUrl)
                .toPromise()
                .then(response => response.json().data as Contato[])
                .catch(this.error);

        //return Promise.resolve(CONTATOS);
    }

    private error(err: any): Promise<any>{
        console.log('Erro: ', err);
        return Promise.reject(err.messege || err);
    }

    getContato(id: number): Promise<Contato>{
        return this.getContatos()
            .then((contato: Contato[]) => {
                return contato.find((contato) => {
                    return contato.id === id
                });
            })
    }
    // Teste para simular o funcionamento do promise
    getContatosSlow(): Promise<Contato[]>{
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        })
        .then(() => {
            console.log("Primeiro then");
            return 'Angular 2 - Promise';
        })
        .then((params: string) => {
            console.log("Segundo then");
            console.log(params);
        })
        .then(() => {
            console.log("Terceiro then");
            return this.getContatos();
        });
    }
}