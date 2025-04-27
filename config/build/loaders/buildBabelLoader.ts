import { BuildOptions } from '../types/config';
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}
export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
  const babelLoader = {
    test: isTsx ? /\.(?:tsx|jsx)$/ : /\.(?:js|ts)$/,
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
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx,
            },
          ],
          isTsx && [babelRemovePropsPlugin, { props: ['data-testid'] }],
          '@babel/plugin-transform-runtime',
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
  return babelLoader;
}
