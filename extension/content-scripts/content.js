var content=(function(){function e(e){return e}var t=globalThis.browser?.runtime?.id?globalThis.browser:globalThis.chrome,n=[`input#email`,`input[name="email"]`,`input[type="email"]`,`input[autocomplete="email"]`],r=[`button[type="submit"]`,`form button:not([type="button"])`];function i(){return location.hostname===`chatgpt.com`&&location.pathname.startsWith(`/auth/login`)}async function a(e){let t=s(n);if(!t)return f(`没有找到邮箱输入框`);c(t,e),t.dispatchEvent(new Event(`input`,{bubbles:!0})),t.dispatchEvent(new Event(`change`,{bubbles:!0})),await l();let r=o();return r?(r.disabled&&await u(r,2500),r.disabled?f(`继续按钮仍然不可点击`):(r.click(),d(`已填入邮箱并点击继续`))):f(`没有找到继续按钮`)}function o(){for(let e of r){let t=document.querySelector(e);if(t)return t}return Array.from(document.querySelectorAll(`button`)).find(e=>{let t=(e.textContent||``).trim();return t===`继续`||t.toLowerCase()===`continue`})??null}function s(e){for(let t of e){let e=document.querySelector(t);if(e)return e}return null}function c(e,t){Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,`value`)?.set?.call(e,t)}function l(){return new Promise(e=>window.setTimeout(e,60))}function u(e,t){let n=Date.now();return new Promise(r=>{let i=()=>{if(!e.disabled||Date.now()-n>=t){r();return}window.setTimeout(i,100)};i()})}function d(e){return{ok:!0,message:e}}function f(e){return{ok:!1,message:e}}var p=[`input[name="code"]`,`input[name="otp"]`,`input[autocomplete="one-time-code"]`,`input[inputmode="numeric"]`,`input[type="text"]`];function m(){return location.hostname===`auth.openai.com`&&location.pathname.startsWith(`/email-verification`)}async function h(e){let t=e.replace(/\D/g,``);if(!t)return S(`验证码不能为空`);let n=g();if(!n)return S(`没有找到验证码输入框`);v(n,t),n.dispatchEvent(new Event(`input`,{bubbles:!0})),n.dispatchEvent(new Event(`change`,{bubbles:!0})),await y();let r=_();return r?(r.disabled&&await b(r,2500),r.disabled?S(`验证码继续按钮仍然不可点击`):(r.click(),x(`已填入验证码并点击继续`))):S(`没有找到验证码继续按钮`)}function g(){for(let e of p){let t=document.querySelector(e);if(t)return t}return Array.from(document.querySelectorAll(`input`)).find(e=>{let t=[e.placeholder,e.ariaLabel,e.name,e.id].join(` `).toLowerCase();return t.includes(`code`)||t.includes(`otp`)||t.includes(`验证`)})??null}function _(){return document.querySelector(`button[type="submit"]`)||(Array.from(document.querySelectorAll(`button`)).find(e=>{let t=(e.textContent||``).trim();return t===`继续`||t.toLowerCase()===`continue`})??null)}function v(e,t){Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,`value`)?.set?.call(e,t)}function y(){return new Promise(e=>window.setTimeout(e,60))}function b(e,t){let n=Date.now();return new Promise(r=>{let i=()=>{if(!e.disabled||Date.now()-n>=t){r();return}window.setTimeout(i,100)};i()})}function x(e){return{ok:!0,message:e}}function S(e){return{ok:!1,message:e}}var C=[`input[name="name"]`,`input[name="fullName"]`,`input[autocomplete="name"]`,`input[type="text"]`],w=[`input[name="age"]`,`input[inputmode="numeric"]`,`input[type="number"]`,`input[type="text"]`],T=[`Arlen`,`Brennan`,`Calvin`,`Darian`,`Elliot`,`Finley`,`Gavin`,`Harlan`,`Jasper`,`Kieran`,`Landon`,`Morgan`,`Nolan`,`Parker`,`Rowan`,`Sawyer`,`Tristan`,`Warren`];function ee(){return location.hostname===`auth.openai.com`&&location.pathname.startsWith(`/about-you`)}async function E(){let e=D(),t=O(e);if(!e)return k(`没有找到全名输入框`);if(!t)return k(`没有找到年龄输入框`);let n=le(),r=String(ue(25,55));oe(e,n),e.dispatchEvent(new Event(`input`,{bubbles:!0})),e.dispatchEvent(new Event(`change`,{bubbles:!0})),oe(t,r),t.dispatchEvent(new Event(`input`,{bubbles:!0})),t.dispatchEvent(new Event(`change`,{bubbles:!0})),await se();let i=ae();return i?(i.disabled&&await ce(i,2500),i.disabled?k(`完成账户创建按钮仍然不可点击`):(i.click(),de(`已填写 ${n} / ${r} 并点击创建`))):k(`没有找到完成账户创建按钮`)}function D(){let e=te([`全名`,`名字`,`name`,`full name`]);if(e)return e;for(let e of C){let t=document.querySelector(e);if(t&&!ie(t))return t}return re().find(e=>!ie(e))??null}function O(e){let t=te([`年龄`,`age`]);if(t&&t!==e)return t;for(let t of w){let n=Array.from(document.querySelectorAll(t)).find(t=>t!==e&&ie(t));if(n)return n}return re().find(t=>t!==e)??null}function te(e){let t=re();for(let n of t){let t=[n.name,n.id,n.placeholder,n.ariaLabel,n.getAttribute(`aria-labelledby`)?ne(n.getAttribute(`aria-labelledby`)||``):``,n.closest(`label`)?.textContent||``,n.parentElement?.textContent||``].join(` `).toLowerCase();if(e.some(e=>t.includes(e.toLowerCase())))return n}return null}function ne(e){return e.split(/\s+/).map(e=>document.getElementById(e)?.textContent||``).join(` `)}function re(){return Array.from(document.querySelectorAll(`input`)).filter(e=>{let t=(e.type||`text`).toLowerCase();return[`text`,`number`,`tel`,``].includes(t)})}function ie(e){let t=[e.name,e.id,e.placeholder,e.ariaLabel,e.inputMode,e.type,e.parentElement?.textContent||``].join(` `).toLowerCase();return t.includes(`age`)||t.includes(`年龄`)||t.includes(`numeric`)||e.type===`number`}function ae(){return document.querySelector(`button[type="submit"]`)||(Array.from(document.querySelectorAll(`button`)).find(e=>{let t=(e.textContent||``).trim().toLowerCase();return t.includes(`完成帐户创建`)||t.includes(`完成账户创建`)||t.includes(`create account`)||t.includes(`continue`)})??null)}function oe(e,t){Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,`value`)?.set?.call(e,t)}function se(){return new Promise(e=>window.setTimeout(e,80))}function ce(e,t){let n=Date.now();return new Promise(r=>{let i=()=>{if(!e.disabled||Date.now()-n>=t){r();return}window.setTimeout(i,100)};i()})}function le(){return T[ue(0,T.length-1)]}function ue(e,t){return Math.floor(Math.random()*(t-e+1))+e}function de(e){return{ok:!0,message:e}}function k(e){return{ok:!1,message:e}}var fe=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function pe(e){let t=e.trim();if(!t)return me(`empty`,`请输入邮箱或 Outlook 账号行`);let n=t.split(/\r?\n/).map(e=>e.trim()).find(Boolean)||``;if(n.includes(`----`)){let e=n.split(`----`).map(e=>e.trim()),t=e[0]||``;return fe.test(t)?e.length<4||!e[2]||!e[3]?me(`invalid`,`Outlook 行需要 email----password----client_id----refresh_token`):{ok:!0,mode:`outlook-line`,email:t,accountLine:n,message:`Outlook API 自动验证码`}:me(`invalid`,`Outlook 行里的邮箱格式不正确`)}return fe.test(n)?{ok:!0,mode:`email`,email:n,accountLine:``,message:`单邮箱模式，验证码手动输入`}:me(`invalid`,`邮箱格式不正确`)}function me(e,t){return{ok:!1,mode:e,email:``,accountLine:``,message:t}}var he=/"accessToken"\s*:\s*"([^"]+)"/,ge=/"accessToken"\s*:\s*"?([A-Za-z0-9_.-]+)/,_e=/\beyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b/,A={planName:`chatgptplusplan`,uiMode:`custom`,region:`US`,workspaceName:`MyTeam`,seatQuantity:5};function ve(e){let t=String(e||``).trim();if(!t)throw Error(`请输入包含 accessToken 的 JSON 或字符串`);let n=we(t)||Ee(t)||De(t);if(!n)throw Error(`未找到 accessToken`);if(n.split(`.`).length!==3)throw Error(`accessToken 格式不正确`);return n}function ye(e){let t=Oe(e)?e:{};return{planName:be(t.planName),uiMode:xe(t.uiMode),region:Se(t.region||t.country),workspaceName:String(t.workspaceName||t.workspace_name||A.workspaceName).trim()||A.workspaceName,seatQuantity:Ce(t.seatQuantity)}}function be(e){return e===`chatgptplusplan`||e===`chatgptteamplan`?e:A.planName}function xe(e){return e===`hosted`?`hosted`:`custom`}function Se(e){let t=String(e||A.region).trim().toUpperCase();return t===`ID`||t===`DE`||t===`JP`||t===`US`?t:A.region}function Ce(e){let t=Number(e||A.seatQuantity);if(!Number.isInteger(t)||t<1)throw Error(`team_plan_data.seat_quantity 必须是大于 0 的整数`);return t}function we(e){try{return Te(JSON.parse(e))}catch{return``}}function Te(e,t=0){if(!Oe(e)||t>4)return``;if(typeof e.accessToken==`string`)return e.accessToken.trim();for(let n of Object.values(e)){let e=Te(n,t+1);if(e)return e}return``}function Ee(e){let t=he.exec(e);if(t?.[1])return t[1].trim();let n=ge.exec(e);if(!n?.[1])return``;let r=n[1].trim().replace(/[",}\]\s]+$/,``);return _e.exec(r)?.[0]?.trim()||r}function De(e){return _e.exec(e)?.[0]?.trim()||``}function Oe(e){return!!(e&&typeof e==`object`)}var ke=`http://127.0.0.1:8787`,j=`opx.registerAssist.state`,M={rawInput:``,email:``,accountLine:``,inputMode:`empty`,autoOtp:!1,apiBase:ke,otpRequestedAt:0,updatedAt:0},Ae={checkoutOptions:A,updatedAt:0},je={rawInput:``,history:[],updatedAt:0},Me={activeTab:`register`,panelCollapsed:!1,register:M,linkExtractor:Ae,smsRelay:je};async function N(){return He((await t.storage.local.get(j))[j])}async function Ne(e){let n=He({...await N(),activeTab:e});return await t.storage.local.set({[j]:n}),n}async function Pe(e){let n=He({...await N(),panelCollapsed:e});return await t.storage.local.set({[j]:n}),n}async function Fe(){return(await N()).register}async function Ie(e){let n=await N(),r=Ue({...n.register,...e,updatedAt:Date.now()}),i=He({...n,register:r});return await t.storage.local.set({[j]:i}),i.register}async function Le(){return(await N()).linkExtractor}async function Re(e){let n=await N(),r=We({...n.linkExtractor,...e,updatedAt:Date.now()}),i=He({...n,linkExtractor:r});return await t.storage.local.set({[j]:i}),i.linkExtractor}async function ze(){return(await N()).smsRelay}async function Be(e){let n=await N(),r=Ge({...n.smsRelay,...e,updatedAt:Date.now()}),i=He({...n,smsRelay:r});return await t.storage.local.set({[j]:i}),i.smsRelay}function Ve(e){return e===`register`||e===`link`||e===`address`||e===`sms`}function He(e){let t=P(e)?e:{},n=P(t.register)?t.register:t,r=P(t.linkExtractor)?t.linkExtractor:t,i=P(t.smsRelay)?t.smsRelay:je;return{activeTab:Ve(String(t.activeTab||``))?t.activeTab:Me.activeTab,panelCollapsed:!!t.panelCollapsed,register:Ue(n),linkExtractor:We(r),smsRelay:Ge(i)}}function Ue(e){let t=P(e)?e:{};return{rawInput:String(t.rawInput||M.rawInput),email:String(t.email||M.email),accountLine:String(t.accountLine||M.accountLine),inputMode:qe(t.inputMode),autoOtp:!!t.autoOtp,apiBase:String(t.apiBase||M.apiBase),otpRequestedAt:Number(t.otpRequestedAt||M.otpRequestedAt),updatedAt:Number(t.updatedAt||M.updatedAt)}}function We(e){let t=P(e)?e:{};return{checkoutOptions:ye(t.checkoutOptions||Ae.checkoutOptions),updatedAt:Number(t.updatedAt||Ae.updatedAt)}}function Ge(e){let t=P(e)?e:{},n=Array.isArray(t.history)?t.history.map(Ke).filter(e=>!!e):je.history;return{rawInput:String(t.rawInput||je.rawInput),history:n,updatedAt:Number(t.updatedAt||je.updatedAt)}}function Ke(e){if(!P(e))return null;let t=String(e.phone||``).trim(),n=String(e.code||``).trim();if(!t||!n)return null;let r=Number(e.receivedAt||0)||Date.now();return{id:String(e.id||`${t}-${n}-${r}`),phone:t,code:n,message:String(e.message||``).trim(),receivedAt:r}}function qe(e){return e===`email`||e===`outlook-line`||e===`invalid`?e:`empty`}function P(e){return!!(e&&typeof e==`object`)}var Je=!1;function Ye(){return{getPageState:Xe,loadState:Fe,saveInput:async e=>{let t=pe(e);return Ie({rawInput:e,email:t.email,accountLine:t.accountLine,inputMode:t.mode,autoOtp:t.mode===`outlook-line`})},fillEmailFromInput:async()=>{let e=pe((await Fe()).rawInput);return e.ok?i()?(await Ie({email:e.email,accountLine:e.accountLine,inputMode:e.mode,autoOtp:e.mode===`outlook-line`,otpRequestedAt:Date.now()}),a(e.email)):F(`当前页面不是 ChatGPT 登录页`):F(e.message)},fillOtp:async e=>m()?h(e):F(`当前页面不是邮箱验证码页`),waitForOutlookOtp:async()=>{if(!m())return F(`当前页面不是邮箱验证码页`);let e=await Fe();if(!e.accountLine)return F(`当前输入不是 Outlook 账号行，不能自动接收验证码`);let n=await t.runtime.sendMessage({type:`opx:wait-outlook-otp`,accountLine:e.accountLine,apiBase:e.apiBase,since:e.otpRequestedAt||e.updatedAt||Date.now(),timeoutMs:18e4,intervalMs:5e3});if(!Ze(n))return F(`Outlook API 没有返回有效结果`);if(!n.ok||!n.code)return n;let r=await h(n.code);return{...r,code:n.code,message:r.ok?`已收到并提交验证码：${n.code}`:r.message}},fillProfileAndCreate:async()=>ee()?E():F(`当前页面不是资料填写页`),autoRunForCurrentPage:async()=>{!ee()||Je||(Je=!0,await Qe(),await E())}}}function Xe(){return i()?{kind:`login`,label:`ChatGPT 登录页`,canFillEmail:!0,canFillOtp:!1,canFillProfile:!1}:m()?{kind:`email-verification`,label:`邮箱验证码页`,canFillEmail:!1,canFillOtp:!0,canFillProfile:!1}:ee()?{kind:`about-you`,label:`资料填写页`,canFillEmail:!1,canFillOtp:!1,canFillProfile:!0}:{kind:`unknown`,label:`未识别页面`,canFillEmail:!1,canFillOtp:!1,canFillProfile:!1}}function F(e){return{ok:!1,message:e}}function Ze(e){return!!(e&&typeof e==`object`&&typeof e.ok==`boolean`&&typeof e.message==`string`)}function Qe(){return new Promise(e=>window.setTimeout(e,800))}var $e=`opx.extension.settings`,I={payOpenAiEnabled:!0,payPalSignupEnabled:!0,countryCode:`US`,city:``,lastAddress:null,updatedAt:0},et={addressAutofill:I,updatedAt:0},tt=new Set([`RANDOM`,`US`,`CA`,`AU`,`JP`,`TW`,`KR`,`HK`,`GB`,`DE`,`SG`,`FR`,`IT`,`ES`,`NL`,`MY`,`RU`,`CN`,`TH`,`PH`,`AR`,`TR`,`VN`]);async function nt(){return rt((await t.storage.local.get($e))[$e])}async function L(e){let n=await nt(),r=it({...n.addressAutofill,...e,updatedAt:Date.now()}),i=rt({...n,addressAutofill:r,updatedAt:Date.now()});return await t.storage.local.set({[$e]:i}),i.addressAutofill}async function R(){return(await nt()).addressAutofill}function rt(e){let t=lt(e)?e:{};return{addressAutofill:it(t.addressAutofill),updatedAt:Number(t.updatedAt||et.updatedAt)}}function it(e){let t=lt(e)?e:{};return{payOpenAiEnabled:t.payOpenAiEnabled===void 0?I.payOpenAiEnabled:!!t.payOpenAiEnabled,payPalSignupEnabled:t.payPalSignupEnabled===void 0?I.payPalSignupEnabled:!!t.payPalSignupEnabled,countryCode:ut(t.countryCode||t.country),city:String(t.city||t.region||I.city),lastAddress:at(t.lastAddress),updatedAt:Number(t.updatedAt||I.updatedAt)}}function at(e){if(!lt(e))return null;let t=String(e.line1||``).trim(),n=String(e.city||``).trim(),r=String(e.countryCode||e.country||`US`).trim().toUpperCase(),i=String(e.state||``).trim(),a=r===`US`?i.toUpperCase():i,o=String(e.postalCode||``).trim();return!t||!n||!a||!o?null:{id:String(e.id||`${Date.now()}`),fullName:String(e.fullName||``).trim(),line1:t,line2:String(e.line2||``).trim(),city:n,state:a,stateFull:String(e.stateFull||``).trim(),postalCode:o,countryCode:r,countryLabel:String(e.countryLabel||``).trim(),countryPath:String(e.countryPath||``).trim(),phone:String(e.phone||``).trim(),identity:ot(e.identity),employment:st(e.employment),creditCard:ct(e.creditCard),source:e.source===`fallback`?`fallback`:`meiguodizhi`,fetchedAt:Number(e.fetchedAt||0)}}function ot(e){let t=lt(e)?e:{};return{gender:String(t.gender||``).trim(),title:String(t.title||``).trim(),birthday:String(t.birthday||``).trim(),username:String(t.username||``).trim(),password:String(t.password||``).trim(),temporaryMail:String(t.temporaryMail||``).trim(),system:String(t.system||``).trim(),userAgent:String(t.userAgent||``).trim(),website:String(t.website||``).trim(),securityQuestion:String(t.securityQuestion||``).trim(),securityAnswer:String(t.securityAnswer||``).trim()}}function st(e){let t=lt(e)?e:{};return{educationalBackground:String(t.educationalBackground||``).trim(),occupation:String(t.occupation||``).trim(),employmentStatus:String(t.employmentStatus||``).trim(),monthlySalary:String(t.monthlySalary||``).trim(),companySize:String(t.companySize||``).trim(),companyName:String(t.companyName||``).trim()}}function ct(e){let t=lt(e)?e:{},n=String(t.number||``).replace(/\D/g,``),r=String(t.last4||n.slice(-4)||``).replace(/\D/g,``).slice(-4);return{type:String(t.type||``).trim(),number:n,cvv:String(t.cvv||``).trim(),expires:String(t.expires||``).trim(),last4:r,maskedNumber:String(t.maskedNumber||(r?`**** **** **** ${r}`:``)).trim()}}function lt(e){return!!(e&&typeof e==`object`)}function ut(e){let t=String(e||I.countryCode).trim().toUpperCase();return tt.has(t)?t:I.countryCode}var dt=[{code:`US`,label:`美国`,path:`/`},{code:`CA`,label:`加拿大`,path:`/ca-address`},{code:`AU`,label:`澳大利亚`,path:`/au-address`},{code:`JP`,label:`日本`,path:`/jp-address`},{code:`TW`,label:`台湾`,path:`/tw-address`},{code:`KR`,label:`韩国`,path:`/kr-address`},{code:`HK`,label:`香港`,path:`/hk-address`},{code:`GB`,label:`英国`,path:`/uk-address`},{code:`DE`,label:`德国`,path:`/de-address`},{code:`SG`,label:`新加坡`,path:`/sg-address`},{code:`FR`,label:`法国`,path:`/fr-address`},{code:`IT`,label:`意大利`,path:`/it-address`},{code:`ES`,label:`西班牙`,path:`/es-address`},{code:`NL`,label:`荷兰`,path:`/nl-address`},{code:`MY`,label:`马来西亚`,path:`/my-address`},{code:`RU`,label:`俄罗斯`,path:`/ru-address`},{code:`CN`,label:`中国`,path:`/cn-address`},{code:`TH`,label:`泰国`,path:`/th-address`},{code:`PH`,label:`菲律宾`,path:`/ph-address`},{code:`AR`,label:`阿根廷`,path:`/ar-address`},{code:`TR`,label:`土耳其`,path:`/tr-address`},{code:`VN`,label:`越南`,path:`/vn-address`}],ft=`[OPX Pay Autofill]`,pt=[`[data-testid="paypal-accordion-item"]`,`#payment-method-accordion-item-title-paypal`,`button[data-testid="paypal-accordion-item-button"]`,`button[aria-label*="PayPal"]`,`button[aria-label*="paypal" i]`],mt=!1,ht=!1,gt=null,_t=null,vt=``;function yt(){mt||location.hostname!==`pay.openai.com`||(mt=!0,Lt(),It(),Rt(800))}async function bt(){if(!ht){ht=!0;try{let e=await R();if(!e.payOpenAiEnabled){console.info(`${ft} disabled`);return}let t=await St(e);if(!t){console.info(`${ft} no address available`);return}let n=await xt(t);console.info(`${ft} ${n.message}`,{city:t.city,state:t.state,postalCode:t.postalCode,country:t.countryCode,source:t.source})}catch(e){console.warn(`${ft} failed`,e)}finally{ht=!1}}}async function xt(e){if(location.hostname!==`pay.openai.com`)return{ok:!1,filled:0,message:`当前不是 pay.openai.com 页面`};Tt(),await Ut(450);let t=await wt(e);return{ok:t>0,filled:t,message:t>0?`已填写 OpenAI 支付页 ${t} 项`:`未找到可填写的 OpenAI 支付字段`}}async function St(e){let t=`${e.countryCode}|${e.city}`;return _t&&vt===t?_t:(_t=await Ct(e),vt=t,_t)}async function Ct(e){let n=await t.runtime.sendMessage({type:`opx:fetch-random-address`,countryCode:e.countryCode,city:e.city});return!Wt(n)||!n.ok||!n.address?(console.warn(`${ft} address fetch failed`,n),null):(await L({lastAddress:n.address}),n.address)}async function wt(e){let t=0;return t+=z(`#billingName`,e.fullName,!0),t+=Dt(`#billingCountry`,e.countryCode,[e.countryLabel,e.countryCode]),document.querySelector(`#billingCountry`)&&await Ut(550),t+=z(`#billingAddressLine1`,e.line1,!0),t+=z(`#billingAddressLine2`,e.line2,!0),t+=z(`#billingLocality`,e.city,!0),t+=kt(`#billingAdministrativeArea`,e.state,[e.stateFull,e.state]),t+=z(`#billingPostalCode`,e.postalCode,!0),t+=z(`#phoneNumber`,e.phone,!1),t+=Et(`billing address-line1`,e.line1),t+=Et(`billing address-line2`,e.line2),t+=Et(`billing address-level2`,e.city),t+=Et(`billing postal-code`,e.postalCode),t+=At(`billing address-level1`,e.state,[e.stateFull,e.state]),t+=Ot(`billing country`,e.countryCode,[e.countryLabel,e.countryCode]),t+=Nt(),t}function Tt(){if(document.querySelector(`#payment-method-accordion-item-title-paypal`)?.checked)return!0;for(let e of pt){let t=document.querySelector(e);if(!(!t||!B(t)))return Ft(t),!0}let e=Array.from(document.querySelectorAll(`button, label, [role="button"], [role="radio"], [data-testid], div`)).filter(B).find(e=>V(e.innerText||e.textContent).includes(`paypal`));return e?(Ft(e),!0):!1}function z(e,t,n){if(!t)return 0;let r=document.querySelector(e);return!Bt(r)||!B(r)||zt(r)||!n&&r.value.trim()||r.value===t?0:(Mt(r,t),1)}function Et(e,t){let n=`input[autocomplete="${Ht(e)}"], textarea[autocomplete="${Ht(e)}"]`,r=document.querySelector(n);return!Bt(r)||!B(r)||r.value===t||zt(r)?0:(Mt(r,t),1)}function Dt(e,t,n){let r=document.querySelector(e);return!Vt(r)||!B(r)?0:jt(r,t,n)}function Ot(e,t,n){let r=document.querySelector(`select[autocomplete="${Ht(e)}"]`);return!Vt(r)||!B(r)?0:jt(r,t,n)}function kt(e,t,n){let r=document.querySelector(e);return Vt(r)?B(r)?jt(r,t,n):0:Bt(r)?z(e,t,!0):0}function At(e,t,n){let r=document.querySelector(`select[autocomplete="${Ht(e)}"]`);return Vt(r)?B(r)?jt(r,t,n):0:Et(e,t||n[0]||``)}function jt(e,t,n){let r=Array.from(e.options).filter(e=>!e.disabled&&e.value),i=V(t),a=n.map(e=>V(e)).filter(Boolean),o=r.find(e=>V(e.value)===i)||r.find(e=>a.some(t=>V(`${e.text} ${e.value}`).includes(t)));return!o||e.value===o.value?0:(e.value=o.value,Pt(e),1)}function Mt(e,t){let n=e instanceof HTMLTextAreaElement?HTMLTextAreaElement.prototype:HTMLInputElement.prototype,r=Object.getOwnPropertyDescriptor(n,`value`);r?.set?r.set.call(e,t):e.value=t,Pt(e)}function Nt(){let e=0,t=Array.from(document.querySelectorAll(`input[type="checkbox"]`)).filter(B).filter(e=>!e.checked).filter(e=>{let t=V([e.id,e.name,e.getAttribute(`aria-label`),e.closest(`label`)?.textContent,e.parentElement?.textContent].join(` `));return t.includes(`terms`)||t.includes(`consent`)||t.includes(`使用条款`)||t.includes(`隐私政策`)||t.includes(`取消`)||e.id===`termsOfServiceConsentCheckbox`});for(let n of t)n.click(),e+=1;return e}function Pt(e){e.dispatchEvent(new Event(`input`,{bubbles:!0})),e.dispatchEvent(new Event(`change`,{bubbles:!0})),e.dispatchEvent(new Event(`blur`,{bubbles:!0}))}function Ft(e){e.scrollIntoView({block:`center`,inline:`center`});for(let t of[`pointerdown`,`mousedown`,`pointerup`,`mouseup`,`click`]){let n=t.startsWith(`pointer`)?PointerEvent:MouseEvent;e.dispatchEvent(new n(t,{bubbles:!0,cancelable:!0,composed:!0,button:0,buttons:+!!t.endsWith(`down`),pointerId:1,pointerType:`mouse`}))}e.click()}function It(){new MutationObserver(()=>Rt(250)).observe(document.documentElement,{childList:!0,subtree:!0})}function Lt(){t.storage.onChanged.addListener((e,t)=>{t===`local`&&Object.keys(e).some(e=>e.includes(`settings`))&&(_t=null,vt=``,Rt(100))})}function Rt(e){gt&&window.clearTimeout(gt),gt=window.setTimeout(()=>{gt=null,bt()},e)}function B(e){let t=e;if(`disabled`in t&&t.disabled)return!1;let n=window.getComputedStyle(t),r=t.getBoundingClientRect();return n.visibility!==`hidden`&&n.display!==`none`&&r.width>0&&r.height>0}function zt(e){let t=V([e.getAttribute(`aria-label`),e.getAttribute(`placeholder`),e.getAttribute(`autocomplete`),e.getAttribute(`name`),e.getAttribute(`id`)].join(` `));return[`cc-number`,`card number`,`credit card`,`security code`,`cvc`,`cvv`,`expiry`,`expiration`].some(e=>t.includes(e))}function Bt(e){return!!(e&&(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement))}function Vt(e){return!!(e&&e instanceof HTMLSelectElement)}function V(e){return String(e||``).replace(/\s+/g,` `).trim().toLowerCase()}function Ht(e){return typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e.replace(/"/g,`\\"`)}function Ut(e){return new Promise(t=>window.setTimeout(t,e))}function Wt(e){return!!(e&&typeof e==`object`&&typeof e.ok==`boolean`&&typeof e.message==`string`)}var Gt=`[OPX PayPal Autofill]`,Kt=`opx.paypal.autofill.address`,qt=`opx.paypal.autofill.pendingManual`,Jt=`data-opx-paypal-filled`,Yt=`opx-paypal-random-fill`,Xt=3,Zt={AR:`Argentina`,AU:`Australia`,CA:`Canada`,CN:`China`,DE:`Germany`,ES:`Spain`,FR:`France`,GB:`United Kingdom`,HK:`Hong Kong`,IT:`Italy`,JP:`Japan`,KR:`South Korea`,MY:`Malaysia`,NL:`Netherlands`,PH:`Philippines`,RU:`Russia`,SG:`Singapore`,TH:`Thailand`,TR:`Turkey`,TW:`Taiwan`,US:`United States`,VN:`Vietnam`},Qt=!1,$t=!1,en=null,H=null,tn=null,U=``,nn=0,W=``;function rn(){Qt||!sr()||(Qt=!0,Bn(),Jn(),zn(),er()?Zn(900):Yn(800))}async function an(e,t=!1,n=!0){if(!sr())return{ok:!1,filled:0,message:`当前不是 PayPal 注册支付页`,countryChanged:!1};let r=await R(),i=e||await sn(r);if(!i)return{ok:!1,filled:0,message:`没有可用地址资料`,countryChanged:!1};nr(i),t&&!n&&Xn(),t&&(On(),jn());let a=await cn(i,n);return kn(i,a.countryChanged,n),t&&!n&&(W=Mn(i),a.countryChanged?($n(),Zn(1600)):tr()),{ok:a.filled>0||a.countryChanged,filled:a.filled,countryChanged:a.countryChanged,message:a.countryChanged?`已选择 PayPal 国家：${i.countryCode}，等待页面重新加载`:a.filled>0?`已填写 PayPal ${a.filled} 项`:`未找到可填写的 PayPal 字段`}}async function on(){if(!$t&&!(W&&U===W)){$t=!0;try{if(!(await R()).payPalSignupEnabled){console.info(`${Gt} disabled`);return}let e=await an();console.info(`${Gt} ${e.message}`),(!e.ok||An())&&(tn?.disconnect(),tn=null)}catch(e){console.warn(`${Gt} failed`,e)}finally{$t=!1}}}async function sn(e){if(H&&rr(H,e))return H;let n=Qn();if(n&&rr(n,e))return H=n,H;let r=await t.runtime.sendMessage({type:`opx:fetch-random-address`,countryCode:e.countryCode,city:e.city});return!pr(r)||!r.ok||!r.address?(console.warn(`${Gt} address fetch failed`,r),null):(H=r.address,nr(r.address),await L({lastAddress:r.address}),H)}async function cn(e,t){let n=0;if(ln(e))return t&&Yn(1500),{filled:1,countryChanged:!0};let r=await un(e),i=ar(e.fullName),a=ir(e.creditCard.expires);return n+=G(X.email,r,!0),n+=fn(r),pn(r),n+=G(X.phone,e.phone,!0),n+=G(X.cardNumber,e.creditCard.number,!0),n+=G(X.expiry,a.short,!0),n+=G(X.csc,e.creditCard.cvv,!0),n+=G(X.fullName,e.fullName,!0),n+=G(X.firstName,i.first,!0),n+=G(X.lastName,i.last,!0),n+=G(X.address1,e.line1,!0),n+=G(X.address2,e.line2,!0),n+=G(X.city,e.city,!0),n+=mn(X.state,e.state,[e.stateFull,e.state]),n+=G(X.postalCode,e.postalCode,!0),n+=hn(e,i),n+=mn(X.expiryMonth,a.month,[a.month]),n+=mn(X.expiryYear,a.year4,[a.year4,a.year2]),{filled:n,countryChanged:!1}}function ln(e){let t=bn(X.country);return!t||!q(t)?!1:In(t,e.countryCode,[e.countryCode,Zt[e.countryCode]||``,e.countryLabel])}async function un(e){let t=await Fe(),n=pe(t.rawInput);return n.ok&&dr(n.email)?n.email:dr(t.email)?t.email:dr(e.identity.temporaryMail)?e.identity.temporaryMail:or(e)}function G(e,t,n){if(!t)return 0;let r=yn(e);return!r||!q(r)?0:dn(r,t,n)}function dn(e,t,n){if(!t||!q(e))return 0;let r=e.value.trim();return e.getAttribute(Jt)===`1`||Nn(r,t)?(e.setAttribute(Jt,`1`),0):!n&&r?0:(Ln(e,t),e.setAttribute(Jt,`1`),1)}function fn(e){if(!e)return 0;let t=document.querySelector(`input#password`)||yn(X.password);return!t||!q(t)||Nn(t.value.trim(),e)?0:(Ln(t,e),1)}function pn(e){let t=Gn();if(!t)return;fn(e);let n=`opx-paypal-password-note`,r=`当前密码和邮箱一致（${e}）`,i=document.getElementById(n);i||(i=document.createElement(`div`),i.id=n,Object.assign(i.style,{color:`#93e4bd`,fontSize:`12px`,lineHeight:`18px`,margin:`4px 0 10px`,padding:`6px 10px`,border:`1px solid rgba(47, 209, 124, 0.36)`,borderRadius:`6px`,background:`rgba(15, 23, 42, 0.82)`,display:`block`}));let a=t.parentElement;a&&(a.insertBefore(i,t),i.textContent=r)}function mn(e,t,n){if(!t&&!n.some(Boolean))return 0;let r=bn(e);return r&&q(r)?+!!In(r,t,n):G(e,t||n.find(Boolean)||``,!0)}function hn(e,t){let n=_n();if(!n)return 0;let r=Array.from(n.querySelectorAll(`input, textarea, select`)).filter(e=>(J(e)||ur(e))&&q(e)&&!cr(e)&&!lr(e)),i=0;return i+=K(n,[`first name`,`given name`],t.first,r[0]),i+=K(n,[`last name`,`family name`,`surname`],t.last,r[1]),i+=K(n,[`street address`,`address line 1`,`address 1`],e.line1,r[2]),i+=K(n,[`apt`,`ste`,`bldg`,`address line 2`,`address 2`],e.line2,r[3]),i+=K(n,[`city`,`locality`],e.city,r[4]),i+=gn(n,[`state`,`province`,`region`],e.state,[e.stateFull,e.state],r[5]),i+=K(n,[`zip`,`postal code`,`postcode`],e.postalCode,r[6]),i}function K(e,t,n,r){let i=r&&J(r)?r:null,a=vn(e,t,J)||i;return a?dn(a,n,!0):0}function gn(e,t,n,r,i){let a=i&&ur(i)?i:null,o=vn(e,t,ur)||a;if(o)return+!!In(o,n,r);let s=i&&J(i)?i:null,c=vn(e,t,J)||s;return c?dn(c,n||r.find(Boolean)||``,!0):0}function _n(){return Array.from(document.querySelectorAll(`fieldset, [role="group"], section, form > div`)).find(e=>{let t=Y(e.textContent||``);return t.includes(`billing address`)&&(t.includes(`street address`)||t.includes(`address`))&&(t.includes(`first name`)||t.includes(`last name`))})||null}function vn(e,t,n){let r=t.map(Y).filter(Boolean);return Array.from(e.querySelectorAll(`input, textarea, select`)).filter(n).map(e=>({control:e,score:wn(e,r)})).filter(e=>e.score>0&&q(e.control)&&!cr(e.control)).sort((e,t)=>t.score-e.score)[0]?.control||null}function yn(e){for(let t of e){let e=xn(t);if(J(e))return e}return Cn(e,J)}function bn(e){for(let t of e){let e=xn(t);if(ur(e))return e}return Cn(e,ur)}function xn(e){if(!Sn(e))return null;try{return document.querySelector(e)}catch{return null}}function Sn(e){let t=e.trim();return/^[.#[]/.test(t)||/^(input|select|textarea|button|label|form|fieldset|section|div)([#.[\s:]|$)/i.test(t)}function Cn(e,t){let n=e.filter(e=>!e.includes(`[`)&&!e.includes(`#`)&&!e.includes(`.`)).map(Y).filter(Boolean);return n.length&&Array.from(document.querySelectorAll(`input, textarea, select`)).filter(t).map(e=>({control:e,score:wn(e,n)})).filter(e=>e.score>0&&q(e.control)&&!cr(e.control)).sort((e,t)=>t.score-e.score)[0]?.control||null}function wn(e,t){if(!q(e)||cr(e))return 0;let n=Y([e.id,e.name,`placeholder`in e?e.placeholder:``,`autocomplete`in e?e.autocomplete:``,e.getAttribute(`aria-label`),Tn(e),En(e)].join(` `)),r=Y([e.previousElementSibling?.textContent,e.nextElementSibling?.textContent,Dn(e)].join(` `)),i=Y(e.parentElement?.textContent||``);return t.some(e=>n.includes(e))?30:t.some(e=>r.includes(e))?20:i.length<=120&&t.some(e=>i.includes(e))?5:0}function Tn(e){let t=[],n=e.getAttribute(`aria-labelledby`);if(n)for(let e of n.split(/\s+/)){let n=document.getElementById(e);n?.textContent&&t.push(n.textContent)}let r=e.id;if(r)for(let e of Array.from(document.querySelectorAll(`label[for="${Fn(r)}"]`)))t.push(e.textContent||``);return t.join(` `)}function En(e){return e.closest(`label`)?.textContent||``}function Dn(e){let t=e.closest(`div, label, section`)?.textContent||``;return t.length<=160?t:``}function On(){for(let e of Array.from(document.querySelectorAll(`[${Jt}]`)))e.removeAttribute(Jt)}function kn(e,t,n){let r=Mn(e);U!==r&&(U=r,nn=0),nn+=1,n&&!t&&nn<Xt&&Yn(1200)}function An(){return!!(U&&nn>=Xt)}function jn(){U=``,nn=0,W=``}function Mn(e){return[location.origin,location.pathname,new URLSearchParams(location.search).get(`token`)||``,e.id].join(`|`)}function Nn(e,t){return!e||!t?!1:e===t?!0:Pn(e)===Pn(t)}function Pn(e){return e.toLowerCase().replace(/[^a-z0-9]/g,``)}function Fn(e){return typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e.replace(/"/g,`\\"`)}function In(e,t,n){let r=Y(t),i=n.map(Y).filter(Boolean),a=Array.from(e.options).filter(e=>!e.disabled&&e.value),o=a.find(e=>Y(e.value)===r)||a.find(e=>i.some(t=>Y(`${e.text} ${e.value}`).includes(t)));return!o||e.value===o.value?!1:(e.value=o.value,Rn(e),!0)}function Ln(e,t){e.focus();let n=e instanceof HTMLTextAreaElement?HTMLTextAreaElement.prototype:HTMLInputElement.prototype,r=Object.getOwnPropertyDescriptor(n,`value`);r?.set?r.set.call(e,t):e.value=t,Rn(e)}function Rn(e){e.dispatchEvent(new Event(`input`,{bubbles:!0})),e.dispatchEvent(new Event(`change`,{bubbles:!0})),e.dispatchEvent(new Event(`blur`,{bubbles:!0}))}function zn(){tn?.disconnect(),tn=new MutationObserver(()=>{Bn(),!(W&&U===W)&&(An()||Yn(350))}),tn.observe(document.documentElement,{childList:!0,subtree:!0})}function Bn(){if(!sr()||document.getElementById(Yt))return;let e=Wn(),t=Un(),n=Vn();if(e?.parentElement){n.style.marginTop=`8px`,n.style.marginBottom=`12px`,e.parentElement.insertBefore(n,e.nextSibling);return}t?.parentElement&&t.parentElement.insertBefore(n,t)}function Vn(){let e=document.createElement(`div`);e.id=Yt,e.setAttribute(`data-opx-paypal-random-fill`,`1`),Object.assign(e.style,{display:`flex`,alignItems:`center`,justifyContent:`flex-end`,gap:`8px`,margin:`10px 0 14px`,minHeight:`32px`});let t=document.createElement(`button`);t.type=`button`,t.textContent=`随机输入`,Object.assign(t.style,{appearance:`none`,border:`0`,borderRadius:`6px`,background:`#10b981`,color:`#ffffff`,cursor:`pointer`,fontSize:`13px`,fontWeight:`700`,lineHeight:`1`,minHeight:`32px`,padding:`0 14px`,whiteSpace:`nowrap`});let n=document.createElement(`span`);return Object.assign(n.style,{color:`#64748b`,fontSize:`12px`,lineHeight:`16px`,minWidth:`0`}),t.addEventListener(`click`,()=>{Hn(t,n)}),e.append(t,n),e}async function Hn(e,n){e.disabled=!0,e.textContent=`获取中...`,Object.assign(e.style,{cursor:`wait`,opacity:`0.72`}),n.textContent=`正在获取新资料`;try{let e=await R(),r=await t.runtime.sendMessage({type:`opx:fetch-random-address`,countryCode:e.countryCode,city:e.city});if(!pr(r)||!r.ok||!r.address){n.textContent=r?.message||`获取失败`;return}H=r.address,nr(r.address),await L({lastAddress:r.address});let i=await an(r.address,!0,!1);n.textContent=i.countryChanged?`已切换国家，刷新后继续填写`:i.ok?`已随机输入 ${i.filled} 项`:i.message}catch(e){n.textContent=`失败：${fr(e)}`}finally{e.disabled=!1,e.textContent=`随机输入`,Object.assign(e.style,{cursor:`pointer`,opacity:`1`})}}function Un(){let e=yn(X.cardNumber);return e?.closest(`div, label, section`)||e}function Wn(){let e=document.querySelector(`div.css-ltr-cssveg > form > section.css-ltr-4jicje:nth-of-type(1) > p.css-ltr-6pd54h.css-ltr-16jt5za-text_body`);return e&&q(e)?e:Array.from(document.querySelectorAll(`form section p, form p`)).filter(e=>q(e)).map(e=>({element:e,score:qn(e)})).filter(e=>e.score>0).sort((e,t)=>t.score-e.score)[0]?.element||null}function Gn(){let e=document.querySelector(`section.css-ltr-h5yxuz:nth-of-type(3) > div.css-ltr-h5yxuz:nth-of-type(2) > div.css-ltr-1lvkl1r:nth-of-type(2) > p.css-ltr-abbmt5:nth-of-type(1)`);if(e&&q(e))return e;let t=document.querySelector(`input#password`)||yn(X.password),n=t?.closest(`section`)||document;return Array.from(n.querySelectorAll(`p`)).filter(e=>q(e)).map(e=>({element:e,score:Kn(e,t)})).filter(e=>e.score>0).sort((e,t)=>t.score-e.score)[0]?.element||null}function Kn(e,t){let n=Y(e.textContent||``);return!n||![`by creating an account`,`confirm you’re at least 18 years old`,`confirm you're at least 18 years old`,`agree to the`,`privacy statement`].some(e=>n.includes(Y(e)))?0:t&&t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING?20:10}function qn(e){let t=Y(e.textContent||``);return t&&[`we don’t share your financial details with the merchant`,`we don't share your financial details with the merchant`,`financial details`,`merchant`].some(e=>t.includes(Y(e)))?10:0}function Jn(){t.storage.onChanged.addListener((e,t)=>{t===`local`&&Object.keys(e).some(e=>e.includes(`settings`))&&(H=null,jn(),Yn(100))})}function Yn(e){Xn(),en=window.setTimeout(()=>{en=null,on()},e)}function Xn(){en&&=(window.clearTimeout(en),null)}function Zn(e){window.setTimeout(()=>{let e=Qn();if(!e){tr();return}an(e,!0,!1)},e)}function Qn(){try{let e=sessionStorage.getItem(Kt);return e?JSON.parse(e):null}catch{return null}}function $n(){try{sessionStorage.setItem(qt,`1`)}catch{}}function er(){try{let e=sessionStorage.getItem(qt)===`1`;return e&&sessionStorage.removeItem(qt),e}catch{return!1}}function tr(){try{sessionStorage.removeItem(qt)}catch{}}function nr(e){try{sessionStorage.setItem(Kt,JSON.stringify(e))}catch{}}function rr(e,t){let n=t.countryCode===`RANDOM`||e.countryCode===t.countryCode,r=!t.city.trim()||Y(e.city)===Y(t.city);return n&&r}function ir(e){let t=e.match(/\d+/g)||[],n=(t[0]||``).padStart(2,`0`).slice(0,2),r=t[1]||``,i=r.length===2?`20${r}`:r.slice(0,4),a=i.slice(-2);return{month:n,year2:a,year4:i,short:n&&a?`${n}/${a}`:e}}function ar(e){let t=e.replace(/[^a-zA-Z]/g,``);if(t&&!e.includes(` `))return{first:t.slice(0,Math.max(1,Math.floor(t.length/2))),last:t.slice(Math.max(1,Math.floor(t.length/2)))||t};let n=e.split(/\s+/).map(e=>e.trim()).filter(Boolean);return{first:n[0]||t||`Alex`,last:n.slice(1).join(` `)||`Walker`}}function or(e){return`${(e.identity.username||e.fullName||`outlookuser`).toLowerCase().replace(/[^a-z0-9]/g,``).slice(0,18)||`outlookuser`}${(e.id+e.fetchedAt).replace(/\D/g,``).slice(-6)||String(Date.now()).slice(-6)}@outlook.com`}function sr(){return location.hostname.endsWith(`paypal.com`)&&location.pathname.startsWith(`/checkoutweb/signup`)}function cr(e){return e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement?!1:[`hidden`,`radio`,`checkbox`,`submit`,`button`].includes((e.type||``).toLowerCase())}function lr(e){let t=Y([e.id,e.name,`placeholder`in e?e.placeholder:``,`autocomplete`in e?e.autocomplete:``,e.getAttribute(`aria-label`),Tn(e)].join(` `));return[`email`,`phone`,`mobile`,`card`,`credit`,`expiry`,`expiration`,`cvv`,`csc`,`security code`].some(e=>t.includes(e))}function q(e){let t=e;if(`disabled`in t&&t.disabled)return!1;let n=window.getComputedStyle(t),r=t.getBoundingClientRect();return n.visibility!==`hidden`&&n.display!==`none`&&r.width>0&&r.height>0}function J(e){return!!(e&&(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement))}function ur(e){return!!(e&&e instanceof HTMLSelectElement)}function dr(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function Y(e){return String(e||``).replace(/\s+/g,` `).trim().toLowerCase()}function fr(e){return e instanceof Error?e.message:String(e)}function pr(e){return!!(e&&typeof e==`object`&&typeof e.ok==`boolean`&&typeof e.message==`string`)}var X={country:[`select#country`,`select[name="country"]`,`select[name="country.x"]`,`country`,`country or region`],email:[`input#email`,`input[name="email"]`,`input[type="email"]`,`input[autocomplete="email"]`,`email`],password:[`input#password`,`input[name="password"]`,`input[type="password"]`,`input[autocomplete="new-password"]`,`create password`,`password`],phone:[`input#phone`,`input#phoneNumber`,`input[name="phone"]`,`input[name="phoneNumber"]`,`input[type="tel"]`,`phone number`,`mobile`],cardNumber:[`input#cardNumber`,`input#card_number`,`input[name="cardNumber"]`,`input[name="card_number"]`,`input[autocomplete="cc-number"]`,`card number`,`credit card number`],expiry:[`input#expiryDate`,`input#expirationDate`,`input#cardExpiry`,`input[name="expiryDate"]`,`input[name="expirationDate"]`,`input[name="cardExpiry"]`,`input[autocomplete="cc-exp"]`,`expiration`,`expiry`,`有效期限`],expiryMonth:[`select#expMonth`,`select#expiryMonth`,`select[name="expMonth"]`,`select[name="expiryMonth"]`,`expiration month`,`expiry month`],expiryYear:[`select#expYear`,`select#expiryYear`,`select[name="expYear"]`,`select[name="expiryYear"]`,`expiration year`,`expiry year`],csc:[`input#cvv`,`input#csc`,`input#securityCode`,`input[name="cvv"]`,`input[name="csc"]`,`input[name="securityCode"]`,`input[autocomplete="cc-csc"]`,`csc`,`cvv`,`security code`],fullName:[`input#cardholderName`,`input#nameOnCard`,`input#fullName`,`input[name="cardholderName"]`,`input[name="nameOnCard"]`,`input[name="fullName"]`,`input[autocomplete="cc-name"]`,`name on card`,`full name`],firstName:[`input#firstName`,`input#billingFirstName`,`input[name="firstName"]`,`input[name="billingFirstName"]`,`input[autocomplete="given-name"]`,`first name`],lastName:[`input#lastName`,`input#billingLastName`,`input[name="lastName"]`,`input[name="billingLastName"]`,`input[autocomplete="family-name"]`,`last name`],address1:[`input#address1`,`input#addressLine1`,`input#billingAddressLine1`,`input#billingLine1`,`input[name="address1"]`,`input[name="addressLine1"]`,`input[name="billingLine1"]`,`input[autocomplete="address-line1"]`,`address line 1`,`street address`],address2:[`input#address2`,`input#addressLine2`,`input#billingAddressLine2`,`input#billingLine2`,`input[name="address2"]`,`input[name="addressLine2"]`,`input[name="billingLine2"]`,`input[autocomplete="address-line2"]`,`address line 2`],city:[`input#city`,`input#billingLocality`,`input#billingCity`,`input[name="city"]`,`input[name="billingCity"]`,`input[autocomplete="address-level2"]`,`city`],state:[`select#state`,`input#state`,`select#billingAdministrativeArea`,`input#billingAdministrativeArea`,`select#billingState`,`input#billingState`,`select[name="state"]`,`input[name="state"]`,`select[name="billingState"]`,`input[name="billingState"]`,`select[autocomplete="address-level1"]`,`input[autocomplete="address-level1"]`,`state`,`province`],postalCode:[`input#zip`,`input#postalCode`,`input#billingPostalCode`,`input#billingZip`,`input[name="zip"]`,`input[name="postalCode"]`,`input[name="billingPostalCode"]`,`input[name="billingZip"]`,`input[autocomplete="postal-code"]`,`zip code`,`postal code`]};function mr(e){let n=document.createElement(`div`);n.className=`opx-summary`;let r=gr(),i=document.createElement(`input`);i.className=`opx-input`,i.type=`text`,i.placeholder=`城市留空即随机，例如 Tokyo / Berlin / New York`,i.autocomplete=`off`;let a=document.createElement(`div`);a.className=`opx-grid`,a.append(_r(`地址国家`,r),_r(`指定城市`,i));let o=document.createElement(`div`);o.className=`opx-button-row opx-address-actions`;let s=vr(`获取地址`);o.append(s);let c=document.createElement(`div`);c.className=`opx-copy-list`;let l=document.createElement(`div`);l.className=`opx-status`,e.append(n,a,o,c,l),r.addEventListener(`change`,()=>void d(`国家已保存`)),i.addEventListener(`change`,()=>void d(`城市已保存`)),s.addEventListener(`click`,()=>void f());let u=async()=>{m(await R())};return u(),{update:u};async function d(e){let t=await R(),n=r.value,a=i.value.trim();m(await L({countryCode:n,city:a,lastAddress:t.countryCode!==n||t.city.trim()!==a?null:t.lastAddress})),br(l,e,`ok`)}async function f(){s.disabled=!0,br(l,`正在获取随机地址...`,`pending`);try{let e=await t.runtime.sendMessage({type:`opx:fetch-random-address`,countryCode:r.value,city:i.value.trim()});if(!Sr(e)||!e.ok||!e.address){br(l,e?.message||`获取地址失败`,`error`);return}m(await L({countryCode:r.value,city:i.value.trim(),lastAddress:e.address}));let n=await p(e.address);br(l,n?`${e.message}；${n}`:e.message,`ok`)}catch(e){br(l,`获取地址失败：${xr(e)}`,`error`)}finally{s.disabled=!1}}async function p(e){return location.hostname===`pay.openai.com`?(await xt(e)).message:location.hostname.endsWith(`paypal.com`)?(await an(e,!0,!1)).message:``}function m(e){r.value=e.countryCode,i.value=e.city,h(e),g(e.lastAddress)}function h(e){n.textContent=`${r.selectedOptions[0]?.textContent||e.countryCode} · ${e.city||`随机城市`}`}function g(e){if(c.textContent=``,!e){c.append(yr(`暂无地址，点击“获取地址”。`));return}for(let t of hr(e))c.append(v(t))}function _(e,t){let n=document.createElement(`button`);n.className=`opx-copy-row`,n.type=`button`,n.title=`点击复制`;let r=document.createElement(`span`);r.className=`opx-copy-label`,r.textContent=`${e}：`;let i=document.createElement(`strong`);i.textContent=t;let a=document.createElement(`span`);a.className=`opx-copy-feedback`,a.textContent=`已复制`,a.hidden=!0;let o=null;return n.append(r,i,a),n.addEventListener(`click`,async()=>{await navigator.clipboard.writeText(t),o&&window.clearTimeout(o),n.classList.add(`is-copied`),a.hidden=!1,o=window.setTimeout(()=>{n.classList.remove(`is-copied`),a.hidden=!0,o=null},1400)}),n}function v(e){let t=document.createElement(`div`);t.className=`opx-copy-section-body`;for(let n of e.items)n.value&&t.append(_(n.label,n.value));if(e.collapsed){let n=document.createElement(`details`);n.className=`opx-accordion-section`;let r=document.createElement(`summary`);return r.textContent=e.title,n.append(r,t),n}let n=document.createElement(`section`);n.className=`opx-copy-section`;let r=document.createElement(`div`);return r.className=`opx-copy-section-title`,r.textContent=e.title,n.append(r,t),n}}function hr(e){return[{title:`地址资料`,items:[{label:`国家`,value:`${e.countryLabel||e.countryCode} / ${e.countryCode}`},{label:`姓名`,value:e.fullName},{label:`电话`,value:e.phone},{label:`地址1`,value:e.line1},{label:`地址2`,value:e.line2},{label:`城市`,value:e.city},{label:`州/省`,value:e.stateFull?`${e.stateFull} / ${e.state}`:e.state},{label:`邮编`,value:e.postalCode}]},{title:`信用卡资料`,items:[{label:`卡类型`,value:e.creditCard.type},{label:`卡号`,value:e.creditCard.number},{label:`CVV`,value:e.creditCard.cvv},{label:`有效期`,value:e.creditCard.expires},{label:`后四位`,value:e.creditCard.last4}]},{title:`身份资料`,collapsed:!0,items:[{label:`性别`,value:e.identity.gender},{label:`称谓`,value:e.identity.title},{label:`生日`,value:e.identity.birthday},{label:`用户名`,value:e.identity.username},{label:`密码`,value:e.identity.password},{label:`临时邮箱`,value:e.identity.temporaryMail},{label:`系统`,value:e.identity.system},{label:`网站`,value:e.identity.website},{label:`安全问题`,value:e.identity.securityQuestion},{label:`安全答案`,value:e.identity.securityAnswer}]},{title:`就业资料`,collapsed:!0,items:[{label:`公司`,value:e.employment.companyName},{label:`职业`,value:e.employment.occupation},{label:`就业状态`,value:e.employment.employmentStatus},{label:`月薪`,value:e.employment.monthlySalary},{label:`公司规模`,value:e.employment.companySize},{label:`教育背景`,value:e.employment.educationalBackground}]}]}function gr(){let e=document.createElement(`select`);e.className=`opx-select`;let t=document.createElement(`option`);t.value=`RANDOM`,t.textContent=`随机国家`,e.append(t);for(let t of dt){let n=document.createElement(`option`);n.value=t.code,n.textContent=`${t.label} / ${t.code}`,e.append(n)}return e}function _r(e,t){let n=document.createElement(`label`);n.className=`opx-field`;let r=document.createElement(`span`);return r.className=`opx-label`,r.textContent=e,n.append(r,t),n}function vr(e,t=`opx-button`){let n=document.createElement(`button`);return n.className=t,n.type=`button`,n.textContent=e,n}function yr(e){let t=document.createElement(`div`);return t.className=`opx-empty-inline`,t.textContent=e,t}function br(e,t,n){e.textContent=t,e.dataset.type=n}function xr(e){return e instanceof Error?e.message:String(e)}function Sr(e){return!!(e&&typeof e==`object`&&typeof e.ok==`boolean`&&typeof e.message==`string`)}var Cr=[[`ID`,`印尼 / IDR`],[`DE`,`德国 / EUR`],[`JP`,`日本 / JPY`],[`US`,`美国 / USD`]];function wr(e){let n=document.createElement(`div`);n.className=`opx-summary`;let r=document.createElement(`div`);r.className=`opx-session-card`;let i=Tr(`邮箱`,`未读取`),a=Tr(`套餐`,`未读取`),o=Tr(`Token`,`未读取`);r.append(i.row,a.row,o.row);let s=Er(`读取 ChatGPT session`,`opx-button opx-button-secondary`),c=Or([[`chatgptplusplan`,`ChatGPT Plus`],[`chatgptteamplan`,`ChatGPT Team`]]),l=Or([[`custom`,`短链接 / custom`],[`hosted`,`长链接 / hosted`]]),u=Or(Cr),d=Dr(`Workspace 名称`,`text`),f=Dr(`席位数量`,`number`);f.min=`2`,f.step=`1`;let p=document.createElement(`div`);p.className=`opx-grid`;let m=Z(`套餐类型`,c),h=Z(`链接形式`,l),g=Z(`计费区域`,u);p.append(m,h,g);let _=document.createElement(`div`);_.className=`opx-team-options`;let v=document.createElement(`div`);v.className=`opx-grid`,v.append(Z(`Workspace`,d),Z(`席位`,f)),_.append(v);let y=document.createElement(`textarea`);y.className=`opx-textarea opx-token-textarea`,y.placeholder=`自动读取或手动粘贴 ChatGPT session JSON / Access Token`,y.autocomplete=`off`,y.spellcheck=!1;let b=document.createElement(`div`);b.className=`opx-hint`,b.textContent=`切到提链接 tab 会读取 /api/auth/session；token 只在当前页面内使用。`;let x=Er(`生成订阅链接`),S=document.createElement(`textarea`);S.className=`opx-textarea opx-output`,S.placeholder=`生成后的订阅链接`,S.readOnly=!0,S.spellcheck=!1;let C=document.createElement(`div`);C.className=`opx-button-row`;let w=Er(`复制链接`,`opx-button opx-button-secondary`),T=Er(`打开链接`,`opx-button opx-button-secondary`),ee=Er(`清空`,`opx-button opx-button-secondary`);C.append(w,T,ee);let E=document.createElement(`div`);E.className=`opx-status`,E.textContent=`等待读取 ChatGPT session。`;let D=``,O=``,te=!1,ne=!1,re=async()=>{se((await Le()).checkoutOptions)},ie=async()=>{await oe()},ae=async()=>{try{let e=ce();await Re({checkoutOptions:e}),le(e),Q(E,`本地参数已更新`,`ok`)}catch(e){Q(E,kr(e),`error`)}};for(let e of[c,l,u,d,f])e.addEventListener(`change`,()=>void ae()),e.addEventListener(`input`,()=>void ae());return s.addEventListener(`click`,()=>void oe()),y.addEventListener(`paste`,()=>window.setTimeout(()=>ue(!1),0)),y.addEventListener(`input`,()=>{O=``,(y.value.includes(`accessToken`)||y.value.length>900)&&ue(!1)}),x.addEventListener(`click`,async()=>{Q(E,`正在生成订阅链接...`,`pending`);let e=y.value.trim()?ue(!0):O;if(!e){Q(E,`没有 accessToken，请先读取 session 或手动粘贴。`,`error`);return}let n;try{n=ce(),await Re({checkoutOptions:n})}catch(e){Q(E,kr(e),`error`);return}let r;try{r=await t.runtime.sendMessage({type:`opx:create-checkout-link`,raw:e,options:n})}catch(e){Q(E,`生成失败：${String(e)}`,`error`);return}let i=r?.link||r?.url||``;if(!Ar(r)||!r.ok||!i){Q(E,r?.message||`生成失败：返回结果无效`,`error`),de(``);return}de(i),Q(E,r.message,`ok`)}),w.addEventListener(`click`,async()=>{D&&(await navigator.clipboard.writeText(D),Q(E,`已复制链接`,`ok`))}),T.addEventListener(`click`,()=>{D&&window.open(D,`_blank`,`noopener,noreferrer`)}),ee.addEventListener(`click`,()=>{y.value=``,O=``,b.textContent=`切到提链接 tab 会读取 /api/auth/session；token 只在当前页面内使用。`,b.classList.remove(`is-ok`),de(``),k(``,``,``),Q(E,`已清空`,`ok`),y.focus()}),e.append(n,r,s,p,_,y,b,x,Z(`订阅链接`,S),C,E),re(),de(``),{update:re,onShow:ie};async function oe(){if(!te){te=!0,s.disabled=!0,Q(E,`正在读取 https://chatgpt.com/api/auth/session ...`,`pending`);try{let e=await t.runtime.sendMessage({type:`opx:fetch-chatgpt-session`});if(ne=!0,!jr(e)){Q(E,`session 返回结果无效`,`error`);return}let n=e.session;k(n?.email||``,n?.planType||``,n?.accessToken||``),n?.accessToken&&(O=n.accessToken,y.value=n.accessToken,b.textContent=`已从 ChatGPT session 读取 accessToken。`,b.classList.add(`is-ok`)),Q(E,e.message,e.ok?`ok`:`error`)}catch(e){Q(E,`读取 session 失败：${String(e)}`,`error`)}finally{s.disabled=!1,te=!1}}}function se(e){let t=ye(e);c.value=t.planName,l.value=t.uiMode,u.value=t.region,d.value=t.workspaceName,f.value=String(t.seatQuantity),le(t)}function ce(){return ye({planName:c.value,uiMode:l.value,region:u.value,workspaceName:d.value,seatQuantity:Number(f.value||5)})}function le(e){let t=e.planName===`chatgptteamplan`?`Team · ${e.seatQuantity} seats`:`Plus`,r=e.uiMode===`hosted`?`长链接 hosted`:`短链接 custom`,i=ne?`session 已请求`:`session 待读取`;n.textContent=`${t} · ${r} · ${e.region} · ${i}`,_.hidden=e.planName!==`chatgptteamplan`,g.hidden=e.planName===`chatgptteamplan`}function ue(e){try{let e=ve(y.value);return y.value.trim()!==e&&(y.value=e),b.textContent=`已本地提取 accessToken。`,b.classList.add(`is-ok`),e}catch(t){return b.classList.remove(`is-ok`),e&&Q(E,kr(t),`error`),``}}function de(e){D=e,S.value=e,w.disabled=!e,T.disabled=!e}function k(e,t,n){i.value.textContent=e||`未读取`,a.value.textContent=t||`未读取`,o.value.textContent=n?`已获取`:`未获取`}}function Tr(e,t){let n=document.createElement(`div`);n.className=`opx-session-row`;let r=document.createElement(`span`);r.textContent=e;let i=document.createElement(`strong`);return i.textContent=t,n.append(r,i),{row:n,value:i}}function Er(e,t=`opx-button`){let n=document.createElement(`button`);return n.className=t,n.type=`button`,n.textContent=e,n}function Dr(e,t){let n=document.createElement(`input`);return n.className=`opx-input`,n.type=t,n.placeholder=e,n}function Or(e){let t=document.createElement(`select`);t.className=`opx-select`;for(let[n,r]of e){let e=document.createElement(`option`);e.value=n,e.textContent=r,t.append(e)}return t}function Z(e,t){let n=document.createElement(`label`);n.className=`opx-field`;let r=document.createElement(`span`);return r.className=`opx-label`,r.textContent=e,n.append(r,t),n}function Q(e,t,n){e.textContent=t,e.dataset.type=n}function kr(e){return e instanceof Error?e.message:String(e)}function Ar(e){return!!(e&&typeof e==`object`&&typeof e.ok==`boolean`&&typeof e.message==`string`)}function jr(e){return!!(e&&typeof e==`object`&&typeof e.ok==`boolean`&&typeof e.message==`string`)}function Mr(e,t){let n=document.createElement(`textarea`);n.className=`opx-textarea`,n.placeholder=`邮箱或 Outlook 行`,n.autocomplete=`off`,n.spellcheck=!1;let r=document.createElement(`div`);r.className=`opx-hint`,r.textContent=`支持 user@example.com 或 email----password----client_id----refresh_token`;let i=Nr(`填入邮箱并继续`),a=document.createElement(`input`);a.className=`opx-input`,a.type=`text`,a.inputMode=`numeric`,a.placeholder=`验证码`,a.autocomplete=`one-time-code`;let o=Nr(`填入验证码并继续`),s=Nr(`自动接收并填入验证码`,`opx-button opx-button-secondary`),c=Nr(`填写资料并创建`),l=document.createElement(`div`);l.className=`opx-status`,l.textContent=`等待操作`;let u=async()=>{let e=t.getPageState(),a=await t.loadState();n.value!==a.rawInput&&(n.value=a.rawInput),i.disabled=!e.canFillEmail,o.disabled=!e.canFillOtp,s.disabled=!e.canFillOtp||!a.autoOtp,c.disabled=!e.canFillProfile,r.textContent=a.autoOtp?`Outlook 行模式：验证码页会通过本地 API 自动收码`:`单邮箱模式：验证码需要手动输入`};return n.addEventListener(`input`,async()=>{r.textContent=(await t.saveInput(n.value)).autoOtp?`Outlook 行模式：验证码页会通过本地 API 自动收码`:`单邮箱模式：验证码需要手动输入`}),i.addEventListener(`click`,async()=>{Fr(l,`正在提交邮箱...`,`pending`),await t.saveInput(n.value),Pr(l,await t.fillEmailFromInput()),await u()}),o.addEventListener(`click`,async()=>{Fr(l,`正在提交验证码...`,`pending`),Pr(l,await t.fillOtp(a.value)),await u()}),s.addEventListener(`click`,async()=>{Fr(l,`等待 Outlook 验证码...`,`pending`),Pr(l,await t.waitForOutlookOtp()),await u()}),c.addEventListener(`click`,async()=>{Fr(l,`正在填写资料...`,`pending`),Pr(l,await t.fillProfileAndCreate()),await u()}),e.append(n,r,i,a,o,s,c,l),u(),{update:u}}function Nr(e,t=`opx-button`){let n=document.createElement(`button`);return n.className=t,n.type=`button`,n.textContent=e,n}function Pr(e,t){Fr(e,t.message,t.ok?`ok`:`error`)}function Fr(e,t,n){e.textContent=t,e.dataset.type=n}var Ir=`opx.versionCheck.state`,Lr={ignoredVersion:``,lastCheckedAt:0,latest:null};async function Rr(){return Vr((await t.storage.local.get(Ir))[Ir])}async function zr(e){let n=Vr({...await Rr(),...e});return await t.storage.local.set({[Ir]:n}),n}async function Br(e){return zr({ignoredVersion:Ur(e)})}function Vr(e){let t=Wr(e)?e:{};return{ignoredVersion:Ur(t.ignoredVersion),lastCheckedAt:Number(t.lastCheckedAt||Lr.lastCheckedAt),latest:Hr(t.latest)}}function Hr(e){if(!Wr(e))return null;let t=Ur(e.version),n=String(e.htmlUrl||``).trim();return!t||!n?null:{version:t,tagName:String(e.tagName||t).trim(),name:String(e.name||e.tagName||t).trim(),body:String(e.body||``).trim(),htmlUrl:n,downloadUrl:String(e.downloadUrl||n).trim(),publishedAt:String(e.publishedAt||``).trim()}}function Ur(e){return String(e||``).trim().replace(/^v/i,``)}function Wr(e){return!!(e&&typeof e==`object`)}var Gr=`https://api.github.com/repos/suyancc/openai-plus-vxt/releases/latest`,Kr=1800*1e3;async function qr(e=!1){let n=Zr(t.runtime.getManifest().version),r=await Rr();if(!e&&r.latest&&Date.now()-r.lastCheckedAt<Kr)return Yr(n,r.latest,r.ignoredVersion);try{let e=await fetch(Gr,{headers:{Accept:`application/vnd.github+json`},cache:`no-store`});if(e.status===404)return await zr({latest:null,lastCheckedAt:Date.now()}),{currentVersion:n,latest:null,updateAvailable:!1,ignored:!1,error:`当前仓库还没有 GitHub Release`};if(!e.ok)throw Error(`GitHub API ${e.status}`);let t=Xr(await e.json());return await zr({latest:t,lastCheckedAt:Date.now()}),Yr(n,t,r.ignoredVersion)}catch(e){return{currentVersion:n,latest:r.latest,updateAvailable:!!(r.latest&&Jr(r.latest.version,n)>0),ignored:!!(r.latest&&r.ignoredVersion===r.latest.version),error:e instanceof Error?e.message:String(e)}}}function Jr(e,t){let n=Zr(e).split(`.`).map(Qr),r=Zr(t).split(`.`).map(Qr),i=Math.max(n.length,r.length);for(let e=0;e<i;e+=1){let t=(n[e]||0)-(r[e]||0);if(t!==0)return t>0?1:-1}return 0}function Yr(e,t,n){return{currentVersion:e,latest:t,updateAvailable:!!(t&&Jr(t.version,e)>0),ignored:!!(t&&n===t.version)}}function Xr(e){let t=String(e.tag_name||``).trim(),n=Zr(t),r=String(e.html_url||``).trim();if(!n||!r)return null;let i=e.assets?.find(e=>{let t=String(e.name||``).toLowerCase();return t.endsWith(`.zip`)&&t.includes(`chrome`)})?.browser_download_url||e.assets?.find(e=>String(e.name||``).toLowerCase().endsWith(`.zip`))?.browser_download_url;return{version:n,tagName:t,name:String(e.name||t).trim(),body:String(e.body||``).trim(),htmlUrl:r,downloadUrl:String(i||r).trim(),publishedAt:String(e.published_at||``).trim()}}function Zr(e){return e.trim().replace(/^v/i,``)}function Qr(e){let t=Number.parseInt(e.replace(/\D.*$/,``),10);return Number.isFinite(t)?t:0}var $r=`https://t.me/fuck_open`;function ei(e={}){let n=document.createElement(`div`);n.className=`opx-settings-overlay`,n.hidden=!0;let r=document.createElement(`section`);r.className=`opx-settings-dialog`,r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-modal`,`true`),r.setAttribute(`aria-label`,`插件设置`);let i=document.createElement(`div`);i.className=`opx-settings-header`;let a=document.createElement(`div`);a.className=`opx-settings-title`;let o=document.createElement(`strong`);o.textContent=`设置`;let s=document.createElement(`span`);s.className=`opx-version-badge`,s.textContent=`v${t.runtime.getManifest().version}`;let c=ri(`×`,`关闭设置`);a.append(o,s),i.append(a,c);let l=document.createElement(`input`);l.type=`checkbox`,l.className=`opx-checkbox`;let u=document.createElement(`input`);u.type=`checkbox`,u.className=`opx-checkbox`;let d=ti(l,`OpenAI 支付页自动填写`,`用于 pay.openai.com/c/pay 页面，填写姓名、国家、地址、邮编、电话并勾选条款。`),f=ti(u,`PayPal 注册页自动填写`,`用于 paypal.com/checkoutweb/signup 页面，填写国家、邮箱、卡资料、姓名、地址和密码提示。`),p=document.createElement(`button`);p.className=`opx-external-link-button`,p.type=`button`,p.title=`立即检查 GitHub Release 最新版本`,p.textContent=`检测更新`;let m=document.createElement(`button`);m.className=`opx-external-link-button`,m.type=`button`,m.title=`打开 TG 群组`,m.append(ni(),document.createTextNode(`TG 群组：t.me/fuck_open`));let h=document.createElement(`div`);h.className=`opx-hint`,h.textContent=`国家、城市和获取地址在“地址”tab 中操作。`;let g=document.createElement(`div`);g.className=`opx-status`,r.append(i,d,f,p,m,h,g),n.append(r),c.addEventListener(`click`,v),n.addEventListener(`click`,e=>{e.target===n&&v()}),l.addEventListener(`change`,async()=>{await L({payOpenAiEnabled:l.checked}),$(g,`设置已保存`,`ok`)}),u.addEventListener(`change`,async()=>{await L({payPalSignupEnabled:u.checked}),$(g,`设置已保存`,`ok`)}),m.addEventListener(`click`,()=>{window.open($r,`_blank`,`noopener,noreferrer`)}),p.addEventListener(`click`,async()=>{p.disabled=!0,$(g,`正在检测 GitHub 最新版本...`,`pending`);try{let t=await qr(!0);await e.onVersionChecked?.(),t.latest&&t.updateAvailable?$(g,`发现新版本 v${t.latest.version}，顶部已显示更新提示`,`ok`):t.latest?$(g,`当前已是最新版本 v${t.currentVersion}`,`ok`):$(g,t.error||`暂未找到可用 Release`,`pending`)}catch(e){$(g,e instanceof Error?e.message:String(e),`error`)}finally{p.disabled=!1}});let _=async()=>{let e=await R();l.checked=e.payOpenAiEnabled,u.checked=e.payPalSignupEnabled;let t=Number(e.payOpenAiEnabled)+Number(e.payPalSignupEnabled);$(g,t>0?`已开启 ${t} 项自动填写`:`自动填写未开启`,t>0?`ok`:`pending`)};return{element:n,open:()=>{n.hidden=!1,_()},update:_};function v(){n.hidden=!0}}function ti(e,t,n){let r=document.createElement(`div`);r.className=`opx-setting-item`;let i=document.createElement(`label`);i.className=`opx-check-row`;let a=document.createElement(`span`);a.textContent=t,i.append(e,a);let o=document.createElement(`div`);return o.className=`opx-setting-description`,o.textContent=n,r.append(i,o),r}function ni(){let e=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);e.classList.add(`opx-telegram-icon`),e.setAttribute(`viewBox`,`0 0 24 24`),e.setAttribute(`aria-hidden`,`true`);let t=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return t.setAttribute(`fill`,`currentColor`),t.setAttribute(`d`,`M21.9 4.3 18.7 19c-.2 1-.8 1.2-1.6.8l-4.6-3.4-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.7 8.5-7.7c.4-.3-.1-.5-.6-.2L7.1 12.9 2.6 11.5c-1-.3-1-1 0-1.4L20.2 3.3c.8-.3 1.5.2 1.7 1Z`),e.append(t),e}function ri(e,t){let n=document.createElement(`button`);return n.className=`opx-icon-button`,n.type=`button`,n.textContent=e,n.title=t,n.setAttribute(`aria-label`,t),n}function $(e,t,n){e.textContent=t,e.dataset.type=n}var ii=8,ai=4,oi=new Set([`data`,`message`,`msg`,`content`,`text`,`body`,`sms`,`otp`,`code`,`verifycode`,`verificationcode`,`captcha`,`result`,`value`]),si=new Set([`status`,`statuscode`,`httpstatus`,`ret`,`errno`,`errorcode`]),ci=/^(no\s*message|no\s*sms|empty|none|null|暂无|没有|未收到)$/i,li=/^(ok|success|successful|true|请求成功|成功)$/i;function ui(e){let t=[],n=[],r=new Set;return e.split(/\r?\n/).map(e=>e.trim()).filter(Boolean).forEach((e,i)=>{let a=e.indexOf(`----`);if(a<0){n.push(`第 ${i+1} 行缺少 ---- 分隔符`);return}let o=e.slice(0,a).trim(),s=e.slice(a+4).trim();if(!o||!s){n.push(`第 ${i+1} 行号码或 API 链接为空`);return}if(!Ci(s)){n.push(`第 ${i+1} 行 API 链接不是 http/https 地址`);return}let c=`${o}\n${s}`;r.has(c)||(r.add(c),t.push({id:wi(o,s),phone:o,url:s}))}),{targets:t,errors:n}}function di(e){let t=e.trim();return!t||ci.test(t)?``:t.match(RegExp(`\\b\\d{${ai},${ii}}\\b`,`g`))?.[0]||``}function fi(e){let t=pi(e),n=t.map(e=>({...e,code:di(e.text)})).filter(e=>e.text&&!gi(e.text)&&!_i(e.text)).sort((e,t)=>mi(t)-mi(e))[0];return n?.code?{code:n.code,message:n.text}:{code:``,message:t.map(e=>e.text).find(e=>e&&!gi(e)&&!_i(e))||``}}function pi(e){let t=[],n=new WeakSet;return r(e,``,0),t;function r(e,t,o){if(!(e==null||o>6)){if(typeof e==`string`){i(e,t,o),a(e,t,o);return}if(typeof e==`number`){xi(t)&&i(String(e),t,o);return}if(typeof e==`object`&&!n.has(e)){if(n.add(e),Array.isArray(e)){e.forEach((e,n)=>r(e,t||String(n),o+1));return}for(let[t,n]of Object.entries(e))bi(t)||r(n,t,o+1)}}}function i(e,n,r){let i=e.trim();!i||i.length>600||bi(n)||t.push({text:i,key:n,depth:r,fromPreferredField:yi(n)})}function a(e,t,n){let i=e.trim();if(!(!i||!/^[{[]/.test(i)))try{r(JSON.parse(i),t,n+1)}catch{}}}function mi(e){let t=0;return e.code&&(t+=100),e.fromPreferredField&&(t+=30),hi(e.text)&&(t+=20),xi(e.key)&&(t+=10),vi(e.text)&&(t-=8),t-=e.depth,t}function hi(e){return/code|验证码|驗證碼|verify|verification|security|otp|paypal|openai|chatgpt/i.test(e)}function gi(e){return ci.test(e.trim())}function _i(e){return li.test(e.trim())}function vi(e){return/^[{[]/.test(e.trim())}function yi(e){return oi.has(Si(e))}function bi(e){return si.has(Si(e))}function xi(e){let t=Si(e);return t===`otp`||t===`smscode`||t===`verifycode`||t===`verificationcode`||t===`captcha`}function Si(e){return e.toLowerCase().replace(/[^a-z0-9]/g,``)}function Ci(e){try{let t=new URL(e);return t.protocol===`http:`||t.protocol===`https:`}catch{return!1}}function wi(e,t){return`${e}|${t}`}async function Ti(e){let n;try{n=await t.runtime.sendMessage({type:`opx:fetch-sms-relay`,url:e.url})}catch(t){return{kind:`error`,target:e,message:`请求失败：${Di(t)}`}}if(!Ei(n)||!n.ok)return{kind:`error`,target:e,message:n?.message||`API 返回结果无效`};let r=fi({raw:n.raw,data:n.data,text:n.text,message:n.message}),i=r.message,a=r.code;return a?{kind:`code`,target:e,code:a,message:i}:{kind:`empty`,target:e,message:i||n.data||n.message||`暂无短信`}}function Ei(e){return!!(e&&typeof e==`object`&&typeof e.ok==`boolean`&&typeof e.message==`string`)}function Di(e){return e instanceof Error?e.message:String(e)}var Oi=3e3;function ki(e){let t=document.createElement(`div`);t.className=`opx-summary`;let n=document.createElement(`textarea`);n.className=`opx-textarea opx-sms-input`,n.placeholder=`+14642649811----https://xxxx.com/xxx
每行一个号码和 API 链接`,n.autocomplete=`off`,n.spellcheck=!1;let r=document.createElement(`div`);r.className=`opx-button-row opx-sms-actions`;let i=ji(`保存并开始`),a=ji(`立即获取`,`opx-button opx-button-secondary`),o=ji(`清空历史`,`opx-button opx-button-secondary`);r.append(i,a,o);let s=Mi(`当前号码`),c=document.createElement(`div`);c.className=`opx-sms-targets`;let l=Mi(`验证码历史`),u=document.createElement(`div`);u.className=`opx-sms-table`;let d=document.createElement(`div`);d.className=`opx-status`;let f=new Map,p=null,m=null,h=``,g=null,_=!1;e.append(t,Ai(`接码信息`,n),r,s,c,l,u,d),n.addEventListener(`input`,()=>{y(),S()}),n.addEventListener(`focus`,()=>{_=!0}),n.addEventListener(`blur`,()=>{_=!1,b()}),i.addEventListener(`click`,async()=>{await b(),S(),await w()}),a.addEventListener(`click`,async()=>{await b(),S(),await w()}),o.addEventListener(`click`,async()=>{let e=await Be({history:[]});p=e,D(e.history),Ii(d,`验证码历史已清空，输入内容已保留。`,`ok`)});let v=async()=>{let e=await ze();p=e,!_&&n.value!==e.rawInput&&(n.value=e.rawInput,h=e.rawInput,S()),D(e.history),C()};return v(),{update:v,onShow:async()=>{await v(),x()}};function y(){g&&window.clearTimeout(g),g=window.setTimeout(()=>void b(),450)}async function b(){g&&=(window.clearTimeout(g),null);let e=n.value;e!==h&&(p=await Be({rawInput:e}),h=e,C())}function x(){m===null&&(m=window.setInterval(()=>void w(),Oi))}function S(){let e=ui(n.value),t=new Set(e.targets.map(e=>e.id));for(let[e]of f)t.has(e)||f.delete(e);for(let t of e.targets){let e=f.get(t.id);e?e.target=t:f.set(t.id,{target:t,status:`waiting`,message:`等待获取`,code:``,lastCheckedAt:0,inFlight:!1})}if(c.textContent=``,!e.targets.length)c.append(Ni(e.errors[0]||`暂无号码，按每行“号码----API链接”输入。`));else for(let t of e.targets){let e=f.get(t.id);e&&c.append(E(e))}e.errors.length?Ii(d,e.errors.join(`；`),`error`):e.targets.length?Ii(d,`已加载 ${e.targets.length} 个接码链接，每 3 秒自动获取。`,`pending`):Ii(d,`输入内容会自动保存。`,`pending`),C()}function C(){let e=ui(n.value),r=p?.history.length||0,i=[...f.values()].filter(e=>e.code).length;t.textContent=`${e.targets.length} 个接码链接 · ${i} 个当前验证码 · ${r} 条历史`}async function w(){let e=ui(n.value);!e.targets.length||e.errors.length||(await b(),await Promise.all(e.targets.map(e=>T(e))),S(),D(p?.history||[]))}async function T(e){let t=f.get(e.id);if(!t||t.inFlight)return;t.inFlight=!0,t.status=t.code?`found`:`waiting`,t.message=`正在获取...`,S();let n=await Ti(e);if(t.inFlight=!1,t.lastCheckedAt=Date.now(),n.kind===`code`){t.status=`found`,t.code=n.code,t.message=n.message,await ee(e.phone,n.code,n.message),Ii(d,`${e.phone} 收到验证码 ${n.code}`,`ok`);return}if(n.kind===`error`){t.status=`error`,t.message=n.message,Ii(d,`${e.phone} 获取失败：${n.message}`,`error`);return}t.status=`waiting`,t.message=n.message}async function ee(e,t,n){let r=p||await ze();if(r.history.some(r=>r.phone===e&&r.code===t&&r.message===n)){p=r;return}p=await Be({history:[{id:`${e}-${t}-${Date.now()}`,phone:e,code:t,message:n,receivedAt:Date.now()},...r.history].slice(0,80)})}function E(e){let t=document.createElement(`div`);t.className=`opx-sms-target-row`,t.dataset.status=e.status;let n=document.createElement(`div`);n.className=`opx-sms-target-main`;let r=document.createElement(`strong`);r.textContent=e.target.phone;let i=document.createElement(`span`);i.textContent=e.code?e.message:e.message||`等待获取`,n.append(r,i);let a=document.createElement(`button`);return a.className=`opx-sms-code-chip`,a.type=`button`,a.textContent=e.code||(e.inFlight?`...`:`等待`),a.disabled=!e.code,a.title=e.code?`点击复制验证码`:`尚未收到验证码`,a.addEventListener(`click`,()=>void O(e.code,a)),t.append(n,a),t}function D(e){u.textContent=``;let t=document.createElement(`div`);if(t.className=`opx-sms-table-row opx-sms-table-head`,t.append(Pi(`号码`),Pi(`验证码`),Pi(`时间`)),u.append(t),!e.length){let e=document.createElement(`div`);e.className=`opx-empty-inline`,e.textContent=`暂无验证码历史。`,u.append(e);return}for(let t of e){let e=document.createElement(`div`);e.className=`opx-sms-table-row`;let n=document.createElement(`button`);n.className=`opx-sms-code-chip`,n.type=`button`,n.textContent=t.code,n.title=t.message||`点击复制验证码`,n.addEventListener(`click`,()=>void O(t.code,n)),e.append(Pi(t.phone),Fi(n),Pi(Li(t.receivedAt))),u.append(e)}}async function O(e,t){if(!e)return;await navigator.clipboard.writeText(e);let n=t.textContent||e;t.textContent=`已复制`,t.classList.add(`is-copied`),window.setTimeout(()=>{t.textContent=n,t.classList.remove(`is-copied`)},1200)}}function Ai(e,t){let n=document.createElement(`label`);n.className=`opx-field`;let r=document.createElement(`span`);return r.className=`opx-label`,r.textContent=e,n.append(r,t),n}function ji(e,t=`opx-button`){let n=document.createElement(`button`);return n.className=t,n.type=`button`,n.textContent=e,n}function Mi(e){let t=document.createElement(`div`);return t.className=`opx-section-title`,t.textContent=e,t}function Ni(e){let t=document.createElement(`div`);return t.className=`opx-empty-inline`,t.textContent=e,t}function Pi(e){let t=document.createElement(`div`);return t.className=`opx-sms-table-cell`,t.textContent=e,t}function Fi(e){let t=document.createElement(`div`);return t.className=`opx-sms-table-cell`,t.append(e),t}function Ii(e,t,n){e.textContent=t,e.dataset.type=n}function Li(e){return e?new Date(e).toLocaleTimeString(`zh-CN`,{hour12:!1,hour:`2-digit`,minute:`2-digit`,second:`2-digit`}):`-`}function Ri(){let e=document.createElement(`section`);e.className=`opx-version-notice`,e.hidden=!0;let t=document.createElement(`div`);t.className=`opx-version-notice-title`;let n=document.createElement(`div`);n.className=`opx-version-notice-body`;let r=document.createElement(`div`);r.className=`opx-version-notice-actions`;let i=document.createElement(`button`);i.className=`opx-mini-button`,i.type=`button`,i.textContent=`下载更新`;let a=document.createElement(`button`);a.className=`opx-mini-button opx-mini-button-secondary`,a.type=`button`,a.textContent=`更新说明`;let o=document.createElement(`button`);o.className=`opx-mini-button opx-mini-button-secondary`,o.type=`button`,o.textContent=`忽略`,r.append(i,a,o),e.append(t,n,r);let s=null;return i.addEventListener(`click`,()=>{s?.downloadUrl&&window.open(s.downloadUrl,`_blank`,`noopener,noreferrer`)}),a.addEventListener(`click`,()=>{s?.htmlUrl&&window.open(s.htmlUrl,`_blank`,`noopener,noreferrer`)}),o.addEventListener(`click`,async()=>{s&&(await Br(s.version),e.hidden=!0)}),{element:e,update:async(r=!1)=>{let i=await qr(r);s=i.latest,zi(i,e,t,n)}}}function zi(e,t,n,r){if(!e.latest||!e.updateAvailable||e.ignored){t.hidden=!0;return}n.textContent=`发现新版本 v${e.latest.version}`,r.textContent=Bi(e.currentVersion,e.latest),t.hidden=!1}function Bi(e,t){let n=t.body.split(/\r?\n/).map(e=>e.replace(/^#+\s*/,``).trim()).filter(Boolean).slice(0,2).join(` / `),r=`当前 v${e}，最新 ${t.tagName||`v${t.version}`}`;return n?`${r}。${n}`:r}var Vi=`
:host {
  all: initial;
  color-scheme: light dark;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.opx-shell {
  position: fixed;
  top: 72px;
  right: 0;
  z-index: 2147483647;
  display: flex;
  align-items: flex-start;
  max-height: calc(100vh - 88px);
}

.opx-panel {
  box-sizing: border-box;
  width: min(320px, calc(100vw - 42px));
  max-height: calc(100vh - 88px);
  margin-right: 18px;
  padding: 10px;
  border: 1px solid rgba(54, 211, 153, 0.28);
  border-radius: 8px;
  background: #0b1220;
  color: #e5f7ef;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.32);
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-color: rgba(47, 209, 124, 0.55) rgba(15, 23, 42, 0.72);
  scrollbar-width: thin;
}

.opx-panel::-webkit-scrollbar {
  width: 8px;
}

.opx-panel::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.72);
  border-radius: 999px;
}

.opx-panel::-webkit-scrollbar-thumb {
  background: rgba(47, 209, 124, 0.55);
  border-radius: 999px;
}

.opx-collapse-toggle {
  box-sizing: border-box;
  width: 32px;
  min-height: 64px;
  margin: 8px 0 0 0;
  padding: 8px 6px;
  border: 1px solid rgba(47, 209, 124, 0.36);
  border-right: 0;
  border-radius: 8px 0 0 8px;
  background: #0b1220;
  color: #93e4bd;
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  writing-mode: vertical-rl;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.28);
}

.opx-shell.is-collapsed .opx-panel {
  display: none;
}

.opx-shell.is-collapsed .opx-collapse-toggle {
  margin-right: 0;
  border-radius: 8px 0 0 8px;
  background: #102019;
}

.opx-topbar {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 34px;
  gap: 6px;
  align-items: stretch;
  margin-bottom: 8px;
}

.opx-tabs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 4px;
  margin-bottom: 0;
  padding: 3px;
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 8px;
  background: rgba(15, 23, 42, 0.8);
}

