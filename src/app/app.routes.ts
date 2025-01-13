import { Routes } from '@angular/router';
import { MainComponent } from './components/pages/main/main.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { KanbanPageComponent } from './components/pages/kanban-page/kanban-page.component';
import { IterationsPageComponent } from './components/pages/iterations-page/iterations-page.component';
import { HeaderComponent } from './components/layouts/header/header.component';

export const routes: Routes = [
    {path: '', component: HeaderComponent, children: [
        {path: '', redirectTo: 'main', pathMatch: 'full'},
        {path: 'main', component: MainComponent},
        {path: 'projects', component: ProjectsPageComponent},
        {path: 'team', component: TeamPageComponent},
        {path: 'kanban', component: KanbanPageComponent},
        {path: 'iterations', component: IterationsPageComponent}
    ]},
];
