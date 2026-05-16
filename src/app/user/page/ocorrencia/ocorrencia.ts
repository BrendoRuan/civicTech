import {
  Component,
  OnInit,
  inject
} from '@angular/core';

import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { OcorrenciaService } from '../../../service/ocorrencia-service';



@Component({
  selector: 'app-ocorrencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ocorrencia.html',
  styleUrl: './ocorrencia.scss',
})
export class Ocorrencia implements OnInit {

  private router = inject(Router);

  private service = inject(OcorrenciaService);

  ocorrencias: any[] = [];

  loading = true;

  ngOnInit(): void {

    this.carregarOcorrencias();
  }

  carregarOcorrencias() {

    this.service.listar()
      .subscribe({

        next: (res: any) => {

          this.ocorrencias = res;

          this.loading = false;

          console.log(res);
        },

        error: (err) => {

          this.loading = false;

          console.error(err);
        }
      });
  }

  irParaHome() {
    this.router.navigate(['/home']);
  }
}