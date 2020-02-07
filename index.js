const getButton = document.getElementById("get-button");
const postButton = document.getElementById("post-button");

//
//
//
////////////////////////////////
//        fetch GET           //
////////////////////////////////

/*
Syntax:
fetch(urlString, [optionsObj])

Returns a promise.
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

*/

getButton.addEventListener("click", () => {
  console.log("FETCH GET REQUEST");

  fetch("https://httpbin.org/get")
    .then(response => {
      const promise = response.json();
      return promise; // we forward the pending promise to the next `.then` block
    })
    .then(data => {
      // `data` is the resovled promise from previous `.then`
      console.log("PARSED RESPONSE BODY OBJECT", data);
    });
});

//
//
//
//

////////////////////////////////
//        fetch POST          //
////////////////////////////////

/*
Syntax:
fetch(urlString, [optionsObj])

Returns a promise.

In order to make a POST HTTP request, we have to:
- set the method to POST
- set the headers to describe what content we are sending
- stringify the body that we send

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options
*/

postButton.addEventListener("click", () => {
  console.log("FETCH POST REQUEST");

  const dataObjToSend = {
    firstName: "John",
    lastName: "Carr",
    job: "Software Engineer"
  };

  fetch("https://httpbin.org/post", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(dataObjToSend)
  })
    .then(response => {
      const promise = response.json();
      return promise; // we forward the pending promise to the next `.then` block
    })
    .then(data => {
      // `data` is the resovled promise from previous `.then`
      console.log("PARSED RESPONSE BODY OBJECT", data);
    });
});
