import express from 'express';
import cors from 'cors';
import SearchLocations from './controllers/SearchLocations.js';
import knex from 'knex';
import history from './controllers/history.js';
import clearHistory from './controllers/delete.js';


const db = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password: 'test',
		database: 'postgres'
	}
});



const app = express();
const port = 5000;


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());


const searchLocations = SearchLocations;


app.get('/', (req, res) => {
	res.send('PORT 5000');
})


app.get('/history', (req, res) => {history(req,res,db)})

app.post('/search-location', (req, res) => {searchLocations(req,res,db)});

app.delete('/clear-history', (req, res) => clearHistory(req,res,db))



app.listen(port, (err) => {
	if (err) {
		console.log(err);
	}
	console.log('Listening on port ' + port);
})




