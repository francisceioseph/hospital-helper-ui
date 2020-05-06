module.exports = {
  clean: {
    hLineWidth: () => 0,
    vLineWidth: () => 0,
    hLineColor: () => "transparent",
    paddingTop: () => 0,
    paddingBottom: () => 0,
    paddingLeft: (i) => (i === 0 ? 16 : 0),
    paddingRight: () => 0,
    marginBottom: () => 0,
    marginTop: () => 0,
  },
};
