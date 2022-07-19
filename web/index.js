function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

function update(){
    const file = "data/log.txt";
    var txt = loadFile(file);
    if (txt != null) {
        document.getElementById("count").innerHTML = txt;
    } else {
        document.getElementById("count").innerHTML = "Error";
    }
}

document.getElementById("btn").addEventListener("click", update);
