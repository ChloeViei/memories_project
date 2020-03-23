import { Memory } from "../../model/memory";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-memory-edit',
  templateUrl: './memory-edit.component.html',
  styleUrls: ['./memory-edit.component.css']
})

export class MemoryEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  memoryData: Memory[];
  MemoryProfile: any = ['User', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateMemory();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getMemory(id);
    this.editForm = this.fb.group({
      title: ['', [Validators.required]],
      text: ['', [Validators.required]],
      type: ['', [Validators.required]],
    })
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('type').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getMemory(id) {
    this.apiService.getMemory(id).subscribe(data => {
      this.editForm.setValue({
        title: data['title'],
        text: data['text'],
        type: data['type'],
      });
    });
  }

  updateMemory() {
    this.editForm = this.fb.group({
      title: ['', [Validators.required]],
      text: ['', [Validators.required]],
      type: ['', [Validators.required]],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateMemory(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/memories-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
