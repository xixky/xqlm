(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-745d4b50","chunk-0066f3bc","chunk-05a4bde9"],{2015:function(e,t,a){},"25fa":function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return n})),a.d(t,"f",(function(){return l})),a.d(t,"e",(function(){return c}));var r=a("b775");function o(e){return Object(r["b"])({url:"/sysOrg/tree",method:"get",params:e})}function s(e){return Object(r["b"])({url:"/sysOrg/list",method:"get",params:e})}function i(e){return Object(r["b"])({url:"/sysOrg/page",method:"get",params:e})}function n(e){return Object(r["b"])({url:"/sysOrg/add",method:"post",data:e})}function l(e){return Object(r["b"])({url:"/sysOrg/edit",method:"post",data:e})}function c(e){return Object(r["b"])({url:"/sysOrg/delete",method:"post",data:e})}},"2c6e":function(e,t,a){"use strict";a("4e43")},"4d0e":function(e,t,a){"use strict";a("2015")},"4e43":function(e,t,a){},"51ba":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:5,sm:24}},[a("a-card",{attrs:{bordered:!1,loading:e.treeLoading}},[""!=this.orgTree?a("div",[e.orgTree.length?a("a-tree",{staticStyle:{scroll:"true"},attrs:{treeData:e.orgTree,defaultExpandAll:!0,defaultExpandedKeys:e.defaultExpandedKeys,replaceFields:e.replaceFields},on:{select:e.handleClick}}):e._e()],1):a("div",[a("a-empty",{attrs:{image:e.simpleImage}})],1)])],1),a("a-col",{attrs:{md:19,sm:24}},[a("a-card",{attrs:{bordered:!1}},[e.hasPerm("ysCompany:list")?a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"园所名称"}},[a("a-input",{attrs:{"allow-clear":"",placeholder:"请输入园所名称"},model:{value:e.queryParam.cpName,callback:function(t){e.$set(e.queryParam,"cpName",t)},expression:"queryParam.cpName"}})],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.table.refresh(!0)}}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(){return e.queryParam={}}}},[e._v("重置")])],1),a("a-col",{attrs:{md:8,sm:24}})],1)],1)],1):e._e(),e.hasPerm("ysCompany:add")?a("div",{staticClass:"table-operator"},[e.hasPerm("ysCompany:add")?a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.$refs.addForm.add()}}},[e._v("新增机构")]):e._e()],1):e._e(),a("s-table",{ref:"table",attrs:{size:"default",columns:e.columns,data:e.loadData,alert:!0,rowKey:function(e){return e.id}},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[e.hasPerm("ysCompany:edit")?a("a",{on:{click:function(t){return e.$refs.editForm.edit(r)}}},[e._v("编辑")]):e._e(),e.hasPerm("ysCompany:edit")&e.hasPerm("ysCompany:delete")?a("a-divider",{attrs:{type:"vertical"}}):e._e(),e.hasPerm("ysCompany:delete")?a("a-popconfirm",{attrs:{placement:"topRight",title:"确认删除？"},on:{confirm:function(){return e.sysOrgDelete(r)}}},[a("a",[e._v("删除")])]):e._e()],1)}}])}),a("add-form",{ref:"addForm",on:{ok:e.handleOk}}),a("edit-form",{ref:"editForm",on:{ok:e.handleOk}})],1)],1)],1)},o=[],s=a("b85c"),i=(a("06f4"),a("fc25")),n=(a("d3b7"),a("25f0"),a("2af9")),l=a("25fa"),c=a("d507"),d=a("ba74"),u=a("7b7d"),m=(a("4360"),{components:{STable:n["r"],addForm:d["default"],editForm:u["default"]},data:function(){var e=this;return{advanced:!1,queryParam:{},columns:[{title:"id",dataIndex:"id"},{title:"园所名称",dataIndex:"cpName"},{title:"园所规模",dataIndex:"cpRangeName"},{title:"园所性质",dataIndex:"cpModeName"},{title:"岗位数量",dataIndex:"positionCount"},{title:"简历数量",dataIndex:"resumeCount"},{title:"未处理简历数量",dataIndex:"noReadResumeCount"}],loadData:function(t){return Object(c["c"])(Object.assign(t,e.queryParam)).then((function(e){return e.data}))},orgTree:[],selectedRowKeys:[],selectedRows:[],defaultExpandedKeys:[],expandedKeys:[],searchValue:"",autoExpandParent:!0,treeLoading:!0,simpleImage:i["a"].PRESENTED_IMAGE_SIMPLE,replaceFields:{key:"id"}}},created:function(){this.getOrgTree(),(this.hasPerm("ysCompany:edit")||this.hasPerm("ysCompany:delete"))&&this.columns.push({title:"操作",width:"150px",dataIndex:"action",scopedSlots:{customRender:"action"}})},methods:{getOrgTree:function(){var e=this;Object(c["e"])(Object.assign(this.queryParam)).then((function(t){if(e.treeLoading=!1,t.success){e.orgTree=t.data,e.queryParam.orgId=e.orgTree[0].id;var a,r=Object(s["a"])(t.data);try{for(r.s();!(a=r.n()).done;){var o=a.value;0==o.parentId&&e.defaultExpandedKeys.push(o.id)}}catch(i){r.e(i)}finally{r.f()}e.$refs.table.refresh()}}))},sysOrgDelete:function(e){var t=this;Object(l["e"])(e).then((function(e){e.success?(t.$message.success("删除成功"),t.getOrgTree(),t.$refs.table.refresh()):t.$message.error("删除失败："+e.message)})).catch((function(e){t.$message.error("删除错误："+e.message)}))},handleClick:function(e){this.queryParam={orgId:e.toString()},this.$refs.table.refresh(!0)},toggleAdvanced:function(){this.advanced=!this.advanced},handleOk:function(){this.getOrgTree(),this.$refs.table.refresh()},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t}}}),p=m,f=(a("4d0e"),a("2877")),h=Object(f["a"])(p,r,o,!1,null,null,null);t["default"]=h.exports},6174:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"editor"},[a("div",{ref:"toolbar",staticClass:"toolbar"}),a("div",{ref:"editor",staticClass:"text"})])},o=[],s=a("1a0b"),i=a.n(s),n={data:function(){return{editor:null,info_:null}},model:{prop:"value",event:"change"},props:{value:{type:String,default:""},isClear:{type:Boolean,default:!1}},watch:{isClear:function(e){e&&(this.editor.txt.clear(),this.info_=null)},value:function(e){e!==this.editor.txt.html()&&this.editor.txt.html(this.value)}},mounted:function(){this.seteditor(),this.editor.txt.html(this.value)},methods:{seteditor:function(){var e=this;this.editor=new i.a(this.$refs.toolbar,this.$refs.editor),this.editor.customConfig.uploadImgShowBase64=!1,this.editor.customConfig.uploadImgServer="/apisc/fileoss/uploadFile",this.editor.customConfig.uploadImgHeaders={Authorization:this.$store.state.user.token},this.editor.customConfig.uploadFileName="file",this.editor.customConfig.uploadImgMaxSize=2097152,this.editor.customConfig.uploadImgMaxLength=6,this.editor.customConfig.uploadImgTimeout=18e4,this.editor.customConfig.menus=["head","bold","fontSize","fontName","italic","underline","strikeThrough","foreColor","backColor","link","list","justify","quote","image","table","undo","redo","fullscreen"],this.editor.customConfig.uploadImgHooks={fail:function(e,t,a){},success:function(e,t,a){},timeout:function(e,t){},error:function(e,t){},customInsert:function(e,t,a){var r=t.data.url;e(r)}},this.editor.customConfig.onchange=function(t){e.info_=t,e.$emit("change",e.info_)},this.editor.create()}}},l=n,c=(a("2c6e"),a("2877")),d=Object(c["a"])(l,r,o,!1,null,"1dabe3f1",null);t["a"]=d.exports},"7b7d":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"编辑机构",width:900,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.formLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"园所名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cpName",{rules:[{required:!0,message:"请输入园所名称！"}]}],expression:"['cpName', {rules: [{required: true, message: '请输入园所名称！'}]}]"}],attrs:{placeholder:"请输入岗位名称"}})],1),a("a-form-item",{attrs:{label:"联系人名",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cpContactName",{rules:[{required:!0,message:"请输入联系人名！"}]}],expression:"['cpContactName', {rules: [{required: true, message: '请输入联系人名！'}]}]"}],attrs:{placeholder:"请输入联系人名"}})],1),a("a-form-item",{attrs:{label:"联系人电话",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cpContactMobile",{rules:[{required:!0,message:"请输入联系人电话！"}]}],expression:"['cpContactMobile', {rules: [{required: true, message: '请输入联系人电话！'}]}]"}],attrs:{placeholder:"请输入联系人电话"}})],1),a("a-form-item",{attrs:{label:"上级机构",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgId",{rules:[{required:!0,message:"请选择上级机构！"}]}],expression:"['orgId', {rules: [{ required: true, message: '请选择上级机构！' }]}]"}],staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"300px",overflow:"auto"},treeData:e.orgTree,placeholder:"请选择上级机构",treeDefaultExpandAll:""},scopedSlots:e._u([{key:"title",fn:function(t){var r=t.id;return a("span",{},[e._v(e._s(r)+" ")])}}])})],1),a("a-form-item",{attrs:{label:"园所规模",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["cpRange",{rules:[{required:!0,message:"选择园所规模"}]}],expression:"['cpRange', {rules: [{required: true, message: '选择园所规模'}]}]"}],staticStyle:{width:"400px"},attrs:{"show-search":"",placeholder:"选择园所规模","option-filter-prop":"children","filter-option":e.filterOption}},e._l(e.rangeList,(function(t,r){return a("a-select-option",{key:t.tag,attrs:{index:r,item:t,value:t.tag}},[e._v(" "+e._s(t.content)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"园所性质",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["cpMode",{rules:[{required:!0,message:"选择园所性质"}]}],expression:"['cpMode', {rules: [{required: true, message: '选择园所性质'}]}]"}],staticStyle:{width:"400px"},attrs:{"show-search":"",placeholder:"选择园所性质","option-filter-prop":"children","filter-option":e.filterOption}},e._l(e.modeList,(function(t,r){return a("a-select-option",{key:t.tag,attrs:{index:r,item:t,value:t.tag}},[e._v(" "+e._s(t.content)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"标签列表",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["psTagListName",{rules:[{required:!0,message:"请选择园所标签"}]}],expression:"['psTagListName', {rules: [{required: true, message: '请选择园所标签'}]}]"}],staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:"选择园所标签",value:e.tags},on:{change:e.tagChange}},e._l(e.filteredOptions,(function(t,r){return a("a-select-option",{key:t,attrs:{index:r,value:t}},[e._v(" "+e._s(t)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"工作地点",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["pccList",{rules:[{required:!0,message:"请选择工作地点"}]}],expression:"['pccList', {rules: [{required: true, message: '请选择工作地点'}]}]"}],staticStyle:{width:"400px"},attrs:{"default-value":e.cityList,options:e.cityArray,placeholder:"请选择工作地点"},on:{change:e.onChange}})],1),a("a-form-item",{attrs:{label:"详细地址",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["detailAddress",{rules:[{required:!0,message:"请输入详细地址！"}]}],expression:"['detailAddress', {rules: [{required: true, message: '请输入详细地址！'}]}]"}],attrs:{placeholder:"请输入详细地址"}})],1),a("a-form-item",{attrs:{label:"有效时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["expireTime",{rules:[{required:!0,message:"请选择有效时间"}]}],expression:"['expireTime', {rules: [{required: true, message: '请选择有效时间'}]}]"}],attrs:{format:"YYYY-MM-DD"},on:{change:e.onChange}})],1),a("a-form-item",{attrs:{label:"园所简介",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}}),a("div",{staticClass:"editer"},[a("editor",{attrs:{isClear:e.isClear},on:{change:e.onChange},model:{value:e.detail,callback:function(t){e.detail=t},expression:"detail"}})],1)],1)],1)],1)},o=[],s=(a("4de4"),a("caad"),a("2532"),a("d81d"),a("ac1f"),a("1276"),a("25eb"),a("a9e3"),a("d3b7"),a("eed9")),i=a("d507"),n=a("6364"),l=a("6174"),c={components:{editor:l["a"]},data:function(){return{labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}},orgTree:[],visible:!1,confirmLoading:!1,formLoading:!0,form:this.$form.createForm(this),cityArray:n["default"],cityList:[],rangeList:[],typeList:[],modeList:[],tagList:[],tags:[],detail:""}},computed:{filteredOptions:function(){var e=this;return this.tagList.filter((function(t){return!e.tags.includes(t)}))}},methods:{edit:function(e){var t=this;this.visible=!0;var a=this;Object(s["a"])("ORG_RANGE").then((function(e){return t.rangeList=e.data})),Object(s["a"])("ORG_TAG").then((function(e){return t.tagList=e.data.map((function(e){return e.content}))})),Object(s["a"])("ORG_TYPE").then((function(e){return t.modeList=e.data}));var r=e.pccList.split("@").filter((function(e){return""!=e}));r=r.map((function(e){return Number.parseInt(e)})),a.cityList=r;var o=e.cpTagListName.split("@").filter((function(e){return""!=e}));o=o.filter((function(e){return""!=e})),a.tags=o,this.detail=e.cpInfo,this.getOrgTree(),setTimeout((function(){t.form.setFieldsValue({id:e.id,cpName:e.cpName,orgId:e.orgId,cpTagList:e.cpTagList,cpMode:e.cpMode,cpType:e.cpType,cpRange:e.cpRange,detailAddress:e.detailAddress,cpInfo:e.cpInfo,cpContactName:e.cpContactName,cpContactMobile:e.cpContactMobile,pccList:r,expireTime:e.expireTime})}),100)},getOrgTree:function(){var e=this;Object(i["e"])().then((function(t){e.formLoading=!1,t.success?e.orgTree=[{id:"-1",parentId:"0",title:"顶级",value:"0",pid:"0",children:t.data}]:e.orgTree=[]}))},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,a){t?e.confirmLoading=!1:Object(i["b"])(a).then((function(t){t.success?(e.$message.success("编辑成功"),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",a),e.form.resetFields()):e.$message.error("编辑失败："+t.message)})).finally((function(t){e.confirmLoading=!1}))}))},handleCancel:function(){this.form.resetFields(),this.visible=!1},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},onChange:function(e){},handleChange:function(e){},tagChange:function(e){this.tags=e}}},d=c,u=a("2877"),m=Object(u["a"])(d,r,o,!1,null,null,null);t["default"]=m.exports},b85c:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0");var r=a("06c5");function o(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Object(r["a"])(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var o=0,s=function(){};return{s:s,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,n=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return n=e.done,e},e:function(e){l=!0,i=e},f:function(){try{n||null==a["return"]||a["return"]()}finally{if(l)throw i}}}}},ba74:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"新增机构",width:900,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.formLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"园所名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cpName",{rules:[{required:!0,message:"请输入园所名称！"}]}],expression:"['cpName', {rules: [{required: true, message: '请输入园所名称！'}]}]"}],attrs:{placeholder:"请输入岗位名称"}})],1),a("a-form-item",{attrs:{label:"联系人名",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cpContactName",{rules:[{required:!0,message:"请输入联系人名！"}]}],expression:"['cpContactName', {rules: [{required: true, message: '请输入联系人名！'}]}]"}],attrs:{placeholder:"请输入联系人名"}})],1),a("a-form-item",{attrs:{label:"联系人电话",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cpContactMobile",{rules:[{required:!0,message:"请输入联系人电话！"}]}],expression:"['cpContactMobile', {rules: [{required: true, message: '请输入联系人电话！'}]}]"}],attrs:{placeholder:"请输入联系人电话"}})],1),a("a-form-item",{attrs:{label:"上级机构",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgId",{rules:[{required:!0,message:"请选择上级机构！"}]}],expression:"['orgId', {rules: [{ required: true, message: '请选择上级机构！' }]}]"}],staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"300px",overflow:"auto"},treeData:e.orgTree,placeholder:"请选择上级机构",treeDefaultExpandAll:""},scopedSlots:e._u([{key:"title",fn:function(t){var r=t.id;return a("span",{},[e._v(e._s(r)+" ")])}}])})],1),a("a-form-item",{attrs:{label:"园所规模",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["cpRange",{rules:[{required:!0,message:"选择园所规模"}]}],expression:"['cpRange', {rules: [{required: true, message: '选择园所规模'}]}]"}],staticStyle:{width:"400px"},attrs:{"show-search":"",placeholder:"选择园所规模","option-filter-prop":"children","filter-option":e.filterOption}},e._l(e.rangeList,(function(t,r){return a("a-select-option",{key:t.tag,attrs:{index:r,item:t,value:t.tag}},[e._v(" "+e._s(t.content)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"园所性质",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["cpMode",{rules:[{required:!0,message:"选择园所性质"}]}],expression:"['cpMode', {rules: [{required: true, message: '选择园所性质'}]}]"}],staticStyle:{width:"400px"},attrs:{"show-search":"",placeholder:"选择园所性质","option-filter-prop":"children","filter-option":e.filterOption}},e._l(e.modeList,(function(t,r){return a("a-select-option",{key:t.tag,attrs:{index:r,item:t,value:t.tag}},[e._v(" "+e._s(t.content)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"标签列表",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["psTagListName",{rules:[{required:!0,message:"请选择园所标签"}]}],expression:"['psTagListName', {rules: [{required: true, message: '请选择园所标签'}]}]"}],staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:"选择园所标签",value:e.tags},on:{change:e.tagChange}},e._l(e.filteredOptions,(function(t,r){return a("a-select-option",{key:t,attrs:{index:r,value:t}},[e._v(" "+e._s(t)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"工作地点",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["pccList",{rules:[{required:!0,message:"请选择工作地点"}]}],expression:"['pccList', {rules: [{required: true, message: '请选择工作地点'}]}]"}],staticStyle:{width:"400px"},attrs:{"default-value":e.cityList,options:e.cityArray,placeholder:"请选择工作地点"},on:{change:e.onChange}})],1),a("a-form-item",{attrs:{label:"详细地址",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["detailAddress",{rules:[{required:!0,message:"请输入详细地址！"}]}],expression:"['detailAddress', {rules: [{required: true, message: '请输入详细地址！'}]}]"}],attrs:{placeholder:"请输入详细地址"}})],1),a("a-form-item",{attrs:{label:"有效时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["expireTime",{rules:[{required:!0,message:"请选择有效时间"}]}],expression:"['expireTime', {rules: [{required: true, message: '请选择有效时间'}]}]"}],attrs:{format:"YYYY-MM-DD"},on:{change:e.onChange}})],1),a("a-form-item",{attrs:{label:"园所简介",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"has-feedback":""}}),a("div",{staticClass:"editer"},[a("editor",{attrs:{isClear:e.isClear},on:{change:e.onChange},model:{value:e.detail,callback:function(t){e.detail=t},expression:"detail"}})],1)],1)],1)],1)},o=[],s=(a("d3b7"),a("25fa"),a("eed9"),a("d507")),i=(a("6364"),a("6174"),{data:function(){return{labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}},orgTree:[],visible:!1,confirmLoading:!1,formLoading:!0,form:this.$form.createForm(this)}},methods:{add:function(){this.visible=!0,this.getOrgTree()},getOrgTree:function(){var e=this;Object(s["e"])().then((function(t){e.formLoading=!1,t.success?e.orgTree=[{id:"-1",parentId:"0",title:"顶级",value:"0",pid:"0",children:t.data}]:e.orgTree=[]}))},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,a){t?e.confirmLoading=!1:Object(s["a"])(a).then((function(t){t.success?(e.$message.success("新增成功"),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",a),e.form.resetFields()):e.$message.error("新增失败："+t.message)})).finally((function(t){e.confirmLoading=!1}))}))},handleCancel:function(){this.form.resetFields(),this.visible=!1}}}),n=i,l=a("2877"),c=Object(l["a"])(n,r,o,!1,null,null,null);t["default"]=c.exports},d507:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"e",(function(){return i})),a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return l}));var r=a("b775");function o(){return Object(r["b"])({url:"/ysCompany/nameList",method:"POST"})}function s(e){return Object(r["b"])({url:"/ysCompany/list",method:"post",params:e})}function i(e){return Object(r["b"])({url:"/ysCompany/tree",method:"post",params:e})}function n(e){return Object(r["b"])({url:"/ysCompany/add",method:"post",data:e})}function l(e){return Object(r["b"])({url:"/ysCompany/update",method:"post",data:e})}},eed9:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("b775");function o(e){return Object(r["b"])({url:"/dict/listByCategory?category=".concat(e),method:"get"})}}}]);