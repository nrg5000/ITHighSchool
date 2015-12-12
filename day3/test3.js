var users=[];

var signin = function(name, age) {
	if(!name) {
		console.log('가입실패! 이름이 존재하지 않습니다.');
		return;
	}
	if(!age) {
		console.log('가입실패! 나이가 존재하지 않습니다.');
		return;
	}

	for(var i=0; i<users.length; i++) {
		if(users[i].name === name) {
			console.log('가입실패! 이미 가입한 회원입니다.');
			return;
		}
	}

	var user={name: name, age: age};
	users.push(user);
}

var signout = function(name) {
	if(!name) {
		console.log('탈퇴실패! 이름을 입력하세요.');
		return;
	}

	for(var i=0; i<users.length;i++)
		if(users[i].name === name) {
			users.splice(i,1);
			console.log('탈퇴성공!');
			return;
		}
}
console.log('탈퇴실패! 이미 탈퇴한 회원이거나 가입한 적이 없습니다');



var printusers = function(){
	console.log('******** 회원가입 현황 ********');
	for(var i=0; i<users.length; i++) {
		console.log(users[i]);
	}
	console.log('---------------------');
}

signin('a',10);
signin('b',20);
signin('c',30);
signout('a');
signout('d');

printusers();
