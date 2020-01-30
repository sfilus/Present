const fs = require("fs");

if(process.argv.length < 4) {
  console.error("You must pass a template name and title to add-slide.");
  process.exit(1);
} else if(process.argv.length > 4) {
  console.error("add-slide only accepts two arguments (template name and template title).");
  process.exit(1);
}

let templateName = process.argv[2];
let templateTitle = process.argv[3];
let buildTemplateName = templateName;
const slidesJson = JSON.parse(fs.readFileSync(__dirname + "/slides.json", "utf8"));
if(slidesJson.pages.length === 0) {
  buildTemplateName = "index.html";
}
let newPage = {
  "template": templateName,
  "buildTemplate": buildTemplateName,
  "title": templateTitle
};

slidesJson.pages.push(newPage);

fs.copyFileSync(__dirname + "/new-page-template.html", __dirname + "/templates/pages/" + templateName);
console.log("Created new file: /templates/pages" + templateName);

fs.writeFileSync(__dirname + "/slides.json", JSON.stringify(slidesJson, null, "\t"));
console.log("slides.json updated with new page: ", newPage);