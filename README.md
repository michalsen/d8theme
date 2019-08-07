# sndev_d8
Straight North starter Drupal 8 theme

## Getting Started
There are a few steps you'll need to follow in order to effectively and efficiently build a Drupal 8 site using this theme.

### Development Mode
Follow the steps detailed here: https://www.drupal.org/node/2598914 to switch your site into development mode. If you fail to do this, changes to your twig files will be ignored and you'll get angry.

As part of this you'll need to install Drupal Console: https://hechoendrupal.gitbooks.io/drupal-console/content/en/index.html as detailed in the above instructions. Drupal Console will need to be installed for each local Drupal 8 site.

### Install Yarn and Node if necessary
This part assumes you already have Node installed. If you're not sure you can check by running 'which node' in your console. It should return '/usr/local/bin/node'. If you don't have Node installed, you may install both Node and Yarn simultaneously by running 'brew install yarn'.

If you do have Node but don't have Yarn ('which yarn' will let you know if you're not sure) you will need to do so by running: 'brew install yarn --without-node'.

### Install Node Dependencies
Open the 'sndev\_d8' theme in your console. Run 'yarn'. This will load all of the required node modules in the 'node_modules' directory (which will be ignored by git as you don't want to push these).

### Create an '.env' file
Copy the '.env.example' file and rename it to '.env'. Replace the "d8theme.dd:8083" with your local environment URL. This URL will be used for the proxy server. (This file will also be ignored by git as it is exclusive per environment).

### Start watching for changes
You are now ready to run 'yarn watch' in the console. This will launch a proxy server 'localhost:3000' (most likely). Any changes to make to: .scss, .js or .twig files will trigger browserSync to reload the browser. If you notice the browser reloading but don't see your changes reflected, try doing a hard refresh (hold SHIFT while refreshing). Your changes should be seen almost immediately upon changing files going forward.

### Notes
A few things of worth noting...

This installation does NOT use Compass (which we've been using up to this point). The main reason I decided to not use Compass is because it's slow and it doesn't really offer anything worthwhile that we can't get from Node packages. Using a combination of 'gulp-sass', 'gulp-autoprefixer' and 'browserSync' has proven to be super fast and convenient.

I've included a '\_page.html.twig' file for reference. Most of the twig related stuff used here can be found:

https://www.drupal.org/docs/8/modules/twig-tweak/cheat-sheet-8x-2x

https://alvinalexander.com/source-code/drupal-8how-write-if-then-elseif-drupal8-twig-templates
