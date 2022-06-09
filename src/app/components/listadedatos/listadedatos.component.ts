import { RegisterComponent } from './../register/register.component';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';
import { CharacterInterface } from 'src/app/models/charactersInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadedatos',
  templateUrl: './listadedatos.component.html',
  styleUrls: ['./listadedatos.component.scss']
})
export class ListadedatosComponent implements OnInit {
//Creamos la lista (un array) de personajes que serán del tipo *Characterinterface* y en principio vacio
  public characterList: CharacterInterface[] = [];
  //Nos traemos el servicio RickandmortyService para poder inyectar al array los valores 
  constructor(private rickAndMortyService: RickandmortyService) { }

  ngOnInit(): void {
    //Ejecutamos la función getCharacters() y lo que nos devuelve es un *observable* y para tener la info todo el rato necesito suscribirme y generar esos datos y lo que obtenemos es un *data*
    this.rickAndMortyService.getCharacters().subscribe((data: any) => {
      //Creamos una constante nueva *charactersAPI* que será un array de tipo characterinterface pero tenermos que extraer de ahí los datos que queremos con un mapeo y generamos un objeto nuevo
      const charactersAPI: CharacterInterface[] = data.results.map((character: any) => ({ name: character.name, status: character.status, image: character.image }));
      this.characterList = charactersAPI
    })
  }
}
