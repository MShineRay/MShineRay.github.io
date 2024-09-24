var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// api.data.ts
// a file ending with data.(j|t)s will be evaluated in Node.js
// import wereadJSON from './log/list.json'
import fronEndJSON from './front-end/list.json';
var allJson = __spreadArray([], fronEndJSON, true);
export default {
    // declare files that should trigger HMR
    watch: './*.md',
    // read from fs and generate the data
    load: function () {
        var result = [];
        var imgList = [];
        allJson.map(function (group) {
            imgList.push({
                text: group.name,
                link: group.url
            });
        });
        result = result
            .concat([
            {
                text: '读书',
                type: '/read-notes/weread/',
                items: imgList
            }
        ]);
        return result;
    }
};
