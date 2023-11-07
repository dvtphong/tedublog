import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
  <p-toast position="top-center"></p-toast>
  <router-outlet></router-outlet>
  <p-confirmDialog
  header="Xác nhận"
  acceptLabel="Có"
  rejectLabel="Không"
  icon="pi pi-exclamation-triangle"
></p-confirmDialog>
  <ngx-spinner bdColor = "rgba(0, 0, 0, 0.8)" size = "medium" color = "#fff" type = "ball-spin-clockwise" [fullScreen] = "true"><p style="color: white" > Vui lòng đợi... </p></ngx-spinner>
  `,
})

export class AppComponent implements OnInit {
  title = 'TEDU Blog Admin UI';

  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService
  ) {
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}
