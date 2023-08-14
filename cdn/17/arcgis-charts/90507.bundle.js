"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[90507],{90507:(e,t,s)=>{s.r(t),s.d(t,{uploadAssets:()=>h});var a=s(66341),r=s(70375),n=s(13802),o=s(78668),i=s(3466),l=s(12173),u=s(57450),c=s(20692);const p=1e6,d=20*p,f=2e9,y=3;async function w({data:e,name:t,description:s},r,n){let l=null;try{const u=(0,i.v_)(r,"uploads"),w=(0,i.v_)(u,"info"),{data:m}=await(0,a.default)(w,{query:{f:"json"},responseType:"json"});(0,o.k_)(n);const h=(0,c.M8)(r),g=m.maxUploadFileSize*p,T=h?f:g,b=h?Math.min(d,g):d;if(e.size>T)throw new Error("Data too large");const v=(0,i.v_)(u,"register"),{data:E}=await(0,a.default)(v,{query:{f:"json",itemName:t,description:s},responseType:"json",method:"post"});if((0,o.k_)(n),!E.success)throw new Error("Registration failed");const{itemID:_}=E.item;l=(0,i.v_)(u,_);const $=(0,i.v_)(l,"uploadPart"),j=Math.ceil(e.size/b),F=new Array;for(let t=0;t<j;++t)F.push(e.slice(t*b,Math.min((t+1)*b,e.size)));const k=F.slice().reverse(),D=new Array,x=async()=>{for(;0!==k.length;){const e=F.length-k.length,t=k.pop(),s=new FormData;s.append("f","json"),s.append("file",t),s.append("partId",`${e}`);const{data:r}=await(0,a.default)($,{timeout:0,body:s,responseType:"json",method:"post"});if((0,o.k_)(n),!r.success)throw new Error("Part upload failed")}};for(let e=0;e<y&&0!==k.length;++e)D.push(x());await Promise.all(D);const U=(0,i.v_)(l,"commit"),{data:A}=await(0,a.default)(U,{query:{f:"json",parts:F.map(((e,t)=>t)).join(",")},responseType:"json",method:"post"});if((0,o.k_)(n),!A.success)throw new Error("Commit failed");return A.item}catch(e){if(null!=l){const e=(0,i.v_)(l,"delete");await(0,a.default)(e,{query:{f:"json"},responseType:"json",method:"post"})}throw e}}var m=s(13449);async function h(e,t,s){return e.length?Promise.all(e.map((e=>async function(e,{layer:t,ongoingUploads:s},a){const n=s.get(e);if(n)return n;if(!function(e){return!!e.infoFor3D&&!!e.url}(t))throw new r.Z(`${t.type}-layer:upload-failure`,"Layer does not support asset uploads.",new Error);if(function(e,t){const{parsedUrl:s}=t;return null!=s&&e.metadata.externalSources.some((e=>(0,u.JG)(e,s)))}(e,t))return e;const i=async function(e,t,s){const{metadata:a}=e,{displaySource:n}=a,i=g(n?.source,t),u=!!i,c=a.externalSources.length>0,p=u?async function(e,t,s){return{source:await b(e,t,s),original:!0}}(i,t,s):c?async function(e,t,s){const a=_(t),{externalSources:n}=e.metadata,o=function(e,t){for(const s of e){const e=g(s.source,t);if(e)return e}return null}(n,t);if(!o)throw new r.Z(`${t.type}-layer:upload-failure`,"Could not find an external source that is supported by the service.",new Error);const i=await b(o,t,s);return e.addExternalSources([{source:i,original:!0}]),{source:await E(i,t,a)}}(e,t,s):async function(e,t,s){const a=async function(e,t,s){const a=_(t),r=await e.load(s),n=await r.toBinaryGLTF({ignoreLocalTransform:!0});(0,o.k_)(s);const i=await n.buffer();return(0,o.k_)(s),{blob:new Blob([i.data],{type:i.type}),assetName:`${(0,l.z)()}.glb`,assetType:a}}(e,t,s);return{source:await v([a],t,s),extent:e.extent.clone(),original:!0}}(e,t,s),d=await p;return(0,o.k_)(s),e.addExternalSources([d]),e}(e,t,a);s.set(e,i);try{await i}finally{s.delete(e)}return e}(e,t,s)))):[]}function g(e,t){if(!e)return null;const{infoFor3D:{supportedFormats:s,editFormats:a}}=t,r=(0,u.zE)(e),n=new Array;let o=!1;for(let e=0;e<r.length;++e){const t=T(r[e],s);if(!t)return null;a.includes(t.assetType)&&(o=!0),n.push(t)}return o?n:null}function T(e,t){const s=(0,u.vj)(e,t);return s?{asset:e,assetType:s}:null}async function b(e,t,s){return v(e.map((e=>async function(e,t){const{asset:s,assetType:a}=e;if(s instanceof File)return{blob:s,assetName:s.name,assetType:a};const r=await s.toBlob(t);return(0,o.k_)(t),{blob:r,assetName:s.assetName,assetType:a}}(e,s))),t,s)}async function v(e,t,s){const l=await Promise.all(e.map((async e=>{const a=async function(e,t,s){const{blob:a,assetType:l,assetName:u}=e;let c=null;try{const e=await w({data:a,name:u},t.url,s);(0,o.k_)(s),c={assetType:l,assetUploadId:e.itemID}}catch(e){(0,o.r9)(e),n.Z.getLogger("esri.layers.graphics.sources.support.uploadAssets").warnOnce(`Service ${t.url} does not support the REST Uploads API.`)}if(!c){const e=await(0,i.IR)(a);if((0,o.k_)(s),!e.isBase64)throw new r.Z(`${t.type}-layer:uploadAssets-failure`,"Expected gltf data in base64 format after conversion.",new Error);c={assetType:l,assetData:e.data}}if(!c)throw new r.Z(`${t.type}-layer:uploadAssets-failure`,"Unable to prepare uploadAsset request options.",new Error);return{item:c,assetName:u}}(await e,t,s);return(0,o.k_)(s),a})));(0,o.k_)(s);const{uploadResults:c}=await async function(e,t,s){const n=await(0,a.default)((0,i.v_)(t.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if((0,o.k_)(s),n.data.uploadResults.length!==e.length)throw new r.Z(`${t.type}-layer:uploadAssets-failure`,`Bad response. Uploaded ${e.length} items and received ${n.data.uploadResults.length} results.`,new Error);return n.data}(l.map((({item:e})=>e)),t,s);return(0,o.k_)(s),e.map(((e,s)=>function(e,t,s){const{success:a}=t;if(!a){const{error:a}=t;throw new r.Z(`${s.type}-layer:upload-failure`,`Failed to upload mesh file ${e.assetName}. Error code: ${a.code}. Error message: ${a.messages}`,new Error)}const{assetHash:n}=t,{assetName:o,item:{assetType:i}}=e,{infoFor3D:{supportedFormats:l}}=s,c=(0,m.d1)(i,l);if(!c)throw new r.Z(`${s.type}-layer:upload-failure`,`The service allowed us to upload an asset of FormatID ${i}, but it does not list it in its supported formats.`,new Error);return new u.CP(o,c,[new u.LL(`${s.parsedUrl.path}/assets/${n}`,n)])}(l[s],c[s],t)))}async function E(e,t,s){const n=e.map((({assetName:e,parts:t})=>({assetName:e,assetHash:t[0].partHash}))),l=t.capabilities?.operations.supportsAsyncConvert3D,c={query:{f:"json",assets:JSON.stringify(n),transportType:"esriTransportTypeUrl",targetFormat:s,async:l},responseType:"json",timeout:0},p=(0,i.v_)(t.parsedUrl.path,"convert3D"),d=(l?await async function(e,t){const s=(await(0,a.default)(e,t)).data.statusUrl;for(;;){const e=(await(0,a.default)(s,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return(0,a.default)(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new r.Z("async-convert3D-failed","asynchronous convert3D call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new r.Z("async-convert3D-failed","asynchronous convert3D call failed (undefined response status)")}await(0,o.e4)($)}}(p,c):await(0,a.default)(p,c)).data,{infoFor3D:{supportedFormats:f}}=t;return d.assets.map((e=>{const s=(0,m.S0)(e.contentType,f);if(!s)throw new r.Z(`${t.type}-layer:upload-failure`,`The service allowed us to upload an asset of FormatID ${s}, but it does not list it in its supported formats.`,new Error);return new u.CP(e.assetName,e.contentType,[new u.LL(e.assetURL,e.assetHash)])}))}function _(e){const{infoFor3D:t}=e,s=(0,m.S0)("model/gltf-binary",t.supportedFormats)??(0,m.Ow)("glb",t.supportedFormats);if(!s)throw new r.Z(`${e.type}-layer:upload-failure`,"Layer does not support glb.",new Error);return s}const $=1e3}}]);