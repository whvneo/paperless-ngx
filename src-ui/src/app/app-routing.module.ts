import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppFrameComponent } from './components/app-frame/app-frame.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { DocumentDetailComponent } from './components/document-detail/document-detail.component'
import { DocumentListComponent } from './components/document-list/document-list.component'
import { CategoryListComponent } from './components/manage/category-list/category-list.component'
import { CorrespondentListComponent } from './components/manage/correspondent-list/correspondent-list.component'
import { DocumentTypeListComponent } from './components/manage/document-type-list/document-type-list.component'
import { LogsComponent } from './components/manage/logs/logs.component'
import { SettingsComponent } from './components/manage/settings/settings.component'
import { TagListComponent } from './components/manage/tag-list/tag-list.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { DocumentAsnComponent } from './components/document-asn/document-asn.component'
import { DirtyFormGuard } from './guards/dirty-form.guard'
import { StoragePathListComponent } from './components/manage/storage-path-list/storage-path-list.component'
import { TasksComponent } from './components/manage/tasks/tasks.component'
import { DirtyDocGuard } from './guards/dirty-doc.guard'

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: AppFrameComponent,
    canDeactivate: [DirtyDocGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'documents', component: DocumentListComponent },
      { path: 'view/:id', component: DocumentListComponent },
      { path: 'documents/:id', component: DocumentDetailComponent },
      { path: 'asn/:id', component: DocumentAsnComponent },
      { path: 'tags', component: TagListComponent },
      { path: 'documenttypes', component: DocumentTypeListComponent },
      { path: 'categories', component: CategoryListComponent },
      { path: 'correspondents', component: CorrespondentListComponent },
      { path: 'storagepaths', component: StoragePathListComponent },
      { path: 'logs', component: LogsComponent },
      {
        path: 'settings',
        component: SettingsComponent,
        canDeactivate: [DirtyFormGuard],
      },
      { path: 'tasks', component: TasksComponent },
    ],
  },

  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
