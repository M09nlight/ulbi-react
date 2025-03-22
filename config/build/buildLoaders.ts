import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoaders';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const svgLoader = buildSvgLoader();

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
        ],
      },
    },
  };

  const cssLoader = buildCssLoader(isDev);

  // если не ts - юзаем babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
