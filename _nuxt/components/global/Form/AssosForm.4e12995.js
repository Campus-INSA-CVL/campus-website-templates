(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{321:function(e,t,o){"use strict";o.r(t);var n={name:"AssosForm",data:function(){return{value:"",assos:[{text:"Club oenologie",value:"club-oenologie"},{text:"Comed'INSA",value:"comed-insa"},{text:"INSA'brasse",value:"insa-brasse"},{text:"INSAction",value:"insaction"},{text:"INS'Agora",value:"insa-gora"},{text:"INSA'press",value:"insa-press"},{text:"INSArpège",value:"insarpege"},{text:"Jard'INSA",value:"jard-insa"},{text:"Printemps des Grandes Écoles",value:"pge"},{text:"Gree'NSA Blois",value:"gree-nsa-blois"},{text:"Gree'NSA Bourges",value:"gree-nsa-bourges"},{text:"Insagénieuse",value:"insagenieuses"},{text:"INSA Safety",value:"insa-safety"},{text:"5 Continents 5 Sommets",value:"5s5c"},{text:"Élèves sans frontières",value:"eleves-sans-frontieres"},{text:"Genepi",value:"genepi"},{text:"INSA kids",value:"insa-kids"},{text:"INS'Actif",value:"ins-actif"},{text:"R3: Rencontrer, Réaliser, Réussir",value:"r3"},{text:"High-five",value:"high-five"},{text:"INSAil",value:"insail"},{text:"INSAVIRON",value:"insaviron"},{text:"4L Trophy",value:"4l-trophy"},{text:"Club robotique",value:"club-robotique"},{text:"Gam'INSA",value:"gaminsa"},{text:"ISI",value:"isi"},{text:"insa'roule",value:"insa-roule"}]}},computed:{assosSort:function(){return this.assos.sort((function(a,b){var e=a.text.toLowerCase(),t=b.text.toLowerCase();return e<t?-1:e>t?1:0}))},asso:{get:function(){return this.value},set:function(e){this.value=e,this.$emit("asso",e)}}}},l=o(57),r=o(80),v=o.n(r),c=o(437),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-select",{attrs:{label:"Choisir son asso",items:e.assosSort,"menu-props":{bottom:!0,offsetY:!0},"hide-details":"",outlined:"",dense:"",color:"primary","item-color":"primary"},model:{value:e.asso,callback:function(t){e.asso=t},expression:"asso"}})}),[],!1,null,null,null);t.default=component.exports;v()(component,{VSelect:c.a})}}]);