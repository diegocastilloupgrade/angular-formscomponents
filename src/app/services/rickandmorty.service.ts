import { Injectable } from '@angular/core';
//Importamos el módulo HttpClient para poder hacer una llamada
import { HttpClient } from '@angular/common/http';
//Nos trameos un observable de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RickandmortyService {
  public baseURL: string = 'https://rickandmortyapi.com/api';
  public characterURL: string = `${this.baseURL}/character`
  public locationURL: string = `${this.baseURL}/location`

  constructor(private httpClient: HttpClient) { }

  //Para poder hacer una petición http necesito almacenar en mi constructor el httpclient
  public getCharacters():Observable <any>{
    //Creamos una función **getCharacters()** de tipo *Observable* que me haga un get http a esa url. Esta fución retornará una llamada get a *characterURL*
    return this.httpClient.get(this.characterURL)
  }
  public getLocations(): Observable<any> {
    return this.httpClient.get(this.locationURL)
  }
}
 