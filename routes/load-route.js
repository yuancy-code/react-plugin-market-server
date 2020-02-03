const fs = require("fs");
const path = require('path');

// 动态路由
const loadRoute = {
    path: './api',
    app: null,
    listDir: function (dir, router) {
        const fullDir = path.join(__dirname, dir);
        const fileList = fs.readdirSync(fullDir, 'utf-8');
        for (let i = 0; i < fileList.length; i++) {
            const stat = fs.lstatSync(path.join(fullDir, fileList[i]));
            // 是目录，需要继续
            if (stat.isDirectory()) {
                this.listDir(path.join(dir, fileList[i]), router);
            } else {
                this.loadRoute(path.join(fullDir, fileList[i]), router);
            }
        }
    },
    // 加载路由
    loadRoute: function (routeFile, router) {
        const route = require(routeFile.substring(0, routeFile.lastIndexOf('.')));
        route(router);
    },
    // 初始化
    init: function (path, router) {
        this.path = path ? path : this.path;
        this.listDir(this.path, router);
    }
};

module.exports = loadRoute;