// api.data.ts
// a file ending with data.(j|t)s will be evaluated in Node.js
import zhiqunJSON from './zhiqun/index.json';
export default {
    // declare files that should trigger HMR
    watch: './*.md',
    // read from fs and generate the data
    load: function () {
        var result = [];
        var imgList = [];
        zhiqunJSON.map(function (group) {
            imgList.push({
                text: group.pageName,
                link: '/image-notes/image',
                imgList: JSON.stringify(group.imgList.map(function (item) { return ({
                    name: item.name,
                    url: item.url
                }); })),
                headers: group.imgList.map(function (item) {
                    return item.name;
                })
            });
        });
        result = result.concat([
            {
                text: '知群',
                type: '/',
                items: imgList
            }
        ]);
        return result;
    }
};
