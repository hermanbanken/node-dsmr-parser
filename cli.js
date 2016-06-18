const parser = require('./index')

var stdin = process.stdin,
    stdout = process.stdout,
    data = "";

stdin.resume();
stdin.setEncoding('utf8');

function handle(packet) {
	stdout.write(JSON.stringify(parser.parse(packet), null, '  ')+"\n");
}

stdin.on('data', function (chunk) {
	data += chunk;
	var index = data.indexOf("\n!");
	while(index >= 0) {
		handle(data.substr(0, index + 6));
		data = data.substr(index + 6);
		index = data.indexOf("\n!");
	}
});

stdin.on('end', function () {
	handle(data);
	data = "";
});