import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import {ServerService} from '../server.services';
import {HttpEvent} from '@angular/common/http';

@Component({
  selector: 'app-open-diags',
  templateUrl: './open-diags.component.html',
  styleUrls: ['./open-diags.component.css']
})
export class OpenDiagsComponent  {
  displayedColumns = ['name', 'fullname', 'category', 'subCategory', 'type', 'created', 'updated'];
  //dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  dataSource :MatTableDataSource<Element>;
  
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private serverService: ServerService){}
  
  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {}
  
  ngOnInit() {
      this.serverService.get("http://localhost/drawings").subscribe(
        data => {
            console.log(data);
            var elements: Array<Element> = JSON.parse(JSON.stringify(data));
            this.dataSource = new MatTableDataSource<Element>(elements);
            this.dataSource.sort = this.sort;
        }
      );
  }
}

export interface Element {
  title: string;
  fullname: string;
  category: string;
  subCategory: string;
  drawingType: string;
  created: string;
  updated: string;
}