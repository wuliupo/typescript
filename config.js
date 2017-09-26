var CONFIG = {
  // index page
  index: "README.md",

  // sidebar file
  sidebar_file: "SUMMARY.md",

  // where the docs are actually stored on github - so you can edit
  base_url: "https://github.com/wuliupo/TypeScript/edit/master",
  git_url: "https://github.com/wuliupo/TypeScript",
};

// **************************
// DON'T EDIT FOLLOWING CODES
// **************************

addConfig(ditto, CONFIG);

function addConfig(obj, conf) {
  Object.keys(conf).forEach(function (key) {
    obj[key] = conf[key];
  });
}

