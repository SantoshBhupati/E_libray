import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  paramFlag: number=1;// Initialize this variable

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.paramFlag = +params['paramFlag']; // Get the 'paramFlag' value from the URL
    });
  }
}
