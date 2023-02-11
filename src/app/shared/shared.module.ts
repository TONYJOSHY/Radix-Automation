import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { LoaderComponent } from './loader/loader.component';
import { MaterialModule } from '../other-modules/material.module';
import { ReusableModules } from '../other-modules/reusable.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LabelFieldComponent } from './shared-components/label-field/label-field.component';
import { PaginatorComponent } from './shared-components/paginator/paginator.component';
import { BreadcrumpComponent } from './shared-components/breadcrump/breadcrump.component';
import { RouterModule } from '@angular/router';
import { SelectboxComponent } from './shared-components/selectbox/selectbox.component';
import { SearchboxComponent } from './shared-components/searchbox/searchbox.component';
import { MultiSelecboxComponent } from './shared-components/multi-selecbox/multi-selecbox.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { LanguageSelectorComponent } from './shared-components/language-selector/language-selector.component';
import { DateFilterComponent } from './shared-components/date-filter/date-filter.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        MultiSelecboxComponent,
        LoaderComponent,
        LabelFieldComponent,
        PaginatorComponent,
        BreadcrumpComponent,
        SelectboxComponent,
        SearchboxComponent,
        LanguageSelectorComponent,
        DateFilterComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        TranslateModule,
        ReusableModules,
        RouterModule,
        NgxFileDropModule,
        NgxDaterangepickerMd.forRoot(),
        ChartsModule
    ],
    exports: [
        MaterialModule,
        TranslateModule,
        LoaderComponent,
        ReusableModules,
        NgxSpinnerModule,
        LabelFieldComponent,
        PaginatorComponent,
        BreadcrumpComponent,
        SelectboxComponent,
        SearchboxComponent,
        MultiSelecboxComponent,
        LanguageSelectorComponent,
        DateFilterComponent,
        ChartsModule
    ],
})
export class SharedModule { }
