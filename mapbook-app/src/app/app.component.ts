import { Component, ViewChild } from '@angular/core';
import { NgbModule, NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mapbook-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MAP Book';

  @ViewChild('tabs')
  private tabs: NgbTabset;

  openForm(): void {
    console.log(this.tabs);
    this.tabs.select('ngb-tab-2');
  }
}
