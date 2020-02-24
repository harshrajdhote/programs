#include<iostream>
#include "BinaryTreeNode.h"
#include<queue>
using namespace std;
void printTree(BinaryTreeNode<int>* root){
    if(root == NULL)
    return;
    cout<<root->data<<": ";
    if(root->left)
    cout<<"L"<<root->left->data;
    if(root->right)
    cout<<"R"<<root->right->data;
    cout<<endl;
    printTree(root->left);
    printTree(root->right);
    //delete root;
}
BinaryTreeNode<int>* takeInputLevelWise(){
    int rootData;
    cout<<"Enter data"<<endl;
    cin>>rootData;
    BinaryTreeNode<int>* root = new BinaryTreeNode<int>(rootData);
    queue<BinaryTreeNode<int>*> pending;
    pending.push(root);
    while (pending.size() != 0)
    {
        BinaryTreeNode<int>* front = pending.front();
        pending.pop();
        int leftChildData,rightChildData;
        cout<<"Enter the left child"<<endl;
        cin>>leftChildData;
        if(leftChildData != -1)
        {
            BinaryTreeNode<int>* child = new BinaryTreeNode<int>(leftChildData);
            front->left = child;
            pending.push(child);
        }
        cout<<"Enter the Right child"<<endl;
        cin>>rightChildData;
        if(rightChildData != -1)
        {
            BinaryTreeNode<int>* child = new BinaryTreeNode<int>(rightChildData);
            front->right = child;
            pending.push(child);
        }
        
    }
    return root;
    

}
BinaryTreeNode<int>* takeInput(){
    int rootData;
    cout<<"Enter data"<<endl;
    cin>>rootData;
    if(rootData == -1)
    return NULL;
    BinaryTreeNode<int>* root = new BinaryTreeNode<int>(rootData);
    BinaryTreeNode<int>* left = takeInput();
    BinaryTreeNode<int>* right = takeInput();
    root->left = left;
    root->right = right;
    return root;
}
int main(){
    // BinaryTreeNode<int> *root = new BinaryTreeNode<int>(1);
    // BinaryTreeNode<int> *n1 = new BinaryTreeNode<int>(2);
    // BinaryTreeNode<int> *n2 = new BinaryTreeNode<int>(3);
    // root->left = n1;
    // root->right = n2;
    BinaryTreeNode<int>* root = takeInputLevelWise();
    printTree(root);
    delete root;
}
