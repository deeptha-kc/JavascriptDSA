/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var rem, temp, q=0;
    let number = x;
    
    temp = number;
    
    while (number > 0)
        {
            rem= number%10;
            number=parseInt(number/10);
            q=q*10+rem;
        }
    
    if(temp==q){
        return true;
    }
    else{
        return false;
    }
};