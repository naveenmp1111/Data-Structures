class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }

        return node.isEndOfWord;
    }                                                                                                                                                                                                                                                           
    
    startsWith(prefix) {
        let node = this.root;

        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    delete(word) {
        this._deleteRecursive(this.root, word, 0);
    }

    _deleteRecursive(node, word, index){
        if (!node) {
            return node;
        }

        if (index === word.length){
            // If the end of the word is reached, mark isEndOfWord as falset
            if (node.isEndOfWord) {
                node.isEndOfWord = false;
            }

            // If the current node has no other children, it can be safely deleted
            if (Object.keys(node.children).length === 0) {
                node = null;
            }
            return node;
        }

        // Recursively delete the next character in the word
        node.children[word[index]] = this._deleteRecursive(node.children[word[index]], word, index + 1);

        // If the current node has no other children and is not the end of another word, it can be safely deleted
        if (Object.keys(node.children).length === 0 && !node.isEndOfWord) {
            node = null;
        }
        return node;
    }       

    findAllWordWithPrefix(prefix){
        let words=[]
        let node=this.searchPrefix(prefix)
        if(node){
            this.collectAllWords(node,prefix,words)
        }
        return words
    }

    searchPrefix(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.children[char]){
                return null
            }
            node=node.children[char]
        }
        return node
    }

    collectAllWords(node,prefix,words){
        if(node.isEndOfWord){
            words.push(prefix)
        }
        for(let char in node.children){
            this.collectAllWords(node.children[char],prefix+char,words)
        }
    }
}

// Example usage:
let trie = new Trie();

trie.insert("apple");
trie.insert('anime')
trie.insert('app')
console.log(trie.search("apple"));   // Output: true
trie.delete("apple");
// console.log(trie.search("apple"));   // Output: false
console.log(trie.findAllWordWithPrefix('a'))