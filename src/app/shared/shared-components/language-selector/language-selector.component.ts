import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-language-selector',
    templateUrl: './language-selector.component.html',
    styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

    selectedLanguage: any = 'EN-GB';
    languageList: any = [
        { name: 'English', code: 'EN-GB' },
        // { name: "Italian", code: "IT-IT" },
        // { name: "French", code: "FR-CH" },
        { name: "German", code: "DE-CH" }
    ];

    constructor(
        private translate: TranslateService
    ) { }

    ngOnInit(): void {
    }

    languageChanged() {
        let language : any;
        sessionStorage.setItem('selectedLanguage',this.selectedLanguage);
        if(this.selectedLanguage == 'EN-GB'){
            language = 'en';
        }else if(this.selectedLanguage == 'FR-CH'){
            language = 'fr';
        }else if(this.selectedLanguage == 'IT-IT'){
            language = 'it';
        }else {
            language = 'de';
        }
        this.translate.setDefaultLang(language);
    }

}
