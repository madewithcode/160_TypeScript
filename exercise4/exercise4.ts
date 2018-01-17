console.log('exercise 4 - generics!');

class MyMap<T> {
    // internal map
    // the [key: string] syntax has nothing
    // to do with an array.
    // need to understand more.
    private map: {
        [key: string]: T
    } = {}; // initially an empty object

    // should create a new key-value pair
    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    // should retrieve the value of the provided key
    getItem(key: string) {
        return this.map[key];
    }

    // should remove all key-value pairs
    clear() {
        this.map = {};
    }

    // should output key-value pairs
    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', 'Max');
stringMap.setItem('age', '27');
stringMap.printMap();
