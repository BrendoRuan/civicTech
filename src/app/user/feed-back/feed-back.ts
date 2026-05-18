import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FeedbackService } from '../../service/feedback';
import { Feedback } from '../../models/feedback/feedback-module';

import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './feed-back.html',
  styleUrl: './feed-back.scss'
})
export class FeedBack
implements OnInit {

  feedbacks =
    signal<Feedback[]>([]);

  feedback: Feedback = {

    nomeUsuario: '',
    comentario: '',
    nota: 0
  };

  constructor(
    private service: FeedbackService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.listar();
  }

  irParaHome() {
  this.router.navigate(['/home']); // ajuste a rota se necessário
}

  listar() {

    this.service.listar()
      .subscribe(res => {

        this.feedbacks.set(res);
      });
  }

  enviar() {

    if (
      !this.feedback.nomeUsuario ||
      !this.feedback.comentario ||
      this.feedback.nota <= 0
    ) {

      alert(
        'Preencha todos os campos'
      );

      return;
    }

    this.service.criar(
      this.feedback
    ).subscribe(() => {

      alert(
        'Feedback enviado com sucesso'
      );

      this.resetarFormulario();

      this.listar();
    });
  }

  resetarFormulario() {

    this.feedback = {

      nomeUsuario: '',
      comentario: '',
      nota: 0
    };
  }
  
}