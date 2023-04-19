let string=prompt("nhap vao chuoi");
let result=isPalindrome(string);
document.write(result+" chuoi Palindrome");
function isPalindrome(s){
    let count=0;
    for(let i=0;i<s.length;i++){
        if(string.charAt(i)==string.charAt(s.length-1-i)){
            count++;
        }else{
            return false;
        }
    }
    if(count!=0){
        return true;
    }
}