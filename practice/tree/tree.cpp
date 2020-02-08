#include<iostream>
#include<queue>
#include "TreeNode.h"
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
    PrintTree(root);
       
 }
