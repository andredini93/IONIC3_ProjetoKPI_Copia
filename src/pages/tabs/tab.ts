import { Component } from "@angular/core";
import { HomePage } from "../home/home";
import { NewGDDash } from "../NewGDDash/NewGDDash";

@Component({
    selector: 'tab-page',
    templateUrl: "tab.html"
})
export class TabsPage{
    
    constructor(){}

    tab1 =  NewGDDash;
    tab2 =  NewGDDash;
    tab3 = HomePage;
    tab4 = NewGDDash;
    numeroNot = 5;
}
