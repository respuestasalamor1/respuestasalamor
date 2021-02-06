import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.scss']
})
export class ContactenosComponent implements OnInit {
  nombre?: string;
  correo?: string;
  telefono?: string;
  mensaje?: string;
  emailEmpresa?: string;
  asunto?: string;
  mensajeAEnviar?: string;
  constructor() {
  }


  ngOnInit(): void {
  }

  enviarEmail() {
    this.emailEmpresa = 'respuestasalamor1@gmail.com';
    this.asunto = 'Consulta%20con%20el%20maestro';
    this.mensajeAEnviar = 'Hola, soy ' + this.nombre + ', quisiera consultar con el maestro, mi numero telefonico es ' + this.telefono + ' y mi correo electronico es ' + this.correo;
    const mailTo = 'mailto:' + this.emailEmpresa + '?subject=' + this.asunto + '&body=' + this.mensajeAEnviar;
    window.open(mailTo);
  }

}
