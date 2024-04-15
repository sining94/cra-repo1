const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
      '@common': path.resolve(__dirname, 'src/components/common'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@stores': path.resolve(__dirname, 'src/stores'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
};
