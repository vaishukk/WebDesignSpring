//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

var submitButton = document.getElementById("button");

function disable() {
  submitButton.disabled = true;
  submitButton.style.backgroundColor = "Grey"
  submitButton.style.border = "none";
}

var addNewRowButon = document.getElementById("add");

function enable() {
  submitButton.disabled = false;
  submitButton.style.backgroundColor = "Orange"
  submitButton.style.border = "thick solid Orange"
}

var table = document.getElementById("myTable");
var checkedRowsCount = 0;
function onLoad() {
  var tr = document.getElementsByClassName("dropDownTextArea");
  console.log(tr)
  for (drop of tr) {
    drop.style.display = "none";
  }
  disable();
}

function addStudent() {
  try{
  let row = document.createElement('TR');

  var totalcolumns = 10;
  for (let i = 1; i <= totalcolumns; i++) {
    let cell = document.createElement('Cell');
    let col = document.createElement('TD');
    let randomNumber = Math.floor(Math.random() * 10);

    if (i == 1) {
      let checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.setAttribute("onchange", "checkBoxchangeff(this)");
      cell.appendChild(checkBox);
      cell.appendChild(document.createElement("br"));
      cell.appendChild(document.createElement("br"));
      let image = document.createElement("img");
      image.setAttribute("src", "down.png");
      image.setAttribute("width", "25px");
      image.setAttribute("onclick", "expandImg(this)");
      cell.appendChild(image);
    }
    else if (i == 2) {
      cell.innerHTML = "Student " + randomNumber;
    }
    else if (i == 3) {
      cell.innerHTML = "Teacher " + randomNumber;
    }
    else if (i == 4) {
      cell.innerHTML = "Approved";
    }
    else if (i == 5) {
      cell.innerHTML = "Fall";
    }
    else if (i == 6) {
      cell.innerHTML = "TA";
    }
    else if (i == 7) {
      cell.innerHTML = Math.floor(Math.random() * 10000);
    }
    else if (i == 8) {
      cell.innerHTML = Math.floor(Math.random() * 100) + "%";
    }
    col.appendChild(cell);
    row.appendChild(col);
  }

  table.appendChild(row);

  let advisorRow = document.createElement('TR');
  advisorRow.setAttribute("class", "dropDownTextArea");
  let advisorDetails = document.createElement("TD");
  advisorRow.setAttribute("colspan", "8")
  advisorDetails.innerText = "Adivsor" + "\n\n " +
    "Award  Details \n" +
    "Summer 1-2014(TA) \n" +
    "Budget Number: \n" +
    "Tuition Number: \n" +
    "Comments: \n\n\n" +
    "Award Status:\n\n";
  advisorRow.appendChild(advisorDetails);
  table.appendChild(advisorRow);
  setTimeout(alertmessage, 500);

}catch(err){
  alert("Record addition failed!");
}
  
}

function alertmessage(){

  alert("Record added successfully!");

}

function checkBoxchangeff(obj) {
  var row = obj.parentNode.parentElement;
  if (row.tagName != "TR") {
    row = obj.parentNode.parentElement.parentElement;
  }
  if (obj.checked) {
    row.style.backgroundColor = "yellow";
    checkedRowsCount++;
    enable();

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("onclick", "deleteRow(this)");
    row.cells[8].append(deleteButton);
    deleteButton.style.height = "20px"
    deleteButton.style.width = "60px"
    deleteButton.textContent = "Delete";

    let editButton = document.createElement("button");
    editButton.setAttribute("onclick", "editRow(this)");
    row.lastElementChild.append(editButton);
    editButton.style.height = "20px"
    editButton.style.width = "60px"
    editButton.textContent = "edit";

    
  }
  else {

    checkedRowsCount = checkedRowsCount - 1;
    row.style.backgroundColor = "white";

    

    if (row.lastElementChild.childElementCount == 2){
      row.lastElementChild.lastElementChild.remove();
    }
    row.lastElementChild.firstElementChild.remove();

    if (row.cells[8].childElementCount == 2){
      row.cells[8].lastElementChild.remove();
    }
    row.cells[8].firstElementChild.remove();

    if (checkedRowsCount == 0) {
      disable();
    }
  }
}

function deleteRow(obj) {
  var row = obj.parentNode.parentElement;
  if (row.tagName != "TR") {
    row = obj.parentNode.parentElement.parentElement;
  }
  row.nextElementSibling.remove();
  row.remove();

  checkedRowsCount = checkedRowsCount - 1;
  if (checkedRowsCount == 0) {
    disable();
    setTimeout(alertdelmessage, 500);
    
  }
}

function alertdelmessage(){
  alert("Record deleted!")
}

function editRow(obj){

  alert("Data edited");

}

function expandImg(obj) {
  var detailsRow = obj.parentNode.parentNode.nextElementSibling;

  if (detailsRow.tagName == "TD") {
    detailsRow = obj.parentNode.parentElement.parentElement.nextElementSibling;
  }
  if (detailsRow.style.display == "none" || detailsRow.style.display == "") {
    detailsRow.style.display = "block";
  }
  else {
    detailsRow.style.display = "none";
  }
}