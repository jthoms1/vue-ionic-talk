/*! Built with http://stenciljs.com */
const{h:t,Context:a}=window.StencilDemoComponents;class e{constructor(){this.userid=""}fetchGithubData(t){fetch(`https://api.github.com/users/${t}`).then(t=>t.json()).then(t=>{this.userData=t})}componentWillLoad(){this.fetchGithubData(this.userid)}render(){return this.userData?[t("small",null,this.userData.name?`${this.userData.name} / `:null,t("a",{href:this.userData.html_url},"@",this.userData.login)),this.userData.avatar_url?t("img",{class:"roundup",src:this.userData.avatar_url,alt:"gravatar"}):null]:null}static get is(){return"github-intro"}static get encapsulation(){return"scoped"}static get properties(){return{userData:{state:!0},userid:{type:String,attr:"userid",watchCallbacks:["fetchGithubData"]}}}static get style(){return"img.roundup[data-github-intro]{border:2px solid #fff;height:40px;width:40px;border-radius:23px;display:block;margin:-15px auto 0}"}}export{e as GithubIntro};