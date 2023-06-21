import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListTaskComponent } from './components/task/list/list-task.component';
import { HomeComponent } from "./components/shared/home/home.component";

const routes:Routes=[
    {
        path:'home',
        loadChildren:()=> import('./components/shared/shared.module').then((m)=>m.SharedModule)
    },
    {
        path:'task',
        loadChildren:()=> import('./components/task/task.module').then((m)=>m.taskRoutingModule)
    },
    {
        path:'**',
        redirectTo:'task'
    }
]

@NgModule({
   imports:[
    RouterModule.forRoot(routes)
   ],
   exports:[
    RouterModule,
   ]
})
export class AppRoutingModule{

}