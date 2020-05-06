import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {ThemePalette} from '@angular/material/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {MatDialog} from "@angular/material/dialog";
import { DialogDataComponent } from '../dialog-data/dialog-data.component';
import {MatDialogConfig} from "@angular/material/dialog";


export interface StateGroup {
  letter: string;
  names: string[];
}
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  otherTheme = false;
  color: ThemePalette = 'warn';
  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });

  stateName='';

  stateGroups: StateGroup[] = [{
    letter: 'A',
    names: ['Andaman and Nicobar Islands ', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam']
  },
  {
     letter: 'B',
    names: ['Bihar']
  },
  {
    letter: 'C',
    names: ['Chandigarh ', 'Chhattisgarh']
  }, {
    letter: 'D',
    names: ['Delhi','Dadra and Nagar Haveli and Daman and Diu']
  }, {
    letter: 'G',
    names: ['Goa','Gujarat']
  }, {
    letter: 'H',
    names: ['Haryana','Himachal Pradesh']
  }, {
    letter: 'J',
    names: ['IdaJammu and Kashmir', '	Jharkhand']
  }, {
    letter: 'K',
    names: ['Karnataka', 'Kerala']
  }, {
    letter: 'L',
    names: ['Ladakh','Lakshadweep']
  }, {
    letter: 'M',
    names: ['Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
      'Mizoram']
  }, {
    letter: 'N',
    names: ['Nagaland']
  }, {
    letter: 'O',
    names: ['Odisha']
  }, {
    letter: 'P',
    names: ['Puducherry','Punjab']
  }, {
    letter: 'R',
    names: ['Rajasthan']
  }, {
    letter: 'S',
    names: [ 'Sikkim']
  }, {
    letter: 'T',
    names: ['Tamil Nadu', 'Telangana','Tripura']
  }, {
    letter: 'U',
    names: ['Uttar Pradesh','Uttarakhand']
  }, {
    letter: 'W',
    names: ['West Bengal']
  }];

  stateGroupOptions: Observable<StateGroup[]>;
  data = {};
  final=[];

  constructor(private dataService:DataService,private _formBuilder: FormBuilder,
    public dialog:MatDialog) { }

  ngOnInit(): void {
     let stateName='';
    this.dataService.getDailyData().subscribe(
      (respData)=>{
        this.data=respData;
        this.final.push(...respData["statewise"]);
        this.final.map((key,idx)=>{
          stateName=key.state
          console.log('statename',stateName)
         key.src="./assets/"+stateName+".jpg"
         console.log('data is :',key)
        });

    },
      error=>{console.log(error)}
    )

// autocomplete code
this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
.pipe(
  startWith(''),
  map(value => this._filterGroup(value))
);
// code ends

  }

// auto complete code

private _filterGroup(value: string): StateGroup[] {
  if (value) {
    return this.stateGroups
      .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
      .filter(group => group.names.length > 0);
  }

  return this.stateGroups;
}
// code ends

seeData(stateName:string){
const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data=stateName;
    this.dialog.open(DialogDataComponent, dialogConfig);

}

changeTheme(){
  this.otherTheme = !this.otherTheme;
 }
}
