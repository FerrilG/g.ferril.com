import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageScrollerComponent } from './page-scroller.component';

@NgModule({
    declarations: [
        PageScrollerComponent
    ],
    imports: [CommonModule],
    exports: [PageScrollerComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PageScrollerModule {

}
