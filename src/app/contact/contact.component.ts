import { Component ,OnInit,ViewChild} from '@angular/core';
import { FormGroup,FormControl, NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('form',{static:true})contactForm!: NgForm

  ngOnInit(): void {
    setTimeout(() => {
      this.contactForm.setValue(
        {
          userData:{
            name: "John Doe",
            email: "mr_x@unknown.com"
          },
          summary: "summary",
          description: "Description"
      }
      )
    })

  }

  onSubmit(form: NgForm){
    console.log(this.contactForm);

    console.log(form.value);
    this.onReset()

  }

  onReset(){
    this.contactForm.reset()
  }

}
