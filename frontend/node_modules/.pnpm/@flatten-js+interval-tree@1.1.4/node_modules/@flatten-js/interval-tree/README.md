# Interval Tree
[![npm version](https://badge.fury.io/js/%40flatten-js%2Finterval-tree.svg)](https://badge.fury.io/js/%40flatten-js%2Finterval-tree)
[![Coverage Status](https://coveralls.io/repos/github/alexbol99/flatten-interval-tree/badge.svg?branch=master)](https://coveralls.io/github/alexbol99/flatten-interval-tree?branch=master)
[![@flatten-js/interval-tree](https://snyk.io/advisor/npm-package/@flatten-js/interval-tree/badge.svg)](https://snyk.io/advisor/npm-package/@flatten-js/interval-tree)

The package **@flatten-js/interval-tree** is an implementation of interval binary search tree according to Cormen et al. Introduction to Algorithms (2009, Section 14.3: Interval trees, pp. 348–354).
Cormen shows that insertion, deletion of nodes and range queries take *O(log(n))* time where n is the number of items
stored in the tree.

This package is a part of [flatten-js](https://github.com/alexbol99/flatten-js) library.
  
An earlier implementation, in package [flatten-interval-tree](https://www.npmjs.com/package/flatten-interval-tree), is no longer supported and will be deprecated soon.
Please use this package ([@flatten-js/interval-tree](https://www.npmjs.com/package/@flatten-js/interval-tree)) instead.

## Contacts

Follow me on Twitter [@alex_bol_](https://twitter.com/alex_bol_)

## Installation
```bash
npm install --save @flatten-js/interval-tree
```
## Usage
```javascript
import IntervalTree from '@flatten-js/interval-tree'
```

### Notes
Tree stores pairs ```<key,value>``` where key is an interval, and value is an object of any type.
If value omitted, tree stores only keys. ```value``` cannot be ```undefined```.

**Interval** can be a pair of numbers or an object that implements ```IntervalInterface``` described in
typescript declaration file ```index.d.ts```.

**Value** can be an object of the primitive type (*number, string, bigint*) or any object that support `less_than` method

Axis aligned rectangle is an example of such interval.
We may look at rectangle as an interval between its low left and top right corners.
It makes possible to use interval tree in spatial queries.
See **Box** class in [flatten-js](https://github.com/alexbol99/flatten-js) library for such
implementation.

### Example

```javascript
let tree = new IntervalTree();

let intervals = [[6,8],[1,4],[5,12],[1,1],[5,7]];

// Insert interval as a key and string "val0", "val1" etc. as a value 
for (let i=0; i < intervals.length; i++) {
    tree.insert(intervals[i],"val"+i);
}

// Get array of keys sorted in ascendant order
let sorted_intervals = tree.keys;              //  expected array [[1,1],[1,4],[5,7],[5,12],[6,8]]

// Search items which keys intersect with given interval, and return array of values
let values_in_range = tree.search([2,3]);     //  expected array ['val1']
```

### Constructor
Create new instance of interval tree
```javascript
let tree = new IntervalTree()
```

### Insert(key[, value])
Insert new item into the tree. Key is an interval object or pair of numbers [low, high]. <br/>
Value may represent any value or reference to any object. If value omitted, tree will store and retrieve keys as values. <br/>
Method returns reference to the inserted node
```javascript
let node = tree.insert(key, value)
```

### Exist(key, value)
Method returns true if item {key, value} exists in the tree. <br/>

```javascript
let exist = tree.exist(key, value)
```

### Remove(key, value)
Removes item from the tree. Returns true if item was found and deleted, false if not found
```javascript
let removed = tree.remove(key, value)
```

### Search(interval[, outputMapperFn])
Returns array of values which keys intersected with given interval. <br/>
```javascript
let resp = tree.search(interval)
```
Optional *outputMapperFn(value, key)* enables to map search results into custom defined output.
Example:
```javascript
const composers = [
    {name: "Ludwig van Beethoven", period: [1770, 1827]},
    {name: "Johann Sebastian Bach", period: [1685, 1750]},
    {name: "Wolfgang Amadeus Mozart", period: [1756, 1791]},
    {name: "Johannes Brahms", period: [1833, 1897]},
    {name: "Richard Wagner", period: [1813, 1883]},
    {name: "Claude Debussy", period: [1862, 1918]},
    {name: "Pyotr Ilyich Tchaikovsky", period: [1840, 1893]},
    {name: "Frédéric Chopin", period: [1810, 1849]},
    {name: "Joseph Haydn", period: [1732, 1809]},
    {name: "Antonio Vivaldi", period: [1678, 1741]}
];
const tree = new IntervalTree();
for (let composer of composers)
    tree.insert(composer.period, composer.name);

// Great composers who lived in 17th century
const searchRes = tree.search( [1600,1700],
    (name, period) => {return `${name} (${period.low}-${period.high})`});

console.log(searchRes)

// expected to be 
// [ 'Antonio Vivaldi (1678-1741)', 'Johann Sebastian Bach (1685-1750)' ]
```

### Intersect_any(interval)
Returns true if intersection found between given interval and any of intervals stored in the tree

```javascript
let found = tree.intersect_any(interval)
```

### Size
Returns number of items stored in the tree (getter)
```javascript
let size = tree.size
```

### Keys
Returns tree keys in ascendant order (getter)
```javascript
let keys = tree.keys
```

### Values
Returns tree values in ascendant keys order (getter)
```javascript
let values = tree.values
``` 

### Items
Returns items in ascendant keys order (getter)
```javascript
let items = tree.items
```

### ForEach(visitor)
Enables to traverse the whole tree and perform operation for each item
```javascript
tree.forEach( (key, value) => console.log(value) )
```

### Map(callback)
Creates new tree with same keys using callback to transform (key,value) to a new value
```javascript
let tree1 = tree.map((value, key) => (key.high-key.low))
```

### Clear()
Clear tree
```javascript
tree.clear()
```

### Iterate([interval, outputMapperFn])
Returns an iterator (and iterable). <br/>
Call `next` on the iterator to navigate to successor tree nodes and return the corresponding values. <br/>
In the absence of a starting interval, the iterator will start with the lowest interval. <br/>
```javascript
let iterator = tree.iterate();
let next = iterator.next().value;
```
Optional *outputMapperFn(value, key)* enables to map search results into custom defined output. <br/>
Example:
```javascript
let iterator = tree.iterate([5,5], (value, key) => key);
let next_key = iterator.next().value;
```
Supports `for .. of` syntax. <br/>
Example:
```javascript
for (let key of tree.iterate([5,5], (value, key) => key)) {
    if (key[0] > 8) break;
    console.log(key);
}
```

## Documentation
Documentation may be found here: [https://alexbol99.github.io/flatten-interval-tree](https://alexbol99.github.io/flatten-interval-tree/)

## Tests
```bash
npm test
```
## Contributors

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## License

MIT

## Support

<a href="https://www.buymeacoffee.com/alexbol99" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
