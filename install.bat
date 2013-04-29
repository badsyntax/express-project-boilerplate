echo "Installing dependencies..."
npm install
bower install

echo "Building asset files..."
grunt compass
grunt uglify
grunt concat