// import { Component } from '@angular/core';
// import{Router}from '@angular/router';

// @Component({
//   selector: 'app-signin',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.css']
// })
// export class SigninComponent {


//   email: string = '';
//   password:string='';
//   constructor(private router: Router) {}

//   login() {
//     // Replace this with your actual login logic
//     const loginSuccessful = true; // For demonstration purposes
//     if (loginSuccessful) {
//       // this.router.navigate(['/layout']); // Navigate to the layout component
//     }
//   }



// import { Component } from '@angular/core';
// import{Router}from '@angular/router';
// @Component({
//   selector: 'app-signin',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.css']
// })
// export class SigninComponent {
//   email: string = '';
//   password: string = '';
//   error: string = '';
//   constructor(private router: Router) {}

//   login() {
//     // Replace this with your actual login logic

//     if (this.email === 'example@email.com' && this.password === 'password') {
//       // Successful login, navigate to another page or perform further actions
//       alert('Logged in successfully');
//       this.router.navigate(['/layout']);
//     } else {
//       // Failed login, show error message or handle accordingly
//       alert('Invalid email or password');
//     }
//   }
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  login() {
    // Email validation regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;

    // Password validation regular expression (at least one special symbol and 3 numbers)
    const passwordPattern = /^(?=.*[!@#$%^&*])(?=.*[0-9].*[0-9].*[0-9]).*$/;

    if (!emailPattern.test(this.email)) {
      this.error = 'Email must be a valid Gmail address (e.g., example@gmail.com)';
      return;
    }

    else if (!passwordPattern.test(this.password)) {
      this.error = 'Password must contain at least one special symbol and three numbers.';
      return;
    }
    else{
        alert('Logged in successfully');
      this.router.navigate(['/layout']);
    }

    // Replace this with your actual login logic
    // if (this.email === 'example@gmail.com' && this.password === 'Password@123') {
    //   // Successful login, navigate to another page or perform further actions
    //   alert('Logged in successfully');
    //   this.router.navigate(['/layout']);
    // } else {
    //   // Failed login, show error message or handle accordingly
    //   alert('Invalid email or password');
    // }
  }
}
