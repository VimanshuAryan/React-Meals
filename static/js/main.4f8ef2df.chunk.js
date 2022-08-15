(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__1mvqw",control:"Checkout_control__3VIMq",actions:"Checkout_actions__20QCH",submit:"Checkout_submit__3JOa2",invalid:"Checkout_invalid__1FaSN"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1Tg18",total:"Cart_total__2rNtT",actions:"Cart_actions__8k_Da","button--alt":"Cart_button--alt__1d2zV",button:"Cart_button__16Izz"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1ug21",summary:"CartItem_summary__1umu_",price:"CartItem_price__3TUEJ",amount:"CartItem_amount__1clxD",actions:"CartItem_actions__3MhI4"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__2h_Ex",icon:"HeaderCartButton_icon__3dzgi",badge:"HeaderCartButton_badge__3cYC7",bump:"HeaderCartButton_bump__2bVQS"}},,,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__1H4xe","meals-appear":"AvailableMeals_meals-appear__1DhFs",MealsLoading:"AvailableMeals_MealsLoading__26Z5H",MealsError:"AvailableMeals_MealsError__23Yh-"}},function(e,t,n){e.exports={meal:"MealItem_meal__ASVv4",description:"MealItem_description__3imo_",price:"MealItem_price__30V7Q"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1sHk5",modal:"Modal_modal__1TqXo","slide-down":"Modal_slide-down__4Kx8Q"}},function(e,t,n){e.exports={header:"Header_header__1YADu","main-image":"Header_main-image__3E6bj"}},,,,function(e,t,n){e.exports={card:"Card_card__3G8U2"}},function(e,t,n){e.exports={input:"Input_input__J7CYr"}},function(e,t,n){e.exports={form:"MealItemForm_form__1QKnv"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__3ikhz"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(19),c=n.n(a),r=(n(31),n(2)),s=n(1),i=n.n(s),o=n(16),l=n.n(o),u=n.p+"static/media/meals.2971f633.jpg",d=n(9),j=n.n(d),m=n(0),b=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},O=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),h=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useContext)(O).items;Object(s.useEffect)((function(){if(0!==i.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[i]);var o=i.reduce((function(e,t){return e+t.amount}),0),l="".concat(j.a.button," ").concat(a&&j.a.bump);return Object(m.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(m.jsx)("span",{className:j.a.icon,children:Object(m.jsx)(b,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:j.a.badge,children:o})]})},x=function(e){return Object(m.jsxs)(i.a.Fragment,{children:[Object(m.jsxs)("header",{className:l.a.header,children:[Object(m.jsx)("h1",{children:"ReactMeals"}),Object(m.jsx)(h,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:l.a["main-image"],children:Object(m.jsx)("img",{src:u,alt:"ReactMeals"})})]})},p=n(6),f=n(12),_=n(13),v=n.n(_),C=n(20),N=n.n(C),y=function(e){return Object(m.jsx)("div",{className:N.a.card,children:e.children})},g=n(14),k=n.n(g),A=n(4),M=n(21),I=n.n(M),S=i.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:I.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(A.a)({ref:t},e.input))]})})),w=n(22),F=n.n(w),E=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)();return Object(m.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=+n;n.trim().length<1||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(m.jsx)(S,{ref:i,label:"Amount",input:{id:"amount "+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"+ Add"}),!a&&Object(m.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},H=function(e){var t=Object(s.useContext)(O),n="\u20b9".concat(e.price.toFixed(0));return Object(m.jsxs)("li",{className:k.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{className:k.a.description,children:e.description}),Object(m.jsx)("div",{className:k.a.price,children:n})]}),Object(m.jsx)("div",{children:Object(m.jsx)(E,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},R=function(e){var t=Object(s.useState)([]),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useState)(!0),o=Object(r.a)(i,2),l=o[0],u=o[1],d=Object(s.useState)(null),j=Object(r.a)(d,2),b=j[0],O=j[1];if(Object(s.useEffect)((function(){var e=function(){var e=Object(f.a)(Object(p.a)().mark((function e(){var t,n,a,r;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-c6096-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error("Something went wrong!");case 8:for(r in a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),O(e.message)}))}),[]),l)return Object(m.jsx)("section",{className:v.a.MealsLoading,children:Object(m.jsx)("p",{children:"Loading..."})});if(b)return Object(m.jsx)("section",{className:v.a.MealsError,children:Object(m.jsx)("p",{children:b})});var h=a.map((function(e){return Object(m.jsx)(H,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(m.jsx)("section",{className:v.a.meals,children:Object(m.jsx)(y,{children:Object(m.jsx)("ul",{children:h})})})},D=n(23),P=n.n(D),T=function(){return Object(m.jsxs)("section",{className:P.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},z=function(e){return Object(m.jsxs)(i.a.Fragment,{children:[Object(m.jsx)(T,{}),Object(m.jsx)(R,{})]})},V=n(15),B=n.n(V),Y=n(10),J=n.n(Y),L=function(e){return Object(m.jsx)("div",{className:B.a.backdrop,onClick:e.onClose})},Q=function(e){return Object(m.jsx)("div",{className:B.a.modal,children:Object(m.jsx)("div",{className:B.a.content,children:e.children})})},q=document.getElementById("overlays"),K=function(e){return Object(m.jsxs)(i.a.Fragment,{children:[J.a.createPortal(Object(m.jsx)(L,{onClose:e.onClose}),q),J.a.createPortal(Object(m.jsx)(Q,{children:e.children}),q)]})},U=n(5),G=n.n(U),X=n(7),Z=n.n(X),W=function(e){var t="\u20b9".concat(e.price.toFixed(0));return Object(m.jsxs)("li",{className:Z.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:Z.a.summary,children:[Object(m.jsx)("span",{className:Z.a.price,children:t}),Object(m.jsxs)("span",{className:Z.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:Z.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},$=n(3),ee=n.n($),te=function(e){return""===e.trim()},ne=function(e){var t=Object(s.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)(),o=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)();return Object(m.jsxs)("form",{className:ee.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=o.current.value,r=l.current.value,s=u.current.value,d=!te(n),j=!te(a),m=!te(r)&&!(6!==r.trim().length),b=!te(s);c({name:d,street:a,city:b,postalCode:m}),d&&j&&m&&b&&e.onConfirm({name:n,street:a,postalCode:r,city:s})},children:[Object(m.jsxs)("div",{className:"".concat(ee.a.control," ").concat(a.name?"":ee.a.invalid),children:[Object(m.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(m.jsx)("input",{type:"text",id:"name",ref:i}),!a.name&&Object(m.jsx)("p",{children:"Please enter a valid name!"})]}),Object(m.jsxs)("div",{className:"".concat(ee.a.control," ").concat(a.street?"":ee.a.invalid),children:[Object(m.jsx)("label",{htmlFor:"street",children:"Street"}),Object(m.jsx)("input",{type:"text",id:"street",ref:o}),!a.street&&Object(m.jsx)("p",{children:"Please enter a valid street!"})]}),Object(m.jsxs)("div",{className:"".concat(ee.a.control," ").concat(a.postalCode?"":ee.a.invalid),children:[Object(m.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(m.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postalCode&&Object(m.jsx)("p",{children:"Please enter a valid Postal Code!"})]}),Object(m.jsxs)("div",{className:"".concat(ee.a.control," ").concat(a.city?"":ee.a.invalid),children:[Object(m.jsx)("label",{htmlFor:"city",children:"City"}),Object(m.jsx)("input",{type:"text",id:"city",ref:u}),!a.city&&Object(m.jsx)("p",{children:"Please enter a valid city!"})]}),Object(m.jsxs)("div",{className:ee.a.actions,children:[Object(m.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(m.jsx)("button",{className:ee.a.submit,children:"Confirm"})]})]})},ae=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(s.useState)(!1),l=Object(r.a)(o,2),u=l[0],d=l[1],j=Object(s.useState)(!1),b=Object(r.a)(j,2),h=b[0],x=b[1],_=Object(s.useContext)(O),v="\u20b9".concat(_.totalAmount.toFixed(0)),C=_.items.length>0,N=function(e){_.removeItem(e)},y=function(e){_.addItem(Object(A.a)(Object(A.a)({},e),{},{amount:1}))},g=Object(m.jsx)("ul",{className:G.a["cart-items"],children:_.items.map((function(e){return Object(m.jsx)(W,{name:e.name,amount:e.amount,price:e.price,onRemove:N.bind(null,e.id),onAdd:y.bind(null,e)},e.id)}))}),k=function(){var e=Object(f.a)(Object(p.a)().mark((function e(t){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,fetch("https://react-http-c6096-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:_.items})});case 3:c(!1),d(!0),_.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=Object(m.jsxs)("div",{className:G.a.actions,children:[Object(m.jsx)("button",{className:G.a["button--alt"],onClick:e.onClose,children:"Close"}),C&&Object(m.jsx)("button",{className:G.a.button,onClick:function(){x(!0)},children:"Order"})]}),I=Object(m.jsxs)(i.a.Fragment,{children:[g,Object(m.jsxs)("div",{className:G.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:v})]}),h&&Object(m.jsx)(ne,{onConfirm:k,onCancel:e.onClose}),!h&&M]}),S=Object(m.jsx)("p",{children:"Sending Order Data ..."}),w=Object(m.jsxs)(i.a.Fragment,{children:[Object(m.jsx)("p",{children:"Successfully sent the order !"}),Object(m.jsx)("div",{className:G.a.actions,children:Object(m.jsx)("button",{className:G.a.button,onClick:e.onClose,children:"Close"})})]});return Object(m.jsxs)(K,{onClose:e.onClose,children:[!a&&!u&&I,a&&S,u&&!a&&w]})},ce=n(17),re={items:[],totalAmount:0},se=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var s=Object(A.a)(Object(A.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ce.a)(e.items))[c]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(A.a)(Object(A.a)({},l),{},{amount:l.amount-1});(i=Object(ce.a)(e.items))[o]=d}return{items:i,totalAmount:u}}return t.type,re},ie=function(e){var t=Object(s.useReducer)(se,re),n=Object(r.a)(t,2),a=n[0],c=n[1],i={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(m.jsx)(O.Provider,{value:i,children:e.children})};var oe=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(ie,{children:[n&&Object(m.jsx)(ae,{onClose:function(){a(!1)}}),Object(m.jsx)(x,{onShowCart:function(){a(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(z,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(oe,{}))}],[[33,1,2]]]);
//# sourceMappingURL=main.4f8ef2df.chunk.js.map