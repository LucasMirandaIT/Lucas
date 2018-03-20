import { Component, OnInit, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { EventEmitterService } from '../../../../services/event-emitter/event-emitter.service';

@Component({
  selector: 'app-cnpj2-search',
  templateUrl: './cnpj2-search.component.html',
  styleUrls: ['./cnpj2-search.component.scss'],
})
export class Cnpj2SearchComponent implements OnInit, AfterViewInit {
  fileName: any = "Clique ou Arraste o arquivo aqui";
  @Output() tableShow = new EventEmitter<boolean>();
  changeEmmit: boolean = false;
  allModules = ['Oculto', 'Desenvolvimento', 'Preservado'];

  dragging: boolean = false;
  loaded: boolean = false;
  fileLoaded: boolean = false;
  fileSrc: any = "";

  constructor(private eventEmitterService : EventEmitterService) { }

  ngOnInit() {
    this.allModules = ['Oculto', 'Desenvolvimento', 'Preservado'];    
  }

  ngAfterViewInit() {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('select').material_select();
    $('ul.tabs').tabs();
    $('.modal').modal();
    $('.tooltipped').tooltip({delay: 50});
    $('.stepper').activateStepper();
  }

  tableChange(bool, changeCarousel) {
    this.tableShow.emit(bool);
    if (changeCarousel == "next" )
      $('.carousel').carousel('next');
    else if (changeCarousel == "prev" )
      $('.carousel').carousel('prev');
  }

  addValues() {
    this.changeEmmit = !this.changeEmmit;
    EventEmitterService.get('addClick').emit(this.changeEmmit);
  }

  handleDragEnter() {
    this.dragging = true;
  }

  handleDragLeave() {
    this.dragging = false;
  }

  handleDrop(e) {
    e.preventDefault();
    this.dragging = false;
    this.handleInputChange(e);
  }

  // handleImageLoad() {
  //   this.fileLoaded = true;
  // }

  handleInputChange(e) {
    let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    this.fileName = file.name;
    let pattern = ['csv', 'txt', 'png'];
    let reader = new FileReader();
    let type = file.name.substring(file.name.length, file.name.length - 3);
    
    if (!type.match(pattern[0]) && !type.match(pattern[1]) && !type.match(pattern[2]) ) {
      alert('Erro: Formato de arquivo inválido');
      return;
    }

    this.loaded = false;

    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  handleReaderLoaded(e) {
    let reader = e.target;
    this.fileSrc = reader.result;
    this.loaded = true;
  }

  teste(){
    alert('AAA');
  }

}
