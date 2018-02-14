import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {MatDialog} from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { DuplicateDialogComponent } from './duplicate-dialog/duplicate-dialog.component';
import { ExportDialogComponent } from './export-dialog/export-dialog.component';
import { TrashDialogComponent } from './trash-dialog/trash-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';
import {ActivatedRoute} from '@angular/router';
import {ServerService} from '../server.services';
import {WindowRefService} from '../window.services';


@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

    @ViewChild("drawingBlob") image: ElementRef;
    
    drawing: {id:string, title:string};
    
    public imageFound: Boolean = true;
    

    constructor(public dialog: MatDialog, 
        private route: ActivatedRoute, 
        private serverService: ServerService, 
        private windowRefService: WindowRefService) {
        console.log('In LoginDialogComponent');
    }

    ngOnInit() {
        
        this.drawing = {
            id: this.route.snapshot.params['drawingId'],
            title: ''
        };
        
        
        this.serverService.getMultiple(
            "http://localhost/image/" + this.drawing.id, 
            "http://localhost/drawing/metadata/"+ this.drawing.id).subscribe(
                (data)=>{
                    //this.imageFound = true;
                    this.image.nativeElement.src = this.windowRefService.nativeWindow.URL.createObjectURL(data[0].body);
                    //this.endSpinner = !this.imageFound;
                    
                    //this.drawingMetadata = data[1];
                }
            );
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
