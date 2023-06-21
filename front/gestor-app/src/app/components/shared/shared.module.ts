import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";
import { ConfirmationComponent } from "./confirmation/confirmation.component";

@NgModule({
    declarations:[
        MenuComponent,
        ConfirmationComponent,
     ],
    imports:[
        RouterModule,
        CommonModule,
    ],
    exports:[
        RouterModule,
        ConfirmationComponent,
        MenuComponent,
        CommonModule,
    ],
    
})

export class SharedModule {}
