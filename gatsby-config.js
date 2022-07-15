module.exports = {
  siteMetadata: {
    title: `Wayne Anthony's Barber`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
    resolve: 'gatsby-source-wordpress',
      options: {
        url: `http://wayne-anthonys-wp.local/graphql`,
      },
    }, 
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-sass", 
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Bebas Neue`,
        `Open Sans\:300,400,600` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  }]
};
   