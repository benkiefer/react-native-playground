module.exports = {
    preset: '@testing-library/react-native',
    setupFilesAfterEnv: [
        './jest.setup.js',
        '@testing-library/react-native/cleanup-after-each',
    ],
};