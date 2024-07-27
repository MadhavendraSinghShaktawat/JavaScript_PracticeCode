console.log("JS is working");

/* 
******************** Notes ********************

    - Fetch API: Modern alternative to XMLHttpRequest.
    - Use Promises for redablity and manageblity.
    - Native to javascript, widely supported in modern browsers.
    - Cleaner and more powerful network requests.
    - Compatible with async/await for synchronous-like code.


    ---------- When To Use ----------
    - Fetching data in modern web apps.
    - API calls in single-page apps[SPA].
    - CURD Operations, managing requests and responses

    ---------- Best Practices ----------
    - Handle errors with '.catch()' or 'try/catch'.

*/

/*
     ---------- Syntax ----------

     //using promises
     fetch('https://abc.org/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));


    //using async/await
    async function fetchData(){
        try{
            const response = await fetch('https://abc.org/data');
            const data = await response.json();
            console.log(data);
        }catch(error){
            console.error("Error: ", error);
        }
    };
    fetchData();

*/


const url = 'https://jsonplaceholder.typicode.com/posts';


//USing Promise based

const fetchData = ()=>{
    fetch(url)
        .then((response)=>{
            const res = response.json()
            console.log(res);
            return res;
        }).then((data)=>{
            console.log(data); 
        }).catch((err)=>{
            console.log(err);
        });
};

// fetchData();


//USing Async/Await
const fetchData2 = async ()=>{
    try{
        const result = await fetch(url);
        const response = result.json();
        return response;
    }catch(err){
        console.log(err);
    }
};

fetchData2()
    .then((response)=>{
        console.log(response);
});