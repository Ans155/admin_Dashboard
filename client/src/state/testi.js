
const axios=require("axios");
const url = 'https://jsonmock.hackerrank.com/api/asteroids';

async function getResponse()
{
    let response=await axios.get('https://jsonmock.hackerrank.com/api/asteroids');
    console.log(response);
}