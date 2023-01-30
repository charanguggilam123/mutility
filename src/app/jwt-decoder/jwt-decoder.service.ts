import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { JWT } from "./jwt.model";




@Injectable
({ providedIn: 'root' })
export class JWTService {

  constructor(private http:HttpClient){}

  mockResponse:JWT={ "headers": {
    "alg": "HS256"
},
"payload": {
    "sub": "qwerty@gmail.com",
    "iat": 1674541217,
    "exp": 1674544817
},
"signValid": true
  }

  processToken(token: string,verify: boolean=false,secret?: string)
  {
    console.log('in service:'+ secret);

    // return this.mockResponse;
    return this.http.post<JWT>("http://localhost:8080/decode-jwt",{token,secret: secret},
    {params:{"verify-sign":verify},observe:"response"}
    ).pipe(
      tap(resp=>{
        console.log('response tapped: '+JSON.stringify(resp));

      }),map(resp=>{
        return resp.body
      })
    )
  }

}
