import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewDiagsComponent} from './new-diags/new-diags.component';
import {OpenDiagsComponent} from'./open-diags/open-diags.component';
import {CanvasComponent} from './canvas/canvas.component';
import {ImportDiagComponent} from './import-diag/import-diag.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

const appRoutes: Routes = [
{path: '', redirectTo:'/new', pathMatch: 'full'},
{path: 'new', component: NewDiagsComponent},
{path: 'canvas/:drawingId', component: CanvasComponent},
{path: 'contact', component: ContactComponent},
{path: 'import', component: ImportDiagComponent},
{path: 'open', component:OpenDiagsComponent},
{path: 'about', component:AboutComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{
    
}


