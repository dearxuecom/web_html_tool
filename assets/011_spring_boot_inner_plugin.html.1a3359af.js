import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as i,c,a as n,b as t,d as s,e}from"./app.77798a59.js";const l={},u=n("thead",null,[n("tr",null,[n("th",null,"pugin"),n("th",null,"\u6587\u6863"),n("th",null,"\u6E90\u7801"),n("th",null,"\u5907\u6CE8")])],-1),r=n("td",null,"org.springframework.boot",-1),d=n("td",null,"2.7.0",-1),k={href:"https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/",target:"_blank",rel:"noopener noreferrer"},g=s("DOC"),m={href:"https://github.com/spring-projects/spring-boot/tree/main/spring-boot-project/spring-boot-tools/spring-boot-gradle-plugin",target:"_blank",rel:"noopener noreferrer"},v=s("\u6E90\u7801"),b=n("td",null,"io.spring.dependency-management",-1),_=n("td",null,"1.0.11.REALEASE",-1),f={href:"https://docs.spring.io/dependency-management-plugin/docs/current/reference/html/",target:"_blank",rel:"noopener noreferrer"},h=s("DOC"),y={href:"https://github.com/spring-gradle-plugins/dependency-management-plugin",target:"_blank",rel:"noopener noreferrer"},w=s("\u6E90\u7801"),j=n("p",null,"Spring \u6709\u4E0A\u9762\u4E24\u4E2A\u5728\u516C\u5171\u5E93\u7684\u63D2\u4EF6\uFF0C \u4E00\u4E2AGradle\u63D2\u4EF6\u7684\u5F00\u53D1\u3001\u53D1\u5E03\u662F\u4E2A\u6BD4\u8F83\u5197\u957F\u7684\u8FC7\u7A0B\uFF0C\u90A3\u5982\u679C\u6211\u4EEC\u5728\u63D2\u4EF6\u7684\u4EE3\u7801\u7F16\u5199\u9636\u6BB5\uFF0C\u603B\u4E0D\u80FD\u4FEE\u6539\u4E00\u70B9\u70B9\u4EE3\u7801\uFF0C\u5C31\u53D1\u5E03\u4E00\u4E2A\u7248\u672C\uFF0C\u7136\u540E\u91CD\u65B0\u8FD0\u7528\u5427\uFF1F",-1),S=n("p",null,"\u6709\u4EBA\u53EF\u80FD\u4F1A\u8BF4\uFF0C\u90A3\u5C31\u4E0D\u53D1\u5E03\u5230maven\u4ED3\u5E93\uFF0C\u800C\u662F\u53D1\u5E03\u5230\u672C\u5730\u4ED3\u5E93\u5457\uFF0C\u7136\u800C\u8FD9\u6837\u81F3\u591A\u53D1\u5E03\u65F6\u8282\u7701\u4E00\u70B9\u70B9\u65F6\u95F4\uFF0C\u4ECD\u7136\u592A\u9EBB\u70E6\u3002",-1),q=s("\u5E78\u597D\u6709 "),C=n("code",null,"buildSrc",-1),P=s("! \u5728"),O=n("code",null,"buildSrc",-1),x=s("\u4E2D\u5B9A\u4E49\u7684\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728\u5176\u4ED6module\u4E2D\u8FD0\u7528\uFF0C\u53EF\u4EE5\u53C2\u8003spring, spring-boot \u4E2D\u7684"),N={href:"https://github.com/spring-projects/spring-boot/tree/main/buildSrc",target:"_blank",rel:"noopener noreferrer"},B=s("buildSrc"),E=s("\u903B\u8F91\uFF0C\u6240\u6709\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\u7684 "),D=n("code",null,"org.springframework.boot*",-1),I=s(" \u5F00\u5934\u63D2\u4EF6\u90FD\u662F\u4EE5\u8FD9\u6837\u65B9\u5F0F\u63D0\u4F9B\u7684\u3002"),A=e(`<div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>
gradlePlugin {
	plugins {
		bomPlugin {
			id = &quot;org.springframework.boot.bom&quot;
			implementationClass = &quot;org.springframework.boot.build.bom.BomPlugin&quot;
		}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F15\u7528\u548C\u4F7F\u7528\u4EFB\u4F55\u7B2C\u4E09\u65B9\u63D2\u4EF6\u4E00\u6837\uFF1A</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>
plugins <span class="token punctuation">{</span>
	id <span class="token interpolation-string"><span class="token string">&quot;org.springframework.boot.bom&quot;</span></span>
	id <span class="token interpolation-string"><span class="token string">&quot;org.springframework.boot.conventions&quot;</span></span>
	id <span class="token interpolation-string"><span class="token string">&quot;org.springframework.boot.deployed&quot;</span></span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5373\u76F4\u63A5apply\u5177\u4F53\u7684\u7C7B\uFF0C\u800C\u4E0D\u662F\u5176\u53D1\u5E03\u540D\u79F0\uFF0C\u8FD9\u6837\u7684\u8BDD\uFF0C\u4E0D\u7BA1\u505A\u4EC0\u4E48\u4FEE\u6539\uFF0C\u90FD\u80FD\u9A6C\u4E0A\u4F53\u73B0\uFF0C\u800C\u4E0D\u9700\u8981\u7B49\u5230\u91CD\u65B0\u53D1\u5E03\u7248\u672C\u3002</p><p>spring boot \u5927\u6982\u63D0\u4F9B\u4E8610\u51E0\u4E2A\u4EE3\u7801\u91CC\u9762\u5185\u5E26\u7684 plugin spring \u53EA\u6269\u5C55\u4E86\u4E09\u4E2A\uFF1A <code>org.springframework.build.api-diff</code>, <code>org.springframework.build.compile</code>, <code>org.springframework.build.optional-dependencies</code></p><p>\u5206\u6790\u4E2A <code>org.springframework.build.optional.OptionalDependenciesPlugin</code></p>`,6),T={href:"https://github.com/spring-projects/spring-boot/blob/main/buildSrc/src/main/java/org/springframework/boot/build/optional/OptionalDependenciesPlugin.java",target:"_blank",rel:"noopener noreferrer"},L=s("spring-boot > OptionalDependenciesPlugin"),R={href:"https://github.com/spring-projects/spring-framework/blob/main/buildSrc/src/main/java/org/springframework/build/optional/OptionalDependenciesPlugin.java",target:"_blank",rel:"noopener noreferrer"},V=s("spring-framework > OptionalDependenciesPlugin"),F=e(`<p>\u4E24\u4E2A\u5B9E\u73B0\u7684\u65B9\u5F0F\u57FA\u672C\u4E00\u6837\u7684 <code>optional</code>\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OptionalDependenciesPlugin</span> <span class="token keyword">implements</span> <span class="token class-name">Plugin</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Project</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * Name of the <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">optional</span></span><span class="token punctuation">}</span> configuration.
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> OPTIONAL_CONFIGURATION_NAME <span class="token operator">=</span> <span class="token string">&quot;optional&quot;</span><span class="token punctuation">;</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">apply</span><span class="token punctuation">(</span><span class="token class-name">Project</span> project<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Configuration</span> optional <span class="token operator">=</span> project<span class="token punctuation">.</span><span class="token function">getConfigurations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;optional&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		optional<span class="token punctuation">.</span><span class="token function">setCanBeConsumed</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		optional<span class="token punctuation">.</span><span class="token function">setCanBeResolved</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		project<span class="token punctuation">.</span><span class="token function">getPlugins</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withType</span><span class="token punctuation">(</span><span class="token class-name">JavaPlugin</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>javaPlugin<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
			<span class="token class-name">SourceSetContainer</span> sourceSets <span class="token operator">=</span> project<span class="token punctuation">.</span><span class="token function">getExtensions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getByType</span><span class="token punctuation">(</span><span class="token class-name">JavaPluginExtension</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">getSourceSets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			sourceSets<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">(</span>sourceSet<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
				project<span class="token punctuation">.</span><span class="token function">getConfigurations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span>sourceSet<span class="token punctuation">.</span><span class="token function">getCompileClasspathConfigurationName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">extendsFrom</span><span class="token punctuation">(</span>optional<span class="token punctuation">)</span><span class="token punctuation">;</span>
				project<span class="token punctuation">.</span><span class="token function">getConfigurations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span>sourceSet<span class="token punctuation">.</span><span class="token function">getRuntimeClasspathConfigurationName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">extendsFrom</span><span class="token punctuation">(</span>optional<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>optional</code> \u4F5C\u4E3A <code>compileOnly</code> \u4E00\u4E2A\u66FF\u4EE3\uFF0C \u5728 <code>compile</code> \u548C <code>runtime</code> classpath \u91CC\u9762\u4F46\u662F\u4E0D\u4F1A\u589E\u52A0\u5230 \u4F9D\u8D56\u91CC\u9762\u3002 \u4F46\u662F <code>compileOnly</code> \u5176\u5B9E\u4F1A\u5BFC\u81F4\u6D4B\u8BD5\u7684 <code>classpath</code> \u65E0\u6CD5\u6EE1\u8DB3\uFF0C \u6240\u4EE5\u4F60\u4F1A\u770B\u5230\u6BD4\u8F83\u7B28\u7684\u89E3\u51B3\u65B9\u6848\uFF1A</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>dependencies <span class="token punctuation">{</span>
    compileOnly <span class="token interpolation-string"><span class="token string">&quot;org.slf4j:slf4j-api&quot;</span></span>
    testImplementation <span class="token interpolation-string"><span class="token string">&quot;org.slf4j:slf4j-api&quot;</span></span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function G(J,M){const a=p("ExternalLinkIcon");return i(),c("div",null,[n("table",null,[u,n("tbody",null,[n("tr",null,[r,d,n("td",null,[n("a",k,[g,t(a)])]),n("td",null,[n("a",m,[v,t(a)])])]),n("tr",null,[b,_,n("td",null,[n("a",f,[h,t(a)])]),n("td",null,[n("a",y,[w,t(a)])])])])]),j,S,n("p",null,[q,C,P,O,x,n("a",N,[B,t(a)]),E,D,I]),A,n("p",null,[n("a",T,[L,t(a)])]),n("p",null,[n("a",R,[V,t(a)])]),F])}var H=o(l,[["render",G],["__file","011_spring_boot_inner_plugin.html.vue"]]);export{H as default};
