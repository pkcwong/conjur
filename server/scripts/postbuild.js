const shell = require("shelljs");

shell.exec("cd ../");
shell.cp("-rf", "node_modules", "../build/server");
