import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupDialogComponent implements OnInit {

 

  constructor(
    public dialogRef: MatDialogRef<SignupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  
  login(form: NgForm){}
  
  close(){
      this.dialogRef.close();
  }

}
