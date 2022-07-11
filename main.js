const inputArea = document.getElementById("inputArea");
const outputArea = document.getElementById("outputArea");
const btnFormat = document.getElementById("btnFormat")
const btnMinify = document.getElementById("btnMinify");

let formatted = false;

btnFormat.addEventListener("click", () => {
  try {
    const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);
    outputArea.value = formatted;
  } catch(err) {
    outputArea.value = "Invalid JSON"
  }

});

btnMinify.addEventListener("click", () => {
  try {
    const minified = JSON.stringify(JSON.parse(inputArea.value));
    outputArea.value = minified;
  } catch(err) {
    outputArea.value = "Invalid JSON"
  }
});

inputArea.addEventListener("click", () => {
  inputArea.innerHTML = "";
})

outputArea.addEventListener("click", () => {
  navigator.clipboard.writeText(outputArea.value).then(function() {
    if(outputArea.value != "" && document.activeElement == outputArea) {
      document.getElementById("snackbar").className = "show"
    } else {
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);    
    }
  }, function(err) {
    console.error('Could not copy text: ', err);
  });  
})

outputArea.addEventListener("focusout", () => {
  setTimeout(function(){ document.getElementById("snackbar").className = document.getElementById("snackbar").className.replace("show", ""); }, 1000);    
})