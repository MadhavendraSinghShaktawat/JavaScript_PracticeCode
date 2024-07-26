console.log("JS is working");

/*

    ***** Notes *****
    - XMLHttpRequest[XHR]: Browse object for HTTP Requests.
    - Key for AJAX, fetch data without full page refresh.
    - Send/Recieve HTTP requests and responses.
    - Data recieved in various formats: text, JSON, XML, etc.


    **** When To Use ****
    - Fetching data post-page load.
    - sending from data without page reload.
    - Polling: regular server data checks. 

*/

/*
    ********* SYNTAX *********

    //-Step1: Create a new instance of XMLHttpRequest
    let xhr = new XMLHttpRequest();

    //-Step2: Configure the request
    xhr.open('GET', 'https://api.example.com/data', true);  

    //-Step3: Attach event Listners
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4 && xhr.status === 200){
            // Handle the response here
            let response = JSON.parse(xhr.responseText);
        }
    };

    //Step4: Send the request
    xhr.send();


*/


const url = 'https://jsonplaceholder.typicode.com/posts';

// creating instance of xhr
const xhr = new XMLHttpRequest();

// configure the request 
xhr.open('GET', url, true);

//Attach an event listner to handle changes in request state
xhr.onreadystatechange = ()=>{
    //Check if request is complete (readyState 4) and successful (status 200)
    if(xhr.readyState===4 && xhr.status===200){
        // parse the json data
        console.log(JSON.parse(xhr.responseText))
    }
    // Handle Errors
    if(xhr.readyState===4 && xhr.status!=200){
        console.log(xhr.statusText);
    }
}

// send request
xhr.send();