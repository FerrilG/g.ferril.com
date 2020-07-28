import { HeaderTabComponent } from './header-tab.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HeaderComponent,
        HeaderTabComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        HeaderTabComponent
    ]
})

export class HeaderModule { }
