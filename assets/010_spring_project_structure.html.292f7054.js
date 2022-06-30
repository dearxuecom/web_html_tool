import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as r,c as l,a as n,b as i,d as s,e as a}from"./app.77798a59.js";const p={},c=s("Spring \u65E9\u57282020 \u5C06\u6574\u4E2A\u6846\u67B6\u7F16\u8BD1\u5E73\u53F0\u4ECEmaven \u8FC1\u79FB\u5230gradle: "),d={href:"https://spring.io/blog/2020/06/08/migrating-spring-boot-s-build-to-gradle",target:"_blank",rel:"noopener noreferrer"},u=s("Migrating Spring Boot's Build to Gradle"),g=s("; \u6765\u770B\u4E00\u770Bspring \u4E24\u4E2A\u5173\u952E\u7684\u9879\u76EE\uFF0C\u662F\u5982\u4F55\u7EC4\u7EC7\u81EA\u5DF1\u7684\u9879\u76EE\u7684\uFF1A"),v={href:"https://github.com/spring-projects/spring-framework",target:"_blank",rel:"noopener noreferrer"},b=s("spring framework"),m=s(" spring framework \u6E90\u7801"),h={href:"https://github.com/spring-projects/spring-boot",target:"_blank",rel:"noopener noreferrer"},_=s("spring boot"),k=s(" spring boot \u6E90\u7801"),f={href:"https://ge.spring.io/scans?search.timeZoneId=Asia/Shanghai",target:"_blank",rel:"noopener noreferrer"},j=s("spring scan"),q=s(" \u5305\u542B\u6240\u6709spring \u7F16\u8BD1\u7684scan"),x=n("h2",{id:"spring-framework",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#spring-framework","aria-hidden":"true"},"#"),s(" Spring Framework")],-1),y={href:"https://ge.spring.io/scans?search.timeZoneId=Asia/Shanghai",target:"_blank",rel:"noopener noreferrer"},w=s("spring scan"),S=s(" \u627E\u4E00\u4E2A\u7F16\u8BD1\u6210\u529F\u7684\u9879\u76EE\u5F00\u59CB\u5206\u6790\u3002"),B=a(`<p>\u9879\u76EE\u7ED3\u6784\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>buildSrc
framework-bom
integration-tests
spring-aop
spring-aspects
spring-beans
spring-context
spring-context-indexer
spring-context-support
spring-core
spring-core-test
spring-expression
spring-instrument
spring-jcl
spring-jdbc
spring-jms
spring-messaging
spring-orm
spring-oxm
spring-r2dbc
spring-test
spring-tx
spring-web
spring-webflux
spring-webmvc
spring-websocket
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gradle-properties-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#gradle-properties-\u914D\u7F6E" aria-hidden="true">#</a> <code>gradle.properties</code> \u914D\u7F6E</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>org.gradle.jvmargs<span class="token operator">=</span>-Xmx2048m
org.gradle.caching<span class="token operator">=</span>true
org.gradle.parallel<span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="settings-gradle-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#settings-gradle-\u914D\u7F6E" aria-hidden="true">#</a> <code>settings.gradle</code> \u914D\u7F6E</h3><p>\u5F02\u6784\u4E86 <code>build.gradle</code> \u5230\u6BCF\u4E2A\u9879\u76EE\u540D\u5B57 gradle \u6BD4\u5982 <code>spring-websocket.gradle</code></p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>rootProject.name = &quot;spring&quot;
rootProject.children.each {project -&gt;
	project.buildFileName = &quot;\${project.name}.gradle&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="build-gradle-\u4E3B\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#build-gradle-\u4E3B\u5165\u53E3" aria-hidden="true">#</a> <code>build.gradle</code> \u4E3B\u5165\u53E3</h2><p>\u91CC\u9762\u5185\u5BB9\u6BD4\u4EF7\u591A\uFF0C \u5F02\u8BAE\u5206\u89E3\u4E0B</p>`,9),D=s("\u9884\u5B9A\u4E49\u5F88\u591A\u7684 plugin\uFF0C\u5927\u90E8\u5206 apply false, \u8868\u793A\u6839\u9879\u76EE\u6682\u65F6\u4E0Dapply\u8FD9\u4E9B\u63D2\u4EF6\uFF0C \u5B50\u9879\u76EE\u53EF\u4EE5\u5F15\u5165\uFF0C\u53EF\u4EE5\u4ECE"),A={href:"https://docs.gradle.org/current/userguide/plugins.html#sec:subprojects_plugins_dsl",target:"_blank",rel:"noopener noreferrer"},E=s("\u6839\u9879\u76EE\u63A7\u5236\u7248\u672C-Applying external plugins with same version to subprojects"),M=s("\u3002"),P=a("<li>ext \u9879\u76EE\u57FA\u672C\u7684\u5F52\u7C7B\uFF0C <code>framework-bom</code> \u6BD4\u8F83\u7279\u522B\uFF0C \u770B\u540D\u5B57\u5C31\u77E5\u9053\u5979\u662F\u54E5bom \u7C7B\u5E93\u7BA1\u7406\u9879\u76EE\u3002 <ol><li><code>moduleProjects</code> \u6A21\u5757\u9879\u76EE\uFF1A \u6240\u6709\u7684 <code>spring-</code> \u5F00\u5934\u9879\u76EE</li><li><code>javaProjects</code> java\u9879\u76EE\uFF1A\u5254\u9664 <code>framework-bom</code> \u7684\u9879\u76EE</li></ol></li><li>\u5404\u4E2A\u9879\u76EE\u7684\u914D\u7F6E <ol><li>\u6240\u6709\u4F9D\u8D56 <code>io.spring.dependency-management</code> \u6765\u7BA1\u7406\u4F9D\u8D56</li><li>\u6839\u9879\u76EE + java \u9879\u76EE\u7684\u63D2\u4EF6\u914D\u7F6E\uFF0C\u4E3B\u8981\u662F\u6D4B\u8BD5\u4F9D\u8D56\u90E8\u5206\u914D\u7F6E</li><li>java</li><li>check style</li><li>tool chain</li><li>text fixture</li></ol></li><li>\u6A21\u5757\u9879\u76EE\uFF0C \u5355\u72EC\u5F15\u5165 <code>spring-module.gradle</code> \u914D\u7F6E</li><li>jar \u914D\u7F6E</li><li>doc \u914D\u7F6E</li><li>jmh \u914D\u7F6E</li><li>repository \u63A8\u9001\u914D\u7F6E</li><li>framework-bom</li><li>java-platform \u63D2\u4EF6\uFF0C \u4E0D\u9700\u8981java \u63D2\u4EF6\uFF0C\u5426\u5219\u51FA\u9519</li><li>publications.gradle\uFF0C \u5F15\u5165\u91CC\u9762\u7684\u4EFB\u52A1</li><li>\u5C06\u6240\u6709\u7684 <code>moduleProjects</code> \u9879\u76EE\u52A0\u5165\u5230 BOM \u4E2D</li>",11),C=n("h2",{id:"spring-boot",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#spring-boot","aria-hidden":"true"},"#"),s(" Spring Boot")],-1),I={href:"https://ge.spring.io/scans?search.timeZoneId=Asia/Shanghai",target:"_blank",rel:"noopener noreferrer"},N=s("spring scan"),$=s(" \u627E\u4E00\u4E2A\u7F16\u8BD1\u6210\u529F\u7684\u9879\u76EE\u5F00\u59CB\u5206\u6790\u3002"),L=a(`<p>spring boot \u7ED3\u6784\u76F8\u5BF9\u590D\u6742\uFF0C \u6709193 \u4E2A\u9879\u76EE\uFF08\u4E3B\u8981\u5728smoke test\uFF09\uFF0C\u4F46\u662F\u4E00\u7EA7\u9879\u76EE\u6CA1\u6709\u90A3\u4E48\u591A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
spring-boot-build +4
spring-boot-project +14
spring-boot
spring-boot-actuator
spring-boot-actuator-autoconfigure
spring-boot-autoconfigure
spring-boot-cli
spring-boot-dependencies
spring-boot-devtools
spring-boot-docs
spring-boot-parent
spring-boot-properties-migrator
spring-boot-starters +54
spring-boot-test
spring-boot-test-autoconfigure
spring-boot-tools +12
spring-boot-system-tests
spring-boot-deployment-tests
spring-boot-image-tests
spring-boot-tests

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E spring boot \u5D4C\u5957\u7684\u9879\u76EE\u6BD4\u8F83\u6DF1\uFF0C <code>settings.gradle</code> \u6709\u4E9B\u6280\u5DE7:</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>
file(&quot;\${rootDir}/spring-boot-project/spring-boot-starters&quot;).eachDirMatch(~/spring-boot-starter.*/) {
	include &quot;spring-boot-project:spring-boot-starters:\${it.name}&quot;
}

file(&quot;\${rootDir}/spring-boot-tests/spring-boot-smoke-tests&quot;).eachDirMatch(~/spring-boot-smoke-test.*/) {
	include &quot;spring-boot-tests:spring-boot-smoke-tests:\${it.name}&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gradle.properties \u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
org.gradle.caching<span class="token operator">=</span>true
org.gradle.parallel<span class="token operator">=</span>true
org.gradle.jvmargs<span class="token operator">=</span>-Xmx2g -Dfile.encoding<span class="token operator">=</span>UTF-8

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>build.gradle \u914D\u7F6E\u7B80\u5355\uFF0C \u4EC5\u4EC5\u7ED9\u6BCF\u4E2A\u9879\u76EE:</p><ol><li>base plugin</li></ol><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>allprojects {
	group &quot;org.springframework.boot&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spring-boot-dependencies" tabindex="-1"><a class="header-anchor" href="#spring-boot-dependencies" aria-hidden="true">#</a> spring-boot-dependencies</h3>`,10),O=s("\u4E24\u4E2A"),V={href:"https://github.com/spring-projects/spring-boot/tree/main/spring-boot-project/spring-boot-tools",target:"_blank",rel:"noopener noreferrer"},F=s("\u975E\u5E38\u91CD\u8981\u7684\u63D2\u4EF6"),Z=s(" & \u53C2\u8003\uFF1A "),T={href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#appendix.dependency-versions.coordinates",target:"_blank",rel:"noopener noreferrer"},X=s("BOM \u7248\u672C"),G=s(" + "),J={href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#appendix.dependency-versions.properties",target:"_blank",rel:"noopener noreferrer"},R=s("\u7248\u672C\u5B57\u6BB5"),U=s(" \u3002"),Y=n("thead",null,[n("tr",null,[n("th",null,"pugin"),n("th",null,"\u6587\u6863"),n("th",null,"\u6E90\u7801"),n("th",null,"\u5907\u6CE8")])],-1),z=n("td",null,"org.springframework.boot",-1),H=n("td",null,"2.7.0",-1),K={href:"https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/",target:"_blank",rel:"noopener noreferrer"},Q=s("DOC"),W={href:"https://github.com/spring-projects/spring-boot/tree/main/spring-boot-project/spring-boot-tools/spring-boot-gradle-plugin",target:"_blank",rel:"noopener noreferrer"},nn=s("\u6E90\u7801"),sn=n("td",null,"io.spring.dependency-management",-1),en=n("td",null,"1.0.11.REALEASE",-1),an={href:"https://docs.spring.io/dependency-management-plugin/docs/current/reference/html/",target:"_blank",rel:"noopener noreferrer"},on=s("DOC"),tn={href:"https://github.com/spring-gradle-plugins/dependency-management-plugin",target:"_blank",rel:"noopener noreferrer"},rn=s("\u6E90\u7801"),ln=a(`<p><strong>spring-boot-parent</strong> \u53C8\u662F\u4E00\u4E2A bom \u9879\u76EE:</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>
bom<span class="token punctuation">{</span>
    <span class="token punctuation">....</span>
<span class="token punctuation">}</span>

dependencies <span class="token punctuation">{</span>
	<span class="token function">api</span><span class="token punctuation">(</span><span class="token function">enforcedPlatform</span><span class="token punctuation">(</span><span class="token function">project</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;:spring-boot-project:spring-boot-dependencies&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5404\u4E2Astarter \u5176\u5B9E\u662F spring-framework api bom \u4F9D\u8D56, \u6BD4\u5982 <code>spring-boot-starter-data-jdbc</code>:</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>plugins <span class="token punctuation">{</span>
	id <span class="token interpolation-string"><span class="token string">&quot;org.springframework.boot.starter&quot;</span></span>
<span class="token punctuation">}</span>

description <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;Starter for using Spring Data JDBC&quot;</span></span>

dependencies <span class="token punctuation">{</span>
	<span class="token function">api</span><span class="token punctuation">(</span><span class="token function">project</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;:spring-boot-project:spring-boot-starters:spring-boot-starter-jdbc&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token function">api</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;org.springframework.data:spring-data-jdbc&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6839\u76EE\u5F55\u7684 <code>spring-boot-starter</code>:</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>
plugins <span class="token punctuation">{</span>
	id <span class="token interpolation-string"><span class="token string">&quot;org.springframework.boot.starter&quot;</span></span>
<span class="token punctuation">}</span>

description <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;Core starter, including auto-configuration support, logging and YAML&quot;</span></span>

dependencies <span class="token punctuation">{</span>
	<span class="token function">api</span><span class="token punctuation">(</span><span class="token function">project</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;:spring-boot-project:spring-boot&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token function">api</span><span class="token punctuation">(</span><span class="token function">project</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;:spring-boot-project:spring-boot-autoconfigure&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token function">api</span><span class="token punctuation">(</span><span class="token function">project</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;:spring-boot-project:spring-boot-starters:spring-boot-starter-logging&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token function">api</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;jakarta.annotation:jakarta.annotation-api&quot;</span></span><span class="token punctuation">)</span>
	<span class="token function">api</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;org.springframework:spring-core&quot;</span></span><span class="token punctuation">)</span>
	<span class="token function">api</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;org.yaml:snakeyaml&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function pn(cn,dn){const e=t("ExternalLinkIcon");return r(),l("div",null,[n("p",null,[c,n("a",d,[u,i(e)]),g]),n("ol",null,[n("li",null,[n("a",v,[b,i(e)]),m]),n("li",null,[n("a",h,[_,i(e)]),k]),n("li",null,[n("a",f,[j,i(e)]),q])]),x,n("p",null,[n("a",y,[w,i(e)]),S]),B,n("ol",null,[n("li",null,[D,n("a",A,[E,i(e)]),M]),P]),C,n("p",null,[n("a",I,[N,i(e)]),$]),L,n("p",null,[O,n("a",V,[F,i(e)]),Z,n("a",T,[X,i(e)]),G,n("a",J,[R,i(e)]),U]),n("table",null,[Y,n("tbody",null,[n("tr",null,[z,H,n("td",null,[n("a",K,[Q,i(e)])]),n("td",null,[n("a",W,[nn,i(e)])])]),n("tr",null,[sn,en,n("td",null,[n("a",an,[on,i(e)])]),n("td",null,[n("a",tn,[rn,i(e)])])])])]),ln])}var vn=o(p,[["render",pn],["__file","010_spring_project_structure.html.vue"]]);export{vn as default};
