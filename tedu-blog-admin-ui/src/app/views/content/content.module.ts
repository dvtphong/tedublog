import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { ContentRoutingModule } from './content-routing.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PanelModule } from 'primeng/panel';
import { BlockUIModule } from 'primeng/blockui';
import { PaginatorModule } from 'primeng/paginator';
import { BadgeModule } from 'primeng/badge';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TeduSharedModule } from 'src/app/shared/modules/tedu-shared.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { ContentComponent } from './content.component';
import { PostCategoriesComponent } from './post-categories/post-categories.component';
import { PostCategoryDetailComponent } from './post-category-detail/post-category-detail.component';
import { PostActivityLogsComponent } from './post-activity-logs/post-activity-logs.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostReturnReasonComponent } from './post-return-reason/post-return-reason.component';
import { PostSeriesComponent } from './post-series/post-series.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { SeriesPostsComponent } from './series-posts/series-posts.component';
import { DropdownModule } from '@coreui/angular';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import { PostsComponent } from './posts/posts.component';
import { SeriesComponent } from './series/series.component';

@NgModule({
  imports: [
    ContentRoutingModule,
    IconModule,
    CommonModule,
    ReactiveFormsModule,
    ChartjsModule,
    ProgressSpinnerModule,
    PanelModule,
    BlockUIModule,
    PaginatorModule,
    BadgeModule,
    CheckboxModule,
    TableModule,
    KeyFilterModule,
    TeduSharedModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    EditorModule,
    InputNumberModule,
    ImageModule,
    AutoCompleteModule,
    DynamicDialogModule
  ],
  declarations: [ContentComponent,PostsComponent, PostCategoriesComponent, PostCategoryDetailComponent, 
    PostActivityLogsComponent, PostDetailComponent, PostReturnReasonComponent, PostSeriesComponent, SeriesComponent, SeriesDetailComponent, SeriesPostsComponent]
})
export class ContentModule {
}
