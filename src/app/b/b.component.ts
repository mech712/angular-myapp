import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';
import { Counter } from '../counter';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
  providers:[CountService, Counter]
})
export class BComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
