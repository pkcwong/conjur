const shell = require("shelljs");

shell.exec("cd ../");
shell.rm("-rf", "../build/server");
shell.rm("-rf", "node_modules");
