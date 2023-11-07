import { Component } from '@angular/core';
import { AdminApiTestApiClient } from 'src/app/api/admin-api.service.generated';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  constructor(private testApiClient: AdminApiTestApiClient) { }
  test() {
    this.testApiClient.testAuthen().subscribe({
      next: () => {
        console.log('ok');
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
