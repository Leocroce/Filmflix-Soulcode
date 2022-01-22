import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  baseUrl = 'https://api.themoviedb.org/3/';

  options = {
    api_key: 'abd034db77bbb70f0db16006fdf012fa',
    language: 'pt-br'
  }

  constructor() { }
}
