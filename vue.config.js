module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/cocktails-maker/" : "/",
  transpileDependencies: ["vuetify"],
};
