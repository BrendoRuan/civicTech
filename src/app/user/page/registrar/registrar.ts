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

  irParaHome() {
    this.router.navigate(['/home']);
  }

  selecionarImagem(event: any) {

    this.imagemSelecionada =
      event.target.files[0];
  }

  criarOcorrencia() {

    this.loading = true;

    const executarCriacao = (
      imagemUrl: string
    ) => {

      const body = {

        titulo: this.titulo,
        descricao: this.descricao,
        categoria: this.categoria,

        imagemUrl: imagemUrl || null,

        latitude: -8.0476,
        longitude: -34.8770,

        nomeUsuario: 'Brendo'
      };

      console.log('BODY:', body);

      this.service.criar(body).subscribe({

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
    };

    // SE EXISTE IMAGEM
    if (this.imagemSelecionada) {

      this.service
        .uploadImagem(this.imagemSelecionada)
        .subscribe({

          next: (res: any) => {

            console.log('UPLOAD:', res);

            executarCriacao(res.url);
          },

          error: (err) => {

            this.loading = false;

            console.error(err);

            alert('Erro ao enviar imagem');
          }
        });

    } else {

      executarCriacao('');
    }
  }
}