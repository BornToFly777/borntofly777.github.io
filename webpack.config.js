'use strict';

var tslint = {
    "rulesDirectory": [
        "node_modules/codelyzer"
    ],
    "rules": {
        "class-name": true,
        "comment-format": [true, "check-space"],
        "indent": [true, "spaces"],
        "no-duplicate-variable": true,
        "no-eval": true,
        "no-any": true,
        "no-internal-module": true,
        "no-trailing-whitespace": true,
        "no-var-keyword": true,
        "one-line": [true, "check-open-brace", "check-whitespace"],
        "semicolon": false,
        "triple-equals": [true, "allow-null-check"],
        "typedef-whitespace": [true, {
            "call-signature": "nospace",
            "index-signature": "nospace",
            "parameter": "nospace",
            "property-declaration": "nospace",
            "variable-declaration": "nospace"
        }],
        "variable-name": [true, "ban-keywords"],
        "whitespace": [true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-separator",
            "check-type"
        ],
        "directive-selector-name": [true, "camelCase"],
        "component-selector-name": [true, "kebab-case"],
        "directive-selector-type": [true, "attribute"],
        "component-selector-type": [true, "element"],
        "directive-selector-prefix": [true, "sg"],
        "use-input-property-decorator": true,
        "use-output-property-decorator": true,
        "use-host-property-decorator": true,
        "no-attribute-parameter-decorator": true,
        "no-input-rename": true,
        "no-output-rename": true,
        "no-forward-ref": true,
        "use-life-cycle-interface": true,
        "use-pipe-transform-interface": true,
        "pipe-naming": [true, "camelCase", "sg"],
        "component-class-suffix": true,
        "directive-class-suffix": true,
        "import-destructuring-spacing": true,
        "templates-use-public": true,
        "no-access-missing-member": true,
        "invoke-injectable": true
    }
}

module.exports = {
    entry: './SRC/scripts.ts',

    output: {
        path: './DIST',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    devtool: 'source-map', 

    module: {
    	loaders: [
            {
        		test: /\.ts$/,
        		exclude: /\/node_modules\//,
        		loader: 'ts'
      		}
        ],

        preLoaders: [
            { 
                test: /\.js$/, 
                loader: "source-map-loader" 
            }
        ]
    },

    tslint: tslint
}