import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NgForm} from '@angular/forms'
import {ServerService} from '../../server.services';

@Component({
  selector: 'app-new-usecase-dialog',
  templateUrl: './new-usecase-dialog.component.html',
  styleUrls: ['./new-usecase-dialog.component.css']
})
export class NewUsecaseDialogComponent {
    
    usecaseData = {
          usecaseDiagName:'',
          usecaseName:'',
          actorName:''
      }

  
  constructor(private serverService: ServerService,
    public dialogRef: MatDialogRef<NewUsecaseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  createNewUseDiagram(form: NgForm):void{
      //this.usecaseName = form.value('usecaseName');
      console.log(form);
      
      this.usecaseData.usecaseDiagName = form.value.usecaseDiagName;
      this.usecaseData.usecaseName = form.value.usecaseName;
      this.usecaseData.actorName = form.value.actorName;
      
      this.serverService.put(this.usecaseData, "http://localhost/drawing/createNewUsecaseDiag").subscribe(
        data => {
            console.log("Callback after PUT");
            console.log(data);
            this.dialogRef.close(this.usecaseData);
            //var elements: Array<Element> = JSON.parse(JSON.stringify(data));
            //this.dataSource = new MatTableDataSource<Element>(elements);
            //this.dataSource.sort = this.sort;
        }
      );
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  close(){
      this.dialogRef.close();
  }
}
