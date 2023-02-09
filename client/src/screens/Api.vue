<script>
export default{

}
</script>


<template>
    
<div class="mx-[30vh] my-[20vh] bg-black text-white p-5 max-w-20">
    <h1 id="something-to-say-api-documentation">SOMETHING TO SAY API Documentation</h1>
<h2 id="endpoints-">Endpoints :</h2>
<p>List of available endpoints:</p>
<ul>
<li><code>POST /user/google-login</code>
Routes below need authentication</li>
<li><code>GET /randomquote</code></li>
<li><code>GET /find/:search</code></li>
<li><code>POST /payment/:letterId</code></li>
<li><code>GET /poetry/myletter</code></li>
<li><code>GET /poetry/letterbyid/:letterId</code>
Routes below need authorization</li>
<li><code>POST /sendemail/:id</code></li>
<li><code>POST /poetry/upload-image/:letterId</code></li>
</ul>
<h2 id="1-post-google-login">1. POST /google-login</h2>
<p>description:
-Option for client to login through google</p>
<p>_Request:</p>
<p>-header:</p>
<pre><code class="lang-json">{
  <span class="hljs-attr">"google_token"</span>: <span class="hljs-string">"google token string"</span>
}
</code></pre>
<p><em>Response (200 -OK)</em></p>
<pre><code class="lang-json">{
  <span class="hljs-attr">"access_token"</span>: <span class="hljs-string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkboAH74aJtehJDS5HsFyW7YBeo"</span>,
  <span class="hljs-attr">"username"</span>: <span class="hljs-string">"Rahady"</span>,
  <span class="hljs-attr">"email"</span>: <span class="hljs-string">"rahadyindra16juni@gmail.com"</span>
}
</code></pre>
<h2 id="2-get-randomquote">2. GET /randomquote</h2>
<p>description:
-get random quote</p>
<p>_Request:</p>
<p>-headers:</p>
<pre><code class="lang-json">{
  <span class="hljs-attr">"access_token"</span>: <span class="hljs-string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"</span>
}
</code></pre>
<p><em>Response (200 -OK)</em></p>
<pre><code class="lang-json">[
  <span class="hljs-string">"quotes"</span> : <span class="hljs-string">"strings"</span>,
  <span class="hljs-string">"quotes"</span> : <span class="hljs-string">"strings"</span>,
  <span class="hljs-string">"quotes"</span> : <span class="hljs-string">"strings"</span>
]
</code></pre>
<h2 id="3-get-find-search">3. GET /find/:search</h2>
<p>description:
-get random poem</p>
<p>_Request:</p>
<p>-headers:</p>
<pre><code class="lang-json">{
  <span class="hljs-attr">"access_token"</span>: <span class="hljs-string">"eyJhbGciOiJIUzI1NiIsInR5cCI</span>
}
</code></pre>
<p><em>Response (201 -Created)</em></p>
<pre><code class="lang-json">{
  <span class="hljs-attr">"id"</span> : <span class="hljs-string">"integer"</span>
  <span class="hljs-string">"content"</span> : <span class="hljs-string">"string"</span>
}
</code></pre>
<h2 id="4-post-payment-">4. POST /payment/:</h2>
<p>_Request:</p>
<p>-headers:</p>
<pre><code class="lang-json">{
  <span class="hljs-attr">"access_token"</span>: <span class="hljs-string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV</span>
}
</code></pre>
<p>-params:</p>
<pre><code class="lang-json">{
  <span class="hljs-attr">"id"</span>: <span class="hljs-string">"integer"</span>
}
</code></pre>
<p><em>Response (200 -OK)</em></p>
<pre><code class="lang-json">{
  <span class="hljs-attr">"data"</span>: <span class="hljs-string">"string"</span> // link to payment
}
</code></pre>
<h2 id="5-get-poetry-myletter">5.GET /poetry/myletter</h2>
<p>_Request:</p>
<p>-headers:</p>
<pre><code class="lang-json">{
  <span class="hljs-attr">"access_token"</span>: <span class="hljs-string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ"</span>
}
</code></pre>
<p><em>Response (200 -OK)</em></p>
<pre><code class="lang-json">[
  {
    <span class="hljs-attr">"poem"</span>: <span class="hljs-string">"string"</span>
  },
  {
    <span class="hljs-attr">"poem"</span>: <span class="hljs-string">"string"</span>
  },
  {
    <span class="hljs-attr">"poem"</span>: <span class="hljs-string">"string"</span>
  }
]
</code></pre>
<h2 id="6-get-poetry-letterbyid-letterid">6. GET /poetry/letterbyid/:letterId</h2>
<p>_Request:</p>
<p>-headers:</p>
<pre><code class="lang-json">{
  <span class="hljs-attr">"access_token"</span>: <span class="hljs-string">"eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp"</span>
}
</code></pre>
<p>-params</p>
<pre><code class="lang-json">{
  <span class="hljs-attr">"letterId"</span>: <span class="hljs-string">"integer"</span>
}
</code></pre>
<p><em>Response (200 -OK)</em></p>
<pre><code class="lang-json">
  {
    <span class="hljs-string">"poem"</span>: <span class="hljs-string">"string"</span>
  },
