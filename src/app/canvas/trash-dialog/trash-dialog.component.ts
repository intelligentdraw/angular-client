import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-trash-dialog',
  templateUrl: './trash-dialog.component.html',
  styleUrls: ['./trash-dialog.component.css']
})
export class TrashDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TrashDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  
  close(){
      this.dialogRef.close();
  }
}
