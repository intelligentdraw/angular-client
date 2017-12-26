import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-new-usecase-dialog',
  templateUrl: './new-usecase-dialog.component.html',
  styleUrls: ['./new-usecase-dialog.component.css']
})
export class NewUsecaseDialogComponent {
    
    usecaseData = {
          usecaseName:'',
          actorName:''
      }

  constructor(
    public dialogRef: MatDialogRef<NewUsecaseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  createNewUseDiagram(form: NgForm):void{
      //this.usecaseName = form.value('usecaseName');
      console.log(form);
      
      this.usecaseData.usecaseName = form.value.usecaseName;
      this.usecaseData.actorName = form.value.actorName;
      
      this.dialogRef.close(this.usecaseData);
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  close(){
      this.dialogRef.close();
  }
}
