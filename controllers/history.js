const history = (req, res, db) => {
	let countries = [];
  
	db.select('country')
	  .from('history')
	  .then(rows => {
		countries = rows.map(row => row.country);
		res.json(countries);
	  })
	  .catch(err => res.status(400).json('Error', err));
  };
  
  export default history;
  