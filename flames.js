
function getvalue(){
	var urname=document.getElementById("urname").value;
	var othername=document.getElementById("othername").value;
	urname = urname.toLowerCase();
	othername = othername.toLowerCase();
	urname = urname.replace(/ +/g, "");
	othername = othername.replace(/ +/g, "");
	//console.log(urname);
	//console.log(othername);
	for(i=0;i<urname.length;i++){
		for(j=0;j<othername.length;j++){
			if(urname.charAt(i)== othername.charAt(j)){
				var a= urname.substr(0,i);
				var b = urname.substr(i+1,urname.length);
				urname = a+b;
				var c = othername.substr(0,j);
				var d = othername.substr(j+1,othername.length);
				othername = c + d;
				i=-1;
				j=-1;
				break;
			}
		}
	}
	var bothname = urname+othername;
	count = bothname.length;
	var flames = ["Friendship", "Love", "Affection","Marriage", "Enemy", "Siblings"];
	console.log(count);
	while(flames.length>1){
		s= count%flames.length;
		if(s!=0){
		left = flames.slice(0,s-1);
		right = flames.slice(s,6);
		flames=right.concat(left);
		}
		else{
			left = flames.slice(0,s-1);
			flames=left;
		}
	}
	document.getElementById("display").innerHTML="You both are in relationship of";
	document.getElementById("display").style.backgroundColor="White"
	document.getElementById("display1").innerHTML=flames;
	document.getElementById("display1").style.backgroundColor="#009999"
	if(flames[0] == "Friendship"){
		document.body.style.backgroundImage = "url('images/friends.jpg')";
		document.body.style.backgroundRepeat = "repeat"
	}
	if(flames[0] == "Love"){
		document.body.style.backgroundImage = "url('images/love.webp')";
		document.body.style.backgroundRepeat = "repeat"
	}
	if(flames[0] == "Affection"){
		document.body.style.backgroundImage = "url('images/affection.jpg')";
		document.body.style.backgroundRepeat = "repeat"
	}
	if(flames[0] == "Marriage"){
		document.body.style.backgroundImage = "url('images/marriage.jpg')";
		document.body.style.backgroundRepeat = "repeat"
	}
	if(flames[0] == "Enemy"){
		document.body.style.backgroundImage = "url('images/enemy.jpg')";
		document.body.style.backgroundRepeat = "repeat"
	}
	if(flames[0] == "Siblings"){
		document.body.style.backgroundImage = "url('images/siblings.jpg')";
		document.body.style.backgroundRepeat = "repeat"
	}
}
