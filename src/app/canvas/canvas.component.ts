import {Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener} from '@angular/core';
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
declare var jquery:any;
declare var $ :any;

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
    
    
    @ViewChild("drawingBlob") image: ElementRef;
    
    @ViewChild("drawingBlobMap") areaMap: ElementRef;
    
    @ViewChild("imgContainer") imageContainer: ElementRef;
    
    private last: MouseEvent;
    
    drawing: {id:string, title:string};
    
    public imageFound: Boolean = true;
    

    constructor(public dialog: MatDialog, 
        private route: ActivatedRoute, 
        private serverService: ServerService, 
        private windowRefService: WindowRefService,
        private renderer: Renderer2) {
        console.log('In LoginDialogComponent');
    }
    
    ngAfterViewInit(){
        $('.map').maphilight();
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
                    
                    var metadata = Object.values(data[1])
                    for (var i=0; i< metadata.length; i++){
                        var jsonItem = metadata[i];                  
                        const areaElement = this.renderer.createElement("area");
                        this.renderer.setAttribute(areaElement, "shape", "rect");
                        this.renderer.setAttribute(areaElement, "coords", jsonItem['coords']);
                        this.renderer.setAttribute(areaElement, "alt", "rect");
                        this.renderer.appendChild(this.areaMap.nativeElement, areaElement);
                         this.renderer.listen(areaElement, "click", (event)=>{
                            this.openMenu(event);
                        });    
                    }
                    
                }
            );
    }
    
    
    @HostListener('mousemove', ['$event'])
    onMousemove(event: MouseEvent) {
        this.last = event;
    }
    
    openMenu(event){
        console.log('In TrashDialogComponent')

        let dialogRef = this.dialog.open(TrashDialogComponent, {
            position: {left: (window.innerWidth / 2)-300 + 'px'},
            autoFocus: false,
            width: '600px',
            height: '450px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
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
