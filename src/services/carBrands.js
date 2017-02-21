export const loadCarBrands = () => {
    return new Promise((resolve, reject) => {
        const url = 'https://car-api.firebaseio.com/rest.json';

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(new Error(`Failed HTTP request (${xhr.status})`));
                }
            }
        };
        xhr.onerror = reject;

        xhr.open('GET', url);
        xhr.send();
    });
}
