import java.util.*;
class sort_anagram {
    public static void main(String[] strs) {
        Map<String,List<String>> map = new HashMap<>();
        for(String wrd : strs){
            char [] arr = wrd.toCharArray();
            Arrays.sort(arr);
            String key = new String(arr);
            map.putIfAbsent(key,new ArrayList<>());
            map.get(key).add(wrd);
        }
       List<List<String>> res= new ArrayList<>();
        
        res.addAll(map.values());
        
        return res;
}
        

}
