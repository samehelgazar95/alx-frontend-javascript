class Arrayish extends Array {
  get [Symbol.isConcatSpreadable]() {
    return true;
  }
}

class Collection extends Array {
  get [Symbol.isConcatSpreadable]() {
    return false;
  }
}

let arrayishInstance = new Arrayish();
arrayishInstance[0] = 0;
arrayishInstance[1] = 1;
let collectionInstance = new Collection();
collectionInstance[0] = 2;
collectionInstance[1] = 3;

let spreadable = [].concat(arrayishInstance).concat(collectionInstance); // NOT THIS [...arrayishInstance, ...collectionInstance];
console.log(spreadable);