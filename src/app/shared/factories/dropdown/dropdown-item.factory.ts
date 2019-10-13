import {Injectable} from "@angular/core";
import {FactoryInterface} from "../factory.interface";
import * as _ from 'lodash';

@Injectable()
export class DropdownItemFactory implements FactoryInterface {
    build(settings) {
        const source = _.get(settings, 'source', []);
        return source.map(item => {
            return {
                id: _.get(item, _.get(item, 'id', '_id')),
                itemName: _.get(item, _.get(item, 'itemName', 'name'))
            };
        });
    }
}
