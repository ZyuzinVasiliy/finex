/**
 * Created by XpoHo
 */

export default {

  /**
   * @return {boolean}
   */
  IsJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }

    return true
  }
}
