import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetAgePipe } from './get-age.pipe';
import { UsersOrderTableComponent } from './users-order-table/users-order-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    GetAgePipe,
    UsersOrderTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
