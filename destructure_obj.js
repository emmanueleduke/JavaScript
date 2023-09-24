const personalInformation = {
	firstname: 'Sean-Emmanuel',
	lastname: 'Eduke',
	city: 'Austin',
	state: 'Texas',
	zipcode: '73301',
};

//const {firstname, lastname} =  personalInformation;

//to reassign firstname and lastname
const {firstname: fn, lastname: ln} =  personalInformation;

//console.log(`${firstname} ${lastname}`);

console.log(`${fn} ${ln}`);
