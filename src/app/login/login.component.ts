import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginDialogComponent implements OnInit {

 

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  
  login(form: NgForm){}
  
  close(){
      this.dialogRef.close();
  }

}
