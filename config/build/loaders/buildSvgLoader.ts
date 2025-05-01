export function buildSvgLoader() {
  const svgLoader = {
    test: /\.svg$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true, //replace width and height in svg by custom value
        svgoConfig: {
          plugins: [
              {
                  name: 'convertColors',
                  params: {
                      currentColor: true,
                  }
              }
          ]
      }
      },
    }],
  };
  return svgLoader;
}
