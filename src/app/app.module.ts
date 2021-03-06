import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule} from "@angular/material/button";
import { MatListModule} from "@angular/material/list";
import { MatSelectModule} from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule}  from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';





import { UpdateDiscountDataComponent } from './update-discount-data/update-discount-data.component';

import { RouterModule } from '@angular/router';
import { TestDiscountDataComponent } from './test-discount-data/test-discount-data.component';
import { ViewDiscountsComponent } from './view-discounts/view-discounts.component';
import { CombTestsDiscountComponent } from './comb-tests-discount/comb-tests-discount.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateDiscountDataComponent,
    TestDiscountDataComponent,
    ViewDiscountsComponent,
    CombTestsDiscountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatCheckboxModule,
    RouterModule.forRoot([
      { path: '',component: UpdateDiscountDataComponent,pathMatch: 'full'},
      { path: 'testdiscount',component: TestDiscountDataComponent},
      { path: 'combtestdiscount',component: CombTestsDiscountComponent},
      { path: 'viewdiscounts',component: ViewDiscountsComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
