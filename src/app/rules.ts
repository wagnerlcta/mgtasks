import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';

import { CssCreateFormComponent } from './widgets/css.create.form.component';
import { CssEditFormComponent } from './widgets/css.edit.form.component';

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', ListingTableComponent)
        .der('table_line', EntityLineComponent)
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CssCreateFormComponent, {formClass: 'w3-card-4'})
        .der('edit_form', CssEditFormComponent, {formClass: 'w3-card-4'})
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
