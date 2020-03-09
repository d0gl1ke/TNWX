(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{305:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"开发者模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发者模式"}},[t._v("#")]),t._v(" 开发者模式")]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[a("strong",[t._v("TNWX: TypeScript + Node.js + WeiXin 微信系开发脚手架，支持微信公众号、微信支付、微信小游戏、微信小程序、企业号/企业微信。最最最重要的是能快速的集成至任何 Node.js 框架(Express、Nest、Egg、Koa 等)")])]),t._v(" "),a("h2",{attrs:{id:"配置初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置初始化"}},[t._v("#")]),t._v(" 配置初始化")]),t._v(" "),a("p",[a("a",{attrs:{href:"../common/init"}},[t._v("请参考快速入门中的初始化与示例")])]),t._v(" "),a("h2",{attrs:{id:"开发者模式-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发者模式-2"}},[t._v("#")]),t._v(" 开发者模式")]),t._v(" "),a("p",[a("strong",[t._v("TNWX")]),t._v(" 中验证签名的关键接口如下：")]),t._v(" "),a("div",{staticClass:"language-TypeScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("QyWeChat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkSignature")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nonce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" echostr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("Express")]),t._v(" 示例如下：")]),t._v(" "),a("div",{staticClass:"language-TypeScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/qymsg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get query...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" appId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" corpId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("corpId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" corpId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        QyApiConfigKit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCurrentAppId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("corpId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" signature "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" urlencode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg_signature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//微信加密签名")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" urlencode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//时间戳")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" nonce "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" urlencode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nonce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//随机数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" echostr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" urlencode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("echostr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//随机字符串")]),t._v("\n\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QyWeChat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkSignature")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nonce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" echostr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[a("strong",[t._v("特别说明：")])]),t._v(" "),a("ol",[a("li",[t._v("开发者URL为："),a("code",[t._v("http/https://域名/qymsg?appId=xxxxx&corpId=xxxx")])]),t._v(" "),a("li",[t._v("加密模式必须设置为 "),a("code",[t._v("true")]),t._v("（"),a("code",[t._v("ApiConfig")]),t._v(" 第四个参数）")])]),t._v(" "),a("h2",{attrs:{id:"本地端口映射工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地端口映射工具"}},[t._v("#")]),t._v(" 本地端口映射工具")]),t._v(" "),a("p",[t._v("推荐使用 "),a("a",{attrs:{href:"https://github.com/fatedier/frp",target:"_blank",rel:"noopener noreferrer"}},[t._v("FRP"),a("OutboundLink")],1),t._v(" 目前Github Start 已超越 3.2w。如有更好的工具欢迎推荐 "),a("a",{attrs:{href:"https://gitee.com/javen205/TNWX/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("issues"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"开源推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开源推荐"}},[t._v("#")]),t._v(" 开源推荐")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("TNWX")]),t._v(" 微信公众号开发脚手架："),a("a",{attrs:{href:"https://gitee.com/javen205/TNWX",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/javen205/TNWX"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("code",[t._v("IJPay")]),t._v(" 让支付触手可及："),a("a",{attrs:{href:"https://gitee.com/javen205/IJPay",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/javen205/IJPay"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("SpringBoot 微服务高效开发 "),a("code",[t._v("mica")]),t._v(" 工具集："),a("a",{attrs:{href:"https://gitee.com/596392912/mica",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/596392912/mica"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("code",[t._v("Avue")]),t._v(" 一款基于 vue 可配置化的神奇框架："),a("a",{attrs:{href:"https://gitee.com/smallweigit/avue",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/smallweigit/avue"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("code",[t._v("pig")]),t._v(" 宇宙最强微服务（架构师必备）："),a("a",{attrs:{href:"https://gitee.com/log4j/pig",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/log4j/pig"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("code",[t._v("SpringBlade")]),t._v(" 完整的线上解决方案（企业开发必备）："),a("a",{attrs:{href:"https://gitee.com/smallc/SpringBlade",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/smallc/SpringBlade"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);