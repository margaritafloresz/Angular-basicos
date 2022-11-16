import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {
//Heroe es un arreglo de string inicializado con
  heroes: string [] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America']
  heroeBorrado : string = '';

  borrarHeroe(){
    this.heroeBorrado =  this.heroes.shift() || '';
  }
}
