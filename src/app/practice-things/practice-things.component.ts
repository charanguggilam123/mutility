import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-things',
  templateUrl: './practice-things.component.html',
  styleUrls: ['./practice-things.component.css']
})
export class PracticeThingsComponent implements OnInit {

  users: String[]=["ab","evaro","nee","baby"]
  number: number =0
  interval:any

  flag:boolean = true
  case: String="blah"
  ngOnInit(): void {
    this.interval=setInterval(()=>{
      // this.flag=!this.flag
      // this.number=(this.number+1)%5
      // console.log(this.number);
    },5000)
  }
  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

}
