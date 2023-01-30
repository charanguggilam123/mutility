import { Component, ElementRef,OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-jlint',
  templateUrl: './jlint.component.html',
  styleUrls: ['./jlint.component.css']
})
export class JlintComponent implements OnInit {

  selectedOption!: string
  options = [
    { name: "tab", value: "tab" },
    { name: "2-space", value: "2" }
  ]

  selected(some: string){

  }
  //static with value true is required if using in ngOnInit or else you get error that field is undefined
  @ViewChild("input",{static:true}) inputData!: ElementRef
  transFormedJson!: String// = "Your transformed data will appear here"

  error!: String

  ngOnInit(): void {
    this.inputData.nativeElement.value="{\"name\":\"Saicharan\",\"age\":24,\"mobile\":\"+91 8500160838\",\"address\":{\"firstLine\":\"B-23\",\"street\":\"Nunna\",\"PIN\":521212}}"
  }

  copy(){
    // const copyEle: HTMLTextAreaElement=document.getElementById("lint-output")!
    const copyEle: HTMLElement=document.getElementById("lint-output")!
    console.log("*******8");
    console.log(copyEle);
    console.log(copyEle.innerHTML);
    console.log("*******8");
    const copyText: any=document.getElementById("lint-output")
    // copyText.select(); //if present it provides blue color selected animation
    navigator.clipboard.writeText(copyText.value);

  }

  onPrettify(input: String){
    console.log(this.inputData.nativeElement);

    this.transFormedJson=""
    try {
      this.transFormedJson=JSON.parse(this.inputData.nativeElement.value)

    } catch (error: any) {
      console.log('in catch');

      console.log(error)
      this.error=error.message
     /* if (error instanceof SyntaxError) {
        console.log(error.name);
        console.log(error.message);
    } else {
        console.error(error.message);
    }*/

    }

    // console.log(this.transFormedJson);
  }

}
