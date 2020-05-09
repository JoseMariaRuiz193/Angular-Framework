import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula} from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;
  public fecha: any;
  constructor(
    private _peliculaService: PeliculaService
  ) {
    this.titulo = "Componente peliculas";
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020, 3, 28);
  }
  ngOnInit(): void {
    console.log('componente iniciado')
    console.log(this._peliculaService.holaMundo());

  }
  ngDoCheck() {
    console.log('doCheck lanzado');
  }
  cambiarTitulo() {
    this.titulo = 'El titulo ha sido cambiado!!';
  }

  ngOnDestroy() {
    console.log('el componente se va a ELIMINAR')

  }
mostrarFavorita(event){
this.favorita=event.pelicula;
}



}
