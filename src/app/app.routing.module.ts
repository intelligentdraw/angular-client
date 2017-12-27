import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewDiagsComponent} from './new-diags/new-diags.component';
import {OpenDiagsComponent} from'./open-diags/open-diags.component';
import {CanvasComponent} from './canvas/canvas.component';

const appRoutes: Routes = [
{path: '', redirectTo:'/new', pathMatch: 'full'},
{path: 'new', component: NewDiagsComponent},
{path: 'canvas', component: CanvasComponent},
{path: 'open', component:OpenDiagsComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{
    
}


