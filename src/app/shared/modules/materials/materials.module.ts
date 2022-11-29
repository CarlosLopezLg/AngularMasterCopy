import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

const materialModules = [
  MatSidenavModule,
  MatButtonModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatToolbarModule,
  ClipboardModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatSnackBarModule,
  MatInputModule,
  MatFormFieldModule,
  MatRippleModule,
  MatSelectModule
]

@NgModule({
  declarations: [],
  imports: [materialModules],
  exports: [materialModules],
})
export class MaterialsModule { }
