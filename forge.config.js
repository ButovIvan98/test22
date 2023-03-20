module.exports = {
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "IvanButov98",
          name: "test22",
        },
        prerelease: true,
      },
    },
  ],
};
