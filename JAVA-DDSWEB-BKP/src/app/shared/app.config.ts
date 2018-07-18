import { PathModel } from './base-service/path.model';

export const REST_PATH = Object.freeze({
    grupo: {
        searchGroupsSelectionsByChannel: PathModel.create('/groupSelection/searchGroupsSelectionsByChannel'),
        includeManually: PathModel.create('/groupSelection/includeManually'),
        includeMassiveLoad: PathModel.create('/groupSelection/includeMassiveLoad'),
        enableDisable: PathModel.create('/groupSelection/enableDisable'),
        removeGroup: PathModel.create('/groupSelection/remove'),
        existGroup: PathModel.create('/groupSelection/existGroup'),
        search: PathModel.create('/groupSelection/search'),

        searchSelectedPublicByGroup: PathModel.create('/selectedPublic/searchSelectedPublicByGroup'),
        includeClient: PathModel.create('/selectedPublic/include'),
        enableDisableClient: PathModel.create('/selectedPublic/enableDisable'),
        removeClient: PathModel.create('/selectedPublic/remove'),
    },
    moduloAmbienteCanal: {
      listarModulos: PathModel.create('/channelEnvironmentModule/list'),
    },
    associate: {
        ativarGrupo: PathModel.create('/associateSelectedPublic/process'),
    },
    canal: {
        buscar: PathModel.create('/channel/list'),
        buscarCanal: PathModel.create('/channel/search'),
    },
    elasticSearch: {
        buscarHistorico: PathModel.create('/elastic/_search'),
    },
    moduloRundeck: {
        trocarModuloOn: PathModel.create('/jobModule/moduleChangeOn'),
        trocarModuloOff: PathModel.create('/jobModule/moduleChangeOff'),
    }

});