</code></pre>
<h2 id="7-post-sendemail-id">7.POST /sendemail/:id</h2>
<p>_Request:</p>
<p>-headers:</p>
<pre><code class="lang-json">{
  <span class="hljs-attr">"access_token"</span>: <span class="hljs-string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndpbGx5"</span>
}
</code></pre>
<p>-params</p>
<pre><code class="lang-json">{
  <span class="hljs-attr">"id"</span>: <span class="hljs-string">"integer"</span>
}
</code></pre>
<p><em>Response (200 -OK)</em></p>
<pre><code class="lang-json">
  {
    <span class="hljs-string">"message"</span>: <span class="hljs-string">"email has been sent"</span>
  },
</code></pre>
<h2 id="8-post-poetry-upload-image-letterid">8. POST /poetry/upload-image/:letterId</h2>
<p>_Request:</p>
<p>-headers:</p>
<pre><code class="lang-json">{
  <span class="hljs-attr">"access_token"</span>: <span class="hljs-string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndpbGx5"</span>,
  <span class="hljs-attr">"accept"</span>: <span class="hljs-string">"application/json"</span>,
  <span class="hljs-attr">"Accept-Language"</span>: <span class="hljs-string">"en-US,en;q=0.8"</span>,
  <span class="hljs-attr">"Content-Type"</span>: `multipart/form-data`
}
</code></pre>
<p>-params</p>
<pre><code class="lang-json">{
  <span class="hljs-attr">"letterId"</span>: <span class="hljs-string">"integer"</span>
}
</code></pre>
<p>-form data</p>
<pre><code class="lang-json">
{
  <span class="hljs-string">"image"</span> : <span class="hljs-string">"image file jpg or png"</span>
}

\_GLOBAL ERRROR:

-<span class="hljs-keyword">error</span> <span class="hljs-keyword">that</span> could occur <span class="hljs-keyword">to</span> all <span class="hljs-keyword">of</span> <span class="hljs-keyword">the</span> <span class="hljs-keyword">end</span> point due <span class="hljs-keyword">to</span> external factors

_Response (<span class="hljs-number">500</span> -Internal Server Error)_

```json
{
  <span class="hljs-string">"msg"</span>: <span class="hljs-string">"Something is wrong with the server"</span>
}
</code></pre>
<p><em>Response (401 -Invalid token or JsonWebTokenError)</em></p>
<pre><code class="lang-json">{
  <span class="hljs-attr">"msg"</span>: <span class="hljs-string">"invalid token"</span>
}
</code></pre>
<p><em>Response (403 - Forbidden)</em></p>
<pre><code class="lang-json">{
  <span class="hljs-attr">"msg"</span>: <span class="hljs-string">"You don't have permission to do this action"</span>
}
</code></pre>

</div>
</template>