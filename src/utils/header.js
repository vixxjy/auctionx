
const getJwt = () => {
    return localStorage.getItem('accessToken');
};

const jwt = getJwt();

export default headers = {
    'Content-Type': 'application/json',
    'access_token': `${jwt}` 
}