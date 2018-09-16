# react-bootcamp-fa18

## Requirements
* node version 8.x
* npm version 5.x

Install node and npm [here](https://nodejs.org/en/download/).

Check if you have the correct versions by running the following commands in your terminal:
```
node -v
```
```
npm -v
```

## Setup

### What is npm

Npm stands for node package managers, meaning it helps you download and import dependencies. It does this trhough a file called package.json.

### What is package.json? 

This defines all the metadata for the project, meaning it keeps track of all your dependencies and scripts. You can autogenerate one my typing ```npm init``` in command line, and answering all the questionsx

### How do you add a startup script?
The file ```package.json``` is written in a json format, meaning there are keys and values. Look at this segment from package.json

```
...
 "scripts": {
    "start": "node src/index.js"
  },
...
```
The tag scripts defines all the scripts that are availible. Every key value pair inside defines the command that will actually be run, and the associated alias for it. 

For instance, if I type into command line...
```
npm run start
```
It will look at the package.json file, find the associated command for that script, and execute it, which in this case is ```node src/index.js```

### What is Javascript?

Cancer








