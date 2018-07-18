import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { UserAuth } from './userAuth.model';

@Injectable()
export class AuthService {

  userAuth: UserAuth = new UserAuth();
  RetornoMBS = [
      {
          'user': 'Admin',
          'password': '123',
          'permissoes': {
          'hierarquiaPerfil': [
              {
              'nomeTransacao': 'DDS',
              'nomeTransacaoSuperior': '0',
              'descricaoTransacao': 'Digital Desk Santander',
              'linkTransacao': '',
              'indice': '1',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-COLUNA-UM',
              'nomeTransacaoSuperior': 'DDS',
              'descricaoTransacao': 'Gestão de Canais',
              'linkTransacao': '',
              'indice': '2',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-MENU-IBPF',
              'nomeTransacaoSuperior': 'DDS-COLUNA-UM',
              'descricaoTransacao': 'IBPF',
              'linkTransacao': '',
              'indice': '2',
              'protocolo': '',
              'icons': 'supervisor_account'
              },
              {
              'nomeTransacao': 'DDS-MENU-IBPF-SELECPUBLICO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF',
              'descricaoTransacao': 'Seleção de Público',
              'linkTransacao': 'ibpf/public-selection',
              'indice': '3',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBPF-CRIARSELECAO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF-SELECPUBLICO',
              'descricaoTransacao': 'Criar Grupos',
              'linkTransacao': '',
              'indice': '4',
              'protocolo': '',
              'icons': ''
              }, 
              {
              'nomeTransacao': 'DDS-ABA-IBPF-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF-SELECPUBLICO',
              'descricaoTransacao': 'Exibir Grupos',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBPF-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBPF-EDITARSELECAO',
              'descricaoTransacao': 'Ativar/Destivar Grupo',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBPF-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBPF-EDITARSELECAO',
              'descricaoTransacao': 'Excluir Grupo',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBPF-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBPF-EDITARSELECAO',
              'descricaoTransacao': 'Ativar/Destivar Cliente',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBPF-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBPF-EDITARSELECAO',
              'descricaoTransacao': 'Excluir Cliente',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBPF-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBPF-EDITARSELECAO',
              'descricaoTransacao': 'Inserir Cliente',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-MENU-IBPF-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF',
              'descricaoTransacao': 'Configurações dos Módulos',
              'linkTransacao': 'ibpf/ambients-monitoring',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBPF-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF-CONFIFURACOES',
              'descricaoTransacao': 'Solicitar Alterações',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBPF-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-ABA-IBPF-CONFIFURACOES',
              'descricaoTransacao': 'Release',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBPF-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-ABA-IBPF-CONFIFURACOES',
              'descricaoTransacao': 'Alterar',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBPF-DETALHES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF-CONFIFURACOES',
              'descricaoTransacao': 'Exibir Solicitações',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-MENU-IBE',
              'nomeTransacaoSuperior': 'DDS-COLUNA-UM',
              'descricaoTransacao': 'IBE',
              'linkTransacao': '',
              'indice': '2',
              'protocolo': '',
              'icons': 'supervisor_account'
              },
              {
              'nomeTransacao': 'DDS-MENU-IBE-SELECPUBLICO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE',
              'descricaoTransacao': 'Seleção de Público',
              'linkTransacao': 'ibe/public-selection',
              'indice': '3',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBE-CRIARSELECAO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE-SELECPUBLICO',
              'descricaoTransacao': 'Criar Grupos',
              'linkTransacao': '',
              'indice': '4',
              'protocolo': '',
              'icons': ''
              }, 
              {
              'nomeTransacao': 'DDS-ABA-IBE-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE-SELECPUBLICO',
              'descricaoTransacao': 'Exibir Grupos',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBE-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBE-EDITARSELECAO',
              'descricaoTransacao': 'Ativar/Destivar Grupo',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBE-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBE-EDITARSELECAO',
              'descricaoTransacao': 'Excluir Grupo',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBE-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBE-EDITARSELECAO',
              'descricaoTransacao': 'Ativar/Destivar Cliente',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBE-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBE-EDITARSELECAO',
              'descricaoTransacao': 'Excluir Cliente',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBE-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBE-EDITARSELECAO',
              'descricaoTransacao': 'Inserir Cliente',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-MENU-IBE-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE',
              'descricaoTransacao': 'Configurações dos Módulos',
              'linkTransacao': 'ibe/ambients-monitoring',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBE-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE-CONFIFURACOES',
              'descricaoTransacao': 'Solicitar Alterações',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBE-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-ABA-IBE-CONFIFURACOES',
              'descricaoTransacao': 'Release',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBE-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-ABA-IBE-CONFIFURACOES',
              'descricaoTransacao': 'Alterar',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBE-DETALHES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE-CONFIFURACOES',
              'descricaoTransacao': 'Exibir Solicitações',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              
          ]
          }
      },
      {
          'user': 'GS',
          'password': '123',
          'permissoes': {
          'hierarquiaPerfil': [
              {
              'nomeTransacao': 'DDS',
              'nomeTransacaoSuperior': '0',
              'descricaoTransacao': 'Digital Desk Santander',
              'linkTransacao': '',
              'indice': '1',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-COLUNA-UM',
              'nomeTransacaoSuperior': 'DDS',
              'descricaoTransacao': 'Gestão de Canais',
              'linkTransacao': '',
              'indice': '2',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-MENU-IBPF',
              'nomeTransacaoSuperior': 'DDS-COLUNA-UM',
              'descricaoTransacao': 'IBPF',
              'linkTransacao': '',
              'indice': '2',
              'protocolo': '',
              'icons': 'supervisor_account'
              },
              {
              'nomeTransacao': 'DDS-MENU-IBPF-SELECPUBLICO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF',
              'descricaoTransacao': 'Seleção de Público',
              'linkTransacao': 'ibpf/public-selection',
              'indice': '3',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBPF-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF-SELECPUBLICO',
              'descricaoTransacao': 'Exibir Grupos',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-MENU-IBPF-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF',
              'descricaoTransacao': 'Configurações dos Módulos',
              'linkTransacao': 'ibpf/ambients-monitoring',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBPF-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF-CONFIFURACOES',
              'descricaoTransacao': 'Solicitar Alterações',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBPF-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-ABA-IBPF-CONFIFURACOES',
              'descricaoTransacao': 'Release',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBPF-DETALHES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF-CONFIFURACOES',
              'descricaoTransacao': 'Exibir Solicitações',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-MENU-IBE',
              'nomeTransacaoSuperior': 'DDS-COLUNA-UM',
              'descricaoTransacao': 'IBE',
              'linkTransacao': '',
              'indice': '2',
              'protocolo': '',
              'icons': 'supervisor_account'
              },
              {
              'nomeTransacao': 'DDS-MENU-IBE-SELECPUBLICO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE',
              'descricaoTransacao': 'Seleção de Público',
              'linkTransacao': 'ibe/public-selection',
              'indice': '3',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBE-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE-SELECPUBLICO',
              'descricaoTransacao': 'Exibir Grupos',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-MENU-IBE-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE',
              'descricaoTransacao': 'Configurações dos Módulos',
              'linkTransacao': 'ibe/ambients-monitoring',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBE-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE-CONFIFURACOES',
              'descricaoTransacao': 'Solicitar Alterações',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBE-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-ABA-IBE-CONFIFURACOES',
              'descricaoTransacao': 'Release',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBE-DETALHES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE-CONFIFURACOES',
              'descricaoTransacao': 'Exibir Solicitações',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              
          ]
          }
      },
      {
          'user': 'OP',
          'password': '123',
          'permissoes': {
          'hierarquiaPerfil': [
              {
              'nomeTransacao': 'DDS',
              'nomeTransacaoSuperior': '0',
              'descricaoTransacao': 'Digital Desk Santander',
              'linkTransacao': '',
              'indice': '1',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-COLUNA-UM',
              'nomeTransacaoSuperior': 'DDS',
              'descricaoTransacao': 'Gestão de Canais',
              'linkTransacao': '',
              'indice': '2',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-MENU-IBPF',
              'nomeTransacaoSuperior': 'DDS-COLUNA-UM',
              'descricaoTransacao': 'IBPF',
              'linkTransacao': '',
              'indice': '2',
              'protocolo': '',
              'icons': 'supervisor_account'
              },
              {
              'nomeTransacao': 'DDS-MENU-IBPF-SELECPUBLICO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF',
              'descricaoTransacao': 'Seleção de Público',
              'linkTransacao': 'ibpf/public-selection',
              'indice': '3',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBPF-CRIARSELECAO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF-SELECPUBLICO',
              'descricaoTransacao': 'Criar Grupos',
              'linkTransacao': '',
              'indice': '4',
              'protocolo': '',
              'icons': ''
              }, 
              {
              'nomeTransacao': 'DDS-ABA-IBPF-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF-SELECPUBLICO',
              'descricaoTransacao': 'Exibir Grupos',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBPF-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBPF-EDITARSELECAO',
              'descricaoTransacao': 'Ativar/Destivar Grupo',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBPF-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBPF-EDITARSELECAO',
              'descricaoTransacao': 'Excluir Grupo',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBPF-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBPF-EDITARSELECAO',
              'descricaoTransacao': 'Ativar/Destivar Cliente',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBPF-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBPF-EDITARSELECAO',
              'descricaoTransacao': 'Excluir Cliente',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBPF-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBPF-EDITARSELECAO',
              'descricaoTransacao': 'Inserir Cliente',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-MENU-IBPF-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF',
              'descricaoTransacao': 'Configurações dos Módulos',
              'linkTransacao': 'ibpf/ambients-monitoring',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBPF-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF-CONFIFURACOES',
              'descricaoTransacao': 'Solicitar Alterações',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBPF-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-ABA-IBPF-CONFIFURACOES',
              'descricaoTransacao': 'Alterar',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBPF-DETALHES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF-CONFIFURACOES',
              'descricaoTransacao': 'Exibir Solicitações',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-MENU-IBE',
              'nomeTransacaoSuperior': 'DDS-COLUNA-UM',
              'descricaoTransacao': 'IBE',
              'linkTransacao': '',
              'indice': '2',
              'protocolo': '',
              'icons': 'supervisor_account'
              },
              {
              'nomeTransacao': 'DDS-MENU-IBE-SELECPUBLICO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE',
              'descricaoTransacao': 'Seleção de Público',
              'linkTransacao': 'ibe/public-selection',
              'indice': '3',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBE-CRIARSELECAO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE-SELECPUBLICO',
              'descricaoTransacao': 'Criar Grupos',
              'linkTransacao': '',
              'indice': '4',
              'protocolo': '',
              'icons': ''
              }, 
              {
              'nomeTransacao': 'DDS-ABA-IBE-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE-SELECPUBLICO',
              'descricaoTransacao': 'Exibir Grupos',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBE-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBE-EDITARSELECAO',
              'descricaoTransacao': 'Ativar/Destivar Grupo',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBE-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBE-EDITARSELECAO',
              'descricaoTransacao': 'Excluir Grupo',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBE-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBE-EDITARSELECAO',
              'descricaoTransacao': 'Ativar/Destivar Cliente',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBE-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBE-EDITARSELECAO',
              'descricaoTransacao': 'Excluir Cliente',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBE-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-ABA-IBE-EDITARSELECAO',
              'descricaoTransacao': 'Inserir Cliente',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-MENU-IBE-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE',
              'descricaoTransacao': 'Configurações dos Módulos',
              'linkTransacao': 'ibe/ambients-monitoring',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBE-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE-CONFIFURACOES',
              'descricaoTransacao': 'Solicitar Alterações',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-CTRL-IBE-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-ABA-IBE-CONFIFURACOES',
              'descricaoTransacao': 'Alterar',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBE-DETALHES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE-CONFIFURACOES',
              'descricaoTransacao': 'Exibir Solicitações',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              
          ]
          }
      },
      {
          'user': 'TC',
          'password': '123',
          'permissoes': {
          'hierarquiaPerfil': [
              {
              'nomeTransacao': 'DDS',
              'nomeTransacaoSuperior': '0',
              'descricaoTransacao': 'Digital Desk Santander',
              'linkTransacao': '',
              'indice': '1',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-COLUNA-UM',
              'nomeTransacaoSuperior': 'DDS',
              'descricaoTransacao': 'Gestão de Canais',
              'linkTransacao': '',
              'indice': '2',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-MENU-IBPF',
              'nomeTransacaoSuperior': 'DDS-COLUNA-UM',
              'descricaoTransacao': 'IBPF',
              'linkTransacao': '',
              'indice': '2',
              'protocolo': '',
              'icons': 'supervisor_account'
              },
              {
              'nomeTransacao': 'DDS-MENU-IBPF-SELECPUBLICO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF',
              'descricaoTransacao': 'Seleção de Público',
              'linkTransacao': 'ibpf/public-selection',
              'indice': '3',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBPF-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF-SELECPUBLICO',
              'descricaoTransacao': 'Exibir Grupos',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-MENU-IBPF-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF',
              'descricaoTransacao': 'Configurações dos Módulos',
              'linkTransacao': 'ibpf/ambients-monitoring',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBPF-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF-CONFIFURACOES',
              'descricaoTransacao': 'Solicitar Alterações',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBPF-DETALHES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBPF-CONFIFURACOES',
              'descricaoTransacao': 'Exibir Solicitações',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-MENU-IBE',
              'nomeTransacaoSuperior': 'DDS-COLUNA-UM',
              'descricaoTransacao': 'IBE',
              'linkTransacao': '',
              'indice': '2',
              'protocolo': '',
              'icons': 'supervisor_account'
              },
              {
              'nomeTransacao': 'DDS-MENU-IBE-SELECPUBLICO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE',
              'descricaoTransacao': 'Seleção de Público',
              'linkTransacao': 'ibe/public-selection',
              'indice': '3',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBE-EDITARSELECAO',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE-SELECPUBLICO',
              'descricaoTransacao': 'Exibir Grupos',
              'linkTransacao': '',
              'indice': '5',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-MENU-IBE-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE',
              'descricaoTransacao': 'Configurações dos Módulos',
              'linkTransacao': 'ibe/ambients-monitoring',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBE-CONFIFURACOES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE-CONFIFURACOES',
              'descricaoTransacao': 'Solicitar Alterações',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
              {
              'nomeTransacao': 'DDS-ABA-IBE-DETALHES',
              'nomeTransacaoSuperior': 'DDS-MENU-IBE-CONFIFURACOES',
              'descricaoTransacao': 'Exibir Solicitações',
              'linkTransacao': '',
              'indice': '6',
              'protocolo': '',
              'icons': ''
              },
          ]
          }
      },
  ];

  constructor(public route: Router) { }

  AutenticarLogin(user: string, password: string) {
    const retorno = this.RetornoMBS.filter (tabledata => {
      if (user === tabledata.user && password === tabledata.password) {
        this.userAuth.logado = true;
        this.userAuth.user = user;
        this.userAuth.permissoes = tabledata.permissoes;
        sessionStorage.setItem('Item 1', JSON.stringify(this.userAuth));
        this.route.navigate(['/']);
        return true;
      }
    });
  }

}
