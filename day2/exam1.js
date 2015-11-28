var foo=[1,2,3,4,5,6,7,8,9,10];
for(var i=0;i<10;i++){
	console.log(i,foo[i]);
}

for(var a=0;a<10;a++){
	
	console.log(a,foo[a]*2);
}

var bar=[];
for(b=0;b<10;b++){
    bar.push(foo[b]);
	
}
console.log(bar);