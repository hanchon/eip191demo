(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(81754)}])},81754:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(85893),a=n(34051),s=n.n(a),f=n(88384),c=n(67294),o=n(3283),u=n.n(o),i=n(83875),d=n(38197),b=n(48764).Buffer;function l(e,t,n,r,a,s,f){try{var c=e[s](f),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,a)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function f(e){l(s,r,a,f,c,"next",e)}function c(e){l(s,r,a,f,c,"throw",e)}f(void 0)}))}}function h(e){return new Promise((function(t){setTimeout(t,e)}))}function m(e,t,n){return x.apply(this,arguments)}function x(){return(x=p(s().mark((function e(t,n,r){var a,f,c,o,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=3;break}return alert("Click on connect, we need the address to validate the type of signature!"),e.abrupt("return");case 3:if(""!==t){e.next=6;break}return alert("Send and wait for the contract to be mined!"),e.abrupt("return");case 6:a={type:2,accessList:t.accessList,nonce:t.nonce,gasLimit:t.gas,maxPriorityFeePerGas:parseInt(t.maxFeePerGas),maxFeePerGas:parseInt(t.maxPriorityFeePerGas),data:new Uint8Array(b.from(t.input.slice(2),"hex")),chainId:Number(t.chainId)},f={r:t.r,s:t.s,v:Number(t.v)},c=i.serialize(a),o=d.keccak256(b.from(c.slice(2),"hex")),u=i.recoverAddress(b.from(o.slice(2),"hex"),f),n.toLowerCase()===u.toLowerCase()?r("No"):r("Probably");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t,n,r,a,s,f){try{var c=e[s](f),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,a)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function f(e){y(s,r,a,f,c,"next",e)}function c(e){y(s,r,a,f,c,"throw",e)}f(void 0)}))}}var v=function(){var e=JSON.parse('[{"inputs":[],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"subtract","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),t=(0,c.useState)(""),n=t[0],a=t[1],o=(0,c.useState)(""),i=o[0],d=o[1],b=(0,c.useState)(""),l=b[0],p=b[1],x=(0,c.useState)(""),y=x[0],v=x[1],g=(0,c.useState)(""),k=g[0],j=g[1],T=(0,c.useState)(""),C=T[0],P=T[1],S=(0,c.useState)("?"),_=S[0],N=S[1],A=new(u())("http://localhost:8545"),q=new A.eth.Contract(e);function I(e){return E.apply(this,arguments)}function E(){return(E=w(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.eth.getTransaction(t);case 2:m(e.sent,y,N);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{className:"border-2 p-2 rounded-md",onClick:w(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:t=e.sent,v(t[0]);case 4:case"end":return e.stop()}}),e)}))),children:"Connect Wallet"}),(0,r.jsxs)("p",{children:["Connected Wallet = ",y," (",(0,f.ethToEvmos)(y),")"]}),(0,r.jsx)("button",{className:"border-2 p-2 rounded-md",onClick:w(s().mark((function e(){var t,n,r,f,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return t=e.sent,n=q.deploy({data:"60806040526000805534801561001457600080fd5b506101bd806100246000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634f2be91f146100465780636deebae3146100505780638ada066e1461005a575b600080fd5b61004e610078565b005b610058610091565b005b6100626100aa565b60405161006f91906100cc565b60405180910390f35b60008081548092919061008a90610116565b9190505550565b6000808154809291906100a39061015e565b9190505550565b60008054905090565b6000819050919050565b6100c6816100b3565b82525050565b60006020820190506100e160008301846100bd565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610121826100b3565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610153576101526100e7565b5b600182019050919050565b6000610169826100b3565b91506000820361017c5761017b6100e7565b5b60018203905091905056fea2646970667358221220b9a1447fcb244ff4a69bca76e5f8e21d67d048604d4108a6b59efdd09d2e42ce64736f6c634300080d0033",arguments:[5]}),console.log(t[0]),r=[{from:t[0],gas:"0x76c00",gasPrice:"0x9184e72a000",value:"0x0",data:n.encodeABI()}],console.log(r),e.next=9,window.ethereum.request({method:"eth_sendTransaction",params:r});case 9:return f=e.sent,a(f),p("Waiting 6 seconds for the tx to be in a block"),e.next=14,h(6e3);case 14:return e.next=16,A.eth.getTransactionReceipt(f);case 16:c=e.sent,p(c.contractAddress?c.contractAddress:"");case 18:case"end":return e.stop()}}),e)}))),children:"Deploy"}),(0,r.jsxs)("p",{children:["Deployed TxHash = ",n]}),(0,r.jsxs)("p",{children:["Deployed Contract = ",l]}),(0,r.jsx)("button",{className:"border-2 p-2 rounded-md",onClick:w(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I(n);case 1:case"end":return e.stop()}}),e)}))),children:"Is contract creation EIP191?"}),(0,r.jsxs)("p",{children:["Is EIP191 signature = ",_]}),(0,r.jsx)("button",{className:"border-2 p-2 rounded-md",onClick:w(s().mark((function e(){var t,n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return t=e.sent,n=[{from:t[0],to:l,gas:"0x76c00",gasPrice:"0x9184e72a000",value:"0x0",data:q.methods.add().encodeABI()}],console.log(n),e.next=7,window.ethereum.request({method:"eth_sendTransaction",params:n});case 7:return r=e.sent,d(r),P("Waiting 6 seconds for the tx to be in a block"),e.next=12,h(6e3);case 12:return e.next=14,A.eth.getTransactionReceipt(r);case 14:a=e.sent,console.log(a),P(JSON.stringify(a));case 17:case"end":return e.stop()}}),e)}))),children:"Add 1"}),(0,r.jsxs)("p",{children:["Add TxHash = ",i]}),(0,r.jsxs)("p",{children:["Add tx logs = ",C]}),(0,r.jsx)("button",{className:"border-2 p-2 rounded-md",onClick:w(s().mark((function t(){var n,r,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return n=t.sent,r=new A.eth.Contract(e,l),t.next=6,r.methods.getCounter().call({from:n[0]});case 6:a=t.sent,console.log(a),j(a);case 9:case"end":return t.stop()}}),t)}))),children:"Query counter amount"}),(0,r.jsxs)("p",{children:["Counter amount = ",k]})]})},g=n(56371),k=n(48764).Buffer;function j(e,t,n,r,a,s,f){try{var c=e[s](f),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,a)}function T(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function f(e){j(s,r,a,f,c,"next",e)}function c(e){j(s,r,a,f,c,"throw",e)}f(void 0)}))}}var C=function(){var e=JSON.parse('[{"inputs":[{"internalType":"address","name":"signer","type":"address"},{"internalType":"bytes32","name":"hash","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"isValid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"recoverAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"}]'),t=(0,c.useState)(""),n=t[0],a=t[1],f=(0,c.useState)(""),o=f[0],i=f[1],d=(0,c.useState)(""),b=d[0],l=d[1],p=(0,c.useState)(""),m=p[0],x=p[1],y=(0,c.useState)(),w=y[0],v=y[1],j=(0,c.useState)((0,g.keccak256)(k.from("test","utf-8"))),C=j[0],P=(j[1],(0,c.useState)("")),S=P[0],_=P[1],N=new(u())("http://localhost:8545"),A=new N.eth.Contract(e);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"text-2xl font-bold",children:"Eip191 Contract"}),(0,r.jsx)("button",{className:"border-2 p-2 rounded-md",onClick:T(s().mark((function e(){var t,n,r,f,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return t=e.sent,n=A.deploy({data:"608060405234801561001057600080fd5b50610515806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631552a3691461003b5780638428cf831461006b575b600080fd5b61005560048036038101906100509190610277565b61009b565b604051610062919061030d565b60405180910390f35b61008560048036038101906100809190610328565b6100e2565b604051610092919061039e565b60405180910390f35b60008573ffffffffffffffffffffffffffffffffffffffff166100c0868686866100e2565b73ffffffffffffffffffffffffffffffffffffffff1614905095945050505050565b6000806040518060400160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250905060008187604051602001610132929190610454565b6040516020818303038152906040528051906020012090506001818787876040516000815260200160405260405161016d949392919061049a565b6020604051602081039080840390855afa15801561018f573d6000803e3d6000fd5b5050506020604051035192505050949350505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101d5826101aa565b9050919050565b6101e5816101ca565b81146101f057600080fd5b50565b600081359050610202816101dc565b92915050565b6000819050919050565b61021b81610208565b811461022657600080fd5b50565b60008135905061023881610212565b92915050565b600060ff82169050919050565b6102548161023e565b811461025f57600080fd5b50565b6000813590506102718161024b565b92915050565b600080600080600060a08688031215610293576102926101a5565b5b60006102a1888289016101f3565b95505060206102b288828901610229565b94505060406102c388828901610262565b93505060606102d488828901610229565b92505060806102e588828901610229565b9150509295509295909350565b60008115159050919050565b610307816102f2565b82525050565b600060208201905061032260008301846102fe565b92915050565b60008060008060808587031215610342576103416101a5565b5b600061035087828801610229565b945050602061036187828801610262565b935050604061037287828801610229565b925050606061038387828801610229565b91505092959194509250565b610398816101ca565b82525050565b60006020820190506103b3600083018461038f565b92915050565b600081519050919050565b600081905092915050565b60005b838110156103ed5780820151818401526020810190506103d2565b838111156103fc576000848401525b50505050565b600061040d826103b9565b61041781856103c4565b93506104278185602086016103cf565b80840191505092915050565b6000819050919050565b61044e61044982610208565b610433565b82525050565b60006104608285610402565b915061046c828461043d565b6020820191508190509392505050565b61048581610208565b82525050565b6104948161023e565b82525050565b60006080820190506104af600083018761047c565b6104bc602083018661048b565b6104c9604083018561047c565b6104d6606083018461047c565b9594505050505056fea26469706673582212204ec9f88da43a1ea86968beaf7cb6db9c486805a78ea2b3e78edb2f366efad45064736f6c634300080d0033",arguments:[]}),console.log(t[0]),r=[{from:t[0],gas:"0x76c00",gasPrice:"0x9184e72a000",value:"0x0",data:n.encodeABI()}],console.log(r),e.next=9,window.ethereum.request({method:"eth_sendTransaction",params:r});case 9:return f=e.sent,a(f),i("Waiting 6 seconds for the tx to be in a block"),e.next=14,h(6e3);case 14:return e.next=16,N.eth.getTransactionReceipt(f);case 16:c=e.sent,i(c.contractAddress?c.contractAddress:"");case 18:case"end":return e.stop()}}),e)}))),children:"Deploy a signature validator contract"}),(0,r.jsxs)("p",{children:["Deployed TxHash = ",n]}),(0,r.jsxs)("p",{children:["Deployed Contract = ",o]}),(0,r.jsx)("button",{className:"border-2 p-2 rounded-md",onClick:T(s().mark((function e(){var t,n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return t=e.sent,n=[t[0],C],console.log(n),e.next=7,window.ethereum.request({method:"personal_sign",params:n});case 7:r=e.sent,a=(0,g.splitSignature)(r),l(a.s),x(a.r),v(a.v);case 12:case"end":return e.stop()}}),e)}))),children:"Sign a EIP191 message"}),(0,r.jsxs)("p",{children:["Hashed Message = ",C]}),(0,r.jsxs)("p",{children:["R = ",m]}),(0,r.jsxs)("p",{children:["S = ",b]}),(0,r.jsxs)("p",{children:["V = ",w]}),(0,r.jsx)("button",{className:"border-2 p-2 rounded-md",onClick:T(s().mark((function t(){var n,r,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==o){t.next=3;break}return alert("Deploy the EIP191 contract first!"),t.abrupt("return");case 3:return t.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:return n=t.sent,r=new N.eth.Contract(e,o),t.next=9,r.methods.isValid(n[0],C,w,k.from(m.slice(2),"hex"),k.from(b.slice(2),"hex")).call({from:n[0]});case 9:a=t.sent,console.log(a),_(!0===a?"Signature is correct":"Signature is not correct!");case 12:case"end":return t.stop()}}),t)}))),children:"Validate using contract"}),(0,r.jsxs)("p",{children:["Response = ",S]})]})};function P(){return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"w-full text-center",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold",children:"EIP191 Demo"}),(0,r.jsx)(v,{}),(0,r.jsx)(C,{})]})})}},46601:function(){},89214:function(){},71922:function(){},2363:function(){},27790:function(){},52361:function(){},94616:function(){},6567:function(){}},function(e){e.O(0,[482,714,524,774,888,179],(function(){return t=45301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);