import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public signupForm !: FormGroup

  constructor(private formBuilder:FormBuilder,
    private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
      mobile:['']
    })
  }

  signUp(){
this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
.subscribe(res =>{
  alert("success")
  this.signupForm.reset();
  this.router.navigate(['']);
},
err=>{
  alert("error")

})
  }

}


