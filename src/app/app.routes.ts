import { Routes } from '@angular/router';
import { MainComponent } from './components/pages/main/main.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { KanbanPageComponent } from './components/pages/kanban-page/kanban-page.component';
import { IterationsPageComponent } from './components/pages/iterations-page/iterations-page.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { SimplanumProjectPageComponent } from './components/pages/simplanum-project-page/simplanum-project-page.component';
import { RocketProjectPageComponent } from './components/pages/rocket-project-page/rocket-project-page.component';
import { DraftsSubComponent } from './components/pages/drafts-sub/drafts-sub.component';
import { ForWorkSubComponent } from './components/pages/for-work-sub/for-work-sub.component';
import { OnReviewSubComponent } from './components/pages/on-review-sub/on-review-sub.component';
import { ToBeAgreedSubComponent } from './components/pages/to-be-agreed-sub/to-be-agreed-sub.component';

export const routes: Routes = [
    {path: '', component: HeaderComponent, children: [
        {path: '', redirectTo: 'main', pathMatch: 'full'},
        {path: 'main', component: MainComponent, children: [
            {path: 'toBeAgreed', component: ToBeAgreedSubComponent},
            {path: 'onReview', component: OnReviewSubComponent},
            {path: 'forWork', component: ForWorkSubComponent},
            {path: 'drafts', component: DraftsSubComponent}
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
