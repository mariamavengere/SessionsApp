import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, FormControl} from "@angular/forms";
import * as moment from 'moment';
import { Moment, now } from 'moment';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  timeStart!: number;
  timeEnd!: number;
  s!: string;


  constructor(
    public fb: FormBuilder
  ) { }


  sessionRecord = new FormGroup({
    starttime: new FormControl ('', [Validators.required, Validators.minLength(1)]),
    endtime: new FormControl('', [Validators.required, Validators.minLength(1)]),
  })
  get f() {
    return this.sessionRecord.controls;
  }
   formatTime(timeStr: any) {
    
}

onReset(){
  this.sessionRecord.reset()
}
  session2(){

    const timeStart = document.querySelector<HTMLInputElement>("#firstTime")!.value;
   const timeEnd = document.querySelector<HTMLInputElement>("#secondTime")!.value;

   const ms = moment(timeStart," HH:mm").diff(moment(timeEnd,"HH:mm"));
   const d = moment.duration(ms);
   const s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
  
  const element: HTMLElement = document.getElementById('third') as HTMLElement;
    element.innerHTML = 'The session duration is' + '' +'' + s + 'hrs';

    }
    

  
  ngOnInit(): void {

 }
}
 





