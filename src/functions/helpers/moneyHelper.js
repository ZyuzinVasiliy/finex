export default {

  preparePrice(price_value){
    let result_price = 0;
    let parts = price_value.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    result_price = parts.join(".");
    if(typeof parts[1] != 'undefined'){
      if(parseInt(parts[1]) === 0){
        result_price = parts[0];
      }
    }

    return result_price;
  },
}
