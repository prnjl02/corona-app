import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.css']
})
export class DialogDataComponent implements OnInit {
data ={};
final =[];
 stateObject={};
imgSrc=[
  "./assets/wholeindia.jpg",
   "./assets/mh.png",
   "./assets/gj.jpg",
   "./assets/gj.jpg",
   "./assets/rj.jpg",
   "./assets/tn.jpg",
   "./assets/mp.png",
   "./assets/up.png",
   "./assets/telangana.jpg",
   "./assets/ap.jpg",
   "./assets/karnataka.jpg",
   "./assets/kerala.png",
   "./assets/jammu.png",
   "./assets/wb.jpg",
   "./assets/har.jpg",
   "./assets/pun.png",
   "./assets/bihar.png",
   "./assets/ori.png",
   "./assets/uk.png",
   "./assets/jk.jpg",
   "./assets/hp.jpg",
   "./assets/ch.jpg",
   "./assets/assam.jpg",
   "./assets/anni.jpg",
   "./assets/chand.jpg",
   "./assets/ladakh.png",
   "./assets/megha.png",
   "./assets/pudu.jpg",
   "./assets/goa.jpg",
   "./assets/mani.jpg",
   "./assets/tripura.jpg",
   "./assets/mizo.png",
   "./assets/aruna.png",
   "./assets/naga.png",
   "./assets/dnn.jpg",
   "./assets/daman.jpg",
   "./assets/laksh.jpg",
   "./assets/sikk.png",
 ]
  constructor(private dataService:DataService , 
              @Inject(MAT_DIALOG_DATA) public stateName: any) {}
                                         

  ngOnInit(): void {
    let stateEntered:string= this.stateName;
   
    this.dataService.getDailyData().subscribe(
      (respData)=>{
        this.data=respData;
        this.final.push(...respData["statewise"]);
        for (let i=0;i<this.final.length;i++){
          if(this.final[i].state===stateEntered){
            this.stateObject['active']=this.final[i].active;
            this.stateObject['confirmed']=this.final[i].confirmed;
            this.stateObject['deaths']=this.final[i].deaths;
            this.stateObject['recovered']=this.final[i].recovered;
            this.stateObject['date']=this.final[i].lastupdatedtime;
          }
        }
       // console.log('final state data is :',this.stateObject);
        // this.final.map((key,idx)=>{
        //  key.src = this.imgSrc[idx];
        // });
      //  console.log(this.final);
    },
      error=>{console.log(error)}
    )

  }

}
