module.exports = {
    sourceMaps: "inline",
    presets: [
        [
            "@babel/preset-env",
            {
                targets: [
                    "last 2 Chrome versions",
                    "last 2 Firefox versions",
                    "last 2 Safari versions",
                    "last 2 Edge versions",
                ],
            },
        ],
        ["@babel/preset-typescript", { allowDeclareFields: true }],
        "@babel/preset-react",
    ],
    plugins: [
        ["@babel/plugin-transform-typescript", { allowDeclareFields: true }],
        "@babel/plugin-proposal-export-default-from",
        "@babel/plugin-proposal-numeric-separator",
        "@babel/plugin-transform-class-properties",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-private-methods",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-transform-runtime",
    ],
};
