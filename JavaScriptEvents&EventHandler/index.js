console.log("Yep! it's working")


// addEventListener()
let counter = 1;
document.getElementById('containerid').addEventListener('click', function(e){
    console.log("You have clicked this "+counter+" times");
    let v = e.target.className;
    console.log(v);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e.clientX);
    console.log(e.clientY);
    counter++;
});


