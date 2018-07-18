export class GroupPublicSelection {

  cdPublicoSelecionado: number;
  cdCredencial: string;
  nmCredencial: string;
  indAtivo: string;
  indAtivoRedis: string;
  ativoOracle: boolean;
  ativoRedis: boolean;
  cdUsuarioUltimaAtualizacao: string;
  agencia: string;
  conta: string;
  grupo: any;
  numeroRemedyPeticao: any;

  constructor(cdPublicoSelecionado: number, cdCredencial: string, nmCredencial: string, indAtivo: string, indAtivoRedis: string, gupo: any) {
    this.cdPublicoSelecionado = cdPublicoSelecionado;
    this.cdCredencial = cdCredencial;
    this.nmCredencial = nmCredencial;
    this.indAtivo = indAtivo;
    this.indAtivoRedis = indAtivoRedis;
    this.grupo = this.grupo;

    (cdCredencial != null ? this.agencia = cdCredencial.substring(0, 4) : this.agencia = null);
    (cdCredencial != null ? this.conta = cdCredencial.substring(4) : this.agencia = null);

    if (indAtivo === 'S') {
      this.ativoOracle = true;
    } else {
      this.ativoOracle = false;
    }

    if (indAtivoRedis === 'S') {
      this.ativoRedis = true;
    } else {
      this.ativoRedis = false;
    }
  }

}
