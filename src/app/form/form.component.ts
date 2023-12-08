import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() clientRegistered = new EventEmitter<any>();
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      validator: [null, [Validators.required, this.customValidator]]
    });
  }

  customValidator(control: any) {
    const value = control.value;
    return value === 5 ? null : { invalid: true };
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.clientRegistered.emit(formData);
      this.myForm.reset();
    }
  }

}
