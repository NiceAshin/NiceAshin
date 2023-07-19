(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{471:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"k8s部署elasticsearch集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#k8s部署elasticsearch集群"}},[s._v("#")]),s._v(" k8s部署Elasticsearch集群")]),s._v(" "),a("p",[s._v("elasticsearch官方已经推出一个k8s operator: Elastic Cloud On Kubernetes. 简称ECK.")]),s._v(" "),a("p",[s._v("ECK中集成了大量es的运维工作:")]),s._v(" "),a("ul",[a("li",[s._v("管理和监测多个集群")]),s._v(" "),a("li",[s._v("轻松升级至新的版本")]),s._v(" "),a("li",[s._v("扩大或缩小集群容量")]),s._v(" "),a("li",[s._v("更改集群配置")]),s._v(" "),a("li",[s._v("动态调整本地存储的规模（包括 Elastic Local Volume（一款本地存储驱动器））")]),s._v(" "),a("li",[s._v("备份")])]),s._v(" "),a("h2",{attrs:{id:"安装eck-operator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装eck-operator"}},[s._v("#")]),s._v(" 安装ECK Operator")]),s._v(" "),a("p",[s._v("ECK Operator里边也还是跟mysql, redis一样的东西包括headlessService, service, statefulset.")]),s._v(" "),a("p",[a("strong",[s._v("安装ECK Operator要注意与k8s的版本是否匹配")]),s._v(", 我的k8s版本是1.21, 部署ECK Operator时官方推荐版本是1.7.1")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubectl create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" https://download.elastic.co/downloads/eck/1.7.1/crds.yaml\nkubectl apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" https://download.elastic.co/downloads/eck/1.7.1/operator.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("只需要两条命令就可以安装完成")]),s._v(" "),a("p",[s._v("验证一下是否安装成功")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pods -n elastic-system")]),s._v("\nNAME                 READY   STATUS    RESTARTS   AGE\nelastic-operator-0   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          123m\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"部署es集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署es集群"}},[s._v("#")]),s._v(" 部署ES集群")]),s._v(" "),a("p",[s._v("es-quickstart.yml")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" elasticsearch.k8s.elastic.co/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Elasticsearch\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" quickstart\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 7.14.0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nodeSets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" default\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node.store.allow_mmap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("apply之后发现报错")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get elasticsearch")]),s._v("\nNAME         HEALTH    NODES   VERSION   PHASE             AGE\nquickstart   unknown           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0    ApplyingChanges   15h\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pods | grep es")]),s._v("\nquickstart-es-default-0                   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1     Pending   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          15h\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl describe pod quickstart-es-default-0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nEvents:\n  Type     Reason            Age   From               Message\n  ----     ------            ----  ----               -------\n  Warning  FailedScheduling  70m   default-scheduler  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/3 nodes are available: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" had taint "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("node-role.kubernetes.io/master: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", that the pod didn't tolerate, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" Insufficient memory.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("elasticsearch对象quickstart的HEALTH状态为unknown. 再查看es的pod, events中报错: "),a("code",[s._v("1 node(s) had taint {node-role.kubernetes.io/master: }, that the pod didn't tolerate, 2 Insufficient memory.")])]),s._v(" "),a("p",[s._v("当前的k8s节点如下")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("节点")]),s._v(" "),a("th",[s._v("角色")]),s._v(" "),a("th",[s._v("IP")]),s._v(" "),a("th",[s._v("配置")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("node1")]),s._v(" "),a("td",[s._v("master")]),s._v(" "),a("td",[s._v("192.168.58.136")]),s._v(" "),a("td",[s._v("2C 4G")])]),s._v(" "),a("tr",[a("td",[s._v("node2")]),s._v(" "),a("td",[s._v("worker")]),s._v(" "),a("td",[s._v("192.168.58.137")]),s._v(" "),a("td",[s._v("2C 4G")])]),s._v(" "),a("tr",[a("td",[s._v("node3")]),s._v(" "),a("td",[s._v("worker")]),s._v(" "),a("td",[s._v("192.168.58.138")]),s._v(" "),a("td",[s._v("2C 4G")])])])]),s._v(" "),a("p",[s._v("集群的三个节点都不能用于调度Pod, 其中提示master节点有一个污点, es的pod不能容忍这类污点. 而另外两个节点的内存不足. 所以Pod调度失败, 一直出于Pending状态.")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl describe node node1 | grep Taint")]),s._v("\nTaints:             node-role.kubernetes.io/master:NoSchedule\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这个问题有4个解决方案:")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("方案")]),s._v(" "),a("th",[s._v("采纳建议")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("抹除master的污点")]),s._v(" "),a("td",[s._v("master节点的污点是k8s集群搭建时候默认打上的, 也是为了强调master节点和worker节点的区别, 最好还是不要让master去承担worker的工作")])]),s._v(" "),a("tr",[a("td",[s._v("调整quickstart的污点容忍度")]),s._v(" "),a("td",[s._v("同上, 最好把pod调度到master上边去, 如果污点所在的节点是在worker上, 可以考虑调整")])]),s._v(" "),a("tr",[a("td",[s._v("调整两个worker节点的资源")]),s._v(" "),a("td",[s._v("如果资源充沛  可以考虑")])]),s._v(" "),a("tr",[a("td",[s._v("限制quickstart的资源")]),s._v(" "),a("td",[s._v("限制资源之后可以满足es运行需求的话, 可以考虑")])])])]),s._v(" "),a("p",[a("strong",[s._v("最终采用的是第四个.")])]),s._v(" "),a("p",[s._v("在调整quickstart资源之前先了解一下k8s的污点和污点容忍度")]),s._v(" "),a("h2",{attrs:{id:"污点与容忍度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#污点与容忍度"}},[s._v("#")]),s._v(" 污点与容忍度")]),s._v(" "),a("p",[s._v("k8s节点上的污点并不是说节点状态有异常. k8s官方文档中对污点的解释如下:")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://kubernetes.io/zh/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity",target:"_blank",rel:"noopener noreferrer"}},[s._v("节点亲和性"),a("OutboundLink")],1),s._v(" 是 "),a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Pod"),a("OutboundLink")],1),s._v(" 的一种属性，它使 Pod 被吸引到一类特定的"),a("a",{attrs:{href:"https://kubernetes.io/zh/docs/concepts/architecture/nodes/",target:"_blank",rel:"noopener noreferrer"}},[s._v("节点"),a("OutboundLink")],1),s._v(" （这可能出于一种偏好，也可能是硬性要求）。 "),a("em",[s._v("污点")]),s._v("（Taint）则相反——它使节点能够排斥一类特定的 Pod。")]),s._v(" "),a("p",[s._v("容忍度（Toleration）是应用于 Pod 上的，允许（但并不要求）Pod 调度到带有与之匹配的污点的节点上。")]),s._v(" "),a("p",[s._v("污点和容忍度（Toleration）相互配合，可以用来避免 Pod 被分配到不合适的节点上。 每个节点上都可以应用一个或多个污点，这表示对于那些不能容忍这些污点的 Pod，是不会被该节点接受的.")]),s._v(" "),a("p",[s._v("污点有三种级别:")]),s._v(" "),a("ul",[a("li",[s._v("NoSchedule: 不能容忍此污点的Pod不会被调度到节点上; 现有的Pod不会从节点中逐出. k8s的master节点默认带有NoSchedule污点")]),s._v(" "),a("li",[s._v("PreferNoSchedule: k8s会避免不能容忍此污点的Pod被调度到节点上")]),s._v(" "),a("li",[s._v("NoExecute: 如果Pod已经在节点上运行了, 那么Pod会被从节点上逐出; 如果未在节点上运行, 则不会被调度到节点上")])]),s._v(" "),a("p",[s._v("操作节点的污点:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加污点")]),s._v("\nkubectl taint nodes node1 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("key1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value1:NoSchedule\nkubectl taint nodes node1 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("key1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value1:NoExecute\nkubectl taint nodes node1 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("key2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value2:NoSchedule\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除污点的命令是在添加污点的命令后面加一个减号")]),s._v("\nkubectl taint nodes node1 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("key2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value2:NoSchedule-\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("调整pod的容忍度")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 与containers同级")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tolerations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# operator为Equal表示 当key和value相同时, ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"key1"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当节点的key=value时, 即使节点上污点级别是NoSchedule, Pod也会被调度到那个节点上去 ")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("operator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Equal"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value1"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("effect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NoSchedule"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 与containers同级")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tolerations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# operator为Equal表示 当key和value相同时, ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node-role.kubernetes.io/master"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只要节点上存在key1, 即使节点上污点级别是NoSchedule, Pod也会被调度到那个节点上去 ")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("operator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Exists"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("effect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NoSchedule"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"调整pod资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调整pod资源"}},[s._v("#")]),s._v(" 调整Pod资源")]),s._v(" "),a("h3",{attrs:{id:"_1-先查看节点中可用资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-先查看节点中可用资源"}},[s._v("#")]),s._v(" 1. 先查看节点中可用资源")]),s._v(" "),a("p",[s._v("查看k8s的资源状态不能使用free -m这类工具, 因为 "),a("code",[s._v("free -m")]),s._v(" 不能在容器中工作，并且如果用户使用了 "),a("a",{attrs:{href:"https://kubernetes.io/zh/docs/tasks/administer-cluster/reserve-compute-resources/#node-allocatable",target:"_blank",rel:"noopener noreferrer"}},[s._v("节点可分配资源"),a("OutboundLink")],1),s._v(" 特性，资源不足的判定将同时在本地 cgroup 层次结构的终端用户 Pod 部分和根节点做出.")]),s._v(" "),a("p",[s._v("我们可以使用kubectl top命令查看资源占用情况. (前提是先安装过metrics, 可参考腾讯的文档https://cloud.tencent.com/document/product/457/50074, metrics官方的因为墙的原因镜像pull不下来)")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl top nodes --use-protocol-buffers")]),s._v("\nNAME    CPU"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   CPU%   MEMORY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   MEMORY%   \nnode1   659m         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("%    1947Mi          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v("%       \nnode2   611m         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("%    1607Mi          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("43")]),s._v("%       \nnode3   506m         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("%    2011Mi          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),s._v("% \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_2-调整es集群节点占用资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-调整es集群节点占用资源"}},[s._v("#")]),s._v(" 2. 调整ES集群节点占用资源")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" elasticsearch.k8s.elastic.co/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Elasticsearch\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" quickstart\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 7.14.0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nodeSets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" default\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node.roles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" master\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" data\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node.attr.attr_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" attr_value\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node.store.allow_mmap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("podTemplate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bar\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" elasticsearch\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("requests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ECK Operator默认申请4g内存")]),s._v("\n                  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1Gi\n                  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cpu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("limits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1Gi\n                  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cpu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("h2",{attrs:{id:"部署kibana"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署kibana"}},[s._v("#")]),s._v(" 部署kibana")]),s._v(" "),a("ul",[a("li",[s._v("kinana.yml")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kibana.k8s.elastic.co/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Kibana\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kibana"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sample\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 7.14.0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("elasticsearchRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里要写之前部署的elasticsearch的名字")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" quickstart\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("podTemplate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bar\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kibana\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("requests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200Mi\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cpu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("limits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200Mi\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cpu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("kibana-ingress.yml")]),s._v(" "),a("p",[s._v("需要先部署上ingressclass https://github.com/ytg2097/k8s-image/blob/main/ingress-nginx/ingress-nginx.yml")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc | grep kibana")]),s._v("\nkibana-sample-kb-http             ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".197.98   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5601")]),s._v("/TCP            12m\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" networking.k8s.io/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Ingress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kibana\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("annotations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kubernetes.io/ingress.class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("kibana.com\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("backend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kibana"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sample"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("kb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("http\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("servicePort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5601")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("我是在虚拟机上跑的k8s, 所以需要分别在我的/etc/hosts和本机C:\\Windows\\System32\\drivers\\etc\\hosts里面都配上域名解析. 然后就可以在浏览器访问了")])])}),[],!1,null,null,null);a.default=e.exports}}]);