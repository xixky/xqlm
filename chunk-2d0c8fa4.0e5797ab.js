(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8fa4"],{"56d1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("result",{attrs:{isSuccess:!0,content:!1,title:t.email,description:t.description}},[n("template",{slot:"action"},[n("a-button",{attrs:{size:"large",type:"primary"}},[t._v("查看邮箱")]),n("a-button",{staticStyle:{"margin-left":"8px"},attrs:{size:"large"},on:{click:t.goHomeHandle}},[t._v("返回首页")])],1)],2)},o=[],i=n("2af9"),r={name:"RegisterResult",components:{Result:i["q"]},data:function(){return{description:"激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。",form:{}}},computed:{email:function(){var t=this.form&&this.form.email||"xxx",e="你的账户：".concat(t," 注册成功");return e}},created:function(){this.form=this.$route.params},methods:{goHomeHandle:function(){this.$router.push({name:"login"})}}},s=r,c=n("2877"),u=Object(c["a"])(s,a,o,!1,null,"558ffaf9",null);e["default"]=u.exports}}]);