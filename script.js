let nameinput = document.querySelector(".name-input");
let mobileinput = document.querySelector(".mobile-input");
let emailinput = document.querySelector(".email-input");
let aadhaarinput = document.querySelector(".aadhaar-input");
let paninput = document.querySelector(".pan-input");
let dateinput = document.querySelector(".date-input");


function validateForm() {
 
 let namepattern = /^[a-zA-Z\s]+$/; 

 if (!namepattern.test(nameinput.value)) {
  document.querySelector(".name-error").innerHTML = "Please enter a valid name.";
  nameinput.focus();
  return false;
 }
 else{
  document.querySelector(".name-error").innerHTML = "";
 }
 if(nameinput.value.trim() === "") {
  document.querySelector(".name-error").innerHTML = "Please enter your name.";
  nameinput.focus();
  return false;
 }

 let mobilepattern = /^[6-9][0-9]{9}$/;
 if (!mobilepattern.test(mobileinput.value)) {
  document.querySelector(".mobile-error").innerHTML = "Please enter a valid 10-digit mobile number.";
  mobileinput.focus();
  return false;
 }
 else{
  document.querySelector(".mobile-error").innerHTML = "";
 }

 if(mobileinput.value.trim() === "") {
  document.querySelector(".mobile-error").innerHTML = "Please enter your mobile number.";
  mobileinput.focus();
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
 if(emailinput.value.trim() === "") {
    document.querySelector(".email-error").innerHTML = "Please enter your email address.";
    emailinput.focus();
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
 if(aadhaarinput.value.trim() === "") {
    document.querySelector(".aadhaar-error").innerHTML = "Please enter your Aadhaar number.";
    aadhaarinput.focus();
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
 if(paninput.value.trim() === "") {
    document.querySelector(".pan-error").innerHTML = "Please enter your PAN number.";
    paninput.focus();
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
    if(dateinput.value.trim() === "") {
        document.querySelector(".date-error").innerHTML = "Please enter your date of birth.";
        dateinput.focus();
        return false;
    } 
 
 let genderInputs = document.querySelectorAll('input[name="gender"]:checked');
  
 if (genderInputs.length === 0) {
    document.querySelector(".gender-error").innerHTML = "Please select your gender.";
    genderInputs[0].focus();
    return false;
  }
 else{
    document.querySelector(".gender-error").innerHTML = "";
 }
 

 let experienceInputs = document.querySelectorAll('input[name="experience"]:checked');

 if (experienceInputs.length === 0) {
    document.querySelector(".experience-error").innerHTML = "Please select your experience level.";
    experienceInputs[0].focus();
    return false;
  }
 else{
    document.querySelector(".experience-error").innerHTML = "";
 }

 let skillsInputs = document.querySelectorAll('input[name="skills"]:checked');

 if (skillsInputs.length < 2) {
    document.querySelector(".skills-error").innerHTML = "Please select at least 2 skills.";
    skillsInputs[0].focus();
    return false;
  }
 else{
    document.querySelector(".skills-error").innerHTML = "";
 }

 let hobbiesInputs = document.querySelectorAll('input[name="hobbies"]:checked');

 if (hobbiesInputs.length < 1) {
    document.querySelector(".hobbies-error").innerHTML = "Please select at least 1 hobby.";
    hobbiesInputs[0].focus();
    return false;
  }
 else{
    document.querySelector(".hobbies-error").innerHTML = "";
 }

 let phtoInput = document.querySelector(".photo-input");

 let selectedFile = phtoInput.files[0];

 if (selectedFile && selectedFile.size > 2 * 1024 * 1024) {
    document.querySelector(".photo-error").innerHTML = "File size exceeds the maximum limit of 2 MB.";
    phtoInput.focus();
    return false;
 }
 else{
    document.querySelector(".photo-error").innerHTML = "";
 }
 if(selectedFile.type !== "image/jpeg" && selectedFile.type !== "image/png" && selectedFile.type !== "image/jpg") {
    document.querySelector(".photo-error").innerHTML = "Please select a valid image file (JPG, JPEG, PNG).";
    phtoInput.focus();
    return false;
 }
 else{
    document.querySelector(".photo-error").innerHTML = "";
 }

 let resumeInput = document.querySelector(".resume-input");

 let selectedResumeFile = resumeInput.files[0];

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
   
    if(!declarationCheckbox.checked) {
        document.querySelector(".declaration-error").innerHTML = "Please accept the declaration to proceed.";
        declarationCheckbox.focus();

    }
    else{
        validateForm();
    }
   
   

});
