import{_ as l,Y as i,Z as o,$ as e,a0 as n,a1 as t,a2 as a,D as r}from"./framework-0d329256.js";const c={},d=e("p",null,"LearnData 使用的是 Waline 评论插件，部署简单，有后端管理。评论插件推荐次序为 Waline > Valine > giscus > Gitalk > Gitter。",-1),p=e("h2",{id:"评论插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#评论插件","aria-hidden":"true"},"#"),n(" 评论插件")],-1),u={href:"https://waline.js.org/guide/get-started.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/xCss/Valine",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/giscus/giscus",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/duninet/article/details/125280107",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/gitalk/gitalk",target:"_blank",rel:"noopener noreferrer"},b={href:"https://gitter.im/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://boardgame.io/documentation/#/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://itchef.github.io/regauge/#/",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"waline",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#waline","aria-hidden":"true"},"#"),n(" Waline")],-1),w=e("p",null,"Waline 支持 Akismet 反垃圾评论和免注册留言，但匿名留言会带来安全隐患。建议开启评论通知来避免出现极端情况。Waline 的评论通知支持多种方式，包括 QQ、微信、邮件等。对于评论的回复，仅支持邮件通知。",-1),q={href:"https://waline.js.org/guide/server/notification.html",target:"_blank",rel:"noopener noreferrer"},j={href:"https://waline.js.org/reference/server.html",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"*.vercel.app",-1),x=e("h3",{id:"手动部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#手动部署","aria-hidden":"true"},"#"),n(" 手动部署")],-1),y=e("p",null,"请注意，Vercel 和 LeanCloud 有额度限制。如果你的网站日访客超过一千人次，建议使用自行部署的方案。以下是我的部署步骤：",-1),L={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sql",target:"_blank",rel:"noopener noreferrer"},N=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote1"},"[1]"),e("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),W=a(`<li><p>配置必要的环境变量，可添加于 /etc/environment。配置完成后，需要重启项目让环境变量生效。并注意最后一行需保留空行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">MYSQL_DB</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
<span class="token assign-left variable">MYSQL_USER</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
<span class="token assign-left variable">MYSQL_PASSWORD</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>部署 Waline 服务端，使用 forever 让其持久化运行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换到站点路径</span>
<span class="token builtin class-name">cd</span> /www/wwwroot/waline

<span class="token comment"># 安装 waline 前端包</span>
<span class="token function">npm</span> <span class="token function">install</span> @waline/vercel <span class="token parameter variable">--save</span>

<span class="token comment"># 运行模块内的 vanilla.js 文件</span>
<span class="token function">node</span> node_modules/@waline/vercel/vanilla.js

<span class="token comment"># 使用 forever 持久化运行程序</span>
<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> forever <span class="token parameter variable">-g</span>
forever start app.js  <span class="token comment">#启动应用</span>
forever stop app.js  <span class="token comment">#关闭应用</span>
forever restartall  <span class="token comment">#重启所有应用</span>

<span class="token comment"># 持久化运行 Waline</span>
forever start /www/wwwroot/waline/node_modules/@waline/vercel/vanilla.js

<span class="token comment"># 版本升级并重启</span>
forever stop /www/wwwroot/waline/node_modules/@waline/vercel/vanilla.js
<span class="token builtin class-name">cd</span> /www/wwwroot/waline
<span class="token function">npm</span> update @waline/vercel
forever start /www/wwwroot/waline/node_modules/@waline/vercel/vanilla.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>打开网页管理后台，通过导入事先备份的 JSON 文件来还原数据。</p></li>`,3),C=e("p",null,"新手可以使用宝塔面板的 Node.js 版本管理器来部署 Node.js。安装后，受限更新版本列表，然后选择要使用的 Node 版本，将其设置为命令行版本，接着配置服务器的环境变量。虽然宝塔可以管理 Node 项目，但容易出现错误。处理流程为进入「网站」>「Node 项目」>「添加 Node 项目」，将启动选项设置为模块内的 vanilla.js 文件，将项目端口设置为 8360，并设置绑定域名。",-1),G=e("p",null,"注意：如果你选择手动部署反向代理服务器，请务必使用 Waline 官方提供的 Nginx 配置文件，否则可能会导致无法登录后台的问题。",-1),V=e("h2",{id:"导入时间处理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#导入时间处理","aria-hidden":"true"},"#"),n(" 导入时间处理")],-1),M=e("p",null,"如果 Waline 数据导入还原后，评论发布时间被重置为当前时间，则说明时间格式不兼容。以下以 LeanCloud 转 MySQL 为例：",-1),Q=e("code",null,"2023-03-24T17:27:28.121Z",-1),T={href:"https://web-platform-dzhkey.stackblitz.io",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"[{},{}……,{}]",-1),E={href:"https://www.convertjson.com/json-to-sql.htm#",target:"_blank",rel:"noopener noreferrer"},I=e("li",null,[e("p",null,[n("在 json2sql 页面中，点击按钮「Format JSON」，然后按截图勾选「Still not happy」「Enclose field names」「Backtick ("),e("code",null,"name"),n(")」，取消勾选第一个值的 key。同时，取消勾选 objectId 的「Include」，该项将不会导入数据库。")]),e("figure",null,[e("img",{src:"https://img.newzone.top/2023-03-24-16-52-57.png?imageMogr2/format/webp",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")])],-1),O=e("li",null,[e("p",null,"将「Schema.Table or View Name」依次设为「`wl_Comment`」「`wl_Counter`」「`wl_Users`」，取消勾选「Create Table/View」。")],-1),H=e("li",null,[e("p",null,"在 Step 3: Generate output 下点击按钮「JSON TO SQL Insert」，然后点击复制按钮。")],-1),z=e("li",null,[e("p",null,"进入 phpMyAdmin 数据库后台，选中要操作的表（如 wl_Comment），点击右侧的 SQL 按钮运行 SQL 查询，将复制的内容粘贴到此，并点击执行。若无报错，则说明数据导入正常。")],-1),B=a(`<p>处理后时间可以正常导入，但由于 id 结构不同，旧的评论回复将失去联系。</p><h2 id="gitalk" tabindex="-1"><a class="header-anchor" href="#gitalk" aria-hidden="true">#</a> Gitalk</h2><p>Gitalk 是轻量化的评论组件，用户必须登录 github 才能评论，适合项目类使用。</p><p><code>https://github.com/settings/developers</code> 页面管理已建的应用，获取 Client ID 和 Client secrets，修改应用链接。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p>将以下代码复制粘贴至 docsify 页面，即可启动 Gitalk：</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.css&quot;&gt;

&lt;script src=&quot;https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/docsify/4.12.2/plugins/gitalk.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    /* 使用下面的 Javascript 代码生成 gitalk 插件 */
    const gitalk = new Gitalk({
        clientID: &#39;2f3da234d27ed9a7c290&#39;,
        clientSecret: &#39;d64c45594858477fff0c234c3ed3947a53b0a9ac&#39;,
        repo: &#39;docsifytalk&#39;,        //仓库名称 (GitHub repo)
        owner: &#39;rockbenben&#39;,        //仓库拥有者 (GitHub repo owner)
        admin: [&#39;rockbenben&#39;],      //仓库所有者和协作者。（对此存储库具有写访问权的用户）
        // id: location.pathname,   // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Gitalk 缺点：</p><ul><li>每次有新页面时，都需要登录 github 初始化评论区。</li><li>域名不能改变，Homepage URL 和 Authorization callback URL 需与你的 Gitalk 页面一致，否则页面会报错，提示初始化，无法登录 github。</li></ul><hr class="footnotes-sep">`,9),R={class:"footnotes"},U={class:"footnotes-list"},A={id:"footnote1",class:"footnote-item"},J={href:"https://waline.js.org/guide/database.html#mysql",target:"_blank",rel:"noopener noreferrer"},Y=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),Z={id:"footnote2",class:"footnote-item"},F={href:"https://blog.csdn.net/qq_39052513/article/details/108291272",target:"_blank",rel:"noopener noreferrer"},P=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function $(K,X){const s=r("ExternalLinkIcon");return i(),o("div",null,[d,p,e("ul",null,[e("li",null,[e("a",u,[n("Waline"),t(s)]),n("：基于 Valine 衍生的简洁、安全的评论系统，部署到 Vercel，可匿名互动，导出评论内容，支持文章表情互动。")]),e("li",null,[e("a",h,[n("Valine"),t(s)]),n("：快速、简洁且高效的无后端评论系统，可匿名互动。")]),e("li",null,[e("a",m,[n("giscus"),t(s)]),n("：基于 github discussion，近似于论坛。查看 "),e("a",v,[n("配置方法"),t(s)]),n("。")]),e("li",null,[e("a",_,[n("Gitalk"),t(s)]),n("：基于 github commit，需配置独立库用于存储评论。")]),e("li",null,[e("a",b,[n("Gitter"),t(s)]),n("：要登录的公共聊天室。样例如："),e("a",f,[n("boardgame"),t(s)]),n("，"),e("a",g,[n("regauge"),t(s)]),n("。")])]),k,w,e("p",null,[n("Vercel 项目中选择「Overview」>「Settings」>「Environment Variables」，然后按照 "),e("a",q,[n("Waline 评论通知"),t(s)]),n("配置所需环境变量。如果需要 Webhook 等更多通知方式，则查看 "),e("a",j,[n("Waline 服务端配置"),t(s)]),n("。配置成功后，选择「Overview」>「Deployments」，进行 Redeploy，重新部署后环境变量和评论通知方会生效。目前 "),S,n(" 域名已经被 DNS 污染，会出现「无法加载评论」，国内使用建议绑定自定义域名，域名对备案暂无硬性要求。")]),x,y,e("ol",null,[e("li",null,[e("p",null,[n("新建数据库，并导入 "),e("a",L,[n("waline.sql"),t(s)]),n(" 以完成表和表结构的创建，之后在项目中配置如下环境变量。"),N])]),W]),C,G,V,M,e("ol",null,[e("li",null,[e("p",null,[Q,n(' 这个时间戳中的格式 "T" 和 "Z" 不被 MySQL 支持，要将 "T" 替换为空格并将 "Z" 删除。我写了个'),e("a",T,[n("网页工具"),t(s)]),n("处理时间格式替换。")])]),e("li",null,[e("p",null,[n("提取数据中的 Comment、Counter 和 Users，格式为 "),D,n("，依次复制到 "),e("a",E,[n("json2sql"),t(s)]),n(" 进行操作。")])]),I,O,H,z]),B,e("section",R,[e("ol",U,[e("li",A,[e("p",null,[e("a",J,[n("Waline 多数据库服务支持"),t(s)]),n(),Y])]),e("li",Z,[e("p",null,[e("a",F,[n("超 Nice 的评论组件 —— Gitalk"),t(s)]),n(),P])])])])])}const ne=l(c,[["render",$],["__file","Comments.html.vue"]]);export{ne as default};
