// const wait = (number) => {
// 	return new Promise((resolve,reject)=> {
// 		setTimeout(()=>{
// 			resolve();
// 		}, number);
// })
// };

// const message = (number) => {
// 	console.log(`It's been ${number} milliseconds`);
// }

// wait(1500).then( function() {
// 	message(1500);
// });

// wait(3000).then( () => message(3000) );

const gitKey = 'token 7200f7b35cdb82f33c02f9af799ec3bae8f2c232';
var myHeader = { 'Authorization': gitKey };
var myInit = { headers: myHeader };
var user = 'h9warren';

function gitHubEvents(user) {
	return fetch(`https://api.github.com/users/${user}/events`, myInit)
	.then( (promise) => {
		promise.json().then( (response) => {
			console.log(response);
		})
	})
};

// const getCommits = (username) => {
//       return fetch(`https://api.github.com/users/${username}/events`);
//     };
//     let githubPromise = getCommits("h9warren");
//     githubPromise.then( (promise) => {
//         promise.json().then( (response) => {
//             console.log(response);
//         })
//     } )
