import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './http.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TopicContentComponent } from './components/topic-content/topic-content.component';
import { FilterPipe,TimePipe } from './filter.pipe';
import { TopicContainerComponent } from './components/topic-container/topic-container.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
    TopicContentComponent,
    FilterPipe,
    TimePipe,
    TopicContainerComponent,
    TopicListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
