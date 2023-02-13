let allNames = [];

document.getElementById("submit").addEventListener("click" , function(){

  let inputNames = document.getElementById("name").value ;

  allNames.push(inputNames);
  
  document.getElementById("result").innerHTML = allNames;

})