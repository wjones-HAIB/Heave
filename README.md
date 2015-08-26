# Heave
Heave is an interactive workout builder and manager

<h3>How to deploy</h3>
1. Install NodeJS
	- https://nodejs.org/download/
2. Start mongo instace
	- Create db directory in a safe place 
	> mkdir data && cd $_
	> mkdir db && cd $_
	> mongod --dbpath .
3. Ensure Ruby and Sass are installed
	> ruby -v
	> sass -v
	- Install if either are not installed
4. Build with gulp
	> gulp build
5. Start Node server
	> npm start
