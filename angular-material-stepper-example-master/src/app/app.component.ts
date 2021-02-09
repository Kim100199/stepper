import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Material Stepper Example with single '
    + 'Reactive form across mulitple child components';

  registrationForm: FormGroup;

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'personalDetails': new FormGroup({
        'firstname': new FormControl(null),
        'mi': new FormControl(null),
        'lastname': new FormControl(null),
      }),
      'contactDetails': new FormGroup({
        'email': new FormControl(null),
        'phone': new FormControl(null)
      })
    });

  }

}
