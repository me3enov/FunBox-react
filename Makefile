install:
	npm ci

lint:
	make install
	npx eslint .

run:
	make install
	npm start