import {Injectable} from "@angular/core";
import * as _ from 'lodash';

@Injectable()
export class UrlBuilderFactory {
    build(filters): string {
        const queryStrings: string[] = [];
        _.forOwn(filters, (filter, key) => {
            if (_.isArray(filter)) {
                if (_.isEmpty(filter)) return;

                filter.map(item => {
                    queryStrings.push(`${key}=${item}`);
                });
            } else {
                queryStrings.push(`${key}=${filter}`);
            }
        });

        return queryStrings.join('&');
    }
}
