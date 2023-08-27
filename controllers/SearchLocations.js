import fetch from 'node-fetch';

const SearchLocations = (req, res,db) => {
  let country = req.body.country;


  // Check if country is not provided
  if (!country) {
    res.redirect('/error');
    return; // Exit the function to avoid further execution
  }

  //Check if country already exists

  db.select('*')
  .from('history')
  .where('country', country)
  .then(existingCountry => {
    if (!existingCountry.length) {

        //insert country into history
        db('history').insert({
          'country': country
        }).then()
        //end of insert

    } //end if
  })

  // Build API URL with user country
  const apiKey = '6cfc8e5361d34c22b0a170921232408';
  const baseURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}&aqi=no`;

  // Make the API call
  fetch(baseURL)
    .then(response => response.json())
    .then(data => {
      res.json({ data });
    })
    .catch(err => {
      res.redirect('/error');
    });
}

export default SearchLocations;
