import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { IndexComponent } from "./index/index.component";
import { GuardGuard } from './servicios/guard.guard';
import { SinAccesoComponent } from './componentes/sin-acceso/sin-acceso.component';
import { ExperienciaDashComponent } from './componentes/experiencia-dash/experiencia-dash.component';
import { ExpbyidComponent } from './componentes/expbyid/expbyid.component';
import { NewExpComponent } from './componentes/new-exp/new-exp.component';
import { EdubyidComponent } from './componentes/edubyid/edubyid.component';
import { NewEduComponent } from './componentes/new-edu/new-edu.component';
import { HardbyidComponent } from './componentes/hardbyid/hardbyid.component';
import { NewHardComponent } from './componentes/new-hard/new-hard.component';
import { ProyectobyidComponent } from './componentes/proyectobyid/proyectobyid.component';
import { NewProyectoComponent } from './componentes/new-proyecto/new-proyecto.component';

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: "full" },
  { path: 'index', component: IndexComponent },
  { path: 'denegado', component: SinAccesoComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [GuardGuard] },
  { path: 'expid/:id', component: ExpbyidComponent },
  { path: 'new/exp', component: NewExpComponent },
  { path: 'eduid/:id', component: EdubyidComponent },
  { path: 'new/edu', component: NewEduComponent },
  { path: 'hardid/:id', component: HardbyidComponent },
  { path: 'new/hard', component: NewHardComponent },
  { path: 'proyecto/:id', component: ProyectobyidComponent },
  { path: 'new/proyecto', component: NewProyectoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
