import {
  Component,
  inject,
  OnInit
} from '@angular/core';

import {
  Router,
  NavigationEnd
} from '@angular/router';

import { CommonModule } from '@angular/common';

import { filter } from 'rxjs/operators';

import { OcorrenciaService }
from '../../../service/ocorrencia-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  private router = inject(Router);

  private service = inject(OcorrenciaService);

  ocorrencias: any[] = [];

  totalOcorrencias = 0;

  totalResolvidas = 0;

  totalAndamento = 0;

  loading = true;

  constructor() {

    // RECARREGA SEMPRE QUE VOLTAR PRA HOME
    this.router.events
      .pipe(
        filter(
          event =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: any) => {

        // EVITA RECARREGAR EM OUTRAS ROTAS
        if (event.url === '/home') {

          this.carregarOcorrencias();
        }
      });
  }

  ngOnInit(): void {

    this.carregarOcorrencias();
  }

  carregarOcorrencias() {

    this.loading = true;

    this.service.listar()
      .subscribe({

        next: (res: any) => {

          console.log('OCORRÊNCIAS:', res);

          // GARANTE ARRAY
          this.ocorrencias = Array.isArray(res)
            ? res
            : [];

          // TOTAL
          this.totalOcorrencias =
            this.ocorrencias.length;

          // RESOLVIDAS
          this.totalResolvidas =
            this.ocorrencias.filter(
              o => o?.status === 'RESOLVIDO'
            ).length;

          // EM ANDAMENTO + EM ANÁLISE
          this.totalAndamento =
            this.ocorrencias.filter(
              o =>

                o?.status === 'EM_ANDAMENTO' ||

                o?.status === 'EM_ANALISE'
            ).length;

          this.loading = false;

          console.log(
            'TOTAL:',
            this.totalOcorrencias
          );

          console.log(
            'RESOLVIDAS:',
            this.totalResolvidas
          );

          console.log(
            'ANDAMENTO:',
            this.totalAndamento
          );
        },

        error: (err) => {

          this.loading = false;

          console.error(
            'ERRO HOME:',
            err
          );
        }
      });
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

  irParaFeedback() {

    this.router.navigate([
      '/feedback'
    ]);
  }
}