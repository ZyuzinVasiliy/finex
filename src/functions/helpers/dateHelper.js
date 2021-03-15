export default {

  formatDate(date, format = 'DD.MM.YYYY') {

    if(date != null){
      date = date.replace(/\./g, '-');
    }
    else{
      return '-';
    }

    return window.moment(date).format(format);
  },
}
