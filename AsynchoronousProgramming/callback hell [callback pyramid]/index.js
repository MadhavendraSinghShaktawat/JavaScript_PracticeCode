console.log("Js is working");

/* ***************NOTES****************************************************

    1. Callback hell (Pyramid of doom): heavily nested callbacks
    2. Issue: Poor redablity, maintainance and error-prone
    
    Callback hell happens when multiple callback happens synchoronomously


    ++++++++ When to USE +++++++++++
    1. Promises, Async/Await, Generators for better control

    ++++++++ Best Practices ++++++++
    1. Modularization: Break down callbacks
    2. Error Handling
    3. Promises/Async/Await: Transition for cleaner code
    4. Comments: Document flow and purpose
    5. Limit Nesting: Keep nesting levels minimal for redablity


    -------- Visual Representation -----------

    performAction1(data, function(result1)){
        |   
        |---performAction2(data, function(result2)){
        |       |
        |-----------performAction3(result2, function(result3)){
        |       |     |        more nested callbacks
        |       |     |
        |       |    });
        |     });
        });



**********************************************************************************

*/


// TimeOut Functions
/*
const task1 = (callback) => {
    setTimeout(()=>{
        console.log("task1 completed");
        callback();
    }, 3000);
}

task1(()=>{
    console.log("task1 called");
});
*/


/*
// Nested timeout function 

const task1 = (callback) => {
    setTimeout(()=>{
        console.log("task1 completed");
        callback();
    }, 3000);
};
const task2 = (callback) => {
    setTimeout(()=>{
        console.log("task2 completed");
        callback();
    }, 2000);
};
const task3 = (callback) => {
    setTimeout(()=>{
        console.log("task3 completed");
        callback();
    }, 1000);
}

//starting first task
task1(function(){
    // once task 1 is completed start task2
    task2(function(){
        // once task 2 is completed start task3
        task3(function(){
            console.log("All task completed");
        });
    });
});
*/

// Fetch user data(dummy)
const userData = {id: 1, name: "Ram"};
const userPosts = [
    {id:101, content:"Post 1"}, 
    {id:101, content:"Post 1"}
];
const postComments = {
    101: ['comment 1', 'comment 2'],
    102: ['comment 1', 'comment 2']
};


// fetch user data
const fetchUserData = (userId, callback)=>{
    console.log("Fetching user data....");
    setTimeout(()=>{
        callback(userData);
    }, 1000);
};

const fetchUserPost = (userId, callback)=>{
    console.log("Fetching user Posts....");
    setTimeout(()=>{
        callback(userPosts);
    }, 1000);
};

const fetchUserComments = (postId, callback)=>{
    console.log("Fetching user comments....");
    setTimeout(()=>{
        callback(postComments[postId] || []);
    }, 1000);
};

//Initiate the process
fetchUserData(1, (userData)=>{
    console.log("User Data: ", userData);
    fetchUserPost(userData.id, (userPosts)=>{
        console.log("User Posts: ", userPosts);
        userPosts.forEach((post) => {
            console.log("Posts:", post);
            fetchUserComments(post.id, function(comment){
                console.log("Comments", comment);
                console.log(post.id);
            });
        });
    });
});