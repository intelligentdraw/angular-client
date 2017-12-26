import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {MatDialogModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { NewUsecaseDialogComponent } from './usecase-diag/new-usecase-dialog/new-usecase-dialog.component';
import { NewDiagsComponent } from './new-diags/new-diags.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OpenDiagsComponent } from './open-diags/open-diags.component';
import { LoginDialogComponent } from './login/login.component';
import { SignupDialogComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    NewUsecaseDialogComponent,
    NewDiagsComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    OpenDiagsComponent,
    LoginDialogComponent,
    SignupDialogComponent
  ],
  entryComponents: [
    NewUsecaseDialogComponent,
    LoginDialogComponent,
    SignupDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
