import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatOptionModule,
  MatSelectModule, MatSidenavModule,
  MatSliderModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {ArboreaHeaderComponent} from './arborea-header/arborea-header.component';
import {ArboreaRegisterComponent} from './arborea-register/arborea-register.component';
import {ArboreaHomeComponent} from './arborea-home/arborea-home.component';
import {ArboreaNavbarComponent} from './arborea-navbar/arborea-navbar.component';
import {ArboreaButtonComponent} from './arborea-button/arborea-button.component';
import {ArboreaLoginComponent} from './arborea-login/arborea-login.component';
import {ArboreaPasswordFieldComponent} from './arborea-password-field/arborea-password-field.component';
import {ArboreaTextFieldComponent} from './arborea-text-field/arborea-text-field.component';
import {ArboreaMailFieldComponent} from './arborea-mail-field/arborea-mail-field.component';
import {ArboreaConfirmPasswordFieldComponent} from './arborea-confirm-password-field/arborea-confirm-password-field.component';
import {ArboreaFooterComponent} from './arborea-footer/arborea-footer.component';
import {ArboreaSidebarComponent} from './arborea-sidebar/arborea-sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import { ArboreaArticleComponent } from './arborea-article/arborea-article.component';
import { ArboreaMenuComponent } from './arborea-menu/arborea-menu.component';
import { ArboreaItemComponent } from './arborea-item/arborea-item.component';
import { ArboreaMenuItemComponent } from './arborea-menu-item/arborea-menu-item.component';
import { ArboreaGuildsRankingComponent } from './arborea-guilds-ranking/arborea-guilds-ranking.component';
import { ArboreaPlayersRankingComponent } from './arborea-players-ranking/arborea-players-ranking.component';
import { ArboreaTableComponent } from './arborea-table/arborea-table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ArboreaButtonSubmitComponent } from './arborea-button-submit/arborea-button-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    ArboreaHeaderComponent,
    ArboreaRegisterComponent,
    ArboreaHomeComponent,
    ArboreaNavbarComponent,
    ArboreaButtonComponent,
    ArboreaLoginComponent,
    ArboreaPasswordFieldComponent,
    ArboreaTextFieldComponent,
    ArboreaMailFieldComponent,
    ArboreaConfirmPasswordFieldComponent,
    ArboreaFooterComponent,
    ArboreaSidebarComponent,
    ArboreaArticleComponent,
    ArboreaMenuComponent,
    ArboreaItemComponent,
    ArboreaMenuItemComponent,
    ArboreaGuildsRankingComponent,
    ArboreaPlayersRankingComponent,
    ArboreaTableComponent,
    ArboreaButtonSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule,
    MatSidenavModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
