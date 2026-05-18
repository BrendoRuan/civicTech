import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ocorrencia } from '../../../models/ocorrencia/ocorrencia-module';
import { OcorrenciaAdmin } from '../../../service/ocorrencia-admin';

@Component({
  selector: 'app-admin-ocorrencias',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-ocorrencias.html',
  styleUrl: './admin-ocorrencias.scss',
})
export class AdminOcorrencias implements OnInit {
    ocorrencias = signal<Ocorrencia[]>([]);

  busca = '';

  editando: Ocorrencia | null = null;

  constructor(
    private service: OcorrenciaAdmin
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.service.listar()
      .subscribe(res => {
        this.ocorrencias.set(res);
      });
  }

  buscar() {

    if (!this.busca.trim()) {
      this.listar();
      return;
    }

    this.service.buscar(this.busca)
      .subscribe(res => {
        this.ocorrencias.set(res);
      });
  }

  editar(ocorrencia: Ocorrencia) {
    this.editando = { ...ocorrencia };
  }

  salvar() {

    if (!this.editando?.id) return;

    this.service.atualizar(
      this.editando.id,
      this.editando
    ).subscribe(() => {

      alert('Atualizado com sucesso');

      this.editando = null;

      this.listar();
    });
  }

  alterarStatus(
    id: number,
    status: string
  ) {

    this.service.alterarStatus(
      id,
      status
    ).subscribe(() => {

      this.listar();
    });
  }

  deletar(id: number) {

    const confirmar =
      confirm('Deseja deletar?');

    if (!confirmar) return;

    this.service.deletar(id)
      .subscribe(() => {

        this.listar();
      });
  }

  uploadImagem(event: any) {

    const file =
      event.target.files[0];

    if (!file || !this.editando) return;

    this.service.uploadImagem(file)
      .subscribe(url => {

        this.editando!.imagemUrl = url;
      });
  }

  uploadVideo(event: any) {

    const file =
      event.target.files[0];

    if (!file || !this.editando) return;

    this.service.uploadVideo(file)
      .subscribe(url => {

        this.editando!.videoUrl = url;
      });
  }
}
