import { Component, OnInit, ViewChild } from '@angular/core';

import { PropertyComponent } from 'angularm';

@Component({
    selector: 'td [mgTableCell]',
    template:
        `<div>{{property.value}}</div>`,
})
export class TableCellComponent extends PropertyComponent { }
