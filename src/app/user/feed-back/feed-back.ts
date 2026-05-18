import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-back',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './feed-back.html',
  styleUrl: './feed-back.scss',
})
export class FeedBack {

  private router = inject(Router);

  private http = inject(HttpClient);

  api =
  'https://civictechback.onrender.com/feedbacks';

  loading = false;

  feedback: any = {

    nomeUsuario: '',

    pergunta1: 5,
    pergunta2: 5,
    pergunta3: 5,
    pergunta4: 5,
    pergunta5: 5,
    pergunta6: 5,
    pergunta7: 5,
    pergunta8: 5,
    pergunta9: 5,
    pergunta10: 5,

    nota: 5,

    comentario: ''
  };

  enviar() {

    this.loading = true;

    this.http.post(
      `${this.api}/criar`,
      this.feedback
    )
    .subscribe({

      next: () => {

        this.loading = false;

        alert(
          'Feedback enviado!'
        );

        this.router.navigate([
          '/home'
        ]);
      },

      error: (err) => {

        this.loading = false;

        console.error(err);

        alert(
          'Erro ao enviar feedback'
        );
      }
    });
  }

  voltar() {

    this.router.navigate([
      '/home'
    ]);
  }
}
