var foo = function(array) {
	for(var i=0;i<array.length; i++) {
		console.log(array[i]);
	}
}


var bar = function(array1,array2) {
	for(var i=0;i<array.length; i++){
		array2.push(array[i]);
	}
}
var users = [];
var signup = function(name,age) {
	var user = {name : name, age: age};
	users.push(user);
	console.log(name+'가입 완료');
}
var signout = function(name) {
	for(i=0;i<users.length;i++) {
		if(users[i].name === name) {
			users.splice(i,1);
			console.log(name+'탈퇴 완료');
			break;
		}
	}
}

var modify = function(name, age) {
	for(i=0;i<users.length;i++) {
		if(users[i].name === name){
			users[i].age = age;
			console.log(name+'의 나이를'+age+'로 수정완료');
			break;
		}
	}
	console.log(users);
}

signout('김철수');