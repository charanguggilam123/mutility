import { Component } from '@angular/core';
import { JWTService } from './jwt-decoder.service';
import { JWT } from './jwt.model';

@Component({
  selector: 'app-jwt-decoder',
  templateUrl: './jwt-decoder.component.html',
  styleUrls: ['./jwt-decoder.component.css']
})
export class JwtDecoderComponent {

  token!: string
  response!:JWT
  secret!: string
  message!: "Signature Valid"|"Signature InValid"|undefined
  encodeFlag: boolean = true

  constructor(private jwtService: JWTService){}

  toggleEncodeFlag(){
    this.encodeFlag=!this.encodeFlag
  }


  decodeToken(){

    this.message=undefined
    this.jwtService.processToken(this.token).subscribe({next:(value)=>{
      this.response=value!

    },error:(err)=>{
      console.log(err);

    }});
  }

  verifySignature(){
    const secretSignature=this.encodeFlag?window.btoa(this.secret):this.secret

    this.jwtService.processToken(this.token,true,secretSignature).subscribe({next:(value)=>{
      this.response=value!
      if (this.response.signValid == true) {
        this.message='Signature Valid'

      } else if (this.response.signValid == false) {
        this.message='Signature InValid'

      }
    },error:(err)=>{
      console.log(err);

    }});
  }

}
