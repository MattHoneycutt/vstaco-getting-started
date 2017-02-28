var fs = require('fs');

module.exports = function (context) {


    //VS TACO will include the current build configuration as part of the command line.
    //It will look something like this:
    //C:\Users\YOUR_USER\AppData\Roaming\Microsoft\VisualStudio\MDA\vs-npm\2.14.9\node.exe C:\Users\YOUR_USER\AppData\Roaming\npm\node_modules\vs-tac\app.js build --platform Android --configuration Debug --projectDir . --projectName IntroToCordova --npmInstallDir 
    var environment = getEnvironment(context.cmdLine);

    if (!environment) {
        console.log('Unable to determine build environment!');
        return;
    }

    var sourceFile = 'config/config.' + environment + '.js';

    fs.createReadStream(sourceFile).pipe(fs.createWriteStream('www/config.js'));
}

function getEnvironment(cmdLine) {

    var matches = /--configuration (\w+)/.exec(cmdLine);

    if (matches && matches.length > 1) {
        return matches[1];
    }

    return null;
}