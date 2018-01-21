import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

import { DuplicateDialogComponent } from './duplicate-dialog/duplicate-dialog.component';
import { ExportDialogComponent } from './export-dialog/export-dialog.component';
import { TrashDialogComponent } from './trash-dialog/trash-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {



    constructor(public dialog: MatDialog) {
        console.log('In LoginDialogComponent')
    }

    ngOnInit() {
    }



    openTrashDialog() {

        console.log('In TrashDialogComponent')

        let dialogRef = this.dialog.open(TrashDialogComponent, {
            position: {left: window.innerWidth / 2 + 'px'},
            autoFocus: false,
            width: '300px',
            height: '450px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    
    openExportDialog() {

        console.log('In ExportDialogComponent')

        let dialogRef = this.dialog.open(ExportDialogComponent, {
            position: {left: window.innerWidth / 2 + 'px'},
            autoFocus: false,
            width: '300px',
            height: '450px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    
    openInfoDialog() {

        console.log('In InfoDialogComponent')

        let dialogRef = this.dialog.open(InfoDialogComponent, {
            position: {left: window.innerWidth / 2 + 'px'},
            autoFocus: false,
            width: '300px',
            height: '450px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    
    openShareDialog() {

        console.log('In ShareDialogComponent')

        let dialogRef = this.dialog.open(ShareDialogComponent, {
            position: {left: window.innerWidth / 2 + 'px'},
            autoFocus: false,
            width: '300px',
            height: '450px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    
    openDuplicateDialog() {

        console.log('In DuplicateDialogComponent')

        let dialogRef = this.dialog.open(DuplicateDialogComponent, {
            position: {left: window.innerWidth / 2 + 'px'},
            autoFocus: false,
            width: '300px',
            height: '450px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}
