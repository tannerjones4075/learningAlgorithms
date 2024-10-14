import md5 from "blueimp-md5";

function hashFunction(key) {
    return md5(key); // Returns the hashed value for the key
}

class HashTableNoValues {
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
                this.size++;
            }
        }
    }

    set(key) {
        const hashedKey = hashFunction(key); // Generate a unique key

        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }

        if (!this.table[hashedKey]) {
            this.table[hashedKey] = true; // dummy variable to set to true
            this.size++; // Increment size only if this is a new entry
        }
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
        return Object.keys(this.table); // Return an array of keys only if true
    }

    length() {
        return this.size; // Return the current size
    }
}

export { HashTableNoValues };
