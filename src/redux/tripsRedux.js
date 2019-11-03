/* SELECTORS */

export const getAllTrips = ({trips}) => trips;
export const getAllCountries = ({countries}) => countries;


export const getFilteredTrips = ({trips, filters, tags}) => {
  let output = trips;
  const result = [];

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // filter by duration
  output = output.filter(trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);

  // filter by tags
  if(filters.tags[0]){
    for(let tag in filters.tags){
      for(let ten in tags){
        if(ten === filters.tags[tag]) result.push(tags[ten].trips);
      }
    }
    //output = output.map( out => result.map( res => console.log(res., '==', out)));
    let final = []
    for(let i in output){
      let check;
      for(let j in result){
        if( 0 > result[j].indexOf(output[i].id)){
         output.splice(i,1, 'a');
        }
      }
    }
    output = output.filter(out => out !== 'a');

  }
  // TODO - sort by cost descending (most expensive goes first)
  return output;
}


export const getTripById = ({trips}, tripId) => {
  let filtered;

  const filteredById = (tripId, trips) => trips.filter( trip => tripId == trip.id );

  filtered = filteredById(tripId, trips);

  return filtered.length ? filtered : [{error: true}];
};

export const getTripsForCountry = ({trips}, countryCode) => {

  let filtered;

  const matchTrip = (trips, countryCode) => trips.filter( trip => trip.country.code == countryCode );

  filtered = matchTrip(trips, countryCode);

  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
