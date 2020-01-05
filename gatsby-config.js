module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/static-pages`,
        name: "markdown-pages",
      }
    },
    'gatsby-transformer-remark'
  ]
}
