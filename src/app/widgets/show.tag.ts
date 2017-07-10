import { Component } from '@angular/core';

import { PropertyComponent } from 'angularm';

@Component({
    selector: 'p [mgShowLine]',
    template:
        `<strong>{{property.propertyType.name | titleCase}}:</strong> 
        <span [ngClass]="configuration.tagClass">{{property.value}}</span>`,
})
export class ShowTagComponent extends PropertyComponent { }
