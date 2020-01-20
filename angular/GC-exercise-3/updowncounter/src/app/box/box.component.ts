import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
count:number = 0;
  constructor() { }
countUp(){
  this.count++;
}
countDown(){
  this.count--;
}
  ngOnInit() {
  }

}
