import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-memory-create',
  templateUrl: './memory-create.component.html',
  styleUrls: ['./memory-create.component.css']
})

export class MemoryCreateComponent implements OnInit {
  submitted = false;
  memoryForm: FormGroup;
  MemoryProfile:any = ['User', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.memoryForm = this.fb.group({
      title: ['', [Validators.required]],
      text: ['', [Validators.required]],
      type: ['', [Validators.required]]
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.memoryForm.get('type').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.memoryForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.memoryForm.valid) {
      console.log("coucou");
      return false;
    } else {
      this.apiService.createMemory(this.memoryForm.value).subscribe(
        (res) => {
          console.log('Memory successfully created!');
          this.ngZone.run(() => this.router.navigateByUrl('/memories-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
