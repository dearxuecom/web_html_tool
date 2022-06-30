import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as t,c as r,a as n,b as a,d as e,e as i}from"./app.77798a59.js";const d={},c=n("h2",{id:"\u6982\u8981",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6982\u8981","aria-hidden":"true"},"#"),e(" \u6982\u8981")],-1),p=e("\u4F5C\u4E3AJava \u4F01\u4E1A\u7EA7\u5F00\u53D1\u7684\u7FD8\u695A\uFF0C Spring \u65E9\u57282020 \u5C06\u6574\u4E2A\u6846\u67B6\u7F16\u8BD1\u5E73\u53F0\u4ECEmaven \u8FC1\u79FB\u5230gradle: "),u={href:"https://spring.io/blog/2020/06/08/migrating-spring-boot-s-build-to-gradle",target:"_blank",rel:"noopener noreferrer"},v=e("Migrating Spring Boot's Build to Gradle"),m=e(", gradle \u5F88\u591A\u2018\u9AD8\u7EA7\u2019\u529F\u80FD\u4E5F\u5F97\u4EE5\u88AB '\u4F20\u64AD'\uFF0C \u4F46\u662F\u7531\u4E8E\u5927\u90E8\u5206\u9057\u7559\u7684\u9879\u76EE\u6216\u8005\u5E93\u8FD8\u662F\u7528maven, \u5BFC\u81F4gradle \u5176\u5B9E\u5728'\u56FD\u5185'\u88AB\u5E7F\u6CDB\u4F20\u64AD\u8FD8\u662F\u4E0D\u591A\uFF0C\u4E00\u65B9\u9762gradle \u80FD\u505A\u6240\u6709maven \u80FD\u505A\u7684\u4E8B\u60C5\uFF0C\u53E6\u5916\u4E00\u65B9\u9762 gradle \u4EE5\u7F16\u7A0B\u7684\u65B9\u5F0F\u6765\u7EC4\u7EC7\u4F60\u7684\u9879\u76EE\u7ED3\u6784\u548C\u7F16\u8BD1\u3001\u6253\u5305\u7B49\u6D41\u7A0B\uFF0C \u4E00\u65E6\u719F\u7EC3\u540E\uFF0C \u540E\u9762\u505A\u6269\u5C55\u771F\u7684\u975E\u5E38\u65B9\u4FBF\uFF0C\u800C\u4E14\u672C\u8EABgradle\u8BBE\u8BA1\u7684\u65B9\u5F0F\u4E5F\u975E\u5E38\u503C\u5F97\u5B66\u4E60\u3002"),g=i(`<h2 id="verion-catelog" tabindex="-1"><a class="header-anchor" href="#verion-catelog" aria-hidden="true">#</a> Verion Catelog</h2><blockquote><p>A version catalog is a list of dependencies, represented as dependency coordinates, that a user can pick from when declaring dependencies in a build script.</p></blockquote><p>\u5F88\u4E45\u4EE5\u524D\u6211\u4EEC\u662F\u5982\u4F55\u63A7\u5236\u4F9D\u8D56\u5305\u7684\u7248\u672C\uFF1A</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>
dependencies {
    implementation(&quot;com.google.guava:guava:30.0-jre&quot;)
    testImplementation(&quot;org.junit.jupiter:junit-jupiter-api:5.7.1&quot;)
    testRuntimeOnly(&quot;org.junit.jupiter:junit-jupiter-engine&quot;)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5199\u5E26\u6765\u7684\u574F\u5904\uFF1A</p><ol><li>\u6BCF\u4E2A\u9879\u76EE\u90FD\u8981copy</li><li>\u6BCF\u6B21\u9700\u8981\u624B\u52A8\u66F4\u65B0\u6BCF\u4E2A build \u6587\u4EF6\uFF0C \u5BFC\u81F4\u5404\u4E2A\u9879\u76EE\u7684\u7248\u672C\u53EF\u80FD\u4E0D\u4E00\u81F4</li><li>group, artifact, version \u53EF\u80FD\u641E\u9519</li></ol><p>\u6539\u8FDB\u7248\u4E00\uFF0C \u4F7F\u7528 gradle.properties</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">guavaVersion</span><span class="token operator">=</span><span class="token number">30.0</span>-jre
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6539\u8FDB\u4E8C\uFF0C \u653E\u5165ext \u4E2D</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>ext <span class="token punctuation">{</span>
   guavaVersion <span class="token operator">=</span> <span class="token string">&#39;30.0-jre&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E24\u79CD\u65B9\u5F0F\u90FD\u53EF\u4EE5\u8FD9\u6837\u5F15\u7528\uFF1A</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>
dependencies {
    implementation(&quot;com.google.guava:guava:\${guavaVersion}&quot;)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u968F\u7740Kotlin DSL\u7684\u6D41\u884C, \u5728 Android \u7684\u4E16\u754C\u91CC\u6709\u4E00\u79CD\u65B9\u5F0F\u975E\u5E38\u6D41\u884C: \u5728buildSrc \u91CC\u7528\u7C7B\u578B\u5B89\u5168\u7684 kotlin \u8BED\u6CD5\u6DFB\u52A0dependencies :</p><div class="language-koltin ext-koltin line-numbers-mode"><pre class="language-koltin"><code>buildSrc/src/main/kotlin/Libs.kt

object Libs {
   val guava = &quot;com.google.guava:guava:30.0-jre&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5728 build \u6587\u4EF6\u4E2D\u53EF\u4EE5:</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>
build.gradle

dependencies {
    implementation(Libs.guava)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u7EC8 <code>version catelog</code> \u6765\u4E86\uFF0C \u9996\u5148\u9700\u8981 <code>settings.gradle</code> \u91CC\u9762\u58F0\u660E,\u4EE5\u542F\u52A8\u8FD9\u4E2A\u5728gradle 7+ \u91CC\u9762\u542F\u52A8\u7684\u529F\u80FD\uFF1A</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>
enableFeaturePreview(&quot;VERSION_CATALOGS&quot;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5728\u4F60\u7684 <code>settings.gradle</code> \u91CC\u9762\u58F0\u660E\u4E00\u4E2A version catalog, GAV (group, artifact, version) \u4E09\u5957\u4EF6\u9F50\u6D3B:</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>
dependencyResolutionManagement {
    versionCatalogs {
        libs {
            library(&#39;groovy-core&#39;, &#39;org.codehaus.groovy:groovy:3.0.5&#39;)
            library(&#39;groovy-json&#39;, &#39;org.codehaus.groovy:groovy-json:3.0.5&#39;)
            library(&#39;groovy-nio&#39;, &#39;org.codehaus.groovy:groovy-nio:3.0.5&#39;)
            library(&#39;commons-lang3&#39;, &#39;org.apache.commons&#39;, &#39;commons-lang3&#39;).version {
                strictly &#39;[3.8, 4.0[&#39;
                prefer &#39;3.9&#39;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4F55\u53BB\u5F15\u7528\u8FD9\u4E9Blib \u5462\u5728 <code>build.gradle</code> \u4E2D\u5982\u6B64\u64CD\u4F5C\uFF1A</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>dependencies {
    implementation libs.groovy.core
    implementation libs.groovy.json
    implementation libs.groovy.nio
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u4ECE\u4E00\u4E2A toml \u98CE\u683C\u6587\u4EF6\u5BFC\u5165\uFF1A</p><div class="language-toml ext-toml line-numbers-mode"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">versions</span><span class="token punctuation">]</span>
<span class="token key property">common</span> <span class="token punctuation">=</span> <span class="token string">&quot;1.4&quot;</span>

<span class="token punctuation">[</span><span class="token table class-name">libraries</span><span class="token punctuation">]</span>

<span class="token key property">my-lib</span> <span class="token punctuation">=</span> <span class="token string">&quot;com.mycompany:mylib:1.4&quot;</span>
<span class="token key property">my-other-lib</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span> <span class="token key property">module</span> <span class="token punctuation">=</span> <span class="token string">&quot;com.mycompany:other&quot;</span><span class="token punctuation">,</span> <span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;1.4&quot;</span> <span class="token punctuation">}</span>
<span class="token key property">my-other-lib2</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span> <span class="token key property">group</span> <span class="token punctuation">=</span> <span class="token string">&quot;com.mycompany&quot;</span><span class="token punctuation">,</span> <span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;alternate&quot;</span><span class="token punctuation">,</span> <span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;1.4&quot;</span> <span class="token punctuation">}</span>
<span class="token key property">mylib-full-format</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span> <span class="token key property">group</span> <span class="token punctuation">=</span> <span class="token string">&quot;com.mycompany&quot;</span><span class="token punctuation">,</span> <span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;alternate&quot;</span><span class="token punctuation">,</span> <span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span> <span class="token key property">require</span> <span class="token punctuation">=</span> <span class="token string">&quot;1.4&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">[</span><span class="token table class-name">plugins</span><span class="token punctuation">]</span>
<span class="token key property">short-notation</span> <span class="token punctuation">=</span> <span class="token string">&quot;some.plugin.id:1.4&quot;</span>
<span class="token key property">long-notation</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span> <span class="token key property">id</span> <span class="token punctuation">=</span> <span class="token string">&quot;some.plugin.id&quot;</span><span class="token punctuation">,</span> <span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;1.4&quot;</span> <span class="token punctuation">}</span>
<span class="token key property">reference-notation</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span> <span class="token key property">id</span> <span class="token punctuation">=</span> <span class="token string">&quot;some.plugin.id&quot;</span><span class="token punctuation">,</span> <span class="token key property">version.ref</span> <span class="token punctuation">=</span> <span class="token string">&quot;common&quot;</span> <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F15\u7528\uFF1A</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>
dependencyResolutionManagement {
    versionCatalogs {
        libs {
            from(files(&quot;../gradle/libs.versions.toml&quot;))
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="platform" tabindex="-1"><a class="header-anchor" href="#platform" aria-hidden="true">#</a> Platform</h2><p>\u5728\u7EC4\u7EC7\u5185\u90E8\u901A\u8FC7\u5BFC\u5165\u4E00\u4E2A <code>toml</code> \u6587\u4EF6\u89E3\u51B3\u7EDF\u4E00\u914D\u7F6E\u7248\u672C\u662F\u4E2A\u4E0D\u9519\u7684\u9009\u62E9\uFF0C\u4F46\u662F\u5982\u679C\u8DE8\u7EC4\u7EC7\uFF1F\u6BD4\u5982\u4F60\u5E0C\u671B\u4F60\u7684\u7248\u672C\u662F\u5171\u4EAB\u7684\uFF0C\u50CF\u5F00\u6E90\u7684spring\u4F9D\u8D56\u7B2C\u4E09\u65B9\u5305\uFF0C \u4F60\u8981\u4E0D\u5C06\u6587\u4EF6\u4F20\u5230\u4E00\u4E2A\u516C\u5171\u7684\u5730\u65B9\uFF0C\u6216\u8005\u50CFmaven \u505A\u4E00\u4E2A <code>pom</code> \u5305\u5206\u4EAB\u3002<code>version-catalog</code> \u5C31\u662F\u5E72\u8FD9\u4E2A\u4E8B\u7684\uFF1A</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>
plugins <span class="token punctuation">{</span>
    id <span class="token string">&#39;version-catalog&#39;</span>
    id <span class="token string">&#39;maven-publish&#39;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5B9A\u4E49\u4F60\u7684\u7248\u672C\u4F9D\u8D56\uFF1A</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>catalog {
    // declare the aliases, bundles and versions in this block
    versionCatalog {
        library(&#39;my-lib&#39;, &#39;com.mycompany:mylib:1.2&#39;)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u4F7F\u7528 <code>maven-publish</code> \u6216\u8005 <code>ivy-publish</code> \u6765\u53D1\u5E03\uFF1A</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>publishing {
    publications {
        maven(MavenPublication) {
            from components.versionCatalog
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u751F\u6210\u4E00\u4E2A <code>libs.versions.toml</code> \u6587\u4EF6\uFF0C\u5E76\u4E0A\u4F20\uFF0C\u7136\u540E\u5176\u4ED6gradle \u5E94\u7528\u53EF\u4EE5\u62C9\u4E0B\u6765\u4F7F\u7528\u3002</p><p>\u201C\u53EF\u5171\u4EAB\u7684\u4F9D\u8D56\u7248\u672C\u7BA1\u7406\u201D \u2014\u2014 \u7528\u8FC7 Maven \u7684\u5C0F\u4F19\u4F34\u4EEC\u53EF\u80FD\u8BF4\uFF0C\u8FD9\u4E0D\u5C31\u662FBOM\u4E48\u3002\u5BF9\uFF0C\u8FD9\u91CC\u804A\u7684\u5C31\u662F\u5982\u4F55\u4F7F\u7528 gradle \u5B9E\u73B0 BOM \u751F\u6210\u548C\u5BFC\u5165\u3002\u6CA1\u7528\u8FC7 Maven \u7684\u5C0F\u4F19\u4F34\u4EEC\u4E5F\u4E0D\u7528\u88AB\u529D\u9000\uFF0C\u60F3\u60F3\u5728\u4F7F\u7528 Spring plugin <code>io.spring.dependency-management</code>\u65F6\uFF0Cimports.mavenBom\u5230\u5E95\u5728\u505A\u4EC0\u4E48\uFF0C\u6709\u6CA1\u6709\u60F3\u8981\u4E86\u89E3\u4E00\u4E0B\uFF1F</p>`,35),b=e("\u5728\u8BF4 BOM \u4E4B\u524D\uFF0C\u5148\u4E86\u89E3\u4E00\u4E0B Maven \u7684\u4E00\u4E9B\u57FA\u672C\u6982\u5FF5\u3002 Maven POM\uFF0C\u5168\u540D "),k=n("code",null,"Project Object Model",-1),h=e(", \u662F Maven \u4F7F\u7528\u4E2D\u7684\u91CD\u8981\u914D\u7F6E\u6587\u4EF6\uFF0Cxml\u683C\u5F0F\uFF0C\u4E3B\u8981\u7528\u6765\u5BFC\u5165\u4F9D\u8D56\u548C\u8FDB\u884C\u9879\u76EE\u6784\u5EFA\u3002 Maven BOM\uFF0C\u5168\u540D "),y=n("code",null,"Bill Of Materials",-1),_=e(", \u662F\u4E00\u79CD\u7279\u6B8A\u7684 POM\uFF0C\u4E3B\u8981\u7528\u6765\u96C6\u4E2D\u7BA1\u7406\u9879\u76EE\u4F9D\u8D56\u7684\u7248\u672C\uFF0C\u66F4\u52A0\u7075\u6D3B\u5730\u7EF4\u62A4\u6240\u6709\u4F9D\u8D56\u7684\u7248\u672C\u4FE1\u606F\u3002 \u914D\u7F6E\u597D\u7684 BOM\uFF0C\u53EF\u4EE5\u653E\u5728\u5355\u4E2A\u9879\u76EE\u4E2D\u81EA\u7528\uFF0C\u4E5F\u53EF\u4EE5\u4F20\u9605\u548C\u5206\u4EAB\u7ED9\u5176\u4ED6\u9879\u76EE\u8FDB\u884C\u516C\u7528\u3002\u5982\u4E0B\u4E00\u4E2A\u6807\u51C6\u7684"),f={href:"https://start.spring.io/#!type=gradle-project&language=java&platformVersion=2.7.0&packaging=jar&jvmVersion=11&groupId=com.dearxue.example&artifactId=gradle&name=gradle&description=Demo%20project%20for%20Spring%20Boot&packageName=com.dearxue.example.gradle&dependencies=web,cloud-config-client,configuration-processor,testcontainers",target:"_blank",rel:"noopener noreferrer"},x=e("spring boot \u9879\u76EE\u914D\u7F6E"),j=e("\uFF1A"),q=i(`<div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>plugins <span class="token punctuation">{</span>
	id <span class="token string">&#39;org.springframework.boot&#39;</span> version <span class="token string">&#39;2.7.0&#39;</span>
	id <span class="token string">&#39;io.spring.dependency-management&#39;</span> version <span class="token string">&#39;1.0.11.RELEASE&#39;</span>
	id <span class="token string">&#39;java&#39;</span>
<span class="token punctuation">}</span>

group <span class="token operator">=</span> <span class="token string">&#39;com.dearxue.example&#39;</span>
version <span class="token operator">=</span> <span class="token string">&#39;0.0.1-SNAPSHOT&#39;</span>
sourceCompatibility <span class="token operator">=</span> <span class="token string">&#39;11&#39;</span>

configurations <span class="token punctuation">{</span>
	compileOnly <span class="token punctuation">{</span>
		extendsFrom annotationProcessor
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

repositories <span class="token punctuation">{</span>
	<span class="token function">mavenCentral</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

ext <span class="token punctuation">{</span>
	<span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;springCloudVersion&#39;</span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;2021.0.3&quot;</span></span><span class="token punctuation">)</span>
	<span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;testcontainersVersion&#39;</span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;1.17.2&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

dependencies <span class="token punctuation">{</span>
	implementation <span class="token string">&#39;org.springframework.boot:spring-boot-starter-web&#39;</span>
	implementation <span class="token string">&#39;org.springframework.cloud:spring-cloud-starter-config&#39;</span>
	annotationProcessor <span class="token string">&#39;org.springframework.boot:spring-boot-configuration-processor&#39;</span>
	testImplementation <span class="token string">&#39;org.springframework.boot:spring-boot-starter-test&#39;</span>
	testImplementation <span class="token string">&#39;org.testcontainers:junit-jupiter&#39;</span>
<span class="token punctuation">}</span>

dependencyManagement <span class="token punctuation">{</span>
	imports <span class="token punctuation">{</span>
		mavenBom <span class="token interpolation-string"><span class="token string">&quot;org.testcontainers:testcontainers-bom:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">testcontainersVersion</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
		mavenBom <span class="token interpolation-string"><span class="token string">&quot;org.springframework.cloud:spring-cloud-dependencies:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">springCloudVersion</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

tasks<span class="token punctuation">.</span><span class="token function">named</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">useJUnitPlatform</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4E24\u4E2A\u63D2\u4EF6\uFF0C \u5728\u53E6\u5916\u4E00\u7BC7\u6587\u7AE0\u4E2D\u6709\u76F8\u4FE1\u63CF\u8FF0\uFF0C\u5B98\u65B9\u6587\u6863\u53C2\u8003\uFF1A</p>`,2),M=n("thead",null,[n("tr",null,[n("th",null,"pugin"),n("th",null,"\u6587\u6863"),n("th",null,"\u6E90\u7801"),n("th",null,"\u5907\u6CE8")])],-1),J=n("td",null,"org.springframework.boot",-1),w=n("td",null,"2.7.0",-1),O={href:"https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/",target:"_blank",rel:"noopener noreferrer"},V=e("DOC"),S={href:"https://github.com/spring-projects/spring-boot/tree/main/spring-boot-project/spring-boot-tools/spring-boot-gradle-plugin",target:"_blank",rel:"noopener noreferrer"},B=e("\u6E90\u7801"),P=n("td",null,"io.spring.dependency-management",-1),E=n("td",null,"1.0.11.REALEASE",-1),C={href:"https://docs.spring.io/dependency-management-plugin/docs/current/reference/html/",target:"_blank",rel:"noopener noreferrer"},A=e("DOC"),D={href:"https://github.com/spring-gradle-plugins/dependency-management-plugin",target:"_blank",rel:"noopener noreferrer"},L=e("\u6E90\u7801"),T=n("p",null,[e("\u53EF\u4EE5\u770B\u5230 \u6211\u4EEC\u5BFC\u5165 "),n("code",null,"org.springframework.boot:spring-boot-starter-web"),e(" \u65F6\u5019\u6CA1\u6709\u6307\u5B9A\u7248\u672C\u53F7\uFF0C \u8FD9\u4E2A\u662F\u4EE5\u4E3A \u4E0A\u9762\u4E24\u4E2A\u63D2\u4EF6\u7684\u914D\u5408\uFF0C boot \u5B9A\u4E49\u4E86 spring boot depedencies BOM \u7248\uFF0C depedency management \u81EA\u52A8\u5BFC\u5165\u3002")],-1),R={href:"https://docs.gradle.org/current/userguide/java_platform_plugin.html",target:"_blank",rel:"noopener noreferrer"},I=e("The Java Platform Plugin"),G=i(`<p>Platform \u662F\u4E00\u4E2A\u7279\u522B\u7684\u5305\uFF0C \u4E0D\u5305\u542B\u6E90\u7801\uFF0C\u53EA\u662F\u7528\u6765\u4F53\u73B0\u5BF9\u7B2C\u4E09\u65B9\u5305\u7684\u4F9D\u8D56\uFF0C\u6240\u4EE5\u88AB\u7528\u6765\u89E3\u51B3\u9879\u76EE\u91CC\u4F9D\u8D56\u7684\u7EDF\u4E00\u7BA1\u7406\u3002</p><p>Platforms \u53EF\u4EE5\u4EE5 Gradle Modu\u3002 Metadata \u6216\u8005 Maven BOMs \u8FDB\u884C\u53D1\u884C\u3002</p><p><strong>java-platform</strong> \u63D2\u4EF6\u4E0D\u80FD\u548C <code>java</code> \u6216\u8005 <code>java-library</code>\u516C\u7528\uFF0C\u4E5F\u5C31\u662F\u7406\u8BBA\u4E0A\u4E00\u4E2A\u6A21\u5757\u8981\u4E0D\u662F project \u8981\u4E0D\u662F platform\u3002</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>
plugins {
    id &#39;java-platform&#39;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Maven BOM \u548C gradle <code>Java platform</code> \u4E3B\u8981\u4E0D\u4E00\u6837\u662F\uFF0C Gradle dependencies \u6269\u5C55\u4E86 <code>constraints</code>\u7528\u4EE5\u66F4\u7EC6\u7C92\u5EA6\u7684\u7075\u6D3B\u914D\u7F6E, \u4F50\u4EE5runtime/api \u8FDB\u884C\u4F7F\u7528\u3002 API \u5728\u4F7F\u7528platform \u5F15\u5165\u7684\u65F6\u5019\u5728\u7F16\u8BD1\u65F6\u5019\u4F7F\u7528\uFF0C runtime \u8FD0\u884C\u65F6\uFF0C \u4E3E\u4F8B\uFF1A</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>
dependencies {
    constraints {
        api &#39;commons-httpclient:commons-httpclient:3.1&#39;
        runtime &#39;org.postgresql:postgresql:42.2.5&#39;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7528 <code>constraints</code> \u800C\u4E0D\u662F <code>dependencies</code> \uFF0C <code>constraints</code> \u53EA\u6709\u5728\u4F9D\u8D56\u88AB\u76F4\u63A5\u6216\u8005\u95F4\u63A5\u5F15\u5165\u7684\u65F6\u5019\u624D\u751F\u6548\uFF0C \u5982\u4E0A\u9762\uFF0C \u5982\u679C\u9879\u76EE\u6CA1\u6709\u4F9D\u8D56 <code>commons-httpclient</code> \u90A3\u4E48\u4E0D\u4F1A\u751F\u6548\uFF0C \u5982\u679C\u9879\u76EE\u5F15\u5165\u4E86 <code>commons-httpclient</code> \u5E76\u4E14\u662F <code>3.0</code> \u7248\u672C\uFF0C \u4E0D\u7BA1\u662F\u76F4\u63A5\u8FD8\u662F\u95F4\u63A5\u7684\uFF0C \u90A3\u4E48\u4F1A\u5F3A\u5236\u4F7F\u7528 <code>3.1</code> \u7248\u672C\u800C\u4E0D\u662F <code>3.0</code>\u3002</p><p>\u9ED8\u8BA4\u9632\u6B62\u6DF7\u6DC6\u5728platform \u91CC\u9762\u8BEF\u64CD\u6DFB\u52A0 <code>dependency</code> \u800C\u4E0D\u662F <code>constraint</code>, \u8FD9\u6837\u4F1A\u5BFC\u81F4 Gradle \u68C0\u9A8C\u9519\u8BEF. \u6240\u4EE5\u5982\u679C\u4F60\u60F3 <code>dependencies</code> \u548C <code>constraints</code>, \u90FD\u53EF\u4EE5\u7528\uFF0C \u4F60\u53EF\u4EE5\u6DFB\u52A0\u663E\u793A\u7684\u58F0\u660E:</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>javaPlatform {
    allowDependencies()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136, \u4F5C\u4E3A\u4E00\u4E2A\u670D\u52A1\u7EA7\u7684 BOM\uFF0C\u81EA\u7136\u65E0\u9700\u4ECE\u96F6\u5F00\u59CB\u9010\u6761\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5148 import \u6846\u67B6\u7EA7\u7684 BOMs\uFF0C\u5982\u4E0A\u4F8B\u4E2D\u7684Spring boot / Spring cloud / Spring cloud contract / Junit\u3002 \u4F46\u7531\u4E8E\u9700\u8981\u4F7F\u7528\u7B2C\u4E09\u65B9platform bom, \u5219\u4E0D\u5F97\u4E0D\u6253\u5F00\u914D\u7F6E\u7EA6\u675F \u2014\u2014javaPlatform.allowDependencies\u3002</p>`,10),K={href:"https://github.com/spring-projects/spring-framework",target:"_blank",rel:"noopener noreferrer"},N=e("spring-framework>framework-bom"),U=e(" \u53C2\u8003framework \u6E90\u7801\u4E0B\u9762\uFF0C framework-bom \u7684\u4F7F\u7528\u65B9\u6CD5\u3002"),F=i(`<div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>
plugins {
    id &#39;maven-publish&#39;
    id &#39;java-platform&#39;
}

version &#39;0.1.1-SNAPSHOT&#39;

javaPlatform {
    allowDependencies()
}
dependencies {
    api platform(&#39;org.springframework.boot:spring-boot-dependencies:2.2.6.RELEASE&#39;)
    api platform(&#39;org.springframework.cloud:spring-cloud-dependencies:Greenwich.SR3&#39;)
    api platform(&#39;org.springframework.cloud:spring-cloud-contract-dependencies:2.2.3.RELEASE&#39;)
    api platform(&#39;org.junit:junit-bom:5.3.2&#39;)
    constraints {
        api &#39;com.google.guava:guava:27.0.1-jre&#39;

        api &#39;ch.vorburger.mariaDB4j:mariaDB4j-springboot:2.4.0&#39;
        api &#39;org.mariadb.jdbc:mariadb-java-client:2.2.5&#39;

        api &#39;org.mockito:mockito-core:2.22.0&#39;
        api &#39;org.mockito:mockito-junit-jupiter:2.22.0&#39;
        api &#39;org.assertj:assertj-core:3.11.1&#39;
    }
}

publishing {
    repositories {
        maven {
            credentials {
                username = &#39;xxxx&#39;
                password = &#39;xxxx&#39;
            }

            def releasesRepoUrl = &#39;http://xxxxxxx/artifactory/libs-release/&#39;
            def snapshotsRepoUrl = &#39;http://xxxxxx/artifactory/libs-snapshot/&#39;
            url = version.endsWith(&#39;SNAPSHOT&#39;) ? snapshotsRepoUrl : releasesRepoUrl
        }
    }

    publications {
        myPlatform(MavenPublication) {
            from components.javaPlatform
        }
    }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u5C06\u4F1A\u751F\u6210\u4E00\u4E2A BOM \u6709\u7740 <code>&lt;dependencyManagement&gt;</code> \u8282\u70B9\uFF0C \u7136 <code>constraints</code> \u91CC\u9762\u7684\u7248\u672C\u8BBE\u5B9A\u5C06\u4F1A\u8F6C\u6362\u6210 <code>&lt;dependencies&gt;</code>\uFF1B \u5728\u4F7F\u7528\u7684\u65F6\u5019\uFF0C \u5C31\u5982\u6211\u4EEC\u4F7F\u7528spring boot \u65E0\u9700\u672A\u6BCF\u4E2Ajar \u5236\u5B9A\u7248\u672C\uFF1A</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>
dependencies {
    // import a BOM
    implementation platform(&#39;org.springframework.boot:spring-boot-dependencies:1.5.8.RELEASE&#39;)

    // define dependencies without versions
    implementation &#39;com.google.code.gson:gson&#39;
    implementation &#39;dom4j:dom4j&#39;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),H=e("catelog \u548C platform \u90FD\u53EF\u4EE5\u7528\u6765\u63A7\u5236\u7248\u672C \u90A3\u4E48\u5230\u5E95\u90A3\u4E2A"),$={href:"https://docs.gradle.org/current/userguide/platforms.html#sub:platforms-vs-catalog",target:"_blank",rel:"noopener noreferrer"},z=e("\u66F4\u597D\u5462"),W=e("\uFF1F \u5B98\u65B9\u89E3\u91CA\uFF1A"),Q=i(`<ol><li>use catalogs to only define dependencies and their versions for projects and to generate <strong>type-safe</strong> accessors</li><li>use platform to apply versions to dependency graph and to affect dependency resolution</li></ol><p>catalog \u6BD4\u8D77 platform \u66F4\u8F7B\u91CF\u7EA7\uFF0C \u5F53\u7136\u5728\u5B9A\u4E49\u4F60\u7684platform \u65F6\u5019\u4F60\u4E5F\u53EF\u4EE5\u7528\u7C7B\u578B\u5B89\u5168\u7684 catelog:</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>plugins {
    id &#39;java-platform&#39;
}

dependencies {
    constraints {
        api(libs.mylib)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tool-chain" tabindex="-1"><a class="header-anchor" href="#tool-chain" aria-hidden="true">#</a> Tool Chain</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B, \u8FD0\u884Cgradle\u548C\u7F16\u8BD1\u7684JVM\u662F\u4E00\u6837\u7684\u3002\u4F46\u662F\u8FD9\u4E2A\u4E0D\u80FD\u5B8C\u5168\u6EE1\u8DB3\u6211\u4EEC\u7684\u9700\u6C42\uFF0C\u5728\u4E00\u4E9B\u7279\u6B8A\u60C5\u51B5\u4E0B\u53EF\u80FD\u9700\u8981\u4E0D\u540C\u7684JDK \u7248\u672C\u8FDB\u884C\u6253\u5305\u7F16\u8BD1\u3002</p><p><code>Java Toolchain</code> (toolchain)\u662F\u4E00\u4E2A\u5DE5\u5177\u94FE, \u4E00\u822C\u4F7F\u7528\u5B89\u88C5\u7684\u4E0D\u540C\u7684\u4E0D\u540C\u7248\u672C\u7684 JRE/JDK \u6765 build\u3002 \u7F16\u8BD1\u4F7F\u7528javac\uFF0C test and exec \u4F7F\u7528 java \uFF1B javadoc \u7528\u6765\u751F\u6210java \u6587\u6863, tool chain \u662F <code>Java plugins</code> \u81EA\u5DF1\u5E26\u3002</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>
build.gradle
java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(11)
        vendor = JvmVendorSpec.ADOPTIUM
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\uFF1A <code>gradle check</code> \u4F1A\u505A\u8FD9\u4E9B\u5DE5\u4F5C\uFF1A</p>`,8),X=n("li",null,"\u4F7F\u7528toolchain \u4E2D\u5B9A\u4E49\u7684JVM \u7248\u672C\u6765\u8BBE\u7F6E compile\u3001 test \u3001javadoc \u7B49tasks\u3002",-1),Y=n("li",null,"Gradle \u68C0\u6D4B\u672C\u5730\u5B89\u88C5\u7684 JVMs",-1),Z=n("li",null,"Gradle \u9009\u62E9\u4E00\u4E2Atoolchain \u91CC\u9762\u5339\u914D\u7684 JRE/JDK (\u672C\u4F8B\u7684 JVM 11)",-1),nn=e("\u5982\u679C\u6CA1\u6709, \u81EA\u52A8\u4E0B\u8F7D\u5339\u914D\u7684 JDK \u7248\u672C\uFF1A "),en={href:"https://adoptopenjdk.net/",target:"_blank",rel:"noopener noreferrer"},sn=e("AdoptOpenJDK"),an=i(`<div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>
gradlew<span class="token punctuation">.</span>bat <span class="token operator">-</span>q javaToolchains

 <span class="token operator">+</span> Options
     <span class="token operator">|</span> Auto<span class="token operator">-</span>detection<span class="token punctuation">:</span>     Enabled
     <span class="token operator">|</span> Auto<span class="token operator">-</span>download<span class="token punctuation">:</span>      Enabled

 <span class="token operator">+</span> Oracle JDK <span class="token number">18.0</span><span class="token punctuation">.</span><span class="token number">1.1</span><span class="token operator">+</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">6</span>
     <span class="token operator">|</span> Location<span class="token punctuation">:</span>           C<span class="token punctuation">:</span>\\Program Files\\Java\\jdk<span class="token operator">-</span><span class="token number">18.0</span><span class="token punctuation">.</span><span class="token number">1.1</span>
     <span class="token operator">|</span> Language Version<span class="token punctuation">:</span>   <span class="token number">18</span>
     <span class="token operator">|</span> Vendor<span class="token punctuation">:</span>             Oracle
     <span class="token operator">|</span> Is JDK<span class="token punctuation">:</span>             <span class="token boolean">true</span>
     <span class="token operator">|</span> Detected by<span class="token punctuation">:</span>        Current JVM

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>vendor</code> \u53EF\u4EE5\u6709\u4E0D\u540C\u7684\u9009\u62E9\uFF0C IBM, Open JDK....</p><p>\u5355\u4E2A\u4EFB\u52A1\u4E0A\u4E5F\u53EF\u4EE5\u6307\u5B9A\u7279\u5B9A\u7684 JDK \u7248\u672C\uFF1A</p><div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>tasks.withType(JavaCompile).configureEach {
    javaCompiler = javaToolchains.compilerFor {
        languageVersion = JavaLanguageVersion.of(8)
    }
}
task(&#39;testsOn14&#39;, type: Test) {
    javaLauncher = javaToolchains.launcherFor {
        languageVersion = JavaLanguageVersion.of(14)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>JavaCompiler \u5BF9\u5E94 JavaCompile task</li><li>JavaLauncher \u5BF9\u5E94 JavaExec or Test tasks</li><li>JavadocTool \u5BF9\u5E94 Javadoc task</li></ol><h2 id="build-cache" tabindex="-1"><a class="header-anchor" href="#build-cache" aria-hidden="true">#</a> Build Cache</h2><p>Gradle build cache \u662F\u5C06\u7F16\u8BD1\u7684\u7ED3\u679C\u4FDD\u5B58\u5728\u672C\u5730\u6216\u8005\u8FDC\u7A0B\uFF0C\u7528\u6765\u8282\u7701\u65F6\u95F4, \u5F53\u7136\u662Finput \u6CA1\u6709\u88AB\u4FEE\u6539\u60C5\u51B5\u4E0B\u3002</p><p>\u4E24\u79CD\u65B9\u5F0F\u542F\u52A8\uFF1A</p><ol><li><code>--build-cache</code> \u5728\u542F\u52A8\u547D\u4EE4\u4E0A</li><li><code>org.gradle.caching=true</code> \u653E\u5728 gradle.properties \u91CC</li></ol><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,10),on={href:"https://docs.gradle.org/current/userguide/toolchains.html",target:"_blank",rel:"noopener noreferrer"},ln=e("Tool Chain \u5B98\u65B9\u6587\u6863"),tn={href:"https://github.com/spring-projects/spring-framework/blob/main/gradle/toolchains.gradle",target:"_blank",rel:"noopener noreferrer"},rn=e("Spring Tool Chain \u914D\u7F6E"),dn={href:"https://docs.gradle.org/current/userguide/platforms.html",target:"_blank",rel:"noopener noreferrer"},cn=e("Sharing dependency versions between projects"),pn={href:"https://melix.github.io/blog/tags/gradle.html",target:"_blank",rel:"noopener noreferrer"},un=e("Gradle quickie: laziness"),vn={href:"https://docs.gradle.org/current/userguide/java_platform_plugin.html#header",target:"_blank",rel:"noopener noreferrer"},mn=e("The Java Platform Plugin"),gn={href:"https://docs.gradle.org/current/userguide/build_cache.html",target:"_blank",rel:"noopener noreferrer"},bn=e("Build Cache");function kn(hn,yn){const s=l("ExternalLinkIcon");return t(),r("div",null,[c,n("p",null,[p,n("a",u,[v,a(s)]),m]),g,n("p",null,[b,k,h,y,_,n("a",f,[x,a(s)]),j]),q,n("table",null,[M,n("tbody",null,[n("tr",null,[J,w,n("td",null,[n("a",O,[V,a(s)])]),n("td",null,[n("a",S,[B,a(s)])])]),n("tr",null,[P,E,n("td",null,[n("a",C,[A,a(s)])]),n("td",null,[n("a",D,[L,a(s)])])])])]),T,n("p",null,[n("a",R,[I,a(s)])]),G,n("p",null,[n("a",K,[N,a(s)]),U]),F,n("p",null,[H,n("a",$,[z,a(s)]),W]),Q,n("ol",null,[X,Y,Z,n("li",null,[nn,n("a",en,[sn,a(s)])])]),an,n("ol",null,[n("li",null,[n("a",on,[ln,a(s)])]),n("li",null,[n("a",tn,[rn,a(s)])]),n("li",null,[n("a",dn,[cn,a(s)])]),n("li",null,[n("a",pn,[un,a(s)])]),n("li",null,[n("a",vn,[mn,a(s)])]),n("li",null,[n("a",gn,[bn,a(s)])])])])}var xn=o(d,[["render",kn],["__file","005_Advanced.html.vue"]]);export{xn as default};
