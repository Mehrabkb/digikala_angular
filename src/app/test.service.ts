import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient : HttpClient) { }
  getFilmsByPageNumber(pageNumber : number){
    return this.httpClient.get(`https://moviesapi.ir/api/v1/movies?page=${pageNumber}`);
  }
}
