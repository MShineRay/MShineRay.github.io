var initGitalk = function(id) {
  var gitalk = new Gitalk({
    clientID: "187ca77e9ef602c818de",
    clientSecret: "f6e67959ddba9c12d2cf1f0b2f229febb61e4422",
    repo: "MShineRay.github.io",
    owner: "MShineRay",
    admin: ["MShineRay"],
    id: id || "评论",
    language: "zh-CN",
    perPage: 10,
    distractionFreeMode: false,
    pagerDirection: "last",
    createIssueManually: false
    // updateCountCallback: commentCount
  });

  gitalk.render("gitalk-container");
};
