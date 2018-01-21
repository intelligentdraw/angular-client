import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-duplicate-dialog',
  templateUrl: './duplicate-dialog.component.html',
  styleUrls: ['./duplicate-dialog.component.css']
})
export class DuplicateDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DuplicateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  
  close(){
      this.dialogRef.close();
  }
}
