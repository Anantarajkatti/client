module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/, // Target all JavaScript files
          exclude: /node_modules/, // Exclude node_modules folder
          use: {
            loader: 'babel-loader', // Use Babel loader for transpiling
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets for ES modules and React
            },
          },
        },
      ],
    },
  };