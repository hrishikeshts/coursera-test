/* // DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

document.addEventListener("DOMContentLoaded",
  function (event) {
    function sayHello (event) {
      console.log(event);
      this.textContent = "Said it!";
      var name = document.getElementById("name").value;
      var message = "<h2>Hello " + name + "!</h2>";
      // document
      //   .getElementById("content")
      //   .textContent = message;
      document
        .getElementById("content")
        .innerHTML = message;
      if (name === "student") {
        var title = 
          document
            .querySelector("#title")
            .textContent;
        title += " & Lovin' it!";
        document
            .querySelector("h1")
            .textContent = title;
      }
    }

    // Unobstrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

    // document.querySelector("button")
    //   .onclick =sayHello;

    document.querySelector("body")
      .addEventListener("mousemove",
        function (event) {
          if (event.shiftKey === true) {
            console.log(event.clientX);
            console.log(event.clientY);
          }
        }
      );
  }
); */


// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("/data/name.txt", 
            function (request) {
              var name = request.responseText;
              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            }
          );
      }
      );
  }
);





