"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
let ContatoService = class ContatoService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'app/contatos';
    }
    getContatos() {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.error);
        //return Promise.resolve(CONTATOS);
    }
    error(err) {
        console.log('Erro: ', err);
        return Promise.reject(err.messege || err);
    }
    getContato(id) {
        return this.getContatos()
            .then((contato) => {
            return contato.find((contato) => {
                return contato.id === id;
            });
        });
    }
    // Teste para simular o funcionamento do promise
    getContatosSlow() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        })
            .then(() => {
            console.log("Primeiro then");
            return 'Angular 2 - Promise';
        })
            .then((params) => {
            console.log("Segundo then");
            console.log(params);
        })
            .then(() => {
            console.log("Terceiro then");
            return this.getContatos();
        });
    }
};
ContatoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ContatoService);
exports.ContatoService = ContatoService;
//# sourceMappingURL=contato.service.js.map