webpackJsonp([1,4],{"./src/components/Card.js":function(e,t,n){"use strict";function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var r=n("./node_modules/styled-components/dist/styled-components.es.js"),s=o(["\n  height: 400px;\n  width: 300px;\n  background-color: #fff;\n  cursor: pointer;\n"],["\n  height: 400px;\n  width: 300px;\n  background-color: #fff;\n  cursor: pointer;\n"]),c=r.default.div(s);t.a=c},"./src/modules/posts/Posts.js":function(e,t,n){"use strict";function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function o(r,s){try{var c=t[r](s),i=c.value}catch(e){return void n(e)}return c.done?void e(i):Promise.resolve(i).then(function(e){o("next",e)},function(e){o("throw",e)})}return o("next")})}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,u,a=n("./node_modules/react/react.js"),l=n.n(a),p=n("./node_modules/react-redux/es/index.js"),f=n("./node_modules/react-router/es/index.js"),d=n("./src/components/Card.js"),h=n("./src/modules/posts/actions.js"),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=(i=n.i(p.connect)(function(e){return{posts:e.posts.posts}},{getFetchAllPosts:h.b,selectPost:h.c}),i(u=function(e){function t(){var e,n,o,c;r(this,t);for(var i=arguments.length,u=Array(i),a=0;a<i;a++)u[a]=arguments[a];return n=o=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={loading:!1},o._goToHome=function(){return f.b.push("/")},o._onClick=function(e){o.props.selectPost(e),f.b.push("/posts/"+e)},c=n,s(o,c)}return c(t,e),m(t,[{key:"componentDidMount",value:function(){function e(){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.props.getFetchAllPosts();case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this;return this.state.loading?l.a.createElement("h1",null,"Loading..."):this.props.posts?l.a.createElement("div",null,this.props.posts.map(function(t,n){return l.a.createElement("li",{key:n,onClick:function(){return e._onClick(t._id)}},l.a.createElement(d.a,null,l.a.createElement("h1",null,t.title),l.a.createElement("p",null,t.text)),l.a.createElement("br",null))}),l.a.createElement("button",{onClick:this._goToHome},"Go Home")):l.a.createElement("h1",null,"No post yet")}}]),t}(a.Component))||u);t.default=b}});
//# sourceMappingURL=1.f5e871cd47eb95494e5d.js.map