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
        (response: HttpEvent<Object>) => {
            console.log(response);
            this.dataSource = new MatTableDataSource<Element>(response);
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


const ELEMENT_DATA: Element[] = [
    {title: 'Create Account', fullname: 'Lans Okley', category:'Project 1', subCategory:'sub project 3', drawingType:'Use Case', created:'12-Mar-17', updated:'10-Apr-17'},
    {title: 'Update Account', fullname: 'Lans Okley', category:'Project 1', subCategory:'sub project 3', drawingType:'Use Case', created:'12-Mar-17', updated:'10-Apr-17'},
    {title: 'Delete Account', fullname: 'Lans Okley', category:'Project 1', subCategory:'sub project 3', drawingType:'Use Case', created:'12-Mar-17', updated:'10-Apr-17'},
    {title: 'Transfer Account', fullname: 'Lans Okley', category:'Project 1', subCategory:'sub project 3', drawingType:'Use Case', created:'12-Mar-17', updated:'10-Apr-17'},
    {title: 'Create Account', fullname: 'Lans Okley', category:'Project 1', subCategory:'sub project 3', drawingType:'Sequence', created:'12-Feb-17', updated:'10-Apr-17'},
    {title: 'Update Account', fullname: 'Lans Okley', category:'Project 1', subCategory:'sub project 3', drawingType:'Sequence', created:'12-Jan-17', updated:'10-Apr-17'},
    {title: 'Delete Account', fullname: 'Lans Okley', category:'Project 1', subCategory:'sub project 3', drawingType:'Sequence', created:'12-Mar-17', updated:'10-Apr-17'},
    {title: 'Transfer Account', fullname: 'Lans Okley', category:'Project 1', subCategory:'sub project 3', drawingType:'Sequence', created:'12-Dec-17', updated:'10-Apr-17'},
    {title: 'Create Account', fullname: 'Lans Okley', category:'Project 1', subCategory:'sub project 3', drawingType:'Use Case', created:'12-Mar-17', updated:'10-Apr-17'},
    {title: 'Create Account', fullname: 'Lans Okley', category:'Project 1', subCategory:'sub project 3', drawingType:'Use Case', created:'12-Mar-17', updated:'10-Apr-17'},
    {title: 'Create Account', fullname: 'Lans Okley', category:'Project 1', subCategory:'sub project 3', drawingType:'Use Case', created:'12-Mar-17', updated:'10-Apr-17'},
    {title: 'Create Account', fullname: 'Lans Okley', category:'Project 1', subCategory:'sub project 3', drawingType:'Use Case', created:'12-Mar-17', updated:'10-Apr-17'},
];