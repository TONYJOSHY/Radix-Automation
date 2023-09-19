import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MachineService } from '../../services/machine.service';
import { interval, Subscription, timer } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

  isEdit = false;
  enableAutoReload = false;

  settingsForm: FormGroup = this.fb.group({
    CONVEYORON: '',
    FILLERON: '',
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
  subscription: Subscription;
  get settings() { return this.settingsForm.controls }

  constructor(private fb: FormBuilder,
    private machineService: MachineService) {
    // this.getSettings();
  }

  ngOnInit(): void {
    // this.reload();
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  setAutoReload(value) {
    this.enableAutoReload = value;
    // this.reload();
  }

  reload() {
    if (this.enableAutoReload) {
      const source = interval(2000);
      this.subscription = source.pipe(
        tap(() => {
          if (!this.isEdit) this.getSettings()
        })).subscribe();
    } else {
      this.ngOnDestroy();
    }
  }

  initForm() {
    this.settingsForm.patchValue({
      CONVEYORON: this.settingsData.CONVEYORON,
      FILLERON: this.settingsData.FILLERON,
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
    // this.machineService.postSettings({ data: this.settingsForm.value })
    //   .subscribe(() => {
    //     this.machineService.customMessage('Setting updated successfully.', 'success');
    //     // this.getSettings();
    //   }, (err) => this.machineService.customMessage('Setting updated Failed.', 'error'))
  }

}
