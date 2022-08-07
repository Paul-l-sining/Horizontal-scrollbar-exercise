const key = 'VmSsMjyijv9WCpnLiJc7NwHJsGAgc9n1_-AkhC0KRwM';

export const requests = {
    getLakes: `https://api.unsplash.com/search/photos?query=lakes&per_page=20&client_id=${key}`,
    getRandom: `https://api.unsplash.com/photos/random/?client_id=${key}`
}