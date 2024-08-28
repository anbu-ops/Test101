import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-async-pipe-impl',
  templateUrl: './async-pipe-impl.component.html',
  styleUrls: ['./async-pipe-impl.component.css']
})
export class AsyncPipeImplComponent {

  obs$ = of(["ankit","Banerjee"])
}
