const Edition = require("./api/edition");

Edition.byId().then(res => console.log(res)).catch(console.log);