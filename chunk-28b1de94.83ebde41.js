(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28b1de94"],{"2c6e":function(e,t,a){"use strict";a("4e43")},"30e7":function(e,t,a){"use strict";a.d(t,"f",(function(){return o})),a.d(t,"e",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return n})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return c})),a.d(t,"g",(function(){return u}));a("99af");var r=a("b775");function o(e,t){return Object(r["b"])({url:"/position/list?pageNo=".concat(t.pageNo,"&pageSize=").concat(t.pageSize),method:"post",data:e})}function i(e){return Object(r["b"])({url:"/position/count",method:"post",data:e})}function s(e){return Object(r["b"])({url:"/position/add",method:"post",data:e})}function n(e){return Object(r["b"])({url:"/position/edit",method:"post",data:e})}function l(e){return Object(r["b"])({url:"/position/detail",method:"post",data:e})}function c(e){return Object(r["b"])({url:"/position/down",method:"post",data:e})}function u(e){return Object(r["b"])({url:"/position/up",method:"post",data:e})}},"4e43":function(e,t,a){},6174:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"editor"},[a("div",{ref:"toolbar",staticClass:"toolbar"}),a("div",{ref:"editor",staticClass:"text"})])},o=[],i=a("1a0b"),s=a.n(i),n={data:function(){return{editor:null,info_:null}},model:{prop:"value",event:"change"},props:{value:{type:String,default:""},isClear:{type:Boolean,default:!1}},watch:{isClear:function(e){e&&(this.editor.txt.clear(),this.info_=null)},value:function(e){e!==this.editor.txt.html()&&this.editor.txt.html(this.value)}},mounted:function(){this.seteditor(),this.editor.txt.html(this.value)},methods:{seteditor:function(){var e=this;this.editor=new s.a(this.$refs.toolbar,this.$refs.editor),this.editor.customConfig.uploadImgShowBase64=!1,this.editor.customConfig.uploadImgServer="/apisc/fileoss/uploadFile",this.editor.customConfig.uploadImgHeaders={Authorization:this.$store.state.user.token},this.editor.customConfig.uploadFileName="file",this.editor.customConfig.uploadImgMaxSize=2097152,this.editor.customConfig.uploadImgMaxLength=6,this.editor.customConfig.uploadImgTimeout=18e4,this.editor.customConfig.menus=["head","bold","fontSize","fontName","italic","underline","strikeThrough","foreColor","backColor","link","list","justify","quote","image","table","undo","redo","fullscreen"],this.editor.customConfig.uploadImgHooks={fail:function(e,t,a){},success:function(e,t,a){},timeout:function(e,t){},error:function(e,t){},customInsert:function(e,t,a){var r=t.data.url;e(r)}},this.editor.customConfig.onchange=function(t){e.info_=t,e.$emit("change",e.info_)},this.editor.create()}}},l=n,c=(a("2c6e"),a("2877")),u=Object(c["a"])(l,r,o,!1,null,"1dabe3f1",null);t["a"]=u.exports},"727a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"新增岗位",width:900,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"岗位名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["psName",{rules:[{required:!0,message:"请输入公司名称！"}]}],expression:"['psName', {rules: [{required: true, message: '请输入公司名称！'}]}]"}],attrs:{placeholder:"请输入岗位名称"}})],1),a("a-form-item",{attrs:{label:"岗位类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["psCategory",{rules:[{required:!0,message:"请选择岗位类型"}]}],expression:"['psCategory', {rules: [{required: true, message: '请选择岗位类型'}]}]"}],staticStyle:{width:"100%"},attrs:{"show-search":"",placeholder:"选择岗位类型","option-filter-prop":"children","filter-option":e.filterOption}},e._l(e.categoryList,(function(t,r){return a("a-select-option",{key:t.tag,attrs:{index:r,item:t,value:t.tag}},[e._v(" "+e._s(t.content)+" ")])})),1)],1),e.companyList.length>1?a("a-form-item",{attrs:{label:"所属园所",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["psCompanyId",{rules:[{required:!0,message:"请选择所属园所"}]}],expression:"['psCompanyId', {rules: [{required: true, message: '请选择所属园所'}]}]"}],staticStyle:{width:"100%"},attrs:{"show-search":"",placeholder:"选择园所","option-filter-prop":"children","filter-option":e.filterOption}},e._l(e.companyList,(function(t,r){return a("a-select-option",{key:t.tag,attrs:{index:r,item:t,value:t.id}},[e._v(" "+e._s(t.cpName)+" ")])})),1)],1):e._e(),a("a-form-item",{attrs:{label:"工作地点",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["pccList",{rules:[{required:!0,message:"请选择工作地点"}]}],expression:"['pccList', {rules: [{required: true, message: '请选择工作地点'}]}]"}],staticStyle:{width:"100%"},attrs:{options:e.cityArray,placeholder:"请选择工作地点"},on:{change:e.onChange}})],1),a("a-form-item",{attrs:{label:"学历要求",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["psEduMode",{rules:[{required:!0,message:"请选择岗位类型"}]}],expression:"['psEduMode', {rules: [{required: true, message: '请选择岗位类型'}]}]"}],staticStyle:{width:"100%"},attrs:{"show-search":"",placeholder:"选择学历","option-filter-prop":"children","filter-option":e.filterOption}},e._l(e.eduModeList,(function(t,r){return a("a-select-option",{key:t.tag,attrs:{index:r,item:t,value:t.tag}},[e._v(" "+e._s(t.content)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"工作年限",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["psWkYear",{rules:[{required:!0,message:"请选择岗位类型"}]}],expression:"['psWkYear', {rules: [{required: true, message: '请选择岗位类型'}]}]"}],staticStyle:{width:"100%"},attrs:{"show-search":"",placeholder:"选择一个工作年限","option-filter-prop":"children","filter-option":e.filterOption}},e._l(e.wkYearList,(function(t,r){return a("a-select-option",{key:t.tag,attrs:{index:r,item:t,value:t.tag}},[e._v(" "+e._s(t.content)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"薪资范围",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["psSalaryRange",{rules:[{required:!0,message:"选择薪资范围"}]}],expression:"['psSalaryRange', {rules: [{required: true, message: '选择薪资范围'}]}]"}],staticStyle:{width:"100%"},attrs:{"show-search":"",placeholder:"选择薪资范围","option-filter-prop":"children","filter-option":e.filterOption}},e._l(e.salaryList,(function(t,r){return a("a-select-option",{key:t.tag,attrs:{index:r,item:t,value:t.tag}},[e._v(" "+e._s(t.content)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"工作类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["psType",{rules:[{required:!0,message:"请选择岗位类型"}]}],expression:"['psType', {rules: [{required: true, message: '请选择岗位类型'}]}]"}],staticStyle:{width:"100%"},attrs:{"show-search":"",placeholder:"选择一个工作类型","option-filter-prop":"children","filter-option":e.filterOption}},e._l(e.typeList,(function(t,r){return a("a-select-option",{key:t.tag,attrs:{index:r,item:t,value:t.tag}},[e._v(" "+e._s(t.content)+" ")])})),1)],1),a("a-form-item",{staticStyle:{width:"100%"},attrs:{label:"有效时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["psStrengthEnd",{rules:[{required:!0,message:"请选择有效时间"}]}],expression:"['psStrengthEnd', {rules: [{required: true, message: '请选择有效时间'}]}]"}],attrs:{format:"YYYY-MM-DD"},on:{change:e.onChange}})],1),a("a-form-item",{staticStyle:{width:"100%"},attrs:{label:"置顶时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["showTime",{rules:[{required:!1,message:"请选择有效时间"}]}],expression:"['showTime', {rules: [{required: false, message: '请选择有效时间'}]}]"}],on:{change:e.onChange}})],1),a("a-form-item",{attrs:{label:"年龄限制",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["ageLimit",{rules:[{required:!1,message:"请选择有效的年龄"}]}],expression:"['ageLimit', {rules: [{required: false, message: '请选择有效的年龄'}]}]"}],attrs:{format:"YYYY-MM-DD"},on:{change:e.onChange}})],1),a("a-form-item",{staticStyle:{width:"100%"},attrs:{label:"标签列表",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["psTagListName",{rules:[{required:!0,message:"请选择职位优势"}]}],expression:"['psTagListName', {rules: [{required: true, message: '请选择职位优势'}]}]"}],staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:"选择职位标签"},on:{change:e.tagChange}},e._l(e.filteredOptions,(function(t,r){return a("a-select-option",{key:t,attrs:{index:r,value:t}},[e._v(" "+e._s(t)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"岗位描述",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}}),a("div",{staticClass:"editer"},[a("editor",{attrs:{isClear:e.isClear},on:{change:e.onChange},model:{value:e.detail,callback:function(t){e.detail=t},expression:"detail"}})],1)],1)],1)],1)},o=[],i=(a("4de4"),a("caad"),a("2532"),a("d81d"),a("159b"),a("d3b7"),a("30e7")),s=a("eed9"),n=a("d507"),l=a("6364"),c=a("6174"),u={components:{editor:c["a"]},data:function(){return{labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),eduModeList:[],wkYearList:[],salaryList:[],categoryList:[],typeList:[],companyList:[],cityArray:l["default"],tagList:[],tags:[],isClear:!1,detail:""}},computed:{filteredOptions:function(){var e=this;return this.tagList.filter((function(t){return!e.tags.includes(t)}))}},methods:{add:function(e){var t=this;this.visible=!0,this.detail="",Object(s["a"])("POSITION_CATEGORY").then((function(e){return t.categoryList=e.data})),Object(s["a"])("PS_EDU_MODE").then((function(e){return t.eduModeList=e.data})),Object(s["a"])("SALARY_RANGE").then((function(e){return t.salaryList=e.data})),Object(s["a"])("WORK_TYPE").then((function(e){return t.typeList=e.data})),Object(s["a"])("WORK_YEAR").then((function(e){return t.wkYearList=e.data})),Object(s["a"])("PS_ADVANTAGE").then((function(e){return t.tagList=e.data.map((function(e){return e.content}))})),Object(n["b"])().then((function(e){return t.companyList=e.data}))},handleSubmit:function(){var e=this.form.validateFields;this.confirmLoading=!0;var t=this;e((function(e,a){if(e)t.confirmLoading=!1;else{var r=l["default"].filter((function(e){return e.value===a.pccList[0]}))[0];a.psProvince=r.label;var o=r.children.filter((function(e){return e.value===a.pccList[1]}))[0];a.psCity=o.label,a.psArea=o.children.filter((function(e){return e.value===a.pccList[2]}))[0].label,a.psWkPlace=a.psProvince+a.psCity+a.psArea;var s="";a.pccList.forEach((function(e){return s+=e+"@"})),a.pccList=s,a.psStatus=1;var n=a.psTagListName,c="";n.forEach((function(e){return c+=e+"@"})),a.psTagListName=c,t.companyList.length>1?a.psCompanyName=t.companyList.filter((function(e){return e.id=a.psCompanyId}))[0].cpName:(a.psCompanyId=t.companyList[0].id,a.psCompanyName=t.companyList[0].cpName);var u=a.psStrengthEnd;a.psStrengthEnd=t.dayjs(u).format("YYYY-MM-DD HH:mm:ss"),a.ageLimit&&(a.ageLimit=t.dayjs(a.ageLimit).format("YYYY-MM-DD HH:mm:ss")),a.showTime&&(a.showTime=t.dayjs(a.showTime).format("HH:mm:ss")),a.psJdContent=t.detail,Object(i["a"])(a).then((function(e){t.confirmLoading=!1,0==e.code?(t.$message.success("新增成功"),t.handleCancel(),t.$emit("ok",a)):t.$message.info("新增失败："+e.message)})).finally((function(e){t.confirmLoading=!1}))}}))},handleCancel:function(){this.form.resetFields(),this.visible=!1},onChange:function(e){},handleChange:function(e){},tagChange:function(e){this.tags=e},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},contentChange:function(e){}}},d=u,p=(a("b5e7"),a("2877")),m=Object(p["a"])(d,r,o,!1,null,"f6c9cef0",null);t["default"]=m.exports},b2b6:function(e,t,a){},b5e7:function(e,t,a){"use strict";a("b2b6")},d507:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return s}));var r=a("b775");function o(){return Object(r["b"])({url:"/ysCompany/nameList",method:"POST"})}function i(e){return Object(r["b"])({url:"/ysCompany/list",method:"post",params:e})}function s(e){return Object(r["b"])({url:"/ysCompany/tree",method:"post",params:e})}},eed9:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("b775");function o(e){return Object(r["b"])({url:"/dict/listByCategory?category=".concat(e),method:"get"})}}}]);