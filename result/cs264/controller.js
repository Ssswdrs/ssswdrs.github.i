
var valueAdd = parseInt(document.getElementById('numberAdd').value, 10);
var valueRemove = parseInt(document.getElementById('numberRemove').value, 10);
var addTable = document.getElementById('addTable');
var removeTable = document.getElementById('removeTable');
var countAdd = 1;
var countDrop = 1;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + (543+yyyy).toString();
dateData = (543+yyyy).toString() + '-' + mm + '-' + dd;
document.getElementById('date').innerHTML = today;

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
  cell2.innerHTML = '<input class="table" type="text" id="subjectId" name="subjectId" style="width: 40px;" />';
  cell3.innerHTML = '<input class="table" type="text" id="nameSubject" name="nameSubject" style="width: 60px;" />';
  cell4.innerHTML = '<input class="table" type="text" id="section" name="section" style="width: 50px;" />';
  cell5.innerHTML = '<span style="font-size: 14px">วัน</span><select id="day" name="day" required><option value="">-</option><option value="Sun">อาทิตย์</option><option value="Mon">จันทร์</option><option value="Tue">อังคาร</option><option value="Wed">พุธ</option><option value="Thu">พฤหัสบดี</option><option value="Fri">ศุกร์</option><option value="Sat">เสาร์</option></select><span style="font-size: 14px">&nbsp;และวัน&nbsp;</span><select id="days" name="days"><option value="">-</option><option value="Sun">อาทิตย์</option><option value="Mon">จันทร์</option><option value="Tue">อังคาร</option><option value="Wed">พุธ</option><option value="Thu">พฤหัสบดี</option><option value="Fri">ศุกร์</option><option value="Sat">เสาร์</option></select><span style="font-size: 9px">(ถ้ามี)</span></center><br><input class="table" style="height: 16px;width: 90px;" type="time" id="timeStart" name="timeStart"><span style="font-size: 14px">&nbsp;ถึง&nbsp;</span><input class="table" style="height: 16px;width: 90px;" type="time" id="timeEnd" name="timeEnd">';
  cell6.innerHTML = '<input class="table" type="text" id="credit" name="credit" style="width: 15px;" />';
  cell7.innerHTML = '<input class="table" type="text" id="teacher" name="teacher" style="width: 150px;" />';
  cell8.innerHTML = '<input class="table" type="checkbox" id="teacherCheck" name="teacherCheck" value="false" />';

document.getElementsByName('subjectId')[0].setAttribute("name", "subjectId"+countAdd.toString());
  document.getElementsByName('nameSubject')[0].setAttribute("name", "nameSubject"+countAdd.toString());
  document.getElementsByName('section')[0].setAttribute("name", "section"+countAdd.toString());
  document.getElementsByName('day')[0].setAttribute("name", "day"+countAdd.toString());
  document.getElementsByName('days')[0].setAttribute("name", "days"+countAdd.toString());
  document.getElementsByName('timeStart')[0].setAttribute("name", "timeStart"+countAdd.toString());
document.getElementsByName('timeEnd')[0].setAttribute("name", "timeEnd"+countAdd.toString());
  document.getElementsByName('credit')[0].setAttribute("name", "credit"+countAdd.toString());
  document.getElementsByName('teacher')[0].setAttribute("name", "teacher"+countAdd.toString());
  document.getElementsByName('teacherCheck')[0].setAttribute("name", "teacherCheck"+countAdd.toString());
  countAdd++;

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
    countAdd--;
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
  cell5.innerHTML = '<span style="font-size: 14px">วัน</span><select id="dayr" name="dayr" required><option value="">-</option><option value="Sun">อาทิตย์</option><option value="Mon">จันทร์</option><option value="Tue">อังคาร</option><option value="Wed">พุธ</option><option value="Thu">พฤหัสบดี</option><option value="Fri">ศุกร์</option><option value="Sat">เสาร์</option></select><span style="font-size: 14px">&nbsp;และวัน&nbsp;</span><select id="daysr" name="daysr"><option value="">-</option><option value="Sun">อาทิตย์</option><option value="Mon">จันทร์</option><option value="Tue">อังคาร</option><option value="Wed">พุธ</option><option value="Thu">พฤหัสบดี</option><option value="Fri">ศุกร์</option><option value="Sat">เสาร์</option></select><span style="font-size: 9px">(ถ้ามี)</span></center><br><input class="table" style="height: 16px;width: 90px;" type="time" id="timeStartr" name="timeStartr" required><span style="font-size: 14px">&nbsp;ถึง&nbsp;</span><input class="table" style="height: 16px;width: 90px;" type="time" id="timeEndr" name="timeEndr" required>';
  cell6.innerHTML = '<input class="table" type="text" id="creditr" name="creditr" style="width: 15px;" />';
  cell7.innerHTML = '<input class="table" type="text" id="teacherr" name="teacherr" style="width: 150px;" />';
  cell8.innerHTML = '<input class="table" type="checkbox" id="teacherCheckr" name="teacherCheckr" value="false" />';
  document.getElementsByName('subjectIdr')[0].setAttribute("name", "subjectIdr"+countDrop.toString());
  document.getElementsByName('nameSubjectr')[0].setAttribute("name", "nameSubjectr"+countDrop.toString());
  document.getElementsByName('sectionr')[0].setAttribute("name", "sectionr"+countDrop.toString());
  document.getElementsByName('dayr')[0].setAttribute("name", "dayr"+countDrop.toString());
  document.getElementsByName('daysr')[0].setAttribute("name", "daysr"+countDrop.toString());
  document.getElementsByName('timeStartr')[0].setAttribute("name", "timeStartr"+countDrop.toString());
  document.getElementsByName('timeEndr')[0].setAttribute("name", "timeEndr"+countDrop.toString());
  document.getElementsByName('creditr')[0].setAttribute("name", "creditr"+countDrop.toString());
  document.getElementsByName('teacherr')[0].setAttribute("name", "teacherr"+countDrop.toString());
  document.getElementsByName('teacherCheckr')[0].setAttribute("name", "teacherCheckr"+countDrop.toString());
  countDrop++;
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
    countDrop--;
  }
}

