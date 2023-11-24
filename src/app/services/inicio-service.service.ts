import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Maquina } from '../models/maquina';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InicioService {
  url: string =
    'https://app-academy-neu-codechallenge.azurewebsites.net/api/cut';

  private usuario = 'lantekacademy';
  private contraseña = ':cPIi<kyF(=5OXc';

  constructor(private _http: HttpClient) {}

  getMaquinas2D(): Observable<Maquina[]> {
    const encodedCredentials = btoa(`${this.usuario}:${this.contraseña}`);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${encodedCredentials}`,
      'Access-Control-Allow-Origin': '*',
    });
    return this._http.get<Maquina[]>(`${this.url}/2`, {
      headers,
    });
  }

  getMaquinas3D(): Observable<Maquina[]> {
    const encodedCredentials = btoa(`${this.usuario}:${this.contraseña}`);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${encodedCredentials}`,
      'Access-Control-Allow-Origin': '*',
    });
    return this._http.get<Maquina[]>(`${this.url}/3`, {
      headers,
    });
  }
}
