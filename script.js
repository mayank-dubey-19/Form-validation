let nameinput = document.querySelector(".name-input");
let mobileinput = document.querySelector(".mobile-input");
let emailinput = document.querySelector(".email-input");
let aadhaarinput = document.querySelector(".aadhaar-input");
let paninput = document.querySelector(".pan-input");
let dateinput = document.querySelector(".date-input");


function validateForm() {


 document.querySelectorAll(".error").forEach(function(error) {
   error.textContent = "";
  });
 
 let namepattern = /^[a-zA-Z\s]+$/; 


 if(nameinput.value.trim() === "") {
  document.querySelector(".name-error").innerHTML = "Please enter your name.";
  nameinput.focus();
  return false
 
 }

 if (!namepattern.test(nameinput.value)) {
  document.querySelector(".name-error").innerHTML = "Please enter a valid name.";
  nameinput.focus();
  return false
  
 }
 else{
  document.querySelector(".name-error").innerHTML = "";
 }
 
 if(mobileinput.value.trim() === "") {
  document.querySelector(".mobile-error").innerHTML = "Please enter your mobile number.";
  mobileinput.focus();
  return false;
 }

 let mobilepattern = /^[6-9][0-9]{9}$/;
 if (!mobilepattern.test(mobileinput.value)) {
  document.querySelector(".mobile-error").innerHTML = "Please enter a valid 10-digit mobile number.";
  mobileinput.focus()
  return false;
 }
 else{
  document.querySelector(".mobile-error").innerHTML = "";
 }


 if(emailinput.value.trim() === "") {
    document.querySelector(".email-error").innerHTML = "Please enter your email address.";
    emailinput.focus();
    return false;
   }
 

 let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
 if (!emailPattern.test(emailinput.value)) {
    document.querySelector(".email-error").innerHTML = "Please enter a valid email address.";
    emailinput.focus();
    return false;
   }
 else{
    document.querySelector(".email-error").innerHTML = "";
 }
 
 if(aadhaarinput.value.trim() === "") {
    document.querySelector(".aadhaar-error").innerHTML = "Please enter your Aadhaar number.";
    aadhaarinput.focus();
    return false;
   }

 let aadhaarPattern = /^[0-9]{12}$/;
 if (!aadhaarPattern.test(aadhaarinput.value)) {
    document.querySelector(".aadhaar-error").innerHTML = "Please enter a valid 12-digit Aadhaar number.";
    aadhaarinput.focus();
    return false;
   }
 else{
    document.querySelector(".aadhaar-error").innerHTML = "";
 }
 
 if(paninput.value.trim() === "") {
    document.querySelector(".pan-error").innerHTML = "Please enter your PAN number.";
    paninput.focus();
    return false;
   }

 let panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
 if (!panPattern.test(paninput.value)) {
    document.querySelector(".pan-error").innerHTML = "Please enter a valid PAN number.";
    paninput.focus();
    return false;
   }
 else{
    document.querySelector(".pan-error").innerHTML = "";
 }
 
  if(dateinput.value.trim() === "") {
        document.querySelector(".date-error").innerHTML = "Please enter your date of birth.";
        dateinput.focus();
        return false;
    } 

 let dob = new Date(dateinput.value);
 let today = new Date();

 let age = today.getFullYear() - dob.getFullYear();
 let monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }   

    if (age < 18) {
        document.querySelector(".date-error").innerHTML = "You must be at least 18 years old.";
        dateinput.focus();
        return false;
    }
    else{
        document.querySelector(".date-error").innerHTML = "";
    }      
   
 
 let genderInputs = document.querySelectorAll('input[name="gender"]:checked');
  
 if (genderInputs.length === 0) {
    document.querySelector(".gender-error").innerHTML = "Please select your gender.";
    document.querySelector('input[name="gender"]').focus();
    return false;
  }
 else{
    document.querySelector(".gender-error").innerHTML = "";
}

let stateselect = document.querySelector(".state");

if (stateselect.value === "") {
    document.querySelector(".state-error").textContent =
        "Please select your state.";

    stateselect.focus();
    return false;
}


let cityselect = document.querySelector(".city");

if (cityselect.value === "") {
    document.querySelector(".city-error").textContent =
        "Please select your city.";

    cityselect.focus();
    return false;
}

let addressinput = document.querySelector(".address-input");

if (addressinput.value.trim() === "") {
    document.querySelector(".address-error").textContent =
        "Please enter your address.";

    addressinput.focus();
    return false;
}

if (addressinput.value.trim().length < 10) {
    document.querySelector(".address-error").textContent =
        "Address must contain at least 10 characters.";

    addressinput.focus();
    return false;
}



let qualiselect = document.querySelector(".qualification");

if (qualiselect.value === "") {
    document.querySelector(".qualification-error").textContent =
        "Please select your qualification.";

    qualiselect.focus();
    return false;
}
 
let courseselect = document.querySelector(".course");

if (courseselect.value === "") {
    document.querySelector(".course-error").textContent =
        "Please select your course.";

    courseselect.focus();
    return false;
}


let passingyearinput = document.querySelector(".passing-year-input");

let currentYear = new Date().getFullYear();

if (passingyearinput.value.trim() === "") {
    document.querySelector(".passing-year-error").textContent =
        "Please enter your passing year.";

    passingyearinput.focus();
    return false;
}

let passingYear = Number(passingyearinput.value);

