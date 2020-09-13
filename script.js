const verifyPost = async (title, link) => {
    
    let url = 'https://symanyapi.gq/check-post';
    let options = {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            link: link
        })
    };

    let response = await fetch(url, options);

    if (response.ok) {
        let data = await response.json();
        console.log('did Got a bad response from the server:');
        return data;
    } else {
        console.log('Got a bad response from the server:');
        console.log(response);
        return null;
    }

}

const searchForArticles = async (title, link) => {
    console.log("hello");
    let verified = await verifyPost(title, link);
    
    

}

function myFunction() {
    var link = document.forms["myForm"]["link"].value;
    var title = document.forms["myForm1"]["title"].value;
    if (link == "" || title == "") {
        alert("forms must be filled out");
        return false;
    } else {
        document.getElementById("demo").innerHTML = "Input OK";
        searchForArticles(title, link);

    }
    
  }



  
