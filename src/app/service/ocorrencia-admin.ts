import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ocorrencia } from '../models/ocorrencia/ocorrencia-module';

@Injectable({
  providedIn: 'root',
})
export class OcorrenciaAdmin {

  private http = inject(HttpClient);

  private API =
    'https://civictechback.onrender.com/ocorrencias';

  listar(): Observable<Ocorrencia[]> {
    return this.http.get<Ocorrencia[]>(
      `${this.API}/listar`
    );
  }

  buscar(titulo: string): Observable<Ocorrencia[]> {
    return this.http.get<Ocorrencia[]>(
      `${this.API}/buscar?titulo=${titulo}`
    );
  }

  atualizar(
    id: number,
    ocorrencia: Ocorrencia
  ): Observable<Ocorrencia> {

    return this.http.put<Ocorrencia>(
      `${this.API}/atualizar/${id}`,
      ocorrencia
    );
  }

  alterarStatus(
    id: number,
    status: string
  ): Observable<Ocorrencia> {

    return this.http.patch<Ocorrencia>(
      `${this.API}/${id}/status`,
      { status }
    );
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.API}/deletar/${id}`
    );
  }

  uploadImagem(
    file: File
  ): Observable<string> {

    const formData = new FormData();

    formData.append('file', file);

    return this.http.post(
      `${this.API}/upload/imagem`,
      formData,
      {
        responseType: 'text'
      }
    );
  }

  uploadVideo(
    file: File
  ): Observable<string> {

    const formData = new FormData();

    formData.append('file', file);

    return this.http.post(
      `${this.API}/upload/video`,
      formData,
      {
        responseType: 'text'
      }
    );
  }
}
