.PHONY: install dev build lint format check clean

install:
	npm install

dev:
	npm run dev

build:
	npm run build

lint:
	npm run lint

format:
	npm run format

check:
	npm run lint
	npm run format:check

clean:
	rm -rf dist .astro
