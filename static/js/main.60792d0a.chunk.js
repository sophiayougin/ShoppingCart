(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=(a(13),a(5)),u=a(1),l=a(2),p=a(4),s=a(3),d=(a(14),function(t){Object(p.a)(a,t);var e=Object(s.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Shopping Cart"))}}]),a}(r.a.Component)),h=[{product:"Whirlpool Refrigerator",price:12500,quantity:7,productId:100},{product:"Moto G Play 16GB",price:9800,quantity:4,productId:101},{product:"WD External Hard Disk 1 TB",price:5500,quantity:10,productId:102},{product:"Apple iPhone 7 64 GB",price:65500,quantity:5,productId:103}],m=function(t){Object(p.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).addToCart=function(){t.props.onQuantityChange(t.props.productId,t.props.quantity-1),t.props.onAddingCart(t.props.productId)},t}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"items"},r.a.createElement("div",{className:"product"},r.a.createElement("h2",null,this.props.product),r.a.createElement("p",null,"Price:Rs.",this.props.price),r.a.createElement("p",null,"Qantity:",this.props.quantity),r.a.createElement("hr",null)),r.a.createElement("div",{className:"button-class"},r.a.createElement("button",{className:"cart-button",disabled:0===this.props.quantity,onClick:this.addToCart},"Add to cart")))}}]),a}(r.a.Component),f=function(t){Object(p.a)(a,t);var e=Object(s.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=this.props.quantities;return r.a.createElement("div",null,h.map((function(a){return r.a.createElement(m,{key:a.productId,product:a.product,price:a.price,quantity:e[a.productId],onQuantityChange:t.props.onQuantityChange,onAddingCart:t.props.onAddingCart,productId:a.productId})})),r.a.createElement("button",{className:"checkout-button",onClick:this.props.onCheckOut},"Checkout"))}}]),a}(r.a.Component),v=0,b=function(t){Object(p.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).printingCart=function(){var e=t.props.cart,a=h.filter((function(t){return e.hasOwnProperty(t.productId)&&e[t.productId]>0}));return a.map((function(t){v+=t.price*e[t.productId]})),r.a.createElement("div",null,r.a.createElement("table",{className:"table-class"},r.a.createElement("tr",null,r.a.createElement("th",null,"Product"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price")),a.map((function(t){return r.a.createElement("tr",null,r.a.createElement("th",null,t.product),r.a.createElement("th",null,e[t.productId]),r.a.createElement("th",null,t.price*e[t.productId]))}))))},t}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"your-cart"},"Your Cart"),this.printingCart(),r.a.createElement("h3",{className:"total"},"Total: ",v))}}]),a}(r.a.Component),y=function(t){Object(p.a)(a,t);var e=Object(s.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props.cart;return r.a.createElement("div",null,r.a.createElement(b,{cart:t}))}}]),a}(r.a.Component),E=function(t){Object(p.a)(a,t);var e=Object(s.a)(a);function a(t){var n;Object(u.a)(this,a),(n=e.call(this,t)).quantityChange=function(t,e){var a=Object(i.a)({},n.state.quantities);a[t]=e,n.setState({quantities:a})},n.addingToCart=function(t){var e=Object(i.a)({},n.state.cart);e[t]=e[t]+1,n.setState({cart:e})},n.checkOut=function(){n.setState({page:"checkout"})};for(var r={},c={},o=0;o<h.length;o++){var l=h[o];r[l.productId]=l.quantity,c[l.productId]=0}return n.state={quantities:r,cart:c,page:"list"},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null),"list"===this.state.page?r.a.createElement(f,{quantities:this.state.quantities,onQuantityChange:this.quantityChange,onAddingCart:this.addingToCart,onCheckOut:this.checkOut}):r.a.createElement(y,{cart:this.state.cart}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,a){t.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.60792d0a.chunk.js.map