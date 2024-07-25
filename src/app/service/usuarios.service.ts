import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BASE_URL } from '../utils/backend-config';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrlUsuariosInsert = `${BASE_URL}/usuarios/insert`;

  constructor(private http: HttpClient) { }

  insertUsuario(usuario: any): Observable<any> {
    return this.getUserIP().pipe(
      switchMap(ip => this.getUserLocation(ip).pipe(
        map(locacion => ({
          ...usuario,
          ip,
          locacion,
          dispositivo: this.getUserDevice()
        })),
        switchMap(usuarioCompleto => this.http.post<any>(this.apiUrlUsuariosInsert, usuarioCompleto))
      ))
    );
  }

  private getUserIP(): Observable<string> {
    return this.http.get<{ ip: string }>('https://api64.ipify.org?format=json').pipe(
      map(response => response.ip)
    );
  }

  private getUserLocation(ip: string): Observable<string> {
    return this.http.get<any>(`https://ipapi.co/${ip}/json/`).pipe(
      map(response => `${response.city}, ${response.country_name}`)
    );
  }

  private getUserDevice(): string {
    return navigator.userAgent;
  }
}
