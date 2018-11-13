import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface SortTable {
  name: string;
  color: string;
}
const ELEMENT_DATA: SortTable[] = [
  {name: 'Red', color: 'red'},
  {name: 'Green', color: 'green'},
  {name: 'Blue', color: 'blue'},
  {name: 'Cyan', color: 'cyan'},
  {name: 'Magenta', color: 'magenta'},
  {name: 'Yellow', color: 'yellow'},
  {name: 'Black', color: 'black'},
];
@Component({
  selector: 'table-overview-example',
  styleUrls: ['table-overview-example.css'],
  templateUrl: 'table-overview-example.html',
})

export class TableOverviewExample implements OnInit {
  displayedColumns: string[] = ['name', 'color'];
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {   
    this.dataSource.sort = this.sort;
  }
dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
