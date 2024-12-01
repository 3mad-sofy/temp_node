const os = require('os');
const user = os.userInfo(); 
console.log(user);

const currentOs = { 

    name: os.type(), // Returns the name of the operating system
    release: os.release(), // 	Returns information about the operating system's release
    totalMem: os.totalmem(), // Returns the number of total memory of the system
    freemem: os.freemem(), // Returns the number of free memory of the system
    uptime: os.uptime()	// Returns the uptime of the operating system, in seconds
}

console.log(currentOs);
