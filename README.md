# Dashboard

[![Build Status](https://travis-ci.org/clirdlf/dashboard.svg?branch=master)](https://travis-ci.org/clirdlf/dashboard)

Dashboard for DLF Groups

## Installation
Dependencies:

  * ImageMagick: `$ brew install imagemagick`
  * Ruby gems: `$ bundle`
  * Node dependencies `$ npm install`

## Development

To launch the web server, launch the default `gulp` task:

`$ gulp`

## Defining projects

Projects are defined in `_data/projects.yml`. The `image` key should be just the file basename, not the full path.

> NOTE: If you have an 800x400 image (a long image), be sure to add the `sizes` key of "col-sm-12 col-md-6", or it will render the long tile as `400x200`.

## Adding projects

Go to `_data/projects.yml`.

- name:
  image:
  url:
  description:
  groups:
    - find group categories at `_includes/sidebar.html`.

## Resizing Images

* Download the image you want from where ever and place it in the appropriate in `/images/projects/originals`. There are three sizes:

  - 400x400: Square images
  - 400x800: Long images
  - 800x400: Tall images

* Run the `gulp resize` task to generate all the images for the templates
* Run the `gulp imagemin` task to optimize the images for the web (this will take a while)

## Testing

This will run through TravisCI, but you can test before pushing by running `script/cibuild`.
