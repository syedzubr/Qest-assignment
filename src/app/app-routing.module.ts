import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersOrderTableComponent } from './users-order-table/users-order-table.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: '',
    component: UsersOrderTableComponent
  },
  {
    path: 'filter-table',
    component: TableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
