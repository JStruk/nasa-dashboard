module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
    jest: {
        configure: {
            /* Any Jest configuration options: https://jestjs.io/docs/en/configuration. */
            coveragePathIgnorePatterns: [
                '<rootDir>/node_modules',
                '<rootDir>/coverage',
            ],
            collectCoverageFrom: [
                'src/**/*.{ts,tsx,js,jsx}',
                '!/node_modules/',
                '!src/index.tsx',
                '!src/react-app-env.d.ts',
            ],
        },
    },
}
