import { NgModule } from "@angular/core";
import { ListTaskComponent } from './list/list-task.component';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes =[
    {
        path:'',
        component:ListTaskComponent,
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes),
        CommonModule
    ],
    exports:[RouterModule,],
    declarations:[
        ListTaskComponent,
    ],
})

export class taskRoutingModule {}
