# TypeScript Algoritmos y Estructuras de datos

## TypeScript y Jest

### Setup:

- npm init -y
- npm i jest @types/jest ts-jest typescript ts-node -D
- npx tsc --init
- Crear archivo jest.config.ts

### jest.config.ts

```javascript
module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
```

### tsconfig.ts

- Enable root dir:

```json
"rootDir": "/src"
```

### package.json

- Agregar al apartado scripts

```json
"scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "clear_cache": "jest --clearCache"
  },
```

### run

npm test

### VSCode extencions

- Jest
- TypeScript
