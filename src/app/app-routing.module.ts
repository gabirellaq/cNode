import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopicContentComponent } from './components/topic-content/topic-content.component';
import { TopicContainerComponent } from './components/topic-container/topic-container.component';
import { UserComponent } from './components/user/user.component';

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
    },{
        path:'user/:username',
        component: UserComponent
    }
];

@NgModule({
    imports:[ RouterModule.forRoot(routes) ],
    exports:[ RouterModule ]
})

export class AppRoutingModule {}