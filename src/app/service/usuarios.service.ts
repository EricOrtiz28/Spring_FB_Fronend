import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../utils/backend-config';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrlUsuariosInsert = `${BASE_URL}/usuarios/insert`;

  constructor(private http: HttpClient) { }

  insertUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(this.apiUrlUsuariosInsert, usuario);
  }
}
