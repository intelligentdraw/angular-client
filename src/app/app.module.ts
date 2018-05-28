import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {MatDialogModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
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
import { ImportDiagComponent } from './import-diag/import-diag.component';
import { ContactComponent } from './contact/contact.component';
import { DuplicateDialogComponent } from './canvas/duplicate-dialog/duplicate-dialog.component';
import { ExportDialogComponent } from './canvas/export-dialog/export-dialog.component';
import { TrashDialogComponent } from './canvas/trash-dialog/trash-dialog.component';
import { InfoDialogComponent } from './canvas/info-dialog/info-dialog.component';
import { ShareDialogComponent } from './canvas/share-dialog/share-dialog.component';
import {ServerService} from './server.services';
import {WindowRefService} from './window.services';
import { ManageActorDialogComponent } from './canvas/manage-actor-dialog/manage-actor-dialog.component';



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
    ImportDiagComponent,
    ContactComponent,
    DuplicateDialogComponent,
    ExportDialogComponent,
    TrashDialogComponent,
    InfoDialogComponent,
    ShareDialogComponent,
    ManageActorDialogComponent,
  ],
  entryComponents: [
    NewUsecaseDialogComponent,
    LoginDialogComponent,
    SignupDialogComponent,
    NewSequenceDialogComponent,
    DuplicateDialogComponent,
    ExportDialogComponent,
    TrashDialogComponent,
    InfoDialogComponent,
    ShareDialogComponent,
    ManageActorDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServerService,WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
