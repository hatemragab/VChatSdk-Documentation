# production installation

> ### before read this first read project_settings tab 

1. create new ubuntu server and connect it as root using `ssh` 
2. copy `source/v_chat_sdk_backend` which you updated to the root of ubuntu

- install node js on ubuntu you can do by your way we need node v 14.17.1 and mongo db
- login as root using `ssh` the run the following will install node js and mongo db
```shell
sudo apt update
sudo apt install nodejs
sudo apt install npm
install nvm to update node js
sudo apt install curl 
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
source ~/.profile
nvm install 14.17.1
make sure you install node js v 14.17.1 by run node -v
now install mongo db and start it 
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
sudo apt-get install gnupg
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```
- install pm2 to run the server in production to cluster the node js `npm i -g pm2`
- open the terminal on `source/v_chat_sdk_backend/dist/src`
- and run `node app.js` if it prints your server run on port 300 and mongo db connected
- now you don't have any errors then run pm2 close current connect by press `CTRL+X` from keyboard
- run `pm2 start app.js`
- all Done now you can close the terminal
- add your public ip address to flutter vchat init <br /> [Example](https://github.com/hatemragab/v_chat_sdk/blob/a1010c4324361db726a0922710ec11012485fbc1/example/lib/main.dart#L18)