/**
 * Created by Alex Bol on 4/1/2017.
 */

'use strict';

import Interval from './interval.js';
import {RB_TREE_COLOR_BLACK} from '../utils/constants.js';

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
                let [low, high] = key
                if (low > high) [low, high] = [high, low]
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

export default Node;
