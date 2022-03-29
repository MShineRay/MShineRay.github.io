import { _ as _export_sfc, d as defineComponent, r as ref, g as computed, o as openBlock, c as createElementBlock, a as createBaseVNode, w as withDirectives, v as vModelText, F as Fragment, b as renderList, u as unref, t as toDisplayString, e as createCommentVNode, p as pushScopeId, h as popScopeId, f as createVNode } from "./app.32af2762.js";
const data = JSON.parse('[{"text":"\u8BFB\u4E66","type":"/read-notes/weread/","items":[{"text":"\u5E73\u5747\u5206","link":"/read-notes/weread/pingjunfen"},{"text":"\u6C38\u4E45\u8BB0\u5F55","link":"/read-notes/weread/yongjiujilu"},{"text":"\u4EBA\u751F\u5982\u6211","link":"/read-notes/weread/renshengyouwo"},{"text":"\u5BCC\u5170\u514B\u6797\u81EA\u4F20","link":"/read-notes/weread/fulankelinzichuan"},{"text":"\u97ED\u83DC\u7684\u81EA\u6211\u4FEE\u517B","link":"/read-notes/weread/jiucaideziwoxiuyang"},{"text":"\u5927\u578B\u7F51\u7AD9\u6027\u80FD\u4F18\u5316\u5B9E\u6218\uFF1A\u4ECE\u524D\u7AEF\u3001\u7F51\u7EDC\u3001CDN\u5230\u540E\u7AEF\u3001\u5927\u4FC3\u7684\u5168\u94FE\u8DEF\u6027\u80FD\u4F18\u5316\u8BE6\u89E3","link":"/read-notes/weread/daxingwangzhanxingnengyouhuashizhan"},{"text":"\u4FDD\u6301\u9965\u6E34\uFF1A\u4E0D\u65AD\u83B7\u53D6\u65B0\u77E5\u8BC6\uFF0C\u5347\u7EA7\u5E95\u5C42\u64CD\u4F5C\u80FD\u529B","link":"/read-notes/weread/baochijike"},{"text":"\u5C0F\u72D7\u94B1\u94B12","link":"/read-notes/weread/xiaogouqianqian2"},{"text":"\u4E09\u5341\u5C81\uFF0C\u4E00\u5207\u521A\u521A\u5F00\u59CB","link":"/read-notes/weread/sanshisuiyiqieganggangkaishi"},{"text":"\u5FB7\u7C73\u5B89\uFF1A\u5F77\u5FA8\u5C11\u5E74\u65F6","link":"/read-notes/weread/demianpanghuangshaonianshi"},{"text":"\u5F71\u54CD\u4E16\u754C\u7684\u4E2D\u56FD\u690D\u7269","link":"/read-notes/weread/yingxiangshijiedezhongguozhiwu"},{"text":"\u95ED\u73AF\u601D\u7EF4","link":"/read-notes/weread/bihuansiwei"},{"text":"\u6211\u662F\u600E\u4E48\u5272\u97ED\u83DC\u7684\uFF1A\u4E00\u4E2A\u9A97\u5B50\u7684\u6094\u8FC7\u4E0E\u81EA\u767D","link":"/read-notes/weread/woshizenmogejiucaide"},{"text":"\u5B8B\u6C0F\u4E09\u59D0\u59B9","link":"/read-notes/weread/songshisanjiemei"},{"text":"\u597D\u70B9\u5B50\u90FD\u662F\u5077\u6765\u7684\uFF1A\u53F2\u4E0A\u6700\u611F\u6027\u768460\u5802\u521B\u65B0\u8BFE","link":"/read-notes/weread/haodianzidushitoulaide"},{"text":"\u738B\u6C38\u5E86\u5168\u4F20","link":"/read-notes/weread/wangyongqingquanchuan"},{"text":"Web\u5168\u6808\u5DE5\u7A0B\u5E08\u7684\u81EA\u6211\u4FEE\u517B","link":"/read-notes/weread/Webquanzhangongchengshideziwoxiuyang"},{"text":"\u5199\u7ED9\u6240\u6709\u4EBA\u7684\u7F16\u7A0B\u601D\u7EF4","link":"/read-notes/weread/xiegeisuoyourendebianchengsiwei"},{"text":"\u524D\u7AEF\u5DE5\u7A0B\u5316\uFF1A\u4F53\u7CFB\u8BBE\u8BA1\u4E0E\u5B9E\u8DF5","link":"/read-notes/weread/qianduangongchenghuatixishejiyushijian"},{"text":"\u4EE3\u7801\u7CBE\u8FDB\u4E4B\u8DEF\uFF1A\u4ECE\u7801\u519C\u5230\u5DE5\u5320","link":"/read-notes/weread/daimajingjinzhilucongmanongdaogongjiang"},{"text":"\u4E00\u5F80\u65E0\u524D\uFF1A\u5C0F\u7C73\u5341\u5468\u5E74 \u96F7\u519B\u516C\u5F00\u6F14\u8BB2\u5168\u6587","link":"/read-notes/weread/yiwangwuqianxiaomishizhounian"},{"text":"\u534A\u5C0F\u65F6\u6F2B\u753B\u4E2D\u56FD\u54F2\u5B66\u53F2","link":"/read-notes/weread/banxiaoshimanhuazhongguozhexueshi"},{"text":"\u56FE\u8BF4\u4E16\u754C\u683C\u5C40","link":"/read-notes/weread/tushuoshijiegeju"},{"text":"\u5BCC\u4EBA\u7684\u903B\u8F91\uFF1A\u5982\u4F55\u521B\u9020\u8D22\u5BCC\uFF0C\u5982\u4F55\u4FDD\u6709\u8D22\u5BCC","link":"/read-notes/weread/furendeluojiruhechuangzaocaifu"},{"text":"\u534A\u5C0F\u65F6\u6F2B\u753B\u7ECF\u6D4E\u5B66\u7CFB\u5217\uFF08\u51714\u518C\uFF09\uFF08\u72EC\u5BB6\u5B9A\u5236\u7248\uFF09","link":"/read-notes/weread/banxiaoshimanhuajingjixuexilie"},{"text":"\u6211\u4E0D\u8981\u4F60\u6B7B\u4E8E\u4E00\u4E8B\u65E0\u6210\uFF1A\u7ED9\u5973\u513F\u768417\u5C01\u544A\u522B\u4FE1","link":"/read-notes/weread/wobuyaonisiyuyishiwuchenggeinverde17fenggaobiexin"},{"text":"\u625B\u4F4F\u5C31\u662F\u672C\u4E8B","link":"/read-notes/weread/kangzhujiushibenshi"},{"text":"GitHub\u5165\u95E8\u4E0E\u5B9E\u8DF5","link":"/read-notes/weread/gitHubrumenyushijian"},{"text":"\u65AD\u820D\u79BB","link":"/read-notes/weread/duansheli"},{"text":"\u5BCC\u7238\u723821\u4E16\u7EAA\u7684\u751F\u610F","link":"/read-notes/weread/fubaba21shijideshengyi"},{"text":"\u667A\u80FD\u4E3B\u4E49\uFF1A\u672A\u6765\u5546\u4E1A\u4E0E\u793E\u4F1A\u7684\u65B0\u751F\u6001","link":"/read-notes/weread/zhinengzhuyiweilaishangyeyushehuidexinshengtai"},{"text":"\u5E78\u798F\u4E86\u5417\uFF1F","link":"/read-notes/weread/xingfulema"},{"text":"\u6D41\u8840\u7684\u80A1\u5E02","link":"/read-notes/weread/liuxiedegushi"},{"text":"\u667A\u80FD\u5316\u6D6A\u6F6E\uFF1A\u6B63\u5728\u7206\u53D1\u7684\u7B2C\u56DB\u6B21\u5DE5\u4E1A\u9769\u547D","link":"/read-notes/weread/zhinenghualangchaozhengzaibaofadedisicigongyegeming"},{"text":"\u8BA9\u65F6\u95F4\u966A\u4F60\u6162\u6162\u53D8\u5BCC","link":"/read-notes/weread/rangshijianpeinimanmanbianfu"},{"text":"\u8F93\u8D62","link":"/read-notes/weread/shuying"},{"text":"\u8C37\u6B4C\u7684\u6545\u4E8B","link":"/read-notes/weread/gugedegushi"},{"text":"\u6C83\u5179\u4F20\uFF1A\u4E0E\u82F9\u679C\u4E00\u8D77\u75AF\u72C2","link":"/read-notes/weread/wozichuanyupingguoyiqifengkuang"},{"text":"\u603B\u88C1\u768466\u6761\u5546\u4E1A\u601D\u7EF4","link":"/read-notes/weread/zongcaide66tiaoshangyesiwei"},{"text":"Web\u6D4B\u8BD5\u56E7\u4E8B","link":"/read-notes/weread/Webceshijiongshi"},{"text":"UI\u8BBE\u8BA1\u7CBE\u54C1\u5FC5\u4FEE\u8BFE","link":"/read-notes/weread/UIshejijingpinbixiuke"}]}]');
var bookListJson = [
  {
    bookImg: "pingjunfen/written.jpg",
    author: "\u5EB7\u8F89",
    bookName: "\u5E73\u5747\u5206",
    label: "\u5176\u4ED6",
    labelEN: "other",
    bookUrl: "/weread/pingjunfen"
  },
  {
    bookImg: "yongjiujilu/written.jpg",
    author: "\u7231\u5FB7\u534E\xB7\u65AF\u8BFA\u767B",
    bookName: "\u6C38\u4E45\u8BB0\u5F55",
    label: "\u4EBA\u7269\u4F20\u8BB0",
    labelEN: "biography",
    bookUrl: "/weread/yongjiujilu"
  },
  {
    bookImg: "renshengyouwo/written.jpg",
    author: "\u6885\u8036.\u9A6C\u65AF\u514B",
    bookName: "\u4EBA\u751F\u5982\u6211",
    bookUrl: "/weread/renshengyouwo"
  },
  {
    bookImg: "fulankelinzichuan/written.jpg",
    author: "\u5BCC\u5170\u514B\u6797",
    bookName: "\u5BCC\u5170\u514B\u6797\u81EA\u4F20",
    label: "\u4EBA\u7269\u4F20\u8BB0",
    labelEN: "biography",
    bookUrl: "/weread/fulankelinzichuan"
  },
  {
    bookImg: "jiucaideziwoxiuyang/written.jpg",
    author: "\u674E\u7B11\u6765",
    bookName: "\u97ED\u83DC\u7684\u81EA\u6211\u4FEE\u517B",
    bookUrl: "/weread/jiucaideziwoxiuyang"
  },
  {
    bookImg: "daxingwangzhanxingnengyouhuashizhan/ritten.jpg",
    author: "\u5468\u6D9B\u660E \u5F20\u8363\u534E \u5F20\u65B0\u5175",
    bookName: "\u5927\u578B\u7F51\u7AD9\u6027\u80FD\u4F18\u5316\u5B9E\u6218\uFF1A\u4ECE\u524D\u7AEF\u3001\u7F51\u7EDC\u3001CDN\u5230\u540E\u7AEF\u3001\u5927\u4FC3\u7684\u5168\u94FE\u8DEF\u6027\u80FD\u4F18\u5316\u8BE6\u89E3",
    bookUrl: "/weread/daxingwangzhanxingnengyouhuashizhan"
  },
  {
    bookImg: "baochijike/written.jpg",
    author: "Thinkers50",
    bookName: "\u4FDD\u6301\u9965\u6E34\uFF1A\u4E0D\u65AD\u83B7\u53D6\u65B0\u77E5\u8BC6\uFF0C\u5347\u7EA7\u5E95\u5C42\u64CD\u4F5C\u80FD\u529B",
    bookUrl: "/weread/baochijike"
  },
  {
    bookImg: "xiaogouqianqian2/written.jpg",
    author: "\u535A\u591A\xB7\u820D\u8D39\u5C14",
    bookName: "\u5C0F\u72D7\u94B1\u94B12",
    bookUrl: "/weread/xiaogouqianqian2"
  },
  {
    bookImg: "sanshisuiyiqieganggangkaishi/written.jpg",
    author: "\u674E\u5C1A\u9F99",
    bookName: "\u4E09\u5341\u5C81\uFF0C\u4E00\u5207\u521A\u521A\u5F00\u59CB",
    bookUrl: "/weread/sanshisuiyiqieganggangkaishi"
  },
  {
    bookImg: "demianpanghuangshaonianshi/written.jpg",
    author: "\u8D6B\u5C14\u66FC\xB7\u9ED1\u585E",
    bookName: "\u5FB7\u7C73\u5B89\uFF1A\u5F77\u5FA8\u5C11\u5E74\u65F6",
    bookUrl: "/weread/demianpanghuangshaonianshi"
  },
  {
    bookImg: "yingxiangshijiedezhongguozhiwu/written.jpg",
    author: "\u300A\u5F71\u54CD\u4E16\u754C\u7684\u4E2D\u56FD\u690D\u7269\u300B\u4E3B\u521B\u56E2\u961F",
    bookName: "\u5F71\u54CD\u4E16\u754C\u7684\u4E2D\u56FD\u690D\u7269",
    bookUrl: "/weread/yingxiangshijiedezhongguozhiwu"
  },
  {
    bookImg: "bihuansiwei/written.jpg",
    author: "\u667A\u4FCA\u542F",
    bookName: "\u95ED\u73AF\u601D\u7EF4",
    bookUrl: "/weread/bihuansiwei"
  },
  {
    bookImg: "woshizenmogejiucaide/written.jpg",
    author: "\u67E5\u5C14\u65AF\xB7\u5E9E\u5179",
    bookName: "\u6211\u662F\u600E\u4E48\u5272\u97ED\u83DC\u7684\uFF1A\u4E00\u4E2A\u9A97\u5B50\u7684\u6094\u8FC7\u4E0E\u81EA\u767D",
    bookUrl: "/weread/woshizenmogejiucaide"
  },
  {
    bookImg: "songshisanjiemei/written.jpg",
    author: "\u9648\u5EF7\u4E00",
    bookName: "\u5B8B\u6C0F\u4E09\u59D0\u59B9",
    bookUrl: "/weread/songshisanjiemei"
  },
  {
    bookImg: "haodianzidushitoulaide/written.jpg",
    author: "\u6770\u592B\xB7\u6234\u7EF4\u68EE",
    bookName: "\u597D\u70B9\u5B50\u90FD\u662F\u5077\u6765\u7684\uFF1A\u53F2\u4E0A\u6700\u611F\u6027\u768460\u5802\u521B\u65B0\u8BFE",
    bookUrl: "/weread/haodianzidushitoulaide"
  },
  {
    bookImg: "wangyongqingquanchuan/written.jpg",
    author: "\u53CC\u6839\u7F16\u8457",
    bookName: "\u738B\u6C38\u5E86\u5168\u4F20",
    label: "\u4EBA\u7269\u4F20\u8BB0",
    labelEN: "biography",
    bookUrl: "/weread/wangyongqingquanchuan"
  },
  {
    bookImg: "Webquanzhangongchengshideziwoxiuyang/written.jpg",
    author: "\u4F59\u679C",
    bookName: "Web\u5168\u6808\u5DE5\u7A0B\u5E08\u7684\u81EA\u6211\u4FEE\u517B",
    bookUrl: "/weread/Webquanzhangongchengshideziwoxiuyang"
  },
  {
    bookImg: "xiegeisuoyourendebianchengsiwei/written.jpg",
    author: "\u5409\u59C6\xB7\u514B\u91CC\u65AF\u8482\u5B89",
    bookName: "\u5199\u7ED9\u6240\u6709\u4EBA\u7684\u7F16\u7A0B\u601D\u7EF4",
    bookUrl: "/weread/xiegeisuoyourendebianchengsiwei"
  },
  {
    bookImg: "qianduangongchenghuatixishejiyushijian/written.jpg",
    author: "\u5468\u4FCA\u9E4F",
    bookName: "\u524D\u7AEF\u5DE5\u7A0B\u5316\uFF1A\u4F53\u7CFB\u8BBE\u8BA1\u4E0E\u5B9E\u8DF5",
    bookUrl: "/weread/qianduangongchenghuatixishejiyushijian"
  },
  {
    bookImg: "daimajingjinzhilucongmanongdaogongjiang/written.jpg",
    author: "\u5F20\u5EFA\u98DE",
    bookName: "\u4EE3\u7801\u7CBE\u8FDB\u4E4B\u8DEF\uFF1A\u4ECE\u7801\u519C\u5230\u5DE5\u5320",
    bookUrl: "/weread/daimajingjinzhilucongmanongdaogongjiang"
  },
  {
    bookImg: "yiwangwuqianxiaomishizhounian/written.jpg",
    author: "\u96F7\u519B",
    bookName: "\u4E00\u5F80\u65E0\u524D\uFF1A\u5C0F\u7C73\u5341\u5468\u5E74 \u96F7\u519B\u516C\u5F00\u6F14\u8BB2\u5168\u6587",
    bookUrl: "/weread/yiwangwuqianxiaomishizhounian"
  },
  {
    bookImg: "banxiaoshimanhuazhongguozhexueshi/written.jpg",
    author: "\u9648\u78CA\xB7\u534A\u5C0F\u65F6\u6F2B\u753B\u56E2\u961F",
    bookName: "\u534A\u5C0F\u65F6\u6F2B\u753B\u4E2D\u56FD\u54F2\u5B66\u53F2",
    bookUrl: "/weread/banxiaoshimanhuazhongguozhexueshi"
  },
  {
    bookImg: "tushuoshijiegeju/written.jpg",
    author: "\u738B\u4F1F",
    bookName: "\u56FE\u8BF4\u4E16\u754C\u683C\u5C40",
    bookUrl: "/weread/tushuoshijiegeju"
  },
  {
    bookImg: "furendeluojiruhechuangzaocaifu/written.jpg",
    author: "\u96F7\u7EB3\xB7\u9F50\u7279\u5C14\u66FC",
    bookName: "\u5BCC\u4EBA\u7684\u903B\u8F91\uFF1A\u5982\u4F55\u521B\u9020\u8D22\u5BCC\uFF0C\u5982\u4F55\u4FDD\u6709\u8D22\u5BCC",
    bookUrl: "/weread/furendeluojiruhechuangzaocaifu"
  },
  {
    bookImg: "banxiaoshimanhuajingjixuexilie/written.jpg",
    author: "\u9648\u78CA\xB7\u534A\u5C0F\u65F6\u6F2B\u753B\u56E2\u961F",
    bookName: "\u534A\u5C0F\u65F6\u6F2B\u753B\u7ECF\u6D4E\u5B66\u7CFB\u5217\uFF08\u51714\u518C\uFF09\uFF08\u72EC\u5BB6\u5B9A\u5236\u7248\uFF09",
    bookUrl: "/weread/banxiaoshimanhuajingjixuexilie"
  },
  {
    bookImg: "wobuyaonisiyuyishiwuchenggeinverde17fenggaobiexin/written.jpg",
    author: "\u6CD5\u9F50\u5A05\xB7kName",
    bookName: "\u6211\u4E0D\u8981\u4F60\u6B7B\u4E8E\u4E00\u4E8B\u65E0\u6210\uFF1A\u7ED9\u5973\u513F\u768417\u5C01\u544A\u522B\u4FE1",
    bookUrl: "/weread/wobuyaonisiyuyishiwuchenggeinverde17fenggaobiexin"
  },
  {
    bookImg: "kangzhujiushibenshi/written.jpg",
    bookName: "\u625B\u4F4F\u5C31\u662F\u672C\u4E8B",
    author: "\u51AF\u4ED1",
    bookUrl: "/weread/kangzhujiushibenshi"
  },
  {
    bookImg: "GitHubrumenyushijian/written.jpg",
    author: "\u5927\u585A\u5F18\u8BB0",
    bookName: "GitHub\u5165\u95E8\u4E0E\u5B9E\u8DF5",
    bookUrl: "/weread/gitHubrumenyushijian"
  },
  {
    bookImg: "duansheli/written.jpg",
    author: "\u5C71\u4E0B\u82F1\u5B50",
    bookName: "\u65AD\u820D\u79BB",
    bookUrl: "/weread/duansheli"
  },
  {
    bookImg: "fubaba21shijideshengyi/written.jpg",
    author: "\u7F57\u4F2F\u7279\xB7\u6E05\u5D0E \u7EA6\u7FF0\xB7\u5F17\u83B1\u660E \u91D1\xB7\u6E05\u5D0E",
    bookName: "\u5BCC\u7238\u723821\u4E16\u7EAA\u7684\u751F\u610F",
    bookUrl: "/weread/fubaba21shijideshengyi"
  },
  {
    bookImg: "zhinengzhuyiweilaiyushehuidexinshengtai/written.jpg",
    author: "\u5468\u9E3F\u794E",
    bookName: "\u667A\u80FD\u4E3B\u4E49\uFF1A\u672A\u6765\u5546\u4E1A\u4E0E\u793E\u4F1A\u7684\u65B0\u751F\u6001",
    bookUrl: "/weread/zhinengzhuyiweilaishangyeyushehuidexinshengtai"
  },
  {
    bookImg: "xingfulema/written.jpg",
    author: "\u767D\u5CA9\u677E",
    bookName: "\u5E78\u798F\u4E86\u5417\uFF1F",
    label: "\u4EBA\u7269\u4F20\u8BB0",
    labelEN: "biography",
    bookUrl: "/weread/xingfulema"
  },
  {
    bookImg: "liuxiedegushi/written.jpg",
    author: "\u5357\u4FA0",
    bookName: "\u6D41\u8840\u7684\u80A1\u5E02",
    bookUrl: "/weread/liuxiedegushi"
  },
  {
    bookImg: "zhinenghualangchaozhengzaibaofadedisicigongyegeming/written.jpg",
    author: "\u5F20\u6C5F\u5065",
    bookName: "\u667A\u80FD\u5316\u6D6A\u6F6E\uFF1A\u6B63\u5728\u7206\u53D1\u7684\u7B2C\u56DB\u6B21\u5DE5\u4E1A\u9769\u547D",
    bookUrl: "/weread/zhinenghualangchaozhengzaibaofadedisicigongyegeming"
  },
  {
    bookImg: "rangshijianpeinimanmanbianfu/written.jpg",
    author: "\u674E\u7B11\u6765",
    bookName: "\u8BA9\u65F6\u95F4\u966A\u4F60\u6162\u6162\u53D8\u5BCC",
    bookUrl: "/weread/rangshijianpeinimanmanbianfu"
  },
  {
    bookImg: "shuying/written.jpg",
    author: "\u4ED8\u9065",
    bookName: "\u8F93\u8D62",
    bookUrl: "/weread/shuying"
  },
  {
    bookImg: "gugedegushi/written.jpg",
    author: "\u6234\u7EF4\xB7\u6000\u65AF \u9A6C\u514B\xB7\u6469\u897F\u5FB7",
    bookName: "\u8C37\u6B4C\u7684\u6545\u4E8B",
    bookUrl: "/weread/gugedegushi"
  },
  {
    bookImg: "wozichuanyupingguoyiqifengkuang/written.jpg",
    author: "\u53F2\u8482\u592B\xB7\u6C83\u5179\u5C3C\u4E9A\u514B",
    bookName: "\u6C83\u5179\u4F20\uFF1A\u4E0E\u82F9\u679C\u4E00\u8D77\u75AF\u72C2",
    label: "\u4EBA\u7269\u4F20\u8BB0",
    labelEN: "biography",
    bookUrl: "/weread/wozichuanyupingguoyiqifengkuang"
  },
  {
    bookImg: "zongcaide66tiaoshangyesiwei/written.jpg",
    author: "\u6768\u5E73",
    bookName: "\u603B\u88C1\u768466\u6761\u5546\u4E1A\u601D\u7EF4",
    bookUrl: "/weread/zongcaide66tiaoshangyesiwei"
  },
  {
    bookImg: "Webceshijiongshi/written.jpg",
    author: "\u9EC4\u52C7\u7B49",
    bookName: "Web\u6D4B\u8BD5\u56E7\u4E8B",
    bookUrl: "/weread/Webceshijiongshi"
  },
  {
    bookImg: "UIshejijingpinbixiuke/written.jpg",
    author: "\u5E38\u4E3D \u674E\u624D\u5E94",
    bookName: "UI\u8BBE\u8BA1\u7CBE\u54C1\u5FC5\u4FEE\u8BFE",
    bookUrl: "/weread/UIshejijingpinbixiuke"
  }
];
var ReadNotesIndex_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-63ca48f6"), n = n(), popScopeId(), n);
const _hoisted_1 = { id: "api-index" };
const _hoisted_2 = { class: "header" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "Image List", -1));
const _hoisted_4 = { class: "api-filter" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "api-filter" }, "Filter", -1));
const _hoisted_6 = ["id"];
const _hoisted_7 = { class: "api-groups" };
const _hoisted_8 = ["href"];
const _hoisted_9 = {
  key: 0,
  class: "no-match"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    ref(bookListJson);
    const query = ref("");
    const normalize = (s) => s.toLowerCase().replace(/-/g, " ");
    const filtered = computed(() => {
      const q = normalize(query.value);
      const matches = (text) => normalize(text).includes(q);
      return data.map((section) => {
        if (matches(section.text)) {
          return section;
        }
        const matchedGroups = section.items.map((item) => {
          if (matches(item.text)) {
            return item;
          }
          const matchedHeaders = item.headers.filter(matches);
          return matchedHeaders.length ? { text: item.text, link: item.link, headers: matchedHeaders } : null;
        }).filter((i) => i);
        return matchedGroups.length ? { text: section.text, items: matchedGroups } : null;
      }).filter((i) => i);
    });
    function slugify(text) {
      return text.replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            _hoisted_5,
            withDirectives(createBaseVNode("input", {
              type: "search",
              placeholder: "Enter keyword",
              id: "api-filter",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => query.value = $event)
            }, null, 512), [
              [vModelText, query.value]
            ])
          ])
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filtered), (section) => {
          return openBlock(), createElementBlock("div", {
            key: section.text,
            class: "api-section"
          }, [
            createBaseVNode("h2", {
              id: slugify(section.text)
            }, toDisplayString(section.text), 9, _hoisted_6),
            createBaseVNode("div", _hoisted_7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(section.items, (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.text,
                  class: "api-group"
                }, [
                  createBaseVNode("a", {
                    href: item.link + ".html"
                  }, [
                    createBaseVNode("h3", null, toDisplayString(item.text), 1)
                  ], 8, _hoisted_8)
                ]);
              }), 128))
            ])
          ]);
        }), 128)),
        !unref(filtered).length ? (openBlock(), createElementBlock("div", _hoisted_9, ' No image matching "' + toDisplayString(query.value) + '" found. ', 1)) : createCommentVNode("", true)
      ]);
    };
  }
});
var ReadNotesIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-63ca48f6"]]);
const __pageData = '{"title":"Read Notes","description":"","frontmatter":{"title":"Read Notes","page":true,"footer":false},"relativePath":"read-notes/index.md","lastUpdated":1648556370419}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(ReadNotesIndex)
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
