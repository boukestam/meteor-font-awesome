Package.describe({
  name: "boukestam:font-awesome",
  summary: "Latest version Font-Awesome loaded via CDN",
  version: "4.3.0",
  git: "https://github.com/nate-strauser/meteor-font-awesome.git"
});

Package.onUse(function (api){
  api.versionsFrom("METEOR@0.9.0");
  api.addFiles('load.js', 'client');
});
