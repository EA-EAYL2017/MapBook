import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> c93de6e06b2bcaae5a9cf247d42fcb633792865e
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { NameFilterPipe } from './name-filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent
    NameFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule
=======
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
>>>>>>> c93de6e06b2bcaae5a9cf247d42fcb633792865e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
