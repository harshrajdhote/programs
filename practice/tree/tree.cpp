#include<iostream>
#include<queue>
#include "TreeNode.h"
int countNodes(TreeNode<int>* root){
    int ans = 1;
    for(int i = 0;i<root->children.size();i++){
        ans += countNodes(root->children[i]);
    }
    return ans;
}
TreeNode<int>* takeInput(){ //preorder input taking 
   int rootData;
   cout<<"Enter Data"<<endl;
   cin>>rootData;
   TreeNode <int>* root = new TreeNode<int>(rootData);
   int n;
   cout<<"Enter num of Children of "<<rootData<<endl;
   cin>>n;
   for(int i = 0;i<n;i++)
   {
       TreeNode<int>*child = takeInput();
       root->children.push_back(child);
   }  
   return root;  // give the preorder input
}
void printAtLevelK(TreeNode<int>* root , int k){
    if(root == NULL)
    {
        return;
    }
    if( k == 0)
    {
        cout<<root->data<<endl;
        return;
    }

    for(int i = 0;i<root->children.size();i++)
    {
        printAtLevelK(root->children[i],k-1);
    }
}
int numLeafNodes(TreeNode<int>* root) {
    if(root->children.size() == 0)
        return 1;
    int ans = 0; 
    for(int i = 0;i<root->children.size();i++)
    {
        ans = ans + numLeafNodes(root->children[i]);
    }
    return ans;

}

TreeNode<int>* maxDataNode(TreeNode<int>* root) {
    TreeNode<int>* max = root;
    for(int i = 0;i<root->children.size();i++)
    {
        TreeNode <int>* tmp =  maxDataNode(root->children[i]);
        if(max->data <  tmp->data)
        {
            max = tmp;
        }
            
    }
    return max;

}
void deleteTree(TreeNode<int> * root){
    for(int i = 0;i<root->children.size();i++)
    deleteTree(root->children[i]);
    delete root;
}
int sumOfNodes(TreeNode<int>* root) {
    int sum = root->data;
    for(int i = 0;i<root->children.size();i++)
        sum += sumOfNodes(root->children[i]);
    return sum;
}
void preOrder(TreeNode<int>* root){
    if(root == NULL)
    return ;
    cout<<root->data<<" ";
    for(int i = 0;i<root->children.size();i++)
    {
        preOrder(root->children[i]);
    }

}
bool containsX(TreeNode<int>* root, int x) {
    
    if(root->data == x)
        return true;
    for(int i = 0;i<root->children.size();i++)
    {
        if (containsX(root->children[i],x) == true)
            return true;
        
    }
    return false;
    
    
  
}
void postOrder(TreeNode<int>* root) {
    if(root == NULL)
    return ;
    
    for(int i = 0;i<root->children.size();i++)
    {
        postOrder(root->children[i]);
    }
    cout<<root->data<<" ";
}
TreeNode <int>* takeInputLevelWise(){
    cout<<"Enter the root data\n";
    int rootdata;
    cin>>rootdata;
    TreeNode<int>*root = new TreeNode<int>(rootdata);
    queue<TreeNode<int>*> pendingNodes;
    pendingNodes.push(root);
    while(pendingNodes.size() != 0){
          TreeNode<int> * front = pendingNodes.front();
          pendingNodes.pop();
          cout<<"Enter the number of children of "<<front->data<<endl;
          int numChild;
          cin>>numChild;
          for(int i = 0;i<numChild;i++)
          {
              int childData;
              cout<<"Enter "<<i<<" th child of "<<front->data<<endl;
              cin>>childData;
              TreeNode<int> * child = new TreeNode<int>(childData);
              front->children.push_back(child);
              pendingNodes.push(child);
          }
    }
    return root;
    //TreeNode<int>* root = new TreeNode<int>
}
void PrintTree(TreeNode<int>* root){
    if(root == NULL)
    return;      //not a base case it is edge case
    cout<<root->data<<" : ";
    for(int i = 0 ;i<root->children.size();i++) // no need of base case becoz of loop condition
    cout<<root->children[i]->data<<",";
    cout<<endl;
    for(int i = 0;i<root->children.size();i++)
    PrintTree(root->children[i]);
}
int main(){
    TreeNode<int> *root = takeInputLevelWise();
    // TreeNode<int> *node1 = new TreeNode<int>(2);
    // TreeNode<int> *node2 = new TreeNode<int>(3);
    // TreeNode<int> *node3 = new TreeNode<int>(4);
    // TreeNode<int> *node4 = new TreeNode<int>(5);
    // node1->children.push_back(node3);
    // node2->children.push_back(node4);
    // root->children.push_back(node1); 
    // root->children.push_back(node2);
    //cout<<"data"<<root->data;
    //cout<<"child no"<<root->children.size();
    PrintTree(root);
    cout<< "Nodes in tree :"<<countNodes(root);
       
 }
