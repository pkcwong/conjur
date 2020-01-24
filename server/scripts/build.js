const shell = require("shelljs");

shell.exec("cd ../");
shell.rm("-rf", "../build/server");
shell.mkdir("-p", "../build/server");
shell.exec("babel -d \"../build/server\" --ignore node_modules . -s");
shell.cp("-rf", "node_modules", "../build/server");
