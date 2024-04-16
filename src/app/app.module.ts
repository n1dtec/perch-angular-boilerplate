import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import {TaskService} from "@app/task/task.service";
import {CommonModule} from "@angular/common";
import {TaskListComponent} from "@app/task/task-list/task-list.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    TranslateModule.forRoot(),
    NgbModule,
    ShellModule,
    HomeModule,
    TaskListComponent,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
