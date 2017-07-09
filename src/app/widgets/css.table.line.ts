import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularmService, FlashMessageService, EntityComponent, TitleCase } from 'angularm';

@Component({
    selector: 'div [mgEntityLine]',
    template:
        `<tr [ngClass]="configuration.lineClass">
           <td *ngFor="let property of entity.mountProperties()">{{property.value}}</td>
           <td> <a href="#" (click)="show()">Show</a></td>
           <td> <a href="#" (click)="edit()">Edit</a></td>
           <td> <a href="#" (click)="destroy()">Destroy</a></td>
         </tr>`,
})
export class CssTableLineComponent extends EntityComponent {

    constructor(private router: Router, private flash: FlashMessageService,
            private angularm: AngularmService) {
        super();
    }

    show() {
        this.flash.clearMessage();
        this.router.navigate([this.entity.entityType.plural, this.entity.key]);
        return false;
    }

    edit() {
        this.flash.clearMessage();
        this.router.navigate([this.entity.entityType.plural, this.entity.key, 'edit']);
        return false;
    }

    destroy() {
        if (confirm('Are you sure?')) {
            this.angularm.delete(this.entity.entityType.singular, this.entity.key);
            let entityTypeName = TitleCase.toTitleCase(this.entity.entityType.singular);
            this.flash.changeMessage(`${entityTypeName} was successfully destroyed.`);
        }
        return false;
    }
}
