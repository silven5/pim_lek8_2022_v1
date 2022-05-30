import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import { HeroEditorComponent } from '../hero-editor/hero-editor.component';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,ReactiveFormsModule
  ],
  declarations: [Tab3Page,HeroEditorComponent]
})
export class Tab3PageModule {}