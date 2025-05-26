import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpUserService } from '../../Services/sign-up-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router ,
    private loginService: SignUpUserService
  ) { }
  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required])
    });
    localStorage.removeItem('access_token');

  }

  onSubmit() {
    this.submitted = true;
    if (this.LoginForm.invalid) {
      return;
    }

    const loginData = this.LoginForm.value;
    this.LoginForm.reset();
    this.submitted = false;
    this.loginService.LoginUser(loginData).subscribe({  
      next: (response: any) => {
        debugger;
        localStorage.setItem('access_token',response.token);
        console.log('Login successful!', response);
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {

      }
    });

  }
}
