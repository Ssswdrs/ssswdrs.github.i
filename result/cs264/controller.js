function Submit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const student = { date: data.get('date'), studentFirstName: data.get('fname'), studentLastName: data.get('lname'), studentId: data.get('studentId'), studentYear: data.get('studentYear')
                    , studyField: data.get('subject'), advisor: data.get('advisor'), addressNumber: data.get('numHome')
                    , moo: data.get('moo'), tumbol: data.get('tambon'), amphur: data.get('aumper'), province: data.get('county'), postalCode: data.get('zipcode'), mobilePhone: data.get('phoneNum')
                    , phone: data.get('homeNum'), cause: data.get('reason'), addSubjectList: [{subjectCode: data.get('subjectId1'), subjectName: data.get('nameSubject1'), subjectSection: data.get('section1')
                    , subjectDate: data.get('day1') + data.get('days1') +" "+ data.get('timeStart1') + " - "+ data.get('timeEnd1'), subjectCredit: data.get('unit1'), subjectTeacher: data.get('teacher1'), subjectTeacherCheck: data.get('allowTeacher1')}]};
  console.log(JSON.stringify(student));
}

const form = document.querySelector('form');
form.addEventListener('submit', Submit);
var valueAdd = parseInt(document.getElementById('numberAdd').value, 10);
var valueRemove = parseInt(document.getElementById('numberRemove').value, 10);
function increaseValueAdd() {
  valueAdd = isNaN(valueAdd) ? 0 : valueAdd;
  if(valueAdd<10 && (valueAdd+valueRemove)<10){
  valueAdd++;
  document.getElementById('numberAdd').value = valueAdd;
  var table = document.createElement('table');
    var tr = document.createElement('tr');   
    var subjectId = document.createElement("input");
    var subjectName = document.createElement("input");
    var section = document.createElement("input");
      var time = document.createElement("input");
      var credit = document.createElement("input");
      var teacher = document.createElement("input");
      var teacherCheck = document.createElement("input");
    subjectId.setAttribute('type', 'text');
    subjectName.setAttribute('type', 'text');
    section.setAttribute('type', 'text');
    time.setAttribute('type', 'text');
    credit.setAttribute('type', 'text');
    teacher.setAttribute('type', 'text');
    teacherCheck.setAttribute('type', 'checkbox');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var order = document.createTextNode(valueAdd);

    td1.appendChild(order);
    td2.appendChild(subjectId);
    td3.appendChild(subjectName);
    td4.appendChild(section);
    td5.appendChild(time);
    td6.appendChild(credit);
    td7.appendChild(teacher);
    td8.appendChild(teacherCheck);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    table.appendChild(tr);
  
    document.getElementById('addTable').appendChild(table);

  }
  
}

function decreaseValueAdd() {
  valueAdd = isNaN(valueAdd) ? 0 : valueAdd;
  valueAdd < 1 ? valueAdd = 1 : '';
  valueAdd--;
  document.getElementById('numberAdd').value = valueAdd;
  let removeChild = document.getElementById('addTable');
  removeChild.removeChild(removeChild.lastElementChild);
}

function increaseValueRemove() {
  valueRemove = isNaN(valueRemove) ? 0 : valueRemove;
  if(valueRemove<10 && (valueAdd+valueRemove)<10){
    valueRemove++;
  document.getElementById('numberRemove').value = valueRemove;
  var table = document.createElement('table');
    var tr = document.createElement('tr');   
    var subjectId = document.createElement("input");
    var subjectName = document.createElement("input");
     var section = document.createElement("input");
     var credit = document.createElement("input");
      var time = document.createElement("input");
      var teacher = document.createElement("input");
      var teacherCheck = document.createElement("input");
    subjectId.setAttribute('type', 'text');
    subjectName.setAttribute('type', 'text');
    section.setAttribute('type', 'text');
    time.setAttribute('type', 'text');
    credit.setAttribute('type', 'text');
    teacher.setAttribute('type', 'text');
    teacherCheck.setAttribute('type', 'checkbox');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var order = document.createTextNode(valueRemove);

    td1.appendChild(order);
    td2.appendChild(subjectId);
    td3.appendChild(subjectName);
    td4.appendChild(section);
    td5.appendChild(time);
    td6.appendChild(credit);
    td7.appendChild(teacher);
    td8.appendChild(teacherCheck);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    table.appendChild(tr);
    document.getElementById('removeTable').appendChild(table);
  }
}

function decreaseValueRemove() {
  valueRemove = isNaN(valueRemove) ? 0 : valueRemove;
  valueRemove < 1 ? valueRemove = 1 : '';
  valueRemove--;
  document.getElementById('numberRemove').value = valueRemove;
  let removeChild = document.getElementById('removeTable');
  removeChild.removeChild(removeChild.lastElementChild);
}
