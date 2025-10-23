// Javascript is single-threaded, everythin runs in a main thread. En ting sker ad gangen
//aynkront:
//netværk - hvornår kommer response på netværk eller kommer det?
//user input
//fil system handling, hvornår kommer svaret tilbage?
//database kald

//solution 1: callback funktioner
//problem: callback hell / pyramid of doom

//solution 2: Promises (ny løsning)
//pending fulfilled
     //når fulfilled så er det enten resolved eller rejected
     //Problem: kan også ende op med nested promises

//solutuion 3: Async/Await (syntaks guf for promises...ser bare bedre ud)
//Problem må anvende try/catch



    new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw "Oh no!"; //vi kaster en error for at afprøve hvis fejl / rejected
            resolve("Everything went well");
        } catch (error) {
            reject(error);
        }
    }, 2000);
})
.then((message) => console.log(message))
.catch((errorMessage) => console.log(errorMessage));


/* Assignment: Create a promisified function (called myPromise) 
that is a function that returns a promise
Make it resolve as "Something Good" and/or reject as "Something Bad"
create a 3 second delay to simulate asynchronous behavior
*/

async function  myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        
      resolve("Something Good");
    }, 3000);
  });
}

/*myPromise()
  .then((message) => console.log(message)) //fanger resolved
  .catch((error) => console.log(error)); //fanger error rejected promise besked*/

  const successMessage = await myPromise();

  /* assignment
    try to simulate the fetch function
    call it myFetch
    it should return the promise json() after 2.5 seconds
    so that you can call response.json() on it
    as much as possible try to imagine how fetch works and simulate the underlying code
*/
function myFetch(URL, options) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                json: () => new Promise((resolve, reject) => resolve("Data from the server"))
            });
        }, 2500);
    });
}

// myFetch("somewebsite.com")
// .then((result) => result.json())
// .then((response) => console.log(response));

// IIFE
(async function () {
    const result = await myFetch("somewebsite.com");
    const response = await result.json();
    console.log(response);
})()