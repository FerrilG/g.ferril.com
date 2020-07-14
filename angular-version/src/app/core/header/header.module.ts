import { HeaderTabComponent } from './header-tab.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        HeaderComponent,
        HeaderTabComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        HeaderTabComponent
    ]
})

export class HeaderModule { }
