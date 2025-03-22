export function buildSvgLoader() {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
  return svgLoader;
}
