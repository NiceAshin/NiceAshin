(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{509:function(s,a,t){"use strict";t.r(a);var r=t(2),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"frpc-内网穿透搭建和使用教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frpc-内网穿透搭建和使用教程"}},[s._v("#")]),s._v(" frpc-内网穿透搭建和使用教程")]),s._v(" "),a("h2",{attrs:{id:"工具地址-githup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具地址-githup"}},[s._v("#")]),s._v(" 工具地址："),a("a",{attrs:{href:"https://github.com/fatedier/frp/releases/",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHup"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("将 frps 及 frps.ini 放到具有公网 IP 的机器上。")]),s._v(" "),a("p",[s._v("将 frpc 及 frpc.ini 放到处于内网环境的机器上。")]),s._v(" "),a("h4",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),a("h2",{attrs:{id:"_1、内网穿透"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、内网穿透"}},[s._v("#")]),s._v(" 1、内网穿透")]),s._v(" "),a("p",[s._v("很多时候需要借助通过外网访问本地的电脑服务，但是本地电脑的ip不是公网ip。因此无法访问，因此需要借助一个公网ip作为跳板。")]),s._v(" "),a("p",[s._v("1、假设本地电脑A需要搭建一个服务，需要电脑B通过外网进行访问，A、B不在一个局域网内")]),s._v(" "),a("p",[s._v("2、有一台服务器C，公网ip是41.103.38.194")]),s._v(" "),a("p",[s._v("3、B需要通过访问C的ip进而访问到A。")]),s._v(" "),a("p",[s._v("原理其实很简单，")]),s._v(" "),a("p",[a("strong",[s._v("在服务器C上启动一个代理服务，本地电脑A上启动一个代理客户端，C上的代理服务端与A上的代理客户端进行保持长连接，并进行一定的端口映射。")])]),s._v(" "),a("p",[a("strong",[s._v("当访问C服务器对应的端口的时候，C服务器对应的代理服务会将消息转发到客户端A对应的端口上。")])]),s._v(" "),a("h2",{attrs:{id:"_2、下载frp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、下载frp"}},[s._v("#")]),s._v(" 2、下载FRP")]),s._v(" "),a("p",[s._v("已经上传到百度盘。版本是0.38")]),s._v(" "),a("p",[s._v("链接："),a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//pan.baidu.com/s/1pbKf4-5POazuk76EmzS8YQ",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pan.baidu.com/s/1pbKf4-5POazuk76EmzS8YQ"),a("OutboundLink")],1),s._v(" 提取码：l3li")]),s._v(" "),a("p",[s._v("解压后如下图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/NiceAshin/FileStore/blogImage/v2-382ca08e87fdf6c6195792e13b3a21a4_720w%20(1).jpeg",alt:"v2-382ca08e87fdf6c6195792e13b3a21a4_720w (1)"}})]),s._v(" "),a("h2",{attrs:{id:"_3、启动配置服务端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、启动配置服务端"}},[s._v("#")]),s._v(" 3、启动配置服务端")]),s._v(" "),a("h3",{attrs:{id:"_3-1配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1配置"}},[s._v("#")]),s._v(" 3.1配置")]),s._v(" "),a("p",[s._v("首先打开frps.ini。如下。port为服务端监听的端口**（注意不是转发的端口，监听转发的端口在客户端的frpc.ini中的remote_port配置）**")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nbind_port "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7000")]),s._v("\ntoken "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1234567820222022ccc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_3-2-启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-启动"}},[s._v("#")]),s._v(" 3.2 启动")]),s._v(" "),a("p",[s._v("注意使用-c 指定配置文件，开始不知道，没有指定配置文件，一直报错")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("frps.exe -c ./frps.ini\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4、启动配置客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、启动配置客户端"}},[s._v("#")]),s._v(" 4、启动配置客户端")]),s._v(" "),a("h3",{attrs:{id:"_4-1-、配置客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-、配置客户端"}},[s._v("#")]),s._v(" 4.1 、配置客户端")]),s._v(" "),a("p",[s._v("首先打开frpc.ini。如下。")]),s._v(" "),a("p",[s._v("具体的含义注释有写。全部的可以查看frps_full.ini配置文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#frp服务所在的服务器的地址")]),s._v("\nserver_addr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("41.103")]),s._v(".38.194\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#填写对应的服务端frp配置的接口")]),s._v("\nserver_port "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#校验客户端用的，要与服务端的匹配。作用就是用于服务端认证客户端的，不然谁都可以连。相当于密码")]),s._v("\ntoken "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1234567820222022ccc\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#项目名，可以有多个，自定义")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("gitlib1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 协议类型。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tcp\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地的ip")]),s._v("\nlocal_ip "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#本地要开放的服务的端口，如开放apache的80")]),s._v("\nlocal_port "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这个需要填写一个服务器放行的端口，最终其实就是访问服务器端的这个端口来转发到本地的服务上的。")]),s._v("\nremote_port "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h3",{attrs:{id:"_4-2、启动客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2、启动客户端"}},[s._v("#")]),s._v(" 4.2、启动客户端")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("frpc.exe -c ./frpc.ini\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);