export default { 
    testEnvironment: 'jsdom', 
    testMatch: [ 
        '**/__test__/**/*.[jt]s?(x)', 
        '**?(*.)+(spec|test|tests).[tj]s?(x)',
    ], 
    setupFilesAAfterEnv: ['<rootDir>/jest.setup.js']
}