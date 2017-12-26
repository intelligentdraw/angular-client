import {Component, Inject} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewUsecaseDialogComponent} from '../usecase-diag/new-usecase-dialog/new-usecase-dialog.component';

@Component({
  selector: 'app-new-diags',
  templateUrl: './new-diags.component.html',
  styleUrls: ['./new-diags.component.css']
})
export class NewDiagsComponent {

mylabel: string
   animal: string;
  name: string;
  
  newUsecaseData = {
      usecaseName:'',
      actorName:''
  }

  constructor(public dialog: MatDialog) {
      console.log('In NewDiagsComponent')
  }

  
  
  openDialog(){
      
      console.log('In openDialog')
      
      
      let dialogRef = this.dialog.open(NewUsecaseDialogComponent, {
        position: {left: window.innerWidth/2 + 'px'},
        width: '300px',
        height: '300px',
        autoFocus: false,
        data: { name: this.name, animal: this.animal }
        });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.newUsecaseData = result;
    });
  }

}
