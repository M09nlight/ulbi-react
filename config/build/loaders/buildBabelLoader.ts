export function buildBabelLoader(isDev: boolean) {
  const babelLoader = {
    test: /\.(?:js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        targets: 'defaults',
        presets: [['@babel/preset-env']],
        plugins: [
          //позволяет отдельно сохранить переводы при создание нового поля в коде, создает в папке extractedTranslations
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
  return babelLoader;
}
