import { Component } from '@angular/core';

import { PropertyTypeComponent } from 'angularm';

@Component({
    selector: 'div [mgTextarea]',
    template:
        `<label for="{{propertyType.entityType.singular}}_{{propertyType.name}}"
            >{{propertyType.name | titleCase}}</label>
         <textarea id="{{propertyType.entityType.singular}}_{{propertyType.name}}" 
                   rows="{{configuration.rows}}" cols="{{configuration.cols}}" 
                   [formControl]="mgFormControl"></textarea>
        <br>`,
})
export class TextareaFormLineComponent extends PropertyTypeComponent { }
