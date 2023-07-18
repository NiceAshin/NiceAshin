---
next: ./singleton
---


设计模式所遵守的七大设计原则

>- 单一职责. 一个服务, 一个包, 一个类,一个方法只负责一项职责
>- 依赖倒转. 不依赖具体实现, 而是依赖其抽象
>- 接口隔离. 在实现接口或继承抽象时, 如果基类的某项方法不需要实现, 就不要去继承父类, 而是将其拆分, 只实现需要实现的类
>- 里氏替换. 子类尽量不要去覆盖父类的方法, 如果必须覆盖, 可以采用依赖, 聚合, 组合的方式
>- 迪米特法则. 降低对象间的依赖关系, 对自己依赖的类知道的越少越好
>- 开闭原则. 当修改或添加功能时, 不修改功能的调用方(关闭修改), 而是修改功能的提供方(开放)
>- 合成复用原则. 若只是为服用方法, 尽量不要去继承, 可以使用组合或聚合方式降低耦合性


## 创建型

- [单例模式(√)](./singleton.md)
- [工厂模式(√)](./factory.md)
- [原型模式(√)](./clone.md)
- [建造者模式(√)](./builder.md)

## 结构型

- [适配器模式](./adapter.md)
- [桥接模式](./bridge.md)
- [装饰者模式](./decorator.md)
- [组合模式](./combination.md)
- [门面模式](./face.md)
- [享元模式](./meta.md)
- [代理模式](./proxy.md)


## 行为型

- [模版方法模式(√)](./template.md)
- [命令模式](./cmd.md)
- [访问者模式](./access.md)
- [迭代器模式](./iterator.md)
- [观察者模式(√)](./observer.md)
- [中介者模式](./agent.md)
- [备忘录模式](./memo.md)
- [解释器模式(√)](./interpreter.md)
- [状态模式](./state.md)
- [策略模式(√)](./strategy.md)
- [责任链模式(√)](./chain.md)

