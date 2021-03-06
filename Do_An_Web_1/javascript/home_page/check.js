//Tất cả hàm liên quan tài khoản dùng json.parse + json.stringify
function getDataUser() {
    return JSON.parse(window.localStorage.getItem('DataUser'));
}
function User(username,password,ten,sdt,email,status)
{
	
	this.userName = username;
	this.passWord = password;
	this.name = ten;
	this.phone = sdt;
	this.eMail = email;
	this.staTus = status;
}
function setDataUser(ds) {
    window.localStorage.setItem('DatatUser', JSON.stringify(ds));
}

function getArrayUser() {
    var data = JSON.parse(window.localStorage.getItem('ArrayUser')) || []
    var l = [];
    for (var d of data) {
        l.push(d);
    }
    return l;
}

function setArrayUser(au) {
    window.localStorage.setItem('ArrayUser', JSON.stringify(au));
}


function updateListUser(u) {
    var list = getArrayUser();
    for (var i = 0; i < list.length; i++) {
        if (equalUser(u, list[i])) {
            list[i] = u;
        }
    }
    setListUser(list);
}

function equalUser(u1, u2) {
	return (u1.userName == u2.userName && u1.passWord == u2.passWord);
}
function equalUser2(u1, u2) {
	return (u1.userName == u2.userName);
}