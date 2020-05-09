import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()

export class PeliculaService{
public peliculas: Pelicula[];

constructor(){
    this.peliculas = [
        new Pelicula("Batman: The Dark Knight",2008,'https://comicstores.es/PathImagen1/38924.jpg'),
        new Pelicula("Los vengadores: Endgame",2019,'https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic4.abc.es%2Fmedia%2Fpeliculas%2F000%2F052%2F759%2Fvengadores-endgame-1.jpg&nuevoancho=690&medio=abc'),
        new Pelicula('Con derecho a roce',2009,'../assets/images/con-derecho.jpg'),
      ];
}
    holaMundo(){
        return 'Hola';
    }
    getPeliculas(){
        return this.peliculas;
    }
}