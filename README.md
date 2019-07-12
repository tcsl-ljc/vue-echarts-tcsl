# vue-echarts-tcsl

> 基于echarts4.X的图表组件库 vue-echarts-tcsl


## Install
``` bash
npm install -g vue-echarts-tcsl
```

## Quick Start

### 一、全部引入

``` bash
import Vue from 'vue'
import vEchartsTcsl from 'vue-echarts-tcsl';
Vue.use(vEchartsTcsl);

# In the template (all)
<vue-echarts-tcsl></vue-echarts-tcsl>
```

### 二、按需引入

``` bash

import Vue from 'vue'
import Line from 'vue-echarts-tcsl';
# 组件注册
Vue.component(Target.name, Target);

# In the template (module)
# 按照不同类型使用不同类型标签(例：线形图使用dc-chart-template-line)
<dc-chart-template-line></dc-chart-template-line>
```

## Props
name|type|required|instruction
--|:--:|--:|--:
chartType|String|true|图表类型（按需引入不需要）
chartData|Object|true|图表数据
title|String|true|图表标题
specialId|String|true|图表ID（不可重复）
theme|String|true|图表主题（blue/orange/purple）

## Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/ashen9/vue-echarts-tcsl/releases).


## Special Thanks
[HankWangv5](https://github.com/HankWangv5).

[ZhangDongliang123](https://github.com/ZhangDongliang123).

[YueQuanXiaoChe](https://github.com/YueQuanXiaoChe).

[YuMay2009](https://github.com/YuMay2009).

