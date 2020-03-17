module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ico$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    }
};