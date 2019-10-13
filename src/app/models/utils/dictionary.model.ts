export class Dictionary<T1 extends number | string, T2> {
    private keys: string[] = new Array<string>();
    private values: T2[] = new Array<T2>();

    // TODO: fazer funcionar para casos onde T2 é um array
    static fromArray<T1 extends number | string, T2>(collection: any[],
                                                     getKey: (item: any) => string|number,
                                                     getValue: (item: any) => any): Dictionary<T1, T2> {
        const map = new Dictionary<T1, T2>();
        collection.forEach(item => map.addOrUpdate(getKey(item), getValue(item)));
        return map;
    }

    static parseString<T1 extends number | string, T2>(json: string): Dictionary<T1, T2> {
        if (json) {
            return this.parseObject<T1, T2>(JSON.parse(json));
        }
        return null;
    }

    static parseObject<T1 extends number | string, T2>(obj: object): Dictionary<T1, T2> {
        if (obj) {
            const dictionary = new Dictionary<T1, T2>();
            // tslint:disable-next-line:forin
            for (const objKey in obj) {
                dictionary.addOrUpdate(objKey, <T2>obj[objKey]);
            }
            return dictionary;
        }
        return null;
    }

    addOrUpdate(key: number | string, value: T2) {
        if (this.containsKey(key)) {
            this[key] = value;
            return;
        }
        this[key] = value;
        this.keys.push(typeof(key) === "string" ? key : key.toString());
        this.values.push(value);
    }

    get(key: number | string): T2 {
        return this.containsKey(key) ? this[key] : null;
    }

    any() {
        return this.keys.length > 0;
    }

    remove(key: number | string) {
        const index = this.keys.findIndex(k => k == key);
        this.keys.splice(index, 1);
        this.values.splice(index, 1);
        delete this[key];
    }

    clear() {
        this.keys.forEach(key => delete this[key]);
        this.keys = [];
        this.values = [];
    }

    containsKey(key: number | string) {
        if (typeof this[key] === "undefined") {
            return false;
        }
        return true;
    }

    iterator() {
        return this.keys.map(key => {
            return { key: key, value: this[key] };
        });
    }

    count() {
        return this.keys.length;
    }

    toJson(): string {
        const json = {};
        this.keys.forEach(id => json[id] = this[id]);
        return JSON.stringify(json);
    }

    toObject() {
        const json = {};
        this.keys.forEach(id => json[id] = this[id]);
        return json;
    }
}
