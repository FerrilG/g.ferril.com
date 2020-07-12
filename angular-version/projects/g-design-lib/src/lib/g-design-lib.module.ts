import { NgModule } from '@angular/core';
import { GDesignLibComponent } from './g-design-lib.component';
import { GDLButtonComponent } from './molecules/button/button.component';
import { GDLCardComponent } from './molecules/card/card.component';



@NgModule({
  declarations: [
    GDesignLibComponent,
    GDLButtonComponent,
    GDLCardComponent
  ],
  imports: [
  ],
  exports: [
    GDesignLibComponent,
    GDLButtonComponent,
    GDLCardComponent
  ]
})
export class GDesignLibModule { }
