import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpUserService } from '../../Services/sign-up-user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signup!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private loginService: SignUpUserService
  ) { }

  ngOnInit(): void {
    this.signup = this.formBuilder.group({
      Username: new FormControl('', [ Validators.required, Validators.maxLength(50)]),
      Email: new FormControl('', [ Validators.required, Validators.email ]),
      Password: new FormControl('', [  Validators.required, Validators.minLength(6) ]),
      ConfirmPassword: new FormControl('', Validators.required)}, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator: ValidatorFn = (form: AbstractControl): { [key: string]: any } | null => {
    const password = form.get('Password')?.value;
    const confirmPassword = form.get('ConfirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    this.submitted = true;

    if (this.signup.invalid) {
      return;
    }

    //const signUpData = {
    //  Username: this.signup.value.Username,
    //  Email: this.signup.value.Email,
    //  Password: this.signup.value.Password
    //};
    const signUpData = this.signup.value;
    this.signup.reset();
    this.submitted = false;
    this.loginService.registerUser(signUpData).subscribe({
      next: (response: any) => {
        console.log('Registration successful!', response);

        this.router.navigate(['/login']);
      },
      error: (err: any) => {
      }
    });
  }

}
