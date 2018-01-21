import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent  {
  displayedColumns = ['name', 'fullname', 'category', 'subCategory', 'type', 'created', 'updated'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  
  @ViewChild(MatSort) sort: MatSort;
  
  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}


export interface Element {
  name: string;
  fullname: string;
  category: string;
  subCategory: string;
  type: string;
  created: string;
  updated: string;
}


const ELEMENT_DATA: Element[] = [
    {name: 'Create Account', fullname: 'Lans Okley', category:'Project 1', subCategory:'sub project 3', type:'Use Case', created:'12-Mar-17', updated:'10-Apr-17'},
    {name: 'Update Account For Manager', fullname: 'Lans Okley', category:'Project 1', subCategory:'sub project 3', type:'Use Case', created:'12-Mar-17', updated:'10-Apr-17'},
 
    {name: 'Create Account', fullname: 'Lans Okley', category:'Project 1', subCategory:'sub project 3', type:'Use Case', created:'12-Mar-17', updated:'10-Apr-17'},
    {name: 'Create Account', fullname: 'Lans Okley', category:'Regulation and Management', subCategory:'sub project 3', type:'Use Case', created:'12-Mar-17', updated:'10-Apr-17'},
    {name: 'Create Account For Manager', fullname: 'Lans Okley', category:'Project 1', subCategory:'sub project 3', type:'Use Case', created:'12-Mar-17', updated:'10-Apr-17'},
    {name: 'Create Account', fullname: 'Lans Okley', category:'Publication and Presentation', subCategory:'sub project 3', type:'Use Case', created:'12-Mar-17', updated:'10-Apr-17'},
];
