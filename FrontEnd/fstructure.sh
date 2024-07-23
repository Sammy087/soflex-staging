#!/bin/bash

mkdir -p src/{app,assets,environments,pages,services,theme}
touch src/index.html
touch src/main.ts
touch src/global.scss
touch config.xml  # For Cordova projects
touch capacitor.config.json  # For Ionic projects
touch package.json
touch ionic.config.json
touch README.md

echo "Frontend project structure created successfully."