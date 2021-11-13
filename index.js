const colors = require("colors")

function log(string, type) {
	switch(type) {
		case "warn":
			console.log("?? ".yellow + string)
			break;
		case "error":
			console.log("!! ".red + string)
			break;
		case "status":
			console.log(":: ".blue + string)
			break;
		case "success":
			console.log("<> ".green + string)
			break;
		case "auto":
			type = "default";
			switch(string.slice(0, 2)) {
				case "??":
					type = "warn";
					break;
				case "!!":
					type = "error";
					break;
				case "::":
					type = "status";
					break;
				case "<>":
					type = "success";
					break;

			}

			log(string.slice(2, string.length).replace(/^ /g, ""), type)
			break;
		default:
			console.log(string)
	}
}

module.exports = {
	log,
	out: (str) => {log(str, "auto")},
	warn: (str) => {log(str, "warn")},
	error: (str) => {log(str, "error")},
	status: (str) => {log(str, "status")},
	success: (str) => {log(str, "success")}
}

