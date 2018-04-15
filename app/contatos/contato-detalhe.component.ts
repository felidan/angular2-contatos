import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ContatoService } from "./contato.service";
import { Contato } from "./contato.model";

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'
    /*styles: [`
        .ng-valid[required]{
            border: 1px solid green;
        }
    `]*/
})
export class ContatoDetalheComponent implements OnInit{

    contato: Contato;
    isNew: Boolean = true;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
     ){}

    ngOnInit(): void{
        console.log("OnInit Detalhe component");
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id']; // + converte para number
            
            console.log(id);

            this.contato = new Contato(0, "", "", "");

            if(id){
                this.isNew = false;
                this.contatoService.getContato(id)
                    .then((contato: Contato)=>{
                        this.contato = contato;
                    })
            }
        });
    }

    getFormGroupClass(isValid: Boolean, isPristine: Boolean): {}{
        return {
            'form-control': true, 
            'is-invalid': (!isValid && !isPristine), 
            'is-valid': (isValid && !isPristine)
        };
    }

    onSubmit():void{
        if(this.isNew){

        }
        else{
            
        }
    }
}