import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes : string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado:string = '';

  borrarHeroe(){
    //Ponemos el vacio para que cuando le de la ultima vez se borre tambien y lo deje como vacio
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
