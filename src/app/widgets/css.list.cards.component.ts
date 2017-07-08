import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularmService, FlashMessageService, EntityTypeComponent, Entity, TitleCase } from 'angularm';

@Component({
  selector: 'div [mgListCards]',
  template: `<div *ngIf="entityType">
    <div [ngClass]="configuration.barClass">
      <a href="#" [ngClass]="configuration.barLeftClass"><i [ngClass]="configuration.barLeftButton"></i></a>  
      <span [ngClass]="configuration.barMiddleClass">Listing {{entityType.plural | titleCase}}</span> 
      <a href="#" [ngClass]="configuration.barRightClass"><i [ngClass]="configuration.barRightButton"></i></a>
    </div>

    <div [ngClass]="configuration.contentClass">
        <div [mgForeachEntity]="'table_line'" [entityType]="entityType"></div>
    </div>

    <a href="#" (click)="create()">New {{entityType.singular | titleCase}}</a>
    <a href="#" (click)="back()">Back</a>
  </div>`
})
export class ListCardsComponent extends EntityTypeComponent implements OnInit {

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

