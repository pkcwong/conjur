const shell = require("shelljs");

shell.exec("cd ../");
shell.rm("-rf", "../build/client");
shell.mkdir("-p", "../build/client");
shell.exec("react-scripts build");
shell.mv("build/*", "../build/client");
shell.rm("-rf", "build");
