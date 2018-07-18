import { GroupPublicSelection } from './groupPublicSelection.model';

export class GrupoSelecao {

    valid: any;
    cdCanal: number;
    cdGrupoSelecao: number;
    cdCredential: string;
    nmCredential: string;
    cdModuloAmbienteCanal: number;
    cdOrigemMassa: number; // 1 para inclusão unitaria e 2 para upload de arquivo
    numeroRemedyPeticao: string;
    nomeGrupoSelecao: string;
    indAtivo = 'N';
    indAtivoRedis = 'N';
    cdUsuarioInclusao: string;
    cdUsuarioUltimaAtualizacao: string;
    file: any;
    nmArquivo: string;
    nomeSemFormatacao: string;
    publicoSelecionadoInclude: GroupPublicSelection[] = [];
    cdPublicoSelecionado: number;

}
