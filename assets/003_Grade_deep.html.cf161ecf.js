import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as d,c as l,a as i,b as s,d as e,e as r}from"./app.77798a59.js";const c={},o={href:"https://docs.gradle.org/current/dsl/index.html",target:"_blank",rel:"noopener noreferrer"},u=e("DSL \u57FA\u672C\u6982\u5FF5"),v=e(" + "),p={href:"https://docs.gradle.org/current/userguide/build_lifecycle.html",target:"_blank",rel:"noopener noreferrer"},h=e("Gradle \u57FA\u7840"),b=e(" \u662F\u672C\u6587\u7684\u5168\u90E8\u53C2\u8003\u3002"),g=r(`<h2 id="projects-\u548C-tasks" tabindex="-1"><a class="header-anchor" href="#projects-\u548C-tasks" aria-hidden="true">#</a> Projects \u548C tasks</h2><p>projects \u548C tasks\u662F Gradle \u4E2D\u6700\u91CD\u8981\u7684\u4E24\u4E2A\u6982\u5FF5\u3002</p><p>\u4EFB\u4F55\u4E00\u4E2A Gradle \u6784\u5EFA\u90FD\u662F\u7531\u4E00\u4E2A\u6216\u591A\u4E2A projects \u7EC4\u6210\u3002\u6BCF\u4E2A project \u5305\u62EC\u8BB8\u591A\u53EF\u6784\u5EFA\u7EC4\u6210\u90E8\u5206\u3002 \u8FD9\u5B8C\u5168\u53D6\u51B3\u4E8E\u4F60\u8981\u6784\u5EFA\u4E9B\u4EC0\u4E48\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6BCF\u4E2A project \u6216\u8BB8\u662F\u4E00\u4E2A jar \u5305\u6216\u8005\u4E00\u4E2A web \u5E94\u7528\uFF0C\u5B83\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u7531\u8BB8\u591A\u5176\u4ED6\u9879\u76EE\u4E2D\u4EA7\u751F\u7684 jar \u6784\u6210\u7684 zip \u538B\u7F29\u5305\u3002\u4E00\u4E2A project \u4E0D\u5FC5\u63CF\u8FF0\u5B83\u53EA\u80FD\u8FDB\u884C\u6784\u5EFA\u64CD\u4F5C\u3002\u5B83\u4E5F\u53EF\u4EE5\u90E8\u7F72\u4F60\u7684\u5E94\u7528\u6216\u642D\u5EFA\u4F60\u7684\u73AF\u5883\u3002\u4E0D\u8981\u62C5\u5FC3\u5B83\u50CF\u542C\u4E0A\u53BB\u7684\u90A3\u6837\u5E9E\u5927\u3002 Gradle \u7684 build-by-convention \u53EF\u4EE5\u8BA9\u60A8\u6765\u5177\u4F53\u5B9A\u4E49\u4E00\u4E2A project \u5230\u5E95\u8BE5\u505A\u4EC0\u4E48\u3002</p><p>\u6BCF\u4E2A project \u90FD\u7531\u591A\u4E2A tasks \u7EC4\u6210\u3002\u6BCF\u4E2A task \u90FD\u4EE3\u8868\u4E86\u6784\u5EFA\u6267\u884C\u8FC7\u7A0B\u4E2D\u7684\u4E00\u4E2A\u539F\u5B50\u6027\u64CD\u4F5C\u3002\u5982\u7F16\u8BD1\uFF0C\u6253\u5305\uFF0C\u751F\u6210 javadoc\uFF0C\u53D1\u5E03\u5230\u67D0\u4E2A\u4ED3\u5E93\u7B49\u64CD\u4F5C\u3002</p><h2 id="phase" tabindex="-1"><a class="header-anchor" href="#phase" aria-hidden="true">#</a> Phase</h2><p>\u672C\u8D28 Gradle \u7528\u6765\u7BA1\u7406\u6784\u5EFA\u6D41\u7A0B(task)\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4E5F\u5C31DAG Directed Acyclic Graph\uFF1B\u6574\u4F53\u4E0A\u4E00\u4E2Abuild \u6709\u4E0B\u9762\u51E0\u4E2Aphase\u3002</p><ol><li>Initialization\uFF1A Gradle \u652F\u6301\u5355\u6A21\u5757\u3001\u591A\u6A21\u5757\u9879\u76EE\uFF0C\u521D\u59CB\u5316\u9636\u6BB5\u51B3\u5B9A\u9879\u76EE\u6784\u5EFA\u7684\u987A\u5E8F\u3002</li><li>Configuration: \u8FD9\u4E2A\u9636\u6BB5\uFF0C project \u5BF9\u8C61\u88AB\u914D\u7F6E\uFF0C build \u811A\u672C\u88AB\u6267\u884C\u3002</li><li>Execution: Gradle \u51B3\u5B9A tasks \u5217\u8868, \u53EF\u4EE5\u6309\u7167\u4F20\u5165\u7684\u53C2\u6570\u6765\u51B3\u5B9A\u6267\u884C\u90A3\u4E2A\u547D\u4EE4\uFF0C\u6216\u8005\u547D\u4EE4\u5217\u8868\u3002</li></ol><h2 id="setting" tabindex="-1"><a class="header-anchor" href="#setting" aria-hidden="true">#</a> Setting</h2><p>\u53C2\u8003\uFF1A <a href="TODO">002_gradle_basic</a> \u4F8B\u5B50\u3002</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>
settings.gradle

rootProject.name = &#39;002_gradle_basic&#39;
println &#39;001 &gt; This is executed during the initialization phase.&#39;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>
build.gradle

println &#39;[configuration - 001 ]  This is executed during the configuration phase.&#39;

tasks.register(&#39;configured&#39;) {
    println &#39;[configuration - 002 ]  This is also executed during the configuration phase, because :configured is used in the build.&#39;
}

tasks.register(&#39;test&#39;) {
    doLast {
        println &#39;[test] This is executed during the execution phase.&#39;
    }
}

tasks.register(&#39;testBoth&#39;) {
	doFirst {
	  println &#39;[testBoth] FIRST This is executed first during the execution phase.&#39;
	}
	doLast {
	  println &#39;[testBoth] LAST This is executed last during the execution phase.&#39;
	}
	println &#39;[testBoth] This is executed during the configuration phase as well, because :testBoth is used in the build.&#39;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u4E0B <code>gradle test</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span>gradle <span class="token builtin class-name">test</span>
<span class="token punctuation">[</span>settings<span class="token punctuation">]</span> <span class="token operator">&gt;</span> This is executed during the initialization phase.

<span class="token operator">&gt;</span> Configure project <span class="token builtin class-name">:</span>
<span class="token punctuation">[</span>build 001 <span class="token punctuation">]</span>  This is executed during the configuration phase.

<span class="token operator">&gt;</span> Task :test
<span class="token punctuation">[</span>test<span class="token punctuation">]</span> This is executed during the execution phase.

BUILD SUCCESSFUL <span class="token keyword">in</span> 1s

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="initialization" tabindex="-1"><a class="header-anchor" href="#initialization" aria-hidden="true">#</a> Initialization</h2><p><code>settings --&gt; project --&gt; task</code> \u662F\u6574\u4E2A\u8FC7\u7A0B\u987A\u5E8F\u3002</p><p>Gradle looks for a <code>settings.gradle</code> file in the following way:</p><ol><li>It looks for settings.gradle in parent directories.</li><li>If not found, the build is executed as a single project build.</li><li>If a settings.gradle file is found, Gradle checks if the current project is part of the multi-project hierarchy defined in the found settings.gradle file. If not, the build is executed as a single project build. Otherwise a multi-project build is executed.</li></ol><h2 id="build-\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#build-\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> Build \u751F\u547D\u5468\u671F</h2><p>Hook \u5230\u4E0D\u540C\u7684\u751F\u547D\u5468\u671F</p><ol><li>Project evaluation</li><li>Task creation</li><li>Task execution graph ready</li><li>Task execution</li></ol>`,20);function m(f,k){const n=t("ExternalLinkIcon");return d(),l("div",null,[i("p",null,[i("a",o,[u,s(n)]),v,i("a",p,[h,s(n)]),b]),g])}var j=a(c,[["render",m],["__file","003_Grade_deep.html.vue"]]);export{j as default};
