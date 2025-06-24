import{a as s,b as i,c as f,d as _}from"./chunk-C7W376T6.js";import{$ as I,C as h,U as x,W as P,_ as v,a as C,d as r,s as m,u as p,x as c,y as g,z as u}from"./chunk-BHCYZWNQ.js";var U=`<div class="login-container" appGlassStyle>\r
  <div class="login-form" appFadeIn>\r
    <h2>Login</h2>\r
\r
    <form [formGroup]="LoginForm" (ngSubmit)="onSubmit()">\r
      <div class="input-container">\r
        <input type="email" placeholder="Enter your email" formControlName="Email"\r
               [ngClass]="{ 'is-invalid': submitted && LoginForm.controls['Email'].errors }">\r
        <div *ngIf="submitted && !LoginForm.controls['Email'].valid" class="invalid-feedback">\r
          <span *ngIf="LoginForm.controls['Email'].hasError('required')" class="text-danger">Please Enter Email</span>\r
          <span *ngIf="LoginForm.controls['Email'].hasError('maxlength')" class="text-danger">Max Length is 50.</span>\r
          <span *ngIf="LoginForm.controls['Email'].hasError('pattern')" class="text-danger">Invalid Pattern.</span>\r
        </div>\r
        <div class="underline"></div>\r
      </div>\r
\r
      <div class="input-container">\r
        <input type="password" placeholder="Enter your password" formControlName="Password"\r
               [ngClass]="{ 'is-invalid': submitted && LoginForm.controls['Password'].errors }">\r
        <div *ngIf="submitted && !LoginForm.controls['Password'].valid" class="invalid-feedback">\r
          <span *ngIf="LoginForm.controls['Password'].hasError('required')" class="text-danger">Please Enter Password</span>\r
          <span *ngIf="LoginForm.controls['Password'].hasError('maxlength')" class="text-danger">Max Length is 50.</span>\r
          <span *ngIf="LoginForm.controls['Password'].hasError('pattern')" class="text-danger">Invalid Pattern.</span>\r
        </div>\r
        <div class="underline"></div>\r
      </div>\r
\r
      <div class="options">\r
        <label>\r
          <input type="checkbox"> Remember me\r
        </label>\r
        <a href="#" class="forgot-password">Forgot password?</a>\r
      </div>\r
\r
      <button type="submit" class="login-btn">Log In</button>\r
    </form>\r
\r
    <div class="register-link">\r
      Don't have an account? <a routerLink="/register">Register</a>\r
    </div>\r
  </div>\r
</div>\r
`;var L="";var R={api:{apiUrl:"http://localhost:5235/api"},gisApi:{},Aes:{},qrCode:{},production:!0};var b=class{constructor(e){this.http=e,this.baseUrl=R.api.apiUrl}get(e){return this.http.get(`${this.baseUrl}/${e}`)}partiallyGet(e,t){let n={params:t};debugger;return this.http.get(`${this.baseUrl}/${e}`,n)}post(e,t){return this.http.post(`${this.baseUrl}/${e}`,t)}put(e,t){return this.http.put(`${this.baseUrl}/${e}`,t)}delete(e){return this.http.delete(`${this.baseUrl}/${e}`)}partiallyUpdate(e,t,n){return this.http.patch(`${this.baseUrl}/${e}/${t}`,n)}static{this.ctorParameters=()=>[{type:P}]}};b=r([m({providedIn:"root"})],b);var a=class{constructor(e){this.apiService=e}registerUser(e){debugger;var t=C({},e);return this.apiService.post("login/signup",t)}LoginUser(e){return this.apiService.post("login/loginUser",e)}static{this.ctorParameters=()=>[{type:b}]}};a=r([m({providedIn:"root"})],a);var l=class{constructor(e,t,n){this.formBuilder=e,this.router=t,this.loginService=n,this.submitted=!1}ngOnInit(){this.LoginForm=this.formBuilder.group({Email:new i("",[s.required,s.email]),Password:new i("",[s.required])}),localStorage.removeItem("access_token")}onSubmit(){if(this.submitted=!0,this.LoginForm.invalid)return;let e=this.LoginForm.value;this.LoginForm.reset(),this.submitted=!1,this.loginService.LoginUser(e).subscribe({next:t=>{debugger;localStorage.setItem("access_token",t.token),console.log("Login successful!",t),this.router.navigate(["/dashboard"])},error:t=>{}})}static{this.ctorParameters=()=>[{type:f},{type:v},{type:a}]}};l=r([u({selector:"app-login",template:U,styles:[L]})],l);var F=`<div class="login-container" appGlassStyle>\r
  <div class="login-form" appFadeIn>\r
    <h2>Register</h2>\r
\r
    <form [formGroup]="signup" (ngSubmit)="onSubmit()">\r
      <div class="input-container">\r
        <input type="text" placeholder="Username" formControlName="Username"\r
               [ngClass]="{ 'is-invalid': submitted && signup.controls['Username'].errors }">\r
        <div *ngIf="submitted && !signup.controls['Username'].valid" class="invalid-feedback">\r
          <span *ngIf="signup.controls['Username'].hasError('required')" class="text-danger">Please Enter Name</span>\r
          <span *ngIf="signup.controls['Username'].hasError('maxlength')" class="text-danger">Max Length is 50.</span>\r
          <span *ngIf="signup.controls['Username'].hasError('pattern')" class="text-danger">Invalid Pattern.</span>\r
        </div>\r
        <div class="underline"></div>\r
      </div>\r
\r
      <div class="input-container">\r
        <input type="email" placeholder="Email" formControlName="Email"\r
               [ngClass]="{ 'is-invalid': submitted && signup.controls['Email'].errors }">\r
        <div *ngIf="submitted && !signup.controls['Email'].valid" class="invalid-feedback">\r
          <span *ngIf="signup.controls['Email'].hasError('required')" class="text-danger">Please Enter Email</span>\r
          <span *ngIf="signup.controls['Email'].hasError('email')" class="text-danger">Invalid Email Format</span>\r
        </div>\r
        <div class="underline"></div>\r
      </div>\r
\r
      <div class="input-container">\r
        <input type="password" placeholder="Password" formControlName="Password"\r
               [ngClass]="{ 'is-invalid': submitted && signup.controls['Password'].errors }">\r
        <div *ngIf="submitted && !signup.controls['Password'].valid" class="invalid-feedback">\r
          <span *ngIf="signup.controls['Password'].hasError('required')" class="text-danger">Please Enter Password</span>\r
          <span *ngIf="signup.controls['Password'].hasError('minlength')" class="text-danger">Minimum 6 characters</span>\r
        </div>\r
        <div class="underline"></div>\r
      </div>\r
\r
      <div class="input-container">\r
        <input type="password" placeholder="Confirm Password" formControlName="ConfirmPassword"\r
               [ngClass]="{ 'is-invalid': submitted && signup.controls['ConfirmPassword'].errors }">\r
        <div *ngIf="submitted && !signup.controls['ConfirmPassword'].valid" class="invalid-feedback">\r
          <span *ngIf="signup.controls['ConfirmPassword'].hasError('required')" class="text-danger">Please Confirm Password</span>\r
          <span *ngIf="signup.controls['ConfirmPassword'].hasError('mismatch')" class="text-danger">Passwords do not match</span>\r
        </div>\r
        <div class="underline"></div>\r
      </div>\r
\r
      <button type="submit" class="login-btn">Register</button>\r
    </form>\r
\r
\r
    <div class="register-link">\r
      Already have an account? <a routerLink="/login">Login</a>\r
\r
    </div>\r
  </div>\r
</div>\r
`;var k="";var d=class{constructor(e,t,n){this.formBuilder=e,this.router=t,this.loginService=n,this.submitted=!1,this.passwordMatchValidator=w=>{let q=w.get("Password")?.value,G=w.get("ConfirmPassword")?.value;return q===G?null:{mismatch:!0}}}ngOnInit(){this.signup=this.formBuilder.group({Username:new i("",[s.required,s.maxLength(50)]),Email:new i("",[s.required,s.email]),Password:new i("",[s.required,s.minLength(6)]),ConfirmPassword:new i("",s.required)},{validators:this.passwordMatchValidator})}onSubmit(){if(this.submitted=!0,this.signup.invalid)return;let e=this.signup.value;this.signup.reset(),this.submitted=!1,this.loginService.registerUser(e).subscribe({next:t=>{console.log("Registration successful!",t),this.router.navigate(["/login"])},error:t=>{}})}static{this.ctorParameters=()=>[{type:f},{type:v},{type:a}]}};d=r([u({selector:"app-registration",template:F,styles:[k]})],d);var A=[{path:"login",component:l},{path:"register",component:d}],E=class{};E=r([h({imports:[I.forChild(A)],exports:[I]})],E);var y=class{constructor(e,t){this.el=e,this.renderer=t}ngOnInit(){this.renderer.setStyle(this.el.nativeElement,"background","rgba(255, 255, 255, 0.15)"),this.renderer.setStyle(this.el.nativeElement,"backdrop-filter","blur(12px)"),this.renderer.setStyle(this.el.nativeElement,"-webkit-backdrop-filter","blur(12px)"),this.renderer.setStyle(this.el.nativeElement,"border-radius","15px"),this.renderer.setStyle(this.el.nativeElement,"border","1px solid rgba(255, 255, 255, 0.18)"),this.renderer.setStyle(this.el.nativeElement,"box-shadow","0 8px 32px 0 rgba(31, 38, 135, 0.15)"),this.renderer.setStyle(this.el.nativeElement,"opacity","0"),this.renderer.setStyle(this.el.nativeElement,"transform","translateY(20px)"),this.renderer.setStyle(this.el.nativeElement,"transition","all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)"),setTimeout(()=>{this.renderer.setStyle(this.el.nativeElement,"opacity","1"),this.renderer.setStyle(this.el.nativeElement,"transform","translateY(0)")},100)}static{this.ctorParameters=()=>[{type:p},{type:c}]}};y=r([g({selector:"[appFadeIn]"})],y);var S=class{constructor(e,t){this.el=e,this.renderer=t}ngOnInit(){this.renderer.setStyle(this.el.nativeElement,"background",'url("/assets/mountains.jpg")'),this.renderer.setStyle(this.el.nativeElement,"background-size","cover"),this.renderer.setStyle(this.el.nativeElement,"background-position","center"),this.renderer.setStyle(this.el.nativeElement,"min-height","100vh")}static{this.ctorParameters=()=>[{type:p},{type:c}]}};S=r([g({selector:"[appGlassStyle]"})],S);var M=class{};M=r([h({declarations:[l,y,S,d],imports:[x,_,E]})],M);export{M as UserRegistrationModule};
