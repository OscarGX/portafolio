import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  public form!: UntypedFormGroup;
  public isLoading = false;
  private subscription = new Subscription();

  constructor(private fb: UntypedFormBuilder, private authService: AuthService, private router: Router) {
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    if (this.form.valid) {
      const { username, password } = this.form.value;
      this.subscription.add(this.authService.login({ username, password }).subscribe(data => {
        if (data) {
          this.router.navigateByUrl('/admin', { replaceUrl: true }); 
        } else {
          alert('Idk');
        }
      }, (e: HttpErrorResponse) => {
        alert('Error prro');
      }));
    }
  }

  private createForm(): void {
    this.form = this.fb.group({
      username: ['', [
        Validators.required,
      ]],
      password: ['', [
        Validators.required,
      ]]
    });
  }

}
