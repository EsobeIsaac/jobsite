(this.webpackJsonpJob_App=this.webpackJsonpJob_App||[]).push([[0],{17:function(e,t,i){e.exports={logo:"Header_logo__2iQ98",nav:"Header_nav__2J00U",profileImg:"Header_profileImg__1-Fa1",desktopMenu:"Header_desktopMenu__16wsY",menu_logo:"Header_menu_logo__1U6Co",right_head:"Header_right_head__1yoxM",sideMenu:"Header_sideMenu__3-0bf"}},18:function(e,t,i){e.exports={detail_box:"Details_detail_box__kuljF",bottomSpace:"Details_bottomSpace__27c6-",apply:"Details_apply__156o9",hideApply:"Details_hideApply__CHvoq",job_description:"Details_job_description__Ouhrf"}},23:function(e,t,i){e.exports={save_article:"Save_save_article__3xGXb",no_save:"Save_no_save__1CeYR",delBtn:"Save_delBtn__31QRo"}},3:function(e,t,i){e.exports={row:"Footer_row__18n9F",container:"Footer_container__3NfFC",col_xs_1:"Footer_col_xs_1__2zY21",col_sm_1:"Footer_col_sm_1__fCvys",col_md_1:"Footer_col_md_1__3UKgT",col_lg_1:"Footer_col_lg_1__LwhfY",col_xs_2:"Footer_col_xs_2__2kJqn",col_sm_2:"Footer_col_sm_2__2OE0h",col_md_2:"Footer_col_md_2__B1JJw",col_lg_2:"Footer_col_lg_2__1QRt7",col_xs_3:"Footer_col_xs_3__3qzMl",col_sm_3:"Footer_col_sm_3__3aCRU",col_md_3:"Footer_col_md_3__35xmw",col_lg_3:"Footer_col_lg_3__Fh4sj",col_xs_4:"Footer_col_xs_4__Zm2se",col_sm_4:"Footer_col_sm_4__2NPmh",col_md_4:"Footer_col_md_4__1oqsy",col_lg_4:"Footer_col_lg_4__2CiF4",col_xs_5:"Footer_col_xs_5__5nAhU",col_sm_5:"Footer_col_sm_5__30Tzc",col_md_5:"Footer_col_md_5__3FKZv",col_lg_5:"Footer_col_lg_5__2dzaM",col_xs_6:"Footer_col_xs_6__3NJPB",col_sm_6:"Footer_col_sm_6__2ODbS",col_md_6:"Footer_col_md_6__2SG8_",col_lg_6:"Footer_col_lg_6__2R4Ik",col_xs_7:"Footer_col_xs_7__MrjTr",col_sm_7:"Footer_col_sm_7__LmamA",col_md_7:"Footer_col_md_7__2Kemq",col_lg_7:"Footer_col_lg_7__14Icd",col_xs_8:"Footer_col_xs_8__lB4ZV",col_sm_8:"Footer_col_sm_8__4NmEN",col_md_8:"Footer_col_md_8__3o94j",col_lg_8:"Footer_col_lg_8__dJp4z",col_xs_9:"Footer_col_xs_9__3-IHg",col_sm_9:"Footer_col_sm_9__JrpzU",col_md_9:"Footer_col_md_9__221NJ",col_lg_9:"Footer_col_lg_9__1pH-s",col_xs_10:"Footer_col_xs_10__2XAFs",col_sm_10:"Footer_col_sm_10__1WoTX",col_md_10:"Footer_col_md_10__wazfT",col_lg_10:"Footer_col_lg_10__1i05T",col_xs_11:"Footer_col_xs_11__3Dw1M",col_sm_11:"Footer_col_sm_11__EN8Yj",col_md_11:"Footer_col_md_11__18vL1",col_lg_11:"Footer_col_lg_11__2XhQT",col_xs_12:"Footer_col_xs_12__2qH4G",col_sm_12:"Footer_col_sm_12__ZNRs5",col_md_12:"Footer_col_md_12__3U4_O",col_lg_12:"Footer_col_lg_12__1ney7",text_center:"Footer_text_center__1NR-l",search_text:"Footer_search_text__3mj1_",input_search:"Footer_input_search__3fUuh",btn_search:"Footer_btn_search__9IRoL",logo:"Footer_logo__1-zY3",address:"Footer_address__2Dhxj",menu:"Footer_menu__3OV6I",fa:"Footer_fa__-JKDN"}},30:function(e,t,i){e.exports={search_section:"Search_search_section__1fSvp",search_btn:"Search_search_btn__3uHdT"}},31:function(e,t,i){e.exports={apply:"Apply_apply__36FqT",file:"Apply_file__3roAx"}},34:function(e,t,i){e.exports={loader:"Callback_loader__3F2bx",spin:"Callback_spin__35Ch4"}},35:function(e,t,i){e.exports={logArea:"Login_logArea__hnV9m"}},42:function(e,t,i){},49:function(e,t,i){"use strict";i.r(t);var a=i(1),o=i.n(a),s=i(21),n=i.n(s),l=(i(42),i(7)),c=i(8),r=i(10),h=i(9),d=(i.p,i(5)),_=i(17),j=i.n(_),u=i(32),m=i(33),b=function e(){var t=this;Object(l.a)(this,e),this.auth0=new u.a.WebAuth({domain:"dev-e4p8vxwq.us.auth0.com",clientID:"eUvkC3A2Np8AGELP1R7zstUfLC79YJSu",redirectUri:"http://esobeisaac.github.io/jobsite/",responseType:"token id_token",scope:"openid profile email"}),this.login=function(){t.auth0.authorize()},this.handleAuth=function(){t.auth0.parseHash((function(e,i){if(i){window.localStorage.setItem("access_token",i.accessToken),window.localStorage.setItem("id_token",i.idToken);var a=JSON.stringify(1e3*i.expiresIn+(new Date).getTime());window.localStorage.setItem("expiresAt",a),window.location.hash="",setTimeout((function(){window.location.reload()}),1e3)}else t.login()}))},this.isAuthenticated=function(){var e=JSON.parse(window.localStorage.getItem("expiresAt"));return(new Date).getTime()<e},this.logout=function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expiresAt"),setTimeout((function(){window.location.reload()}),1e3)},this.profile=function(){return localStorage.getItem("id_token")?Object(m.a)(localStorage.getItem("id_token")):{}}},p=i(0),x=new b,O=function(e){Object(r.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(l.a)(this,i);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).menu=Object(p.jsxs)("div",{className:j.a.sideMenu,children:[Object(p.jsx)("button",{onClick:function(){e.hideSide()},children:"\xd7"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/jobsite/feed",children:"Feed"})}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/jobsite/saved",children:"Saved"})}),x.isAuthenticated()?Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/jobsite",onClick:function(){x.logout()},children:"Logout"})}):Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/jobsite",onClick:function(){x.login()},children:"Login"})})]})]}),e.state={menuShow:!1},e.showSide=function(){e.setState((function(e,t){return{menuShow:!e.menuShow}}))},e.hideSide=function(){e.setState((function(e,t){return{menuShow:!e.menuShow}}))},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{children:Object(p.jsx)("header",{children:Object(p.jsxs)("nav",{className:j.a.nav,children:[Object(p.jsxs)("div",{className:j.a.menu_logo,children:[Object(p.jsx)("button",{onClick:function(){e.showSide()},children:Object(p.jsx)("i",{className:"fas fa-bars"})}),Object(p.jsx)(d.b,{to:"/jobsite/",className:j.a.logo,children:"LOGO"})]}),Object(p.jsxs)("div",{className:j.a.right_head,children:[!0===this.state.menuShow?this.menu:null,Object(p.jsxs)("ul",{className:j.a.desktopMenu,children:[Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/jobsite/feed",children:"Feed"})}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/jobsite/saved",children:"Saved"})}),x.isAuthenticated()?Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/jobsite/",onClick:function(){x.logout()},children:"Logout"})}):Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/jobsite/",onClick:function(){x.login()},children:"Login"})})]}),x.isAuthenticated()?Object(p.jsx)("img",{src:x.profile().picture,alt:x.profile().given_name,className:j.a.profileImg}):null]})]})})})}}]),i}(a.Component),v=[{title:"Frontend development".toLowerCase(),skills:["HTML","CSS","JAVASCRIPT"],salary:"$500",responsibilities:["This Role","That Route","This Role","That Route"],location:"Portharcourt",Summary:"This that this is also that and that This that this is also that and that This that this is also that and that This that this is also that and that",position:"Junior Frontend Development",company:"Webdeves Technologies",type:"Full time",deadline:"13th July 2021",qualifications:["Olevel","Bachelor Degree in Computer Science","2 years experience"],email:"info.webdeves.com"},{title:"Frontend development".toLowerCase(),skills:["HTML","CSS","JAVASCRIPT"],salary:"$500",responsibilities:["This Role","That Route","This Role","That Route"],location:"Portharcourt",Summary:"This that this is also that and that This that this is also that and that This that this is also that and that This that this is also that and that",position:"Junior Frontend Development",company:"Webdeves Technologies",type:"Full time",deadline:"13th July 2021",qualifications:["Olevel","Bachelor Degree in Computer Science","2 years experience"],email:"info.webdeves.com"},{title:"Frontend development".toLowerCase(),skills:["HTML","CSS","JAVASCRIPT"],salary:"$500",responsibilities:["This Role","That Route","This Role","That Route"],location:"Portharcourt",Summary:"This that this is also that and that This that this is also that and that This that this is also that and that This that this is also that and that",position:"Junior Frontend Development",company:"Webdeves Technologies",type:"Full time",deadline:"13th July 2021",qualifications:["Olevel","Bachelor Degree in Computer Science","2 years experience"],email:"info.webdeves.com"},{title:"Frontend development".toLowerCase(),skills:["HTML","CSS","JAVASCRIPT"],salary:"$500",responsibilities:["This Role","That Route","This Role","That Route"],location:"Portharcourt",Summary:"This that this is also that and that This that this is also that and that This that this is also that and that This that this is also that and that",position:"Junior Frontend Development",company:"Webdeves Technologies",type:"Full time",deadline:"13th July 2021",qualifications:["Olevel","Bachelor Degree in Computer Science","2 years experience"],email:"info.webdeves.com"},{title:"Frontend development".toLowerCase(),skills:["HTML","CSS","JAVASCRIPT"],salary:"$500",responsibilities:["This Role","That Route","This Role","That Route"],location:"Portharcourt",Summary:"This that this is also that and that This that this is also that and that This that this is also that and that This that this is also that and that",position:"Junior Frontend Development",company:"Webdeves Technologies",type:"Full time",deadline:"13th July 2021",qualifications:["Olevel","Bachelor Degree in Computer Science","2 years experience"],email:"info.webdeves.com"},{title:"Frontend development".toLowerCase(),skills:["HTML","CSS","JAVASCRIPT"],salary:"$500",responsibilities:["This Role","That Route","This Role","That Route"],location:"Portharcourt",Summary:"This that this is also that and that This that this is also that and that This that this is also that and that This that this is also that and that",position:"Junior Frontend Development",company:"Webdeves Technologies",type:"Full time",deadline:"13th July 2021",qualifications:["Olevel","Bachelor Degree in Computer Science","2 years experience"],email:"info.webdeves.com"},{title:"Frontend development".toLowerCase(),skills:["HTML","CSS","JAVASCRIPT"],salary:"$500",responsibilities:["This Role","That Route","This Role","That Route"],location:"Portharcourt",Summary:"This that this is also that and that This that this is also that and that This that this is also that and that This that this is also that and that",position:"Junior Frontend Development",company:"Webdeves Technologies",type:"Full time",deadline:"13th July 2021",qualifications:["Olevel","Bachelor Degree in Computer Science","2 years experience"],email:"info.webdeves.com"},{title:"Frontend development".toLowerCase(),skills:["HTML","CSS","JAVASCRIPT"],salary:"$500",responsibilities:["This Role","That Route","This Role","That Route"],location:"Portharcourt",Summary:"This that this is also that and that This that this is also that and that This that this is also that and that This that this is also that and that",position:"Junior Frontend Development",company:"Webdeves Technologies",type:"Full time",deadline:"13th July 2021",qualifications:["Olevel","Bachelor Degree in Computer Science","2 years experience"],email:"info.webdeves.com"},{title:"Frontend development".toLowerCase(),skills:["HTML","CSS","JAVASCRIPT"],salary:"$500",responsibilities:["This Role","That Route","This Role","That Route"],location:"Portharcourt",Summary:"This that this is also that and that This that this is also that and that This that this is also that and that This that this is also that and that",position:"Junior Frontend Development",company:"Webdeves Technologies",type:"Full time",deadline:"13th July 2021",qualifications:["Olevel","Bachelor Degree in Computer Science","2 years experience"],email:"info.webdeves.com"},{title:"UI Designer",skills:["HTML","CSS","JAVASCRIPT"],salary:"$500",responsibilities:["This Role","That Route","This Role","That Route"],location:"Portharcourt",Summary:"This that this is also that and that This that this is also that and that This that this is also that and that This that this is also that and that",position:"Junior Frontend Development",company:"Webdeves Technologies",type:"Full time",deadline:"13th July 2021",qualifications:["Olevel","Bachelor Degree in Computer Science","2 years experience"]},{title:"gdsgd",skills:["HTML","CSS","JAVASCRIPT"],salary:"$500",responsibilities:["This Role","That Route","This Role","That Route"],location:"Portharcourt",Summary:"This that this is also that and that This that this is also that and that This that this is also that and that This that this is also that and that",position:"Junior Frontend Development",company:"Webdeves Technologies",type:"Full time",deadline:"13th July 2021",qualifications:["Olevel","Bachelor Degree in Computer Science","2 years experience"]},{title:"gdsgd",skills:["HTML","CSS","JAVASCRIPT"],salary:"$500",responsibilities:["This Role","That Route","This Role","That Route"],location:"Portharcourt",Summary:"This that this is also that and that This that this is also that and that This that this is also that and that This that this is also that and that",position:"Junior Frontend Development",company:"Webdeves Technologies",type:"Full time",deadline:"13th July 2021",qualifications:["Olevel","Bachelor Degree in Computer Science","2 years experience"]}],f=i(15),y=i(30),T=i.n(y),g=function(e){return{type:"ITEM_DETAILS",payload:e}},S=function(e){Object(r.a)(i,e);var t=Object(h.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(p.jsx)("section",{className:T.a.search_section,children:Object(p.jsxs)("form",{children:[Object(p.jsx)("legend",{children:"Filter Jobs"}),Object(p.jsx)("label",{for:"categories",children:"Categories:"}),Object(p.jsxs)("select",{id:"categories",name:"categories",children:[Object(p.jsx)("option",{value:"all",children:"All"}),Object(p.jsx)("option",{value:"UI/UX Design",children:"UI/UX Design"}),Object(p.jsx)("option",{value:"Frontend Development",children:"Frontend Development"}),Object(p.jsx)("option",{value:"Backend Development",children:"Backend Development"})]}),Object(p.jsx)("label",{for:"location",children:"Location:"}),Object(p.jsxs)("select",{id:"location",name:"location",children:[Object(p.jsx)("option",{value:"all",children:"Tata"}),Object(p.jsx)("option",{value:"Abia",children:"Tata"}),Object(p.jsx)("option",{value:"Imo",children:"Tata"}),Object(p.jsx)("option",{value:"Portharcourt",children:"Tata"})]}),Object(p.jsx)("input",{type:"submit",className:T.a.search_btn,value:"Search"})]})})}}]),i}(a.Component),F=i(6),N=i.n(F),C=i(37),w=i(18),k=i.n(w),A=i(31),R=i.n(A),D=new b,J=Object(f.b)((function(e){return{details:e.detail_reducer}}))((function(e){var t=e.details;return Object(p.jsxs)("div",{className:R.a.apply,children:[Object(p.jsx)("h4",{children:t.title}),Object(p.jsx)("h4",{children:t.company}),Object(p.jsx)("h5",{children:t.type}),Object(p.jsxs)("form",{method:"post",action:t.email,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"fullName",children:"FullName: "}),Object(p.jsx)("input",{type:"text",id:"fullName",name:"fullName",value:D.profile().name})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(p.jsx)("input",{type:"email",id:"email",name:"email",value:D.profile().email})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"country",children:"Country: "}),Object(p.jsxs)("select",{id:"country",name:"country",children:[Object(p.jsx)("option",{value:"Nigeria",children:"Nigeria"}),Object(p.jsx)("option",{value:"Gambia",children:"Gambia"}),Object(p.jsx)("option",{value:"Nigeria",children:"Nigeria"}),Object(p.jsx)("option",{value:"Gambia",children:"Gambia"}),Object(p.jsx)("option",{value:"Nigeria",children:"Nigeria"}),Object(p.jsx)("option",{value:"Gambia",children:"Gambia"}),Object(p.jsx)("option",{value:"Nigeria",children:"Nigeria"}),Object(p.jsx)("option",{value:"Gambia",children:"Gambia"})]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"number",children:"Phone Number: "}),Object(p.jsx)("input",{type:"number",id:"number",name:"number"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"qualification",children:"Qualification: "}),Object(p.jsxs)("select",{id:"qualification",name:"qualification",children:[Object(p.jsx)("option",{value:"o'level",children:"o'level"}),Object(p.jsx)("option",{value:"bsc",children:"BSc"}),Object(p.jsx)("option",{value:"hnd",children:"HND"})]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"cv",children:"Upload CV: "}),Object(p.jsx)("input",{type:"file",id:"cv",name:"cv",className:R.a.file})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"cover_letter",children:"Cover Letter: "}),Object(p.jsx)("textarea",{id:"cover_letter",name:"cover_letter"})]}),Object(p.jsx)("input",{type:"submit"})]})]})}));var I=Object(f.b)((function(e){return{details:e.detail_reducer}}))((function(e){var t,i=e.details;console.log(i.Summary);var o,s,n=i.qualifications,l=i.responsibilities,c=i.skills,r=Object(a.useState)(!1),h=Object(C.a)(r,2),d=h[0],_=h[1];return n&&(t=n.map((function(e,t){return Object(p.jsx)("li",{children:e},t)}))),l&&(console.log(l),o=l.map((function(e,t){return Object(p.jsx)("li",{children:e},t)}))),c&&(s=c.map((function(e,t){return Object(p.jsx)("li",{children:e},t)}))),Object(p.jsxs)("article",{className:k.a.detail_box,children:[Object(p.jsxs)("section",{className:k.a.job_info,children:[Object(p.jsx)("h2",{children:"Job Information"}),Object(p.jsx)("h4",{children:i.title}),Object(p.jsx)("h4",{children:i.company}),Object(p.jsx)("h5",{children:i.type})]}),Object(p.jsx)("h2",{children:"Job Description"}),Object(p.jsxs)("section",{className:k.a.job_description,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:"Job Summmary"}),Object(p.jsx)("p",{children:i.Summary}),Object(p.jsx)("h4",{children:"Quolifications and Requirement"}),Object(p.jsx)("ul",{children:t}),Object(p.jsx)("h4",{children:"Skills and Competency"}),Object(p.jsx)("ul",{children:s})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:"Key Responsibilities"}),Object(p.jsx)("ul",{children:o}),Object(p.jsxs)("i",{className:k.a.expires,children:["Deadline:",Object(p.jsx)("strong",{children:i.deadline})]})]}),1==d?Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{className:k.a.hideApply,onClick:function(){_(!1)},children:"\xd7"})," ",Object(p.jsx)(J,{})]}):null]}),Object(p.jsx)("button",{className:k.a.apply,onClick:function(){_(!0)},children:"Apply"}),Object(p.jsx)("div",{className:k.a.bottomSpace})]})})),L=new b,P=function(e){Object(r.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(l.a)(this,i);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).componentDidMount=function(){var t=new b;t.isAuthenticated()?e.render():t.login()},e.state={detail:"",save:""},e.updateDetails=function(t){e.setState({detail:t}),setTimeout((function(){e.props.itemToUpdate(e.state.detail)}),2e3)},e.removeDetail=function(){e.setState({detail:""})},e.saveItem=function(t){e.setState({save:t}),setTimeout((function(){e.props.itemToSave(e.state.save)}),2e3)},e.feeds=v,e.feed=e.feeds.map((function(t,i){return Object(p.jsxs)("div",{className:N.a.feed,children:[Object(p.jsxs)("h2",{className:N.a.title,onClick:function(){e.updateDetails(t)},children:[t.title," ",Object(p.jsx)("span",{children:t.price})]}),Object(p.jsxs)("div",{className:N.a.feed_details,children:[Object(p.jsx)("h4",{children:t.company}),Object(p.jsx)("h4",{children:t.location}),Object(p.jsx)("h4",{children:t.position}),Object(p.jsx)("p",{children:t.Summary})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:function(){e.saveItem(t)},className:N.a.act,children:"Save"})})]},i)})),e}return Object(c.a)(i,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("article",{className:N.a.feed_article,children:[Object(p.jsxs)("h2",{className:N.a.greetings,children:["Hi! ",Object(p.jsx)("span",{children:L.profile().given_name})]}),Object(p.jsxs)("section",{className:N.a.feed_section,children:[Object(p.jsx)("div",{className:N.a.search_box,children:Object(p.jsx)(S,{className:N.a.search})}),Object(p.jsx)("div",{className:N.a.feed_block,children:this.feed})]}),""!==this.state.detail?Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{className:N.a.remove,onClick:function(){e.removeDetail()},children:"\xd7"}),Object(p.jsx)(I,{})]}):null]})}}]),i}(a.Component),M=Object(f.b)((function(e){return{searchResult:e.search_item}}),(function(e){return{itemToUpdate:function(t){return e(g(t))},itemToSave:function(t){return e(function(e){return{type:"ITEM_SAVE",payload:e}}(t))}}}))(P),q=i(4),E=i(3),H=i.n(E),U=new b,B=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:H.a.search_text,children:Object(p.jsx)("div",{className:H.a.container,children:Object(p.jsx)("div",{className:[H.a.row,H.a.text_center].join(" "),children:Object(p.jsxs)("div",{className:"form",children:[Object(p.jsx)("h4",{children:"SIGN UP TO OUR NEWSLETTER"}),Object(p.jsxs)("form",{id:"search_form",className:["form_search, form_horizontal"].join(" "),children:[Object(p.jsx)("input",{type:"text",className:H.a.input_search,placeholder:"Email Address"}),Object(p.jsx)("button",{type:"submit",className:H.a.btn_search,children:"SUBMIT"})]})]})})})}),Object(p.jsx)("footer",{children:Object(p.jsx)("div",{className:H.a.container,children:Object(p.jsxs)("div",{className:H.a.row,children:[Object(p.jsx)("div",{className:[H.a.col_md_3,H.a.col_sm_6,H.a.col_xs_12].join(" "),children:Object(p.jsx)("span",{className:H.a.logo,children:Object(p.jsx)(d.b,{to:"/jobsite/",className:H.a.logo,children:"LOGO"})})}),Object(p.jsx)("div",{className:[H.a.col_md_3,H.a.col_sm_6,H.a.col_xs_12].join(" "),children:Object(p.jsxs)("ul",{className:H.a.menu,children:[Object(p.jsx)("span",{children:"Quick Link"}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/jobsite/feed",children:"Feed"})}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/jobsite/saved",children:"Saved"})}),U.isAuthenticated()?Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/jobsite/",onClick:function(){U.logout()},children:"Logout"})}):Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/jobsite/",onClick:function(){U.login()},children:"Login"})})]})}),Object(p.jsx)("div",{className:[H.a.col_md_3,H.a.col_sm_6,H.a.col_xs_12].join(" "),children:Object(p.jsxs)("ul",{className:H.a.address,children:[Object(p.jsx)("span",{children:"Contact"}),Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:["fa fa-phone",H.a.fa].join(" "),"aria-hidden":"true"}),Object(p.jsx)("a",{href:"#",children:"Phone"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:["fa fa-map-marker",H.a.fa].join(" "),"aria-hidden":"true"}),Object(p.jsx)("a",{href:"#",children:"Adress"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:["fa fa-envelope",H.a.fa].join(" "),"aria-hidden":"true"}),Object(p.jsx)("a",{href:"#",children:"Email"})]})]})})]})})})]})},V=i(34),G=i.n(V),W=(new b,function(e){Object(r.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(l.a)(this,i);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).componentDidMount=function(){(new b).handleAuth()},e}return Object(c.a)(i,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:G.a.loader})})}}]),i}(a.Component)),z=i(23),$=i.n(z),Y=function(e){Object(r.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(l.a)(this,i);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).auth=new b,e.state={detail:"",apply:!1},e.apply=function(){e.setState({apply:!0})},e.hideApply=function(){e.setState({apply:!1})},e.updateDetails=function(t){e.setState({detail:t}),setTimeout((function(){e.props.itemToUpdate(e.state.detail)}),2e3)},e.unsaveItem=function(t){setTimeout((function(){e.props.itemToUnsave(t)}),2e3)},e.removeDetail=function(){e.setState({detail:""})},e.seave=function(){return null!==JSON.parse(window.localStorage.getItem("items"))?JSON.parse(window.localStorage.getItem("items")).map((function(t,i){return Object(p.jsxs)("div",{className:N.a.feed,children:[Object(p.jsxs)("h2",{className:N.a.title,onClick:function(){e.updateDetails(t)},children:[t.title," ",Object(p.jsx)("span",{children:t.price})]}),Object(p.jsxs)("div",{className:N.a.feed_details,children:[Object(p.jsx)("h4",{children:t.company}),Object(p.jsx)("h4",{children:t.location}),Object(p.jsx)("h4",{children:t.position}),Object(p.jsx)("p",{children:t.Summary})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:function(){e.unsaveItem(i)},className:$.a.delBtn,children:"Delete"})})]},i)})):Object(p.jsx)("h2",{className:$.a.no_save,children:"You haven no Job saved"})},e}return Object(c.a)(i,[{key:"componentDidMount",value:function(){var e=new b;e.isAuthenticated()?this.render():e.login()}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:$.a.save_article,children:[this.seave(),this.state.detail?Object(p.jsxs)("div",{className:N.a.okPull,children:[""!==this.state.detail?Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{className:N.a.remove,onClick:function(){e.removeDetail()},children:"\xd7"}),Object(p.jsx)(I,{}),Object(p.jsx)("button",{className:N.a.apply,onClick:function(){e.apply()},children:"Apply"})]}):null,1==this.state.apply?Object(p.jsxs)("div",{children:[Object(p.jsx)(J,{}),Object(p.jsx)("button",{className:N.a.hideApply,onClick:function(){e.hideApply()},children:"\xd7"})]}):null]}):null]}),Object(p.jsx)("div",{})]})}}]),i}(a.Component),Q=Object(f.b)(null,(function(e){return{itemToUpdate:function(t){return e(g(t))},itemToUnsave:function(t){return e(function(e){return{type:"ITEM_DELETE",payload:e}}(t))}}}))(Y),X=i(35),K=i.n(X),Z=new b,ee=function(e){Object(r.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(l.a)(this,i);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).componentDidMount=function(){(new b).handleAuth()},e}return Object(c.a)(i,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:K.a.logArea,children:[Object(p.jsx)("h2",{children:"Welcome To App Name"}),Object(p.jsxs)("p",{children:["You are few steps to getting your dream Job.",Object(p.jsx)("br",{}),"Click on the button below to get started"]}),Z.isAuthenticated()?Object(p.jsx)("button",{onClick:function(){window.location.pathname="/jobsite/feed"},children:"Explore "}):Object(p.jsx)("button",{onClick:function(){Z.login()},children:"Click To Login "})]})}}]),i}(a.Component),te=(new b,function(e){Object(r.a)(i,e);var t=Object(h.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(O,{}),Object(p.jsxs)(q.c,{children:[Object(p.jsx)(q.a,{path:"/jobsite/feed",exact:!0,children:Object(p.jsx)(M,{})}),Object(p.jsx)(q.a,{path:"/jobsite/saved",exact:!0,children:Object(p.jsx)(Q,{})}),Object(p.jsx)(q.a,{path:"/jobsite/",exact:!0,children:Object(p.jsx)(ee,{})}),Object(p.jsx)(q.a,{path:"/jobsite/callback",exact:!0,children:Object(p.jsx)(W,{})})]}),Object(p.jsx)(B,{})]})}}]),i}(a.Component)),ie=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,50)).then((function(t){var i=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,n=t.getTTFB;i(e),a(e),o(e),s(e),n(e)}))},ae=i(24),oe=i(36),se=i.n(oe),ne=i(16),le={title:"",skills:[],salary:"",responsibilities:[],location:"",Summary:"",position:"",company:"",type:"",deadline:"",qualifications:[],email:""};var ce={save:[]};var re={save:[]};var he=Object(ae.b)({detail_reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEM_DETAILS":var i=Object(ne.a)(Object(ne.a)({},e),{},{title:t.payload.title,skills:t.payload.skills,salary:t.payload.price,responsibilities:t.payload.responsibilities,location:t.payload.location,Summary:t.payload.Summary,position:t.payload.position,company:t.payload.company,type:t.payload.type,deadline:t.payload.deadline,qualifications:t.payload.qualifications,email:t.payload.email});return i;default:return{state:e}}},save_reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEM_SAVE":var i=[];null===localStorage.getItem("items")?(i.push(t.payload),localStorage.setItem("items",JSON.stringify(i))):((i=JSON.parse(localStorage.getItem("items"))).push(t.payload),localStorage.setItem("items",JSON.stringify(i))),i=JSON.parse(localStorage.getItem("items"));var a=Object(ne.a)(Object(ne.a)({},e),{},{save:i});return a;default:return{state:e}}},delete_saved:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEM_DELETE":var i=JSON.parse(localStorage.getItem("items")),a=(i.map((function(e,a){a==t.payload&&(1===i.length?localStorage.removeItem("items"):(i.splice(e,1),localStorage.setItem("items",JSON.stringify(i))),window.location.reload())})),Object(ne.a)(Object(ne.a)({},e),{},{save:""}));return a;default:return{state:e}}}}),de=Object(ae.c)(he,Object(ae.a)(se.a));n.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(f.a,{store:de,children:Object(p.jsx)(d.a,{children:Object(p.jsx)(te,{})})})}),document.getElementById("root")),ie()},6:function(e,t,i){e.exports={feed:"Feed_feed__1AHqF",act:"Feed_act__DD5xa",title:"Feed_title__1i3FA",feed_details:"Feed_feed_details__1VY18",feed_article:"Feed_feed_article__tbvuj",remove:"Feed_remove__2v-zV",greetings:"Feed_greetings__3GeTm",nextPrev:"Feed_nextPrev__1oEPc",feed_section:"Feed_feed_section__3Cn8f",search_box:"Feed_search_box__3pqT6",feed_block:"Feed_feed_block__ofe2f"}}},[[49,1,2]]]);
//# sourceMappingURL=main.76c0a7bd.chunk.js.map