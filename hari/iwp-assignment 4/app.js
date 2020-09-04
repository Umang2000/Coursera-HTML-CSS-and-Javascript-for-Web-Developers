function validateForm() {
    var x = document.forms["myform"]["gender"].value;
    if (x == "") {
      alert("Gender section must be filled out");
      return false;
    }


    var y = document.forms["myform"]["cars"].value;
    if (y == "nul") {
      alert("Please select what car do you own");
      return false;
    }

    if (this.agree.checked == false) { alert ('You must select the checkbox to proceed.'); return false; } else { return true; }
   
   
  }

