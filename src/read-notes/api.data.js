// api.data.ts
// a file ending with data.(j|t)s will be evaluated in Node.js
import wereadJSON from './weread/list.json';
import zhiqunList from './zhiqun/list.js';
export default {
    // declare files that should trigger HMR
    watch: './*.md',
    // read from fs and generate the data
    load: function () {
        var result = [];
        var imgList = [];
        wereadJSON.map(function (group) {
            imgList.push({
                text: group.bookName,
                link: '/read-notes' + group.bookUrl
            });
        });
        result = result
            .concat([
            {
                text: '读书',
                type: '/read-notes/weread/',
                items: imgList
            }
        ])
            .concat([
            {
                text: '知群',
                items: zhiqunList
            }
        ]);
        return result;
    }
};
