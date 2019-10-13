import * as _ from 'lodash';

export class FiltersFactory {
    loadStored(filters, filtersStored) {
        _.forOwn(filtersStored, (value, key) => {
            if (value == 'undefined' || filters[key] == 'undefined' || value == null) return;

            if (_.isObject(filters[key])) {
                filters[key].selected = _.isArray(value) ? filters[key].list.filter(item => value == item.id) : value;
            } else {
                filters[key] = _.isArray(value) ? filters[key].list.filter(item => value == item.id) : value;
            }
        });

        return filters;
    }
}
