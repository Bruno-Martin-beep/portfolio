(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{134:function(e,s,t){"use strict";t.r(s);var l=t(3),c=t.n(l),n=t(81),a=t.n(n),i=(t(93),t(82)),r=t(83),o=t(88),j=t(86),h=t(14),m=(t(94),t(4)),x=t(16),d=t(19),b=t(87),g={theme:"light",setTheme:function(){return null}},v=c.a.createContext(g),k=t(0),O=function(e){var s=e.children,t=Object(l.useState)(g.theme),c=Object(h.a)(t,2),n=c[0],a=c[1],i=window.localStorage;return Object(l.useEffect)((function(){var e=i.getItem("globalTheme");e&&a(e)}),[i]),Object(l.useEffect)((function(){i.setItem("globalTheme",n)}),[n,i]),Object(k.jsx)(v.Provider,{value:{theme:n,setTheme:a},children:Object(k.jsx)("div",{className:"theme--".concat(n),children:s})})},p=t(85),_=function(){var e=Object(l.useContext)(v).setTheme;return Object(k.jsxs)("div",{className:"navbar_themes",children:[Object(k.jsx)("div",{className:"themeButton lightT",onClick:function(){return e("light")}}),Object(k.jsx)("div",{className:"themeButton darkT",onClick:function(){return e("dark")}})]})},u=function(e){var s=e.scrollbar,t=Object(l.useState)(null),c=Object(h.a)(t,2),n=c[0],a=c[1];m.a.registerPlugin(p.a),Object(l.useEffect)((function(){var e=function(){var e=document.querySelectorAll(".scrollTo"),s=[];e.forEach((function(e){return s.push(e.getBoundingClientRect().left)})),s[0]<0&&(s=s.map((function(e){return e-s[0]}))),a((function(){return s}))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var i=function(e){s.scrollTo(n[e],0,1e3)};return Object(k.jsxs)("div",{className:"navbar",children:[Object(k.jsx)(_,{}),Object(k.jsxs)("ul",{className:"navbar_sections",children:[Object(k.jsx)("li",{onClick:function(){return i(0)},children:"Home"}),Object(k.jsx)("li",{onClick:function(){return i(1)},children:"About Me"}),Object(k.jsx)("li",{onClick:function(){return i(2)},children:"Projects"}),Object(k.jsx)("li",{onClick:function(){return i(3)},children:"Skills"}),Object(k.jsx)("li",{onClick:function(){return i(4)},children:"Contact"})]})]})},N=function(){return Object(k.jsxs)("section",{className:"home scrollTo",children:[Object(k.jsx)("h1",{className:"firtN",children:"BRUNO"}),Object(k.jsx)("h1",{className:"sectN",children:"MARTIN"}),Object(k.jsx)("a",{className:"pdf",target:"_blank",rel:"noreferrer",href:"portfolio/resume.pdf",children:"DOWNLOAD RESUME IN PDF"})]})},f=function(){return Object(k.jsxs)("section",{className:"section",children:[Object(k.jsx)("h2",{children:"About Me"}),Object(k.jsxs)("div",{className:"about_cont scrollTo",children:[Object(k.jsxs)("div",{className:"about_cont2",children:[Object(k.jsx)("p",{className:"about_text",children:"Hi, I\u2019m a beginner front-end developer & ui designer based in C\xf3rdoba, Argentina, native Spanish and beginner(A2) English speaker."}),Object(k.jsx)("svg",{width:"130",height:"166",viewBox:"0 0 130 166",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"about_icon",children:Object(k.jsx)("path",{className:"svg_color",d:"M17.7813 54V51.5H51.7813L66.2812 0.75L68.7812 1.50001L54.5313 51.5H93.7813L108.281 0.75L110.781 1.50001L96.5313 51.5H129.781V54H95.7812L78.7813 112.5H112.031V115H78.0312L63.5312 165.75L61.0313 165L75.2813 115H36.0312L21.5313 165.75L19.0313 165L33.2813 115H0.03125V112.5H34.0312L51.0312 54H17.7813ZM53.7812 54L36.7813 112.5H76.0313L93.0312 54H53.7812Z"})})]}),Object(k.jsxs)("div",{className:"about_cont2",children:[Object(k.jsx)("svg",{width:"147",height:"164",viewBox:"0 0 147 164",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"about_icon asterisk",children:Object(k.jsx)("path",{className:"svg_color",d:"M62.0879 4.5C65.4212 1.5 69.2546 0 73.5879 0C77.9212 0 81.5879 1.5 84.5879 4.5C87.9212 7.16665 89.5879 10.6666 89.5879 15C89.5879 21 87.2546 30.8333 82.5879 44.5C77.9212 58.1667 75.4212 69.6667 75.0879 79C83.4212 74 92.0879 66.3333 101.088 56C110.088 45.3333 117.088 38.5 122.088 35.5C125.088 33.5 128.088 32.5 131.088 32.5C135.421 32.5 139.088 34.1667 142.088 37.5C145.088 40.8333 146.588 44.5 146.588 48.5C146.588 53.5 144.088 57.8333 139.088 61.5C133.755 64.8333 124.088 68 110.088 71C96.0879 74 84.9212 77.6666 76.5879 82C84.9212 86.3333 96.0879 89.8333 110.088 92.5C124.421 95.1667 134.088 98.1667 139.088 101.5C144.088 105.167 146.588 109.333 146.588 114C146.588 118.333 145.088 122.167 142.088 125.5C139.421 128.833 135.921 130.5 131.588 130.5C128.255 130.5 125.088 129.5 122.088 127.5C117.088 124.5 110.088 117.833 101.088 107.5C92.0879 97.1666 83.4212 89.5 75.0879 84.5C75.4212 93.8333 77.9212 105.333 82.5879 119C87.2546 132.667 89.5879 142.5 89.5879 148.5C89.5879 152.833 87.9212 156.5 84.5879 159.5C81.5879 162.167 77.9212 163.5 73.5879 163.5C69.2546 163.5 65.4212 162.167 62.0879 159.5C59.0879 156.5 57.5879 152.833 57.5879 148.5C57.5879 142.5 59.9212 132.667 64.5879 119C69.2546 105.333 71.7546 93.8333 72.0879 84.5C63.7546 89.5 55.0879 97.1666 46.0879 107.5C37.0879 117.833 30.0879 124.5 25.0879 127.5C22.0879 129.5 18.9212 130.5 15.5879 130.5C11.2546 130.5 7.58789 128.833 4.58789 125.5C1.92122 122.167 0.587891 118.333 0.587891 114C0.587891 109.333 3.08789 105.167 8.08789 101.5C13.0879 98.1667 22.5879 95.1667 36.5879 92.5C50.9212 89.8333 62.2546 86.3333 70.5879 82C62.2546 77.6666 51.0879 74 37.0879 71C23.0879 68 13.4212 64.8333 8.08789 61.5C3.08789 57.8333 0.587891 53.5 0.587891 48.5C0.587891 44.5 2.08789 40.8333 5.08789 37.5C8.08789 34.1667 11.7546 32.5 16.0879 32.5C19.0879 32.5 22.0879 33.5 25.0879 35.5C30.0879 38.5 37.0879 45.3333 46.0879 56C55.0879 66.3333 63.7546 74 72.0879 79C71.7546 69.6667 69.2546 58.1667 64.5879 44.5C59.9212 30.8333 57.5879 21 57.5879 15C57.5879 10.6666 59.0879 7.16665 62.0879 4.5Z"})}),Object(k.jsx)("p",{className:"about_text",children:"Fascinated in learning WebGL with Three.js and animation with Gsap, always ready to learn new technologies, tools and knowledges."})]})]})]})},w=t.p+"static/media/shinji.feb43790.png",y=function(){return Object(k.jsxs)("section",{className:"section",children:[Object(k.jsx)("h2",{children:"Projects"}),Object(k.jsxs)("div",{id:"proj",className:"proj_cont scrollTo",children:[Object(k.jsxs)("div",{className:"proj_info",children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:"Proj_ftilte",children:"EVANGELION"}),Object(k.jsx)("p",{className:"proj_stitle",children:"MEMORY GAME"})]}),Object(k.jsxs)("p",{className:"proj_text",children:["A mini-game of making pairs, where you can raise your score, developed with ",Object(k.jsx)("span",{className:"bold",children:"React"}),","," ",Object(k.jsx)("span",{className:"bold",children:"Firebase"})," and"," ",Object(k.jsx)("span",{className:"bold",children:"Gsap"}),"."]}),Object(k.jsxs)("div",{className:"proj_link",children:[Object(k.jsx)("a",{className:"proj_link",target:"_blank",rel:"noreferrer",href:"https://bruno-martin-beep.github.io/memory-game/",children:"view live \u203a"}),Object(k.jsx)("a",{className:"proj_link",target:"_blank",rel:"noreferrer",href:"https://github.com/Bruno-Martin-beep/memory-game",children:"view repo \u203a"})]})]}),Object(k.jsx)("div",{className:"proj_img",children:Object(k.jsx)("img",{src:w,alt:"shinji"})})]})]})},C=[{name:"Figma",svg:Object(k.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",className:"skill_svg",children:[Object(k.jsx)("rect",{width:"256",height:"256",fill:"none"}),Object(k.jsx)("circle",{cx:"162",cy:"128",r:"34",fill:"none",className:"skill_svg_stroke",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),Object(k.jsx)("path",{fill:"none",className:"skill_svg_stroke",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8",d:"M128,94V26.00089H94a34,34,0,0,0,0,68Z"}),Object(k.jsx)("path",{fill:"none",className:"skill_svg_stroke",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8",d:"M128 161.99911V94H94a34 34 0 0 0 0 68zM128 94V26.00089h34a34 34 0 0 1 0 68z"}),Object(k.jsx)("path",{fill:"none",className:"skill_svg_stroke",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8",d:"M128,161.99911v34.00044A34,34,0,1,1,94,162Z"})]})},{name:"Html",svg:Object(k.jsx)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"skill_svg",children:Object(k.jsx)("path",{className:"skill_svg_fill",d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"})})},{name:"Css",svg:Object(k.jsx)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"skill_svg",children:Object(k.jsx)("path",{className:"skill_svg_fill",d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"})})},{name:"JavaScript",svg:Object(k.jsx)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"skill_svg",children:Object(k.jsx)("path",{className:"skill_svg_fill",d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"})})},{name:"React",svg:Object(k.jsx)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"skill_svg",children:Object(k.jsx)("path",{className:"skill_svg_fill",d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"})})},{name:"Git",svg:Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",className:"skill_svg",children:Object(k.jsx)("path",{className:"skill_svg_fill",d:"m39.22102,18.20222l-17.45459,-17.45459a2.5982,2.5982 0 0 0 -3.64748,0l-3.61417,3.63082l4.59682,4.59682a3.04789,3.04789 0 0 1 3.86399,3.8973l4.43027,4.43027a3.06455,3.06455 0 1 1 -1.16586,4.99654a3.0812,3.0812 0 0 1 -0.66621,-3.33103l-4.13048,-3.98058l0,10.85916a3.33103,3.33103 0 0 1 0.79945,0.58293a3.0812,3.0812 0 1 1 -3.33103,-0.66621l0,-11.05902a3.03124,3.03124 0 0 1 -1.66551,-4.01389l-4.51354,-4.5302l-11.97505,11.9584a2.5982,2.5982 0 0 0 0,3.64748l17.45459,17.45459a2.5982,2.5982 0 0 0 3.64748,0l17.37132,-17.37132a2.5982,2.5982 0 0 0 0,-3.64748"})})},{name:"Sass",svg:Object(k.jsx)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"skill_svg",children:Object(k.jsx)("path",{className:"skill_svg_fill",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"})})},{name:"Gsap",svg:Object(k.jsxs)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 335.58 513",className:"skill_svg",children:[Object(k.jsx)("title",{children:"socks"}),Object(k.jsx)("path",{fill:"none",className:"skill_svg_stroke",strokeWidth:"8",d:"M316.34,329.09A93.22,93.22,0,0,0,346,397.42c-22.55,15.9-50.17,39-115.08,92.6A81.91,81.91,0,0,1,222,496.3c9-63.25-37.57-125.95-105.21-132.87a8.18,8.18,0,0,1,.76-.83l101.37-97V20.05A17.53,17.53,0,0,1,236.49,2.5H372.75A17.53,17.53,0,0,1,390.3,20V157.19c0,26.18,2.12,53.33,9.32,78.69A93.86,93.86,0,0,0,316.34,329.09Z",transform:"translate(-88.21 0.5)"}),Object(k.jsx)("path",{fill:"none",className:"skill_svg_stroke",strokeWidth:"8",d:"M379.46,376.23A380.1,380.1,0,0,0,346,397.42a93.73,93.73,0,0,1,53.69-161.51,167.36,167.36,0,0,0,9.58,26C421,287.17,437.58,342.49,379.46,376.23Zm-157.4,120.1c-32.42,20.76-77,17.08-105.89-11.77a85.24,85.24,0,0,1,.63-121.16C184.45,370.38,231.1,433,222.06,496.33Z",transform:"translate(-88.21 0.5)"}),Object(k.jsx)("path",{fill:"none",className:"skill_svg_stroke",strokeWidth:"8",d:"M202.8,140.43",transform:"translate(-88.21 0.5)"}),Object(k.jsx)("path",{fill:"none",className:"skill_svg_stroke",strokeWidth:"8",d:"M231.36,169",transform:"translate(-88.21 0.5)"}),Object(k.jsx)("polygon",{fill:"none",className:"skill_svg_stroke",strokeWidth:"8",points:"187.71 87.93 159.09 126.49 130.53 87.93 159.09 49.37 187.71 87.93"}),Object(k.jsx)("polygon",{fill:"none",className:"skill_svg_stroke",strokeWidth:"8",points:"244.88 87.93 216.26 126.49 187.71 87.93 216.26 49.37 244.88 87.93"}),Object(k.jsx)("polygon",{fill:"none",className:"skill_svg_stroke",strokeWidth:"8",points:"302.05 87.93 273.44 126.49 244.88 87.93 273.44 49.37 302.05 87.93"}),Object(k.jsx)("polygon",{fill:"none",className:"skill_svg_stroke",strokeWidth:"8",points:"159.15 126.49 130.53 165.05 130.56 126.49 130.53 87.93 159.15 126.49"}),Object(k.jsx)("polygon",{fill:"none",className:"skill_svg_stroke",strokeWidth:"8",points:"216.29 126.49 187.68 165.05 159.12 126.49 187.68 87.93 216.29 126.49"}),Object(k.jsx)("polygon",{fill:"none",className:"skill_svg_stroke",strokeWidth:"8",points:"273.46 126.49 244.85 165.05 216.29 126.49 244.85 87.93 273.46 126.49"}),Object(k.jsx)("polygon",{fill:"none",className:"skill_svg_stroke",strokeWidth:"8",points:"302.05 126.49 302.02 165.05 273.46 126.49 302.02 87.93 302.05 126.49"})]})}],L=[{name:"Redux",svg:Object(k.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"skill_svg",children:[Object(k.jsx)("path",{className:"skill_svg_fill",d:"M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"})," "]})},{name:"Blender",svg:Object(k.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"skill_svg",children:[Object(k.jsx)("polygon",{className:"skill_svg_fill",points:"9.203 18.737 9.203 18.737 9.198 18.732"}),Object(k.jsx)("polygon",{className:"skill_svg_fill",points:"13.375 15.112 13.374 15.112 13.374 15.112"}),Object(k.jsx)("path",{className:"skill_svg_fill",d:"M23.925 12.839c.001.007 0 .014.001.02.001.006.003.012.003.018L23.925 12.839zM22.897 10.068c.005.008.009.017.015.026.001.001.002.002.002.003L22.897 10.068zM15.752 10.418c-.009 0-.016 0-.025 0-.835 0-1.599.298-2.188.79-.592.5-.984 1.206-1.03 2.006h.001c-.045.822.285 1.584.865 2.151.61.582 1.435.939 2.344.939.011 0 .022 0 .032 0 0 0 .001 0 .002 0 .011 0 .022 0 .033 0 .909 0 1.734-.357 2.341-.938.58-.567.91-1.33.865-2.153-.045-.799-.436-1.505-1.028-2.005C17.383 10.718 16.602 10.418 15.752 10.418z"}),Object(k.jsx)("path",{className:"skill_svg_fill",d:"M22.088,18.965c0.701-0.767,1.247-1.69,1.577-2.709l0.015-0.053c0.203-0.624,0.32-1.342,0.32-2.087c0-0.341-0.027-0.676-0.073-1.004c-0.152-1.028-0.504-1.951-1.015-2.764c-0.504-0.797-1.118-1.474-1.832-2.027l-0.018-0.013h0.002l-7.518-5.772c-0.492-0.378-1.319-0.376-1.86,0.002c-0.547,0.382-0.609,1.015-0.123,1.415l-0.001,0.001l3.126,2.543l-9.543,0.01C4.357,6.508,3.6,7.025,3.45,7.679c-0.154,0.665,0.38,1.217,1.2,1.22v0.002l4.83-0.01l-8.654,6.642c-0.813,0.622-1.075,1.658-0.563,2.313c0.52,0.667,1.625,0.668,2.447,0.004l4.704-3.849c0,0-0.069,0.52-0.063,0.831l-0.002-0.001c0.006,0.314,0.106,0.922,0.256,1.398c0.345,1.071,0.89,1.992,1.598,2.762c0.764,0.837,1.69,1.511,2.73,1.975l0.052,0.021c1.062,0.48,2.303,0.76,3.609,0.76c0.017,0,0.034,0,0.051,0c0.001,0,0.002,0,0.003,0c0.004,0,0.009,0,0.015,0c1.3,0,2.534-0.279,3.649-0.777c1.089-0.491,2.013-1.167,2.77-1.998L22.088,18.965z M20.471,14.954c-0.238,0.631-0.588,1.17-1.031,1.617l-0.002,0.001c-0.97,0.988-2.326,1.548-3.795,1.55c-1.47,0.004-2.827-0.552-3.797-1.538c-0.446-0.448-0.798-0.989-1.026-1.591l-0.01-0.031c-0.16-0.431-0.252-0.929-0.252-1.448c0-0.752,0.195-1.458,0.535-2.073c0.303-0.538,0.687-0.992,1.143-1.362l0.009-0.007c0.942-0.768,2.141-1.183,3.396-1.185s2.455,0.41,3.398,1.175c0.48,0.391,0.87,0.854,1.152,1.367c0.279,0.492,0.465,1.072,0.521,1.689l0.001,0.016c0.01,0.109,0.016,0.236,0.016,0.364C20.73,14.01,20.638,14.499,20.471,14.954z"}),Object(k.jsx)("path",{className:"skill_svg_fill",d:"M19.359,20.698c-0.015,0.007-0.031,0.011-0.047,0.018c-0.003,0.001-0.006,0.003-0.009,0.005L19.359,20.698z"})]})},{name:"Three.js",svg:Object(k.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 640 640",className:"skill_svg",children:[Object(k.jsx)("polyline",{fill:"none",points:"171.7,621.7 20,18.4 620,186.9 "}),Object(k.jsxs)("g",{children:[Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"245.8",y1:"362.4",x2:"283.7",y2:"513.3"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"395.5",y1:"404.8",x2:"245.8",y2:"362.4"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"283.7",y1:"513.3",x2:"395.5",y2:"404.8"}),Object(k.jsx)("path",{className:"skill_svg_stroke",strokeWidth:"8",d:"M134,470.9"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"283.7",y1:"513.3",x2:"134",y2:"470.9"}),Object(k.jsx)("path",{className:"skill_svg_stroke",strokeWidth:"8",d:"M134,470.9"}),Object(k.jsx)("polyline",{className:"skill_svg_stroke",fill:"none",strokeWidth:"8",points:"134,470.9 171.9,621.9 283.7,513.3  "}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"134",y1:"470.9",x2:"245.8",y2:"362.4"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"245.8",y1:"362.4",x2:"357.7",y2:"253.8"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"357.7",y1:"253.8",x2:"469.5",y2:"145.3"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"319.8",y1:"102.9",x2:"357.7",y2:"253.8"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"357.7",y1:"253.8",x2:"207.9",y2:"211.5"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"207.9",y1:"211.5",x2:"245.8",y2:"362.4"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"245.8",y1:"362.4",x2:"96.1",y2:"320"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"96.1",y1:"320",x2:"134",y2:"470.9"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"58.2",y1:"169.1",x2:"96.1",y2:"320"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"207.9",y1:"211.5",x2:"58.2",y2:"169.1"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"96.1",y1:"320",x2:"207.9",y2:"211.5"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"207.9",y1:"211.4",x2:"319.8",y2:"102.9"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"319.8",y1:"102.9",x2:"170",y2:"60.5"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"170",y1:"60.5",x2:"207.9",y2:"211.4"}),Object(k.jsx)("polyline",{className:"skill_svg_stroke",fill:"none",strokeWidth:"8",points:"58.2,169.1 20.3,18.1 170,60.5  "}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"58.2",y1:"169.1",x2:"170",y2:"60.5"}),Object(k.jsx)("polyline",{className:"skill_svg_stroke",fill:"none",strokeWidth:"8",points:"507.4,296.2 619.2,187.7 469.5,145.3  "}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"469.5",y1:"145.3",x2:"507.4",y2:"296.2"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"507.4",y1:"296.2",x2:"357.7",y2:"253.8"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"357.7",y1:"253.8",x2:"395.5",y2:"404.8"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"395.5",y1:"404.8",x2:"507.4",y2:"296.2"}),Object(k.jsx)("line",{className:"skill_svg_stroke",strokeWidth:"8",x1:"469.5",y1:"145.3",x2:"319.8",y2:"102.9"})]})]})},{name:"Photoshop",svg:Object(k.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 485 485",className:"skill_svg",children:Object(k.jsxs)("g",{children:[Object(k.jsx)("path",{className:"skill_svg_fill",d:"M321.27,328.414c-16.269,0-37.082-7.252-47.173-13.307l-9.743,39.196c13.307,7.252,33.866,12.299,56.916,12.299\r c50.361,0,76.376-24.124,76.376-57.012c-0.379-25.891-14.412-42.887-47.932-54.333c-21.537-7.631-28.318-11.952-28.318-20.213\r c0-8.988,7.506-14.412,20.813-14.412c15.136,0,30.177,5.803,38.185,10.122l9.714-37.839c-10.817-5.424-29.168-10.091-49.76-10.091\r c-43.58,0-71.676,24.88-71.676,57.644c-0.379,20.938,13.655,40.774,50.139,52.976c20.432,6.906,25.856,11.194,25.856,20.182\r C344.668,322.644,337.762,328.414,321.27,328.414z"}),Object(k.jsx)("path",{className:"skill_svg_fill",d:"M141.687,276.194c5.045,0.726,11.573,0.978,18.698,0.978c32.417,0,60.23-7.883,78.834-25.479\r c14.539-13.686,22.42-33.899,22.42-57.643c0-23.777-10.343-43.99-25.983-56.194c-16.146-13.055-40.268-19.456-74.167-19.456\r c-33.489,0-57.264,2.21-74.136,5.046v239.593h54.333V276.194z M141.782,162.012c3.847-1.105,11.479-2.209,22.547-2.209\r c27.465,0,42.885,13.276,43.01,35.572c0,24.911-18.132,39.669-47.3,39.669c-7.884,0-13.559-0.346-18.257-1.357V162.012z"}),Object(k.jsx)("path",{className:"skill_svg_fill",d:"M0,0v485h485V0H0z M455,455H30V30h425V455z"})]})})}],M=function(){var e=Object(l.useState)(C[0].svg),s=Object(h.a)(e,2),t=s[0],c=s[1],n=function(e){c(e),m.a.to(".skill_icon",{gap:"clamp(9vh, 35vw, 40vh)",duration:.5,ease:"power1.out"}),m.a.fromTo(".skill_svg",{opacity:0,transform:"scale(0.6) translateY(18%)",transformOrigin:"center center"},{opacity:1,transform:"scale(1) translateY(18%)",transformOrigin:"center center",duration:.4,ease:"power1.out"})},a=function(){m.a.to(".skill_icon",{gap:"clamp(10vh, 5vw, 12vh)",duration:.5,ease:"power2.out"}),m.a.fromTo(".skill_svg",{opacity:1,transform:"scale(1) translateY(18%)",transformOrigin:"center center"},{opacity:0,transform:"scale(0.6) translateY(18%)",transformOrigin:"center center",duration:.4,ease:"power2.Out"})};return Object(k.jsxs)("section",{className:"section",children:[Object(k.jsx)("h2",{children:"Skills"}),Object(k.jsxs)("div",{className:"skill_cont scrollTo",children:[Object(k.jsxs)("p",{className:"skill_text",children:["const ",Object(k.jsx)("span",{className:"bold upper",children:"current"})," = ["," ",C.map((function(e,s){return Object(k.jsxs)("span",{onMouseOver:function(){return n(e.svg)},onMouseLeave:function(){return a()},children:[" ",e.name,s!==C.length-1&&","]},e.name)}))," ","];"]}),Object(k.jsxs)("p",{className:"skill_text",children:["const ",Object(k.jsx)("span",{className:"bold upper",children:"upcoming"})," = ["," ",L.map((function(e,s){return Object(k.jsxs)("span",{onMouseOver:function(){return n(e.svg)},onMouseLeave:function(){return a()},children:[" ",e.name,s!==L.length-1&&","]},e.name)}))," ","];"]}),Object(k.jsxs)("div",{className:"skill_icon",children:[Object(k.jsx)("p",{className:"skill_bracket",children:"["}),t,Object(k.jsx)("p",{className:"skill_bracket",children:"]"})]})]})]})},z=function(){return Object(k.jsxs)("section",{className:"section",children:[Object(k.jsx)("h2",{children:"Contact"}),Object(k.jsx)("div",{className:"cont_cont scrollTo",children:Object(k.jsxs)("div",{className:"cont_info",children:[Object(k.jsxs)("p",{className:"cont_text",children:["const ",Object(k.jsx)("span",{className:"bold",children:"sayHi"})," = ","{"]}),Object(k.jsx)("p",{className:"cont_text cont_textSpace",children:"Mail: brunomartin.dev@gmail.com,"}),Object(k.jsx)("p",{className:"cont_text cont_textSpace",children:"Phone: +54 9 351 557-8940,"}),Object(k.jsx)("p",{className:"cont_text cont_textSpace",children:"Github: Bruno-Martin-beep"}),Object(k.jsx)("p",{className:"cont_text",children:"};"})]})})]})};var W=function(){var e=Object(l.useState)(null),s=Object(h.a)(e,2),t=s[0],c=s[1];return Object(l.useEffect)((function(){m.a.registerPlugin(x.a);var e=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"transformDelta",value:function(e,s){if(!/wheel/.test(s.type))return e;var t=e.x,l=e.y;return{y:0,x:Math.abs(t)>Math.abs(l)?t:l}}}]),t}(d.b.ScrollbarPlugin);e.pluginName="horizontalScroll",d.b.use(e,b.a);var s={damping:.075,alwaysShowTracks:!0,continuousScrolling:!0,delegateTo:document},t=d.b.init(document.querySelector("#my-scrollbar"),s);c(t),x.a.scrollerProxy("#my-scrollbar",{scrollLeft:function(e){return arguments.length&&(t.scrollLeft=e),t.scrollLeft},getBoundingClientRect:function(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}}}),t.addListener(x.a.update);var l=m.a.fromTo(".bgProj",{opacity:0},{opacity:1,duration:.6});x.a.create({animation:l,trigger:".proj_cont",scroller:".scroller",horizontal:!0,toggleActions:"play reverse play reverse",start:"top-=30% top",end:"end+=50% top"});var n=m.a.to(".asterisk",{rotation:360,duration:4,ease:"none",repeat:-1}).totalProgress(.5),a=m.a.timeline(),h=m.a.utils.clamp(-4,4);x.a.create({trigger:".scroller",scroller:".scroller",horizontal:!0,start:"center center",end:"+=250%",onUpdate:function(e){var s=e.getVelocity,t=h(s()/50),l=t,c=t;a.clear().to(n,{duration:1,timeScale:l}).to(n,{duration:1,timeScale:c})}});var g=m.a.to("h1",{x:"25%"});x.a.create({animation:g,trigger:".scroller",scroller:".scroller",horizontal:!0,start:"top top",end:"+=100% end",scrub:!0})}),[]),Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(O,{children:[Object(k.jsx)(u,{scrollbar:t}),Object(k.jsx)("div",{className:"bg"}),Object(k.jsx)("div",{className:"bgProj"}),Object(k.jsx)("div",{id:"my-scrollbar",className:"scroller",children:Object(k.jsxs)("div",{className:"wrapper",children:[Object(k.jsx)(N,{}),Object(k.jsx)(f,{}),Object(k.jsx)(y,{}),Object(k.jsx)(M,{}),Object(k.jsx)(z,{})]})})]})})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,135)).then((function(s){var t=s.getCLS,l=s.getFID,c=s.getFCP,n=s.getLCP,a=s.getTTFB;t(e),l(e),c(e),n(e),a(e)}))};a.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(W,{})}),document.getElementById("root")),H()},93:function(e,s,t){},94:function(e,s,t){}},[[134,1,2]]]);
//# sourceMappingURL=main.7031944c.chunk.js.map