.opx-tab {
  height: 30px;
  min-width: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: #94a3b8;
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 650;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.opx-tab.is-active {
  background: #2fd17c;
  color: #04130a;
}

.opx-icon-button {
  box-sizing: border-box;
  width: 34px;
  height: 36px;
  border: 1px solid rgba(47, 209, 124, 0.36);
  border-radius: 8px;
  background: #111827;
  color: #93e4bd;
  cursor: pointer;
  font: inherit;
  font-size: 17px;
  font-weight: 700;
  line-height: 1;
}

.opx-icon-button:hover {
  border-color: rgba(47, 209, 124, 0.74);
  color: #bbf7d0;
}

.opx-state {
  margin: 0 0 8px;
  color: #93e4bd;
  font-size: 12px;
  line-height: 16px;
}

.opx-version-notice {
  display: grid;
  gap: 7px;
  margin: 0 0 8px;
  padding: 8px;
  border: 1px solid rgba(47, 209, 124, 0.42);
  border-radius: 7px;
  background: rgba(47, 209, 124, 0.1);
  color: #dcfce7;
}

.opx-version-notice[hidden] {
  display: none;
}

.opx-version-notice-title {
  color: #bbf7d0;
  font-size: 12px;
  font-weight: 800;
  line-height: 16px;
}

.opx-version-notice-body {
  color: #cbd5e1;
  font-size: 11px;
  line-height: 15px;
  overflow-wrap: anywhere;
}

.opx-version-notice-actions {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 54px;
  gap: 5px;
}

.opx-mini-button {
  box-sizing: border-box;
  min-width: 0;
  height: 28px;
  border: 0;
  border-radius: 6px;
  background: #2fd17c;
  color: #04130a;
  cursor: pointer;
  font: inherit;
  font-size: 11px;
  font-weight: 750;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.opx-mini-button-secondary {
  border: 1px solid rgba(47, 209, 124, 0.34);
  background: rgba(15, 23, 42, 0.72);
  color: #93e4bd;
}

.opx-view {
  display: block;
}

.opx-view[hidden] {
  display: none;
}

.opx-empty-view {
  min-height: 84px;
  display: grid;
  place-items: center;
  border: 1px dashed rgba(148, 163, 184, 0.28);
  border-radius: 8px;
  color: #94a3b8;
  font-size: 13px;
}

.opx-input,
.opx-select,
.opx-textarea {
  box-sizing: border-box;
  width: 100%;
  height: 36px;
  margin: 0 0 8px;
  padding: 0 10px;
  border: 1px solid rgba(148, 163, 184, 0.32);
  border-radius: 6px;
  background: #111827;
  color: #e5f7ef;
  font: inherit;
  font-size: 13px;
  outline: none;
}

.opx-select {
  appearance: none;
}

.opx-textarea {
  min-height: 72px;
  max-height: 140px;
  padding: 9px 10px;
  resize: vertical;
  line-height: 18px;
}

.opx-input:focus,
.opx-select:focus,
.opx-textarea:focus {
  border-color: #2fd17c;
}

.opx-hint {
  margin: -2px 0 8px;
  color: #94a3b8;
  font-size: 11px;
  line-height: 15px;
}

.opx-hint.is-ok {
  color: #86efac;
}

.opx-summary {
  margin: 0 0 8px;
  padding: 7px 8px;
  border: 1px solid rgba(47, 209, 124, 0.28);
  border-radius: 6px;
  background: rgba(47, 209, 124, 0.08);
  color: #bbf7d0;
  font-size: 11px;
  line-height: 15px;
  word-break: break-word;
  white-space: pre-line;
}

.opx-session-card {
  display: grid;
  gap: 5px;
  margin: 0 0 8px;
  padding: 8px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 6px;
  background: rgba(15, 23, 42, 0.72);
}

.opx-session-row {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 6px;
  color: #94a3b8;
  font-size: 11px;
  line-height: 15px;
}

.opx-session-row strong {
  min-width: 0;
  color: #e5f7ef;
  font-weight: 600;
  word-break: break-word;
}

.opx-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
}

.opx-team-options[hidden] {
  display: none;
}

.opx-field {
  display: block;
  min-width: 0;
}

.opx-label {
  display: block;
  margin: 0 0 4px;
  color: #94a3b8;
  font-size: 11px;
  line-height: 14px;
}

.opx-token-textarea {
  min-height: 92px;
}

.opx-output {
  min-height: 58px;
  resize: vertical;
}

.opx-button-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6px;
}

