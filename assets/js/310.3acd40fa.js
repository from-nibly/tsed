(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{1034:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"class-platformhandler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class-platformhandler"}},[t._v("#")]),t._v(" Class PlatformHandler")]),t._v(" "),s("Badge",{attrs:{text:"Class",type:"class"}}),t._v(" "),s("Badge",{attrs:{text:"platform",title:"platform",type:"platform"}}),t._v(" "),s("Badge",{attrs:{text:"private",title:"private",type:"private"}}),t._v(" "),s("section",{staticClass:"table-features"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[t._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { PlatformHandler } "),s("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),s("span",{staticClass:"token string"},[t._v('"@tsed/platform/common/src/services/PlatformHandler"')])])])]),s("tr",[s("th",[t._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/tsedio/tsed/blob/v6.73.5/packages/platform/common/src/services/PlatformHandler.ts#L0-L0"}},[t._v("/packages/platform/common/src/services/PlatformHandler.ts")])])])])])]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" PlatformHandler "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" injector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("InjectorService")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/platform-params/builder/PlatformParams.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformParams")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" responseFilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/platform-response-filter/services/PlatformResponseFilter.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformResponseFilter")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("injector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("InjectorService")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/platform-params/builder/PlatformParams.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformParams")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("div",{pre:!0,attrs:{class:"language- extra-class"}},[s("pre",[s("code",[t._v('<span class="token function">createHandler</span><span class="token punctuation">(</span>input<span class="token punctuation">:</span> <a href="/api/platform/common/domain/EndpointMetadata.html"><span class="token">EndpointMetadata</span></a> | <a href="/api/platform/common/domain/HandlerMetadata.html"><span class="token">HandlerMetadata</span></a> | <span class="token keyword">any</span><span class="token punctuation">,</span> options?<span class="token punctuation">:</span> PlatformRouteWithoutHandlers<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n\n<span class="token function">createCustomHandler</span><span class="token punctuation">(</span>provider<span class="token punctuation">:</span> <a href="/api/di/domain/Provider.html"><span class="token">Provider</span></a><span class="token punctuation">,</span> propertyKey<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$ctx<span class="token punctuation">:</span> <a href="/api/platform/common/domain/PlatformContext.html"><span class="token">PlatformContext</span></a><span class="token punctuation">,</span> next?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span> =&gt; Promise&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\n\n<span class="token function">flush</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> ctx<span class="token punctuation">:</span> <a href="/api/platform/common/domain/PlatformContext.html"><span class="token">PlatformContext</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token keyword">void</span>&gt;<span class="token punctuation">;</span>\n<span class="token function">compileHandler</span><span class="token punctuation">(</span>metadata<span class="token punctuation">:</span> <a href="/api/platform/common/domain/HandlerMetadata.html"><span class="token">HandlerMetadata</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>scope<span class="token punctuation">:</span> Record&lt;<span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">any</span>&gt;<span class="token punctuation">)</span> =&gt; Promise&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\n<span class="token keyword">protected</span> <span class="token function">onCtxRequest</span><span class="token punctuation">(</span>requestOptions<span class="token punctuation">:</span> <a href="/api/platform/common/services/OnRequestOptions.html"><span class="token">OnRequestOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\n\n<span class="token keyword">protected</span> <span class="token function">onRequest</span><span class="token punctuation">(</span>requestOptions<span class="token punctuation">:</span> <a href="/api/platform/common/services/OnRequestOptions.html"><span class="token">OnRequestOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\n<span class="token keyword">protected</span> <span class="token function">onError</span><span class="token punctuation">(</span>er<span class="token punctuation">:</span> Error<span class="token punctuation">,</span> requestOptions<span class="token punctuation">:</span> <a href="/api/platform/common/services/OnRequestOptions.html"><span class="token">OnRequestOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\n\n<span class="token keyword">protected</span> <span class="token function">onSuccess</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> requestOptions<span class="token punctuation">:</span> <a href="/api/platform/common/services/OnRequestOptions.html"><span class="token">OnRequestOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\n\n<span class="token keyword">protected</span> <span class="token function">callReturnedMiddleware</span><span class="token punctuation">(</span>middleware<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> ctx<span class="token punctuation">:</span> <a href="/api/platform/common/domain/PlatformContext.html"><span class="token">PlatformContext</span></a><span class="token punctuation">,</span> next<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n\n<span class="token keyword">protected</span> <span class="token function">render</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> ctx<span class="token punctuation">:</span> <a href="/api/platform/common/domain/PlatformContext.html"><span class="token">PlatformContext</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\n\n<span class="token keyword">protected</span> <span class="token function">createRawHandler</span><span class="token punctuation">(</span>metadata<span class="token punctuation">:</span> <a href="/api/platform/common/domain/HandlerMetadata.html"><span class="token">HandlerMetadata</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n\n<span class="token keyword">protected</span> <span class="token function">setHeaders</span><span class="token punctuation">(</span>ctx<span class="token punctuation">:</span> <a href="/api/platform/common/domain/PlatformContext.html"><span class="token">PlatformContext</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token keyword">protected</span> <span class="token function">next</span><span class="token punctuation">(</span>requestOptions<span class="token punctuation">:</span> <a href="/api/platform/common/services/OnRequestOptions.html"><span class="token">OnRequestOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n<span class="token keyword">protected</span> <span class="token function">getDefaultArgs</span><span class="token punctuation">(</span>metadata<span class="token punctuation">:</span> <a href="/api/platform/common/domain/HandlerMetadata.html"><span class="token">HandlerMetadata</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>scope<span class="token punctuation">:</span> <a href="/api/platform/platform-params/builder/ArgScope.html"><span class="token">ArgScope</span></a>&lt;<a href="/api/platform/common/domain/PlatformContext.html"><span class="token">PlatformContext</span></a>&gt;<span class="token punctuation">)</span> =&gt; Promise&lt;<span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">;</span>\n')])])]),s("p",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("Platform Handler abstraction layer. Wrap original class method to a pure platform handler (Express, Koa, etc...).")]),t._v(" "),s("h2",{attrs:{id:"members"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" injector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("InjectorService")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/platform-params/builder/PlatformParams.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformParams")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" responseFilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/platform-response-filter/services/PlatformResponseFilter.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformResponseFilter")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/common/domain/EndpointMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("EndpointMetadata")])]),t._v(" | "),s("a",{pre:!0,attrs:{href:"/api/platform/common/domain/HandlerMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("HandlerMetadata")])]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PlatformRouteWithoutHandlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Create a native middleware based on the given metadata and return an instance of AnyToPromiseWithCtx")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCustomHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/di/domain/Provider.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Provider")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" propertyKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/common/domain/PlatformContext.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformContext")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" => Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Create injectable handler from the given provider")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flush")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/common/domain/PlatformContext.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformContext")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Send the response to the consumer.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compileHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/common/domain/HandlerMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("HandlerMetadata")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Record<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" => Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCtxRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requestOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/common/services/OnRequestOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OnRequestOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requestOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/common/services/OnRequestOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OnRequestOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Call handler when a request his handle")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("er"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" requestOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/common/services/OnRequestOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OnRequestOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onSuccess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" requestOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/common/services/OnRequestOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OnRequestOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Manage success scenario")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callReturnedMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/common/domain/PlatformContext.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformContext")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Call the returned middleware by the handler.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/common/domain/PlatformContext.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformContext")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Render the view if the endpoint has a configured view.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRawHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/common/domain/HandlerMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("HandlerMetadata")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("create Raw handler")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeaders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/common/domain/PlatformContext.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformContext")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Set response headers")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requestOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/common/services/OnRequestOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OnRequestOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDefaultArgs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/common/domain/HandlerMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("HandlerMetadata")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/platform/platform-params/builder/ArgScope.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("ArgScope")])]),t._v("<"),s("a",{pre:!0,attrs:{href:"/api/platform/common/domain/PlatformContext.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformContext")])]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" => Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);