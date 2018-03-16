import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PublicSelectionRoutingModule } from './public-selection-routing.module';
import { ImportSearchComponent } from './commom/import-search/import-search.component';
import { TableResultComponent } from './commom/table-result/table-result.component';
import { HttpModule } from '@angular/http';
import { SavedGroupsComponent } from './commom/saved-groups/saved-groups.component';
import { ModulesSettingsComponent } from './commom/modules-settings/modules-settings.component';
import { ModulesTurnComponent } from './commom/modules-turn/modules-turn.component';
import { ChannelLogsComponent } from './commom/channel-logs/channel-logs.component';
import { CreateSelectionComponent } from './IBPJ/create-selection/create-selection.component';
import { CnpjSearchComponent } from './IBPJ/create-selection/cnpj-search/cnpj-search.component';
import { CreateSelection2Component } from './IBPJ/create-selection2/create-selection2.component';
import { Cnpj2SearchComponent } from './IBPJ/create-selection2/cnpj2-search/cnpj2-search.component';
import { FileDropModule } from 'ngx-file-drop';

@NgModule({
  imports: [
    CommonModule,
    PublicSelectionRoutingModule,
    HttpModule,
    FormsModule,
    FileDropModule
  ],
  declarations: [
    ImportSearchComponent,
    TableResultComponent,
    CnpjSearchComponent,
    SavedGroupsComponent,
    ModulesSettingsComponent,
    ModulesTurnComponent,
    ChannelLogsComponent,
    CreateSelectionComponent,
    CreateSelection2Component,
    Cnpj2SearchComponent
  ],
  exports: [
    CnpjSearchComponent, 
    TableResultComponent,
    ChannelLogsComponent,
    Cnpj2SearchComponent
  ],
})
export class PublicSelectionModule { }
