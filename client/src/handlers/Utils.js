/**
 * Common functions
 */

let Utils = {
    // inherit
    extend: function (child, parent) {
        let p = parent.prototype;
        let c = child.prototype;
        for (let i in p) {
            c[i] = p[i];
        }
        c.uber = p;
    },

    getChildByKey: function (parent, key) {
        let _child = [];
        for (let i = 0; i < parent.children; i++) {
            if (parent.children[i].key === key) {
                _child.push(parent.children[i]);
            }
        }

        if (_child.length === 0) {
            console.warn("Not matching key: " + key);
        } else if (_child.length === 1) {
            return _child[0];
        } else if (_child.length > 1) {
            return _child;
        }
    }
}

module.exports = Utils;