function fileValidation() {
            var fileInput =
                document.getElementById('file');
             
            var filePath = fileInput.value;
         
            var allowedExtensions =
                    /(\.jpg|\.jpeg|\.png|\.pdf)$/i;
             
            if (!allowedExtensions.exec(filePath)) {
                alert('โปรดแนบไฟล์ให้ถูกต้อง');
                fileInput.value = '';
                return false;
            }
            else
            {
             
                if (fileInput.files && fileInput.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        document.getElementById(
                            'imagePreview').innerHTML =
                            '<img src="' + e.target.result
                            + '"/>';
                    };
                     
                    reader.readAsDataURL(fileInput.files[0]);
                }
            }
        }




increaseValueAdd();

function checkBool (e){
  if(e=="false"){
    return true;
  }else {
    return false;
  }
}


var correctForm = true;                                            

function Submit(event) {
  event.preventDefault();
  correctForm = true;
 check1 : for (var i = 1, row; row = addTable.rows[i]; i++) {
        for (var j = 1, col; col = row.cells[j]; j++) { 
            if(col.getElementsByTagName('input')[0].value == "" && col.getElementsByTagName('input')[0].checked == false){
              alert("โปรดกรอกข้อมูลให้ครบถ้วน(เพิ่มวิชา)");
              correctForm = false;
              break check1;
            }
           }
        }

  check2 : for (var i = 1, row; row = removeTable.rows[i]; i++) {
        for (var j = 1, col; col = row.cells[j]; j++) { 
            if(col.getElementsByTagName('input')[0].value == "" && col.getElementsByTagName('input')[0].checked == false){
              alert("โปรดกรอกข้อมูลให้ครบถ้วน(ถอนวิชา)");
              correctForm = false;
              break check2;
            }
           }
        }
  const data = new FormData(event.target); 
  if(correctForm){
      var drop = [];
  for(var i = 1;i<countDrop;i++){
  var dropList = {subjectCode: data.get('subjectIdr'+i.toString()), subjectName: data.get('nameSubjectr'+i.toString()), subjectSection: data.get('sectionr'+i.toString())
                    , subjectDate: data.get('dayr'+i.toString()) + data.get('daysr'+i.toString()) +" "+ data.get('timeStartr'+i.toString()) + " - "+ data.get('timeEndr'+i.toString())
                    , subjectCredit: data.get('creditr'+i.toString()), subjectTeacher: data.get('teacherr'+i.toString()), subjectTeacherCheck: checkBool(data.get('teacherCheckr'+i.toString()))};
    drop.push(dropList);
  }
  
  var add = [];
  for(var i = 1;i<countAdd;i++){
  var addList = {subjectCode: data.get('subjectId'+i.toString()), subjectName: data.get('nameSubject'+i.toString()), subjectSection: data.get('section'+i.toString())
                    , subjectDate: data.get('day'+i.toString()) + data.get('days'+i.toString()) +" "+ data.get('timeStart'+i.toString()) + " - "+ data.get('timeEnd'+i.toString())
                    , subjectCredit: data.get('credit'+i.toString()), subjectTeacher: data.get('teacher'+i.toString()), subjectTeacherCheck: checkBool(data.get('teacherCheck'+i.toString()))};
      add.push(addList);
  }

  const student = { date: dateData, studentFirstName: data.get('fname'), studentLastName: data.get('lname'), studentId: data.get('studentId'), studentYear: data.get('studentYear')
                    , studyField: data.get('subject'), advisor: data.get('advisor'), addressNumber: data.get('numHome')
                    , moo: data.get('moo'), tumbol: data.get('tambon'), amphur: data.get('aumper'), province: data.get('county'), postalCode: data.get('zipcode'), mobilePhone: data.get('phoneNum')
                    , phone: data.get('homeNum'), cause: data.get('reason'),addSubjectList: add
                    ,dropSubjectList: drop};
 
  console.log(JSON.stringify(student,null,2));
  }

  
}

const form = document.querySelector('form');
form.addEventListener('submit', Submit);