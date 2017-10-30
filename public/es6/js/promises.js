const wait = (number) => {
	return new Promise((resolve,reject)=> {
		setTimeout(()=>{
			resolve();
		}, number);
})
};

const message = (number) => {
	console.log(`It's been ${number} milliseconds`);
}

wait(1500).then( function() {
	message(1500);
});

wait(3000).then( () => message(3000) );