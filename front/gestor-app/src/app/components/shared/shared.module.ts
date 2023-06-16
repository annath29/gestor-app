import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { FilterComponent } from './filter/filter.component';

const routes: Routes =[
    {
        path:'',
        component:HomeComponent,
    }
]

@NgModule({
    declarations:[
        MenuComponent,
        HomeComponent,
        FilterComponent,
     ],
    imports:[
        RouterModule.forChild(routes),
        CommonModule,
    ],
    exports:[
        RouterModule,
        MenuComponent,
        FilterComponent,
        HomeComponent,
        CommonModule,
    ],
    
})

export class SharedModule {}
