"use strict";
exports.__esModule = true;
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    console.log("registered");
    var disposable = vscode.commands.registerCommand('deletefromeditortab.delete', function (file) {
        console.log("moveFileToTrash");
        vscode.commands.executeCommand('moveFileToTrash', file.path);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
