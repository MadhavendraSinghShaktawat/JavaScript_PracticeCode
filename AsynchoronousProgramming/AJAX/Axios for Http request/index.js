console.log('JS is working');

/*
    ************* NOTES *************

    - Axios: Javascript library for HTTP requests,
    - Must be installed seperately.
    - Promise-based, offers cleaner, powerful client-server communication API.
    - Popular in front-end and back-end development.



    ------- When To Use -------
    - For HTTP requests in both browser and Node.js.
    - When advanced features like request cancellation or transformation needed.
    - To create cleaner asynchoronous code with promise based api.


    ------- Best Practices -------
    - Handle errors with 'catch' or 'try/catch'.



    ******************** SYNTAX ********************
    
    axios.get(url)
        .then(response => {
            //handle response
        }).catch{error => {
            //handle error
        }}


*/

const url = 'https://jsonplaceholder.typicode.com/posts';


//Using promises
const fetchData = ()=>{
    axios.get(url)
        .then((Response)=>{
            console.log(Response);      //in axios we dont need to pass response.json
            console.log(Response.data); // and data is also in response only
        })
        .catch(err =>{
            console.error(err);
        })
};

// fetchData();

//Using async/await

const fetchData2 = async ()=>{
    try {
        // const result = await axios.get(url);
        // console.log(result);
        // const data = result.data;
        // console.log(data);

        const {data} = await axios.get(url);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

fetchData2();