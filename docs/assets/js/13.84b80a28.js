(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{54:function(t,a,s){t.exports=s.p+"assets/img/menu.8d176bdf.jpg"},55:function(t,a,s){t.exports=s.p+"assets/img/role.037e352d.jpg"},67:function(t,a,s){t.exports=s.p+"assets/img/user_role.182eb499.jpg"},82:function(t,a,s){"use strict";s.r(a);var n=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"权限管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#权限管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 权限管理")]),t._v(" "),n("p",[t._v("本节介绍系统权限管理内容，权限管理分为以下及部分：")]),t._v(" "),n("ul",[n("li",[t._v("权限配置")]),t._v(" "),n("li",[t._v("权限控制")])]),t._v(" "),n("h2",{attrs:{id:"权限配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#权限配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 权限配置")]),t._v(" "),n("p",[t._v("权限管理的核心为控制角色对菜单的访问，所以权限配置主要包含以下内容的维护：")]),t._v(" "),n("ul",[n("li",[t._v("菜单管理： 维护要控制的页面菜单和按钮")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(54),alt:"menu"}})]),t._v(" "),n("ul",[n("li",[t._v("角色管理： 为角色配置可以访问的菜单和按钮")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(55),alt:"menu"}})]),t._v(" "),n("ul",[n("li",[t._v("用户管理： 为用户配置角色")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(67),alt:"menu"}})]),t._v(" "),n("h2",{attrs:{id:"权限控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#权限控制","aria-hidden":"true"}},[t._v("#")]),t._v(" 权限控制")]),t._v(" "),n("p",[t._v("权限控制包含内容较多，本节从几方面说明")]),t._v(" "),n("ul",[n("li",[t._v("Shiro的过滤器链")]),t._v(" "),n("li",[t._v("左侧菜单导航的权限控制")]),t._v(" "),n("li",[t._v("页面功能的权限控制")]),t._v(" "),n("li",[t._v("后台权限控制")])]),t._v(" "),n("h2",{attrs:{id:"shiro的过滤器链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shiro的过滤器链","aria-hidden":"true"}},[t._v("#")]),t._v(" Shiro的过滤器链")]),t._v(" "),n("p",[t._v("cn.enilu.guns.admin.config.web.ShiroConfig 中配置系统登录url，登录成功url，以及拦截器链，参考代码")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n   "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" ShiroFilterFactoryBean "),n("span",{attrs:{class:"token function"}},[t._v("shiroFilter")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DefaultWebSecurityManager securityManager"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       ShiroFilterFactoryBean shiroFilter "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("ShiroFilterFactoryBean")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       shiroFilter"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setSecurityManager")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("securityManager"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),n("span",{attrs:{class:"token comment"}},[t._v("/**\n        * 默认的登陆访问url\n        */")]),t._v("\n       shiroFilter"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setLoginUrl")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"/login"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),n("span",{attrs:{class:"token comment"}},[t._v("/**\n        * 登陆成功后跳转的url\n        */")]),t._v("\n       shiroFilter"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setSuccessUrl")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"/"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),n("span",{attrs:{class:"token comment"}},[t._v("/**\n        * 没有权限跳转的url\n        */")]),t._v("\n       shiroFilter"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setUnauthorizedUrl")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"/global/error"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),n("span",{attrs:{class:"token comment"}},[t._v("/**\n        * 配置shiro拦截器链\n        *\n        * anon  不需要认证\n        * authc 需要认证\n        * user  验证通过或RememberMe登录的都可以\n        *\n        * 当应用开启了rememberMe时,用户下次访问时可以是一个user,但不会是authc,因为authc是需要重新认证的\n        *\n        * 顺序从上到下,优先级依次降低\n        *\n        */")]),t._v("\n       Map"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" hashMap "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("LinkedHashMap")]),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       hashMap"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("put")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"/static/**"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"anon"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       hashMap"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("put")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"/login"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"anon"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       hashMap"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("put")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"/global/sessionError"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"anon"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       hashMap"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("put")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"/kaptcha"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"anon"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       hashMap"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("put")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"/**"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"user"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       shiroFilter"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setFilterChainDefinitionMap")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hashMap"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" shiroFilter"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"左侧菜单导航的权限控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#左侧菜单导航的权限控制","aria-hidden":"true"}},[t._v("#")]),t._v(" 左侧菜单导航的权限控制")]),t._v(" "),n("p",[t._v("登录成功后根据当前用户角色查询所有菜单，生成左侧菜单树：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("List"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Integer"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" roleList "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ShiroKit"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getUser")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getRoleList")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nList"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MenuNode"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" menuNodes "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("  menuService"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getMenusByRoleIds")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roleList"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nList"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MenuNode"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" titles "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" MenuNode"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("buildTitle")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("menuNodes"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntitles "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ApiMenuFilter"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("build")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("titles"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodel"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addAttribute")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"titles"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" titles"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("页面生成菜单树:")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("  @for(title in titles){\n    @if(tool.isEmpty(title.children)){\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("J_menuItem"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${ctxPath}${title.url}"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tabMenuItem"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fa ${title.icon}"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nav-label"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${title.name}"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    @}else{\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fa ${title.icon}"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nav-label"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${title.name}"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fa arrow"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nav nav-second-level"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                @for(subTitle in title.children){\n                    @if(tool.isEmpty(subTitle.children)){\n                        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("J_menuItem"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${ctxPath}${subTitle.url}"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tabMenuItem"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${subTitle.name}"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    @}else{\n                        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${subTitle.name} "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fa arrow"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nav nav-third-level"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                                @for(thirdTitle in subTitle.children){\n                                "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                                    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("J_menuItem"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${ctxPath}${thirdTitle.url}"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tabMenuItem"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${thirdTitle.name}"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                                "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                                @}\n                            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    @}\n                @}\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    @}\n@}\n")])])]),n("h2",{attrs:{id:"页面功能的权限控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面功能的权限控制","aria-hidden":"true"}},[t._v("#")]),t._v(" 页面功能的权限控制")]),t._v(" "),n("p",[t._v("页面功能的权限控制在“开发第一个功能”的章节有提到过，具体方法为调用方法shiro.hasPermission 来判断用户是否具备操作指定功能的权限，如果有，则显示该功能，没有则不显示该功能：")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v('@if(shiro.hasPermission("/cfg/add")){\n'),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("#button")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("添加"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("icon")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fa-plus"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("clickFun")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Cfg.openAddCfg()"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n@}\n\n")])])]),n("h2",{attrs:{id:"后台权限控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后台权限控制","aria-hidden":"true"}},[t._v("#")]),t._v(" 后台权限控制")]),t._v(" "),n("p",[t._v('后台权限控制是指在controller层增加权限控制，以避免用户跳过页面权限控制直接访问后台api。\n具体方法为在指定的controller增加权限控制注解：  @Permission("角色别名")即可\n例如在字典详情的方法中我们按照如下方法添加Permission注解，即控制只有管理员角色才能查看字典详情：')]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"/detail/{dictId}"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Permission")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Const"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ADMIN_NAME"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@ResponseBody")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Object "),n("span",{attrs:{class:"token function"}},[t._v("detail")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@PathVariable")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"dictId"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Integer dictId"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dictRepository"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("findOne")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dictId"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],o=s(0),c=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);c.options.__file="permissionMgr.md";a.default=c.exports}}]);