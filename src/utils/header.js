
const getJwt = () => {
    return localStorage.getItem('accessToken');
};

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getJwt()}` 
}

export default headers;