//Explain client side feedback gathering and submission
//Understands how user feedback is collected and sent to the server.

document.addEventListener("DOMContentLoaded", function  () {
  const form = document.querySelector("form");
  const alertButton = document.getElementById("alertButton");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevents the form from submitting normally

    // Check if the required fields are filled
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      const body = {
        name: name,
        email: email,
        message: message,
      };

      //Submitting data to database
      try{
          const res=await fetch("/submit-feedback", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          })

          if(res.ok){
              alert("data stored successfully!")

    //Reset the form
    form.reset();
          }
      }catch(err){
          console.log("Something Went Wrong",err)
          alert("try again,something went wrong!")
      }
      
    }
  });
});