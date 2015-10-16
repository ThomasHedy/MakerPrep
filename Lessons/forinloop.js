var politicians = {
    secretary_of_state: 'hillary clinton',
    potus: 'barack obama',
    flotus: 'michelle obama',
    vice_prez: 'joe biden',
    gov_of_california: 'jerry brown'
};
string = "";
for(var key in politicians){
    string += (politicians[key]+" ");

}
console.log(string);

for (var key in politicians){
	console.log(key + " : " + politicians[key]);
}
