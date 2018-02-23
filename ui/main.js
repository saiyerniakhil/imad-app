var button = document.getElementById('counter');

var counter = 0;
    button.onclick = function () {
    //create a request object 
        var request = new XMLHttpRequest();
    //capture the counter and store it in a variable 
            request.onreadystatechange = function () {
                if(request.readyState === XMLHttpRequest.DONE) {
                    // take some action i.e. print count 
                    if(requestStatus == 200) {
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