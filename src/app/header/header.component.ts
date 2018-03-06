import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginDialogComponent} from '../login/login.component';
import {SignupDialogComponent} from '../signup/signup.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    loginData = {
        username: '',
        password: ''
    }

    constructor(public dialog: MatDialog) {
        console.log('In LoginDialogComponent')
    }



    openLoginDialog() {

        console.log('In LoginDialogComponent')


        let dialogRef = this.dialog.open(LoginDialogComponent, {
            position: {left: (window.innerWidth / 2)-150 + 'px'},
            autoFocus: false,
            width: '300px',
            height: '450px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.loginData = result;
        });
    }
    
    openSignupDialog() {

        console.log('In SignupDialogComponent')


        let dialogRef = this.dialog.open(SignupDialogComponent, {
            position: {left: (window.innerWidth / 2)-175 + 'px'},
            autoFocus: false,
            width: '350px',
            height: '550px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.loginData = result;
        });
    }
    
    close(){}

}
