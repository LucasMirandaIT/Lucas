import { Component, OnInit, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { EventEmitterService } from '../../../../services/event-emitter/event-emitter.service';

@Component({
  selector: 'app-cnpj2-search',
  templateUrl: './cnpj2-search.component.html',
  styleUrls: ['./cnpj2-search.component.scss'],
})
export class Cnpj2SearchComponent implements OnInit, AfterViewInit {
  @Output() tableShow = new EventEmitter<boolean>();
  changeEmmit: boolean = false;
  allModules = ['Oculto', 'Desenvolvimento', 'Preservado'];
  
  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';

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
  }

  tableChange(bool, changeCarousel) {
    this.tableShow.emit(bool);
    if (changeCarousel == true )
      $('.carousel').carousel('next');
    else
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

  handleImageLoad() {
    this.fileLoaded = true;
    //this.iconColor = this.overlayColor;
  }

  handleInputChange(e) {
    let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    let pattern = ['csv', 'txt'];
    let reader = new FileReader();
    let type = file.name.substring(file.name.length, file.name.length - 3);
    
    if (!type.match(pattern[0]) && !type.match(pattern[1])) {
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

  // setActive() {
  //   //this.borderColor = this.activeColor;
  //   if (this.fileSrc.length === 0) {
  //       //this.iconColor = this.activeColor;
  //   }
  // }

  // setInactive() {
  //   //this.borderColor = this.baseColor;
  //   if (this.fileSrc.length === 0) {
  //       //this.iconColor = this.baseColor;
  //   }
  // }

}
