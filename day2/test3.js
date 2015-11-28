var test = {a:1,b:2,c:3};
console.log(test.a);
console.log(test.b);
console.log(test.a + test.b + test.c);

var test2 = {a:test, b:4};
console.log(test2.a);
console.log(test2.a.a);
console.log(test2.a.b);

for(key in test) {
	console.log('key: '+key+' value: ' +test[key]);
	
}