.opx-address-actions {
  grid-template-columns: minmax(0, 1fr);
}

.opx-button {
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  margin: 0 0 10px;
  border: 0;
  border-radius: 6px;
  background: #2fd17c;
  color: #04130a;
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
}

.opx-button-secondary {
  background: #182235;
  color: #93e4bd;
  border: 1px solid rgba(47, 209, 124, 0.36);
}

.opx-button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.opx-status {
  min-height: 18px;
  color: #cbd5e1;
  font-size: 12px;
  line-height: 18px;
  word-break: break-word;
}

.opx-status[data-type="ok"] {
  color: #86efac;
}

.opx-status[data-type="error"] {
  color: #fca5a5;
}

.opx-settings-overlay {
  position: fixed;
  inset: 0;
  z-index: 2147483647;
  display: grid;
  place-items: start center;
  padding: 22px 10px;
  background: rgba(2, 6, 23, 0.58);
}

.opx-settings-overlay[hidden] {
  display: none;
}

.opx-settings-dialog {
  box-sizing: border-box;
  width: min(300px, calc(100vw - 52px));
  max-height: calc(100vh - 44px);
  overflow-y: auto;
  padding: 10px;
  border: 1px solid rgba(47, 209, 124, 0.38);
  border-radius: 8px;
  background: #0b1220;
  color: #e5f7ef;
  box-shadow: 0 20px 52px rgba(0, 0, 0, 0.42);
}

