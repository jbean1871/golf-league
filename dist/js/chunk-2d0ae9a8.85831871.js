(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ae9a8"],{"0b88":function(e,t,a){"use strict";a.r(t);var m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-5"},[a("h3",{staticClass:"text-center"},[e._v("Add team")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.onFormSubmit(t)}}},[a("div",{staticClass:"form-group"},[a("label",[e._v("Member 1")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.team.memberOne,expression:"team.memberOne"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.team.memberOne},on:{input:function(t){t.target.composing||e.$set(e.team,"memberOne",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Member 2")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.team.memberTwo,expression:"team.memberTwo"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.team.memberTwo},on:{input:function(t){t.target.composing||e.$set(e.team,"memberTwo",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Team Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.team.teamName,expression:"team.teamName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.team.teamName},on:{input:function(t){t.target.composing||e.$set(e.team,"teamName",t.target.value)}}})]),e._m(0)])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary btn-block"},[e._v("Add team")])])}],o=a("56d7"),n={data:function(){return{team:{}}},methods:{onFormSubmit:function(e){var t=this;e.preventDefault(),o["db"].collection("teams").add(this.team).then((function(){alert("team successfully created!"),t.team.memberOne="",t.team.memberTeo="",t.team.teamName="",t.team.week1=0,t.team.week2=0,t.team.week3=0,t.team.week4=0,t.team.week5=0,t.team.week6=0,t.team.week7=0,t.team.week8=0,t.team.week9=0,t.team.week10=0,t.team.week11=0,t.team.week12=0,t.team.week13=0,t.team.week14=0})).catch((function(e){console.log(e)}))}}},s=n,i=a("2877"),l=Object(i["a"])(s,m,r,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0ae9a8.85831871.js.map