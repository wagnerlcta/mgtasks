import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularmService, EntityTypeComponent, FlashMessageService, Entity, TitleCase } from 'angularm';

@Component({
  selector: 'div [mgListingTable]',
  template: `<div *ngIf="entityType">
    <h1>Listing {{ entityType.plural | titleCase }}</h1>
    <table [ngClass]="configuration.tableClass">
      <thead>
        <tr>
          <th *ngFor="let propertyType of entityType.propertyTypes">{{propertyType.name | titleCase}}</th>
          <th colspan="3"></th>
        </tr>
      </thead>
      <tbody>
        <div [mgForeachEntity]="'table_line'" [entityType]="entityType"></div>
      </tbody>
    </table>
    <a href="#" (click)="create()">New {{entityType.singular | titleCase}}</a>
    <a href="#" (click)="back()">Back</a>
  </div>`
})
export class StyledListingTableComponent extends EntityTypeComponent implements OnInit {

  constructor(
    private router: Router,
    private flash: FlashMessageService,
    private angularm: AngularmService
  ) {
    super();
  }

  ngOnInit() {
    this.angularm.listAll(this.entityType.singular).then(
      entities => this.entities = entities
    );
  }

  back() {
    this.flash.clearMessage();
    this.router.navigate(['/']);
    return false;
  }

  create() {
    this.flash.clearMessage();
    this.router.navigate([this.entityType.plural, 'new']);
    return false;
  }
}