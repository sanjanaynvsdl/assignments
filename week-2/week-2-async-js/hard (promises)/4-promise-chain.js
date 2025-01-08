/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((res,rej)=> setTimeout(res,t*1000));
}

function wait2(t) {
    return new Promise((res,rej)=> setTimeout(res,t*1000));
}

function wait3(t) {
    return new Promise((res,rej)=> setTimeout(res,t*1000));
}

function calculateTime(t1, t2, t3) {
    const pr1 = wait1(t1);
    const currTime = Date.now();
    return pr1.then((res)=> {
        return wait2(t2).then((res)=> {
            return wait3(t3).then((res)=> {
                const endTime = Date.now()-currTime;
                return endTime;
            });
        });
    });
    

    // return pr1
    // .then(()=> {
    //     console.log("Promise-1 Resolved");
    //     return pr2;
    // })
    // .then(()=> {
    //     console.log("Promise-2 Resolved");
    //     return pr3;
    // })
    // .then(()=> {
    //     console.log("Promise-3 Resolved");
    //     const endTime = Date.now()-currTime;
    //     console.log(endTime);
    //     return endTime;
    // })
    // .catch((err)=> {
    //     console.log(err);
    // })

    
}

module.exports = calculateTime;
