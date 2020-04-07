class TrieNode{
    public:
    char data;
    TrieNode **children;
    TrieNode(char data){
        this->data = data;
        children = new TrieNode*[26];
        for(int i = 0;i<26;i++)
        children[i] = NULL;
        isTerminal=false;
    }
}