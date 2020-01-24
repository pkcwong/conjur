const shell = require("shelljs");

shell.exec("cd ../");
shell.rm("-rf", "../build/client");
shell.rm("-rf", "node_modules");
