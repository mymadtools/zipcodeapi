// netlify-functions/zipcode-proxy.js

exports.handler = async function(event, context) {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = '01H9DT3PFG6J7NTEXX4QXQHFS5';

    const zipcode = event.queryStringParameters.zipcode;
    const countryCode = event.queryStringParameters.countryCode;

    const apiUrl = `https://api.zipcodestack.com/v1/search?codes=${zipcode}&country=${countryCode}&apikey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal server error' }),
        };
    }
};
