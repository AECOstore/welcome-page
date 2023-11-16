const webpack = require("webpack");

module.exports = {
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
        fallback: {
            buffer: require.resolve('buffer/'),
            stream: require.resolve('stream-browserify')
        },      
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader'],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i, 
          loader: 'file-loader',
          options: {
            name: '/public/[name].[ext]'
          }
      },
      {
        test: /\.ttl$/, // Regex to match RDF files
        use: 'raw-loader', // Use raw-loader for these files
      },
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          }
        }
      ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: "process/browser",
          }),
          new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
          })
    ]
  };