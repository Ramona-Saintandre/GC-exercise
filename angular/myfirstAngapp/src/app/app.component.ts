import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to the Jungle';
  hideTitle = "True";
}
returnTitle() {
  return this.title;
}

toggleTitle($event) {
  console.log($event)
  this.hideTitle = !this.hideTitle;
}
