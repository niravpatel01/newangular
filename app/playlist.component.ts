import {Component} from 'angular2/core';
import {Video} from './video';

import {Config} from './config.servie';

@Component({
  selector:"playlist",
  templateUrl:'app/playlist.component.html',
  inputs:['mytest']
})
export class PlaylistComponent{
  playlistname:string;
videos:Array<Video>;



  constructor()
  {
    this.playlistname="Playlist";
    this.videos=[
      new Video(1,"First","First Video"),
      new Video(2,"Second","Second Video"),
      new Video(3,"Third","Third Video")

    ];
  }
  onSelect (v,test)
  {

this.playlistname=v.desc;
  }
  onAdd(v)
  {
    this.videos.push(new Video(this.videos.length+1,v ,v));
    console.log(v);
  }
  onSearch(v)
  {
    this.videos.pop();
  }
}
