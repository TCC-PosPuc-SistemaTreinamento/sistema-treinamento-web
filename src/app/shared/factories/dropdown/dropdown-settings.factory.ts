import {Injectable} from "@angular/core";
import {FactoryInterface} from "../factory.interface";
import * as _ from 'lodash';

@Injectable()
export class DropdownSettingsFactory implements FactoryInterface {
    build(settings) {
        return {
            singleSelection: _.get(settings, 'singleSelection', false),
            text: _.get(settings, 'text'),
            enableCheckAll: _.get(settings, 'enableCheckAll', false),
            selectAllText: _.get(settings, 'selectAllText', 'Marcar todos'),
            unSelectAllText: _.get(settings, 'unSelectAllText', 'Desmarcar todos'),
            enableSearchFilter: _.get(settings, 'unSelectAllText', true),
            classes: _.get(settings, 'classes', '')
        };
    }
}
