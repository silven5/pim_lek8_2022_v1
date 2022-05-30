import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ProfileEditorComponent } from '../profile-editor/profile-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserEditorComponent } from '../user-editor/user-editor.component';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule, ReactiveFormsModule
  ],
  declarations: [Tab2Page, ProfileEditorComponent,UserEditorComponent]
})
export class Tab2PageModule {}
