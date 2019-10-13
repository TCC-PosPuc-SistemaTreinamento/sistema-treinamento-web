import { Dictionary } from "./dictionary.model";

export class UrlBuilder {
    mapping = new Dictionary<string, any>();

    constructor(queryStringKeyValues?: any[]) {
        if (queryStringKeyValues) {
            this.addQueryStringParams(queryStringKeyValues);
        }
    }

    addQueryStringParams(keyValueParams: any[]) {
        keyValueParams.forEach(pair => this.addQueryStringParam(pair.key, pair.value));
    }

    addQueryStringParam(key: string, value: any) {
        if (key == "" || typeof(value) == "string" && value == "") {
            return;
        }
        if (key != null && value != undefined && key != undefined && value != undefined) {
            this.mapping.addOrUpdate(key, value);
        }
    }

    buildUrl(baseUrl: string) {
        if (this.mapping.any()) {
            const pairs = this.mapping.iterator();
            baseUrl += `?${pairs[0].key}=${pairs[0].value}`;
            if (pairs.length > 1) {
                for (let index = 1; index < pairs.length; index++) {
                    baseUrl += `&${pairs[index].key}=${pairs[index].value}`;
                }
            }
        }
        return baseUrl;
    }
}