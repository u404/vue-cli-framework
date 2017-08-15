# vue-cli-framework

> A Vue.js  project

> vue的使用方式确实很简单，安装好vue-cli，对照着官方文档我们很容易写出各种组件。然而，真要去完整搭建一个项目的时候，却发现，如何去搭建一个易于新人上手，利于多人协作，组件复用性高，又维护简单的项目是多么迷茫。

> vue本身是十分优雅的，然而，却并不是所有人都能用的优雅，开发这么多年，见过很多jquery、angular的项目，同样的框架，不同人来搭建项目就有非常大的差异，结构复杂，过度设计，是非常常见的问题。

> 这个项目是为探索vue+webpack单页应用开发基础架构而搭建，过程中参考了一些平时遇到的比较好的设计思想，当然也会不断完善。一方面，也可以直接拉取下来作为一个新项目开发的脚手架；另一方面，也会不断更新填充一些常用的函数、js库、npm包等

## Start

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Folder

- build  --对vue-cli下的目录进行一定的修改

- config --vue-cli构建的目录
- dist --build构建目录，上线时，可以直接部署该目录资源
    - static --构建好的前端资源
        - css
        - data --对于某些组件的配置json文件，可以把组件的一些配置设置到相应的json文件件里，易于在线上进行直接修改，而无需重新打包发布
        - img
        - js
    - index.html --整个单页应用的入口html
- src --开发目录
    - assets --项目中使用的一些公共js，css样式的定义目录，推荐使用sass（scss）进行开发
    - components
    --组件目录
        - ImageBox --示例目录，对于包含复杂的逻辑或样式的，包含独有图片、视频、字体资源的，建议使用目录的形式来组织控件
            - Index.vue
            - 1.jpg
        - NavBar.vue --示例组件，简单组件直接写.vue文件即可
    - plugins --自定义插件和npm包插件的引入项目的位置
        - index.js 用于统一引入所有插件，可以导入npm包或本目录中自定义的插件
        - functions.js 对Vue prototype进行扩展方法的定义
        - mixins.js
        对vue进行全局混合的定义，当前定义了一个用于组件自动读取/static/data/*.json通过config属性指定的json文件来自动填充config数据配置
        - router --路由组织
        - static --无需webpack处理的静态资源的组织目录，打包时会拷贝到dist/static中，代码中可以直接通过'/static/...'来访问
        - views --路由视图级别的组件，其中组件的组织方法跟components中基本一致