export class GrupoTableEdicao {

  nome: string;
  numeroPeticao: string;
  usuarioCriacao: string;
  status: string;
  statusOracle: string;
  statusRedis: string;
  processadoStatus: number;
  processadoLabel: string;
  cdGrupoSelecao: number;
  indAtivo: boolean;
  moduloAmbienteCanal: any;
  publicoSelecionado: any;

  constructor(
    nome: string,
    numeroPeticao: string,
    usuarioCriacao: string,
    statusOracle: string,
    statusRedis: string,
    cdOrigemMassa: number,
    cdGrupoSelecao: number,
    processadoStatus: number,
    processadoLabel: string,
    moduloAmbienteCanal: any,
    publicoSelecionado: any
  ) {
    this.nome = nome;
    this.numeroPeticao = numeroPeticao;
    this.usuarioCriacao = usuarioCriacao;
    this.statusRedis = statusRedis;
    this.statusOracle = statusOracle;

    if (cdOrigemMassa === 1 || (cdOrigemMassa === 2 && processadoStatus === 3)) {
      this.status = 'true';
      if (statusOracle === 'S') {
        this.indAtivo = true;
      } else {
        this.indAtivo = false;
      }
    } else {
      this.status = processadoLabel;
    }
    this.cdGrupoSelecao = cdGrupoSelecao;
    this.moduloAmbienteCanal = moduloAmbienteCanal;
    this.publicoSelecionado = publicoSelecionado;
  }

}


export class Grupos {

  nomeGrupoSelecao: string;
  cdUsuarioInclusao: string;
  indAtivo: any;
  indAtivoRedis: any;
  cdGrupoSelecao: number;
  cdProcessamentoArquivo: number;
  descSituacaoProcessamento: string;
  cdModuloAmbiente: number;
  nomeMobuloAmbinete: string;
  totalPublicoSelecionado: number;
  operacoes: boolean;
  numeroRemedyPeticao: any;

}
