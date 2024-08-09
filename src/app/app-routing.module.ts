import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionChildComponent } from './ChangeDetection/change-detection-child/change-detection-child.component';
import { ChangeDetectionParentComponent } from './ChangeDetection/change-detection-parent/change-detection-parent.component';
import { T101Component } from './t101/t101.component';

const routes: Routes = [
    {
    path: 'test101',
    component: T101Component
    },
    {
      path: 'CDSP',
      component: ChangeDetectionParentComponent
      },
      {
        path: 'CDSC',
        component: ChangeDetectionChildComponent
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
