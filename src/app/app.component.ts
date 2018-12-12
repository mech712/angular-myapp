import { Component } from '@angular/core';
import { CountService } from './count.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CountService]
})
export class AppComponent {
  title = 'inf';
}
