(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[299],{46200:function(e,t,s){Promise.resolve().then(s.bind(s,28177))},63589:function(e,t,s){"use strict";var r=s(57437);t.Z=e=>{let{name:t}=e;return(0,r.jsx)("h1",{className:"text-2xl font-semibold text-gray-700",children:t})}},28177:function(e,t,s){"use strict";s.r(t);var r=s(57437),a=s(51994),n=s(2265),l=s(63589),d=s(35231),o=s(23909),i=s(85369),c=s(68295),u=s(85475),h=s(20153);t.default=()=>{let[e,t]=(0,n.useState)(0),[s,x]=(0,n.useState)("All"),[m,g]=(0,n.useState)(""),[p,y]=(0,n.useState)(""),{data:f,isLoading:j,isError:b}=(0,a.Nh)(),v=(0,n.useMemo)(()=>null!=f?f:[],[f]),N=e=>new Date(e).toISOString().split("T")[0],w=(0,n.useMemo)(()=>Object.values(v.filter(e=>{let t="All"===s||e.category===s,r=N(e.date),a=!m||!p||r>=m&&r<=p;return t&&a}).reduce((e,t)=>{let s=parseInt(t.amount);return e[t.category]||(e[t.category]={name:t.category,amount:0},e[t.category].color="#".concat(Math.floor(16777215*Math.random()).toString(16)),e[t.category].amount+=s),e},{})),[v,s,m,p]),C="block text-sm font-medium text-gray-700",E="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md";return j?(0,r.jsx)("div",{className:"py-4",children:"Loading..."}):b||!f?(0,r.jsx)("div",{className:"text-center text-red-500 py-4",children:"Failed to fetch expenses"}):(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"mb-5",children:[(0,r.jsx)(l.Z,{name:"Expenses"}),(0,r.jsx)("p",{className:"text-sm text-gray-500",children:"A visual representation of expenses over time."})]}),(0,r.jsxs)("div",{className:"flex flex-col md:flex-row justify-between gap-4",children:[(0,r.jsxs)("div",{className:"w-full md:w-1/3 bg-white shadow rounded-lg p-6",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold mb-4",children:"Filter by Category and Date"}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"category",className:C,children:"Category"}),(0,r.jsxs)("select",{id:"category",name:"category",className:E,defaultValue:"All",onChange:e=>x(e.target.value),children:[(0,r.jsx)("option",{children:"All"}),(0,r.jsx)("option",{children:"Office"}),(0,r.jsx)("option",{children:"Professional"}),(0,r.jsx)("option",{children:"Salaries"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"start-date",className:C,children:"Start Date"}),(0,r.jsx)("input",{type:"date",id:"start-date",name:"start-date",className:E,onChange:e=>g(e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"end-date",className:C,children:"End Date"}),(0,r.jsx)("input",{type:"date",id:"end-date",name:"end-date",className:E,onChange:e=>y(e.target.value)})]})]})]}),(0,r.jsx)("div",{className:"flex-grow bg-white shadow rounded-lg p-4 md:p-6",children:(0,r.jsx)(d.h,{width:"100%",height:400,children:(0,r.jsxs)(o.u,{children:[(0,r.jsx)(i.b,{data:w,cx:"50%",cy:"50%",label:!0,outerRadius:150,fill:"#8884d8",dataKey:"amount",onMouseEnter:(e,s)=>t(s),children:w.map((t,s)=>(0,r.jsx)(c.b,{fill:s===e?"rgb(29, 78, 216)":t.color},"cell-".concat(s)))}),(0,r.jsx)(u.u,{}),(0,r.jsx)(h.D,{})]})})})]})]})}},51994:function(e,t,s){"use strict";s.d(t,{C$:function(){return o},Nh:function(){return u},hi:function(){return l},je:function(){return d},qX:function(){return i},zQ:function(){return c}});var r=s(8507),a=s(36074),n=s(20357);let l=(0,r.LC)({baseQuery:(0,a.ni)({baseUrl:n.env.NEXT_PUBLIC_API_BASE_URL}),reducerPath:"api",tagTypes:["DashboardMetrics","Products","Users","Expenses"],endpoints:e=>({getDashboardMetrics:e.query({query:()=>"/dashboard",providesTags:["DashboardMetrics"]}),getProducts:e.query({query:e=>({url:"/products",params:e?{search:e}:{}}),providesTags:["Products"]}),createProduct:e.mutation({query:e=>({url:"/products",method:"POST",body:e}),invalidatesTags:["Products"]}),getUsers:e.query({query:()=>"/users",providesTags:["Users"]}),getExpensesByCategory:e.query({query:()=>"/expenses",providesTags:["Expenses"]})})}),{useGetDashboardMetricsQuery:d,useGetProductsQuery:o,useCreateProductMutation:i,useGetUsersQuery:c,useGetExpensesByCategoryQuery:u}=l}},function(e){e.O(0,[507,575,971,23,744],function(){return e(e.s=46200)}),_N_E=e.O()}]);