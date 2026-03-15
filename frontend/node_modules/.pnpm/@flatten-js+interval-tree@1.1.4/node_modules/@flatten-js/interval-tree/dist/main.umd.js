(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["@flatten-js/interval-tree"] = {}));
})(this, (function (exports) { 'use strict';

    /**
     * Created by Alex Bol on 4/1/2017.
     */

    /**
     * Interval is a pair of numbers or a pair of any comparable objects on which may be defined predicates
     * *equal*, *less* and method *max(p1, p1)* that returns maximum in a pair.
     * When interval is an object rather than a pair of numbers, this object should have properties *low*, *high*, *max*
     * and implement methods *less_than(), equal_to(), intersect(), not_intersect(), clone(), output()*.
     * Two static methods *comparable_max(), comparable_less_than()* define how to compare values in pair. <br/>
     * This interface is described in typescript definition file *index.d.ts*
     *
     * Axis aligned rectangle is an example of such interval.
     * We may look at rectangle as an interval between its low left and top right corners.
     * See **Box** class in [flatten-js](https://github.com/alexbol99/flatten-js) library as the example
     * of Interval interface implementation
     * @type {Interval}
     */
    const Interval = class Interval {
        /**
         * Accept two comparable values and creates new instance of interval
         * Predicate Interval.comparable_less(low, high) supposed to return true on these values
         * @param low
         * @param high
         */
        constructor(low, high) {
            this.low = low;
            this.high = high;
        }

        /**
         * Clone interval
         * @returns {Interval}
         */
        clone() {
            return new Interval(this.low, this.high);
        }

        /**
         * Propery max returns clone of this interval
         * @returns {Interval}
         */
        get max() {
            return this.clone();   // this.high;
        }

        /**
         * Predicate returns true is this interval less than other interval
         * @param other_interval
         * @returns {boolean}
         */
        less_than(other_interval) {
            return this.low < other_interval.low ||
                this.low === other_interval.low && this.high < other_interval.high;
        }

        /**
         * Predicate returns true is this interval equals to other interval
         * @param other_interval
         * @returns {boolean}
         */
        equal_to(other_interval) {
            return this.low === other_interval.low && this.high === other_interval.high;
        }

        /**
         * Predicate returns true if this interval intersects other interval
         * @param other_interval
         * @returns {boolean}
         */
        intersect(other_interval) {
            return !this.not_intersect(other_interval);
        }

        /**
         * Predicate returns true if this interval does not intersect other interval
         * @param other_interval
         * @returns {boolean}
         */
        not_intersect(other_interval) {
            return (this.high < other_interval.low || other_interval.high < this.low);
        }

        /**
         * Returns new interval merged with other interval
         * @param {Interval} other_interval - Other interval to merge with
         * @returns {Interval}
         */
        merge(other_interval) {
            return new Interval(
                this.low === undefined ?
                    other_interval.low : (this.low < other_interval.low ? this.low : other_interval.low),
                this.high === undefined ?
                    other_interval.high : (this.high > other_interval.high ? this.high : other_interval.high)
            );
        }

        /**
         * Returns how key should return
         */
        output() {
            return [this.low, this.high];
        }

        /**
         * Function returns maximum between two comparable values
         * @param interval1
         * @param interval2
         * @returns {Interval}
         */
        static comparable_max(interval1, interval2) {
            return interval1.merge(interval2);
        }

        /**
         * Predicate returns true if first value less than second value
         * @param val1
         * @param val2
         * @returns {boolean}
         */
        static comparable_less_than(val1, val2 ) {
            return val1 < val2;
        }
    };

    /**
     * Created by Alex Bol on 3/28/2017.
     */


    // module.exports = {
    //     RB_TREE_COLOR_RED: 0,
    //     RB_TREE_COLOR_BLACK: 1
    // };

    const RB_TREE_COLOR_RED = 0;
    const RB_TREE_COLOR_BLACK = 1;

    /**
     * Created by Alex Bol on 4/1/2017.
     */


    class Node {
        constructor(key = undefined, value = undefined,
                    left = null, right = null, parent = null, color = RB_TREE_COLOR_BLACK) {
            this.left = left;                     // reference to left child node
            this.right = right;                   // reference to right child node
            this.parent = parent;                 // reference to parent node
            this.color = color;

            this.item = {key: key, value: value};   // key is supposed to be instance of Interval

            /* If not, this should by an array of two numbers */
            if (key && key instanceof Array && key.length === 2) {
                if (!Number.isNaN(key[0]) && !Number.isNaN(key[1])) {
                    let [low, high] = key;
                    if (low > high) [low, high] = [high, low];
                    this.item.key = new Interval(low, high);
                }
            }

            this.max = this.item.key ? this.item.key.max : undefined;
        }

        isNil() {
            return (this.item.key === undefined && this.item.value === undefined &&
                this.left === null && this.right === null && this.color === RB_TREE_COLOR_BLACK);
        }

        _value_less_than(other_node) {
            return this.item.value && other_node.item.value && this.item.value.less_than ?
                this.item.value.less_than(other_node.item.value) :
                this.item.value < other_node.item.value;
        }

        less_than(other_node) {
            // if tree stores only keys
            if (this.item.value === this.item.key && other_node.item.value === other_node.item.key) {
                return this.item.key.less_than(other_node.item.key);
            }
            else {    // if tree stores keys and values
                return this.item.key.less_than(other_node.item.key) ||
                    this.item.key.equal_to((other_node.item.key)) && this._value_less_than(other_node)
            }
        }

        _value_equal(other_node) {
            return this.item.value && other_node.item.value && this.item.value.equal_to ?
                this.item.value.equal_to(other_node.item.value) :
                this.item.value === other_node.item.value;
        }
        equal_to(other_node) {
            // if tree stores only keys
            if (this.item.value === this.item.key && other_node.item.value === other_node.item.key) {
                return this.item.key.equal_to(other_node.item.key);
            }
            else {    // if tree stores keys and values
                return this.item.key.equal_to(other_node.item.key) && this._value_equal(other_node);
            }
        }

        intersect(other_node) {
            return this.item.key.intersect(other_node.item.key);
        }

        copy_data(other_node) {
            this.item.key = other_node.item.key;
            this.item.value = other_node.item.value;
        }

        update_max() {
            // use key (Interval) max property instead of key.high
            this.max = this.item.key ? this.item.key.max : undefined;
            if (this.right && this.right.max) {
                const comparable_max = this.item.key.constructor.comparable_max;  // static method
                this.max = comparable_max(this.max, this.right.max);
            }
            if (this.left && this.left.max) {
                const comparable_max = this.item.key.constructor.comparable_max;  // static method
                this.max = comparable_max(this.max, this.left.max);
            }
        }

        // Other_node does not intersect any node of left subtree, if this.left.max < other_node.item.key.low
        not_intersect_left_subtree(search_node) {
            const comparable_less_than = this.item.key.constructor.comparable_less_than;  // static method
            let high = this.left.max.high !== undefined ? this.left.max.high : this.left.max;
            return comparable_less_than(high, search_node.item.key.low);
        }

        // Other_node does not intersect right subtree if other_node.item.key.high < this.right.key.low
        not_intersect_right_subtree(search_node) {
            const comparable_less_than = this.item.key.constructor.comparable_less_than;  // static method
            let low = this.right.max.low !== undefined ? this.right.max.low : this.right.item.key.low;
            return comparable_less_than(search_node.item.key.high, low);
        }
    }

    /**
     * Created by Alex Bol on 3/31/2017.
     */

    // const nil_node = new Node();

    /**
     * Implementation of interval binary search tree <br/>
     * Interval tree stores items which are couples of {key:interval, value: value} <br/>
     * Interval is an object with high and low properties or simply pair [low,high] of numeric values <br />
     * @type {IntervalTree}
     */
    class IntervalTree {
        /**
         * Construct new empty instance of IntervalTree
         */
        constructor() {
            this.root = null;
            this.nil_node = new Node();
        }

        /**
         * Returns number of items stored in the interval tree
         * @returns {number}
         */
        get size() {
            let count = 0;
            this.tree_walk(this.root, () => count++);
            return count;
        }

        /**
         * Returns array of sorted keys in the ascending order
         * @returns {Array}
         */
        get keys() {
            let res = [];
            this.tree_walk(this.root, (node) => res.push(
                node.item.key.output ? node.item.key.output() : node.item.key
            ));
            return res;
        }

        /**
         * Return array of values in the ascending keys order
         * @returns {Array}
         */
        get values() {
            let res = [];
            this.tree_walk(this.root, (node) => res.push(node.item.value));
            return res;
        }

        /**
         * Returns array of items (<key,value> pairs) in the ascended keys order
         * @returns {Array}
         */
        get items() {
            let res = [];
            this.tree_walk(this.root, (node) => res.push({
                key: node.item.key.output ? node.item.key.output() : node.item.key,
                value: node.item.value
            }));
            return res;
        }

        /**
         * Returns true if tree is empty
         * @returns {boolean}
         */
        isEmpty() {
            return (this.root == null || this.root === this.nil_node);
        }

        /**
         * Clear tree
         */
        clear() {
            this.root = null;
        }

        /**
         * Insert new item into interval tree
         * @param {Interval} key - interval object or array of two numbers [low, high]
         * @param {Value<T>} value - value representing any object (optional)
         * @returns {Node} returns reference to inserted node as an object {key:interval, value: value}
         */
        insert(key, value = key) {
            if (key === undefined) return;
            let insert_node = new Node(key, value, this.nil_node, this.nil_node, null, RB_TREE_COLOR_RED);
            this.tree_insert(insert_node);
            this.recalc_max(insert_node);
            return insert_node;
        }

        /**
         * Returns true if item {key,value} exist in the tree
         * @param {Interval} key - interval correspondent to keys stored in the tree
         * @param {Value<T>} value - value object to be checked
         * @returns {boolean} true if item {key, value} exist in the tree, false otherwise
         */
        exist(key, value = key) {
            let search_node = new Node(key, value);
            return !!this.tree_search(this.root, search_node);
        }

        /**
         * Remove entry {key, value} from the tree
         * @param {Interval} key - interval correspondent to keys stored in the tree
         * @param {Value<T>} value - value object
         * @returns {boolean} true if item {key, value} deleted, false if not found
         */
        remove(key, value = key) {
            let search_node = new Node(key, value);
            let delete_node = this.tree_search(this.root, search_node);
            if (delete_node) {
                this.tree_delete(delete_node);
            }
            return delete_node;
        }

        /**
         * Returns array of entry values which keys intersect with given interval <br/>
         * If no values stored in the tree, returns array of keys which intersect given interval
         * @param {Interval} interval - search interval, or tuple [low, high]
         * @param outputMapperFn(value,key) - optional function that maps (value, key) to custom output
         * @returns {Array}
         */
        search(interval, outputMapperFn = (value, key) => value === key ? key.output() : value) {
            let search_node = new Node(interval);
            let resp_nodes = [];
            this.tree_search_interval(this.root, search_node, resp_nodes);
            return resp_nodes.map(node => outputMapperFn(node.item.value, node.item.key))
        }

        /**
         * Returns true if intersection between given and any interval stored in the tree found
         * @param {Interval} interval - search interval or tuple [low, high]
         * @returns {boolean}
         */
        intersect_any(interval) {
            let search_node = new Node(interval);
            return this.tree_find_any_interval(this.root, search_node);
        }

        /**
         * Tree visitor. For each node implement a callback function. <br/>
         * Method calls a callback function with two parameters (key, value)
         * @param visitor(key,value) - function to be called for each tree item
         */
        forEach(visitor) {
            this.tree_walk(this.root, (node) => visitor(node.item.key, node.item.value));
        }

        /**
         * Value Mapper. Walk through every node and map node value to another value
         * @param callback(value,key) - function to be called for each tree item
         */
        map(callback) {
            const tree = new IntervalTree();
            this.tree_walk(this.root, (node) => tree.insert(node.item.key, callback(node.item.value, node.item.key)));
            return tree;
        }

        /**
         * @param {Interval} interval - optional if the iterator is intended to start from the beginning
         * @param outputMapperFn(value,key) - optional function that maps (value, key) to custom output
         * @returns {Iterator}
         */
        *iterate(interval, outputMapperFn = (value, key) => value === key ? key.output() : value) {
            let node;
            if (interval) {
                node = this.tree_search_nearest_forward(this.root, new Node(interval));
            } else if (this.root) {
                node = this.local_minimum(this.root);
            }
            while (node) {
                yield outputMapperFn(node.item.value, node.item.key);
                node = this.tree_successor(node);
            }
        }

        recalc_max(node) {
            let node_current = node;
            while (node_current.parent != null) {
                node_current.parent.update_max();
                node_current = node_current.parent;
            }
        }

        tree_insert(insert_node) {
            let current_node = this.root;
            let parent_node = null;

            if (this.root == null || this.root === this.nil_node) {
                this.root = insert_node;
            }
            else {
                while (current_node !== this.nil_node) {
                    parent_node = current_node;
                    if (insert_node.less_than(current_node)) {
                        current_node = current_node.left;
                    }
                    else {
                        current_node = current_node.right;
                    }
                }

                insert_node.parent = parent_node;

                if (insert_node.less_than(parent_node)) {
                    parent_node.left = insert_node;
                }
                else {
                    parent_node.right = insert_node;
                }
            }

            this.insert_fixup(insert_node);
        }

    // After insertion insert_node may have red-colored parent, and this is a single possible violation
    // Go upwords to the root and re-color until violation will be resolved
        insert_fixup(insert_node) {
            let current_node;
            let uncle_node;

            current_node = insert_node;
            while (current_node !== this.root && current_node.parent.color === RB_TREE_COLOR_RED) {
                if (current_node.parent === current_node.parent.parent.left) {   // parent is left child of grandfather
                    uncle_node = current_node.parent.parent.right;              // right brother of parent
                    if (uncle_node.color === RB_TREE_COLOR_RED) {             // Case 1. Uncle is red
                        // re-color father and uncle into black
                        current_node.parent.color = RB_TREE_COLOR_BLACK;
                        uncle_node.color = RB_TREE_COLOR_BLACK;
                        current_node.parent.parent.color = RB_TREE_COLOR_RED;
                        current_node = current_node.parent.parent;
                    }
                    else {                                                    // Case 2 & 3. Uncle is black
                        if (current_node === current_node.parent.right) {     // Case 2. Current if right child
                            // This case is transformed into Case 3.
                            current_node = current_node.parent;
                            this.rotate_left(current_node);
                        }
                        current_node.parent.color = RB_TREE_COLOR_BLACK;    // Case 3. Current is left child.
                        // Re-color father and grandfather, rotate grandfather right
                        current_node.parent.parent.color = RB_TREE_COLOR_RED;
                        this.rotate_right(current_node.parent.parent);
                    }
                }
                else {                                                         // parent is right child of grandfather
                    uncle_node = current_node.parent.parent.left;              // left brother of parent
                    if (uncle_node.color === RB_TREE_COLOR_RED) {             // Case 4. Uncle is red
                        // re-color father and uncle into black
                        current_node.parent.color = RB_TREE_COLOR_BLACK;
                        uncle_node.color = RB_TREE_COLOR_BLACK;
                        current_node.parent.parent.color = RB_TREE_COLOR_RED;
                        current_node = current_node.parent.parent;
                    }
                    else {
                        if (current_node === current_node.parent.left) {             // Case 5. Current is left child
                            // Transform into case 6
                            current_node = current_node.parent;
                            this.rotate_right(current_node);
                        }
                        current_node.parent.color = RB_TREE_COLOR_BLACK;    // Case 6. Current is right child.
                        // Re-color father and grandfather, rotate grandfather left
                        current_node.parent.parent.color = RB_TREE_COLOR_RED;
                        this.rotate_left(current_node.parent.parent);
                    }
                }
            }

            this.root.color = RB_TREE_COLOR_BLACK;
        }

        tree_delete(delete_node) {
            let cut_node;   // node to be cut - either delete_node or successor_node  ("y" from 14.4)
            let fix_node;   // node to fix rb tree property   ("x" from 14.4)

            if (delete_node.left === this.nil_node || delete_node.right === this.nil_node) {  // delete_node has less then 2 children
                cut_node = delete_node;
            }
            else {                                                    // delete_node has 2 children
                cut_node = this.tree_successor(delete_node);
            }

            // fix_node if single child of cut_node
            if (cut_node.left !== this.nil_node) {
                fix_node = cut_node.left;
            }
            else {
                fix_node = cut_node.right;
            }

            // remove cut_node from parent
            /*if (fix_node != this.nil_node) {*/
                fix_node.parent = cut_node.parent;
            /*}*/

            if (cut_node === this.root) {
                this.root = fix_node;
            }
            else {
                if (cut_node === cut_node.parent.left) {
                    cut_node.parent.left = fix_node;
                }
                else {
                    cut_node.parent.right = fix_node;
                }
                cut_node.parent.update_max();        // update max property of the parent
            }

            this.recalc_max(fix_node);              // update max property upward from fix_node to root

            // COPY DATA !!!
            // Delete_node becomes cut_node, it means that we cannot hold reference
            // to node in outer structure and we will have to delete by key, additional search need
            if (cut_node !== delete_node) {
                delete_node.copy_data(cut_node);
                delete_node.update_max();           // update max property of the cut node at the new place
                this.recalc_max(delete_node);       // update max property upward from delete_node to root
            }

            if (/*fix_node != this.nil_node && */cut_node.color === RB_TREE_COLOR_BLACK) {
                this.delete_fixup(fix_node);
            }
        }

        delete_fixup(fix_node) {
            let current_node = fix_node;
            let brother_node;

            while (current_node !== this.root && current_node.parent != null && current_node.color === RB_TREE_COLOR_BLACK) {
                if (current_node === current_node.parent.left) {          // fix node is left child
                    brother_node = current_node.parent.right;
                    if (brother_node.color === RB_TREE_COLOR_RED) {   // Case 1. Brother is red
                        brother_node.color = RB_TREE_COLOR_BLACK;         // re-color brother
                        current_node.parent.color = RB_TREE_COLOR_RED;    // re-color father
                        this.rotate_left(current_node.parent);
                        brother_node = current_node.parent.right;                      // update brother
                    }
                    // Derive to cases 2..4: brother is black
                    if (brother_node.left.color === RB_TREE_COLOR_BLACK &&
                        brother_node.right.color === RB_TREE_COLOR_BLACK) {  // case 2: both nephews black
                        brother_node.color = RB_TREE_COLOR_RED;              // re-color brother
                        current_node = current_node.parent;                  // continue iteration
                    }
                    else {
                        if (brother_node.right.color === RB_TREE_COLOR_BLACK) {   // case 3: left nephew red, right nephew black
                            brother_node.color = RB_TREE_COLOR_RED;          // re-color brother
                            brother_node.left.color = RB_TREE_COLOR_BLACK;   // re-color nephew
                            this.rotate_right(brother_node);
                            brother_node = current_node.parent.right;                     // update brother
                            // Derive to case 4: left nephew black, right nephew red
                        }
                        // case 4: left nephew black, right nephew red
                        brother_node.color = current_node.parent.color;
                        current_node.parent.color = RB_TREE_COLOR_BLACK;
                        brother_node.right.color = RB_TREE_COLOR_BLACK;
                        this.rotate_left(current_node.parent);
                        current_node = this.root;                         // exit from loop
                    }
                }
                else {                                             // fix node is right child
                    brother_node = current_node.parent.left;
                    if (brother_node.color === RB_TREE_COLOR_RED) {   // Case 1. Brother is red
                        brother_node.color = RB_TREE_COLOR_BLACK;         // re-color brother
                        current_node.parent.color = RB_TREE_COLOR_RED;    // re-color father
                        this.rotate_right(current_node.parent);
                        brother_node = current_node.parent.left;                        // update brother
                    }
                    // Go to cases 2..4
                    if (brother_node.left.color === RB_TREE_COLOR_BLACK &&
                        brother_node.right.color === RB_TREE_COLOR_BLACK) {   // case 2
                        brother_node.color = RB_TREE_COLOR_RED;             // re-color brother
                        current_node = current_node.parent;                              // continue iteration
                    }
                    else {
                        if (brother_node.left.color === RB_TREE_COLOR_BLACK) {  // case 3: right nephew red, left nephew black
                            brother_node.color = RB_TREE_COLOR_RED;            // re-color brother
                            brother_node.right.color = RB_TREE_COLOR_BLACK;    // re-color nephew
                            this.rotate_left(brother_node);
                            brother_node = current_node.parent.left;                        // update brother
                            // Derive to case 4: right nephew black, left nephew red
                        }
                        // case 4: right nephew black, left nephew red
                        brother_node.color = current_node.parent.color;
                        current_node.parent.color = RB_TREE_COLOR_BLACK;
                        brother_node.left.color = RB_TREE_COLOR_BLACK;
                        this.rotate_right(current_node.parent);
                        current_node = this.root;                               // force exit from loop
                    }
                }
            }

            current_node.color = RB_TREE_COLOR_BLACK;
        }

        tree_search(node, search_node) {
            if (node == null || node === this.nil_node)
                return undefined;

            if (search_node.equal_to(node)) {
                return node;
            }
            if (search_node.less_than(node)) {
                return this.tree_search(node.left, search_node);
            }
            else {
                return this.tree_search(node.right, search_node);
            }
        }

        tree_search_nearest_forward(node, search_node) {
            let best;
            let curr = node;
            while (curr && curr !== this.nil_node) {
                if (curr.less_than(search_node)) {
                    if (curr.intersect(search_node)) {
                        best = curr;
                        curr = curr.left;
                    } else {
                        curr = curr.right;
                    }
                } else {
                    if (!best || curr.less_than(best)) best = curr;
                    curr = curr.left;
                }
            }
            return best || null;
        }

        // Original search_interval method; container res support push() insertion
        // Search all intervals intersecting given one
        tree_search_interval(node, search_node, res) {
            if (node != null && node !== this.nil_node) {
                // if (node->left != this.nil_node && node->left->max >= low) {
                if (node.left !== this.nil_node && !node.not_intersect_left_subtree(search_node)) {
                    this.tree_search_interval(node.left, search_node, res);
                }
                // if (low <= node->high && node->low <= high) {
                if (node.intersect(search_node)) {
                    res.push(node);
                }
                // if (node->right != this.nil_node && node->low <= high) {
                if (node.right !== this.nil_node && !node.not_intersect_right_subtree(search_node)) {
                    this.tree_search_interval(node.right, search_node, res);
                }
            }
        }

        tree_find_any_interval(node, search_node) {
            let found = false;
            if (node != null && node !== this.nil_node) {
                if (node.left !== this.nil_node && !node.not_intersect_left_subtree(search_node)) {
                    found = this.tree_find_any_interval(node.left, search_node);
                }
                if (!found) {
                    found = node.intersect(search_node);
                }
                if (!found && node.right !== this.nil_node && !node.not_intersect_right_subtree(search_node)) {
                    found = this.tree_find_any_interval(node.right, search_node);
                }
            }
            return found;
        }

        local_minimum(node) {
            let node_min = node;
            while (node_min.left != null && node_min.left !== this.nil_node) {
                node_min = node_min.left;
            }
            return node_min;
        }

        // not in use
        local_maximum(node) {
            let node_max = node;
            while (node_max.right != null && node_max.right !== this.nil_node) {
                node_max = node_max.right;
            }
            return node_max;
        }

        tree_successor(node) {
            let node_successor;
            let current_node;
            let parent_node;

            if (node.right !== this.nil_node) {
                node_successor = this.local_minimum(node.right);
            }
            else {
                current_node = node;
                parent_node = node.parent;
                while (parent_node != null && parent_node.right === current_node) {
                    current_node = parent_node;
                    parent_node = parent_node.parent;
                }
                node_successor = parent_node;
            }
            return node_successor;
        }

        //           |            right-rotate(T,y)       |
        //           y            ---------------.       x
        //          / \                                  / \
        //         x   c          left-rotate(T,x)      a   y
        //        / \             <---------------         / \
        //       a   b                                    b   c

        rotate_left(x) {
            let y = x.right;

            x.right = y.left;           // b goes to x.right

            if (y.left !== this.nil_node) {
                y.left.parent = x;     // x becomes parent of b
            }
            y.parent = x.parent;       // move parent

            if (x === this.root) {
                this.root = y;           // y becomes root
            }
            else {                        // y becomes child of x.parent
                if (x === x.parent.left) {
                    x.parent.left = y;
                }
                else {
                    x.parent.right = y;
                }
            }
            y.left = x;                 // x becomes left child of y
            x.parent = y;               // and y becomes parent of x

            if (x !== null && x !== this.nil_node) {
                x.update_max();
            }

            y = x.parent;
            if (y != null && y !== this.nil_node) {
                y.update_max();
            }
        }

        rotate_right(y) {
            let x = y.left;

            y.left = x.right;           // b goes to y.left

            if (x.right !== this.nil_node) {
                x.right.parent = y;        // y becomes parent of b
            }
            x.parent = y.parent;          // move parent

            if (y === this.root) {        // x becomes root
                this.root = x;
            }
            else {                        // y becomes child of x.parent
                if (y === y.parent.left) {
                    y.parent.left = x;
                }
                else {
                    y.parent.right = x;
                }
            }
            x.right = y;                 // y becomes right child of x
            y.parent = x;               // and x becomes parent of y

            if (y !== null && y !== this.nil_node) {
                y.update_max();
            }

            x = y.parent;
            if (x != null && x !== this.nil_node) {
                x.update_max();
            }
        }

        tree_walk(node, action) {
            if (node != null && node !== this.nil_node) {
                this.tree_walk(node.left, action);
                // arr.push(node.toArray());
                action(node);
                this.tree_walk(node.right, action);
            }
        }

        /* Return true if all red nodes have exactly two black child nodes */
        testRedBlackProperty() {
            let res = true;
            this.tree_walk(this.root, function (node) {
                if (node.color === RB_TREE_COLOR_RED) {
                    if (!(node.left.color === RB_TREE_COLOR_BLACK && node.right.color === RB_TREE_COLOR_BLACK)) {
                        res = false;
                    }
                }
            });
            return res;
        }

        /* Throw error if not every path from root to bottom has same black height */
        testBlackHeightProperty(node) {
            let height = 0;
            let heightLeft = 0;
            let heightRight = 0;
            if (node.color === RB_TREE_COLOR_BLACK) {
                height++;
            }
            if (node.left !== this.nil_node) {
                heightLeft = this.testBlackHeightProperty(node.left);
            }
            else {
                heightLeft = 1;
            }
            if (node.right !== this.nil_node) {
                heightRight = this.testBlackHeightProperty(node.right);
            }
            else {
                heightRight = 1;
            }
            if (heightLeft !== heightRight) {
                throw new Error('Red-black height property violated');
            }
            height += heightLeft;
            return height;
        }
    }

    exports.Interval = Interval;
    exports.Node = Node;
    exports.default = IntervalTree;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
