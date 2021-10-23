const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const util = require('util');
const app = express();
const port = 8080;

//https://www.dotnetcurry.com/devops/1486/azure-devops-build-deploy-nodejs

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/hello',  function(req, res) {
	try {
		res.status(200).send("Hello World!");
	} catch (error){
		console.log(`Caught an error in POST at ${time}: ${error}`);
		res.status(500).send(`Internal server error at: ${time}`)
	}
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
