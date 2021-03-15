export default {

  //
  getLabelCount(val, label_list) {

    // добавляем окончание
    let cases = [2, 0, 1, 1, 1, 2];
    let label =  label_list[ (val%100 > 4 && val%100 < 20)? 2 : cases[(val%10 < 5) ? val%10 : 5] ];

    return label;
  },

}
