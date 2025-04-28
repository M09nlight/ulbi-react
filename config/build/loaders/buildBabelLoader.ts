import { BuildOptions } from '../types/config';
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

export interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}
export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
  const isProd = !isDev;

  const babelLoader = {
    test: isTsx ? /\.(?:tsx|jsx)$/ : /\.(?:js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        targets: 'defaults',
        cacheDirectory: true,
        presets: [['@babel/preset-env']],
        plugins: [
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx,
            },
          ],
          isTsx &&
            isProd && [babelRemovePropsPlugin, { props: ['data-testid'] }],
          '@babel/plugin-transform-runtime',
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
  return babelLoader;
}
