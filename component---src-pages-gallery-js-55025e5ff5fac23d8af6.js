(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ELAM:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("q6Nr"),c=a.n(r);t.a=function(e){var t=e.question,a=e.button,n=e.link,r=e.bgLight,o=e.btGreen;return l.a.createElement("div",{className:"container-fluid text-center text-md-left py-3 py-md-0 "+c.a.askInfo+" "+(r?"bg-light":"")},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col-sm-9"},l.a.createElement("h3",{className:"my-3 my-md-0"},t)),l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("button",{className:"btn btn-default btn-larger "+(o?"btn-green":"")},a))))))}},YCp2:function(e,t,a){e.exports={project:"gallery-module--project--3e-iK",info:"gallery-module--info--3zqbS"}},q6Nr:function(e,t,a){e.exports={askInfo:"askInfo-module--ask-info--3UwTp"}},yp8A:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),c=a("Bl7J"),o=a("vrFN"),m=a("ELAM"),s=a("YCp2"),i=a.n(s);t.default=function(e){var t=e.data.allMarkdownRemark.edges;return l.a.createElement(c.a,null,l.a.createElement(o.a,{title:"Gallery"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row main-header"},l.a.createElement("div",{className:"col-12 col-sm-8"},l.a.createElement("div",null,l.a.createElement("h1",{className:"big"},"Gallery"),l.a.createElement("h2",{className:"light"},l.a.createElement("p",null,"A place to showcase the best examples of RAWGraphs in use")))))),l.a.createElement(m.a,{question:"Have you done something interesting with RAWGraphs?",button:"submit!",link:"https://forms.gle/WnqxUfwnE3nVt58RA",bgLight:!0,btGreen:!0}),l.a.createElement("div",{className:"grey-bg container-fluid"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},t.map((function(e){return l.a.createElement("div",{className:"col-6 col-sm-4 col-md-3 mb-5",key:e.node.frontmatter.path},l.a.createElement(r.Link,{to:e.node.frontmatter.path,as:"div"},l.a.createElement("div",{className:i.a.project},l.a.createElement("img",{alt:e.node.frontmatter.title,className:"img-fluid",src:e.node.frontmatter.image.publicURL}),l.a.createElement("div",{className:i.a.info+" d-none d-md-flex"},l.a.createElement("h2",null,e.node.frontmatter.title),l.a.createElement("p",{className:"small"},e.node.frontmatter.submitted_by)))))}))))),l.a.createElement(m.a,{question:"Do you want to contribute to the project? Any general question or feedback?",button:"contact us",link:"mailto:hello@rawgraphs.io"}))}}}]);
//# sourceMappingURL=component---src-pages-gallery-js-55025e5ff5fac23d8af6.js.map