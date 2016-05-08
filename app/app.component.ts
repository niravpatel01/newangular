import {Component} from 'angular2/core';
import {Config} from './config.servie';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/html/app.component.html',
  styles:['h1{color:goldenrod;}'],
  directives:[PlaylistComponent]

})
export class AppComponent {
  Main_Heading=Config.MAIN_HEADING;
  name:string;
 // videos:Array<Video>;
  test:string;
  myvideo:string;
  constructor(){
    this.test="not";
    this.name="Just a name";
    this.myvideo="thease are my videossss";

  }

}
/*
*
*
* import {Video} from './video';
 import {PlaylistComponent} from './playlist.component';
 videos:Array<Video>;
 constructor(){
 this.videos=[
 new Video(1,"Installing Django","How to install Djagnjo"),
 new Video(2, "Surviving the Wilderness","Wildlife journey")

 ];
 }*/
