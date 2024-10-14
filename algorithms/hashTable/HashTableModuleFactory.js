import md5 from "blueimp-md5";

function hashFunction(key) {
    return md5(key); // Returns the hashed value for the key
}

function HashTable() {
    let table = {}; // Create an empty object to hold key-value pairs
    let size = 0;
    const loadFactor = 0.8;
    let capacity = 8;

    function resize() {
        const oldTable = table;
        // Create a new table
        table = {};
        size = 0; // Reset the size to 0
        capacity *= 2; // Double the capacity

        for (const key in oldTable) {
            if (oldTable.hasOwnProperty(key)) {
                set(key); // Reinsert the key to trigger hashing and increase size
            }
        }
    }

    function set(key, value) {
        const hashedKey = hashFunction(key); // Generate a unique key

        if (size / capacity > loadFactor) {
            resize();
        }

        if (!table[hashedKey]) {
            size++; // Increment size only if this is a new entry
        }

        table[hashedKey] = value; // Store the value with the generated key
    }

    function get(key) {
        const hashedKey = hashFunction(key); // Generate the key
        return table[hashedKey]; // Retrieve the value for the generated key
    }

    function has(key) {
        const hashedKey = hashFunction(key); // Generate the key
        return hashedKey in table; // Check if the key exists
    }

    function remove(key) {
        const hashedKey = hashFunction(key);
        if (has(key)) {
            delete table[hashedKey]; // Remove the key-value pair
            size--; // Decrease the size of the counter
            return true; // Return true to indicate successful removal
        }
        return false; // Return false if the key was not found
    }

    function clear() {
        table = {}; // Clear the hash table
        size = 0;
    }

    function keys() {
        return Object.keys(table); // Return an array of keys
    }

    function values() {
        return Object.values(table); // Return an array of values
    }

    function entries() {
        return Object.entries(table); // Return an array of [key, value] pairs
    }

    function length() {
        return size; // Return the current size
    }

    return {
        set, 
        get,
        has,
        remove,
        clear,
        keys, 
        length,
        values,
        entries
    }
}

export { HashTable };
