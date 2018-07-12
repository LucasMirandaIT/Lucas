import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monkey-play',
  templateUrl: './monkey-play.component.html',
  styleUrls: ['./monkey-play.component.scss']
})
export class MonkeyPlayComponent implements OnInit {
  macacos = [
    {nome: 'Latency Monkey', descricao:'O objetivo dessa frente é criar mecanismos artificiais que aumentam a latência na comunicação client-server, simulando uma degradação do serviço'},
    {nome: 'Conformity Monkey', descricao:'Essa frente visa localizar instâncias que não estão aderentes às políticas de melhores práticas, e eliminá-las. Por exemplo, a localização de instâncias que não estão em grupos de auto scaling dando assim, ao usuário, a oportunidade para reinicia-las e fazer as configurações corretas'},
    {nome: 'Security Monkey', descricao:'O Security Monkey é uma extensão de Conformity Monkey. Através dela será possível  procurar vulnerabilidades ou falhas de segurança, como por exemplo, configurações incorretas de grupos e ambientes'},
    {nome: 'Doctor Monkey', descricao:'Para essa frente, o objetivo é detectar instâncias que estão degradadas através de health checks gerados por cada uma das instâncias, ou outros sinais de degradação (CPU, carga, etc). Uma vez detectado, essa instância é isolada, não fazendo mais parte do serviço ativo, dando a oportunidade para o administrador do sistema analisar o problema'},
    {nome: 'Janitor Monkey', descricao:'Iremos criar mecanismos para garantir que nossas contas na cloud sejam mantidas livres de máquinas que não estão sendo utilizadas'},
    {nome: 'Chaos Monkey', descricao:'Nessa frente especifica iremos criar procedimentos para que os nossos servidores sejam “derrubados” intencionalmente como forma de testar a tolerância a falhas do nosso ambiente em cloud. Desativaremos instâncias e serviços aleatoriamente dentro da nossa arquitetura com objetivo de avaliar nossa habilidade de lidar bem com falhas, e preparamos a nossa equipe para atuar no caso de uma indisponibilidade inesperada.'},
    {nome: 'Chaos Gorilla', descricao:'Semelhante ao Chaos Monkey, no Chaos Gorilla iremos simular a queda de todo o ambiente ativo, testando a alta disponibilidade e a forma com que o serviço será restabelecido em outro ambiente/site (automaticamente).'},
  ]
  nomeMacaco: string;
  descricaoMacaco: string;
  constructor() { }
  isLeftVisible = false;
  
  ngOnInit() {
  }
  
  selecionarMacaco(nomeMacaco, descricaoMacaco){
    this.isLeftVisible = !this.isLeftVisible;
    this.nomeMacaco = nomeMacaco;
    this.descricaoMacaco = descricaoMacaco;
  }

}
