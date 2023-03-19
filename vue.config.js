module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/cocktail-maker/" : "/",
  transpileDependencies: ["vuetify"],
};
