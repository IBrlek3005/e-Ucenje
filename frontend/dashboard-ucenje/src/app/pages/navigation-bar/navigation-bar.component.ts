import { Component } from '@angular/core';
import { MaterialSharedModule } from '../../shared/material-shared/material-shared.module';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [MaterialSharedModule, LoginComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
  animations: [
    trigger('slideInOut', [
      state('visible', style({
        transform: 'translateY(0%)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      transition('visible => hidden', animate('300ms ease-out')),
      transition('hidden => visible', animate('300ms ease-in'))
    ])
  ]
})
export class NavigationBarComponent {
  loginFormVisible: boolean = false;
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  toggleLoginForm() {
    this.loginFormVisible = !this.loginFormVisible;
    console.log('da')
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login successful');
      // Add your login logic here
    }
  }
}
