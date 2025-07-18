module.exports = {
  hooks: {
    readPackage(pkg) {
      // Allow certain packages to run build scripts
      return pkg;
    },
  },
};
