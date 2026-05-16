import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OcorrenciaService } from '../../../service/ocorrencia-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar.html',
  styleUrl: './registrar.scss',
})
export class Registrar {
  private router = inject(Router);

  private service = inject(OcorrenciaService);

  titulo = '';

  descricao = '';

  categoria = '';

  localizacao = '';

  imagemSelecionada!: File;

  imagemUrl = '';

  loading = false;

  // VOLTAR
  irParaHome() {
    this.router.navigate(['/home']);
  }

  // SELECIONAR IMAGEM
  selecionarImagem(event: any) {

    this.imagemSelecionada =
      event.target.files[0];
  }

  // UPLOAD
  uploadImagem() {

    if (!this.imagemSelecionada) return;

    this.service
      .uploadImagem(this.imagemSelecionada)
      .subscribe({

        next: (url: string) => {

          this.imagemUrl = url;

          console.log(url);

          alert('Imagem enviada!');
        },

        error: (err) => {

          console.error(err);

          alert('Erro ao enviar imagem');
        }
      });
  }

  // CRIAR OCORRÊNCIA
  criarOcorrencia() {

    this.loading = true;

    const body = {

      titulo: this.categoria,

      descricao: this.descricao,

      categoria: this.categoria,

      imagemUrl: this.imagemUrl,

      latitude: -8.0476,

      longitude: -34.8770,

      nomeUsuario: 'Brendo'
    };

    this.service.criar(body)
      .subscribe({

        next: () => {

          this.loading = false;

          alert('Ocorrência criada!');

          this.router.navigate(['/home']);
        },

        error: (err) => {

          this.loading = false;

          console.error(err);

          alert('Erro ao criar ocorrência');
        }
      });
  }
}
