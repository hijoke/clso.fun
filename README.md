# 利用 JsDelivr CDN 加速 clso.fun 插件 typecho-plus 静态资源
在后台文件管理中，例如宝塔面板。
打开文件`/usr/plugins/ClsoFun/Plugin.php`
208 行改为
```
        $cssPath =  'https://cdn.jsdelivr.net/gh/hijoke/clso.fun@0.6.1.1/res/typechoplus.css';
```
223 行
```
        $jsPath =  'https://cdn.jsdelivr.net/gh/hijoke/clso.fun@0.6.1.1/res/typechoplus.js';
```
243 行
```
        $jsPath =  'https://cdn.jsdelivr.net/gh/hijoke/clso.fun@0.6.1.1/res/autosize.min.js';
```
我的网站是俄罗斯小鸡加 CLoudFlare，用了 JsDelivr 之后加载速度明显提升。
