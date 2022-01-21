// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let obj={};
    let len =strs.length;
    for(i=0;i<len;i++){
        let a=strs[i].split("").sort().join("");       // sorted string is used as key here
        if(obj[a]){
            obj[a].push(strs[i])
        }
        else{
            obj[a]=[strs[i]]
        }
        
    }
    let arr=[]
    for(item in obj){
        arr.push(obj[item]);
    }
     return (arr)
};