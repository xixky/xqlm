(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-696f8904"],{"25b3":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:"新增岗位",width:900,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[i("a-spin",{attrs:{spinning:t.confirmLoading}},[i("a-form",{attrs:{form:t.form}},[i("a-form-item",{attrs:{label:"问题标题",labelCol:t.labelCol,wrapperCol:t.wrapperCol,"has-feedback":""}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["topicTitle",{rules:[{required:!0,message:"请输入问题标题！"}]}],expression:"['topicTitle', {rules: [{required: true, message: '请输入问题标题！'}]}]"}],attrs:{placeholder:"请输入问题标题"}})],1),i("div",{staticClass:"editer"},[i("editor",{attrs:{isClear:t.isClear},on:{change:t.onChange},model:{value:t.detail,callback:function(e){t.detail=e},expression:"detail"}})],1)],1)],1)],1)},n=[],a=(i("d3b7"),i("6eea")),s=i("6174"),r={components:{editor:s["a"]},data:function(){return{labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:15}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),topicId:0,isClear:!1,detail:""}},computed:{},methods:{edit:function(t){var e=this;this.visible=!0;this.detail=t.topicContent,this.topicId=t.id,setTimeout((function(){e.form.setFieldsValue({topicTitle:t.topicTitle})}),100)},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0;var i=this;e((function(e,o){e?t.confirmLoading=!1:(o.id=t.topicId,a["d"](o).then((function(e){o.psJdContent=i.detail,t.confirmLoading=!1,0==e.code?(t.$message.success("编辑成功"),t.handleCancel(),t.$emit("ok",o)):t.$message.info("编辑失败："+e.message)})).finally((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){this.form.resetFields(),this.visible=!1},onChange:function(t){},handleChange:function(t){},tagChange:function(t){this.tags=t},filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0}}},c=r,l=(i("de0c"),i("2877")),u=Object(l["a"])(c,o,n,!1,null,"d7f901ac",null);e["default"]=u.exports},"2c6e":function(t,e,i){"use strict";i("4e43")},"3e25":function(t,e,i){},"4e43":function(t,e,i){},6174:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"editor"},[i("div",{ref:"toolbar",staticClass:"toolbar"}),i("div",{ref:"editor",staticClass:"text"})])},n=[],a=i("1a0b"),s=i.n(a),r={data:function(){return{editor:null,info_:null}},model:{prop:"value",event:"change"},props:{value:{type:String,default:""},isClear:{type:Boolean,default:!1}},watch:{isClear:function(t){t&&(this.editor.txt.clear(),this.info_=null)},value:function(t){t!==this.editor.txt.html()&&this.editor.txt.html(this.value)}},mounted:function(){this.seteditor(),this.editor.txt.html(this.value)},methods:{seteditor:function(){var t=this;this.editor=new s.a(this.$refs.toolbar,this.$refs.editor),this.editor.customConfig.uploadImgShowBase64=!1,this.editor.customConfig.uploadImgServer="/apisc/fileoss/uploadFile",this.editor.customConfig.uploadImgHeaders={Authorization:this.$store.state.user.token},this.editor.customConfig.uploadFileName="file",this.editor.customConfig.uploadImgMaxSize=2097152,this.editor.customConfig.uploadImgMaxLength=6,this.editor.customConfig.uploadImgTimeout=18e4,this.editor.customConfig.menus=["head","bold","fontSize","fontName","italic","underline","strikeThrough","foreColor","backColor","link","list","justify","quote","image","table","undo","redo","fullscreen"],this.editor.customConfig.uploadImgHooks={fail:function(t,e,i){},success:function(t,e,i){},timeout:function(t,e){},error:function(t,e){},customInsert:function(t,e,i){var o=e.data.url;t(o)}},this.editor.customConfig.onchange=function(e){t.info_=e,t.$emit("change",t.info_)},this.editor.create()}}},c=r,l=(i("2c6e"),i("2877")),u=Object(l["a"])(c,o,n,!1,null,"1dabe3f1",null);e["a"]=u.exports},"6eea":function(t,e,i){"use strict";i.d(e,"c",(function(){return n})),i.d(e,"b",(function(){return a})),i.d(e,"d",(function(){return s})),i.d(e,"a",(function(){return r}));i("99af");var o=i("b775");function n(t,e){return Object(o["b"])({url:"/topic/list?pageNo=".concat(e.pageNo,"&pageSize=").concat(e.pageSize),method:"post",data:t})}function a(t){return Object(o["b"])({url:"/topic/get",method:"post",data:t})}function s(t){return Object(o["b"])({url:"/topic/update",method:"post",data:t})}function r(t){return Object(o["b"])({url:"/topic/delete",method:"post",data:t})}},de0c:function(t,e,i){"use strict";i("3e25")}}]);