export interface Ocorrencia {
  id?: number;

  titulo: string;
  descricao: string;
  categoria: string;

  imagemUrl?: string;
  videoUrl?: string;

  latitude?: number;
  longitude?: number;

  nomeUsuario?: string;

  status?: string;
}