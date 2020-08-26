import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { EmptyCheckPipe } from './pipes/empty-check.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    SearchFilterPipe,
    EmptyCheckPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    SearchFilterPipe,
    EmptyCheckPipe
  ]
})
export class SharedModule { }
