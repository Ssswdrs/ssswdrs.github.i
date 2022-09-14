
var valueAdd = parseInt(document.getElementById('numberAdd').value, 10);
var valueRemove = parseInt(document.getElementById('numberRemove').value, 10);

var addTable = document.getElementById('addTable');
var removeTable = document.getElementById('removeTable');
function increaseValueAdd() {
  valueAdd = isNaN(valueAdd) ? 0 : valueAdd;
  if(valueAdd<10 && (valueAdd+valueRemove)<10){
  valueAdd++;
  document.getElementById('numberAdd').value = valueAdd;
  var row = addTable.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  cell1.innerHTML = valueAdd;
  cell2.innerHTML = '<input class="table" type="text" id="subjectCode" name="subjectCode" style="width: 40px;" />';
  cell3.innerHTML = '<input class="table" type="text" id="subjectName" name="subjectName" style="width: 60px;" />';
  cell4.innerHTML = '<input class="table" type="text" id="section" name="section" style="width: 50px;" />';
  cell5.innerHTML = '<span style="font-size: 14px">วัน</span><select id="day" name="day"><option value="">-</option><option value="Sun">อาทิตย์</option><option value="Mon">จันทร์</option><option value="Tue">อังคาร</option><option value="Wed">พุธ</option><option value="Thu">พฤหัสบดี</option><option value="Fri">ศุกร์</option><option value="Sat">เสาร์</option></select><span style="font-size: 14px">&nbsp;และวัน&nbsp;</span><select id="days" name="days"><option value="">-</option><option value="Sun">อาทิตย์</option><option value="Mon">จันทร์</option><option value="Tue">อังคาร</option><option value="Wed">พุธ</option><option value="Thu">พฤหัสบดี</option><option value="Fri">ศุกร์</option><option value="Sat">เสาร์</option></select><span style="font-size: 9px">(ถ้ามี)</span></center><br><input class="table" style="height: 16px;width: 90px;" type="time" id="timeStart" name="timeStart"><span style="font-size: 14px">&nbsp;ถึง&nbsp;</span><input class="table" style="height: 16px;width: 90px;" type="time" id="timeEnd" name="timeEnd">';
  cell6.innerHTML = '<input class="table" type="text" id="credit" name="credit" style="width: 15px;" />';
  cell7.innerHTML = '<input class="table" type="text" id="teacher" name="teacher" style="width: 150px;" />';
  cell8.innerHTML = '<input class="table" type="checkbox" id="teacherCheck" name="teacherCheck" value="false" />';

  }
  
}

function decreaseValueAdd() {
  valueAdd = isNaN(valueAdd) ? 0 : valueAdd;
  valueAdd < 1 ? valueAdd = 1 : '';
  if((valueAdd+valueRemove)>1){
    valueAdd--;
    document.getElementById('numberAdd').value = valueAdd;
    var length = document.getElementById('addTable').rows.length;
    if(length > 1)document.getElementById('addTable').deleteRow(length-1);
  }
}

function increaseValueRemove() {
  valueRemove = isNaN(valueRemove) ? 0 : valueRemove;
  if(valueRemove<10 && (valueAdd+valueRemove)<10){
    valueRemove++;
  document.getElementById('numberRemove').value = valueRemove;
  var row = removeTable.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  cell1.innerHTML = valueRemove;
  cell2.innerHTML = '<input class="table" type="text" id="subjectIdr" name="subjectIdr" style="width: 40px;" />';
  cell3.innerHTML = '<input class="table" type="text" id="nameSubjectr" name="nameSubjectr" style="width: 60px;" />';
  cell4.innerHTML = '<input class="table" type="text" id="sectionr" name="sectionr" style="width: 50px;" />';
  cell5.innerHTML = '<span style="font-size: 14px">วัน</span><select id="dayr" name="dayr"><option value="">-</option><option value="Sun">อาทิตย์</option><option value="Mon">จันทร์</option><option value="Tue">อังคาร</option><option value="Wed">พุธ</option><option value="Thu">พฤหัสบดี</option><option value="Fri">ศุกร์</option><option value="Sat">เสาร์</option></select><span style="font-size: 14px">&nbsp;และวัน&nbsp;</span><select id="daysr" name="daysr"><option value="">-</option><option value="Sun">อาทิตย์</option><option value="Mon">จันทร์</option><option value="Tue">อังคาร</option><option value="Wed">พุธ</option><option value="Thu">พฤหัสบดี</option><option value="Fri">ศุกร์</option><option value="Sat">เสาร์</option></select><span style="font-size: 9px">(ถ้ามี)</span></center><br><input class="table" style="height: 16px;width: 90px;" type="time" id="timeStartr" name="timeStartr"><span style="font-size: 14px">&nbsp;ถึง&nbsp;</span><input class="table" style="height: 16px;width: 90px;" type="time" id="timeEndr" name="timeEndr">';
  cell6.innerHTML = '<input class="table" type="text" id="creditr" name="creditr" style="width: 15px;" />';
  cell7.innerHTML = '<input class="table" type="text" id="teacherr" name="teacherr" style="width: 150px;" />';
  cell8.innerHTML = '<input class="table" type="checkbox" id="teacherCheckr" name="teacherCheckr" value="false" />';

  }
}


