#include<iostream>
#include "BinaryTreeNode.h"
using namespace std;
void printTree(BinaryTreeNode<int>* root){
    if(root == NULL)
    return;
    cout<<root->data<<endl;
    if(root->left)
    cout<<"L"<<root->left->data;
    if(root->right)
    cout<<"R"<<root->right->data;
    cout<<endl;
    printTree(root->left);
    printTree(root->right);
}
using namespace std;
int main(){
    BinaryTreeNode<int> *root = new BinaryTreeNode<int>(1);
    BinaryTreeNode<int> *n1 = new BinaryTreeNode<int>(2);
    BinaryTreeNode<int> *n2 = new BinaryTreeNode<int>(3);
    root->left = n1;
    root->right = n2;
    printTree(root);
}
