const clearHistory = (req,res, db) => {
	
	db('history').del().then(rowsDeleted => {
		res.status(200).json( { message: `${rowsDeleted} countries deleted`});
	}).catch(error => {
		res.status(400).json({error: 'An error occured while deleting'});
	})

} 


export default clearHistory;