function decreaseValueRemove() {
  valueRemove = isNaN(valueRemove) ? 0 : valueRemove;
  valueRemove < 1 ? valueRemove = 1 : '';
  if((valueAdd+valueRemove)>1){
    valueRemove--;
    document.getElementById('numberRemove').value = valueRemove;
    var length = document.getElementById('removeTable').rows.length;
    if(length > 1)document.getElementById('removeTable').deleteRow(length-1);
  }
}

function checkBool (e){
  if(e=="false"){
    return "true";
  }else {
    return "false";
  }
}

function Submit(event) {
  event.preventDefault();

 check1 : for (var i = 1, row; row = addTable.rows[i]; i++) {
        for (var j = 1, col; col = row.cells[j]; j++) { 
            if(col.getElementsByTagName('input')[0].value == "" && col.getElementsByTagName('input')[0].checked == false){
              alert("โปรดกรอกข้อมูลให้ครบถ้วน(เพิ่มวิชา)");
              break check1;
            }
           }
        }

  check2 : for (var i = 1, row; row = removeTable.rows[i]; i++) {
        for (var j = 1, col; col = row.cells[j]; j++) { 
            if(col.getElementsByTagName('input')[0].value == "" && col.getElementsByTagName('input')[0].checked == false){
              alert("โปรดกรอกข้อมูลให้ครบถ้วน(ถอนวิชา)");
              break check2;
            }
           }
        }
  const data = new FormData(event.target); 
  const student = { date: data.get('date'), studentFirstName: data.get('fname'), studentLastName: data.get('lname'), studentId: data.get('studentId'), studentYear: data.get('studentYear')
                    , studyField: data.get('subject'), advisor: data.get('advisor'), addressNumber: data.get('numHome')
                    , moo: data.get('moo'), tumbol: data.get('tambon'), amphur: data.get('aumper'), province: data.get('county'), postalCode: data.get('zipcode'), mobilePhone: data.get('phoneNum')
                    , phone: data.get('homeNum'), cause: data.get('reason'),addSubjectList: [{subjectCode: data.get('subjectId'), subjectName: data.get('nameSubject'), subjectSection: data.get('section')
                    , subjectDate: data.get('day') + data.get('days') +" "+ data.get('timeStart') + " - "+ data.get('timeEnd'), subjectCredit: data.get('credit'), subjectTeacher: data.get('teacher'), subjectTeacherCheck: checkBool(data.get('teacherCheck'))}]
                    ,dropSubjectList: [{subjectCode: data.get('subjectIdr'), subjectName: data.get('nameSubjectr'), subjectSection: data.get('sectionr')
                    , subjectDate: data.get('dayr') + data.get('daysr') +" "+ data.get('timeStartr') + " - "+ data.get('timeEndr'), subjectCredit: data.get('creditr'), subjectTeacher: data.get('teacherr'), subjectTeacherCheck: checkBool(data.get('teacherCheckr'))}]
  };
 
  console.log(JSON.stringify(student));
}

const form = document.querySelector('form');
form.addEventListener('submit', Submit);