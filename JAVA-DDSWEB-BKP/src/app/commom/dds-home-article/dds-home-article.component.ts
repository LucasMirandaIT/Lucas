import { Component, OnInit } from '@angular/core';
import { HomeModel } from './dds-home-article.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'dds-home-article',
  templateUrl: './dds-home-article.component.html',
  styleUrls: ['./dds-home-article.component.scss']
})
export class DdsHomeArticleComponent implements OnInit {

  dataSource: any = new MatTableDataSource();
  displayedColumns = ['remedyNumber', 'date', 'user', 'description'];

  ngOnInit() {


    const temp = {
        'body': [
        {
        'remedyNumber': 'CHG00001219',
        'date': '26/04/2018',
        'user': 'x207807',
        'description': 'Caros, solicito alteração do ... ',
        },
        {
        'remedyNumber': 'CHG00001229',
        'date': '26/04/2018',
        'user': 'x207807',
        'description': 'Favor alterar o Módulo 1 para ...',
        },
        {
        'remedyNumber': 'CHG00001239',
        'date': '26/04/2018',
        'user': 'x207809',
        'description': 'Solicito alterar o Módulo 1 ...',
        }
      ]
      };


    this.dataSource = new MatTableDataSource(temp.body);
  }
}
