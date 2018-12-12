import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
  providers:[CountService]
})
export class BComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
