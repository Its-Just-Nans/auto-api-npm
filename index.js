const axios = require('axios');

const packageName = "csv-to-custom-json";

const job = async () => {
    const rep = await axios.get(`https://api.npms.io/v2/package/${packageName}`);
    rep.data.collected.npm.downloads.map(entry=>{
        console.log(JSON.stringify(entry));
    });
}

job();