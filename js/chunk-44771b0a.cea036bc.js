(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44771b0a"],{"5f44":function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"modify-container"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{attrs:{type:"email",autocomplete:"off"},model:{value:e.ruleForm.email,callback:function(r){e.$set(e.ruleForm,"email",r)},expression:"ruleForm.email"}})],1),t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),t("el-form-item",{attrs:{label:"新密码",prop:"nowPassword"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.nowpassword,callback:function(r){e.$set(e.ruleForm,"nowpassword",r)},expression:"ruleForm.nowpassword"}})],1),t("el-form-item",{attrs:{prop:"Code"}},[t("el-input",{staticClass:"code",attrs:{type:"text",autocomplete:"off"},model:{value:e.ruleForm.code,callback:function(r){e.$set(e.ruleForm,"code",r)},expression:"ruleForm.code"}}),t("el-button",{staticClass:"primary",attrs:{type:"primary",plain:""},on:{click:e.handlerClick}},[e._v("获取验证码")])],1),t("el-form-item",{attrs:{prop:"role"}},[t("el-radio",{attrs:{label:"customer"},model:{value:e.ruleForm.role,callback:function(r){e.$set(e.ruleForm,"role",r)},expression:"ruleForm.role"}},[e._v("普通用户")]),t("el-radio",{attrs:{label:"admin"},model:{value:e.ruleForm.role,callback:function(r){e.$set(e.ruleForm,"role",r)},expression:"ruleForm.role"}},[e._v("管理员")])],1),t("el-form-item",[t("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v(" 确认 ")])],1)],1)],1)},a=[],l=t("c4c8"),s={data:function(){var e=/^[\w]+@[\w.-]+.com$/,r=function(r,t,o){""===t?o(new Error("请输入邮箱")):e.test(t)?o():o(new Error("邮箱格式不正确"))};return{ruleForm:{email:"",username:"",password:"",nowPassword:"",code:"",role:""},rules:{email:[{required:!0,validator:r,trigger:"blur"}],username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate((function(e){return e?(l["a"].modify(r.ruleForm).then((function(e){"success"===e.status&&(alert("修改成功，请登录"),r.$store.dispatch("setUserCookie",{email:r.ruleForm.email}),r.$router.push({name:"/login"}))})),!0):(alert("修改失败"),!1)}))},handlerClick:function(){if(!this.ruleForm.email)return alert("请输入邮箱")}}},u=s,n=(t("6007"),t("2877")),i=Object(n["a"])(u,o,a,!1,null,"42b9950e",null);r["default"]=i.exports},6007:function(e,r,t){"use strict";t("b6fc")},b6fc:function(e,r,t){},c4c8:function(e,r,t){"use strict";var o=t("eeb9");r["a"]={list:function(e){return o["a"].get("/products/all",{params:e})},categoryList:function(e){return o["a"].get("/category/all",{params:e})},delete:function(e){return o["a"].delete("/products/"+e)},add:function(e){return o["a"].post("/products/add",e)},modify:function(e){return o["a"].put("/passport/changeUserInfo",e)},edit:function(e){return o["a"].put("/products/edit",e)},addCategory:function(e){return o["a"].post("/category/add",e)},editCategory:function(e){return o["a"].put("/category/edit",e)},deleteCategory:function(e){return o["a"].delete("/category/"+e)}}}}]);
//# sourceMappingURL=chunk-44771b0a.cea036bc.js.map