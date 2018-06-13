import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  monsterPower:number;

  monsterName:string = 'Mobzilla';

  randGen(){
   this.monsterPower = Math.floor(Math.random() * 1000);
  }
}
