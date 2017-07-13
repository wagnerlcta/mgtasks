import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';
import { CssTableLineComponent } from "app/widgets/css.table.line";

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', ListingTableComponent)
        .er('table_line', 'bug', CssTableLineComponent, {lineClass: 'w3-hover-green'})
        .er('table_line', 'issue', CssTableLineComponent, {lineClass: 'w3-hover-green'})
        .er('table_line', 'product', CssTableLineComponent, {lineClass: 'w3-hover-green'})
        .er('table_line', 'campaign', CssTableLineComponent, {lineClass: 'w3-hover-green'})
        .der('table_line', CssTableLineComponent)
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
