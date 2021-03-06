//각 환자의 기본 데이터 저장
function readFormData() {
  var formData = {};
  formData["p_id"] = $('#p_id').val();
  formData["p_date"] = $('#p_date').val();
  formData["p_past"] = $('#p_past').val();
  formData["p_sym"] = $('#p_sym').val();
  formData["p_dia"] = $('#p_dia').val();

  return formData;
}
//환자 추가 버튼을 누르면 나오는 팝업창에서, 입력버튼을 눌렀을 때
//Paitent list에 새로운 patient들이 등록된다.
var k = 0;
$('#itemAdd').click(function() {
  var p_Data = readFormData();
  var contents = '';
  var i = 'patient_' + k++;
  contents += '<div id="' + i + '" class="w3-third w3-margin-bottom">';
  contents += '<div class="color_1 w3-card-2" style="border-radius:10px;">';
  contents += '<div class="patients_grid w3-hover-opacity w3-hover-shadow" onclick="PatientsModal_open(this)">';
  contents += '<p id="id_' + k + '" class="pl_item_header plus_color text_bolder" style="font-size: 18px"><b>' + p_Data.p_id + '</b></p>';
  contents += '<p class="w3-left-align pl_item_1 text_bolder">입원 날짜</p>';
  contents += '<p id="date_' + k + '" class="w3-left-align pl_item_1-2">' + p_Data.p_date + '</p>';
  contents += '<p class="w3-left-align pl_item_2 text_bolder">과거력</p>';
  contents += '<p  id="past_' + k + '" class="w3-left-align pl_item_2-2">' + p_Data.p_past + '</p>';
  contents += '<p class="w3-left-align pl_item_3 text_bolder">진단명</p>';
  contents += '<p  id="dia_' + k + '" class="w3-left-align pl_item_3-2">' + p_Data.p_dia + '</p>';
  contents += '<p class="w3-left-align pl_item_4 text_bolder">주증상</p>';
  contents += '<p id="sym_' + k + '" class="w3-left-align pl_item_4-2">' + p_Data.p_sym + '</p>';
  contents += '</div>';

  contents += '<div class="pl_item_5  ">'
  contents += '<span class="pl_edit">';
  contents += '<a onclick="Edit_open(this)" class="w3-section w3-button w3-card-2 w3-hover-shadow pl_edit_color" style="border-radius:10px; width:40%; height:45%"><p class="text_bolder pl_mg">정보 수정</p></a>';
  contents += '</span>'

  contents += '<span class="pl_del">';
  contents += '<a onclick="onDelete(this)" class="w3-section w3-button w3-card-2 w3-hover-shadow pl_del_color" style="border-radius:10px; width:40%; height:45%"><p class="text_bolder pl_mg">퇴원</p></a>';
  contents += '</span>'
  contents += '</div>';

  contents += '</div>';
  contents += '</div>';

  $('#AddOption').prepend(contents); // 추가기능
  resetForm();
});

//데이터를 추가한 뒤 '환자 추가 버튼 시 나오는 팝업창'의 값 삭제
function resetForm() {
  document.getElementById("p_id").value = "";
  document.getElementById("p_date").value = "";
  document.getElementById("p_dia").value = "";
  document.getElementById("p_sym").value = "";
  document.getElementById("p_past").value = "";
};

//환자 정보 삭제
function onDelete(e) {
  if (confirm('환자 데이터를 지우시겠습니까?')) {
    e.parentNode.parentNode.parentNode.parentNode.remove();
  }
};


//Edit 기능
function readthisData() {
  var thisData = {};
  thisData["id"] = $('#E-p_id').val();
  thisData["date"] = $('#E-p_date').val();
  thisData["past"] = $('#E-p_past').val();
  thisData["sym"] = $('#E-p_sym').val();
  thisData["dia"] = $('#E-p_dia').val();
  return thisData;
};

function resetForm2() {
  document.getElementById("E-p_id").value = "";
  document.getElementById("E-p_date").value = "";
  document.getElementById("E-p_dia").value = "";
  document.getElementById("E-p_sym").value = "";
  document.getElementById("E-p_past").value = "";
};
var l = {};
$('#Editon').click(function() {
  //  console.log(l)
  var changed = changed_ids(l);
  var changer = readthisData();
  changed["id"].innerHTML = changer.id;
  changed["date"].innerHTML = changer.date;
  changed["past"].innerHTML = changer.past;
  changed["sym"].innerHTML = changer.sym;
  changed["dia"].innerHTML = changer.dia;
  Edit_close();
  resetForm2();
});

function changed_ids(a) {
  var b = {};
  b["id"] = a.parentNode.parentNode.previousSibling.childNodes[0];
  b["date"] = a.parentNode.parentNode.previousSibling.childNodes[2];
  b["past"] = a.parentNode.parentNode.previousSibling.childNodes[4];
  b["sym"] = a.parentNode.parentNode.previousSibling.childNodes[6];
  b["dia"] = a.parentNode.parentNode.previousSibling.childNodes[8];
  return b;
}
//-----------------------------------------------------------------

//Patient Modal 팝업창
function readModal(a) {
  var modalData = {};
  modalData["id"] = a.childNodes[0];
  modalData["date"] = a.childNodes[2];
  modalData["past"] = a.childNodes[4];
  modalData["sym"] = a.childNodes[6];
  modalData["dia"] = a.childNodes[8];
  return modalData;
};

function PatientsModal_open(k) {
  var modalData = readModal(k)
  console.log(modalData.dia.innerText);
  document.getElementById("mp_id").innerHTML = modalData.id.innerText;
  document.getElementById('mp_dia').innerHTML = ". 진단명 : " + modalData.dia.innerText;
  document.getElementById('mp_past').innerHTML = ". 과거력 : " + modalData.past.innerText;
  document.getElementById('mp_date').innerHTML = ". 입원날짜 : " + modalData.date.innerText;
  document.getElementById('mp_sym').innerHTML = ". 주증상 : " + modalData.sym.innerText;
  document.getElementById('PatientsModal').style.display = 'block';
  resetForm3();
};

function resetForm3() {
  document.getElementById("mp_id").value = "";
  document.getElementById("mp_date").value = "";
  document.getElementById("mp_dia").value = "";
  document.getElementById("mp_sym").value = "";
  document.getElementById("mp_past").value = "";
};
