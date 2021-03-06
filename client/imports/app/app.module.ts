import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { IonicApp, IonicModule } from "ionic-angular";
import {TabsContainerComponent} from "../pages/tabs-container/tabs-container.component";
import {ChatsComponent} from "../pages/chats/chats.component";
import {MomentModule} from "angular2-moment";
import {MessagesPage} from "../pages/chat/messages-page.component";


@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    TabsContainerComponent,
    ChatsComponent,
    MessagesPage
  ],
  // Entry Components
  entryComponents: [
    AppComponent,
    TabsContainerComponent,
    ChatsComponent,
    MessagesPage
  ],
  // Providers
  providers: [
  ],
  // Modules
  imports: [
    IonicModule.forRoot(AppComponent),
    MomentModule
  ],
  // Main Component
  bootstrap: [ IonicApp ]
})
export class AppModule {
  constructor() {

  }
}
