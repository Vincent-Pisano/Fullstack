import { Component, OnInit } from '@angular/core';
import { YoutubeVideo } from '../models/youtubeVideo';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css']
})
export class FunComponent implements OnInit {

  videos: Array<YoutubeVideo>;
  videosList: Array<YoutubeVideo>;
  videoSelected: YoutubeVideo;
  yearSelected: number;
  year: string;

  constructor(private service: YoutubeService) {
    this.yearSelected = 1;
   }

  ngOnInit(): void {
    this.getVideos(this.yearSelected);
  }

  public getVideos(year: number): void{
    this.videos = this.service.getVideos(year);
  }

  public select (video: YoutubeVideo){
    this.videoSelected = video;
  }

  public onChange($event: any)
  {​​
    this.yearSelected = $event.target.value;
    this.videos = this.service.getVideos(this.yearSelected);
  }​​

}
