import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [ SidebarComponent ],
  exports: [ SidebarComponent ]
})
export class SidebarModule { }
