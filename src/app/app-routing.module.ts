import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopicContentComponent } from './components/topic-content/topic-content.component';
import { TopicContainerComponent } from './components/topic-container/topic-container.component';

const routes:Routes = [
    {
        path:'',
        redirectTo:'topicontent/all',
        pathMatch: 'full'
    },{
        path:'topicontent/:id',
        component: TopicContentComponent
    },{
        path:'topicontainer/:id',
        component: TopicContainerComponent
    }
];

@NgModule({
    imports:[ RouterModule.forRoot(routes) ],
    exports:[ RouterModule ]
})

export class AppRoutingModule {}