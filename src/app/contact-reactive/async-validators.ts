import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { delay, map, Observable, of } from "rxjs";

//decent ref: https://www.thisdot.co/blog/using-custom-async-validators-in-angular-reactive-forms

export class AsyncValidators{

  static UserNameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors> |Observable<ValidationErrors> =>{

      return new Promise<ValidationErrors>((resolve,reject)=>{

        // console.log("For validation::::: " +control.value)
        console.log(new RegExp("^[a-z A-Z]+$").test(control.value));

        if(!new RegExp("^[a-z A-Z]+$").test(control.value)){
          resolve({invalidUserName:true})
        }else
          resolve({})
      })

    }
  }


  static createValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return of(new RegExp("^[a-z A-Z]+$").test(control.value))
        .pipe(delay(1000))
        .pipe(
          map((result: boolean) =>
            result ? { usernameAlreadyExists: true } : {}
          )
        );
    };
  }


}
