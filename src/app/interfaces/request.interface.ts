import { HttpHeaders, HttpParams } from "@angular/common/http";

export interface CustomRequest {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
}

export interface ResponseAllPhotos {
  total: number,
  totalHits: number,
  hits: Imagenes[],
}

export interface Imagenes {
  id: number,
  pageURL: string,
  type: string,
  tags: string,
  previewURL: string,
  previewWidth: number,
  previewHeight: number,
  webformatURL: string,
  webformatWidth: number,
  webformatHeight: number,
  largeImageURL: string,
  fullHDURL: string,
  imageURL: string,
  imageWidth: number,
  imageHeight: number,
  imageSize: number,
  views: number,
  downloads: number,
  likes: number,
  comments: number,
  user_id: number,
  user: string,
  userImageURL: string,
}