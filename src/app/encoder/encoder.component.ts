import { Component } from '@angular/core';

@Component({
  selector: 'app-encoder',
  templateUrl: './encoder.component.html',
  styleUrls: ['./encoder.component.css']
})
export class EncoderComponent {

  transformed!: String

  onSubmit(input: any,encodeFlag: boolean){
    console.log(input);
    console.log(encodeFlag);

    if(encodeFlag)
      this.transformed=window.btoa(input)
    else
      this.transformed=window.atob(input)

    console.log(this.transformed);


  }

}
