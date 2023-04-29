import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SearchComponent, ListComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, SearchComponent, ListComponent],
})
export class ComponentsModule {}