.opx-settings-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin: 0 0 10px;
  color: #bbf7d0;
  font-size: 14px;
  line-height: 18px;
}

.opx-settings-title {
  display: flex;
  align-items: center;
  gap: 7px;
  min-width: 0;
}

.opx-version-badge {
  padding: 1px 6px;
  border: 1px solid rgba(47, 209, 124, 0.34);
  border-radius: 999px;
  background: rgba(47, 209, 124, 0.08);
  color: #93e4bd;
  font-size: 11px;
  font-weight: 700;
  line-height: 16px;
}

.opx-settings-header .opx-icon-button {
  width: 28px;
  height: 28px;
  font-size: 18px;
}

.opx-settings-dialog .opx-grid {
  grid-template-columns: minmax(0, 1fr);
  gap: 0;
}

.opx-setting-item {
  margin: 0 0 8px;
  padding: 8px;
  border: 1px solid rgba(47, 209, 124, 0.22);
  border-radius: 6px;
  background: rgba(15, 23, 42, 0.54);
}

.opx-setting-item .opx-check-row {
  margin-bottom: 4px;
}

.opx-setting-description {
  margin-left: 26px;
  color: #94a3b8;
  font-size: 11px;
  line-height: 15px;
}

.opx-external-link-button {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  width: 100%;
  min-height: 34px;
  margin: 0 0 8px;
  padding: 8px 10px;
  border: 1px solid rgba(47, 209, 124, 0.34);
  border-radius: 6px;
  background: rgba(47, 209, 124, 0.1);
  color: #bbf7d0;
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
}

