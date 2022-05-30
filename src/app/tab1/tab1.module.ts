import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NameEditorComponent } from '../name-editor/name-editor.component';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,ReactiveFormsModule
  ],
  declarations: [Tab1Page,NameEditorComponent]
})
export class Tab1PageModule {}
