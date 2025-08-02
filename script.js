function makeid(l) {
  // write your code here

	let char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let ans = "";
	for(let i = 0; i < l; i++){
		ans += char_list[Math.floor(Math.random()*char_list.length)];
	}

	return ans;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
