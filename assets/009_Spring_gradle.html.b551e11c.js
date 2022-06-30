import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as r,c as l,a as n,b as a,d as e,e as i}from"./app.77798a59.js";const p={},d=e("\u53C2\u8003\uFF1A "),c={href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#appendix.dependency-versions.coordinates",target:"_blank",rel:"noopener noreferrer"},u=e("BOM \u7248\u672C"),v=e(" + "),g={href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#appendix.dependency-versions.properties",target:"_blank",rel:"noopener noreferrer"},m=e("\u7248\u672C\u5B57\u6BB5"),b=e(" \u3002"),h=n("thead",null,[n("tr",null,[n("th",null,"pugin"),n("th",null,"\u6587\u6863"),n("th",null,"\u6E90\u7801"),n("th",null,"\u5907\u6CE8")])],-1),k=n("td",null,"org.springframework.boot",-1),_=n("td",null,"2.7.0",-1),f={href:"https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/",target:"_blank",rel:"noopener noreferrer"},y=e("DOC"),x={href:"https://github.com/spring-projects/spring-boot/tree/main/spring-boot-project/spring-boot-tools/spring-boot-gradle-plugin",target:"_blank",rel:"noopener noreferrer"},O=e("\u6E90\u7801"),w=n("td",null,"io.spring.dependency-management",-1),S=n("td",null,"1.0.11.REALEASE",-1),B={href:"https://docs.spring.io/dependency-management-plugin/docs/current/reference/html/",target:"_blank",rel:"noopener noreferrer"},R=e("DOC"),j={href:"https://github.com/spring-gradle-plugins/dependency-management-plugin",target:"_blank",rel:"noopener noreferrer"},q=e("\u6E90\u7801"),E=i(`<h2 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
gradle init

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),I={href:"https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/",target:"_blank",rel:"noopener noreferrer"},N=e("org.springframework.boot"),C=e(" \u4E3B\u8981\u662F\u5404\u79CDJob "),M=n("code",null,"gradle tasks",-1),A=e(" \u91CC\u9762 boot \u5F00\u5934\u7684job \u90FD\u662F:"),D=i(`<ol><li>\u6253\u5305\u6210\u53EF\u6267\u884Cjar\u3001war</li><li>\u5F15\u5165\u4EE5\u6765\u7BA1\u7406 spring-boot-dependencies \u4E5F\u5C31\u662F\uFF1A <code>BOM_COORDINATES</code></li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> BOM_COORDINATES <span class="token operator">=</span> <span class="token string">&quot;org.springframework.boot:spring-boot-dependencies:&quot;</span>
   <span class="token operator">+</span> SPRING_BOOT_VERSION<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gradle tasks

Application tasks
-----------------
bootRun - Runs this project as a Spring Boot application.

Build tasks
-----------
bootBuildImage - Builds an OCI image of the application using the output of the bootJar task
bootJar - Assembles an executable jar archive containing the main classes and their dependencies.
bootJarMainClassName - Resolves the name of the application<span class="token string">&#39;s main class for the bootJar task.
bootRunMainClassName - Resolves the name of the application&#39;</span>s main class <span class="token keyword">for</span> the bootRun task.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),V={href:"https://docs.spring.io/dependency-management-plugin/docs/current/reference/html/",target:"_blank",rel:"noopener noreferrer"},T=e("io.spring.dependency-management"),J=e("\uFF0C \u4E3B\u8981\u662F\u4F9D\u8D56\u63A7\u5236\uFF1A A Gradle plugin that provides Maven-like dependency management and exclusions\uFF0C \u63D0\u4F9B\u548Cmaven \u91CC\u9762 pom \u7C7B\u4F3C\u64CD\u4F5C\u3002"),P=i(`<p>\u8FD9\u4E24\u4E2A\u63D2\u4EF6\u4E00\u822C\u662F\u7EC4\u5408\u4F7F\u7528\uFF0C dependency-management \u4F9D\u8D56 boot \u7684 pom \u7248\u672C\u3002</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>
plugins {
  id &#39;org.springframework.boot&#39; version &#39;2.7.0&#39;
  id &#39;io.spring.dependency-management&#39; version &#39;1.0.11.RELEASE&#39;
  id &#39;java&#39;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),L={href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#appendix.dependency-versions.coordinates",target:"_blank",rel:"noopener noreferrer"},G=e("BOM \u7248\u672C"),$=e(" + "),z={href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#appendix.dependency-versions.properties",target:"_blank",rel:"noopener noreferrer"},F=e("\u7248\u672C\u5B57\u6BB5"),H=e(" \u3002 \u4E24\u4E2Aplugin \u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F"),K=i(`<p>\u5F53 <code>io.spring.dependency-management</code> \u63D2\u4EF6\u88AB\u52A0\u5165\u7684\u65F6\u5019, <code>Spring Boot</code> \u63D2\u4EF6\u5C06\u81EA\u52A8\u5BFC\u5165 <code>spring-boot-dependencies</code> bom\uFF0C\u4E5F\u5C31\u662F\u907F\u514D\u5BFC\u5165starter \u65F6\u5019\u8BBE\u7F6E\u7248\u672C\u53F7\uFF08pom \u7684\u672C\u8D28\u548C\u597D\u5904\uFF09\u3002</p><p>\u76F8\u5F53\u4E8E\u81EA\u52A8\u5BFC\u5165\u4E86\uFF1A</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>dependencyManagement <span class="token punctuation">{</span>
  imports <span class="token punctuation">{</span>
    mavenBom <span class="token interpolation-string"><span class="token string">&quot;org.springframework.boot:spring-boot-dependencies:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">SPRING_BOOT_VERSION</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>spring.boot</code> \u63D2\u4EF6\u662F\u907F\u514D\u5E26\u5165\u7248\u672C\u53F7\uFF0C \u5982\u679C\u4F60\u53EA\u60F3\u4F7F\u7528 <code>spring.boot</code> \u7684\u7248\u672C\u4F9D\u8D56\uFF0C \u4F46\u662F\u4E0D\u60F3\u5F15\u7528 <code>spring.boot</code> \u7684\u5B9A\u5236\u7684\u4E00\u4E9Btask \u6BD4\u5982 boot jar(\u6BD4\u5982\u5B9A\u5236spring starter); \u6709\u4E24\u79CD\u65B9\u5F0F\u3002</p><h3 id="\u7B2C0\u79CD" tabindex="-1"><a class="header-anchor" href="#\u7B2C0\u79CD" aria-hidden="true">#</a> \u7B2C0\u79CD</h3><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>plugins <span class="token punctuation">{</span>
  id <span class="token string">&#39;org.springframework.boot&#39;</span> version <span class="token string">&#39;2.7.0&#39;</span>
  id <span class="token string">&#39;io.spring.dependency-management&#39;</span> version <span class="token string">&#39;1.0.11.RELEASE&#39;</span>
  id <span class="token string">&#39;java&#39;</span>
<span class="token punctuation">}</span>


ext <span class="token punctuation">{</span>
  <span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;springCloudVersion&#39;</span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;2021.0.3&quot;</span></span><span class="token punctuation">)</span>
  <span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;testcontainersVersion&#39;</span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;1.17.2&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

dependencies <span class="token punctuation">{</span>
  implementation <span class="token string">&#39;org.springframework.boot:spring-boot-starter-web&#39;</span>
  implementation <span class="token string">&#39;org.springframework.cloud:spring-cloud-starter-config&#39;</span>
  testImplementation <span class="token string">&#39;org.springframework.boot:spring-boot-starter-test&#39;</span>
  testImplementation <span class="token string">&#39;org.testcontainers:junit-jupiter&#39;</span>
<span class="token punctuation">}</span>

dependencyManagement <span class="token punctuation">{</span>
  imports <span class="token punctuation">{</span>
    <span class="token comment">//\u4E0D\u9700\u8981\u663E\u5F0F\u7684\u5BFC\u5165 boot-dependencies </span>
    mavenBom <span class="token interpolation-string"><span class="token string">&quot;org.testcontainers:testcontainers-bom:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">testcontainersVersion</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
    mavenBom <span class="token interpolation-string"><span class="token string">&quot;org.springframework.cloud:spring-cloud-dependencies:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">springCloudVersion</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7B2C\u4E00\u79CD" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u79CD" aria-hidden="true">#</a> \u7B2C\u4E00\u79CD</h3><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>plugins {
	id &#39;java&#39;
	id(&quot;org.springframework.boot&quot;) version &quot;2.7.0&quot; apply false
	id(&quot;io.spring.dependency-management&quot;) version &quot;1.0.11.RELEASE&quot;
}

dependencyManagement {
	imports {
		mavenBom(org.springframework.boot.gradle.plugin.SpringBootPlugin.BOM_COORDINATES)
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>apply false</code> \u8868\u793A\u4E0D\u5E26task\u8FC7\u6765\uFF0C \u90A3\u4E48\u4E0B\u9762 <code>SpringBootPlugin.BOM_COORDINATES</code> \u540C\u6837\u5E26\u6765 \u5BFC\u5165 boot bom \u6548\u679C:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> BOM_COORDINATES <span class="token operator">=</span> <span class="token string">&quot;org.springframework.boot:spring-boot-dependencies:&quot;</span>
			<span class="token operator">+</span> SPRING_BOOT_VERSION<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u5F15\u5165\u4E86tasks:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gradle tasks

Application tasks
-----------------
bootRun - Runs this project as a Spring Boot application.

Build tasks
-----------
bootBuildImage - Builds an OCI image of the application using the output of the bootJar task
bootJar - Assembles an executable jar archive containing the main classes and their dependencies.
bootJarMainClassName - Resolves the name of the application<span class="token string">&#39;s main class for the bootJar task.
bootRunMainClassName - Resolves the name of the application&#39;</span>s main class <span class="token keyword">for</span> the bootRun task.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u65E6 <code>apply false</code>\uFF0C <mark>bootRun \u5F00\u5934\u7684\u6240\u6709\u4EFB\u52A1\u5C31\u6CA1\u6709\u4E86\uFF01</mark></p><h3 id="\u7B2C\u4E8C\u79CD" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u79CD" aria-hidden="true">#</a> \u7B2C\u4E8C\u79CD</h3><p>\u7528 gradle \u539F\u751F\u7684 <code>platform</code> \u529F\u80FD</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>plugins <span class="token punctuation">{</span>
	id <span class="token string">&#39;java&#39;</span>
	<span class="token function">id</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;org.springframework.boot&quot;</span></span><span class="token punctuation">)</span> version <span class="token interpolation-string"><span class="token string">&quot;2.7.0&quot;</span></span> apply <span class="token boolean">false</span>
<span class="token punctuation">}</span>

dependencies <span class="token punctuation">{</span>
	implementation <span class="token function">platform</span><span class="token punctuation">(</span>org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>gradle<span class="token punctuation">.</span>plugin<span class="token punctuation">.</span>SpringBootPlugin<span class="token punctuation">.</span>BOM_COORDINATES<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E24\u79CD\u65B9\u5F0F\u5DEE\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E24\u79CD\u65B9\u5F0F\u5DEE\u522B" aria-hidden="true">#</a> \u4E24\u79CD\u65B9\u5F0F\u5DEE\u522B</h3><p>\u7528 spring \u7684 dependency \u6216\u8005 gradle platform \u6709\u4EC0\u4E48\u5DEE\u522B\uFF1F</p><h4 id="spring-depedencies-management-plugin" tabindex="-1"><a class="header-anchor" href="#spring-depedencies-management-plugin" aria-hidden="true">#</a> Spring Depedencies Management Plugin</h4><p>Spring depedency management \u63D0\u4F9B\u4E86\u7F16\u8F91\u901A\u9053:</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>
ext<span class="token punctuation">[</span><span class="token string">&#39;slf4j.version&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;1.7.20&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="gradle-platform" tabindex="-1"><a class="header-anchor" href="#gradle-platform" aria-hidden="true">#</a> Gradle Platform</h4><p>\u7EAF gradle \u65B9\u5F0F:</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>
configurations<span class="token punctuation">.</span>all <span class="token punctuation">{</span>
	resolutionStrategy<span class="token punctuation">.</span>eachDependency <span class="token punctuation">{</span> DependencyResolveDetails details <span class="token operator">-&gt;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>details<span class="token punctuation">.</span>requested<span class="token punctuation">.</span>group <span class="token operator">==</span> <span class="token string">&#39;org.slf4j&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			details<span class="token punctuation">.</span>useVersion <span class="token string">&#39;1.7.20&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>org.springframework.boot</strong> \u548C boot \u4E00\u81F4\uFF0C <strong>io.spring.dependency-management</strong> \u4E00\u822C\u914D\u5408\u4F7F\u7528\uFF0C dependency-management \u4F1A\u4F7F\u7528 boot \u7684\u7248\u672C\u3002</p><h2 id="\u53C2\u8003\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u9879\u76EE" aria-hidden="true">#</a> \u53C2\u8003\u9879\u76EE</h2>`,26),Q=e("\u7EDF\u4E00\u7248\u672C\u7BA1\u7406 "),U={href:"https://docs.gradle.org/current/userguide/platforms.html",target:"_blank",rel:"noopener noreferrer"},W=e("Sharing dependency versions between projects"),X={href:"https://docs.gradle.org/current/userguide/java_platform_plugin.html",target:"_blank",rel:"noopener noreferrer"},Y=e("The Java Platform Plugin"),Z={href:"https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/",target:"_blank",rel:"noopener noreferrer"},nn=e("spring boot plugin"),en={href:"https://docs.spring.io/dependency-management-plugin/docs/current/reference/html/",target:"_blank",rel:"noopener noreferrer"},sn=e("spring depedency management"),an={href:"https://github.com/vrudas/spring-framework-examples",target:"_blank",rel:"noopener noreferrer"},tn=e("spring framework test"),on={href:"https://github.com/will-molloy/java-gradle-template",target:"_blank",rel:"noopener noreferrer"},rn=e("java gradle template");function ln(pn,dn){const s=o("ExternalLinkIcon");return r(),l("div",null,[n("p",null,[d,n("a",c,[u,a(s)]),v,n("a",g,[m,a(s)]),b]),n("table",null,[h,n("tbody",null,[n("tr",null,[k,_,n("td",null,[n("a",f,[y,a(s)])]),n("td",null,[n("a",x,[O,a(s)])])]),n("tr",null,[w,S,n("td",null,[n("a",B,[R,a(s)])]),n("td",null,[n("a",j,[q,a(s)])])])])]),E,n("p",null,[n("a",I,[N,a(s)]),C,M,A]),D,n("p",null,[n("a",V,[T,a(s)]),J]),P,n("p",null,[n("a",L,[G,a(s)]),$,n("a",z,[F,a(s)]),H]),K,n("ol",null,[n("li",null,[Q,n("a",U,[W,a(s)])]),n("li",null,[n("a",X,[Y,a(s)])]),n("li",null,[n("a",Z,[nn,a(s)])]),n("li",null,[n("a",en,[sn,a(s)])]),n("li",null,[n("a",an,[tn,a(s)])]),n("li",null,[n("a",on,[rn,a(s)])])])])}var vn=t(p,[["render",ln],["__file","009_Spring_gradle.html.vue"]]);export{vn as default};
