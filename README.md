This is a node-skelleton-app providing all the necessary setup for a new node project using nativ libraries interface for c++ using the buildin "gyp".
++++++++++ 

To install your c++ module just run "npm install", just as you would to install dependencies. The "install" will invoke gyp and will then run your c++ build tool chain to build your c++ lib as a node module. 
Then you just need to "require" your module directly or via the "bindings.js" lib.

++++++++++
NOTE: you will need a build tool chain for c++, as gyp will use these. This example app was made with c-lang and make on OSX Sonoma.


++++++++++
Disclaimer: The code comes as is, I give no warranty of correctness and am not responsible for any outcome of usage what so ever, error malfuncions etc...
