webpackJsonp([1],{111:function(t,e){},112:function(t,e){},113:function(t,e){},114:function(t,e,n){function a(t){n(113)}var c=n(30)(n(65),n(118),a,null,null);t.exports=c.exports},115:function(t,e,n){function a(t){n(112)}var c=n(30)(n(66),n(117),a,null,null);t.exports=c.exports},116:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},117:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("dashboard",{attrs:{camp:t.choose},on:{"on-reset":t.reset,"on-undo":t.undo}}),t._v(" "),n("div",{staticClass:"board"},t._l(t.mtx,function(e,a){return n("div",{staticClass:"row"},t._l(e,function(e,c){return n("span",{staticClass:"col",class:{blue:e&&"B"===e[2],red:e&&"A"===e[2],active:t.chooseItem&&t.chooseItem===e},on:{click:function(n){t.pick(e,a,c)}}},[t._v("\n        "+t._s(e?t.chess.get(e).name:"")+"\n      ")])}))}))],1)},staticRenderFns:[]}},118:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard"},[n("div",{staticClass:"start-btn",on:{click:function(e){t.$emit("on-reset")}}},[t._v("START / RESET")]),t._v(" "),n("div",{staticClass:"undo-btn",on:{click:function(e){t.$emit("on-undo")}}},[t._v("UNDO")]),t._v(" "),n("div",{staticClass:"camp"},[n("div",{staticClass:"switch",class:"B"===t.camp?"active":""},[t._v(t._s("B"===t.camp?"BLUE":"RED"))])])])},staticRenderFns:[]}},32:function(t,e,n){"use strict";function a(t,e){return Array(Math.abs(e-t)+1).fill().map(function(n,a){return Math.min(t++,++e)})}e.a=a},51:function(t,e,n){"use strict";var a=n(31),c=n(119),s=n(115),o=n.n(s);a.a.use(c.a),e.a=new c.a({routes:[{path:"/",name:"Hello",component:o.a}]})},52:function(t,e,n){function a(t){n(111)}var c=n(30)(n(64),n(116),a,null,null);t.exports=c.exports},53:function(t,e,n){"use strict";var a=n(35),c=n.n(a),s=n(3),o=n.n(s),r=n(32);e.a=function(t,e){function a(t,a,c){var s=n.i(r.a)(function(){return t.indexOf(e[c])>0?t[t.indexOf(e[c])-1]+1:0}(),function(){return t.indexOf(e[c])<t.length-1?t[t.indexOf(e[c])+1]-1:a-1}());return t[t.indexOf(e[c])+2]&&s.push(t[t.indexOf(e[c])+2]),t[t.indexOf(e[c])-2]&&s.push(t[t.indexOf(e[c])-2]),s}var s=[];t.forEach(function(t,n){t[e.x]&&s.push(n)});var i=[];t[e.y].forEach(function(t,e){t&&i.push(e)});var u=new o.a([].concat(c()(a(i,t[e.y].length,"x").map(function(t){return t+"_"+e.y})),c()(a(s,t.length,"y").map(function(t){return e.x+"_"+t}))));return u.delete(e.x+"_"+e.y),u}},54:function(t,e,n){"use strict";var a=n(3),c=n.n(a);e.a=function(t,e){function n(n,c){a.has(e.x+2*n+"_"+(e.y+2*c))&&!t[e.y+c][e.x+n]&&s.add(e.x+2*n+"_"+(e.y+2*c))}var a=new c.a(["0_2","2_0","2_4","4_2","6_0","8_2","6_4","0_7","2_9","2_5","4_7","6_9","8_7","6_5"]),s=new c.a;return n(1,1),n(1,-1),n(-1,1),n(-1,-1),s}},55:function(t,e,n){"use strict";var a=n(3),c=n.n(a);e.a=function(t,e){function n(t){a.has(t)&&s.add(t)}var a=new c.a(["3_0","4_0","5_0","3_1","4_1","5_1","3_2","4_2","5_3","3_7","4_7","5_7","3_8","4_8","5_8","3_9","4_9","5_9"]),s=new c.a;return n(e.x+"_"+(e.y+1)),n(e.x+"_"+(e.y-1)),n(e.x+1+"_"+e.y),n(e.x-1+"_"+e.y),console.log(s),s}},56:function(t,e,n){"use strict";var a=n(3),c=n.n(a);e.a=function(t,e){function n(n,c){n>c?!t[e.y][e.x+n/2]&&a.add(e.x+n+"_"+(e.y+c)):t[e.y+c/2]&&!t[e.y+c/2][e.x+n]&&a.add(e.x+n+"_"+(e.y+c))}var a=new c.a;return console.log(e),n(1,2),n(1,-2),n(-1,2),n(-1,-2),n(2,1),n(2,-1),n(-2,1),n(-2,-1),console.log(a),a}},57:function(t,e,n){"use strict";var a=n(3),c=n.n(a);e.a=function(t,e){function n(t){a.has(t)&&s.add(t)}var a=new c.a(["3_0","5_0","4_1","3_2","5_2","3_7","5_7","4_8","3_9","5_9"]),s=new c.a;return n(e.x+1+"_"+(e.y+1)),n(e.x-1+"_"+(e.y+1)),n(e.x-1+"_"+(e.y-1)),n(e.x+1+"_"+(e.y-1)),s}},58:function(t,e,n){"use strict";var a=n(35),c=n.n(a),s=n(3),o=n.n(s),r=n(32);e.a=function(t,e){function a(t,n){return t.reduce(function(a,c,s){return s<n?c?[s,a[1]]:a:s>e.x&&a[1]===t.length-1&&c?[a[0],s]:a},[0,t.length-1])}var s=a(t[e.y],e.x),i=a(t.map(function(t,n){return t[e.x]&&t[e.x]}),e.y),u=new o.a([].concat(c()(n.i(r.a)(s[0],s[1]).map(function(t){return t+"_"+e.y})),c()(n.i(r.a)(i[0],i[1]).map(function(t){return e.x+"_"+t}))));return u.delete(e.x+"_"+e.y),console.log(u),u}},59:function(t,e,n){"use strict";var a=n(3),c=n.n(a);e.a=function(t,e){var n=new c.a;switch(console.log("Soldier"),e.camp){case"A":return e.y<5?n.add(e.x+"_"+(e.y+1)):5===e.y?(n.add(e.x+"_"+(e.y+1)),n.add(e.x+1+"_"+e.y),n.add(e.x-1+"_"+e.y)):(n.add(e.x+"_"+(e.y-1)),n.add(e.x+"_"+(e.y+1)),n.add(e.x+1+"_"+e.y),n.add(e.x-1+"_"+e.y)),console.log(n),n;case"B":return e.y>4?n.add(e.x+"_"+(e.y-1)):4===e.y?(n.add(e.x+"_"+(e.y-1)),n.add(e.x+1+"_"+e.y),n.add(e.x-1+"_"+e.y)):(n.add(e.x+"_"+(e.y-1)),n.add(e.x+"_"+(e.y+1)),n.add(e.x+1+"_"+e.y),n.add(e.x-1+"_"+e.y)),console.log(n),n}}},60:function(t,e,n){"use strict";var a=n(34),c=n.n(a),s=function t(){return c()(this,t),[["R_A_1",{x:0,y:0,type:"R",name:"車",camp:"A"}],["R_A_2",{x:8,y:0,type:"R",name:"車",camp:"A"}],["H_A_1",{x:1,y:0,type:"H",name:"马",camp:"A"}],["H_A_2",{x:7,y:0,type:"H",name:"马",camp:"A"}],["E_A_1",{x:2,y:0,type:"E",name:"相",camp:"A"}],["E_A_2",{x:6,y:0,type:"E",name:"相",camp:"A"}],["M_A_1",{x:3,y:0,type:"M",name:"士",camp:"A"}],["M_A_2",{x:5,y:0,type:"M",name:"士",camp:"A"}],["C_A_1",{x:1,y:2,type:"C",name:"炮",camp:"A"}],["C_A_2",{x:7,y:2,type:"C",name:"炮",camp:"A"}],["S_A_1",{x:0,y:3,type:"S",name:"兵",camp:"A"}],["S_A_2",{x:2,y:3,type:"S",name:"兵",camp:"A"}],["S_A_3",{x:4,y:3,type:"S",name:"兵",camp:"A"}],["S_A_4",{x:6,y:3,type:"S",name:"兵",camp:"A"}],["S_A_5",{x:8,y:3,type:"A",name:"兵",camp:"A"}],["G_A_1",{x:4,y:0,type:"G",name:"帅",camp:"A"}],["R_B_1",{x:0,y:9,type:"R",name:"車",camp:"B"}],["R_B_2",{x:8,y:9,type:"R",name:"車",camp:"B"}],["H_B_1",{x:1,y:9,type:"H",name:"马",camp:"B"}],["H_B_2",{x:7,y:9,type:"H",name:"马",camp:"B"}],["E_B_1",{x:2,y:9,type:"E",name:"相",camp:"B"}],["E_B_2",{x:6,y:9,type:"E",name:"相",camp:"B"}],["M_B_1",{x:3,y:9,type:"M",name:"士",camp:"B"}],["M_B_2",{x:5,y:9,type:"M",name:"士",camp:"B"}],["C_B_1",{x:1,y:7,type:"C",name:"炮",camp:"B"}],["C_B_2",{x:7,y:7,type:"C",name:"炮",camp:"B"}],["S_B_1",{x:0,y:6,type:"S",name:"兵",camp:"B"}],["S_B_2",{x:2,y:6,type:"S",name:"兵",camp:"B"}],["S_B_3",{x:4,y:6,type:"S",name:"兵",camp:"B"}],["S_B_4",{x:6,y:6,type:"S",name:"兵",camp:"B"}],["S_B_5",{x:8,y:6,type:"S",name:"兵",camp:"B"}],["G_B_1",{x:4,y:9,type:"G",name:"将",camp:"B"}]]};e.a=s},61:function(t,e,n){"use strict";var a=n(3),c=n.n(a),s=n(34),o=n.n(s),r=n(71),i=n.n(r),u=n(58),_=n(53),y=n(54),l=n(56),p=n(59),m=n(55),h=n(57),f=function(){function t(e){o()(this,t),this.matrix=e}return i()(t,[{key:"from",value:function(t){return this.rule=this._getRule(t)(this.matrix,t),this}},{key:"to",value:function(t){return!!this.rule.has(t.x+"_"+t.y)}},{key:"_getRule",value:function(t){switch(t.type){case"R":return u.a;case"H":return l.a;case"E":return y.a;case"M":return h.a;case"G":return m.a;case"S":return p.a;case"C":return _.a;default:return new c.a}}}]),t}();e.a=f},62:function(t,e,n){"use strict";e.a=function(t){var e=[];return function n(){var a;if((a=e).push.apply(a,arguments),2===e.length){var c=e;return e=[],t(c)}return n}}},63:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(31),c=n(52),s=n.n(c),o=n(51);a.a.config.productionTip=!1,new a.a({el:"#app",router:o.a,template:"<App/>",components:{App:s.a}})},64:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},65:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{camp:String}}},66:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(33),c=n.n(a),s=n(72),o=n.n(s),r=n(69),i=n.n(r),u=n(114),_=n.n(u),y=n(62),l=n(60),p=n(61);e.default={components:{dashboard:_.a},data:function(){return{chess:{},mtx:[],choose:"A",chooseItem:null}},mounted:function(){this.reset()},methods:{undo:function(){console.log("undo")},reset:function(){console.log("reset"),this.choose="A",this.chooseItem=null,this.chess=new i.a((new l.a).map(function(t){return t})),this.renderIt()},renderIt:function(){console.log(this.chess),this.mtx=Array(10).fill().map(function(t,e){return Array(9).fill(null)});var t=!0,e=!1,n=void 0;try{for(var a,s=c()(this.chess);!(t=(a=s.next()).done);t=!0){var r=a.value,i=o()(r,2),u=i[0],_=i[1];null!==_.x&&(this.mtx[_.y][_.x]=u)}}catch(t){e=!0,n=t}finally{try{!t&&s.return&&s.return()}finally{if(e)throw n}}console.log(this.mtx)},pck:function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];n.i(y.a)(function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return[].concat(e)})},pick:function(t,e,n){console.log(this.pck(t)),this.chooseItem?t?t===this.chooseItem?(console.log("chooseSelf"),this.chooseItem=null):this.chess.get(t).camp===this.choose?(console.log("chooseFriend"),this.chooseItem=t):(console.log("chooseOther"),this.setItem(this.chess.get(this.chooseItem),{x:n,y:e})):this.setItem(this.chess.get(this.chooseItem),{x:n,y:e}):t&&this.chess.get(t).camp===this.choose&&(this.chooseItem=t)},setItem:function(t,e){console.log("setItem"),new p.a(this.mtx).from(t).to(e)&&this.jump(t,e)},jump:function(t,e){var n=t.x,a=t.y,c=e.x,s=e.y;this.chess.get(this.mtx[a][n]).x=c,this.chess.get(this.mtx[a][n]).y=s,this.mtx[s][c]&&(this.chess.get(this.mtx[s][c]).x=null,this.chess.get(this.mtx[s][c]).y=null),this.renderIt(),"A"===this.choose?this.choose="B":this.choose="A",this.chooseItem=null,console.log(this.chess)}}}}},[63]);
//# sourceMappingURL=app.10f4c6bac529524b7ff3.js.map