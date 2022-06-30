import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as r,c as t,a as n,b as a,e as d,d as s}from"./app.77798a59.js";const o={},c=d(`<h2 id="\u6700\u7B80\u5355\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u6700\u7B80\u5355\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u6700\u7B80\u5355\u7684\u4F8B\u5B50</h2><h3 id="\u521D\u59CB\u5316\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u811A\u672C" aria-hidden="true">#</a> \u521D\u59CB\u5316\u811A\u672C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span>gradle init

Select <span class="token builtin class-name">type</span> of project to generate:
  <span class="token number">1</span>: basic
  <span class="token number">2</span>: application
  <span class="token number">3</span>: library
  <span class="token number">4</span>: Gradle plugin
Enter selection <span class="token punctuation">(</span>default: basic<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token number">1</span>

Select build script DSL:
  <span class="token number">1</span>: Groovy
  <span class="token number">2</span>: Kotlin
Enter selection <span class="token punctuation">(</span>default: Groovy<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token number">1</span>

Generate build using new APIs and behavior <span class="token punctuation">(</span>some features may change <span class="token keyword">in</span> the next minor release<span class="token punctuation">)</span>? <span class="token punctuation">(</span>default: no<span class="token punctuation">)</span> <span class="token punctuation">[</span>yes, no<span class="token punctuation">]</span>

Project name <span class="token punctuation">(</span>default: 001_gradle_example<span class="token punctuation">)</span>:


<span class="token operator">&gt;</span> Task :init
Get <span class="token function">more</span> <span class="token builtin class-name">help</span> with your project: Learn <span class="token function">more</span> about Gradle by exploring our samples at https://docs.gradle.org/7.4.2/samples

BUILD SUCCESSFUL <span class="token keyword">in</span> 1m 26s
<span class="token number">2</span> actionable tasks: <span class="token number">2</span> executed

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">\\</span>---001_gradle_example
    <span class="token operator">|</span>   .gitattributes
    <span class="token operator">|</span>   .gitignore
    <span class="token operator">|</span>   build.gradle // \u91CD\u8981, \u6784\u5EFA\u811A\u672C\u6587\u4EF6\uFF0C\u4E3B\u8981\u7684\u6784\u5EFA\u914D\u7F6E\u90FD\u5728\u8FD9\u91CC\u5199
    <span class="token operator">|</span>   gradlew // gradle wrapper \u6267\u884C\u811A\u672C\u6587\u4EF6\uFF0C\u7528\u6765\u5728\u6CA1\u6709\u5B89\u88C5 gradle \u7684\u60C5\u51B5\u4E0B\u6267\u884C gradle \u547D\u4EE4\u3002\u5F53\u7136\uFF0C\u7B2C\u4E00\u6B21\u6267\u884C\u65F6\u4F1A\u4E0B\u8F7D gradle\u3002
    <span class="token operator">|</span>   gradlew.bat // gradle wrapper \u6267\u884C\u811A\u672C\u6587\u4EF6\u7684 windows \u7248
    <span class="token operator">|</span>   settings.gradle // \u9879\u76EE\u914D\u7F6E\uFF0C\u6307\u660E\u6839\u9879\u76EE\u540D\u5B57\u548C\u5F15\u5165\u7684 module
    <span class="token operator">|</span>
    +---.gradle
    <span class="token punctuation">\\</span>---gradle // \u91CD\u8981, \u63CF\u8FF0\u4E86 gradlew \u4F7F\u7528\u7684 gradle \u7248\u672C
        <span class="token punctuation">\\</span>---wrapper
                gradle-wrapper.jar
                gradle-wrapper.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello world</h3><p>\u4FEE\u6539 <code>build.gradle</code> \u6DFB\u52A0\u5982\u4E0B\uFF1A</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>task hello <span class="token punctuation">{</span>
    doLast <span class="token punctuation">{</span>
        println <span class="token string">&#39;Hello world!&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\uFF1A <code>gradle -q hello --info</code>, \u5E26\u4E0D\u5E26 <code>-q</code> \u6216\u8005</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
 Task :hello
Caching disabled <span class="token keyword">for</span> task <span class="token string">&#39;:hello&#39;</span> because:
  Build cache is disabled
Task <span class="token string">&#39;:hello&#39;</span> is not up-to-date because:
  Task has not declared any outputs despite executing actions.
Hello world<span class="token operator">!</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u68C0\u67E5\u4E0B\uFF0C \u9ED8\u8BA4gradle \u5E26\u7684 <code>gradle tasks</code> \uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
------------------------------------------------------------
Tasks runnable from root project <span class="token string">&#39;001_gradle_example&#39;</span>
------------------------------------------------------------

Build Setup tasks
-----------------
init - Initializes a new Gradle build.
wrapper - Generates Gradle wrapper files.

Help tasks
----------
buildEnvironment - Displays all buildscript dependencies declared <span class="token keyword">in</span> root project <span class="token string">&#39;001_gradle_example&#39;</span><span class="token builtin class-name">.</span>
dependencies - Displays all dependencies declared <span class="token keyword">in</span> root project <span class="token string">&#39;001_gradle_example&#39;</span><span class="token builtin class-name">.</span>
dependencyInsight - Displays the insight into a specific dependency <span class="token keyword">in</span> root project <span class="token string">&#39;001_gradle_example&#39;</span><span class="token builtin class-name">.</span>
<span class="token builtin class-name">help</span> - Displays a <span class="token builtin class-name">help</span> message.
javaToolchains - Displays the detected java toolchains.
outgoingVariants - Displays the outgoing variants of root project <span class="token string">&#39;001_gradle_example&#39;</span><span class="token builtin class-name">.</span>
projects - Displays the sub-projects of root project <span class="token string">&#39;001_gradle_example&#39;</span><span class="token builtin class-name">.</span>
properties - Displays the properties of root project <span class="token string">&#39;001_gradle_example&#39;</span><span class="token builtin class-name">.</span>
tasks - Displays the tasks runnable from root project <span class="token string">&#39;001_gradle_example&#39;</span><span class="token builtin class-name">.</span>

To see all tasks and <span class="token function">more</span> detail, run gradle tasks --all

To see <span class="token function">more</span> detail about a task, run gradle <span class="token builtin class-name">help</span> --task <span class="token operator">&lt;</span>task<span class="token operator">&gt;</span>

BUILD SUCCESSFUL <span class="token keyword">in</span> 1s

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6765\u70B9\u9762\u5411\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u6765\u70B9\u9762\u5411\u5BF9\u8C61" aria-hidden="true">#</a> \u6765\u70B9\u9762\u5411\u5BF9\u8C61</h3><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>
task myTask <span class="token punctuation">{</span>
    ext<span class="token punctuation">.</span>myProperty <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;dearxue is better&quot;</span></span>
<span class="token punctuation">}</span>

task printTaskProperties  <span class="token punctuation">{</span>
    println myTask<span class="token punctuation">.</span>myProperty
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u6267\u884C <code>gradle printTaskProperties</code> :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gradle printTaskProperties

<span class="token operator">&gt;</span> Configure project <span class="token builtin class-name">:</span>
dearxue is better

BUILD SUCCESSFUL <span class="token keyword">in</span> 974ms

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ds" tabindex="-1"><a class="header-anchor" href="#ds" aria-hidden="true">#</a> DS</h3><p>\u5230\u6B64\u6211\u4EEC\u53EF\u4EE5\u7406\u89E3\u7684 Gradle \u5C1A\u672A\u548C\u6211\u4EEC\u7EC4\u7EC7\u548C\u7F16\u8BD1\u6211\u4EEC\u7684java\u5DE5\u7A0B\u6CA1\u6709\u4EFB\u4F55\u7684\u5173\u7CFB\uFF0C \u53EF\u4EE5\u770B\u5230Gradle \u5C31\u662F\u5728grovvy/koltin \u7684\u4E00\u4E2A\u5C01\u88C5\uFF0C \u5E26\u4E86\u5F88\u591A\u4E0A\u4E0B\u6587\u4E5F\u5C31\u662F\u6709\u81EA\u5DF1\u4E00\u5957DSL\u89C4\u8303\u3002</p>`,18),p=s("\u4E0A\u4E0B\u6587\uFF1A "),u={href:"https://docs.gradle.org/current/dsl/index.html",target:"_blank",rel:"noopener noreferrer"},v=s("DSL \u57FA\u672C\u6982\u5FF5"),m=s(" \u53C2\u8003\uFF0C"),b={href:"https://docs.gradle.org/current/userguide/build_lifecycle.html",target:"_blank",rel:"noopener noreferrer"},k=s("Gradle Basic"),g=s(" \u5728\u57FA\u7840\u6280\u672F\u4E0A\u53C8\u63D0\u5347\u7684\u4E00\u5C42\uFF0C \u5927\u90E8\u5206\u60C5\u51B5\u6211\u4EEC\u9700\u8981\u4E86\u4E86\u89E3DSL \u672C\u8EAB\uFF0C \u6216\u8005\u6574\u4E2ABuild \u5168\u6D41\u7A0B\uFF0C \u6211\u4EEC\u53EA\u9700\u8981\u77E5\u9053 java/spring \u7684 gradle \u63D2\u4EF6\uFF0C\u4F46\u662F\u4E86\u89E3 DSL + \u57FA\u672C\u7406\u8BBA\u57FA\u7840\u975E\u5E38\u6709\u5E2E\u52A9\u7406\u89E3\u4E3A\u4EC0\u4E48\u90A3\u4E48\u73A9\u3002"),h=n("h2",{id:"\u53C2\u8003",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003","aria-hidden":"true"},"#"),s(" \u53C2\u8003")],-1),_={href:"https://docs.gradle.org/current/samples/index.html",target:"_blank",rel:"noopener noreferrer"},f=s("Sample"),y={href:"https://gradle.org/guides/",target:"_blank",rel:"noopener noreferrer"},x=s("Guide"),w={href:"https://docs.gradle.org/current/dsl/index.html",target:"_blank",rel:"noopener noreferrer"},S=s("DSL");function j(D,L){const e=l("ExternalLinkIcon");return r(),t("div",null,[c,n("p",null,[p,n("a",u,[v,a(e)]),m,n("a",b,[k,a(e)]),g]),h,n("ol",null,[n("li",null,[n("a",_,[f,a(e)])]),n("li",null,[n("a",y,[x,a(e)])]),n("li",null,[n("a",w,[S,a(e)])])])])}var B=i(o,[["render",j],["__file","002_Gradle_guide_sample.html.vue"]]);export{B as default};
