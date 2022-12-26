
let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
const resultFind = user.find(el => el.status == '1');
$('#show').text(resultFind.status)