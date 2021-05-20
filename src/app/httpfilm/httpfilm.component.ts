import { Component, OnInit } from '@angular/core';
import {Move} from '../move';

@Component({
  selector: 'app-httpfilm',
  templateUrl: './httpfilm.component.html',
  styleUrls: ['./httpfilm.component.css']
})
export class HttpfilmComponent implements OnInit {
commits:any;
movie:Move={title:"",year:""};
  constructor() { }

  ngOnInit(): void {
  }

  getMove()
  {
    fetch("http://www.omdbapi.com/?apikey=bb1b3c97&t="+this.movie.title+"&y="+this.movie.year+"&plot=full")
    .then(response=>response.json())
    .then(res=>this.commits=res)
  }
}

