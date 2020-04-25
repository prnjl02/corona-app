import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   data = {};
   see=false;
   final=[];;
   //respData={};
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  this.dataService.getDailyData().subscribe(
    (respData)=>{
      this.data=respData
  this.final.push(respData["statewise"]);
  },
    error=>{console.log(error)}
  )

  }

}
