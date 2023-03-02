import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl, } from '@angular/forms';
import { faEnvelope, faLock, faLockOpen, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = faUser;
  pass = faLock;
  repass = faLockOpen;
  email = faEnvelope;

  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {

    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-z]{3,} ([A-z]{3,})$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[A-z][A-z]{2,}[0-9]*@(gmail|yahoo)(.com|.eg|.edu)$/)]],
      userName: ['', [Validators.required, Validators.pattern(/^(?=[a-zA-Z]{8,20}$)/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]],
      rePassword: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]],
    
    },

    {validator:this.passwordConfirming}

    // [ CustomValidators.MatchValidator('password','rePassword ')]
    );
    
  }

  ngOnInit() {
  }
  passwordConfirming (c: AbstractControl) {
    if (c.get('password')!.value !== c.get('rePassword')!.value) {
        return {invalid: true};
    }
    return null;  
}


  get registerControl() {
    return this.registerForm.controls
  }
  handleSubmitForm() {
    console.log(this.registerForm);
  }
  get passwordMatchError() {
    return (
      this.registerForm.getError('mismatch') &&
      this.registerForm.get('rePassword')?.touched
    );
  }


}

// export class CustomValidators {
//   static MatchValidator(source: string, target: string): ValidatorFn {
//     return (control: AbstractControl): ValidationErrors | null => {
//       const sourceCtrl = control.get(source);
//       const targetCtrl = control.get(target);

//       return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
//         ? { mismatch: true }
//         : null;
//     };
//   }
// }
