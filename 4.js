const triangle = (num)=>{
	let lim = (num*4)-2;
	let tmp="";
	for(let i=0;i<num*2;i=i+2){
		for(let j = 0 ;j<lim;j++){
			if(i===0 && j>i && j%2 && j<lim-i){
				tmp+="o";
			} else if((j===i+1 && j%2) || (j===lim-i-1 && j%2)){
				tmp+="o";
			} else {
				tmp+=" ";
			}
		}
		console.log(tmp);
		tmp="";
	}
}

triangle(6);
