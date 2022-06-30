import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,e as t}from"./app.77798a59.js";const e={},p=t(`<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>Maven \u6709\u4EE5\u4E0B\u4E09\u4E2A\u6807\u51C6\u7684\u751F\u547D\u5468\u671F\uFF1A</p><ol><li>clean\uFF1A\u9879\u76EE\u6E05\u7406\u7684\u5904\u7406</li><li>default(\u6216 build)\uFF1A\u9879\u76EE\u90E8\u7F72\u7684\u5904\u7406</li><li>site\uFF1A\u9879\u76EE\u7AD9\u70B9\u6587\u6863\u521B\u5EFA\u7684\u5904\u7406</li></ol><p><img src="https://connected2know.com/programming/wp-content/uploads/2020/06/MavenLifecycle2.png" alt="image" loading="lazy"></p><p>\u6BCF\u4E2A\u751F\u547D\u5468\u671F\u4E2D\u90FD\u5305\u542B\u7740\u4E00\u7CFB\u5217\u7684\u9636\u6BB5(phase)\u3002\u8FD9\u4E9B phase \u5C31\u76F8\u5F53\u4E8E Maven \u63D0\u4F9B\u7684\u7EDF\u4E00\u7684\u63A5\u53E3\uFF0C\u7136\u540E\u8FD9\u4E9B phase \u7684\u5B9E\u73B0\u7531 Maven \u7684\u63D2\u4EF6\u6765\u5B8C\u6210\u3002</p><p>\u6211\u4EEC\u5728\u8F93\u5165 mvn \u547D\u4EE4\u7684\u65F6\u5019 \u6BD4\u5982 <code>mvn clean</code>\uFF0Cclean \u5BF9\u5E94\u7684\u5C31\u662F Clean \u751F\u547D\u5468\u671F\u4E2D\u7684 clean \u9636\u6BB5\u3002\u4F46\u662F clean \u7684\u5177\u4F53\u64CD\u4F5C\u662F\u7531 <strong>maven-clean-plugin</strong> \u6765\u5B9E\u73B0\u7684\u3002</p><p>\u6240\u4EE5\u8BF4 Maven \u751F\u547D\u5468\u671F\u7684\u6BCF\u4E00\u4E2A\u9636\u6BB5\u7684\u5177\u4F53\u5B9E\u73B0\u90FD\u662F\u7531 Maven \u63D2\u4EF6\u5B9E\u73B0\u7684\u3002</p><p>Maven \u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u4F9D\u8D56\u63D2\u4EF6\u6267\u884C\u7684\u6846\u67B6\uFF0C\u6BCF\u4E2A\u4EFB\u52A1\u5B9E\u9645\u4E0A\u662F\u7531\u63D2\u4EF6\u5B8C\u6210\u3002Maven \u63D2\u4EF6\u901A\u5E38\u88AB\u7528\u6765\uFF1A</p><ol><li>\u521B\u5EFA jar \u6587\u4EF6</li><li>\u521B\u5EFA war \u6587\u4EF6</li><li>\u7F16\u8BD1\u4EE3\u7801\u6587\u4EF6</li><li>\u4EE3\u7801\u5355\u5143\u6D4B\u8BD5</li><li>\u521B\u5EFA\u5DE5\u7A0B\u6587\u6863</li><li>\u521B\u5EFA\u5DE5\u7A0B\u62A5\u544A</li></ol><p>\u63D2\u4EF6\u901A\u5E38\u63D0\u4F9B\u4E86\u4E00\u4E2A\u76EE\u6807\u7684\u96C6\u5408\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u8BED\u6CD5\u6267\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mvn <span class="token punctuation">[</span>plugin-name<span class="token punctuation">]</span>:<span class="token punctuation">[</span>goal-name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F8B\u5982\uFF0C\u4E00\u4E2A Java \u5DE5\u7A0B\u53EF\u4EE5\u4F7F\u7528 maven-compiler-plugin \u7684 compile-goal \u7F16\u8BD1\uFF0C\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
mvn compiler:compile

\u4E5F\u5C31\u662F\u6211\u4EEC\u7684  

mvn compile

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528Maven\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u914D\u7F6E\u597D\u9700\u8981\u4F7F\u7528\u7684\u63D2\u4EF6\uFF0C\u7136\u540E\u901A\u8FC7phase\u8C03\u7528\u5B83\u4EEC\u3002</p><h2 id="\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B" aria-hidden="true">#</a> \u7C7B\u578B</h2><p>Maven \u63D0\u4F9B\u4E86\u4E0B\u9762\u4E24\u79CD\u7C7B\u578B\u7684\u63D2\u4EF6\uFF1A</p><table><thead><tr><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>Build plugins</td><td>\u5728\u6784\u5EFA\u65F6\u6267\u884C\uFF0C\u5E76\u5728 pom.xml \u7684 \u5143\u7D20\u4E2D\u914D\u7F6E\u3002</td></tr><tr><td>Reporting plugins</td><td>\u5728\u7F51\u7AD9\u751F\u6210\u8FC7\u7A0B\u4E2D\u6267\u884C\uFF0C\u5E76\u5728 pom.xml \u7684 \u5143\u7D20\u4E2D\u914D\u7F6E\u3002</td></tr></tbody></table><p>\u4E0B\u9762\u662F\u4E00\u4E9B\u5E38\u7528\u63D2\u4EF6\u7684\u5217\u8868\uFF1A</p><table><thead><tr><th>\u63D2\u4EF6</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>clean</td><td>\u6784\u5EFA\u4E4B\u540E\u6E05\u7406\u76EE\u6807\u6587\u4EF6\u3002\u5220\u9664\u76EE\u6807\u76EE\u5F55\u3002</td></tr><tr><td>compiler</td><td>\u7F16\u8BD1 Java \u6E90\u6587\u4EF6\u3002</td></tr><tr><td>surefile</td><td>\u8FD0\u884C JUnit \u5355\u5143\u6D4B\u8BD5\u3002\u521B\u5EFA\u6D4B\u8BD5\u62A5\u544A\u3002</td></tr><tr><td>jar</td><td>\u4ECE\u5F53\u524D\u5DE5\u7A0B\u4E2D\u6784\u5EFA JAR \u6587\u4EF6\u3002</td></tr><tr><td>war</td><td>\u4ECE\u5F53\u524D\u5DE5\u7A0B\u4E2D\u6784\u5EFA WAR \u6587\u4EF6\u3002</td></tr><tr><td>javadoc</td><td>\u4E3A\u5DE5\u7A0B\u751F\u6210 Javadoc\u3002</td></tr></tbody></table><p>\u6211\u4EEC\u6700\u719F\u6089\u7684\u83AB\u5982 spring \u4E2D\u5E38\u7528\u7684</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
   			 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>
				    ...
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
				    ...
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                    ...
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BCF\u4E2A plugin \u90FD\u6709\u4E9B\u53EF\u4EE5\u914D\u7F6E\u7684\u5165\u53E3\uFF0C \u5982\u4E0A\u9762\u7684 executions \u5185\u5305\u542B\u7684\u5185\u5BB9\u3002</p><p>\u5E38\u7528\u7684\u63D2\u4EF6\uFF1A</p><ol><li>maven-shade-plugin\uFF1A\u6253\u5305\u6240\u6709\u4F9D\u8D56\u5305\u5E76\u751F\u6210\u53EF\u6267\u884Cjar\uFF1B</li><li>cobertura-maven-plugin\uFF1A\u751F\u6210\u5355\u5143\u6D4B\u8BD5\u8986\u76D6\u7387\u62A5\u544A\uFF1B</li><li>findbugs-maven-plugin\uFF1A\u5BF9Java\u6E90\u7801\u8FDB\u884C\u9759\u6001\u5206\u6790\u4EE5\u627E\u51FA\u6F5C\u5728\u95EE\u9898\u3002</li></ol>`,24),l=[p];function i(c,o){return a(),s("div",null,l)}var r=n(e,[["render",i],["__file","005_Maven_Plugin.html.vue"]]);export{r as default};
