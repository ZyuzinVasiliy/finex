/**
 *
 */

export default {

  GET_PROFILE: (state) => {
    return state.PROFILE;
  },
  GET_SETTINGS: (state) => {
    return state.SETTINGS;
  },

  // SERIALIZER
  serializeData: (state) => payload => {
    let result = {};

    for(let itemKey in state.ITEM_SERIALIZER){
      if(payload.hasOwnProperty(itemKey)){
        if(state.ITEM_SERIALIZER[itemKey]['type'] === 'date'){

          let date = payload[itemKey];

          if(date == null || date === ''){
            result[state.ITEM_SERIALIZER[itemKey]['field']] = null;
            continue
          }

          let date_parsed = date.split('.')

          let d = new Date(date),
              month = '' + date_parsed[1],
              day = '' + date_parsed[0],
              year = date_parsed[2];

          if (month.length < 2)
            month = '0' + month;
          if (day.length < 2)
            day = '0' + day;

          result[state.ITEM_SERIALIZER[itemKey]['field']] = [year, month, day].join('-');

        }
        else{
          result[state.ITEM_SERIALIZER[itemKey]['field']] = payload[itemKey];
        }


      }
    }

    return result;
  },

}
