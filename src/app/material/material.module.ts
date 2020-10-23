import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const MaterialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatProgressBarModule
];

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
