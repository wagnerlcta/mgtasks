import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularmService, EntityComponent, FlashMessageService, TitleCase } from 'angularm';


@Component({
    selector: 'tr [mgEntityLine]',
    template:
        `<div [mgForeachProperty]="'table_cell'" [entity]="entity"></div>
         <td> <a href="#" (click)="show()">Show</a></td>
         <td> <a href="#" (click)="edit()">Edit</a></td>
         <td> <a href="#" (click)="destroy()">Destroy</a></td>`,
})
export class CellEntityLineComponent extends EntityComponent {

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