.opx-telegram-icon {
  flex: 0 0 auto;
  width: 14px;
  height: 14px;
}

.opx-external-link-button:hover {
  border-color: rgba(47, 209, 124, 0.7);
  background: rgba(47, 209, 124, 0.16);
  color: #dcfce7;
}

.opx-external-link-button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.opx-check-row {
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr);
  gap: 8px;
  align-items: center;
  margin: 0 0 10px;
  color: #e5f7ef;
  cursor: pointer;
  font-size: 12px;
  line-height: 16px;
}

.opx-checkbox {
  width: 16px;
  height: 16px;
  accent-color: #2fd17c;
}

.opx-address-summary {
  min-height: 68px;
}

.opx-settings-buttons {
  margin-top: 2px;
}

.opx-section-title {
  margin: 10px 0 6px;
  color: #bbf7d0;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
}

.opx-copy-list {
  display: grid;
  gap: 5px;
}

.opx-copy-section {
  display: grid;
  gap: 5px;
  margin: 5px 0 1px;
}

.opx-copy-section-title {
  color: #93e4bd;
  font-size: 11px;
  font-weight: 700;
  line-height: 15px;
}

.opx-copy-section-body {
  display: grid;
  gap: 5px;
}

.opx-accordion-section {
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 6px;
  background: rgba(15, 23, 42, 0.56);
}

