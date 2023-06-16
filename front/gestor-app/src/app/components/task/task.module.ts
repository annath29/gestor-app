import { Component, NgModule } from "@angular/core";
import { ListTaskComponent } from './list/list-task.component';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { SharedModule } from "../shared/shared.module";
import { FormComponent } from "./form/form.component";
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes =[
    {
        path:'list',
        component:ListTaskComponent,
    },
    {
        path:'new',
        component:CreateComponent,
    },
    {
        path:'update',
        component:UpdateComponent,
    },
    {
        path:'delete',
        component:DeleteComponent,
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes),
        FormsModule,
        SharedModule,
        CommonModule
    ],
    exports:[RouterModule],
    declarations:[
        ListTaskComponent,
        CreateComponent,
        FormComponent,
        UpdateComponent,
        DeleteComponent
    ],
})

export class taskRoutingModule {}
