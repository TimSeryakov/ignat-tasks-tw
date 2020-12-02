module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require("tailwindcss-pixel-dimensions")({
      width: {
        total: 200, // 900 is the default
      },
      height: {
        total: 200, // 900 is the default
      },
    })
  ],
  purge: {
    // Filenames to scan for classes
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './public/index.html',
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      whitelist: [
        "h-8", "h-10", "h-12", "px-10", "px-5", "pl-1",
        "bg-teal-200", "hover:bg-teal-300", "active:bg-teal-400",
        "bg-green-200", "hover:bg-green-300", "active:bg-green-400",
        "bg-red-200", "hover:bg-red-300", "active:bg-red-400",
        "bg-blue-200", "hover:bg-blue-300", "active:bg-blue-400",
        "bg-pink-200", "hover:bg-pink-300", "active:bg-pink-400",
        "bg-purple-200", "hover:bg-purple-300", "active:bg-purple-400",
        "bg-orange-200", "hover:bg-orange-300", "active:bg-orange-400",
        "bg-yellow-200", "hover:bg-yellow-300", "active:bg-yellow-400",
      ],
    },
  },
}


