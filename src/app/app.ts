import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import {
  Router,
  RouterOutlet,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  constructor(
    private router: Router
  ) {}

  protected readonly title =
    signal('civicTech');

  menuFechado = false;

  // CONTROLE LOGIN ADMIN
  senhaAdmin = '';

  acessoAdmin = localStorage.getItem('admin') === 'true';

  // Simulação (depois vem do Supabase)
  isAdmin = false;


toggleMenu() {
  this.menuFechado = !this.menuFechado;
}

// detecta mobile
isMobile() {
  return window.innerWidth <= 768;
}
  irParaRegistrar() {

    this.router.navigate([
      '/registrar'
    ]);
  }

  irParaOcorrencia() {

    this.router.navigate([
      '/ocorrencia'
    ]);
  }

  irParaPerfil() {

    this.router.navigate([
      '/perfil'
    ]);
  }

  irParaHome() {

    this.router.navigate([
      '/home'
    ]);
  }

  // LOGIN ADMIN SIMPLES
  irParaAdmin() {

    // JA ESTA LOGADO
    if (this.acessoAdmin) {

      this.router.navigate([
        '/admin'
      ]);

      return;
    }

    // PEDE SENHA
    const senha =
      prompt('Digite a senha do administrador');

    if (!senha) return;

    // SENHA
    if (senha === 'civic123') {

      this.acessoAdmin = true;

      this.router.navigate([
        '/admin'
      ]);

      return;
    }

    alert('Senha incorreta');
  }

  logoutAdmin() {

    this.acessoAdmin = false;

    this.router.navigate([
      '/home'
    ]);
  }
}