import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";



@NgModule({
    declarations:[
        MenuComponent
     ],
    imports:[
        RouterModule,
        CommonModule,
    ],
    exports:[
        MenuComponent,
        CommonModule,
    ],
    
})

export class SharedModule {}
