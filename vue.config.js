const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const px2rem = require('postcss-px2rem');

module.exports = {
    publicPath: "./",
    productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
    
    devServer: {
        host: "localhost",
        port: 8080,
        proxy: {
            "/api": {
                target: "http://10.133.233.98:5000",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "",
                },
            },
        },
    },
    chainWebpack: (config) => {
        let miniCssExtractPlugin = new MiniCssExtractPlugin({
            filename: "assets/[name].[hash:8].css",
            chunkFilename: "assets/[name].[hash:8].css",
        });
        config.plugin("extract-css").use(miniCssExtractPlugin);

        // config.module
        // .rule('less')
        // // .oneOf('vue')
        // .use('px2rem-loader')
        // .loader('px2rem-loader')
        // .before('postcss-loader') // this makes it work.
        // .options({ remUnit: 1920, remPrecision: 8 })
        // .end()

    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [require('postcss-px2rem')({
                    remUnit: 1920
                })]
            }
        }
    },

    configureWebpack: (config) => {
        devtool: process.env.NODE_ENV === "development" ? "cheap-module-source-map":"";
        if (process.env.NODE_ENV === "production") {
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css/,
                        threshold: 1024, // 表示文件大小超过1kb就压缩
                        deleteOriginAssets: false, // 表示压缩后不删除源文件
                    }),
                ],
            };
        }
    }
};