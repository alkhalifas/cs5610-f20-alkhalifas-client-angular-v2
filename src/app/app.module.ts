import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {FormsModule} from '@angular/forms';
import {CourseService} from '../services/course-service';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [
    CourseService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
