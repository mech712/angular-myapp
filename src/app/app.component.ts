import { Component } from '@angular/core';
import { CountService } from './count.service';
import { Counter } from './counter';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CountService, Counter]
})
export class AppComponent {
  title = 'inf';
}
