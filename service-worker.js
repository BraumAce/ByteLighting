if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let f={};const c=e=>a(e,r),b={module:{uri:r},exports:f,require:c};s[r]=Promise.all(i.map((e=>b[e]||c(e)))).then((e=>(d(...e),f)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1.html-BXvArFGl.js",revision:"30a7ba3f380813a9f27110db9213efa3"},{url:"assets/1.html-DnIq4PAp.js",revision:"00344c00c61e4aea2f1775c05ca79454"},{url:"assets/2.html-DnsErmUM.js",revision:"bf8e7a74374bc9b4ae3eb28bcdc6b210"},{url:"assets/2.html-EN9TrQ6g.js",revision:"da7dbd3b24708ca74ab051842b30e08a"},{url:"assets/3.html-DQFuMuUH.js",revision:"6d7dcc0c52a761d55541931badbb8883"},{url:"assets/3.html-FspSNBdy.js",revision:"3392172255e998f9129ce28c871501b0"},{url:"assets/4.html-5r39SPUd.js",revision:"d1ab5838d38cb18a04a9582d26943d12"},{url:"assets/4.html-C5i2Cctn.js",revision:"53ef486875ea552a9d5dfe16d041e989"},{url:"assets/404.html-rD-E4dS9.js",revision:"72a605ebc3cb65135883c72b625444f9"},{url:"assets/app-BJVdjCZL.js",revision:"ab69630a4dfc2eba65e1ffe3d9347377"},{url:"assets/cherry.html-HJjPuowx.js",revision:"6719bf8c1003869f1a8efff5f19bec16"},{url:"assets/disable.html-xIG38d1g.js",revision:"40dc0b3f8772259fabb26c837245fe3d"},{url:"assets/dragonfruit.html-BqLs03Gr.js",revision:"d2e2b9cffa4d690e5316306e0df27ab1"},{url:"assets/encrypt.html-D1JK6aTk.js",revision:"a724aa5db4167297e7e8103f5a5c7d87"},{url:"assets/giscus-D-fkNSKD.js",revision:"9215a76234a985e12f7abb9d670bd6d1"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-30pX78sf.js",revision:"39ae76233dd8434a4dd6c342c59f7974"},{url:"assets/index.html-3bEUbSLh.js",revision:"52cfd2bab165a85371b4e280f72ddf16"},{url:"assets/index.html-am__W0-k.js",revision:"54ad38371241154f1a39c8c698474595"},{url:"assets/index.html-BC1Fstn8.js",revision:"acc9c6c1f2c48ef6cd391eb6bafe5def"},{url:"assets/index.html-BdoKJltc.js",revision:"138f636c4e7679a3165972c182ef5635"},{url:"assets/index.html-BLizOLc4.js",revision:"3adb54e4c6f484132056a14cef857638"},{url:"assets/index.html-Bsh6cPDg.js",revision:"391fe09650e9dc44199fe8935c55b12b"},{url:"assets/index.html-BvuXbALF.js",revision:"8d50032479e8d1797f930c0f9cec2ce2"},{url:"assets/index.html-ByCzg2AC.js",revision:"642a0c78aea4c09c5d674d5618a841d8"},{url:"assets/index.html-C3NFCRjz.js",revision:"a0cba3594e3ebda73fb90ff892d8d700"},{url:"assets/index.html-CbqxyBIK.js",revision:"30b1757395c4db5b0547defeb0c127ba"},{url:"assets/index.html-CfmUNkmY.js",revision:"4e6288ca5f7747aa7f1b750ea23290d8"},{url:"assets/index.html-CLf5Kz-2.js",revision:"5db13adad29587f1efe95fe7a1b6452d"},{url:"assets/index.html-CsFkTswM.js",revision:"03962514e2dd542d346d66270f10b723"},{url:"assets/index.html-CTmEIa6Z.js",revision:"4b7cdf398e657c990784d4715bc83251"},{url:"assets/index.html-CWfdDgL6.js",revision:"7911d04fac254599285acee6b12ef46e"},{url:"assets/index.html-CzObNe5m.js",revision:"eaef64f3fb9c6223bf4c9416f20cfe29"},{url:"assets/index.html-D5JH1EsS.js",revision:"ce87ed1f81352c85f36f74be6b602575"},{url:"assets/index.html-Di1eXgN3.js",revision:"d303efa48f2a705d879956d0b9b7936f"},{url:"assets/index.html-DiVSuNIO.js",revision:"b8e60aafde04190d5afdc1682ba0791b"},{url:"assets/index.html-DJoqm_cR.js",revision:"c88ef32a5976613f9e76f9372cfaa59f"},{url:"assets/index.html-FB0yTuTx.js",revision:"fead04f9b762b6116b002d51d0a12f95"},{url:"assets/index.html-gfM7Ht8n.js",revision:"139899562f505fb8cce092fd643312e8"},{url:"assets/index.html-Klx2E_Wk.js",revision:"2de1e023cc2a83b76602183892287521"},{url:"assets/index.html-lED1Vrve.js",revision:"90c1d04ca11c06dc681f77e9c9636b5f"},{url:"assets/index.html-liTs2_JD.js",revision:"5cb07c2baad4ef4b0f5176bc66ab2051"},{url:"assets/index.html-o9q91ADs.js",revision:"dfbffc2c5683af948b0146178ed720be"},{url:"assets/index.html-pOgRnj4A.js",revision:"a1b8ece97525838edbdb3cbd0088b797"},{url:"assets/index.html-rDYnbAiZ.js",revision:"9ee46abf2e2033f91a78d23ae1ac2481"},{url:"assets/index.html-wkJiyCy-.js",revision:"6e81947f2260cba7f2578eb889a8afb8"},{url:"assets/index.html-xozJa_aG.js",revision:"4b4a5849a2c0b89f3a176ad4aff596d8"},{url:"assets/index.html-yJ7xyPy4.js",revision:"5be48ba8969ea9f464c8410f39deda80"},{url:"assets/intro.html-tflKAx5R.js",revision:"9cdde41c6305fb111681c0f8203458c3"},{url:"assets/layout.html-C7k4-Oap.js",revision:"7feb3ed4f5deaaabf305d7e43563633d"},{url:"assets/markdown.html-D7l-LOJh.js",revision:"4a0a161eb69328e00aa7acb730a2f035"},{url:"assets/page.html-BpklSICo.js",revision:"9c7b05a3945b00c931a790fe1c754def"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/SearchResult-CCKvB8G5.js",revision:"a1cd0eb72b5170d05d0ffab1f7103a31"},{url:"assets/strawberry.html-CwWpadwO.js",revision:"dedcd4aef477fe2e33ee15a6b8a43762"},{url:"assets/style-DEjg2QpW.css",revision:"772f3c4ab4aa3a522243b98da3cace40"},{url:"assets/tomato.html-Bhzj0qEe.js",revision:"5e51855e349170b1099390869bff311a"},{url:"ByteLighting.svg",revision:"853e41ec556e7564cf3a3f2ca1aabda4"},{url:"logo.svg",revision:"0d9ad3fc7ce530da875d7378e4f6f18a"},{url:"404.html",revision:"5f067264bf242d5c0287a559380cab0d"},{url:"article/index.html",revision:"1432473ebe1caa331bdaab3dba3bdf04"},{url:"category/index.html",revision:"86df2ce7602ed9234d49b2349d763133"},{url:"category/使用指南/index.html",revision:"de94c0e9e1ae0702dd1ed5fbc98257a6"},{url:"category/指南/index.html",revision:"2baf08272711f9d9b1d36b0f80a8a98c"},{url:"category/樱桃/index.html",revision:"f66bdcd95bcdfe1f7b4b1a5a1bfb4919"},{url:"category/水果/index.html",revision:"556e5c947dbca97b9554eaf8683b5abc"},{url:"category/火龙果/index.html",revision:"6986b79d648aa0d0395952a0cca11137"},{url:"category/苹果/index.html",revision:"114725bf3b2a34cd4aed78671ade84da"},{url:"category/草莓/index.html",revision:"650b68d3bfbce73f04b40e4b980b132d"},{url:"category/蔬菜/index.html",revision:"6031b5e15ff6898deaaab3dd64244160"},{url:"category/香蕉/index.html",revision:"3226f769e775722c8010459f36164dcf"},{url:"demo/disable.html",revision:"857ae3cc79d60c9b574eb0adf06bf424"},{url:"demo/encrypt.html",revision:"4606f36d4033a90d3466125bd9b8778b"},{url:"demo/index.html",revision:"c80e0661961d0f902c844b57d5964b44"},{url:"demo/layout.html",revision:"87fd6be50f788cbc4ac914956e2cc77d"},{url:"demo/markdown.html",revision:"c659fa387f63ee112dd8f6444d2e07dc"},{url:"demo/page.html",revision:"a36a8864cf9dfe98242a37b874066b9c"},{url:"index.html",revision:"5d075c54664a76003ff93ba068f20c58"},{url:"intro.html",revision:"0f58f27d5182ee16d601205acb174f70"},{url:"posts/apple/1.html",revision:"9e476420ab6d379f5ddb3dbf6e694ec8"},{url:"posts/apple/2.html",revision:"4ad7b5828a015fa7cec0eb5c2263880a"},{url:"posts/apple/3.html",revision:"d1ea3894360bf8837feca3176a676262"},{url:"posts/apple/4.html",revision:"79db1455af6728c9faa9adb61aeec826"},{url:"posts/apple/index.html",revision:"5ea66f21899b66d5ffd516ef195eec15"},{url:"posts/banana/1.html",revision:"c1c375450384ac8536ca26c8ec58685d"},{url:"posts/banana/2.html",revision:"14f6381e32ddb70e3a60782e4ea62247"},{url:"posts/banana/3.html",revision:"1a4b6fe7f953fef80f28ccb59b930da8"},{url:"posts/banana/4.html",revision:"6a7b4fbe83cb3ad166715c12cdcd5eb8"},{url:"posts/banana/index.html",revision:"fd9e8cfa95531814f6028030a2b8c13a"},{url:"posts/cherry.html",revision:"410f0d13a8349cbf127703c33ca9db86"},{url:"posts/dragonfruit.html",revision:"cf984b6731aa6b50786974b5627ae830"},{url:"posts/index.html",revision:"a7ae465fb61502ef83f71a7c86268c2f"},{url:"posts/strawberry.html",revision:"f12270f86e4e351af1f23abf7d2de279"},{url:"posts/tomato.html",revision:"0de06de8c1c2b99d17b1254659084df8"},{url:"star/index.html",revision:"d70fef451e8ce0e167b616af937a2c6e"},{url:"tag/index.html",revision:"063c5a144271841c82034adf5a353737"},{url:"tag/markdown/index.html",revision:"332bbc90d65a23f6ae1f7c5ca88ab9d0"},{url:"tag/使用指南/index.html",revision:"a89e7e66fff15b88a871750d459400ea"},{url:"tag/加密/index.html",revision:"bbb6d33720c7f2f7e3957200492b5e3c"},{url:"tag/圆/index.html",revision:"9ad0aa275712330739a5a205423a977c"},{url:"tag/大/index.html",revision:"6a26a57cb0e1b79d8fbb363283e21960"},{url:"tag/小/index.html",revision:"ff137c4fd9a91330a6887f5645d88577"},{url:"tag/布局/index.html",revision:"b9da059d58b788318109c668dd32d08e"},{url:"tag/弯曲的/index.html",revision:"f803eceb5de5ea567b2a93fd49bd2e78"},{url:"tag/禁用/index.html",revision:"814e41e605b412d7bddbf7f9343d723d"},{url:"tag/红/index.html",revision:"8f4735087f5a18aac18288f4c292cafc"},{url:"tag/长/index.html",revision:"03b96a76a43ee6772119f2f4ada6cd82"},{url:"tag/页面配置/index.html",revision:"5c913f2e8b1e39d224d095df794d2815"},{url:"tag/黄/index.html",revision:"854bd9bed9af95eb7ef9ea3c4b26858b"},{url:"timeline/index.html",revision:"470cad3f02ceac5b415f39050be7a9ae"},{url:"assets/icon/apple-icon-152.png",revision:"5e1123fa2f3007d28379d58fda45fd4c"},{url:"assets/icon/chrome-192.png",revision:"5166b342240d18063b9ebcf0f96ef332"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"bb9b8ac56906db7188b548ccf21f1bec"},{url:"assets/images/cover1.jpg",revision:"1a661f8cca025ca27a846090c11b86ad"},{url:"assets/images/cover2.jpg",revision:"b228edd2b9054c83cb464d6b1ed8a4ae"},{url:"assets/images/cover3.jpg",revision:"88358b4d02ef94e59f1f563f38a94fad"},{url:"BraumAce.jpg",revision:"2b8cbd8fffe82f8ec8c5cf46e33eb4be"},{url:"ByteLighting.png",revision:"773e7bfde4698f53dbc319f41d4b50cf"},{url:"logo.bmp",revision:"93e055efd17a6cd361c49b062988ecf5"},{url:"logo.png",revision:"7d51502b9a08e3d72ca35fe364dbec83"}],{}),e.cleanupOutdatedCaches()}));
