import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-change-detection-child',
  templateUrl: './change-detection-child.component.html',
  styleUrls: ['./change-detection-child.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush  // if we use this CDS then it wouldn't pick up the change
})
export class ChangeDetectionChildComponent {
  @Input() user: any;

}
