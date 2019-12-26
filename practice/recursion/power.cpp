int power(int x, int n) {
  if(n == 1)
    return x;
  else if(n==0)
      return 1;
  return (x*power(x,n-1));

}
