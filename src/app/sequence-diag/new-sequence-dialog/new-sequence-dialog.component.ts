import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-new-sequence-dialog',
  templateUrl: './new-sequence-dialog.component.html',
  styleUrls: ['./new-sequence-dialog.component.css']
})
export class NewSequenceDialogComponent  {
    
    usecaseData = {
          sequenceName:'',
          actorName:''
      }

  constructor(
    public dialogRef: MatDialogRef<NewSequenceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  createNewUseDiagram(form: NgForm):void{
      //this.usecaseName = form.value('usecaseName');
      console.log(form);
      
      this.usecaseData.sequenceName = form.value.sequenceName;
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
