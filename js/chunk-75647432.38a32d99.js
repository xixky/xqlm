(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75647432"],{"0460":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"apps"},[a("a-row",{attrs:{type:"flex",justify:"start",gutter:20}},[a("a-col",{staticClass:"left",attrs:{md:16,xs:24}},[a("a-input-search",{attrs:{placeholder:"input search text","enter-button":""},on:{search:t.onSearch}}),a("a-row",{staticClass:"my",attrs:{type:"flex",justify:"start",gutter:20}},[a("a-col",{staticClass:"left",attrs:{md:12,xs:24}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:24}},[a("a-card",{attrs:{title:"我的简历",bordered:!1}},[a("a-col",{staticClass:"text",attrs:{xs:8,md:8}},[a("div",[t._v("今日投递")]),a("div",[t._v(t._s(t.my_resume_data.jr))])]),a("a-col",{staticClass:"text",attrs:{xs:8,md:8}},[a("div",[t._v("等待处理")]),a("div",[t._v(t._s(t.my_resume_data.dd))])]),a("a-col",{staticClass:"text",attrs:{xs:8,md:8}},[a("div",[t._v("全部人才")]),a("div",[t._v(t._s(t.my_resume_data.all))])])],1)],1),t._l(t.resume_data.records,(function(s,e){return a("a-col",{key:e,staticClass:"l-col",attrs:{span:24}},[a("a-card",{attrs:{bordered:!1}},[a("a-row",[a("a-col",{attrs:{md:5}},[null!=s.user_pic?a("a-avatar",{attrs:{size:64,src:s.user_pic}}):a("a-avatar",{staticStyle:{color:"#f56a00",backgroundColor:"#fde3cf"},attrs:{size:64}},[t._v(" "+t._s(s.api_user_name)+" ")])],1),a("a-col",{attrs:{md:19}},[a("div",[t._v(t._s(s.api_user_name))]),a("div",[t._v(t._s(s.api_user_gender)+" | "+t._s(t.$resume.getAge(s.u_birth_date+"-01"))+"岁 | 工作"+t._s(s.rs_wk_year)+"年 | "+t._s(s.u_position_mode))]),a("div",[t._v("期望："+t._s(s.u_expect_position)+" | "+t._s(s.u_position_mode)+" | "+t._s(s.u_expect_salary))])])],1)],1)],1)})),a("a-col",{staticClass:"l-col",attrs:{span:24}},[a("a-button",{staticClass:"l-col-bth"},[t._v("查看全部")])],1)],2)],1),a("a-col",{staticClass:"right",attrs:{md:12,xs:24}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:24}},[a("a-card",{attrs:{title:"我的简历",bordered:!1}},[a("a-col",{staticClass:"text",attrs:{xs:8,md:8}},[a("div",[t._v(t._s(t.positionCount[0].name))]),a("div",{staticClass:"position-num",on:{click:function(s){return t.toPositionList(1)}}},[t._v(t._s(t.positionCount[0].count))])]),a("a-col",{staticClass:"text",attrs:{xs:8,md:8}},[a("div",[t._v(t._s(t.positionCount[1].name))]),a("div",{staticClass:"position-num",on:{click:function(s){return t.toPositionList(2)}}},[t._v(t._s(t.positionCount[1].count))])]),a("a-col",{staticClass:"text",attrs:{xs:8,md:8}},[a("div",[t._v(t._s(t.positionCount[2].name))]),a("div",{staticClass:"position-num",on:{click:function(s){return t.toPositionList(1)}}},[t._v(t._s(t.positionCount[2].count))])])],1)],1),t._l(t.positionList,(function(s,e){return a("a-col",{key:e,staticClass:"position-list",attrs:{item:s,index:e,span:24}},[a("a-col",{staticClass:"position",attrs:{md:24,xs:24},on:{click:function(a){return a.stopPropagation(),t.checkDetail(s.id)}}},[t.hasPerm("ysCompany:add")?a("a-col",{staticClass:"company-name",attrs:{md:24,xs:24}},[t._v(" "+t._s(s.psCompanyName)+" ")]):t._e(),a("a-col",{staticClass:"info",attrs:{md:24,xs:24}},[a("a-col",{staticClass:"name",attrs:{md:12,xs:24}},[t._v(" "+t._s(s.psName)+" ")]),a("a-col",{staticClass:"content",attrs:{md:12,xs:24}},[a("span",{staticClass:"slipt-span"},[t._v(t._s(s.psSalaryRange))]),t._v("| "),a("span",{staticClass:"slipt-span"},[t._v(t._s(s.psEduMode))]),t._v("| "),a("span",{staticClass:"slipt-span"},[t._v(t._s(s.psWkYear))]),t._v("| "),a("span",{staticClass:"slipt-span"},[t._v(t._s(s.psType))])])],1),a("a-col",{staticClass:"about",attrs:{md:24,xs:24}},[a("a-col",{staticClass:"area",attrs:{md:12,xs:24}},[t._v(" 工作地点: "),a("span",[t._v(t._s(s.psWkPlace))])]),a("a-col",{staticClass:"time",attrs:{md:12,xs:24}},[t._v("2021-06-11")])],1)],1)],1)})),a("a-col",{staticClass:"l-col",attrs:{span:24}},[a("a-button",{staticClass:"l-col-bth",on:{click:function(s){return t.toPositionList(1)}}},[t._v("查看全部")])],1)],2)],1)],1)],1),a("a-col",{staticClass:"right2",attrs:{md:8,xs:24}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:24}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:24}},[a("a-card",{attrs:{title:"我的面试",bordered:!1}},[a("a-col",{staticClass:"text",attrs:{xs:8,md:8}},[a("div",[t._v("我的岗位")]),a("div",[t._v(t._s(t.interview_data.total))])]),a("a-col",{staticClass:"text",attrs:{xs:8,md:8}},[a("div",[t._v("我的岗位")]),a("div",[t._v(t._s(t.interview_data.total))])])],1)],1),t._l(t.interview_data.records,(function(s,e){return a("a-col",{key:e,staticClass:"l-col",attrs:{span:24}},[a("a-card",{attrs:{bordered:!1}},[a("a-row",[a("a-col",{attrs:{md:19}},[a("div",[t._v(t._s(s.iterview_notify.contactName))]),a("div",[t._v("电话:"+t._s(s.iterview_notify.phone))]),a("div",[t._v("工作地点:"+t._s(s.iterview_notify.address))]),a("div",[t._v("时间:"+t._s(s.iterview_notify.datetime))])]),a("a-col",{attrs:{md:5}},[a("div",[t._v("面试方式")]),a("div",[t._v("现场面试")])])],1)],1)],1)})),a("a-col",{staticClass:"l-col",attrs:{span:24}},[a("a-button",{staticClass:"l-col-bth"},[t._v("查看全部")])],1)],2)],1),a("a-col",{staticClass:"col",attrs:{span:24}},[a("a-card",{attrs:{title:"我的权益",bordered:!1}},[a("a-col",{staticClass:"text",attrs:{xs:12,md:12}},[a("div",[t._v("发起聊天")]),a("div",[t._v("5")])]),a("a-col",{staticClass:"text",attrs:{xs:12,md:12}},[a("div",[t._v("查看简历")]),a("div",[t._v("3")])])],1)],1)],1)],1)],1)],1)},o=[],n=(a("159b"),a("4de4"),a("25eb"),a("a9e3"),a("5005")),i=a("b775");function r(){return Object(i["b"])({url:"/home/my_resume",method:"get"})}var c=a("30e7"),u={data:function(){return{interview_data:[],resume_data:[],my_resume_data:[],positionCount:[],positionList:[]}},created:function(){this.load_my_interview(4),this.load_my_rs(1),this.loadMyResume(),this.getPositionCount(),this.getPositionList()},methods:{loadMyResume:function(){var t=this;r().then((function(s){t.my_resume_data=s.data}))},load_my_interview:function(t){var s=this,a={pageSize:2,pageNo:1},e={rsStatus:t};Object(n["i"])(a,e).then((function(t){s.interview_data=t.data,s.interview_data.records.forEach((function(t){try{t.iterview_notify=JSON.parse(t.iterview_notify)}catch(s){t.iterview_notify=JSON.parse('{"address":"数据异常","contactName":"数据异常","datetime":"数据异常","phone":"数据异常","remark":"数据异常"}')}}))}))},load_my_rs:function(t){var s=this,a={pageSize:2,pageNo:1},e={rsStatus:t};Object(n["i"])(a,e).then((function(t){s.resume_data=t.data,s.resume_data.records.forEach((function(t){t.u_position_mode=s.$resume.worktostr(t.u_position_mode),t.rs_wk_year=s.$resume.getAge(t.rs_wk_year+"-01"),t.api_user_gender=s.$resume.conver_api_user_gender(t.api_user_gender)}))}))},checkDetail:function(t){this.$router.push({path:"/position/detail",query:{id:t}})},getPositionList:function(){var t=this,s={pageNo:1,pageSize:2},a={code:1};Object(c["f"])(a,s).then((function(s){t.positionList=s.data.records}))},getPositionCount:function(){var t=this;return Object(c["e"])({}).then((function(s){var a=s.data,e=a.filter((function(t){return 1==t.code}))[0],o=a.filter((function(t){return 2==t.code}))[0],n={name:"全部职位",code:0,count:0};a.forEach((function(t){n.count+=Number.parseInt(t.count)}));var i=[e,o,n];t.positionCount=i}))},toPositionList:function(t){this.$router.push({path:"/position",query:{code:t}})},onSearch:function(){}}},d=u,l=(a("08af"),a("2877")),_=Object(l["a"])(d,e,o,!1,null,null,null);s["default"]=_.exports},"08af":function(t,s,a){"use strict";a("5e9a")},"30e7":function(t,s,a){"use strict";a.d(s,"f",(function(){return o})),a.d(s,"e",(function(){return n})),a.d(s,"a",(function(){return i})),a.d(s,"d",(function(){return r})),a.d(s,"b",(function(){return c})),a.d(s,"c",(function(){return u})),a.d(s,"g",(function(){return d}));a("99af");var e=a("b775");function o(t,s){return Object(e["b"])({url:"/position/list?pageNo=".concat(s.pageNo,"&pageSize=").concat(s.pageSize),method:"post",data:t})}function n(t){return Object(e["b"])({url:"/position/count",method:"post",data:t})}function i(t){return Object(e["b"])({url:"/position/add",method:"post",data:t})}function r(t){return Object(e["b"])({url:"/position/edit",method:"post",data:t})}function c(t){return Object(e["b"])({url:"/position/detail",method:"post",data:t})}function u(t){return Object(e["b"])({url:"/position/down",method:"post",data:t})}function d(t){return Object(e["b"])({url:"/position/up",method:"post",data:t})}},5005:function(t,s,a){"use strict";a.d(s,"j",(function(){return o})),a.d(s,"g",(function(){return n})),a.d(s,"i",(function(){return i})),a.d(s,"c",(function(){return r})),a.d(s,"d",(function(){return c})),a.d(s,"b",(function(){return u})),a.d(s,"h",(function(){return d})),a.d(s,"f",(function(){return l})),a.d(s,"k",(function(){return _})),a.d(s,"e",(function(){return p})),a.d(s,"a",(function(){return m}));var e=a("b775");function o(t){return Object(e["b"])({url:"/ysResume/count",method:"post",data:t})}function n(){return Object(e["b"])({url:"/position/all",method:"post"})}function i(t,s){return Object(e["b"])({url:"/ysResume/resume",params:t,method:"post",data:s})}function r(t){return Object(e["b"])({url:"/ysResumeInfo/info",data:t,method:"post"})}function c(t){return Object(e["b"])({url:"/ysResume/interview",data:t,method:"post"})}function u(t){return Object(e["b"])({url:"/ysResume/downLoadAuthentication",params:t,method:"get"})}function d(t){return Object(e["b"])({url:"/ysResume/previousPage",params:t,method:"get"})}function l(t){return Object(e["b"])({url:"/ysResume/nextPage",params:t,method:"get"})}function _(t,s){return Object(e["b"])({url:"/ysResume/status/"+t,data:s,method:"PUT"})}function p(){return Object(e["b"])({url:"/ysResumeInfo/load_invitation_cache",method:"post"})}function m(t){return Object(e["b"])({url:"/ysResume/export",data:t,method:"post"})}},"5e9a":function(t,s,a){}}]);