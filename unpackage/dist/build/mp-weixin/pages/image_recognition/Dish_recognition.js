(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/image_recognition/Dish_recognition"],{1582:function(n,t,e){"use strict";var a=e("5096"),o=e.n(a);o.a},"3ce8":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return o})},5096:function(n,t,e){},"80a1":function(n,t,e){"use strict";e.r(t);var a=e("3ce8"),o=e("de02");for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);e("1582");var i=e("2877"),r=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports},be84:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return e.e("components/cpimg").then(e.bind(null,"2af5"))},o={data:function(){return{src:"",data:Array}},methods:{addPhoto:function(){var n=this;n.$refs.cpimg._changImg()},cpimgOk:function(t){var e=this,a=this;a.src=t,console.log(t),n.request({url:"https://www.qinendong.com/api/image_recognition/Dish_recognition",data:{id:t.replace("data:image/png;base64,","").replace("data:image/jpeg;base64,","")},method:"POST",header:{"Content-type":"application/x-www-form-urlencoded"},success:function(n){console.log(n.data.data),e.data=JSON.parse(n.data.data),console.log(e.data)}})},cpimgErr:function(n){console.log(n)}},components:{cpimg:a}};t.default=o}).call(this,e("543d")["default"])},de02:function(n,t,e){"use strict";e.r(t);var a=e("be84"),o=e.n(a);for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);t["default"]=o.a}},[["0fa1","common/runtime","common/vendor"]]]);