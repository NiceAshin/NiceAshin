---
next: ./contact
prev: ./design
sidebar: auto
---

# 服务拆分

## 分解步骤 

### 1. 定义系统操作

系统操作代表一个应用请求的程序必须处理的外部请求, 系统操作是一种抽象描述.

定义系统操作从需求开始, 往往是用户故事.

两步式流程识别与定义系统操作:

- 创建由关键类组成的抽象领域模型, 这些类用于描述系统操作的词汇表
- 确定系统操作, 根据领域模型描述系统操作的行为

### 2. 定义服务

- 定义域业务能力相对应的服务
- 围绕DD子域来分解和设计服务

### 3. 定义服务API和协作方式

- 将系统操作分配给服务, 服务可以完全独立的实现操作
- 分别确定那些系统操作单独服务可以处理, 那些需要相互协作

## 服务分解障碍

### 网络延迟

> 维护服务间的同步通信降低可用性
>
>服务间网络往返过多

解决方式: **自包含服务** : 服务不依赖服务, 能够以独立的方式供外部使用


### 跨服务的数据一致性

微服务一致性要求内刚外柔: 服务内聚合通过数据库事务保证一致性, 服务外要求保证最终一致

- Saga
- 两段式提交
- 三段式提交

### 上帝类

采用DDD并将每个服务视为具有自己的领域模型的单独子域, 所有与上帝类有关的服务都有自己的领域模型及其对应的上帝类的版本, 如Order.

每个领域模型中的Order类标示统一Order业务实体的不同方面, 应用程序必须维护不同服务中的这些对象之间的一致性. 

### 进程间通讯造成可用性降低

可以通过异步消息的方式解决

### 获取一致性视图

单独创建一个QueryService, 同步CQRS更新视图
