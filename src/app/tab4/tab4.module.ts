import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';

import { Tab4Page } from './tab4.page';
import { FoxHeaderComponent } from '../fox-header/fox-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimalEditorComponent } from '../animal-editor/animal-editor.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule,ReactiveFormsModule
  ],
  declarations: [Tab4Page,FoxHeaderComponent,AnimalEditorComponent]
})
export class Tab4PageModule {}
