import {NgModule} from "@angular/core";
import {DropdownItemFactory} from "./dropdown/dropdown-item.factory";
import {DropdownSettingsFactory} from "./dropdown/dropdown-settings.factory";

@NgModule({
    providers: [
        DropdownItemFactory,
        DropdownSettingsFactory
    ]
})
export class FactoryModule { }
