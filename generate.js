"use strict";

// import
const { join } = require("path");
const mkdirp = require("mkdirp");
const rimraf = require("rmfr");
const { promises: fs } = require("fs");
const getarg = require("get-cli-arg").default;

// prepare
const template = getarg("template") || "eco";
const total = Number(getarg("total") || 1000);
const templatePath = join(__dirname, "templates");
const renderPath = join(__dirname, "src", "render");
const outPath = join(__dirname, "out");

// handle
async function main() {
	// read the file
	let templateSource = await fs.readFile(
		join(templatePath, "template.html." + template),
		"utf8"
	);

	// ensure path
	await rimraf(outPath);
	await mkdirp(outPath);
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
