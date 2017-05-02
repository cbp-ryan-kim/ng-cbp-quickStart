import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IconsComponent } from './icons/icons.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  { path: '', redirectTo: '/sample', pathMatch: 'full' },
  { path: 'sample', component: SampleComponent },
  { path: 'icons', component: IconsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
