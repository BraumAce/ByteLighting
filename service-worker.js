if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const f=e=>a(e,c),t={module:{uri:c},exports:r,require:f};s[c]=Promise.all(i.map((e=>t[e]||f(e)))).then((e=>(d(...e),r)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1.html-By-x-LVP.js",revision:"872841623408ff35810cb41acfe60105"},{url:"assets/1.html-Ce6MHS-p.js",revision:"6a554528f22d0161047107aeed2db1f6"},{url:"assets/2.html-BVkHp-r1.js",revision:"897c4e2f1ad81116f87ec8455af10528"},{url:"assets/2.html-BzJ-JVt2.js",revision:"cd5cdea9d0e6f70af2c9e9e117950070"},{url:"assets/3.html-BtDBTgXI.js",revision:"65d2c99487f5051fe8718a51228ee8b5"},{url:"assets/3.html-CL7gg0Mn.js",revision:"b734013b65ac75646fb5be83ae7fe1f3"},{url:"assets/4.html-Cmmaivse.js",revision:"0af5b6bee4ef3ec5bd47897ca450815c"},{url:"assets/4.html-CxB6ruj6.js",revision:"2caf8ca07e326bbe8111fc435cb364ff"},{url:"assets/404.html-CEzfwaMN.js",revision:"13e520f930a1be53bcf96828227df97e"},{url:"assets/app-DY7OLyWz.js",revision:"96f1f8f8500d308c8055b63872977086"},{url:"assets/cherry.html-CbuKvypd.js",revision:"80d79007a03a75881c0a2805b12a9975"},{url:"assets/disable.html-BN7B7Lad.js",revision:"27fb18c0a39cce9e1c8dd7e2e8602717"},{url:"assets/dragonfruit.html-BqSTFapS.js",revision:"7ec3cbe74c0766144d3d5635a86ea475"},{url:"assets/encrypt.html-3a2fnEf9.js",revision:"30151dd75f7ae7d953129f063205ac8c"},{url:"assets/giscus-D-fkNSKD.js",revision:"9215a76234a985e12f7abb9d670bd6d1"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-B2MiaTzR.js",revision:"3c365a788eb4a9d31a914407fc3d3f1c"},{url:"assets/index.html-BDUjivJq.js",revision:"7d98fb03c3a0ab6147c3c3e9d4fc9717"},{url:"assets/index.html-bFmCb2YP.js",revision:"5a4c9eae436f560d2e6dc63720ac1280"},{url:"assets/index.html-BGTUrFnO.js",revision:"7f30da8113dc9726cfde46867a2fd82f"},{url:"assets/index.html-BHo5HmRk.js",revision:"86c54905b78b33b382fcc00001977af9"},{url:"assets/index.html-BswgG-Pn.js",revision:"f662b822a01e69f3522cd86163ca9e76"},{url:"assets/index.html-BXxwP7an.js",revision:"7f1eaff13997e5356081f9ce4489f2f4"},{url:"assets/index.html-C4jbvXWt.js",revision:"459c6d90d3117ded84b0aae06e41515c"},{url:"assets/index.html-CbCUjBys.js",revision:"630bdf9080e7472e326cbe308337ba60"},{url:"assets/index.html-CF4zMKRp.js",revision:"caa4d121cf7d38b95b6cd6905a5dc63d"},{url:"assets/index.html-CldjhPEm.js",revision:"f45f6ae0f0eb784560e6a6d83acec64f"},{url:"assets/index.html-CMPD3Dag.js",revision:"c47e408d2473d16841b5193b831c0e1b"},{url:"assets/index.html-CObg9fmS.js",revision:"52255510c3070822061c1eef27cd3561"},{url:"assets/index.html-CSYOCo9o.js",revision:"18bb5662df9f4dd8e6775953239ae123"},{url:"assets/index.html-CW58QmyQ.js",revision:"ca2ffed7aa498171e97005efff3ef201"},{url:"assets/index.html-cXie3pIl.js",revision:"9f8799daa9a6fe4fa15f392628e00a4b"},{url:"assets/index.html-CzEpzx0-.js",revision:"7f2656b586082b1ba60b99d2e531091c"},{url:"assets/index.html-CZhgNJkM.js",revision:"5f868371993537bea1088405ac60b31c"},{url:"assets/index.html-CZQVBtoO.js",revision:"cf48589ebdd61d716eae0c4bc701c1cd"},{url:"assets/index.html-D7N4UPwf.js",revision:"cab0981e7520b4ecc7a657d0a4c6e83d"},{url:"assets/index.html-DabnP_Ux.js",revision:"9fa458552cb0be301459c76805929efa"},{url:"assets/index.html-DanGO4XM.js",revision:"b03d438f90fb07353ded88d7eb6c863d"},{url:"assets/index.html-DR-vjI_x.js",revision:"f91527e024d60a6e888a9b98eb91b795"},{url:"assets/index.html-DSAKxbZc.js",revision:"355d85a6dbd340e6454d0b1e0362c0f0"},{url:"assets/index.html-DuEmkPtX.js",revision:"c5a424e1b86cfbf528d81d703ffcc8c7"},{url:"assets/index.html-DUw_sQ4k.js",revision:"ed9124ee556ebb2da136960239a78b64"},{url:"assets/index.html-GhMEjofX.js",revision:"c234c9d07595e862e707daf3948bd775"},{url:"assets/index.html-hF5wnm42.js",revision:"c0cd8ec1bc724a192b6f10e1970d2a41"},{url:"assets/index.html-hhfPkg0I.js",revision:"b48ca318f7f7b6f7ac7233ef902713c1"},{url:"assets/index.html-HR41MJ0e.js",revision:"1c6c211b6470a47f8d292a62681f2ceb"},{url:"assets/index.html-MbgZOpUI.js",revision:"6725f615aff161a1dbde03e0ecdf033c"},{url:"assets/index.html-Og5PCdEk.js",revision:"cd4f29e721c5e5072c7e4c965f012488"},{url:"assets/intro.html-nfOMAzTH.js",revision:"8de4e51b51100b9a970b0d281b34124f"},{url:"assets/layout.html-TH-E93_d.js",revision:"5afb43e61600ad68ed059584d15bb72d"},{url:"assets/markdown.html-imnz1DXy.js",revision:"97398a24dfdaf5f042aac701ea0d12ea"},{url:"assets/page.html-CT60WShV.js",revision:"8b3ccae5d22a708140f806860f71c654"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/SearchResult-BfN7A1__.js",revision:"bca890f9122d99834a8241690fac6e94"},{url:"assets/strawberry.html-O1z4l34P.js",revision:"87bb207e8df3eb57bc7369ffe953d8c9"},{url:"assets/style-DEjg2QpW.css",revision:"772f3c4ab4aa3a522243b98da3cace40"},{url:"assets/tomato.html-qwUTtxCg.js",revision:"6e9e11ddfa103abbddcb49162abc0c1f"},{url:"ByteLighting.svg",revision:"853e41ec556e7564cf3a3f2ca1aabda4"},{url:"logo.svg",revision:"0d9ad3fc7ce530da875d7378e4f6f18a"},{url:"404.html",revision:"8685052fa687231e80f075a2282e6083"},{url:"article/index.html",revision:"2765aa3f89a9dc45a184934cd2792817"},{url:"category/index.html",revision:"5a29a919460eafd55ce6c24d52cffa39"},{url:"category/使用指南/index.html",revision:"12250df5dd27b0134ad6fd51fed200f1"},{url:"category/指南/index.html",revision:"0c781501f03dac0f040a5582a3ac4c4e"},{url:"category/樱桃/index.html",revision:"967dff536c14828a710ebe8943f3502c"},{url:"category/水果/index.html",revision:"bfb83f372aa0d59baf0b6d7b8df3dfdb"},{url:"category/火龙果/index.html",revision:"26fe2a9ec87977b295e612795e35d818"},{url:"category/苹果/index.html",revision:"677d2b5535a99833323e868b803b7325"},{url:"category/草莓/index.html",revision:"e36327b22cdcb9d7f481f9780ebe56d8"},{url:"category/蔬菜/index.html",revision:"52f643c6081e93c81c35c6147680b1ca"},{url:"category/香蕉/index.html",revision:"02bd74fae4be99fecd04f3cd35fb281e"},{url:"demo/disable.html",revision:"50fe03020839ab36af5ae5ca7c6037c4"},{url:"demo/encrypt.html",revision:"0fd07fb1002d6921d21a08e4ab8503dd"},{url:"demo/index.html",revision:"eec8f4017e34389aed15e62ffa2d35ea"},{url:"demo/layout.html",revision:"c6a765ad58ab00c312d17b93c60d1860"},{url:"demo/markdown.html",revision:"337f5be83cd61fc72109eda35fbaa2b4"},{url:"demo/page.html",revision:"bdabb4ca2c71bfd98378dc298771fb54"},{url:"index.html",revision:"1393a05b6d7029279b60387a97c2e039"},{url:"intro.html",revision:"4c5399c8ae143101cd814c19a4599631"},{url:"posts/apple/1.html",revision:"c8424f39ecce8fd68898b51adfc8d6ca"},{url:"posts/apple/2.html",revision:"2d0ea0704fe5f7480c5d52c8372534c3"},{url:"posts/apple/3.html",revision:"2675607b7a70581b22802333b1eab5ce"},{url:"posts/apple/4.html",revision:"4acbb43cd209d7797cc8714176bb52ae"},{url:"posts/apple/index.html",revision:"28921be8e05d0eceedc0bf3ea691b8f1"},{url:"posts/banana/1.html",revision:"26b34705cbc8074b0d8cac1f0017e3a4"},{url:"posts/banana/2.html",revision:"fec62b31bc9fd2d38fa313044e2cbad4"},{url:"posts/banana/3.html",revision:"63e1ffbecb9f968a61f85c49fe91764a"},{url:"posts/banana/4.html",revision:"d3538f748e5226a3e6ea58ff029f8422"},{url:"posts/banana/index.html",revision:"27da8334b05783a7560009fb6c9e63d8"},{url:"posts/cherry.html",revision:"87a15cc31454124ae0974a0da90a8632"},{url:"posts/dragonfruit.html",revision:"1b905d2ff3518f7f02d4bcce0895bd16"},{url:"posts/index.html",revision:"4a72c0e7e32591c8f641c1199c652ffb"},{url:"posts/strawberry.html",revision:"f80799cf0997ce8f8931d3e317e15e45"},{url:"posts/tomato.html",revision:"372b21f2e5aa6140a840c0d260c17608"},{url:"star/index.html",revision:"8ca36c40edfb26ec6602b766bf91f25d"},{url:"tag/index.html",revision:"4d0bb87be9c0c00e8f559567c753ff13"},{url:"tag/markdown/index.html",revision:"2d3b6abe032ac596f4b5bb93ac4d2950"},{url:"tag/使用指南/index.html",revision:"4f29a7415a69a114f92b081f3c5ee9e3"},{url:"tag/加密/index.html",revision:"70596d4cddeafe55a93fa5555a579586"},{url:"tag/圆/index.html",revision:"8af8fae4ebad24d56024b73499fb7319"},{url:"tag/大/index.html",revision:"75d50c7ef2f16b13b0770d9a0ef7bcee"},{url:"tag/小/index.html",revision:"e2970ecf2a7505bed7165250fcee5902"},{url:"tag/布局/index.html",revision:"03c6216b0721ac24da2535fe344583f9"},{url:"tag/弯曲的/index.html",revision:"36dcbafc57507aa48789adb1ae196496"},{url:"tag/禁用/index.html",revision:"2475174bbcd05ccc2fe5a9d61448b955"},{url:"tag/红/index.html",revision:"b6fb5f71f9cba480bb90ccac5759c601"},{url:"tag/长/index.html",revision:"cc55bae25d4866a7c4cb73e8e26ec4aa"},{url:"tag/页面配置/index.html",revision:"92caba5dc1840f8f52448d099a5db481"},{url:"tag/黄/index.html",revision:"d3b671ec3a2c90929f6f92cbc6f3086e"},{url:"timeline/index.html",revision:"5b304e8ad8be6c1a116c71b4d33da952"},{url:"assets/icon/apple-icon-152.png",revision:"5e1123fa2f3007d28379d58fda45fd4c"},{url:"assets/icon/chrome-192.png",revision:"5166b342240d18063b9ebcf0f96ef332"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"bb9b8ac56906db7188b548ccf21f1bec"},{url:"assets/images/cover1.jpg",revision:"1a661f8cca025ca27a846090c11b86ad"},{url:"assets/images/cover2.jpg",revision:"b228edd2b9054c83cb464d6b1ed8a4ae"},{url:"assets/images/cover3.jpg",revision:"88358b4d02ef94e59f1f563f38a94fad"},{url:"BraumAce.jpg",revision:"2b8cbd8fffe82f8ec8c5cf46e33eb4be"},{url:"ByteLighting.png",revision:"773e7bfde4698f53dbc319f41d4b50cf"},{url:"logo.bmp",revision:"93e055efd17a6cd361c49b062988ecf5"},{url:"logo.png",revision:"7d51502b9a08e3d72ca35fe364dbec83"}],{}),e.cleanupOutdatedCaches()}));
