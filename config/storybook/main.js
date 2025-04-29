module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false, //disable to use storybook-addon-themes
      },
    },
    '@storybook/addon-interactions',
    // 'storybook-addon-mock/register',
    'storybook-addon-mock', //new v
    'storybook-addon-themes',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
