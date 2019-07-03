const dirpath = require('./base/path');

let resolve = {
    alias:{
        'vue$': 'vue/dist/vue.esm.js',
        '@': dirpath.src,
        'NodeModule': dirpath.nodeModule,
        'Css': `${dirpath.src}/${dirpath.css}`,
        'Sass': `${dirpath.src}/${dirpath.sass}`,
        'Less': `${dirpath.src}/${dirpath.less}`,
        'Images': `${dirpath.src}/${dirpath.images}]`,
        'Iconfont': `${dirpath.src}/${dirpath.iconfont}`,
        'Components': `${dirpath.src}/${dirpath.components}`
    },
    //当找不到模块时，尝试从后进行寻找
    extensions:['.js','.vue']    
}

module.exports = resolve