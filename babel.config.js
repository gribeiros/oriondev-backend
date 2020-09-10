module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['module-resolver', {
      root: ['./src'],
      alias: {
        '@controllers': './src/controllers/*',
        '@entity': './src/database/entity/*',
        '@middlewares': './src/middlewares/*',
        '@routes': './src/routes/*',
        '@interfaces': './src/interfaces/*'

      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
