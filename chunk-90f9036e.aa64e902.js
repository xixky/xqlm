(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90f9036e"],{2316:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"d",(function(){return n})),r.d(t,"f",(function(){return c}));var i=r("b775");function a(e){return Object(i["b"])({url:"/sysApp/page",method:"get",params:e})}function o(e){return Object(i["b"])({url:"/sysApp/list",method:"get",params:e})}function s(e){return Object(i["b"])({url:"/sysApp/add",method:"post",data:e})}function l(e){return Object(i["b"])({url:"/sysApp/edit",method:"post",data:e})}function n(e){return Object(i["b"])({url:"/sysApp/delete",method:"post",data:e})}function c(e){return Object(i["b"])({url:"/sysApp/setAsDefault",method:"post",data:e})}},c8d5:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:"编辑菜单",width:1e3,visible:e.visible,confirmLoading:e.confirmLoading,destroyOnClose:!0},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.formLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id"],expression:"['id']"}]})],1),r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{md:12,sm:24}},[r("a-form-item",{attrs:{label:"菜单名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol,hasFeedback:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,min:1,message:"请输入菜单名称！"}]}],expression:"['name',{rules: [{required: true, min: 1, message: '请输入菜单名称！'}]}]"}],attrs:{placeholder:"请输入菜单名称"}})],1)],1),r("a-col",{attrs:{md:12,sm:24}},[r("a-form-item",{staticStyle:{width:"100%"},attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"菜单编号",hasFeedback:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code",{rules:[{required:!0,min:1,message:"请输入菜单编号！"}]}],expression:"['code', {rules: [{required: true, min: 1, message: '请输入菜单编号！'}]}]"}],attrs:{placeholder:"请输入菜单编号"}})],1)],1)],1),r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{md:12,sm:24}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"所属应用","has-feedback":""}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["application",{rules:[{required:!0,message:"请选择应用分类！"}]}],expression:"['application', {rules: [{ required: true, message: '请选择应用分类！' }]}]"}],staticStyle:{width:"100%"},attrs:{disabled:e.appDisabled,placeholder:"请选择应用分类"}},e._l(e.appData,(function(t,i){return r("a-select-option",{key:i,attrs:{value:t.code},on:{click:function(r){return e.changeApplication(t.code)}}},[e._v(e._s(t.name))])})),1)],1)],1),r("a-col",{attrs:{md:12,sm:24}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"菜单层级"}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:"请选择菜单层级！"}]}],expression:"['type',{rules: [{ required: true, message: '请选择菜单层级！' }]}]"}]},e._l(e.typeData,(function(t,i){return r("a-radio",{key:i,attrs:{value:t.code},on:{click:function(r){return e.meneTypeFunc(t.code)}}},[e._v(e._s(t.value))])})),1)],1)],1)],1),r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{md:12,sm:24}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.pidShow,expression:"pidShow"}]},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"父级菜单","has-feedback":""}},[r("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["pid",{rules:[{required:!0,message:"请选择父级菜单！"}]}],expression:"['pid', {rules: [{ required: true, message: '请选择父级菜单！' }]}]"}],staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"300px",overflow:"auto"},treeData:e.menuTreeData,placeholder:"请选择父级菜单",treeDefaultExpandAll:""},on:{change:e.setPid},scopedSlots:e._u([{key:"title",fn:function(t){var i=t.id;return r("span",{},[e._v(e._s(i)+" ")])}}])})],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.redirectShow,expression:"redirectShow"}]},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("span",{attrs:{slot:"label"},slot:"label"},[r("a-tooltip",{attrs:{title:"如需打开首页加载此目录下菜单，请填写加载菜单路由，设为首页后其他设置的主页将被替代"}},[r("a-icon",{attrs:{type:"question-circle-o"}})],1),e._v("  重定向 ")],1),r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["redirect"],expression:"['redirect']"}],attrs:{prop:"redirect",placeholder:"请输入重定向地址"}})],1)],1)]),r("a-col",{attrs:{md:12,sm:24}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("span",{attrs:{slot:"label"},slot:"label"},[r("a-tooltip",{attrs:{title:"按钮：无，菜单：内链、外链、组件"}},[r("a-icon",{attrs:{type:"question-circle-o"}})],1),e._v("  打开方式 ")],1),r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["openType",{rules:[{required:!0,message:"请选择打开方式！"}]}],expression:"['openType',{rules: [{ required: true, message: '请选择打开方式！' }]}]"}],attrs:{disabled:e.openTypeDisabled}},e._l(e.openTypeData,(function(t,i){return r("a-radio",{key:i,attrs:{value:t.code},on:{click:function(r){return e.meneOpenTypeFunc(t.code)}}},[e._v(e._s(t.value))])})),1)],1)],1)],1),r("a-divider"),r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{md:12,sm:24}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.componentShow,expression:"componentShow"}]},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,hasFeedback:""}},[r("span",{attrs:{slot:"label"},slot:"label"},[r("a-tooltip",{attrs:{title:"前端vue组件 views文件夹下路径，例：system/menu/index。注：目录级填写：RouteView(不带面包屑)，PageView(带面包屑)，菜单级内链打开http链接填写：Iframe"}},[r("a-icon",{attrs:{type:"question-circle-o"}})],1),e._v("  前端组件 ")],1),r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["component",{rules:[{required:e.componentRequired,message:"请输入前端组件"}]}],expression:"['component',{rules: [{required: componentRequired, message: '请输入前端组件'}]}]"}],attrs:{placeholder:"请输入前端组件",disabled:e.componentDisabled,prop:"component"}})],1)],1)]),r("a-col",{attrs:{md:12,sm:24}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.routerShow,expression:"routerShow"}]},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,hasFeedback:""}},[r("span",{attrs:{slot:"label"},slot:"label"},[r("a-tooltip",{attrs:{title:"浏览器显示的URL，例：/menu，对应打开页面为菜单页面"}},[r("a-icon",{attrs:{type:"question-circle-o"}})],1),e._v("  路由地址 ")],1),r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["router",{rules:[{required:e.routerRequired,message:"请输入路由！"}]}],expression:"['router', {rules: [{required: routerRequired, message: '请输入路由！'}]}]"}],attrs:{placeholder:"请输入路由"}})],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.permissionShow,expression:"permissionShow"}]},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"权限标识",hasFeedback:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["permission",{rules:[{required:e.permissionRequired,message:"请输入权限标识！"}]}],expression:"['permission', {rules: [{required: permissionRequired, message: '请输入权限标识！'}]}]"}],attrs:{placeholder:"请输入权限标识"}})],1)],1)])],1),r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{md:12,sm:24}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.linkShow,expression:"linkShow"}]},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,hasFeedback:""}},[r("span",{attrs:{slot:"label"},slot:"label"},[r("a-tooltip",{attrs:{title:"当选择了需要内链或外链打开的选项，此处输入要打开的链接地址，例：https://www.stylefeng.cn"}},[r("a-icon",{attrs:{type:"question-circle-o"}})],1),e._v("  内外链地址 ")],1),r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["link",{rules:[{required:e.linkRequired,message:"请输入权限标识！"}]}],expression:"['link', {rules: [{required: linkRequired, message: '请输入权限标识！'}]}]"}],attrs:{placeholder:"请输入内链打开地址",disabled:e.linkDisabled}})],1)],1)]),r("a-col",{attrs:{md:12,sm:24}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.iconShow,expression:"iconShow"}]},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"图标"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["icon"],expression:"['icon']"}],attrs:{placeholder:"请选择图标",disabled:"disabled"}},[r("a-icon",{attrs:{slot:"addonAfter",type:"setting"},on:{click:function(t){return e.openIconSele()}},slot:"addonAfter"})],1)],1)],1)])],1),r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{md:12,sm:24}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("span",{attrs:{slot:"label"},slot:"label"},[r("a-tooltip",{attrs:{title:"系统权重：菜单可分配给任何角色，业务权重：菜单对超级管理员不可见"}},[r("a-icon",{attrs:{type:"question-circle-o"}})],1),e._v("  权重 ")],1),r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["weight"],expression:"['weight']"}]},e._l(e.weightData,(function(t,i){return r("a-radio",{key:i,attrs:{value:t.code}},[e._v(e._s(t.value))])})),1)],1)],1),r("a-col",{attrs:{md:12,sm:24}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"是否可见"}},[r("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["visible",{valuePropName:"checked"}],expression:"['visible', { valuePropName: 'checked' }]"}],attrs:{id:"visible",checkedChildren:"是",unCheckedChildren:"否"}})],1)],1)],1),r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{md:12,sm:24}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100}],expression:"['sort', { initialValue: 100 }]"}],staticStyle:{width:"100%"},attrs:{min:1,max:1e3}})],1)],1),r("a-col",{attrs:{md:12,sm:24}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注",hasFeedback:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["remark"],expression:"['remark']"}],attrs:{placeholder:"请输入备注"}})],1)],1)],1)],1)],1),r("a-modal",{attrs:{width:850,visible:e.visibleIcon,footer:"",mask:!1,closable:!1,destroyOnClose:!0},on:{cancel:e.handleCancelIcon}},[r("icon-selector",{on:{change:e.handleIconChange},model:{value:e.currentSelectedIcon,callback:function(t){e.currentSelectedIcon=t},expression:"currentSelectedIcon"}})],1)],1)},a=[],o=(r("d3b7"),r("25f0"),r("b0c0"),r("9911"),r("4e82"),r("2316")),s=r("0bfe"),l=r("13bb"),n=r("126f"),c={name:"MenuEdit",components:{IconSelector:l["a"]},data:function(){return{labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:16}},visibleIcon:!1,visible:!1,confirmLoading:!1,appData:[],menuTreeData:[],redirectShow:!0,componentShow:!0,componentDisabled:!1,componentRequired:!0,routerRequired:!0,routerShow:!0,iconShow:!0,openTypeShow:!0,pidShow:!0,permissionShow:!0,permissionRequired:!0,currentSelectedIcon:"pause-circle",typeData:[],openTypeData:[],weightData:[],formLoading:!0,linkShow:!0,openTypeDisabled:!1,openTypeDefault:[],openType:"",linkRequired:!0,linkDisabled:!1,type:"",pid:"",appDisabled:!1,form:this.$form.createForm(this)}},watch:{pid:function(e){this.appDisabled="0"!==e}},methods:{edit:function(e){var t=this;this.visible=!0,this.getSysApplist(),this.sysDictTypeDropDown(),this.currentSelectedIcon=e.icon,this.form.getFieldDecorator("type",{valuePropName:"checked",initialValue:e.type.toString()}),this.meneTypeFunc(e.type.toString(),e.openType.toString());"Y"==e.visible&&(this.visibleDef=!0),this.form.getFieldDecorator("weight",{valuePropName:"checked",initialValue:e.weight.toString()}),this.form.getFieldDecorator("visible",{valuePropName:"checked",initialValue:this.visibleDef}),this.form.getFieldDecorator("icon",{initialValue:e.icon}),setTimeout((function(){t.setMenuItem(e),t.changeApplication(e.application)}),100)},setMenuItem:function(e){this.form.setFieldsValue({id:e.id,name:e.name,code:e.code,application:e.application,redirect:e.redirect,component:e.component,permission:e.permission,link:e.link,router:e.router,sort:e.sort,remark:e.remark}),this.form.getFieldDecorator("pid",{initialValue:e.pid}),this.pid=e.pid},sysDictTypeDropDown:function(){var e=this;this.formLoading=!0,Object(n["c"])({code:"menu_type"}).then((function(t){e.typeData=t.data})),Object(n["c"])({code:"menu_weight"}).then((function(t){e.weightData=t.data})),Object(n["c"])({code:"open_type"}).then((function(t){e.openTypeData=t.data,e.formLoading=!1}))},setPid:function(e){this.pid=e},getSysApplist:function(){var e=this;return Object(o["a"])().then((function(t){t.success?e.appData=t.data:e.$message.warning(t.message)}))},changeApplication:function(e){var t=this;Object(s["c"])({application:e}).then((function(e){e.success?(t.form.resetFields("pid",[]),t.menuTreeData=[{id:"-1",parentId:"0",title:"顶级",value:"0",pid:"0",children:e.data}]):t.$message.warning(e.message)}))},meneTypeFunc:function(e,t){this.type=e,"0"!=e&&"1"!=e||(this.linkShow=!0,this.form.resetFields("link",[]),this.iconShow=!0,this.routerRequired=!0,this.form.getFieldDecorator("router",{initialValue:""}),this.routerShow=!0,this.permissionShow=!1,this.permissionRequired=!1,this.form.getFieldDecorator("permission",{initialValue:""}),this.openType=t,this.form.getFieldDecorator("openType",{initialValue:this.openType}),this.openTypeDisabled=!1),"0"==e?(this.redirectShow=!0,this.form.resetFields("redirect",[]),this.componentShow=!0,this.componentDisabled=!1,this.form.getFieldDecorator("component",{initialValue:"PageView"}),this.componentRequired=!0,this.form.getFieldDecorator("pid",{initialValue:"0"}),this.pid="0",this.pidShow=!1):("1"==e&&(this.componentDisabled=!1,this.form.getFieldDecorator("component",{initialValue:""})),this.redirectShow=!1,this.form.getFieldDecorator("redirect",{initialValue:""}),this.pidShow=!0),"2"==e&&(this.componentRequired=!1,this.componentDisabled=!0,this.form.resetFields("component",[]),this.form.getFieldDecorator("component",{initialValue:""}),this.routerRequired=!0,this.form.getFieldDecorator("router",{initialValue:""}),this.routerShow=!1,this.linkShow=!1,this.form.getFieldDecorator("link",{initialValue:""}),this.permissionShow=!0,this.permissionRequired=!0,this.form.getFieldDecorator("permission",{initialValue:""}),this.iconShow=!1,this.form.getFieldDecorator("icon",{initialValue:""}),this.openType="0",this.form.getFieldDecorator("openType",{initialValue:this.openType}),this.openTypeDisabled=!0,this.form.getFieldDecorator("icon",{initialValue:""})),this.meneOpenTypeFunc(this.openType)},meneOpenTypeFunc:function(e){this.form.resetFields("openType",e),"2"==e||"3"==e?(!1===this.linkDisabled&&this.form.resetFields("link",[]),this.linkDisabled=!1,this.linkRequired=!0):(this.linkDisabled=!0,this.form.resetFields("link",[]),this.linkRequired=!1),"3"==e?(this.componentRequired=!1,this.componentDisabled=!0,this.form.resetFields("component",[]),this.form.getFieldDecorator("component",{initialValue:""})):(this.componentRequired=!0,"1"==this.type||"2"==this.type?this.form.getFieldDecorator("component",{initialValue:""}):(this.form.resetFields("component",[]),this.form.getFieldDecorator("component",{initialValue:"PageView"})),"2"==e&&(this.form.resetFields("component",[]),this.form.getFieldDecorator("component",{initialValue:"Iframe"}))),"2"==this.type&&"0"==e&&(this.componentRequired=!1,this.routerRequired=!1)},openIconSele:function(){this.visibleIcon=!0},handleIconChange:function(e){this.form.getFieldDecorator("icon",{initialValue:e}),this.visibleIcon=!1},handleCancelIcon:function(){this.visibleIcon=!1},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,r){t?e.confirmLoading=!1:(r.visible?r.visible="Y":r.visible="N",Object(s["g"])(r).then((function(t){e.confirmLoading=!1,t.success?(e.$message.success("编辑成功"),e.$emit("ok",r),e.handleCancel()):e.$message.error("编辑失败："+t.message)})).finally((function(t){e.confirmLoading=!1})))}))},handleCancel:function(){this.form.resetFields(),this.confirmLoading=!1,this.visible=!1}}},d=c,p=r("2877"),m=Object(p["a"])(d,i,a,!1,null,null,null);t["default"]=m.exports}}]);