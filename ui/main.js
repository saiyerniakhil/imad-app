var button = document.getElementById('counter');

/*var counter = 0;
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
};*/

//getting name input
/*var submit = document.getElementById('submit_btn');
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
*/    
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
                    console.log('user logged in');
                    alert('logged in succesfully ');
                    }else if (request.status === 403) {
                        alert('username/password is not correct');
                    }else if (request.status === 500) {
                        alert('something went wrong on the server');
                    }
                }
        // if XMLHttpRequest is NOT Done
        };
    //make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(passowrd);
    request.open('POST','http://akhilsai831.imad.hasura-app.io/login',true );
    request.setRequestHeader('Content-Type', 'application/json'); 
};