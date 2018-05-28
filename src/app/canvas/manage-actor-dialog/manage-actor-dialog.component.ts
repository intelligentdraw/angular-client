import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-manage-actor-dialog',
  templateUrl: './manage-actor-dialog.component.html',
  styleUrls: ['./manage-actor-dialog.component.css']
})
export class ManageActorDialogComponent implements OnInit {


    @ViewChild('defaultOpen') defaultOpen:ElementRef;
    
    actorName: string;
    usecases: string;

  constructor(
    public dialogRef: MatDialogRef<ManageActorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.actorName = data.actorName;
    this.usecases = data.usecases;
   }

  ngOnInit() {
    // Get the element with id="defaultOpen" and click on it
      this.defaultOpen.nativeElement.click()
  }
  
  close(){
      this.dialogRef.close();
  }
  
  openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  renameActor(form: NgForm){
      form.controls['actorName'].value
  }
  
  addUsecase(form: NgForm){
      form.controls['usecaseName'].value
  }

}
