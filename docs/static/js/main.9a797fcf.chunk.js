(this.webpackJsonpexpenses=this.webpackJsonpexpenses||[]).push([[0],{33:function(e,t,a){e.exports=a(71)},39:function(e,t,a){},44:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(17),c=a.n(i),r=a(28),o=a(6),l=a(7),d=a(21),u=a(9),p=a(8),m=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("span",{className:"mdc-list-item__start-detail ".concat(this.props.icon),role:"presentation"},s.a.createElement("i",{className:"material-icons","aria-hidden":"true"},this.props.icon||"attach_money"))}}]),a}(n.Component),h=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("li",{className:"mdc-list-item",onClick:function(){return e.props.onSelect(e.props.expense)}},s.a.createElement(m,{icon:this.props.expense.icon}),s.a.createElement("span",{className:"mdc-list-item__text"},this.props.expense.category," (",this.props.expense.topic,")",s.a.createElement("span",{className:"mdc-list-item__text__secondary"},this.props.expense.date,this.props.expense.description?" ".concat(this.props.expense.description.replace(/^(.{14}).+/,"$1\u2026")):"")),s.a.createElement("span",{className:"mdc-list-item__end-detail"},"$",this.props.expense.amount))}}]),a}(n.Component),f=(a(38),a(39),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("ul",{className:"mdc-list mdc-list--two-line mdc-list--avatar-list"},this.props.expenses.map((function(t){return s.a.createElement(h,{key:t.id,expense:t,onSelect:e.props.onSelect})})))}}]),a}(n.Component)),g=a(29),v=a(30),b=(a(40),a(41),a(42),a(25),a(43),a(44),a(3)),E=a(32),x=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var i=b.f.Option;return n.customSelectOption=function(e){return s.a.createElement(i,e,s.a.createElement("i",{className:"material-icons","aria-hidden":"true"},e.data.icon||"attach_money"),e.data.label)},n.customSelectValue=function(e){return s.a.createElement("div",null,s.a.createElement("i",{className:"material-icons","aria-hidden":"true"},e.data.icon||"attach_money"),e.data.label)},n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(E.a,{value:this.props.value,onChange:this.props.onChange,options:this.props.options,components:{Option:this.customSelectOption,SingleValue:this.customSelectValue}})}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target;t.reportValidity(),n.setState({isValid:n.form.checkValidity()}),n.props.onChange(t.name,t.value)},n.handleCategoryChange=function(e){var t=e.value;if(!t)throw new Error("Category cannot be empty");n.setState({isValid:n.form.checkValidity()}),n.props.expense.category=t,n.props.expense.topic="topic-mock",n.props.expense.icon="face"},n.handleSubmit=function(e){e.preventDefault(),n.props.expense.date=n.parseDate(n.props.expense.date),n.props.onSubmit()},n.initializeDeleteModal=function(e){e&&(n.dialog=new v.MDCDialog(e),n.dialog.listen("MDCDialog:accept",(function(){document.body.className=document.body.className.replace("mdc-dialog-scroll-lock",""),n.props.onDelete(n.props.expense)})))},n.state={isValid:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.querySelectorAll(".mdc-textfield").forEach((function(e){new g.MDCTextfield(e)})),void 0===this.props.expense.id&&this.amountInput.focus()}},{key:"parseDate",value:function(e){if(!e||-1!==e.indexOf("-"))return e;var t=e.split("/"),a=+t[2]+2e3,n=t[1].length<2?"0".concat(t[1]):t[1],s=t[0].length<2?"0".concat(t[0]):t[0];return"".concat(a,"-").concat(n,"-").concat(s)}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.handleSubmit,ref:function(t){e.form=t},noValidate:!0},s.a.createElement("aside",{className:"mdc-dialog",ref:this.initializeDeleteModal},s.a.createElement("div",{className:"mdc-dialog__surface"},s.a.createElement("header",{className:"mdc-dialog__header"},s.a.createElement("h2",{className:"mdc-dialog__header__title"},"Are you sure?")),s.a.createElement("section",{className:"mdc-dialog__body"},"Do you really want to delete the expense?"),s.a.createElement("footer",{className:"mdc-dialog__footer"},s.a.createElement("button",{type:"button",className:"mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel"},"Cancel"),s.a.createElement("button",{type:"button",className:"mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept"},"Delete")))),s.a.createElement("div",{className:"mdc-form-field"},s.a.createElement("div",{className:"mdc-textfield"},s.a.createElement("input",{name:"amount",className:"mdc-textfield__input",ref:function(t){e.amountInput=t},value:this.props.expense.amount,onChange:this.handleInputChange,type:"number",step:"0.01",min:"0",required:!0}),s.a.createElement("label",{className:"mdc-textfield__label"},"Amount"))),s.a.createElement("div",{className:"mdc-form-field"},s.a.createElement(x,{name:"category",value:{value:this.props.expense.category,label:this.props.expense.category,icon:this.props.icons[this.props.expense.category],topic:this.props.topics[this.props.expense.category]},onChange:this.handleCategoryChange,options:this.props.categories.map((function(t){return{value:t,label:t,icon:e.props.icons[t],topic:e.props.topics[t]}}))})),s.a.createElement("div",{className:"mdc-form-field"},s.a.createElement("div",{className:"mdc-textfield"},s.a.createElement("input",{name:"description",className:"mdc-textfield__input",value:this.props.expense.description,onChange:this.handleInputChange,type:"text"}),s.a.createElement("label",{className:"mdc-textfield__label"},"Description"))),s.a.createElement("div",{className:"mdc-form-field"},s.a.createElement("div",{className:"mdc-textfield"},s.a.createElement("input",{name:"date",className:"mdc-textfield__input",value:this.parseDate(this.props.expense.date),onChange:this.handleInputChange,type:"date",required:!0}),s.a.createElement("label",{className:"mdc-textfield__label"},"Date"))),s.a.createElement("div",{className:"mdc-form-field"},s.a.createElement("select",{name:"account",className:"mdc-select",value:this.props.expense.account,onChange:this.handleInputChange,required:!0},this.props.accounts.map((function(e){return s.a.createElement("option",{value:e,key:e},e)})))),s.a.createElement("div",{className:"mdc-form-field mdc-form-submit"},s.a.createElement("input",{type:"submit",className:"mdc-button",value:this.props.expense.id?"Update":"Add",disabled:!this.state.isValid}),this.props.expense.id&&s.a.createElement("input",{type:"button",className:"mdc-button",onClick:function(){return e.dialog.show()},value:"Delete"}),s.a.createElement("input",{type:"button",className:"mdc-button",onClick:function(){return e.props.onCancel()},value:"Close"})))}}]),a}(n.Component),_=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"center"},s.a.createElement("svg",{width:"80px",height:"80px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},s.a.createElement("circle",{cx:"84",cy:"50",r:"0",fill:"#c0f6d2"},s.a.createElement("animate",{attributeName:"r",values:"11;0;0;0;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"0s"}),s.a.createElement("animate",{attributeName:"cx",values:"84;84;84;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"0s"})),s.a.createElement("circle",{cx:"40.0957",cy:"50",r:"11",fill:"#ff7c81"},s.a.createElement("animate",{attributeName:"r",values:"0;11;11;11;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"-0.5s"}),s.a.createElement("animate",{attributeName:"cx",values:"16;16;50;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"-0.5s"})),s.a.createElement("circle",{cx:"16",cy:"50",r:"7.79567",fill:"#fac090"},s.a.createElement("animate",{attributeName:"r",values:"0;11;11;11;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"-0.25s"}),s.a.createElement("animate",{attributeName:"cx",values:"16;16;50;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"-0.25s"})),s.a.createElement("circle",{cx:"84",cy:"50",r:"3.20433",fill:"#ffffcb"},s.a.createElement("animate",{attributeName:"r",values:"0;11;11;11;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"0s"}),s.a.createElement("animate",{attributeName:"cx",values:"16;16;50;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"0s"})),s.a.createElement("circle",{cx:"74.0957",cy:"50",r:"11",fill:"#c0f6d2"},s.a.createElement("animate",{attributeName:"r",values:"0;0;11;11;11",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"0s"}),s.a.createElement("animate",{attributeName:"cx",values:"16;16;16;50;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"0s"}))))}}]),a}(n.Component),N=a(31),k=function(){function e(t,a){Object(o.a)(this,e),this.clientId=t,this.spreadsheetId=a}return Object(l.a)(e,[{key:"login",value:function(e){var t=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],clientId:t.clientId,scope:"https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.metadata.readonly"}).then((function(){t.getAuthInstance().isSignedIn.listen(e),e(t.getAuthInstance().isSignedIn.get())}))}))}},{key:"getAuthInstance",value:function(){return window.gapi.auth2.getAuthInstance()}},{key:"append",value:function(e){return window.gapi.client.sheets.spreadsheets.values.append({spreadsheetId:this.spreadsheetId,range:"Expenses!A1",valueInputOption:"USER_ENTERED",insertDataOption:"INSERT_ROWS",values:[e]})}},{key:"update",value:function(e,t){return window.gapi.client.sheets.spreadsheets.values.update({spreadsheetId:this.spreadsheetId,range:e,valueInputOption:"USER_ENTERED",values:[t]})}},{key:"delete",value:function(e){return window.gapi.client.sheets.spreadsheets.batchUpdate({spreadsheetId:this.spreadsheetId,resource:{requests:[{deleteDimension:{range:{sheetId:0,dimension:"ROWS",startIndex:e-1,endIndex:e}}}]}})}},{key:"load",value:function(){return window.gapi.client.sheets.spreadsheets.values.batchGet({spreadsheetId:this.spreadsheetId,ranges:["Data!A2:A200","Data!E2:E200","Data!F2:F200","Data!G2:G200","Expenses!A2:F","Current!H1","Previous!H1"]})}}]),e}(),S=(a(64),a(65),a(66),a(67),a(68),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onKeyPressed=function(t){!0===e.state.signedIn&&(!1===e.state.showExpenseForm?65===t.keyCode&&e.onExpenseNew():27===t.keyCode&&e.handleExpenseCancel())},e.signedInChanged=function(t){e.setState({signedIn:t}),e.state.signedIn&&e.load()},e.handleExpenseSubmit=function(){e.setState({processing:!0,showExpenseForm:!1}),(e.state.expense.id?e.update:e.append).bind(Object(d.a)(e))(e.state.expense).then((function(){e.snackbar.show({message:"Expense ".concat(e.state.expense.id?"updated":"added","!")}),e.load()}),(function(t){console.error("Something went wrong"),console.error(t),e.setState({loading:!1})}))},e.handleExpenseChange=function(t,a){e.setState({expense:Object.assign({},e.state.expense,Object(r.a)({},t,a))})},e.handleExpenseDelete=function(t){e.setState({processing:!0,showExpenseForm:!1});var a=t.id.substring(10);e.sheetService.delete(a).then((function(){e.snackbar.show({message:"Expense deleted!"}),e.load()}),(function(t){console.error("Something went wrong"),console.error(t),e.setState({loading:!1})}))},e.handleExpenseSelect=function(t){e.setState({expense:t,showExpenseForm:!0})},e.handleExpenseCancel=function(){e.setState({showExpenseForm:!1})},e.clientId="758679234250-t9fh8t8ph9pssqb5kekseinfgout8f9i.apps.googleusercontent.com",e.spreadsheetId="1Z-1RXh51c74cw4KMzuSfZ_8NZ34qbNz0McOZMLOyOrY",e.state={signedIn:void 0,accounts:[],categories:[],expenses:[],processing:!0,expense:{},currentMonth:void 0,previousMonth:void 0,showExpenseForm:!1},e.sheetService=new k(e.clientId,e.spreadsheetId),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.sheetService.login(this.signedInChanged),document.addEventListener("keyup",this.onKeyPressed.bind(this))}},{key:"onExpenseNew",value:function(){var e=new Date;this.setState({showExpenseForm:!0,expense:{amount:"",description:"",date:"".concat(e.getFullYear(),"-").concat(e.getMonth()<9?"0"+(e.getMonth()+1):e.getMonth()+1,"-").concat(e.getDate()<10?"0"+e.getDate():e.getDate()),category:this.state.categories[0],account:this.state.accounts[0]}})}},{key:"parseExpense",value:function(e,t,a,n){var s=e[3];return{id:"Expenses!A".concat(t+2),date:e[0],description:e[1],category:s,topic:a[s],icon:n[s],amount:e[4].replace(",",""),account:e[2]}}},{key:"formatExpense",value:function(e){return["=DATE(".concat(e.date.substr(0,4),", ").concat(e.date.substr(5,2),", ").concat(e.date.substr(-2),")"),e.description,e.account,e.category,e.amount]}},{key:"append",value:function(e){return this.sheetService.append(this.formatExpense(e))}},{key:"update",value:function(e){return this.sheetService.update(e.id,this.formatExpense(e))}},{key:"load",value:function(){var e=this;this.sheetService.load().then((function(t){for(var a=t.result.valueRanges,n=a[0].values.map((function(e){return e[0]})),s=a[1].values.map((function(e){return e[0]})),i={},c={},r=0;r<Math.min(s.length,a[2].values.length,a[3].values.length);r++)i[s[r]]=a[2].values[r][0],c[s[r]]=a[3].values[r][0];e.setState({accounts:n,categories:s,topics:i,icons:c,expenses:(a[4].values||[]).map((function(t,a){return e.parseExpense(t,a,i,c)})).reverse().slice(0,30),processing:!1,currentMonth:a[5].values[0][0],previousMonth:a[6].values[0][0]})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("header",{className:"mdc-toolbar mdc-toolbar--fixed"},s.a.createElement("div",{className:"mdc-toolbar__row"},s.a.createElement("section",{className:"mdc-toolbar__section mdc-toolbar__section--align-start"},s.a.createElement("span",{className:"mdc-toolbar__title"},"Expenses")),s.a.createElement("section",{className:"mdc-toolbar__section mdc-toolbar__section--align-end",role:"toolbar"},!1===this.state.signedIn&&s.a.createElement("a",{className:"material-icons mdc-toolbar__icon","aria-label":"Sign in",alt:"Sign in",onClick:function(t){t.preventDefault(),e.sheetService.getAuthInstance().signIn()}},"perm_identity"),this.state.signedIn&&s.a.createElement("a",{className:"material-icons mdc-toolbar__icon","aria-label":"Sign out",alt:"Sign out",onClick:function(t){t.preventDefault(),e.sheetService.getAuthInstance().signOut()}},"exit_to_app")))),s.a.createElement("div",{className:"toolbar-adjusted-content"},void 0===this.state.signedIn&&s.a.createElement(_,null),!1===this.state.signedIn&&s.a.createElement("div",{className:"center"},s.a.createElement("button",{className:"mdc-button sign-in","aria-label":"Sign in",onClick:function(){e.sheetService.getAuthInstance().signIn()}},"Sign In")),this.state.signedIn&&this.renderBody()),s.a.createElement("div",{ref:function(t){t&&(e.snackbar=new N.MDCSnackbar(t))},className:"mdc-snackbar","aria-live":"assertive","aria-atomic":"true","aria-hidden":"true"},s.a.createElement("div",{className:"mdc-snackbar__text"}),s.a.createElement("div",{className:"mdc-snackbar__action-wrapper"},s.a.createElement("button",{type:"button",className:"mdc-button mdc-snackbar__action-button","aria-hidden":"true"}))))}},{key:"renderBody",value:function(){return this.state.processing?s.a.createElement(_,null):s.a.createElement("div",{className:"content"},this.renderExpenses())}},{key:"renderExpenses",value:function(){var e=this;return this.state.showExpenseForm?s.a.createElement(y,{categories:this.state.categories,icons:this.state.icons,topics:this.state.topics,accounts:this.state.accounts,expense:this.state.expense,onSubmit:this.handleExpenseSubmit,onCancel:this.handleExpenseCancel,onDelete:this.handleExpenseDelete,onChange:this.handleExpenseChange}):s.a.createElement("div",null,s.a.createElement("div",{className:"mdc-card"},s.a.createElement("section",{className:"mdc-card__primary"},s.a.createElement("h2",{className:"mdc-card__subtitle"},"This month you've spent:"),s.a.createElement("h1",{className:"mdc-card__title mdc-card__title--large center"},this.state.currentMonth)),s.a.createElement("section",{className:"mdc-card__supporting-text"},"Previous month: ",this.state.previousMonth)),s.a.createElement(f,{expenses:this.state.expenses,onSelect:this.handleExpenseSelect}),s.a.createElement("button",{onClick:function(){return e.onExpenseNew()},className:"mdc-fab app-fab--absolute material-icons","aria-label":"Add expense"},s.a.createElement("span",{className:"mdc-fab__icon"},"add")))}}]),a}(n.Component));a(69),a(70);c.a.render(s.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}))}},[[33,1,2]]]);
//# sourceMappingURL=main.9a797fcf.chunk.js.map