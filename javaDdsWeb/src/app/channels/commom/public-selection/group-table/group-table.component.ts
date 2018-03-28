import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { GetDatabaseService } from '../../../../services/get-database/get-database.service';
import { PostDatabaseService } from '../../../../services/post-database/post-database.service';

@Component({
  selector: 'group-table',
  styleUrls: ['group-table.component.scss'],
  templateUrl: 'group-table.component.html',
})
export class GroupTableComponent implements AfterViewInit{

displayedColumns = ['nome', 'canal', 'criador', 'switch', 'edit', 'delete'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: any;

  constructor(private getDatabaseService : GetDatabaseService, private postDatabaseService : PostDatabaseService) { }

  ngAfterViewInit() {
    this.getFilters();    
  }

  getFilters(){
    this.getDatabaseService.getFilterData('listGroup')
      .subscribe(
        response => {
          this.dataSource = new MatTableDataSource(response.dados);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
      }, error => {
        alert('Erro ao acessar servidor!');
      });
  };

  applyFilter(filterValue: string) {
    console.log(filterValue);
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}