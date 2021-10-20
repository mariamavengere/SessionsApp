import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators} from "@angular/forms";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  difference: any;
  timeStart: any;
  timeEnd: any;
  firtsTime: any;  
  secondTime: any;
  diff_result: any;
  hourDiff: any;
  i: any;

  


  constructor(
    public fb: FormBuilder
  ) { }


  sessionRecord = this.fb.group({
    starttime: ['', [Validators.required]],
    endtime: ['', [Validators.required]],
  });
   formatTime(timeStr: any) {
    
    const hours = timeStr.toString().substring(0, 2);
    const mins = timeStr.toString().substring(3, 5);
  
    const isTwelve = parseInt(hours) === 0 || parseInt(hours) === 12;
    const isPM = parseInt(hours) >= 12;

    return `${isTwelve ? "12" : isPM ? `0${parseInt(hours) % 12}` : hours}:${mins} ${isPM ? "PM" : "AM"}`
}
  session2(){
   const timeStart = document.querySelector<HTMLInputElement>("#firstTime")!.value;
   const timeEnd = document.querySelector<HTMLInputElement>("#secondTime")!.value;
   const difference =(this.timeStart-this.timeEnd)
   
     alert(difference)
    }
    
  session(){
  /*  let timeStart: Date;
    let timeEnd: Date;
    const firtsTime = document.getElementById('firstTime');
    const secondTime = document.getElementById('secondTime');

    timeStart = new Date();
    /*timeEnd = new Date("20/10/2021" + secondTime);
    let difference = this.timeStart - this.timeEnd;             
    let diff_result = new Date(difference);  
     
    let hourDiff = diff_result.getHours();*/
         
 // alert("Hour Difference:" + firtsTime);            

  }
  
  ngOnInit(): void {

 }
}
 



function session2() {
  throw new Error('Function not implemented.');
}

function session() {
  throw new Error('Function not implemented.');
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

