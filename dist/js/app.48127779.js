(function(t){function r(r){for(var e,o,c=r[0],s=r[1],u=r[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(t[e]=s[e]);l&&l(r);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,r=0;r<i.length;r++){for(var a=i[r],e=!0,c=1;c<a.length;c++){var s=a[c];0!==n[s]&&(e=!1)}e&&(i.splice(r--,1),t=o(o.s=a[0]))}return t}var e={},n={app:0},i=[];function o(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=e,o.d=function(t,r,a){o.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,r){if(1&r&&(t=o(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var e in t)o.d(a,e,function(r){return t[r]}.bind(null,e));return a},o.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(r,"a",r),r},o.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=r,c=c.slice();for(var u=0;u<c.length;u++)r(c[u]);var l=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,r,a){t.exports=a("56d7")},"034f":function(t,r,a){"use strict";var e=a("85ec"),n=a.n(e);n.a},"0600":function(t,r,a){"use strict";var e=a("580b"),n=a.n(e);n.a},"06d6":function(t,r,a){},1840:function(t,r,a){t.exports=a.p+"img/shoes.3fb384e1.jpg"},"1cf1":function(t,r,a){},"283b":function(t,r,a){},"3e39":function(t,r,a){"use strict";var e=a("6747"),n=a.n(e);n.a},"47ab":function(t,r,a){"use strict";var e=a("c6c2"),n=a.n(e);n.a},"56d7":function(t,r,a){"use strict";a.r(r);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),n=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{attrs:{id:"app"}},[a("Nav",{attrs:{cartCount:t.cart.length},on:{openCart:t.openCart}}),t.isCartOpen?a("Cart",{attrs:{cart:t.cart,total:t.totalProducts},on:{addToCart:t.addToCart,removeFromCart:t.removeFromCart}}):a("Products",{attrs:{products:t.products},on:{addToCart:t.addToCart,removeFromCart:t.removeFromCart}}),a("Footer")],1)},i=[],o=(a("4de4"),a("7db0"),a("4160"),a("45fc"),a("b0c0"),a("159b"),function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"nav"},[a("div",{staticClass:"inner-wrapper"},[a("h1",{staticClass:"logo"},[t._v("Shopping Cart")]),a("h1",{staticClass:"cart",on:{click:t.openCart}},[t._v(" CART "),a("div",{staticClass:"product-count"},[t._v(" "+t._s(t.cartCount)+" ")])])])])}),c=[],s=(a("a9e3"),{name:"Nav",props:{cartCount:{type:Number,required:!0}},created:function(){console.log(this.cartCount)},methods:{openCart:function(){this.$emit("openCart")}}}),u=s,l=(a("74f7"),a("2877")),d=Object(l["a"])(u,o,c,!1,null,"746285a3",null),p=d.exports,f=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"root-container"},[a("ul",{staticClass:"products"},t._l(t.products,(function(r){return a("li",{key:r.id,staticClass:"product",class:{"no-stock":!r.isAvailable}},[a("Thumbnail",{attrs:{price:r.price,thumbnailPath:r.thumbnailPath}}),a("Details",{attrs:{name:r.name}}),a("Availability",{attrs:{isAvailable:r.isAvailable,quantity:r.quantity}}),a("AddToCartBtn",{attrs:{isAvailable:r.isAvailable,productId:r.id},on:{addToCart:t.addToCart,removeFromCart:t.removeFromCart}})],1)})),0)])},v=[],m=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"image-wrapper"},[a("img",{staticClass:"product-image",attrs:{src:t.thumbnailPath,alt:""}}),a("p",{staticClass:"product-price"},[t._v(t._s("$ "+t.price.toFixed(2)))])])},h=[],C={name:"Thumbnail",props:{price:{type:Number,required:!0},thumbnailPath:{type:String,required:!0}}},b=C,y=(a("e93e"),Object(l["a"])(b,m,h,!1,null,"714245c0",null)),_=y.exports,T=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"product-details"},[a("h2",{staticClass:"product-name"},[t._v(t._s(t.name))])])},w=[],g={name:"Details",props:{name:{type:String,required:!0}}},O=g,A=(a("47ab"),Object(l["a"])(O,T,w,!1,null,"36b587cc",null)),P=A.exports,q=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",[t.isAvailable?a("div",{staticClass:"product-availability"},[a("p",[t._v(t._s(t.quantity+" items left"))])]):a("div",{staticClass:"product-availability"},[a("p",{staticClass:"out-of-stock"},[t._v("OUT OF STOCK")])])])},x=[],F={name:"Availability",props:{isAvailable:{type:Boolean,required:!0},quantity:{type:Number,required:!0}}},j=F,$=(a("0600"),Object(l["a"])(j,q,x,!1,null,"00875f24",null)),E=$.exports,N=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{ref:"addToCart",staticClass:"add-to-cart-btn",class:{"justify-between":t.showBtn}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showBtn,expression:"showBtn"}],ref:"minus",staticClass:"remove-product",on:{click:function(r){return t.removeFromCart(t.productId)}}},[t._v(" - ")]),t.isAvailable?a("div",{staticClass:"add-to-cart-class",on:{click:function(r){return t.showCart(t.isAvailable)}}},[t._v(" ADD TO CART ")]):a("div",[t._v("--")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showBtn,expression:"showBtn"}],ref:"plus",staticClass:"add-product",on:{click:function(r){return t.addToCart(t.productId)}}},[t._v(" + ")])])},k=[],B={name:"AddToCartBtn",props:{isAvailable:{type:Boolean,required:!0},productId:{type:Number,required:!0}},data:function(){return{showBtn:!1}},methods:{addToCart:function(t){return this.$emit("addToCart",t)},removeFromCart:function(t){return this.$emit("removeFromCart",t)},showCart:function(t){t&&(this.showBtn=!this.showBtn)}}},S=B,D=(a("c6ac"),Object(l["a"])(S,N,k,!1,null,"7c4cb8fc",null)),I=D.exports,M={name:"Products",components:{Thumbnail:_,Details:P,Availability:E,AddToCartBtn:I},props:{products:{type:Array,required:!0}},methods:{addToCart:function(t){return this.$emit("addToCart",t)},removeFromCart:function(t){return this.$emit("removeFromCart",t)}}},R=M,H=(a("decd"),Object(l["a"])(R,f,v,!1,null,null,null)),J=H.exports,K=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"root-container"},[a("div",{staticClass:"total-wrapper"},[a("h2",[t._v("Total: "+t._s("$ "+t.total.toFixed(2)))])]),a("ul",{staticClass:"cart-products"},t._l(t.cart,(function(r){return a("li",{key:r.id,staticClass:"cart-product"},[a("div",{staticClass:"cart-image-wrapper"},[a("img",{staticClass:"cart-image",attrs:{src:r.thumbnailPath,alt:"product"}})]),a("div",{staticClass:"cart-product-details"},[a("div",{staticClass:"cart-product-name"},[a("h2",[t._v(t._s(r.productName))])]),a("div",[a("div",{staticClass:"cart-product-price"},[a("p",[t._v(t._s("$ "+r.price.toFixed(2)))])]),a("div",{staticClass:"cart-product-count"},[a("div",{staticClass:"decrease-count",on:{click:function(a){return t.removeFromCart(r.id)}}},[t._v(" - ")]),a("div",{staticClass:"cart-count"},[t._v(t._s(r.count))]),a("div",{staticClass:"increase-count",on:{click:function(a){return t.addToCart(r.id)}}},[t._v("+")])])])])])})),0)])},U=[],z={name:"Cart",props:{cart:{type:Array,required:!0},total:{type:Number,required:!0}},methods:{addToCart:function(t){return this.$emit("addToCart",t)},removeFromCart:function(t){return this.$emit("removeFromCart",t)}}},G=z,L=(a("6017"),Object(l["a"])(G,K,U,!1,null,"02bbcef8",null)),Q=L.exports,V=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"root-container"},[t._v(" FOOTER ")])},W=[],X={name:"Footer"},Y=X,Z=(a("3e39"),Object(l["a"])(Y,V,W,!1,null,"454e313c",null)),tt=Z.exports,rt={name:"App",components:{Nav:p,Products:J,Footer:tt,Cart:Q},mounted:function(){console.log(this.totalProducts)},data:function(){return{products:[{id:0,name:"T-shirt",price:350,isAvailable:!1,quantity:0,thumbnailPath:a("aec7")},{id:1,name:"Shoe",price:899,isAvailable:!0,quantity:4,thumbnailPath:a("1840")},{id:2,name:"Headphone",price:500,isAvailable:!0,quantity:5,thumbnailPath:a("a688")}],isCartOpen:!1,cart:[{id:2,productName:"Headphone",price:500,count:1,thumbnailPath:a("a688")},{id:0,productName:"T-shirt",price:700,count:2,thumbnailPath:a("aec7")}]}},methods:{openCart:function(){this.isCartOpen=!this.isCartOpen},addToCart:function(t){var r=this,a=null;this.products.forEach((function(e){if(e.id===t){if(0===e.quantity)return;if(e.quantity--,0===e.quantity&&(e.isAvailable=!1),a=r.products.find((function(r){return r.id===t})),r.cart.some((function(r){return r.id===t})))return void r.cart.forEach((function(r){r.id===t&&(r.count++,r.price+=a.price)}));r.cart.push({id:a.id,productName:a.name,price:a.price,count:1,thumbnailPath:a.thumbnailPath})}}))},removeFromCart:function(t){var r=this,a=null,e=this.cart.find((function(r){return r.id===t}));"undefined"!==typeof e&&(1===e.count?(a=this.cart.filter((function(r){return r.id!==t})),this.products.forEach((function(r){r.id===t&&r.quantity++})),this.cart=a):(this.products.forEach((function(r){r.id===t&&(r.quantity++,r.quantity>0&&(r.isAvailable=!0))})),this.cart.forEach((function(a){var e=r.products.find((function(r){return r.id===t}));a.id===t&&(a.count--,a.price-=e.price)}))))}},computed:{totalProducts:function(){var t=0;return this.cart.forEach((function(r){t+=r.price})),t}}},at=rt,et=(a("034f"),Object(l["a"])(at,n,i,!1,null,null,null)),nt=et.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(nt)}}).$mount("#app")},"580b":function(t,r,a){},6017:function(t,r,a){"use strict";var e=a("bfb1"),n=a.n(e);n.a},6747:function(t,r,a){},"74ce":function(t,r,a){},"74f7":function(t,r,a){"use strict";var e=a("06d6"),n=a.n(e);n.a},"85ec":function(t,r,a){},a688:function(t,r,a){t.exports=a.p+"img/headphone.774e3ba9.jpg"},aec7:function(t,r,a){t.exports=a.p+"img/shirt.aee6d6e0.jpg"},bfb1:function(t,r,a){},c6ac:function(t,r,a){"use strict";var e=a("1cf1"),n=a.n(e);n.a},c6c2:function(t,r,a){},decd:function(t,r,a){"use strict";var e=a("74ce"),n=a.n(e);n.a},e93e:function(t,r,a){"use strict";var e=a("283b"),n=a.n(e);n.a}});
//# sourceMappingURL=app.48127779.js.map