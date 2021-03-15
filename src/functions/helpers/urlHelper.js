export default {

    parsePaginationPage(route){
        return route.query.page;
    },

    insertParam(key, value) {
        key = encodeURI(key);
        value = encodeURI(value);

        let kvp = document.location.search.substr(1).split('&');
        let i = kvp.length;
        let x;
        while (i--) {
            x = kvp[i].split('=');

            if (x[0] == key) {
                x[1] = value;
                kvp[i] = x.join('=');
                break;
            }
        }

        if (i < 0) {
            kvp[kvp.length] = [key, value].join('=');
        }

        //this will reload the page, it's likely better to store this until finished
        //document.location.search = kvp.join('&');
        let new_url = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + kvp.join('&');
        window.history.pushState({path: new_url}, '', new_url);
    },
    removeParam(key, flag_force = false) {
        key = encodeURI(key);

        let kvp = document.location.search.substr(1).split('&');
        if(flag_force === true){
            kvp = [];
        }
        else{
            let i = kvp.length;
            let x;
            while (i--) {
                x = kvp[i].split('=');

                if (x[0] == key) {
                    kvp[i] = '';
                    break;
                }
            }

            if (i < 0) {
                kvp[kvp.length] = '';
            }
        }

        //this will reload the page, it's likely better to store this until finished
        //document.location.search = kvp.join('&');
        let new_url = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + kvp.join('&');
        window.history.pushState({path: new_url}, '', new_url);
    },

    parseQueryParam(page = null) {
        let queryParams = {};
        if (page !== undefined && page != null) {
            queryParams = {
                page: page
            }
        }

        return queryParams;
    },

}
