(this["webpackJsonpsong-list"]=this["webpackJsonpsong-list"]||[]).push([[0],{14:function(e,t,n){e.exports=n(28)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(8),r=n.n(s),c=n(5),o=n(1),l=n(2),u=n(3),d=n(6),m=n(4),g=n(7),p=(n(25),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"renderList",value:function(){var e=this;return this.props.songs.map((function(t){return i.a.createElement("div",{className:"item",key:t.title},i.a.createElement("div",{className:"right floated content"},i.a.createElement("button",{className:"ui button primary",onClick:function(){return e.props.selectSong(t)}},"Select")),i.a.createElement("div",{className:"content song-list-song-title"},t.title))}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui divided list"},this.renderList())}}]),t}(a.Component)),h=Object(c.b)((function(e){return{songs:e.songs}}),{selectSong:function(e){return{type:"SONG_SELECTED",payload:e}}})(p),b=(n(26),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.song?i.a.createElement("div",null,i.a.createElement("div",{className:"ui large header"},"Song Details for ".concat(this.props.song.title," :")),i.a.createElement("div",{className:"ui medium header"},"The Singer of this song is ".concat(this.props.song.singer,".")),i.a.createElement("div",{className:"ui medium header"},"The Duration of Song is \n                    ".concat(Math.floor(this.props.song.duration/60),":").concat(this.props.song.duration%60,"."))):i.a.createElement("div",{className:"song-detail-no"},i.a.createElement("i",{className:"close icon loading big blue"}),i.a.createElement("br",null),"Select a Song to see details.")}}]),t}(a.Component)),E=Object(c.b)((function(e){return{song:e.selectedSong}}))(b),f=(n(27),function(e){function t(e){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).call(this,e))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ui container grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"ui card column eight wide",id:"song-list"},i.a.createElement(h,null)),i.a.createElement("div",{className:"ui card column eight wide",id:"song-detail"},i.a.createElement(E,null))))}}]),t}(a.Component)),v=Object(o.b)({songs:function(){return[{title:"understanding",singer:"Evanescence",duration:323},{title:"whisper",singer:"Evanescence",duration:430},{title:"misery business",singer:"Paramore",duration:273},{title:"someone you loved",singer:"Lewis Capaldi",duration:225}]},selectedSong:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SONG_SELECTED"===t.type?t.payload:e}});r.a.render(i.a.createElement(c.a,{store:Object(o.c)(v)},i.a.createElement(f,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a40e531e.chunk.js.map