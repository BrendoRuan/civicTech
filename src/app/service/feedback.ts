import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback/feedback-module';


@Injectable({
  providedIn: 'root',
})
export class FeedbackService {

  private http = inject(HttpClient);

  private API =
    'https://civictechback.onrender.com/feedbacks';

  listar(): Observable<Feedback[]> {

    return this.http.get<Feedback[]>(
      `${this.API}/listar`
    );
  }

  criar(
    feedback: Feedback
  ): Observable<Feedback> {

    return this.http.post<Feedback>(
      `${this.API}/criar`,
      feedback
    );
  }

  atualizar(
    id: number,
    feedback: Feedback
  ): Observable<Feedback> {

    return this.http.put<Feedback>(
      `${this.API}/atualizar/${id}`,
      feedback
    );
  }

  deletar(
    id: number
  ): Observable<void> {

    return this.http.delete<void>(
      `${this.API}/deletar/${id}`
    );
  }
}
