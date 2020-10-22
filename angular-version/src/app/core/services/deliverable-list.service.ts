import { Injectable } from '@angular/core';
import { DeliverableList, DeliverableProperties } from 'src/app/config/types/projects.config';

@Injectable({
  providedIn: 'root'
})

export class DeliverableTemplateService {
  public deliverableData: Array<DeliverableProperties> = [];

  constructor() {
    this.deliverableData = DeliverableList;
    // console.log(this.deliverableData);
    // alert('ji');
  }
}
