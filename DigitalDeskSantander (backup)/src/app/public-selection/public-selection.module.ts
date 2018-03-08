import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PublicSelectionRoutingModule } from './public-selection-routing.module';
import { ImportSearchComponent } from './commom/import-search/import-search.component';
import { TableResultComponent } from './commom/table-result/table-result.component';
import { CnpjSearchComponent } from './IBPJ/cnpj-search/cnpj-search.component';
import { HttpModule } from '@angular/http';
import { CategorySearchComponent } from './IBPJ/category-search/category-search.component';
import { SavedGroupsComponent } from './commom/saved-groups/saved-groups.component';
import { PredefinedFiltersComponent } from './IBPJ/predefined-filters/predefined-filters.component';
import { ModulesSettingsComponent } from './commom/modules-settings/modules-settings.component';
import { ModulesTurnComponent } from './commom/modules-turn/modules-turn.component';
import { ChannelLogsComponent } from './commom/channel-logs/channel-logs.component';

@NgModule({
  imports: [
    CommonModule,
    PublicSelectionRoutingModule,
    HttpModule,
    FormsModule,
  ],
  declarations: [
    ImportSearchComponent,
    TableResultComponent,
    CnpjSearchComponent,
    CategorySearchComponent,
    SavedGroupsComponent,
    PredefinedFiltersComponent,
    ModulesSettingsComponent,
    ModulesTurnComponent,
    ChannelLogsComponent
  ],
  exports: [
    CnpjSearchComponent, 
    TableResultComponent,
    ChannelLogsComponent
  ],
})
export class PublicSelectionModule { }
