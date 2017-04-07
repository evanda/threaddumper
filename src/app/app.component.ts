import { Component } from '@angular/core';
import {Thread} from "./thread";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  output = "waiting...";
  threads : Thread[];

  pasted($event) {
    console.log($event, $event.target, $event.currentTarget);
    console.log("text: ",$event.target.value);
    try {
      var x = JSON.parse($event.target.value);

      console.log("json: ",x);
      this.threads = <Thread[]>x;
      console.log("object: ",this.threads);
      // var t2 : Thread = new Thread();
      // t2.threadName = "ralph";
      // t2.threadId = 43;
      // console.log("other ob: ",t2);
    } catch(e) {
      console.log("Failed to parse as JSON.", x , e);
    }

  }
}