.opx-accordion-section summary {
  padding: 7px 8px;
  color: #93e4bd;
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  line-height: 15px;
  list-style-position: inside;
}

.opx-accordion-section .opx-copy-section-body {
  padding: 0 6px 6px;
}

.opx-copy-row,
.opx-empty-inline {
  box-sizing: border-box;
  width: 100%;
  min-height: 30px;
  padding: 7px 8px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 6px;
  background: rgba(15, 23, 42, 0.72);
  color: #cbd5e1;
  font: inherit;
  font-size: 11px;
  line-height: 15px;
  text-align: left;
  word-break: break-word;
}

.opx-copy-row {
  cursor: pointer;
}

.opx-copy-row {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 4px;
  align-items: start;
}

.opx-copy-row:hover {
  border-color: rgba(47, 209, 124, 0.48);
  color: #e5f7ef;
}

.opx-copy-row.is-copied {
  border-color: rgba(47, 209, 124, 0.72);
  background: rgba(47, 209, 124, 0.12);
}

.opx-copy-label {
  color: #94a3b8;
  white-space: nowrap;
}

.opx-copy-row strong {
  min-width: 0;
  color: #e5f7ef;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.opx-copy-feedback {
  align-self: start;
  padding: 1px 5px;
  border-radius: 999px;
  background: rgba(47, 209, 124, 0.16);
  color: #86efac !important;
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;
  white-space: nowrap;
}

