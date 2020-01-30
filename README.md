# Static Slide Show Generator
This project is static slide show generator. Add a new slide. Edit the generated template with your content. Run 'npm run build'. Host the /public/build directory.

## Adding a new slide
1. In the root of the project directory, run the add-slide script: 
2. For Example: node add-slide.js my-template-name.html "my template title"
3. This will create a new template in the templates/pages/ directory, and update the slides.json config file.
4. Add your content to the generated slide template in templates/pages/.

## Building
In the root of the directory: 'npm run build'.

## Generated assets
All generated templates, styles, and javascript end up in the public/build directory.
