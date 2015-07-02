test:
	@NODE_ENV=test \
		./node_modules/.bin/_mocha \
		--bail

test-cov:
	@NODE_ENV=test \
		./node_modules/.bin/istanbul cover \
		./node_modules/.bin/_mocha \
		-- -u exports \
		--bail

test-travis:
	@NODE_ENV=test \
		./node_modules/.bin/istanbul cover \
		./node_modules/.bin/_mocha \
		--report lcovonly \
		-- -u exports \
		--bail

.PHONY: test
