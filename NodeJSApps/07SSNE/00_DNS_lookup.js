/*
Following example shows reading an internet domain from the console and performing a DNS lookup to find the corresponding IP address and looping for more lookups


Enter to quit.
*/

var readline = require('readline'); 
var dns = require('dns'); //domain name service
var rl = readline.createInterface(process.stdin, process.stdout); 
rl.setPrompt('ENTER DOMAIN e.g. www.scs.carleton.ca> '); 
rl.prompt(); 
rl.on('line', function(line) { 
     if (line === "") rl.close(); 
     dns.lookup(line, function(err, addresses){
       console.log(addresses);
       console.log("");
       rl.prompt(); });   
     
});
rl.on('close',function(){ process.exit(0); });
