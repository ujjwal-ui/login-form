function checkEmail(inputValue) {
    if(inputValue === "") return true;

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!emailRegex.test(inputValue)) return false;
    return true;
}


function customPasswordCheck(inputValue) {
    if(inputValue.length === 0) return true;
    if( !((inputValue.length >= 8) && (inputValue.length <= 16))) 
        return false;

    let specialChar = 0, lowerCase=0, numbers = 0, upperCase = 0;
    for(let i=0; i<inputValue.length; i++) {
        if(inputValue[i] >= 'a' && inputValue[i] <= 'z')
            lowerCase++;
        else if(inputValue[i] >= 'A' && inputValue[i] <= 'Z')
            upperCase++;
        else if(inputValue[i] >= '0' && inputValue[i] <= '9'){
            numbers++;
        }else {
            specialChar++;
        }
    }
    if(specialChar < 1 || upperCase < 1) return false;

    return true;
}

const submitFormHandler = (e) => {
    e.preventDefault();
    let errorFound = false;    
    const inputsAndSelects = document.querySelectorAll(".form-input-container input, select");
    const elementsArray = Array.prototype.slice.call(inputsAndSelects);
    const allInpusContainer = document.querySelectorAll(".form-input-container");

    for(let i=0; i<elementsArray.length-1; i++) {
        const element = elementsArray[i];
        const value = element.value;
        if(element.name === "email") {
            if(value === "") {
                element.style.border = "2px solid red";
                allInpusContainer[0].lastElementChild.classList.remove("error");
                allInpusContainer[0].lastElementChild.classList.add("error-occured");
                allInpusContainer[0].lastElementChild.innerHTML = "Email is not valid";
                errorFound = true;
            }else if(value !== "" && !checkEmail(value)) {
                element.style.border = "2px solid red";
                allInpusContainer[0].lastElementChild.classList.remove("error");
                allInpusContainer[0].lastElementChild.classList.add("error-occured");
                allInpusContainer[0].lastElementChild.innerHTML = "Email is not valid";
                errorFound = true;
             } else {
                allInpusContainer[0].lastElementChild.classList.remove("error-occured");
                allInpusContainer[0].lastElementChild.classList.add("error");
                element.style.border = "none";
                errorFound = false;
             }
        }
        if(element.name === "password") {
            if(value === "") {
                element.style.border = "2px solid red";
                allInpusContainer[2].lastElementChild.classList.remove("error");
                allInpusContainer[2].lastElementChild.classList.add("error-occured");
                allInpusContainer[2].lastElementChild.innerHTML = " min 8, max 16,1 uppercase,1 special char";
                errorFound = true;
            }else if(value !== "" && !customPasswordCheck(value)) {
                element.style.border = "2px solid red";
                allInpusContainer[2].lastElementChild.classList.remove("error");
                allInpusContainer[2].lastElementChild.classList.add("error-occured");
                allInpusContainer[2].lastElementChild.innerHTML = " min 8, max 16,1 uppercase,1 special char";
                errorFound = true;
            } else {
                allInpusContainer[2].lastElementChild.classList.remove("error-occured");
                allInpusContainer[2].lastElementChild.classList.add("error");
                element.style.border = "none";
                errorFound = false;
            }
        }
        if(element.name === "date") {
            if(value === "") {
                element.style.border = "2px solid red";
                element.nextSibling.nextSibling.classList.remove("error");
                element.nextSibling.nextSibling.classList.add("error-occured");
                element.nextSibling.nextSibling.innerHTML = "invalid";
                errorFound = true;
            }else if(value !== "" && !(Number(value) > 0 && Number(value) <= 31)) {
                element.style.border = "2px solid red";
                element.nextSibling.nextSibling.classList.remove("error");
                element.nextSibling.nextSibling.classList.add("error-occured");
                element.nextSibling.nextSibling.innerHTML = "invalid";
                errorFound = true;
            } else {
                element.style.border = "2px solid grey";
                element.nextSibling.nextSibling.classList.add("error");
                element.nextSibling.nextSibling.classList.remove("error-occured");
                errorFound = false;
            }
        }
        if(element.name === "month") {
            if(value === "") {
                element.style.border = "2px solid red";
                element.nextSibling.nextSibling.classList.remove("error");
                element.nextSibling.nextSibling.classList.add("error-occured");
                element.nextSibling.nextSibling.innerHTML = "invalid";
                errorFound = true;
            } else {
                element.style.border = "none";
                element.nextSibling.nextSibling.classList.add("error");
                element.nextSibling.nextSibling.classList.remove("error-occured");
                errorFound = false;
            }
        }

        if(element.name === "year") {
            if(value === "") {
                element.style.border = "2px solid red";
                element.nextSibling.nextSibling.classList.remove("error");
                element.nextSibling.nextSibling.classList.add("error-occured");
                element.nextSibling.nextSibling.innerHTML = "invalid";
                errorFound = true;
            } else {
                element.style.border = "none";
                element.nextSibling.nextSibling.classList.add("error");
                element.nextSibling.nextSibling.classList.remove("error-occured");
                errorFound = false;
            }
        }

    }

    const radioCheck = document.querySelectorAll("input[name='radio-check']");
    if(!radioCheck[0].checked && !radioCheck[1].checked) {
        allInpusContainer[3].lastElementChild.classList.remove("error");
        allInpusContainer[3].lastElementChild.classList.add("error-occured");
        allInpusContainer[3].lastElementChild.innerHTML = "invalid";
        errorFound = true;
    } else {
        allInpusContainer[3].lastElementChild.classList.add("error");
        allInpusContainer[3].lastElementChild.classList.remove("error-occured");
        errorFound = false;
    }


    if(!errorFound) alert("Form submitted...!");

}