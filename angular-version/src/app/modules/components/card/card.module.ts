import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

@NgModule({
    declarations: [CardComponent],
    imports: [CommonModule],
    exports: [CardComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CardModule {

}
