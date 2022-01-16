// https://leetcode.com/problems/design-hashmap/


var MyHashMap = function() {
    this.hash = {};
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.hash[key] = value;
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    if(typeof this.hash[key] !== 'undefined') {
        return this.hash[key];
    } else {
        return -1;
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    if(typeof this.hash[key] !== 'undefined') {
        delete this.hash[key];
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */