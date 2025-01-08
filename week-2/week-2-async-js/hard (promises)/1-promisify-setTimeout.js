/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((res,rej)=> {
        if(n<=0) {
            rej("n should be positive!")
        } else {
            setTimeout(res,n*1000);
        }
    });
}


module.exports = wait;

