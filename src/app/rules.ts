import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';

import { CssCreateFormComponent } from './widgets/css.create.form.component';
import { CssEditFormComponent } from './widgets/css.edit.form.component';
import { ListCardsComponent } from './widgets/css.list.cards.component';
import { CardComponent } from './widgets/css.card.component';

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', ListCardsComponent, {barClass: 'w3-bar w3-large w3-theme-d4',
                                                    barLeftClass: 'w3-bar-item w3-button',
                                                    barLeftButton: 'fa fa-bars',
                                                    barMiddleClass: 'w3-bar-item',
                                                    barRightClass: 'w3-bar-item w3-button w3-right',
                                                    barRightButton: 'fa fa-search',
                                                    contentClass: 'w3-container w3-content'})
        .der('table_line', CardComponent, {cardClass: 'w3-panel w3-white w3-card-2 w3-display-container'})
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
