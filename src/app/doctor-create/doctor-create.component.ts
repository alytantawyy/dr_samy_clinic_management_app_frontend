import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent implements OnInit {

  postDoctorForm!: FormGroup;

  constructor(private doctorService: DoctorService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.postDoctorForm = this.fb.group({
      name: [null, [Validators.required]],
      specialization: [null, [Validators.required]],
      contactNumber: [null, [Validators.required]],
      hourlyPay: [null, [Validators.required]]
    });
  }

  postDoctor() {
    console.log(this.postDoctorForm.value);
    this.doctorService.postDoctor(this.postDoctorForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl("/doctors");
    });
  }
}