if (
    !Number.isInteger(passingYear) ||
    passingYear < 1950 ||
    passingYear > currentYear
) {
    document.querySelector(".passing-year-error").textContent =
        `Please enter a valid passing year between 1950 and ${currentYear}.`;

    passingyearinput.focus();
    return false;
}

 let experienceInputs = document.querySelectorAll('input[name="experience"]:checked');

 if (experienceInputs.length === 0) {
    document.querySelector(".experience-error").innerHTML = "Please select your experience level.";
    document.querySelector('input[name = "experience"]').focus();
    return false;
  }
 else{
    document.querySelector(".experience-error").innerHTML = "";
 }

 let skillsInputs = document.querySelectorAll('input[name="skills"]:checked');

 if (skillsInputs.length < 2) {
    document.querySelector(".skills-error").innerHTML = "Please select at least 2 skills.";
    document.querySelector('input[name="skills"]').focus();
    return false;
  }
 else{
    document.querySelector(".skills-error").innerHTML = "";
 }

 let hobbiesInputs = document.querySelectorAll('input[name="hobbies"]:checked');

 if (hobbiesInputs.length < 1) {
    document.querySelector(".hobbies-error").innerHTML = "Please select at least 1 hobby.";
    document.querySelector('input[name="hobbies"]').focus();
    return false;
  }
 else{
    document.querySelector(".hobbies-error").innerHTML = "";
 }

 let photoInput = document.querySelector(".photo-input");

 let selectedFile = photoInput.files[0];

 if (!selectedFile){
   document.querySelector(".photo-error").innerHTML = "Upload your photo."
   photoInput.focus();
   return false ; 
 }

 if (selectedFile && selectedFile.size > 2 * 1024 * 1024) {
    document.querySelector(".photo-error").innerHTML = "File size exceeds the maximum limit of 2 MB.";
    photoInput.focus();
    return false;
 }
 else{
    document.querySelector(".photo-error").innerHTML = "";
 }
 if(selectedFile.type !== "image/jpeg" && selectedFile.type !== "image/png" && selectedFile.type !== "image/jpg") {
    document.querySelector(".photo-error").innerHTML = "Please select a valid image file (JPG, JPEG, PNG).";
    photoInput.focus();
    return false;
 }
 else{
    document.querySelector(".photo-error").innerHTML = "";
 }

 let resumeInput = document.querySelector(".resume-input");

 let selectedResumeFile = resumeInput.files[0];

 if(!selectedResumeFile){
   document.querySelector(".resume-error").innerHTML = "upload your resume."
   resumeInput.focus();
   return false ;
 }

 if (selectedResumeFile && selectedResumeFile.size > 5 * 1024 * 1024) {
    document.querySelector(".resume-error").innerHTML = "File size exceeds the maximum limit of 5 MB.";
    resumeInput.focus();
    return false;
 }
 else{
    document.querySelector(".resume-error").innerHTML = "";
 }
 if(selectedResumeFile.type !== "application/pdf" && selectedResumeFile.type !== "application/msword" && selectedResumeFile.type !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
    document.querySelector(".resume-error").innerHTML = "Please select a valid document file (PDF, DOC, DOCX).";
    resumeInput.focus();
    return false;
 }
 else{
    document.querySelector(".resume-error").innerHTML = "";
 }


 return true ; 
 
}

let cityselect = document.querySelector(".city");
let stateselect = document.querySelector(".state")

const cities = {
   up : ["lacknow" , "ayodhya"],
   mp : ["kurebhar" , "khundore"] ,
   maharastra : ["mumbai" , "bhopal"]
}

stateselect.addEventListener("change" , function(){


cityselect.innerHTML = '<option value=""> select city </option>' ; 
  
let selectedstate = stateselect.value ;

if( selectedstate != ""){

   cities[selectedstate].forEach( function (city) {

      let option = document.createElement("option");
      option.value = city;
      option.textContent = city ;
      
      cityselect.appendChild(option);
   });

}

});

let qualiselect = document.querySelector(".qualification");
let courseselect = document.querySelector(".course");

const courses = {
   inter : ["no course available"],
   diploma : ["polytecnique" , "ITI"],
   graduation :["BA","BSC","BCOM","BTECH"]
}

qualiselect.addEventListener("change" , function(){

 courseselect.innerHTML = '<option value=""> Select course </option>'
 let selectedquali = qualiselect.value;

 if(selectedquali != ""){

   courses[selectedquali].forEach(function(course){

      let option = document.createElement("option");
      option.value = course;
      option.textContent = course ;

      courseselect.appendChild(option);


   });

 }


});



let declarationCheckbox = document.querySelector(".declaration-checkbox");
let submitBtn = document.querySelector(".submit-btn");

declarationCheckbox.addEventListener("change", function() {
    if(declarationCheckbox.checked) {
        submitBtn.disabled = false;
        document.querySelector(".declaration-error").innerHTML = "";
    }
    else {
        submitBtn.disabled = true;
        document.querySelector(".declaration-error").innerHTML = "Please accept the declaration to proceed.";
    }
});


submitBtn.addEventListener("click", function() {

    if (!declarationCheckbox.checked) {
        document.querySelector(".declaration-error").textContent =
            "Please accept the declaration to proceed.";
        return;
    }
    else{
      validateForm();
    }

    

    let errors = document.querySelectorAll(".error");

    let isValid = [...errors].every( (item) => item.textContent.trim() === "" );

    if (isValid) {
        alert("Submitted successfully!");
        location.reload();
    }
    

});

let form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
});

form.addEventListener("keydown", function(e) {


if (e.key === "Enter") {
    e.preventDefault();
    submitBtn.click();
}


});

let resetbtn = document.querySelector(".reset-btn").addEventListener("click" , function(){
   location.reload();
   nameinput.focus();
   
})