.opx-copy-feedback[hidden] {
  display: none;
}

.opx-empty-inline {
  color: #94a3b8;
  border-style: dashed;
}

.opx-sms-input {
  min-height: 88px;
}

.opx-sms-actions {
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.86fr) minmax(0, 0.86fr);
}

.opx-sms-targets {
  display: grid;
  gap: 6px;
}

.opx-sms-target-row {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  min-height: 44px;
  padding: 7px 8px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 6px;
  background: rgba(15, 23, 42, 0.72);
}

.opx-sms-target-row[data-status="found"] {
  border-color: rgba(47, 209, 124, 0.5);
  background: rgba(47, 209, 124, 0.1);
}

.opx-sms-target-row[data-status="error"] {
  border-color: rgba(248, 113, 113, 0.42);
  background: rgba(127, 29, 29, 0.2);
}

.opx-sms-target-main {
  min-width: 0;
  display: grid;
  gap: 2px;
}

.opx-sms-target-main strong,
.opx-sms-target-main span {
  min-width: 0;
  overflow-wrap: anywhere;
}

.opx-sms-target-main strong {
  color: #e5f7ef;
  font-size: 12px;
  line-height: 16px;
}

.opx-sms-target-main span {
  color: #94a3b8;
  font-size: 11px;
  line-height: 15px;
}

