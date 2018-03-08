import {
  Component,
  OnInit,
  OnDestroy,
  DoCheck,
  OnChanges,
  AfterContentInit,
AfterContentChecked,
AfterViewChecked,
Input } from '@angular/core'
@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements
OnInit,
OnDestroy,
DoCheck,
OnChanges,
AfterContentInit,
AfterContentChecked,
AfterViewChecked {

  @Input()
    contador: number = 20;
  @Input()
    contador2: number = 10;

  constructor() {
  console.log ('constructor');
}

  ngOnChanges() {
    console.log ('ngOnChanges');
    if (this.contador2 >= 20) {alert ('Mensagem do Exercício (ngOnChanges)');}
  }

  ngOnInit() {
    console.log('OnInit');
  }

  ngAfterContentInit() {
    console.log ('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log ('ngAfterContentChecked');
    if (this.contador2 >= 20) {alert ('Mensagem do Exercício (ngAfterContentChecked)');}
  }

  ngAfterViewChecked() {
    console.log ('ngAfterViewChecked');
    if (this.contador2 >= 20) {alert ('Mensagem do Exercício (ngAfterViewChecked)');}
  }

  ngDoCheck(){
    console.log ('ngDoCheck');
    if (this.contador2 >= 20) {alert ('Mensagem do Exercício (ngDoCheck)');}
  }


  ngOnDestroy() {
    console.log ('ngOnDestroy');
    alert ('Objeto Destruído');
    }
  }
