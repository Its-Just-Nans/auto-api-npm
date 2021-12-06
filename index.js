const axios = require('axios');

const packageName = "csv-to-custom-json";

const job = async () => {
    // const rep = await axios.get(`https://api.npms.io/v2/package/${packageName}`);
    // rep.data.collected.npm.downloads.map(entry => {
    //     console.log(JSON.stringify(entry));
    // });
    const repLastWeek = await axios.get(`https://api.npmjs.org/downloads/point/last-week/${packageName}`);
    console.log(`Last week downloads : ${repLastWeek.data.downloads}`);
}

job();