#include<vector>
using namespace std;
template <class T>
class TreeNode{
  public :
 T data; 
 vector <TreeNode<T>*> children;
  TreeNode(T data){
      this->data = data;
  }
};