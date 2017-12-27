import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {MatDialogModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app.routing.module';



import { AppComponent } from './app.component';
import { NewUsecaseDialogComponent } from './usecase-diag/new-usecase-dialog/new-usecase-dialog.component';
import { NewDiagsComponent } from './new-diags/new-diags.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OpenDiagsComponent } from './open-diags/open-diags.component';
import { LoginDialogComponent } from './login/login.component';
import { SignupDialogComponent } from './signup/signup.component';
import { NewSequenceDialogComponent } from './sequence-diag/new-sequence-dialog/new-sequence-dialog.component';
import { CanvasComponent } from './canvas/canvas.component';
import { AboutComponent } from './about/about.component';
import { RecentComponent } from './recent/recent.component';
import { ImportDiagComponent } from './import-diag/import-diag.component';


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
    SignupDialogComponent,
    NewSequenceDialogComponent,
    CanvasComponent,
    AboutComponent,
    RecentComponent,
    ImportDiagComponent
  ],
  entryComponents: [
    NewUsecaseDialogComponent,
    LoginDialogComponent,
    SignupDialogComponent,
    NewSequenceDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
