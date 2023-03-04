import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  calenderFilter = [
    { id: '', name: 'Today' },
    { id: '1', name: 'This month' },
    { id: '2', name: 'This year' },
    { id: '3', name: 'Custom' }
  ];

  cssVariables: any = {};

  constructor() {
    this.getCssVariables()
  }

  getCssVariables() {
    const bodyStyles = window.getComputedStyle(document.body);
    this.cssVariables = {
      primary: bodyStyles.getPropertyValue('--primary'),
      secondary: bodyStyles.getPropertyValue('--secondary'),
      tertiary: bodyStyles.getPropertyValue('--tertiary'),
      light: bodyStyles.getPropertyValue('--light'),
      danger: bodyStyles.getPropertyValue('--danger'),
      success: bodyStyles.getPropertyValue('--success'),
      dark: bodyStyles.getPropertyValue('--dark'),
      info: bodyStyles.getPropertyValue('--info'),
      warning: bodyStyles.getPropertyValue('--warning'),
      'font-color': bodyStyles.getPropertyValue('--font-color'),
      'font-color-2': bodyStyles.getPropertyValue('--font-color-2'),
      'font-color-3': bodyStyles.getPropertyValue('--font-color-3'),
      'font-color-primary': bodyStyles.getPropertyValue('--font-color-primary'),
      'font-color-secondary': bodyStyles.getPropertyValue('--font-color-secondary'),
      'label-field': bodyStyles.getPropertyValue('--label-field'),
      'sea-green': bodyStyles.getPropertyValue('--sea-green'),
      grey1: bodyStyles.getPropertyValue('grey1'),
      background1: bodyStyles.getPropertyValue('--background1'),
      background2: bodyStyles.getPropertyValue('--background2'),
      font2: bodyStyles.getPropertyValue('--font2'),
      grey4: bodyStyles.getPropertyValue('--grey4'),
      'btn-focus': bodyStyles.getPropertyValue('--btn-focus'),
      'btn-hover': bodyStyles.getPropertyValue('--btn-hover'),
      emerald: bodyStyles.getPropertyValue('--emerald'),
      'tea-green': bodyStyles.getPropertyValue('--tea-green'),
      'spring-rain': bodyStyles.getPropertyValue('--spring-rain'),
      frostee: bodyStyles.getPropertyValue('--frostee'),
      gin: bodyStyles.getPropertyValue('--gin'),
      'side-bar': bodyStyles.getPropertyValue('--side-bar'),
      'gray-1': bodyStyles.getPropertyValue('--gray-1'),
      'gray-2': bodyStyles.getPropertyValue('--gray-2'),
      'gray-3': bodyStyles.getPropertyValue('--gray-3'),
      white: bodyStyles.getPropertyValue('--white'),
      alert: bodyStyles.getPropertyValue('--alert'),
      suspended: bodyStyles.getPropertyValue('--suspended'),
      orange: bodyStyles.getPropertyValue('--orange'),
      cancelled: bodyStyles.getPropertyValue('--cancelled'),
      'bay-leaf': bodyStyles.getPropertyValue('--bay-leaf'),
      silver: bodyStyles.getPropertyValue('--silver'),
      'athens-gray': bodyStyles.getPropertyValue('--athens-gray'),
      dolphin: bodyStyles.getPropertyValue('--dolphin'),
      'light-blue': bodyStyles.getPropertyValue('--light-blue'),
    }
  }
}
