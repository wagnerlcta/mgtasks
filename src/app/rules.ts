import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';
import { CustomListingTableComponent } from "app/widgets/CustomListingTableComponent";
import { CustomEntityLineComponent } from "app/widgets/CustomEntityLineComponent";

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .etr('list_entities', 'bug', CustomListingTableComponent, {centerClass: 'w3-center'})
        .etr('list_entities', 'issue', CustomListingTableComponent, {centerClass: 'w3-center'})
        .etr('list_entities', 'product', CustomListingTableComponent, {centerClass: 'w3-center'})
        .etr('list_entities', 'project', CustomListingTableComponent, {centerClass: 'w3-center'})
        .detr('list_entities', CustomListingTableComponent)
        .er('table_line', 'bug', CustomEntityLineComponent, {centerClass: 'w3-center'})
        .er('table_line', 'issue', CustomEntityLineComponent, {centerClass: 'w3-center'})
        .er('table_line', 'product', CustomEntityLineComponent, {centerClass: 'w3-center'})
        .er('table_line', 'project', CustomEntityLineComponent, {centerClass: 'w3-center'})
        .der('table_line', CustomEntityLineComponent,)
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
