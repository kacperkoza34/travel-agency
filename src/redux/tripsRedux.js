/* SELECTORS */

export const getAllTrips = ({trips}) => trips;
export const getAllCountries = ({countries}) => countries;


export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration

  // TODO - filter by tags

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  let filtered;


  const filteredById = (tripId, trips) => trips.filter( trip => tripId == trip.id );


  //export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId );

  //console.log(filtredById);
  filtered = filteredById(tripId, trips);
  return filtered.length ? filtered : [{error: true}];

};

export const getTripsForCountry = ({trips}, countryCode) => {
  let filtered;
  //console.log('first arg: ', trips, 'country code:' , countryCode);


  // TODO - filter trips by countryCode

  const matchTrip = (trips, countryCode) => trips.filter( trip => trip.country.code == countryCode );

  filtered = matchTrip(trips, countryCode);
  //console.log('filtering trips by countryCode:', countryCode, filtered);
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
