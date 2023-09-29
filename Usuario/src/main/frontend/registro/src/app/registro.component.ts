import { Component } from '@angular/core';
import { UsuarioService }

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent {
  usuario = {
    nome: '',
    email: '',
    senha: '',
    confirmacaoSenha: '',
  };

  constructor(private usuarioService: UsuarioService) {}

  registrarUsuario() {
    this.usuarioService.registrarUsuario(this.usuario).subscribe(
      (response) => {
        console.log('Usuário registrado com sucesso');
      },
      (error) => {
        console.error('Erro no registro do usuário');
      }
    );
  }
}
