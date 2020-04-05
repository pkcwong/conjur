const shell = require("shelljs");

shell.exec("cd ../");
shell.rm("-rf", "../build/server");
shell.mkdir("-p", "../build/server");
