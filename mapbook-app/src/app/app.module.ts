import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { NameFilterPipe } from './name-filter.pipe';
import { AddEmployeeToCourseComponent } from './add-employee-to-course/add-employee-to-course.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    NameFilterPipe,
    AddEmployeeToCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AddEmployeeToCourseComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