.opx-sms-code-chip {
  box-sizing: border-box;
  min-width: 56px;
  max-width: 92px;
  min-height: 28px;
  padding: 4px 8px;
  border: 1px solid rgba(47, 209, 124, 0.44);
  border-radius: 999px;
  background: #182235;
  color: #bbf7d0;
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.opx-sms-code-chip:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.opx-sms-code-chip.is-copied {
  background: #2fd17c;
  color: #04130a;
}

.opx-sms-table {
  display: grid;
  gap: 5px;
}

.opx-sms-table-row {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(64px, 0.8fr) 62px;
  gap: 6px;
  align-items: center;
  min-height: 32px;
  padding: 5px 6px;
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 6px;
  background: rgba(15, 23, 42, 0.58);
}

.opx-sms-table-head {
  min-height: 24px;
  background: transparent;
  border-color: transparent;
  color: #93e4bd;
  font-weight: 700;
}

.opx-sms-table-cell {
  min-width: 0;
  color: #cbd5e1;
  font-size: 11px;
  line-height: 15px;
  overflow-wrap: anywhere;
}

@media (max-height: 640px) {
  .opx-shell {
    top: 12px;
    max-height: calc(100vh - 24px);
  }

  .opx-panel {
    max-height: calc(100vh - 24px);
  }
}
`;function Hi(e,t){e.innerHTML=``;let n=document.createElement(`style`);n.textContent=Vi;let r=document.createElement(`div`);r.className=`opx-shell`;let i=document.createElement(`button`);i.className=`opx-collapse-toggle`,i.type=`button`,i.textContent=`收起`,i.title=`收起侧边栏`,i.setAttribute(`aria-expanded`,`true`);let a=document.createElement(`aside`);a.className=`opx-panel`;let o=document.createElement(`div`);o.className=`opx-topbar`;let s=document.createElement(`div`);s.className=`opx-tabs`;let c=Gi(`register`,`注册`),l=Gi(`link`,`提链接`),u=Gi(`address`,`地址`),d=Gi(`sms`,`接码`);s.append(c,l,u,d);let f=document.createElement(`button`);f.className=`opx-icon-button`,f.type=`button`,f.textContent=`⚙`,f.title=`打开设置`,f.setAttribute(`aria-label`,`打开设置`);let p=document.createElement(`div`);p.className=`opx-state`;let m=Wi(),h=Wi(),g=Wi(),_=Wi(),v={register:Mr(m,t),link:wr(h),address:mr(g),sms:ki(_)},y=Ri(),b=ei({onVersionChecked:()=>y.update(!0)}),x=`register`,S=e=>{r.classList.toggle(`is-collapsed`,e),i.textContent=e?`展开`:`收起`,i.title=e?`展开侧边栏`:`收起侧边栏`,i.setAttribute(`aria-expanded`,e?`false`:`true`)},C=async e=>{Ve(e)&&(x=e,await Ne(e),w(),await v[e].onShow?.(),await T())},w=()=>{for(let e of[c,l,u,d])e.classList.toggle(`is-active`,e.dataset.tab===x);m.hidden=x!==`register`,h.hidden=x!==`link`,g.hidden=x!==`address`,_.hidden=x!==`sms`},T=async()=>{let e=await N();x=e.activeTab,S(e.panelCollapsed),w(),p.textContent=Ui(x,t),await v[x].update()};c.addEventListener(`click`,()=>void C(`register`)),l.addEventListener(`click`,()=>void C(`link`)),u.addEventListener(`click`,()=>void C(`address`)),d.addEventListener(`click`,()=>void C(`sms`)),f.addEventListener(`click`,()=>b.open()),i.addEventListener(`click`,()=>{let e=!r.classList.contains(`is-collapsed`);S(e),Pe(e)}),o.append(s,f),a.append(o,y.element,p,m,h,g,_,b.element),r.append(i,a),e.append(n,r),window.setInterval(()=>void T(),1e3),window.setTimeout(()=>void y.update(),800),T().then(()=>{v[x].onShow?.()})}function Ui(e,t){return e===`register`?t.getPageState().label:e===`link`?`提链接：ChatGPT session`:e===`address`?`地址：随机资料`:`接码：短信验证码`}function Wi(){let e=document.createElement(`section`);return e.className=`opx-view`,e}function Gi(e,t){let n=document.createElement(`button`);return n.className=`opx-tab`,n.type=`button`,n.dataset.tab=e,n.textContent=t,n}var Ki=`opx-assistant-root`;function qi(){if(document.getElementById(Ki))return;let e=document.createElement(`div`);e.id=Ki,document.documentElement.append(e);let t=e.attachShadow({mode:`open`}),n=Ye();Hi(t,n),n.autoRunForCurrentPage()}var Ji=`__opx_assistant_content_loaded__`,Yi=e({matches:[`https://chatgpt.com/*`,`https://auth.openai.com/*`,`https://pay.openai.com/*`,`https://www.paypal.com/*`,`https://paypal.com/*`],runAt:`document_idle`,registration:`manifest`,main(){let e=globalThis;if(!e[Ji]){e[Ji]=!0,qi();try{yt()}catch(e){console.warn(`[OPX] pay autofill init failed`,e)}try{rn()}catch(e){console.warn(`[OPX] PayPal autofill init failed`,e)}}}}),Xi={debug:(...e)=>([...e],void 0),log:(...e)=>([...e],void 0),warn:(...e)=>([...e],void 0),error:(...e)=>([...e],void 0)},Zi=class e extends Event{static EVENT_NAME=Qi(`wxt:locationchange`);constructor(t,n){super(e.EVENT_NAME,{}),this.newUrl=t,this.oldUrl=n}};function Qi(e){return`${t?.runtime?.id}:content:${e}`}var $i=typeof globalThis.navigation?.addEventListener==`function`;function ea(e){let t,n=!1;return{run(){n||(n=!0,t=new URL(location.href),$i?globalThis.navigation.addEventListener(`navigate`,e=>{let n=new URL(e.destination.url);n.href!==t.href&&(window.dispatchEvent(new Zi(n,t)),t=n)},{signal:e.signal}):e.setInterval(()=>{let e=new URL(location.href);e.href!==t.href&&(window.dispatchEvent(new Zi(e,t)),t=e)},1e3))}}}var ta=class e{static SCRIPT_STARTED_MESSAGE_TYPE=Qi(`wxt:content-script-started`);id;abortController;locationWatcher=ea(this);constructor(e,t){this.contentScriptName=e,this.options=t,this.id=Math.random().toString(36).slice(2),this.abortController=new AbortController,this.stopOldScripts(),this.listenForNewerScripts()}get signal(){return this.abortController.signal}abort(e){return this.abortController.abort(e)}get isInvalid(){return t.runtime?.id??this.notifyInvalidated(),this.signal.aborted}get isValid(){return!this.isInvalid}onInvalidated(e){return this.signal.addEventListener(`abort`,e),()=>this.signal.removeEventListener(`abort`,e)}block(){return new Promise(()=>{})}setInterval(e,t){let n=setInterval(()=>{this.isValid&&e()},t);return this.onInvalidated(()=>clearInterval(n)),n}setTimeout(e,t){let n=setTimeout(()=>{this.isValid&&e()},t);return this.onInvalidated(()=>clearTimeout(n)),n}requestAnimationFrame(e){let t=requestAnimationFrame((...t)=>{this.isValid&&e(...t)});return this.onInvalidated(()=>cancelAnimationFrame(t)),t}requestIdleCallback(e,t){let n=requestIdleCallback((...t)=>{this.signal.aborted||e(...t)},t);return this.onInvalidated(()=>cancelIdleCallback(n)),n}addEventListener(e,t,n,r){t===`wxt:locationchange`&&this.isValid&&this.locationWatcher.run(),e.addEventListener?.(t.startsWith(`wxt:`)?Qi(t):t,n,{...r,signal:this.signal})}notifyInvalidated(){this.abort(`Content script context invalidated`),Xi.debug(`Content script "${this.contentScriptName}" context invalidated`)}stopOldScripts(){document.dispatchEvent(new CustomEvent(e.SCRIPT_STARTED_MESSAGE_TYPE,{detail:{contentScriptName:this.contentScriptName,messageId:this.id}})),this.options?.noScriptStartedPostMessage||window.postMessage({type:e.SCRIPT_STARTED_MESSAGE_TYPE,contentScriptName:this.contentScriptName,messageId:this.id},`*`)}verifyScriptStartedEvent(e){let t=e.detail?.contentScriptName===this.contentScriptName,n=e.detail?.messageId===this.id;return t&&!n}listenForNewerScripts(){let t=e=>{!(e instanceof CustomEvent)||!this.verifyScriptStartedEvent(e)||this.notifyInvalidated()};document.addEventListener(e.SCRIPT_STARTED_MESSAGE_TYPE,t),this.onInvalidated(()=>document.removeEventListener(e.SCRIPT_STARTED_MESSAGE_TYPE,t))}},na={debug:(...e)=>([...e],void 0),log:(...e)=>([...e],void 0),warn:(...e)=>([...e],void 0),error:(...e)=>([...e],void 0)};return(async()=>{try{let{main:e,...t}=Yi;return await e(new ta(`content`,t))}catch(e){throw na.error(`The content script "content" crashed on startup!`,e),e}})()})();
content;