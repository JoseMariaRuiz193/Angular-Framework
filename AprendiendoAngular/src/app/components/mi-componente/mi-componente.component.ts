import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente {

    public titulo: string;
    public comentario: string;
    public fecha: number;
    public mostrarPeliculas: boolean;

    constructor() {
        this.titulo = 'Angular';
        this.comentario = 'Master en Frameworks';
        this.fecha = 2020;
        this.mostrarPeliculas = true;

    }

ocultarPeliculas(){
    this.mostrarPeliculas = false;
}

}