var button = document.getElementById('counter');

var counter = 0;
    button.onclick = function () {
    //create a request object 
        var request = new XMLHttpRequest();
    //capture the counter and store it in a variable 
            request.onreadystatechange = function () {
                if(request.readyState === XMLHttpRequest.DONE) {
                    // take some action i.e. print count 
                    if(request.status === 200) {
                    var counter = request.responseText;
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                    }
                }
        // if XMLHttpRequest is NOT Done
        };
    
    //make the request
    request.open('GET','http://akhilsai831.imad.hasura-app.io/counter',true);
    request.send(null);
};

//getting name input

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    //make a request to the server and print the name
     //create a request object 
        var request = new XMLHttpRequest();
    //capture the counter and store it in a variable 
            request.onreadystatechange = function () {
                if(request.readyState === XMLHttpRequest.DONE) {
                    // take some action i.e. print count 
                    if(request.status === 200) {
                        var names = request.responseText;
                        names = JSON.parse(names);
                        var list= '';
                        for (var i = 0;i<names.length;i++){
                            list += '<li>'+names[i]+'</li>';
                        }
    
                var ul =document.getElementById('nameslist');
                ul.innerHTML = list;
                    }
                }
        // if XMLHttpRequest is NOT Done
        };
    
    //make the request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://akhilsai831.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
    //capture a list of names  and reneder them 
    
};