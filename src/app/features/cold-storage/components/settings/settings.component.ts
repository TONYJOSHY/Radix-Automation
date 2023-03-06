import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MachineService } from '../../services/machine.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  isEdit = false;

  settingsForm: FormGroup = this.fb.group({
    CONVEYORON: '',
    filler_on: false,
    CONVEYORSPEED: '',
    OFFTIME: '',
    ONTIME: '',
    SERVOSPEED: '',
    TC1PV: '',
    TC1SV: '',
    TC2PV: '',
    TC2SV: '',
  })

  settingsData: any;

  get settings() { return this.settingsForm.controls }

  constructor(private fb: FormBuilder,
    private machineService: MachineService) { }

  ngOnInit(): void {
    this.getSettings();
  }

  initForm() {
    this.settingsForm.patchValue({
      CONVEYORON: false,
      filler_on: false,
      CONVEYORSPEED: this.settingsData.CONVEYORSPEED,
      OFFTIME: this.settingsData.OFFTIME,
      ONTIME: this.settingsData.ONTIME,
      SERVOSPEED: this.settingsData.SERVOSPEED,
      TC1PV: this.settingsData.TC1PV,
      TC1SV: this.settingsData.TC1SV,
      TC2PV: this.settingsData.TC2PV,
      TC2SV: this.settingsData.TC2SV,
    })
  }

  getSettings() {
    this.machineService.getSettings()
      .subscribe((response: any) => {
        this.settingsData = response.data;
        this.initForm();
      })
  }

  cancelForm() {
    this.isEdit = false;
    this.initForm()
  }

  submitForm() {
    this.isEdit = false;
    this.machineService.postSettings(this.settingsForm.value)
      .subscribe(() => {
        this.machineService.customMessage('Setting updated successfully.', 'success');
        this.getSettings();
      }, (err) => this.machineService.customMessage('Setting updated Failed.', 'error'))
  }

}
