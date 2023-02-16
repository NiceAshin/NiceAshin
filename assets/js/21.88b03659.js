(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{430:function(s,e,a){"use strict";a.r(e);var t=a(2),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"pod通信与服务发现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pod通信与服务发现"}},[s._v("#")]),s._v(" Pod通信与服务发现")]),s._v(" "),e("blockquote",[e("p",[s._v("k8s网络篇为Kubernetes网络权威指南笔记")])]),s._v(" "),e("h2",{attrs:{id:"ip-per-pod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ip-per-pod"}},[s._v("#")]),s._v(" IP-per-Pod")]),s._v(" "),e("p",[s._v("在k8s的网络模型中, 每个节点上的上的容器有自己的ip段, 各个节点之间的容器可以根据目标容器的ip地址进行访问.")]),s._v(" "),e("p",[s._v("基于上述原则, k8s抽象出一个IP-per-Pod模型. 这个模型中, IP以Pod为单位进行分配, Pod内的所有容器共享一个网络堆栈(相当于一个命名空间, 他们的IP地址, 网络设备, 配置都是相同的).\nPod的IP和端口在Pod的内部和外部都保持一致, 也就不需要NAT来进行地址转换了. 同时同一个Pod内的容器因为共享网络命名空间, 可以直接通过localhost来相互连接.")]),s._v(" "),e("p",[s._v("在IP-per-Pod模型下. 可以有效的利用各种域名解析和发现机制.")]),s._v(" "),e("p",[s._v("IP-per-Pod模型消除了Docker中的动态端口映射所带来的复杂性.")]),s._v(" "),e("blockquote",[e("p",[s._v("在Docker的动态端口映射模式中, 因为NAT的原因访问者看到的IP端口与服务提供者实际绑定的IP端口是不一样的. 容器内应用是很难知道自身对外暴露的真实的IP和地址的. 外部应用也不能直接通过服务所在容器的私有IP和端口来访问服务.")])]),s._v(" "),e("p",[s._v("在IP-per-Pod模式下, 一个Pod就好像一台独立的机器一样, 有自己的域名解析, 端口分配, 负载均衡, 服务发现机制.")]),s._v(" "),e("p",[s._v("在这个模型下主要解决两个问题: "),e("strong",[s._v("IP地址分配和路由.")])]),s._v(" "),e("h3",{attrs:{id:"ip地址分配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ip地址分配"}},[s._v("#")]),s._v(" IP地址分配")]),s._v(" "),e("p",[s._v("在IP-per-Pod模型中, 各个服务器上的容器IP段不能重叠, k8s使用各种IP范围为Node, Pod, Service分配IP地址.")]),s._v(" "),e("ul",[e("li",[s._v("从集群的VPC网络为每个Node分配一个IP地址.")]),s._v(" "),e("li",[s._v("为每个Pod分配一个地址段内的IP地址.")]),s._v(" "),e("li",[s._v("从集群的VPC网络中为每个Service分配一个IP地址(ClusterIP).")])]),s._v(" "),e("h2",{attrs:{id:"k8s网络架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#k8s网络架构"}},[s._v("#")]),s._v(" k8s网络架构")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://image.ytg2097.com/k8s-network.png",alt:"k8s-network"}})]),s._v(" "),e("p",[s._v("当我们在k8s的master中创建一个pod后, kubelet观察到新pod的创建, 会先调用CRI(Container Runtime Interface)创建Pod内的若干个容器.")]),s._v(" "),e("p",[s._v("在创建应用容器的同时, k8s还会为每个pod创建一个pause容器, 在前一篇的namespace中讲到维持namespace存在的方式除了文件描述符挂载的方式之外还有一种进程占用的方式. pause就是采用的这种方式.")]),s._v(" "),e("p",[s._v("pause容器创建后, pod内的容器会通过container网络模式加入到这个pause的network namespace中.")]),s._v(" "),e("p",[s._v("在初始化pause时, k8s的网络插件还会给pause容器内的eth0分配IP, 到时候, Pod内的其他容器就使用这个IP与其他Pod进行通信.")]),s._v(" "),e("h2",{attrs:{id:"k8s的节点内组网"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#k8s的节点内组网"}},[s._v("#")]),s._v(" k8s的节点内组网")]),s._v(" "),e("p",[s._v("k8s的节点内组网与docker一样也是veth pair + bridge的方式.")]),s._v(" "),e("p",[s._v("当k8s调度一个Pod在某个节点上运行的时候, 会在这个节点的linux内核中为pod创建一个network namespace, 供pod内所有运行的容器使用. 从容器的角度看, pod是一个具有网络接口的物理机器. pod内所有容器都会看到这个网络接口.")]),s._v(" "),e("p",[s._v("在bridge组件搭建的网络中k8s使用veth pair将容器和宿主机的网络连接到一起, 从而使数据可以进出pod.")]),s._v(" "),e("h2",{attrs:{id:"k8s的跨节点组网"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#k8s的跨节点组网"}},[s._v("#")]),s._v(" k8s的跨节点组网")]),s._v(" "),e("p",[s._v("跨节点组网的解决方案有bridge, overlay等.")]),s._v(" "),e("h3",{attrs:{id:"bridge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bridge"}},[s._v("#")]),s._v(" bridge")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://image.ytg2097.com/k8s-net-bridge.png",alt:"k8s-net-bridge"}})]),s._v(" "),e("p",[s._v("node1中pod的网段是10.1.1.0/24, 连接的网桥是10.1.1.1; node2中pod的网段是10.1.2.0/24, 连接的网桥是10.1.2.1;")]),s._v(" "),e("p",[s._v("node1的路由表的第二行是")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("10.1.1.0/24 dev cni0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("意思是, 所有目标地址是本地上pod的网络包, 都发到cni0网桥, 进而广播给pod.")]),s._v(" "),e("p",[s._v("node1的路由表第三行是")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("10.1.2.0/24 via 192.168.1.101\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("10.1.2.0/24是node2上pod的网段, 192.168.1.101是node2的ip; 这一行的意思是目的是10.1.2.0/24网段的网络包都发送到node2上.\n然后再看node2路由表的第二行")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("10.1.2.0/24 dev cni0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("网络包被发到node2之后发送给了node2的网桥, 进而广播给了node2上的pod.")]),s._v(" "),e("p",[s._v("得出结论: "),e("strong",[s._v("bridge网络本身不解决容器的跨机通信问题, 需要显示的书写主机路由表来映射目标容器网段和主机IP的关系, 如果集群内有n个主机, 就需要n-1条路由表记录")])]),s._v(" "),e("h3",{attrs:{id:"overlay"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overlay"}},[s._v("#")]),s._v(" overlay")]),s._v(" "),e("p",[s._v("overlay是一个构建在物理网络之上的虚拟网络.")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://image.ytg2097.com/k8s-net-overlay.png",alt:"k8s-net-overlay"}})]),s._v(" "),e("p",[s._v("overlay与bridge相同之处是pod同样接在网桥上, 目标地址在本机pod网段内的网络包同样发给linux网桥cni0;\n不同之处是, 目的pod在其他节点上的路由表规则")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("10.1.0.0/16 dev tun0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("网络包全部发给了本机的tun/tap设备tun0, tun0是overlay隧道网络的入口.")]),s._v(" "),e("p",[s._v("使用了这个路由规则后, 就不需要再想bridge网络一样写n-1条路由记录了.")]),s._v(" "),e("p",[s._v("那么网络包如何正确传递到目标主机的另外一端呢?")]),s._v(" "),e("p",[s._v("flannel的实现中会借助一个分布式数据库记录目标容器IP与所在主机的IP映射关系. flannel会监听tun0上的封包和解包操作. 例如node1上的容器给node2上的容器发送数据, flannel会在tun0\n出将一个目标地址是192.168.1.101:8472的UDP包头封装到这个包的外层, 在网络包到达node2, 监听在node2的tun0上的flannel会捕获这个UDP包, 然后解开包头发送给本机的网桥cni0.")]),s._v(" "),e("p",[s._v("overlay形象一点可以理解为特殊的城际快递, 不同主机上的pod内容器通信类似发送跨城快递, 寄件人只写了详细地址(目标容器IP), 但是没有写省市区(目标容器所在的主机IP), 当快递到达本地邮局(路由表)后,\n邮局发现这个地址不在本辖区(本机容器IP端)内, 然后将快递转交给了特殊通道, 也就是tun0. 这个tun0在flannel中被监听了, flannel监听到tun0收到一个快递, 就去查看这个详细地址所在的省市区(flannel中记录了容器IP或者说PodIP与主机IP的映射关系,\n因为IP-per-Pod的原因, 所以不用担心映射重复), 将地址拼接完成后, 在把快递发送到目标省市区所在的邮局去派送到具体的容器中.")]),s._v(" "),e("h2",{attrs:{id:"pause-容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pause-容器"}},[s._v("#")]),s._v(" pause 容器")]),s._v(" "),e("p",[s._v("在k8s节点上执行docker ps会看到很多个pause容器. pause容器可以说是k8s网络的精髓, 理解pause容器能更好的理解k8s pod的设计初衷.")]),s._v(" "),e("p",[s._v("在k8s中, pause容器被当做pod中所有容器的父容器, 并为每个业务容器提供一下功能:")]),s._v(" "),e("ul",[e("li",[s._v("在Pod中, 作为Linux namespace(network, UTS等)的基础;")]),s._v(" "),e("li",[s._v("启动PID namespace共享, 为每个Pod提供init进程, 并收集Pod内的僵尸进程.")])]),s._v(" "),e("p",[s._v("前文中提到pause容器会维持一个network namespace存在, 它是不执行任何功能的, 启动之后就会进入阻塞状态.")]),s._v(" "),e("p",[s._v('同时他还有另一个重要功能: 扮演PID 1 的角色, 并在子进程成为"孤儿进程"的时候, 通过调用wait()收个这些僵尸子进程. 这样就不用担心Pod的PID namespace中堆满僵尸进程了.')]),s._v(" "),e("p",[s._v("PID为1的进程时init进程, 即所有进程的父进程. init进程的其中一个作用就是当某个子进程由于父进程的错误退出而变成"),e("strong",[s._v("孤儿进程")]),s._v(", init进程就会收养这个子进程并在这个子进程退出时回收资源.")]),s._v(" "),e("p",[s._v("容器使用PID namespace对PID进行隔离,在容器中, 必须有一个进程充当每个PID namespace的init进程; "),e("strong",[s._v("使用docker时, ENTRYPOINT进程是init进程")]),s._v(". 若多个容器之间共享PID namespace, 那么拥有PID namespace的那个进程必须承担init进程的角色,\n其他容器作为init进程的子进程添加到PID namespace中.")]),s._v(" "),e("h2",{attrs:{id:"集群内访问服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群内访问服务"}},[s._v("#")]),s._v(" 集群内访问服务")]),s._v(" "),e("p",[s._v("k8s中在客户端和pod之间引入了一个抽象层Service. Service具有稳定的IP和端口, 为后端的Pod提供负载均衡.")]),s._v(" "),e("p",[s._v("Service在"),e("RouterLink",{attrs:{to:"/cloud-native/k8s/k8s.html#service"}},[s._v("k8s入门篇")]),s._v("中有写")],1),s._v(" "),e("h2",{attrs:{id:"集群外访问服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群外访问服务"}},[s._v("#")]),s._v(" 集群外访问服务")]),s._v(" "),e("p",[s._v("Service可以为一组Pod提供稳定的访问入口, 一般使用ClusterIP模式在集群内部提供访问, 如果要在集群外部访问Service的话可以使用NodePort模式, 但NodePort模式的Service要求节点需要有能够在\n外部访问的IP, 且端口范围固定. 并不建议在生产环境使用.")]),s._v(" "),e("p",[s._v("除了NodePort之外, k8s还提供了两种LoadBalancer和Ingress来将Service暴露到外网中.")]),s._v(" "),e("p",[s._v("LoadBanlancer要求k8s运行在特定的云服务上, Ingress则没有这种要求.")]),s._v(" "),e("p",[e("strong",[s._v("k8s的Ingress对象是指授权入站连接到集群内服务的规则集合")]),s._v(".")]),s._v(" "),e("p",[s._v("通常情况下, Service和Pod仅在集群内部网络中通过IP访问. Ingress的作用是在集群外部网络和和集群内部网络之间开一个口子, 放外部的流量进来, 因此Ingress是建立在Service之上的访问入口.")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://image.ytg2097.com/k8s-ingress.png",alt:"k8s-ingress"}})]),s._v(" "),e("p",[s._v("Ingress支持通过URL的方式将Service暴露到集群外.")]),s._v(" "),e("p",[s._v("Ingress还支持自定义的访问策略")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" networking.k8s.io/v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Ingress\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" minimal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ingress\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" xxx.com \n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /user\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pathType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Prefix\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("backend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" user\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n              "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /order\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pathType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Prefix\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("backend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" order\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n              "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("              \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("p",[s._v("这个manifest中定义的访问规则是访问xxx.com/user和xxx.com/order的请求会被分别转发到user Service和order Service上.")]),s._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://kubernetes.io/zh/docs/concepts/services-networking/ingress/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ingress官方文档"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);