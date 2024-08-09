import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-change-detection-parent',
  templateUrl: './change-detection-parent.component.html',
  styleUrls: ['./change-detection-parent.component.css'],
})
export class ChangeDetectionParentComponent {



  user = { name: 'A' };
 
  changeName() {
    this.user.name = 'B';
  
  }


}
