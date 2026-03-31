import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ocorrencia',
  imports: [],
  templateUrl: './ocorrencia.html',
  styleUrl: './ocorrencia.scss',
})
export class Ocorrencia {
    constructor(private router: Router) {}

  irParaHome() {
    this.router.navigate(['/home']);
  }

}
