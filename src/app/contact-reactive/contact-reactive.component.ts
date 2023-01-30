import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AsyncValidators } from './async-validators';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {

  contactForm!: FormGroup
  genders: string[]=["Male","Female"]

  ngOnInit(): void {
    this.contactForm= new FormGroup(
      {
        userData: new FormGroup(
          {
            name: new FormControl('John Doe',{validators:[Validators.required],asyncValidators:[AsyncValidators.UserNameValidator()]}),
            gender: new FormControl(null,{validators:[Validators.required]}),
            email: new FormControl(null,{validators:[Validators.required,Validators.email]}),
          }
        ),
        summary: new FormControl('',{validators:[Validators.required]}),
        description: new FormControl('')

    })

    this.contactForm.statusChanges.subscribe(data=>{
      console.log(data);

    })
  }

  onSubmit(){
    console.log('inssss');

    console.log(this.contactForm.get('userData'))
    console.log(this.contactForm.get('userData')?.get('name'))
    console.log(this.contactForm.get('userData')?.get('name')?.hasError('required'))
    console.log(this.contactForm.get('userData')?.get('email')?.hasError('requireda'))

  }

  onReset(){
    this.contactForm.reset()
  }
}
