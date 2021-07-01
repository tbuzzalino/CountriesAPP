(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{50:function(n,e,t){},80:function(n,e,t){"use strict";t.r(e);var c,a,r,i,o,s,u=t(0),l=t(22),p=t.n(l),d=(t(50),t(6)),j=t(12),b=t(13),h=t.p+"static/media/landing.40036f2e.jpg",x=b.a.div(c||(c=Object(j.a)(["\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    background-image: url(",");\n    background-position: center;\n    background-size: cover;\n    background-attachment: fixed;\n    .tittle {\n        display: flex;\n        justify-content: center;\n        color: white;\n    }\n    .container {\n        background-position: center;\n        background-size: cover;\n        background-attachment: fixed;\n        position: fixed;\n        width: 100%;\n        height: 100%;\n    }\n\n    .btn {\n        display: flex;\n        padding: 12px;\n        margin: auto;\n        font-size: 22px;\n        text-align: center;\n    }\n"])),h),O=t(1),f=function(){var n=Object(d.e)();return Object(O.jsx)(x,{className:"container",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"tittle",children:"Welcome to the Countries App"}),Object(O.jsx)("button",{onClick:function(){return n.push("/home")},className:"btn",children:"Start your journey!"})]})})},g=b.a.nav(a||(a=Object(j.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* flex-wrap: wrap; */\n    background: #1b2a41;\n    padding-bottom: 20px;\n    margin-bottom: 25px;\n    color: white;\n\n    .Menu {\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        position: relative;\n        margin: 15px;\n        font-size: 30px;\n        font-weight: bold;\n        span {\n            font-weight: 300;\n            font-size: 1.3 rem;\n            text-align: center;\n        }\n    }\n    .sort {\n        padding: 5px;\n        margin-right: 10px;\n        width: 6%;\n    }\n    .region {\n        padding: 5px;\n        margin-right: 10px;\n    }\n    .activity {\n        padding: 5px;\n        margin-right: 10px;\n    }\n    .activities {\n        padding: 5px;\n        margin-right: 10px;\n    }\n"]))),m=t(17),v=t(5),y=t(4),w=t.n(y),A=t(11),C=t(18),k=t.n(C),E=function(){return function(){var n=Object(A.a)(w.a.mark((function n(e){var t;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,k.a.get("https://countries-a.herokuapp.com/countries");case 3:t=n.sent,e({type:"GET_COUNTRIES",payload:t.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},T=function(n){return function(){var e=Object(A.a)(w.a.mark((function e(t){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://countries-a.herokuapp.com/countries?name=".concat(n));case 3:c=e.sent,t({type:"GET_COUNTRIES_NAME",payload:c.data}),console.log(c.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()},I=b.a.div(r||(r=Object(j.a)(["\n    .input {\n        margin: 10px;\n        border-radius: 4px;\n        width: 250px;\n        height: 20px;\n        padding: 5px;\n    }\n    .button {\n        padding: 5px;\n        margin-right: 10px;\n    }\n"]))),N=function(){var n=Object(v.b)(),e=Object(u.useState)(""),t=Object(m.a)(e,2),c=t[0],a=t[1];Object(u.useEffect)((function(){n(T(c))}),[n,c]);return Object(O.jsx)(I,{children:Object(O.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault(),c&&n(T(c))}(e)},children:Object(O.jsx)("input",{className:"input",type:"text",placeholder:"Search Country...",value:c,name:"input",onChange:function(n){return function(n){a(n.target.value)}(n)}})})})},S=function(){var n=Object(v.b)(),e=Object(d.e)(),t=Object(v.c)((function(n){return n.countries})),c=Object(v.c)((function(n){return n.activities})),a=function(e){return n(E())};Object(u.useEffect)((function(){n(function(){var n=Object(A.a)(w.a.mark((function n(e){var t;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,k.a.get("https://countries-a.herokuapp.com/activities");case 3:t=n.sent,e({type:"ACTIVITIES",payload:t.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}())}),[n]),console.log(c);var r=function(e){var c;n((c=t,function(){var n=Object(A.a)(w.a.mark((function n(e){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"SORT_ALPHABETICALLY",payload:c.sort((function(n,e){return n.name>e.name?1:n.name<e.name?-1:0}))});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()))},i=function(e){var c;n((c=t,function(){var n=Object(A.a)(w.a.mark((function n(e){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"SORT_ALPHABETICALLY_ZA",payload:c.sort((function(n,e){return n.name<e.name?1:n.name>e.name?-1:0}))});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()))},o=function(e){var c;n((c=t,function(){var n=Object(A.a)(w.a.mark((function n(e){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"POPULATION",payload:c.sort((function(n,e){return n.population<e.population?1:n.population>e.population?-1:0}))});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()))},s=function(e){var c;n((c=t,function(){var n=Object(A.a)(w.a.mark((function n(e){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"POPULATION_LOWER",payload:c.sort((function(n,e){return n.population>e.population?1:n.population<e.population?-1:0}))});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()))},l=function(e){var t;"ALL"===e.target.value?n((function(n){n({type:"RESET",payload:"ALL"})})):n((t=e.target.value,function(){var n=Object(A.a)(w.a.mark((function n(e){var c;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,k.a.get("https://countries-a.herokuapp.com/countries?region=".concat(t));case 3:c=n.sent,e({type:"GET_REGIONS",payload:c.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()))},p=function(e){var t;n((t=e.target.value,function(){var n=Object(A.a)(w.a.mark((function n(e){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"ACTIVITIES_BY_COUNTRY",payload:t});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()))};return Object(O.jsxs)(g,{children:[Object(O.jsxs)("div",{className:"Menu",children:["Countries ",Object(O.jsx)("span",{children:"App"})]}),Object(O.jsx)(N,{}),Object(O.jsxs)("select",{className:"sort",placeholder:"A-Z",children:[Object(O.jsx)("option",{onClick:function(n){return a()},children:"Order"}),Object(O.jsx)("option",{onClick:function(n){return r()},children:"A-Z"}),Object(O.jsx)("option",{onClick:function(n){return i()},children:"Z-A"}),Object(O.jsx)("option",{onClick:function(n){return o()},children:"Population \u2b06"}),Object(O.jsx)("option",{onClick:function(n){return s()},children:"Population \u2b07"})]}),Object(O.jsxs)("select",{className:"region",onChange:function(n){return l(n)},children:[Object(O.jsx)("option",{value:"ALL",children:"World Regions"}),Object(O.jsx)("option",{value:"Europe",children:"Europe"}),Object(O.jsx)("option",{value:"Americas",children:"Americas"}),Object(O.jsx)("option",{value:"Asia",children:"Asia"}),Object(O.jsx)("option",{value:"Oceania",children:"Oceania"}),Object(O.jsx)("option",{value:"Africa",children:"Africa"}),Object(O.jsx)("option",{value:"Polar",children:"Antartida"})]}),Object(O.jsx)("button",{className:"activity",onClick:function(){return e.push("/form")},children:"Create New Activity"}),Object(O.jsxs)("select",{className:"activities",onChange:function(n){return p(n)},children:[Object(O.jsx)("option",{onClick:function(n){return a()},children:"Find Activities"}),c&&c.map((function(n,e){return Object(O.jsx)("option",{value:n.name,children:n.name},e)}))]})]})},L=function(n){var e=n.country,t=n.index,c=Object(d.e)();return Object(O.jsxs)("div",{className:"card",onClick:function(){return c.push("/countries/".concat(e.id))},children:[Object(O.jsx)("h2",{children:e.name}),Object(O.jsx)("img",{src:e.flag,alt:e.name}),Object(O.jsx)("p",{className:"region",children:e.region})]},t)},P=b.a.div(i||(i=Object(j.a)(["\n    width: 90%;\n    /* margin: 0 15px 0 150px; */\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    .cards {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        margin: auto;\n        grid-gap: 4em;\n    }\n    .pag-styles {\n        .pagination ul {\n            display: flex;\n            justify-content: space-around;\n            margin-right: 20px;\n            text-decoration: none;\n            list-style-type: none;\n            font-size: 20px;\n        }\n        li {\n            text-decoration: none;\n            /* border: 1px solid white; */\n            border-radius: 8px;\n            background-color: #1b2a41;\n            padding: 8px;\n            width: 30px;\n            text-align: center;\n        }\n        a {\n            text-decoration: none;\n            color: white;\n            margin: auto;\n            :hover {\n                color: white;\n            }\n        }\n    }\n\n    .card {\n        display: flex;\n        flex-direction: column;\n        width: 450px;\n        height: 300px;\n        justify-content: center;\n        border-radius: 5px;\n        text-align: center;\n        /* margin-bottom: 30px; */\n        background: #1b2a41;\n        /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */\n\n        color: white;\n        img {\n            width: 250px;\n            height: 150px;\n            margin: auto;\n            text-align: center;\n        }\n    }\n"]))),_=function(n){for(var e=n.cardsPerPage,t=n.paginate,c=Object(v.c)((function(n){return n.countries})),a=Object(v.c)((function(n){return n.region})),r=[],i=1;i<=Math.ceil(c.length/e);i++)r.push(i);return Object(u.useEffect)((function(){if(a.length){r=[];for(var n=1;n<=Math.ceil(a.length/e);n++)r.push(n)}}),[a]),Object(O.jsx)("div",{className:"pagination",children:Object(O.jsx)("ul",{children:r.map((function(n){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{onClick:function(){return t(n)},href:"#",children:n})},n)}))})})},R=function(){var n=Object(v.b)(),e=Object(v.c)((function(n){return n.countries})),t=Object(v.c)((function(n){return n.region})),c=Object(v.c)((function(n){return n.type})),a=Object(u.useState)(1),r=Object(m.a)(a,2),i=r[0],o=r[1],s=12*i,l=s-12,p=e.slice(l,s),d=t.slice(l,s);return Object(u.useEffect)((function(){n(E())}),[n]),Object(u.useEffect)((function(){"all"!==c&&o(1)}),[n,c,e]),Object(O.jsxs)(P,{children:[Object(O.jsx)("div",{className:"pag-styles",children:Object(O.jsx)(_,{cardsPerPage:12,paginate:function(n){return o(n)}})}),Object(O.jsx)("div",{className:"cards",children:d&&0!==d.length?d.map((function(n,e){return Object(O.jsx)(L,{country:n},e)})):p&&p.map((function(n,e){return Object(O.jsx)(L,{country:n},e)}))})]})},U=b.a.div(o||(o=Object(j.a)(["\n    body {\n        background-color: #1d3557;\n    }\n    background-color: #3d5a80;\n    border: 2px solid;\n    border-radius: 5px;\n    width: 60%;\n    margin: auto;\n    margin-top: 20px;\n    padding-top: 100px;\n    color: white;\n\n    .activities {\n        color: white;\n    }\n\n    .flag {\n        display: flex;\n        text-align: center;\n        justify-content: center;\n        max-width: 250px;\n        margin: auto;\n        padding: auto;\n    }\n\n    h2 {\n        text-align: center;\n    }\n    p {\n        text-align: center;\n        font-weight: 300;\n    }\n    div {\n        text-align: center;\n    }\n\n    .btn {\n        padding: 10px;\n        margin-right: 10px;\n        margin-bottom: 20px;\n    }\n"]))),B=function(n){var e=n.index,t=Object(d.e)(),c=Object(v.b)(),a=Object(d.f)(),r=Object(v.c)((function(n){return n.countriesId}));return Object(u.useEffect)((function(){var n;c((n=a.idCountry,function(){var e=Object(A.a)(w.a.mark((function e(t){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://countries-a.herokuapp.com/countries/".concat(n));case 3:c=e.sent,t({type:"GET_COUNTRIES_ID",payload:c.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()))}),[c,a]),Object(O.jsxs)(U,{className:"card",children:[Object(O.jsx)("img",{className:"flag",src:r.flag,alt:r.name}),Object(O.jsx)("h2",{children:r.name}),Object(O.jsxs)("p",{children:["Capital: ",r.capital]}),Object(O.jsxs)("p",{children:["Alpha3Code: ",r.id]}),Object(O.jsxs)("p",{children:["Region: ",r.region]}),Object(O.jsxs)("p",{children:["Subregion: ",r.subregion]}),Object(O.jsxs)("p",{children:["Area: ",r.area," km"]}),Object(O.jsxs)("p",{children:["Population: ",r.population]}),Object(O.jsx)("p",{className:"activities",children:r.Activities&&r.Activities.map((function(n){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"Activities "}),Object(O.jsxs)("p",{children:["Activity Name : ",n.name," "]}),Object(O.jsxs)("p",{children:["Difficulty : ",n.difficulty]}),Object(O.jsxs)("p",{children:["Duration: ",n.duration," hours. "]}),Object(O.jsxs)("p",{children:["Season : ",n.season]})]})}))}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:"btn",onClick:function(){return t.push("/home"),void c((function(n){n({type:"RESET",payload:"ALL"})}))},children:"Back to Home \ud83c\udfe0"})})]},e)},G=t(45),D=t(21),z=t(2),Y=b.a.div(s||(s=Object(j.a)(["\n    text-align: center;\n    font-size: 18px;\n    color: white;\n    border: 1px solid white;\n    border-radius: 5px;\n    width: 50%;\n    margin: 15px auto;\n    height: 500px;\n\n    div {\n        display: flex;\n        justify-content: space-around;\n        width: 450px;\n        margin: auto;\n        margin-bottom: 15px;\n    }\n\n    select {\n        width: 300px;\n    }\n    p {\n        color: red;\n        .danger {\n            font-size: 15px;\n        }\n    }\n\n    label {\n        font-weight: 600;\n    }\n    .btn {\n        margin-top: 15px;\n        padding: 8px;\n        margin-right: 12px;\n    }\n    .container {\n        display: flex;\n        justify-content: space-around;\n        width: 450px;\n        margin: auto;\n        margin-bottom: 15px;\n\n        label {\n            margin: 0;\n            padding: 0;\n        }\n        input {\n            width: 300px;\n        }\n    }\n"]))),Z=function(){var n=Object(d.e)(),e=Object(v.c)((function(n){return n.countries})),t=Object(v.b)(),c=Object(u.useState)({countriesInput:[]}),a=Object(m.a)(c,2),r=a[0],i=a[1],o=Object(u.useState)({name:"",duration:"",season:"",difficulty:"",flag:"",idCountry:[]}),s=Object(m.a)(o,2),l=s[0],p=s[1],j=Object(u.useState)({name:!1}),b=Object(m.a)(j,2),h=b[0],x=b[1];Object(u.useEffect)((function(){t(E())}),[t]);var f=function(){var n=Object(A.a)(w.a.mark((function n(e){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),!h.name){n.next=5;break}alert("Complete all the fields"),n.next=14;break;case 5:return n.prev=5,n.next=8,k.a.post("https://countries-a.herokuapp.com/activities",l);case 8:alert("Activity created."),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(5),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[5,11]])})));return function(e){return n.apply(this,arguments)}}(),g=function(n){var e=function(n){var e={};return n.name||(e.name="Activity is required."),e}(Object(z.a)(Object(z.a)({},l),{},Object(D.a)({},n.target.value,n.target.value)));x(e),p(Object(z.a)(Object(z.a)({},l),{},Object(D.a)({},n.target.name,n.target.value)))};return Object(O.jsxs)("form",{onSubmit:function(n){return f(n)},children:[Object(O.jsx)(S,{}),Object(O.jsxs)(Y,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Create your own activity"}),Object(O.jsx)("p",{children:"Please fill out all fields as required and click 'Create Activity'"})]}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("label",{children:"Activity Name: "}),Object(O.jsx)("input",{type:"text",name:"name",value:l.name,onChange:g}),h.name&&Object(O.jsxs)("p",{className:"danger",children:[h.name," "]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Duration: "}),Object(O.jsxs)("select",{type:"number",name:"duration",min:"1",max:"24",value:l.duration,onChange:g,children:[Object(O.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Select a duration..."}),Object(O.jsx)("option",{value:"1",children:"1hs"}),Object(O.jsx)("option",{value:"4",children:"4hs"}),Object(O.jsx)("option",{value:"8",children:"8hs"}),Object(O.jsx)("option",{value:"16",children:"16hs"}),Object(O.jsx)("option",{value:"24",children:"24hs"})]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Season: "}),Object(O.jsxs)("select",{type:"number",name:"season",value:l.season,onChange:g,children:[Object(O.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Select a season..."}),Object(O.jsx)("option",{value:"summer",children:"Summer"}),Object(O.jsx)("option",{value:"winter",children:"Winter"}),Object(O.jsx)("option",{value:"spring",children:"Spring"}),Object(O.jsx)("option",{value:"autumn",children:"Autumn"})]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Difficulty: "}),Object(O.jsxs)("select",{type:"number",name:"difficulty",min:"1",max:"5",value:l.difficulty,onChange:g,children:[Object(O.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Select a difficulty..."}),Object(O.jsx)("option",{value:"1",children:"1"}),Object(O.jsx)("option",{value:"2",children:"2"}),Object(O.jsx)("option",{value:"3",children:"3"}),Object(O.jsx)("option",{value:"4",children:"4"}),Object(O.jsx)("option",{value:"5",children:"5"})]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Select countries: "}),Object(O.jsxs)("select",{onChange:function(n){return function(n){i(Object(z.a)(Object(z.a)({},r),{},{countriesInput:n.target.value})),p(Object(z.a)(Object(z.a)({},l),{},{idCountry:[].concat(Object(G.a)(l.idCountry),[n.target.value])}))}(n)},name:"idCountry",children:[Object(O.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Select a country..."}),e&&e.map((function(n,e){return Object(O.jsxs)("option",{value:n.id,children:[n.name," ",n.id]},e)}))]})]}),Object(O.jsx)("button",{className:"btn",type:"submit",value:"create-activity",children:"Create Activity"}),Object(O.jsx)("button",{className:"btn",onClick:function(){n.push("/home")},children:"Back to Home"})]})]})};var F=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(d.a,{exact:!0,path:"/",component:f}),Object(O.jsx)(d.a,{path:"/home",component:S}),Object(O.jsx)(d.a,{path:"/home",component:R}),Object(O.jsx)(d.a,{path:"/countries/:idCountry",component:B}),Object(O.jsx)(d.a,{path:"/form",component:Z})]})},H=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,81)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),c(n),a(n),r(n),i(n)}))},M=t(15),W={countries:[],countriesId:{},region:[],reset:[],type:"all",activities:[],activitiesByCountry:[]},V=function(n,e){return e.filter((function(e){if(!e.Activities)return!1;for(var t=0;t<e.Activities.length;t++)if(e.Activities[t].name===n)return!0}))},q=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_COUNTRIES":return Object(z.a)(Object(z.a)({},n),{},{countries:e.payload,reset:e.payload});case"RESET":return Object(z.a)(Object(z.a)({},n),{},{countries:n.reset,countriesId:{},type:"all"});case"GET_COUNTRIES_ID":return Object(z.a)(Object(z.a)({},n),{},{countriesId:e.payload});case"GET_COUNTRIES_NAME":return Object(z.a)(Object(z.a)({},n),{},{countries:e.payload});case"GET_REGIONS":return Object(z.a)(Object(z.a)({},n),{},{countries:e.payload,type:"region"});case"SORT_ALPHABETICALLY":return Object(z.a)(Object(z.a)({},n),{},{countries:e.payload,type:"A-Z"});case"SORT_ALPHABETICALLY_ZA":return Object(z.a)(Object(z.a)({},n),{},{countries:e.payload,type:"Z-A"});case"POPULATION":return Object(z.a)(Object(z.a)({},n),{},{countries:e.payload,type:"UP"});case"POPULATION_LOWER":return Object(z.a)(Object(z.a)({},n),{},{countries:e.payload,type:"LOWER"});case"ACTIVITIES":case"POST_ACTIVITIES":return Object(z.a)(Object(z.a)({},n),{},{activities:e.payload});case"ACTIVITIES_BY_COUNTRY":var t=n.reset,c=V(e.payload,t);return Object(z.a)(Object(z.a)({},n),{},{countries:c,type:"filtered"});default:return n}},J=t(24),K=t(44),Q=Object(J.c)(q,Object(J.b)(Object(J.a)(K.a)));p.a.render(Object(O.jsx)(v.a,{store:Q,children:Object(O.jsx)(M.a,{children:Object(O.jsx)(F,{})})}),document.getElementById("root")),H()}},[[80,1,2]]]);
//# sourceMappingURL=main.0bf883c6.chunk.js.map