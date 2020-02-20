#include<iostream>
#include "BinaryTreeNode.h"
using namespace std;
void printTree(BinaryTreeNode<int>* root){
    if(root == NULL)
    return;
    cout<<root->data;
    if(root->left)
    cout<<"L"<<root->left->data;
    if(root->right)
    cout<<"R"<<root->right->data;
    cout<<endl;
    printTree(root->left);
    printTree(root->right);
    //delete root;
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
    BinaryTreeNode<int>* root = takeInput();
    printTree(root);
    delete root;
}
