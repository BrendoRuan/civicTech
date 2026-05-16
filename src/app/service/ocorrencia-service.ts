
import { Injectable, inject } from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable,
  of
} from 'rxjs';

import {
  tap
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

  private http = inject(HttpClient);

  private api =
  'https://civictechback.onrender.com/ocorrencias';

  // CACHE
  private ocorrenciasCache: any[] = [];

  // LISTAR
  listar(): Observable<any> {

    // RETORNA CACHE
    if (this.ocorrenciasCache.length > 0) {

      console.log('USANDO CACHE');

      return of(this.ocorrenciasCache);
    }

    // API
    return this.http
      .get(`${this.api}/listar`)
      .pipe(

        tap((res: any) => {

          console.log('SALVANDO CACHE');

          this.ocorrenciasCache = res;
        })
      );
  }

  // LIMPAR CACHE
  limparCache() {

    this.ocorrenciasCache = [];
  }

  // CRIAR
  criar(body: any) {

    return this.http
      .post(
        `${this.api}/criar`,
        body
      )
      .pipe(

        tap(() => {

          // ATUALIZA LISTA
          this.limparCache();
        })
      );
  }

  // BUSCAR POR ID
  buscarPorId(id: number) {

    return this.http.get(
      `${this.api}/buscarID/${id}`
    );
  }

  // BUSCAR POR TITULO
  buscarPorTitulo(titulo: string) {

    return this.http.get(
      `${this.api}/buscar?titulo=${titulo}`
    );
  }

  // ATUALIZAR
  atualizar(id: number, body: any) {

    return this.http
      .put(
        `${this.api}/atualizar/${id}`,
        body
      )
      .pipe(

        tap(() => {

          this.limparCache();
        })
      );
  }

  // ALTERAR STATUS
  alterarStatus(
    id: number,
    status: string
  ) {

    return this.http
      .patch(
        `${this.api}/${id}/status`,
        { status }
      )
      .pipe(

        tap(() => {

          this.limparCache();
        })
      );
  }

  // DELETAR
  deletar(id: number) {

    return this.http
      .delete(
        `${this.api}/deletar/${id}`
      )
      .pipe(

        tap(() => {

          this.limparCache();
        })
      );
  }

  // UPLOAD IMAGEM
  uploadImagem(file: File) {

    const formData = new FormData();

    formData.append('file', file);

    return this.http.post(
      `${this.api}/upload/imagem`,
      formData,
      {
        responseType: 'text'
      }
    );
  }

  // UPLOAD VIDEO
  uploadVideo(file: File) {

    const formData = new FormData();

    formData.append('file', file);

    return this.http.post(
      `${this.api}/upload/video`,
      formData,
      {
        responseType: 'text'
      }
    );
  }
}