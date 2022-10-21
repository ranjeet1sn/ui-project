import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent, MapViewComponent } from './components';

const routes: Routes = [
  {
    path: 'list',
    component: ListViewComponent,
  },
  {
    path: 'map',
    component: MapViewComponent,
  },
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
