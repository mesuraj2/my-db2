(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{9336:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/offer/[offerchat]",function(){return n(6693)}])},6693:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSP:function(){return f},default:function(){return p}});var s=n(5893),i=n(7294),o=n(1163),a=n.n(o),r=n(4221),c=n(196),l=n(9653),u=n(8830),h=n(7741),d=n(3123),f=!0;function p(t){let{Offerdetail:e}=t,{isOpen:n,onOpen:f,onClose:p}=(0,l.qY)(),x=(0,o.useRouter)(),[j,m]=(0,i.useState)(),_=(0,r.pm)(),[g,C]=(0,i.useState)(),[w,y]=(0,i.useState)([]),k=async()=>{if(d.Z.getItem("token")){let t=await fetch("http://localhost:3001/api/chat/groupaddOffer",{method:"PUT",headers:{"Content-Type":"application/json","auth-token":d.Z.getItem("token")},body:JSON.stringify({userId:d.Z.getItem("id"),chatId:e.chat_id})});(await t.json()).exits?(_({title:"User already exits",status:"warning",duration:5e3,isClosable:!0,position:"top"}),a().push("/chat")):(_({title:"successfull added",status:"warning",duration:5e3,isClosable:!0,position:"top"}),a().push("/chat"))}else a().push("/Login")},b=async t=>{t.preventDefault();let e={headers:{"auth-token":d.Z.getItem("token")}},{data:n}=await c.ZP.post("http://localhost:3001/api/chat/offerchat",{chatName:g,offerid:x.query.offerchat,coordinate:JSON.stringify([17.614,78.0816])},e);_({title:"successfull created",status:"warning",duration:5e3,isClosable:!0,position:"top"}),a().push("/chat"),C("")};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:e.offername}),(0,s.jsx)("div",{children:e.chat_id?(0,s.jsxs)("div",{children:["there is already a chat want to ",(0,s.jsx)("button",{onClick:k,children:"join"})]}):(0,s.jsxs)("div",{children:["there is no chat do you want to ",(0,s.jsx)("button",{onClick:f,children:"create"})]})}),(0,s.jsxs)(u.u_,{size:"lg",onClose:p,isOpen:n,isCentered:!0,children:[(0,s.jsx)(u.ZA,{}),(0,s.jsxs)(u.hz,{h:"410px",children:[(0,s.jsx)(u.xB,{fontSize:"40px",fontFamily:"Work sans",d:"flex",justifyContent:"center",children:"Form"}),(0,s.jsx)(u.ol,{}),(0,s.jsx)(u.fe,{d:"flex",flexDir:"column",alignItems:"center",justifyContent:"space-between",children:(0,s.jsxs)("form",{onSubmit:b,children:[(0,s.jsx)("input",{type:"text",placeholder:"enter your chat Name",value:g,onChange:t=>C(t.target.value)}),(0,s.jsx)("button",{onClick:p,children:"submit"})]})}),(0,s.jsx)(u.mz,{children:(0,s.jsx)(h.zx,{onClick:p,children:"Close"})})]})]})]})}}},function(t){t.O(0,[345,774,888,179],function(){return t(t.s=9336)}),_N_E=t.O()}]);