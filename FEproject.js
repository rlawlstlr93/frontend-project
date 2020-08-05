// What do you have?
// Have a plan what I'll be doing with randomfoxes API



// What do you need?
// Minimum Requirements: 

// Overall what we’re looking for from you is an application that accomplishes the minimum requirements below,

//  and looks nicely styled and polished. Do not overcomplicate by adding more features than you can complete in a single day. 

//  You need to give yourself equal time to style your application so it looks good.

// PROPOSAL: Approval of proposed project.

// INTERACTION: Must have at least one event listener.

// AJAX: Must have at least one AJAX call to an API.

// DOM: Must manipulate the DOM based on a user’s interaction with your app

// POLISH: Your application should look clean and finished

// How do you get there?
// make HTML and javascript

// set javascript link up to HTML

// createElement to build up application.

// Make sure have one event listener.

// make a button to access my application.


// set up variable to get Element
// var access = document.getElementById("clicks");

//  addEventListener

//  access.addEventListener("click", function(){
      
//  })

 $('#clicks').on('click', function(){
    //   var result = document.getElementById('clicks').value;
    foxy();
     //request up Ajax call
    
     
    })
    // callback function
      function foxy() {

          $.ajax ({
              
              
              Type: "GET",
              url: "https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/",
              success: function(data) {
                  //   var results = JSON.parse(data)
                  $('#body').find('img').remove();
                  console.log(data);
                  //  create a element called img
                  var image = document.createElement('img');
                  // input the source 
                  image.src = data.image; 
                  // append to HTML and know what's parent and child
                  // get old picture from website
                  document.getElementById('body').appendChild(image);
                  // condtional statements
                }
                
                
            })
            
        }   
            