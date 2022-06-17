/* failed test codes to get a checkbox to show/hide elements  


 $(function() {

    // Get the form fields and hidden div
    var checkbox = document.querySelectorAll('.trigger');
    var hidden = document.querySelectorAll('.hidden_opt_form');
    // var populate = $("#populate");

    // Hide the fields.
    // Use JS to do this in case the user doesn't have JS 
    // enabled.
    hidden.hide();

    // Setup an event listener for when the state of the 
    // checkbox changes.
    checkbox.change(function() {
        // Check to see if the checkbox is checked.
        // If it is, show the fields and populate the input.
        // If not, hide the fields.
        if (checkbox.is(':checked')) {
            // Show the hidden fields.
            hidden.show();
            // Populate the input.
            // populate.val("Dude, this input got populated!");
        } else {
            // Make sure that the hidden fields are indeed
            // hidden.
            hidden.hide();

            // You may also want to clear the value of the 
            // hidden fields here. Just in case somebody 
            // shows the fields, enters data to them and then 
            // unticks the checkbox.
            //
            // This would do the job:
            //
            // $("#hidden_field").val("");
        }
    });
});

 function optform() {

    // This first is to focus on the trigger
    // Second is to link what area needs to show
    var checkbox = $("#trigger");
    var hidden = $("#hiddenoptform");

    // This is to hide the hidden field
    hidden.hide();

    // Next is if ... else statment to show the hidden area when the trigger conditions are met
    checkbox.change(function() {
        if (checkbox.is(':checked')) {
            hidden.show();
        } else {
            hidden.hide();
        };
    });
};

 fuction check() {
    if (document.getElementById('checked').checked) {
        document.getElementById('yes').style.visibility = 'visible'; 
    } else (document.getElementById('yes').style.visibility = 'hidden';)
} 

 const otherCheckbox = document.querySelector('#optForm');

const otherText = document.querySelector('#optFormValue');

otherText.style.visibility = 'hidden';

otherCheckbox.addEventListener('change', () => {
    if (otherCheckbox.checked) {
        otherText.style.visibility = 'visible';
        otherText.value = '';
    } else {
        otherText.style.visibility = 'hidden';
    }
}); 

 function hideForm() {
//    let trigger = document.getElementsByClassName('.trigger');
//    let hiddenForm = document.getElementsByClassName('.hidden_opt_form');
//
//    trigger.addEventListener("click", unhide())
//
//    if (trigger === false) {
//        hiddenForm.style.display = "none";
//    } else {
//       hiddenForm.style.display = "inherit";
//    }
// }

// hideForm();



 if (document.getElementsByClassName("hiddenoptform").style.display === "none") {
        document.getElementsByClassName("hiddenoptform").style.display = "block";
    } else {
        document.getElementsByClassName("hiddenoptform").style.display = "none";
    };
    

 alert("This alert box is to notify that JS file is being read"); 

  if (hidden.style.display === 'none') {
          hidden.style.display = 'block';
      } else {
          hidden.style.display = 'none';
      };  
      

// let hidden = document.getElementById('hiddenoptform');
// let stydis = getComputedStyle(hidden);
// hidden.style.display = 'block';


// console.log(stydis.display);
// console.log(hidden.style.display);
// console.log("trigger");
// hidden.style.display = 'block';
// alert("This alert box is to notify that JS file is being read");

*/