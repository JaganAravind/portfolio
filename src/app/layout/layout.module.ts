import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, MainLayoutComponent, HomeComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SidebarModule.forRoot()
  ],
  exports: [HeaderComponent, SidebarComponent, MainLayoutComponent, HomeComponent]
})
export class LayoutModule { }
