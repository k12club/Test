import { Routes } from "@angular/router";
import { HeroesComponent } from "./page/heroes/heroes.component";
import { IronmarnComponent } from "./page/ironmarn/ironmarn.component";
import { ContentComponent } from "./page/content/content.component";
import { UserComponent } from "./page/user/user.component";


export const routes: Routes = [
  { path:'', component: UserComponent },
  //{ path:'', component: ContentComponent },
  { path:'ironman', component: IronmarnComponent },
];
