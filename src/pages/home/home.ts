import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  posts: any;
  infoPosts: any;
  public tapCounter: string = "Milano";
  public position: number = 0;
  
  fromNice()
	{
		this.tapCounter = "Nice" ;
		this.http.get('https://api.sandbox.amadeus.com/v1.2/rail-stations/autocomplete?apikey=ZDxf6DCpuQABbJ8GinUa7FlwaSFBbfbW&term=Nice')		
		.map(res => res.json())
		.subscribe(
		data => {
			this.posts = data;
			
		},
		err => {
			console.log("ERROR")
		}
		);
	}

	fromParis()
	{
		this.tapCounter = "Paris";
		
		this.http.get('https://api.sandbox.amadeus.com/v1.2/rail-stations/autocomplete?apikey=ZDxf6DCpuQABbJ8GinUa7FlwaSFBbfbW&term=Paris')		
		.map(res => res.json())
		.subscribe(
		data => {
			this.posts = data;
			
		},
		err => {
			console.log("ERROR")
		}
		);
	}
	
	fromMilano()
	{
		//update the text
		this.tapCounter = "Milano";
		
		// call the JSON API and get the data to pass to home.html
		// new for RAIL (26/04/2018)		
		this.http.get('https://api.sandbox.amadeus.com/v1.2/rail-stations/autocomplete?apikey=ZDxf6DCpuQABbJ8GinUa7FlwaSFBbfbW&term=Milano')		
		.map(res => res.json())
		.subscribe(
		data => {
			this.posts = data;
			
		},
		err => {
			console.log("ERROR")
		}
		);
	}
	
	infoNice()
	{
		this.tapCounter = "INFO Nice" ;
		this.http.get('https://api.sandbox.amadeus.com/v1.2/rail-station/8304501?apikey=ZDxf6DCpuQABbJ8GinUa7FlwaSFBbfbW')		
		.map(res => res.json())
		.subscribe(
		data => {
			this.infoPosts = data;
			
		},
		err => {
			console.log("ERROR")
		}
		);
	}
 
  constructor(public navCtrl: NavController, public http: Http)
  {
  //the App starts here 
   this.fromMilano();
 
  }
  
}
 
 
 
 /*
  API from here
  https://sandbox.amadeus.com/travel-innovation-sandbox/apis/get/travel-intelligence/top-destinations
  
  
  {
  "origin": "BOS",
  "period": "2016-09",
  "results": [
    {
      "international": [
        "0"
      ],
      "destination": "NYC",
      "flights": 288,
      "travelers": 74537
    },
    {
      "international": [
        "0"
      ],
      "destination": "CHI",
      "flights": 356,
      "travelers": 72265
    },
    {
      "international": [
        "0"
      ],
      "destination": "WAS",
      "flights": 136,
      "travelers": 59506
    },

  
 */
 

