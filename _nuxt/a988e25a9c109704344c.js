(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{274:function(t,e,n){var content=n(357);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("7065172c",content,!1,{sourceMap:!1})},275:function(t,e,n){var content=n(359);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("56eebe64",content,!1,{sourceMap:!1})},276:function(t,e,n){var content=n(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("29efdde3",content,!1,{sourceMap:!1})},277:function(t,e,n){var content=n(363);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("be676a3a",content,!1,{sourceMap:!1})},295:function(t,e,n){"use strict";n(246);var o=n(240),r=(n(40),n(24),n(18),n(14),n(30),n(20));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={components:{Mapbox:n(354).a},props:{mapId:{type:String,default:""},initialBounds:{type:Array,default:function(){return[]}},mapOptions:{type:Object,required:!1,default:function(){return{}}},legend:{type:Array,default:function(){return[]}}},data:function(){return{dateSequence:[],mapObject:null,colors:["rgba(80, 91, 0, 0.25)","rgba(27, 117, 188, 0.5)","rgba(0, 100, 0, 0.6)","rgba(0, 68, 27, 0.7)"],borderColors:["#505B00","#1B75BC","#006400","#00441B"],dataDrivenLegend:null}},computed:{actualLegend:function(){return 0===this.legend.length?this.dataDrivenLegend:this.legend},actualMapOptions:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({style:"https://tokyo-metropolitan-gov.github.io/tokyo-vector-tile/style.json",zoom:14,center:[139.69167,35.689444],antialias:!1,interactive:!1},this.mapOptions,{container:this.mapId})}},methods:{dataDrivenInitialization:function(map){if(0===this.dateSequence.length){var t=map.queryRenderedFeatures({layers:["heatmap"]});if(0!==t.length){this.dateSequence=Object.keys(t[0].properties).sort(),this.$emit("dateTicksUpdated",this.dateSequence);var e=this.dateSequence[this.dateSequence.length-1],n=0;t.forEach((function(t){n<t.properties[e]&&(n=t.properties[e])}));var o=.25*(1e4+1e4*Math.floor(1e-4*n));this.dataDrivenLegend=[o,2*o,3*o],this.updatePaintProperty(e),this.$emit("legendUpdated",[{borderColor:this.borderColors[0],color:this.colors[0],valueFrom:0,valueTo:this.actualLegend[0]},{borderColor:this.borderColors[1],color:this.colors[1],valueFrom:this.actualLegend[0],valueTo:this.actualLegend[1]},{borderColor:this.borderColors[2],color:this.colors[2],valueFrom:this.actualLegend[1],valueTo:this.actualLegend[2]},{borderColor:this.borderColors[3],color:this.colors[3],valueFrom:this.actualLegend[2],valueTo:null}]),this.$emit("loadCompleted")}else setTimeout(this.dataDrivenInitialization,1e3,map)}},loaded:function(map){this.initialBounds.length>1&&this.initialBounds[0].length>1&&this.initialBounds[1].length>1&&map.fitBounds(this.initialBounds,{linear:!0}),map.addLayer({id:"heatmap",type:"fill",source:{type:"vector",tiles:["https://tokyo-metropolitan-gov.github.io/data/tiles/{z}/{x}/{y}.pbf"],minzoom:11,maxzoom:11},"source-layer":"dfi-place-heatmap-population",paint:{"fill-color":"#fff","fill-opacity":.5,"fill-outline-color":"rgba(0, 0, 0, 0)"}}),this.dataDrivenInitialization(map)},mapInitialized:function(map){this.mapObject=map},updatePaintProperty:function(t){if(null!==this.mapObject&&null!==this.legend){var p=["step",["get",t],this.colors[0],this.actualLegend[0],this.colors[1],this.actualLegend[1],this.colors[2],this.actualLegend[2],this.colors[3]];this.mapObject.setPaintProperty("heatmap","fill-color",p)}}}},d=n(4),f=Object(d.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("mapbox",{attrs:{"access-token":"","map-options":this.actualMapOptions,"nav-control":{show:!1},"attribution-control":{show:!0,position:"top-right"}},on:{"map-load":this.loaded,"map-init":this.mapInitialized}})}),[],!1,null,null,null).exports,h=n(305),v={props:{legendData:{type:Array,default:function(){return[]}}}},m=(n(358),Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"clearfix"},t._l(t.legendData,(function(e){return n("li",{key:e.valueFrom},[n("span",{staticClass:"LegendBlock",style:"background-color: "+e.color+"; border: 1px solid "+e.borderColor}),t._v("\n      "+t._s(e.valueFrom+"〜"+(null!==e.valueTo?e.valueTo:""))+"\n    ")])})),0)])}),[],!1,null,"395f10db",null).exports),y={components:{DataView:o.a,SourceLink:h.a,Heatmap:f,HeatmapLegend:m},props:{title:{type:String,default:""},titleId:{type:String,default:""},detailPageUrl:{type:String,default:""},detailPageString:{type:String,default:""},url:{type:String,default:""},mapHeight:{type:Number,default:240},linkString:{type:String,default:""},sourceLinkHeader:{type:String,default:""},heatmapLegend:{type:Array,default:function(){return[]}},mapOptions:{type:Object,default:function(){return{}},required:!1},initialBounds:{type:Array,default:function(){return[]}},unit:{type:String,default:""},mapId:{type:String,default:"map"}},data:function(){return{dateTicks:[{text:"02/01",value:"20200201"}],legendData:[],loading:!0,updateDate:""}},created:function(){var t=this;fetch("https://tokyo-metropolitan-gov.github.io/data/stat.json").then((function(t){return t.json()})).then((function(e){return t.updateDate=e.yahootile.lastUpdate})).catch((function(e){return t.updateDate=""}))},methods:{updateLegend:function(t){this.legendData=t},loadCompleted:function(){this.loading=!1},handleFocusChanged:function(t){this.$refs.heatmapComponentRef.updatePaintProperty(t.target.value)},dateTicksUpdated:function(t){this.dateTicks=t.map((function(t){return{text:"".concat(t.substring(4,6),"/").concat(t.substring(6,8)),value:t}})),this.dateTicks.sort((function(a,b){return a.value===b.value?0:a.value<b.value?1:-1})),this.$refs.dateSelectorRef.value=this.dateTicks[0].value}}},k=(n(360),n(362),Object(d.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{staticClass:"MapCard",attrs:{title:t.title,"title-id":t.titleId,date:t.updateDate,url:t.url,loading:t.loading},scopedSlots:t._u([{key:"description",fn:function(){return[n("ol",[n("li",[t._v("\n        "+t._s(t.$t("※ ヤフーに蓄積された位置情報データなどを元に算出した参考値"))+"\n      ")]),t._v(" "),n("li",[t._v(t._s(t.$t("※ 土・日・祝日を除く7:30~8:30の平均値")))])])]},proxy:!0},{key:"footer",fn:function(){return[n("source-link",{attrs:{url:t.url,"link-string":t.linkString,header:t.sourceLinkHeader}})]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"MapCard-BodyContainer"},[n("heatmap-legend",{attrs:{"legend-data":t.legendData}}),t._v(" "),n("heatmap",{ref:"heatmapComponentRef",staticClass:"MapCard-Heatmap",style:{height:t.mapHeight+"px"},attrs:{"map-id":t.mapId,"initial-bounds":t.initialBounds,"map-options":t.mapOptions,legend:t.heatmapLegend},on:{legendUpdated:t.updateLegend,loadCompleted:t.loadCompleted,dateTicksUpdated:t.dateTicksUpdated}}),t._v(" "),n("select",{ref:"dateSelectorRef",staticClass:"select-css",on:{input:t.handleFocusChanged}},t._l(t.dateTicks,(function(e){return n("option",{key:e.text,domProps:{value:e.value}},[t._v("\n        "+t._s(e.text)+"\n      ")])})),0),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:""!==t.detailPageUrl,expression:"detailPageUrl !== ''"}],staticClass:"DetailPageLink"},[n("nuxt-link",{attrs:{to:t.detailPageUrl}},[t._v("\n        "+t._s(t.detailPageString)+"\n      ")])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"MapCard-BodyContainer-LoadingScreen"})],1)])}),[],!1,null,"cfbac342",null));e.a=k.exports},305:function(t,e,n){"use strict";var o=n(1).default.extend({props:{url:{type:String,default:""},linkString:{type:String,default:""},header:{type:String,default:""}}}),r=(n(356),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SourceLink"},[n("div",[t._v(t._s(t.header))]),t._v(" "),n("i18n",{attrs:{path:"出典: {source}",tag:"div",for:t.linkString},scopedSlots:t._u([{key:"source",fn:function(){return[n("a",{staticClass:"SourceLink",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.linkString)+"\n        "),n("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:"15"}},[t._v("\n          mdi-open-in-new\n        ")])],1)]},proxy:!0}])})],1)}),[],!1,null,null,null);e.a=component.exports},306:function(t,e,n){"use strict";var o={components:{MapCard:n(295).a}},r=n(4),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"12"}},[e("map-card",{attrs:{title:"",caption:this.$t("※7:30〜8:30の平均値"),"title-id":"tokyo-city-heatmap","chart-id":"tokyo-city-chart","map-id":"tokyo-city-map","initial-bounds":[[139.695239,35.676437],[139.773774,35.694493]],"map-height":640,"map-options":{interactive:!0},unit:"人",url:"https://ds.yahoo.co.jp/datapolicy/","source-link-header":this.$t("※本データは2020年3月31日までの掲載となります"),"heatmap-legend":[2e4,4e4,6e4],"link-string":this.$t("ヤフー・データソリューション"),date:""}})],1)}),[],!1,null,null,null);e.a=component.exports},356:function(t,e,n){"use strict";var o=n(274);n.n(o).a},357:function(t,e,n){(e=n(10)(!1)).push([t.i,".SourceLink{text-decoration:none;text-align:left}.SourceLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},358:function(t,e,n){"use strict";var o=n(275);n.n(o).a},359:function(t,e,n){(e=n(10)(!1)).push([t.i,"\n.LegendBlock[data-v-395f10db] {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  opacity: 0.5;\n}\nli[data-v-395f10db] {\n  list-style: none;\n  float: left;\n  font-size: 14px;\n  padding-right: 4px;\n}\nli[data-v-395f10db]:last-child {\n  padding-right: 0;\n}\nul[data-v-395f10db] {\n  margin: 0;\n  padding: 0;\n}\n.clearfix[data-v-395f10db]::after {\n  content: '';\n  display: block;\n  clear: both;\n}\n",""]),t.exports=e},360:function(t,e,n){"use strict";var o=n(276);n.n(o).a},361:function(t,e,n){(e=n(10)(!1)).push([t.i,'.MapCard-BodyContainer[data-v-cfbac342]{position:relative}.MapCard-BodyContainer-LoadingScreen[data-v-cfbac342]{position:absolute;height:100%;width:100%;background-color:rgba(255,255,255,.75);top:0;left:0}.select-css[data-v-cfbac342]{display:block;font-size:16px;font-family:sans-serif;font-weight:700;color:#444;line-height:1.3;padding:.6em 1.4em .5em .8em;width:100%;max-width:100%;box-sizing:border-box;margin:10px 0 0 0;border:1px solid #aaa;box-shadow:0 1px 0 1px rgba(0,0,0,.04);border-radius:.5em;-moz-appearance:none;-webkit-appearance:none;appearance:none;background-color:#fff;background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),linear-gradient(to bottom, #fff 0%, #e5e5e5 100%);background-repeat:no-repeat,repeat;background-position:right .7em top 50%,0 0;background-size:.65em auto,100%}.select-css[data-v-cfbac342]::-ms-expand{display:none}.select-css[data-v-cfbac342]:hover{border-color:#888}.select-css[data-v-cfbac342]:focus{border-color:#aaa;box-shadow:0 0 1px 3px rgba(59,153,252,.7);box-shadow:0 0 0 3px -moz-mac-focusring;color:#222;outline:none}.select-css option[data-v-cfbac342]{font-weight:normal}',""]),t.exports=e},362:function(t,e,n){"use strict";var o=n(277);n.n(o).a},363:function(t,e,n){(e=n(10)(!1)).push([t.i,".MapCard-BodyContainer .v-slider__tick-label{font-size:12px}",""]),t.exports=e}}]);