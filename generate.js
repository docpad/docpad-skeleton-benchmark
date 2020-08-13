// import
const { join } = require("path");
const mkdirp = require("mkdirp");
const rimraf = require("rmfr");
const { promises: fs } = require("fs");
const getarg = require("get-cli-arg").default;

// prepare
const template = getarg("template") || "eco";
const total = Number(getarg("total") || 100);
const templatePath = join(__dirname, "templates");
const renderPath = join(__dirname, "src", "render");

// handle
async function main() {
	// read the file
	let templateSource = await fs.readFile(
		join(templatePath, "template.html." + template),
		"utf8"
	);

	// ensure path
	await rimraf(renderPath);
	await mkdirp(renderPath);
	await Promise.all(
		Array(total)
			.fill(null)
			.map(async (_, i) => {
				const templateOutPath = join(renderPath, i + ".html." + template);
				const templateOutSource = templateSource
					.toString()
					.replace(/NUMBER/g, i);
				await fs.writeFile(templateOutPath, templateOutSource);
			})
	);
}

main();
