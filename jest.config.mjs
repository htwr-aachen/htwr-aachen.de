import nextJest from "next/jest";

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
});

const customJestConfig = {
	moduleNameMapper: {
		// Handle module aliases (this will be automatically configured for you soon)
		"^@/(.*)$": "<rootDir>/src/$1",

		"^@/public/(.*)$": "<rootDir>/public/$1",
	},
	setupFilesAfterEnv: ["./jest.setup.ts"],
	clearMocks: true,
	collectCoverage: false, // for now
	collectCoverageFrom: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"!./src/**/_*.{js,jsx,ts,tsx}",
		"!**/*.d.ts",
		"!**/node_modules/**",
	],
	coverageThreshold: {
		global: {
			branches: 0,
			functions: 0,
			lines: 0,
			statements: 0,
		},
	},
	testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(customJestConfig);
