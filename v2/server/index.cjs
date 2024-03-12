// Script for passenger
// 

let port = process.env.PORT || '5173';
if (typeof(PhusionPassenger) !== 'undefined') {
    console.log("Configuring passenger and port")
    PhusionPassenger.configure({ autoInstall: false });
    port = 'passenger';
}
process.env.PORT = port
import("./index.mjs");