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
  ~TreeNode(){
    for(int i = 0 ;i < children.size();i++)
    {
        delete children[i];
    }   //internally calls the destructor recursively because while deleting destructor is called every time
  }
};