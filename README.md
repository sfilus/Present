# Static Slide Show Generator
This project is static slide show generator. Add a new slide. Edit the generated template with your content. Run 'npm run build'. Host the /public/build directory.

## Adding a new slide
In the root of the project directory, run the script: node add-slide.js my-template-name.html "my template title".
This will create a new template in the templates/pages/ directory, and update the slides.json config file.
Add your content to the generated slide template in templates/pages/.

## Building
In the root of the directory: 'npm run build'.

## Generated assets
All generated templates, styles, and javascript end up in the public/build directory.
