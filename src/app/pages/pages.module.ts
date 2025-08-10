import { NgModule } from "@angular/core";
import { PagesRoutes } from "./pages.routes";
import { LoginComponent } from "./login/login.component";
import { RouterOutlet } from "@angular/router";

@NgModule({
    declarations: [],
    imports: [ PagesRoutes],
})
export class PagesModule 
{
    constructor() {
        console.log("PagesModule loaded");
    }
}