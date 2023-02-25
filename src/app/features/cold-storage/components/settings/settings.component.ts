import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  isEdit = true;

  settingsForm: FormGroup = this.fb.group({
    conveyor_speed: [60],
    filler_speed: [1200],
    temp_1_sv: [100],
    temp_1_cv: [65],
    conveyor_on: [true],
    filler_on: [false],
    temp_2_sv: [100],
    temp_2_cv: [70],
    on_delay_time: [1500],
    off_delay_time: [250],
  })

  get settings() { return this.settingsForm.controls }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  cancelForm() {
    console.log('here 1')
    // this.isEdit = false;
    this.settingsForm.patchValue({
      conveyor_speed: 60,
      filler_speed: 1200,
      temp_1_sv: 100,
      temp_1_cv: 65,
      conveyor_on: true,
      filler_on: false,
      temp_2_sv: 100,
      temp_2_cv: 70,
      on_delay_time: 1500,
      off_delay_time: 250,
    })
  }

  submitForm() {
    console.log('here')
    // this.isEdit = false;
    console.log(this.settingsForm.value)
  }

  setSliderValue(control, event) {
    // this.settings[control].setValue(event.checked)
    console.log(this.settingsForm.value)
  }

}
