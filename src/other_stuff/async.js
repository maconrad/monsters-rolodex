/* Promise async function that will terminate at some point  */
const myPromise = new Promise((resolve, reject) => {

    if(false){   
        setTimeout(() => {
            resolve('i have succeeded')
        }, 1000)
    } else {
        reject('I have failed')
    }
})

/* Then = when promise terminates with either resolve or reject
   then can react to this. .then() only on resolved promises

   API calls can sepearte between failed and successful calls

   Chaining: if another promise is retunrned (e.g. instead of console.log())
             then we can use .then() again on this one
*/
myPromise
    .then(value => console.log(value))
    .catch(rejectVal => console.log(rejectVal))