import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";

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
     ],
    imports:[
        RouterModule.forChild(routes),
        CommonModule,
    ],
    exports:[
        RouterModule,
        MenuComponent,
        HomeComponent,
        CommonModule,
    ],
    
})

export class SharedModule {}
