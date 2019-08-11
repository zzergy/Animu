export class RequestUtil {
 //Public method
    /**
     * Gets HTML from te server
     * @param url - the path to the HTML document
     * @param callback - function that executes after the HTML is gotten. The first parameter
     * of this function is the acquired HTML
     */
    getHTML(url, callback) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        };
        xhttp.open('get', url, true);
        xhttp.send();
    }
}