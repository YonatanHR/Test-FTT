import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomRequest, Imagenes, ResponseAllPhotos } from '../interfaces/request.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY: string = "38592644-06c2e1bc8731f105a65fce2a3";
  baseURl: string = "https://pixabay.com/api/";

  constructor(
    private httpClient: HttpClient,
  ) { }

  generalRequest<T>(request: CustomRequest) {
    return this.httpClient.request<T>(
      request.method,
      `${this.baseURl}`,
      {
        body: request.body,
        headers: request.headers,
        params: request.params,
        withCredentials: false
      }
    );
  }

  consultaFotos() {
    const request: CustomRequest = {
      url: '',
      method: 'GET',
      params: {
        key: this.API_KEY,
        lang: "es"
      }
    }
    return this.generalRequest<ResponseAllPhotos>(request)
  }

  consultaFotosById(id: number) {
    const request: CustomRequest = {
      url: '',
      method: 'GET',
      params: {
        key: this.API_KEY,
        lang: "es",
        id,
      }
    }
    return this.generalRequest<ResponseAllPhotos>(request)
  }

}
