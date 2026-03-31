import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  imports: [],
  templateUrl: './registrar.html',
  styleUrl: './registrar.scss',
})
export class Registrar {
    constructor(private router: Router) {}

  irParaHome() {
    this.router.navigate(['/home']);
  }
}
