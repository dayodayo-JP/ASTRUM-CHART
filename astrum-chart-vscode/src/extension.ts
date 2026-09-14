// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const panel = vscode.window.createWebviewPanel(
		'ASTRUM-CHART',
		'ASTRUM-CHART',
		vscode.ViewColumn.One,
		{}
	);
	context.subscriptions.push(panel);
	panel.webview.html = getHTML();

}

function getHTML() {
	return `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>hogehoge</title>
	</head>
	<body>
		<h1>hogehoge</h1>
	</body>
	</html>`;
}

// This method is called when your extension is deactivated
export function deactivate() {}
