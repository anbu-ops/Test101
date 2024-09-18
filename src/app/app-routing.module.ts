import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionChildComponent } from './ChangeDetection/change-detection-child/change-detection-child.component';
import { ChangeDetectionParentComponent } from './ChangeDetection/change-detection-parent/change-detection-parent.component';
import { T101Component } from './t101/t101.component';
import { SearchPipeImplComponent } from './search-pipe-impl/search-pipe-impl.component';
import { AsyncPipeImplComponent } from './async-pipe-impl/async-pipe-impl.component';
<<<<<<< HEAD
import { InputTypeComponent } from './input-type/input-type.component';
=======
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
>>>>>>> a27a79baa935442894170c5a8bdb7d8b639d2550

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
        },{
          path: 'stocks',
          component: SearchPipeImplComponent
        },{
          path: 'async',
          component: AsyncPipeImplComponent
<<<<<<< HEAD
        },{
          path: 'inputs',
          component: InputTypeComponent
=======
        },
        {
          path: 'reactive-form',
          component: ReactiveformComponent
>>>>>>> a27a79baa935442894170c5a8bdb7d8b639d2550
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
