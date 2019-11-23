// selectors
export const getOrder = ({order}) => order;
export const getOrderOptions = (state, props) => {
  /* FIND TRIP ID */
  const tripId = props.match.params.id;
  /* ADD TRIP ID */
  state.order.options["tripId"] = tripId;

  let countryCode;

  /* FIND COUNTRY CODE */
  for(let country in state.countries){
    state.countries[country].trips.map(arg => {
      if(arg == tripId) countryCode = country;
    });
  }

  /* ADD COUNTRY CODE */

  state.order.options["countryCode"] = countryCode;

  const result = state.order.options;


  return result;
}

// action name creator
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_OPTION = createActionName('SET_OPTION');

// action creators
export const setOrderOption = payload => ({ payload, type: SET_OPTION });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_OPTION:
      return {
        ...statePart,
        options: {
          ...statePart.options,
          ...action.payload,
        },
      };
    default:
      return statePart;
  }
}
