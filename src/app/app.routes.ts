import { Routes } from '@angular/router';
import { MainComponent } from './components/pages/main/main.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { KanbanPageComponent } from './components/pages/kanban-page/kanban-page.component';
import { IterationsPageComponent } from './components/pages/iterations-page/iterations-page.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { SimplanumProjectPageComponent } from './components/pages/simplanum-project-page/simplanum-project-page.component';
import { RocketProjectPageComponent } from './components/pages/rocket-project-page/rocket-project-page.component';
import { CleanpageComponent } from './components/pages/cleanpage/cleanpage.component';

export const routes: Routes = [
    {path: '', component: HeaderComponent, children: [
        {path: '', redirectTo: 'main', pathMatch: 'full'},
        {path: 'main', component: MainComponent, children: [
            {path: 'toBeAgreed', component: CleanpageComponent},
            {path: 'onReview', component: CleanpageComponent},
            {path: 'forWork', component: CleanpageComponent},
            {path: 'drafts', component: CleanpageComponent}
        ]},
        {path: 'projects', component: ProjectsPageComponent, children: [
            {path: 'simplanum', component: SimplanumProjectPageComponent},
            {path: 'rocket', component: RocketProjectPageComponent}
        ]},
        {path: 'team', component: TeamPageComponent},
        {path: 'kanban', component: KanbanPageComponent},
        {path: 'iterations', component: IterationsPageComponent},
        
    ]},
];
