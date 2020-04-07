  
class Trie{
    TrieNode *root;
    public:
    Trie(){
        root = new TrieNode('\0');
    }
    void insertWord(TrieNode *root,string word){
       if(word.size() == 0)
       {
           root->isTerminal = true;
           return;
       }
       //calculation part
       int index = word[0] - 'a';
       TrieNode *child;
       if(root->children[index] != NULL)
       child = root->children[index];
       else{
       child = new TrieNode(word[0]);
       root->children[index] = child;
       }
       insertWord(child,word.substr(1));
    }
    void insertWord(string word){
        insertWord(root,word);
    }
    bool search(TrieNode *root,string word)
    {
        if( word.size() == 0)
        return root->isTerminal;
        int child = word[i] - 'a';
        TrieNode node = root->children[child];
        if(child)
        return search(word.substr(1));
        return false;
    }
    
}