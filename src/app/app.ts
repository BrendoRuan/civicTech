import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

    constructor(private router: Router) {}
    
  protected readonly title = signal('civicTech');
  menuFechado = false;

// Simulação (depois vem do Supabase)
isAdmin = false;

toggleMenu() {
  this.menuFechado = !this.menuFechado;
}

irParaRegistrar() {
  this.router.navigate(['/registrar']);
}

irParaOcorrencia() {
  this.router.navigate(['/ocorrencia']);
}

irParaPerfil() {
  this.router.navigate(['/perfil']);
}

irParaHome() {
  this.router.navigate(['/home']);
}
}
