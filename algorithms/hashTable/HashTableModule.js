import md5 from "blueimp-md5";

function hashFunction(key) {
    return md5(key); // Returns the hashed value for the key
}

class HashTable {
    constructor() {
        this.table = {}; // Create an empty object to hold key-value pairs
        this.size = 0;
        this.loadFactor = 0.8;
        this.capacity = 8;
    }

    resize() {
        const oldTable = this.table;
        this.table = {}; // Create a new table
        this.size = 0; // Reset the size to 0
        this.capacity *= 2; // Double the capacity

        for (const key in oldTable) {
            if (oldTable.hasOwnProperty(key)) {
                this.table[key] = oldTable[key]; // Copy the key-value pairs
                this.size++;
            }
        }
    }

    set(key, value) {
        const hashedKey = hashFunction(key); // Generate a unique key

        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }

        if (!this.table[hashedKey]) {
            this.size++; // Increment size only if this is a new entry
        }

        this.table[hashedKey] = value; // Store the value with the generated key
    }

    get(key) {
        const hashedKey = hashFunction(key); // Generate the key
        return this.table[hashedKey]; // Retrieve the value for the generated key
    }

    has(key) {
        const hashedKey = hashFunction(key); // Generate the key
        return hashedKey in this.table; // Check if the key exists
    }

    remove(key) {
        const hashedKey = hashFunction(key);
        if (this.has(key)) {
            delete this.table[hashedKey]; // Remove the key-value pair
            this.size--; // Decrease the size of the counter
            return true; // Return true to indicate successful removal
        }
        return false; // Return false if the key was not found
    }

    clear() {
        this.table = {}; // Clear the hash table
        this.size = 0;
    }

    keys() {
        return Object.keys(this.table); // Return an array of keys
    }

    values() {
        return Object.values(this.table); // Return an array of values
    }

    entries() {
        return Object.entries(this.table); // Return an array of [key, value] pairs
    }

    length() {
        return this.size; // Return the current size
    }
}

export { HashTable };
