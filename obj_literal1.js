function addressMaker(address) {
	const {city, state} = address;
const newAddress = {
	city,
	state,
	country: 'united-state'
	};
	console.log(`${newAddress.city} ${newAddress.state}, ${newAddress.country}`);
}

addressMaker({city: 'Austin', state: 'Texas'});
