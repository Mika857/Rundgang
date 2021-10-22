// Garden Gnome Software - Skin
// Pano2VR 4.5.3/10717
// Filename: Rundgang.ggsk
// Generated Fr 22. Okt 22:09:34 2021

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._hotspots_1=document.createElement('div');
		this._hotspots_1.ggId="Hotspots_1";
		this._hotspots_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hotspots_1.ggVisible=true;
		this._hotspots_1.className='ggskin ggskin_container';
		this._hotspots_1.ggType='container';
		hs ='position:absolute;';
		hs+='left: 811px;';
		hs+='top:  771px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._hotspots_1.setAttribute('style',hs);
		this.divSkin.appendChild(this._hotspots_1);
		this._hotspots_2=document.createElement('div');
		this._hotspots_2.ggId="Hotspots_2";
		this._hotspots_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hotspots_2.ggVisible=true;
		this._hotspots_2.className='ggskin ggskin_container';
		this._hotspots_2.ggType='container';
		hs ='position:absolute;';
		hs+='left: 795px;';
		hs+='top:  751px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._hotspots_2.setAttribute('style',hs);
		this.divSkin.appendChild(this._hotspots_2);
		this._hotspots_e=document.createElement('div');
		this._hotspots_e.ggId="Hotspots_E";
		this._hotspots_e.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hotspots_e.ggVisible=true;
		this._hotspots_e.className='ggskin ggskin_container';
		this._hotspots_e.ggType='container';
		hs ='position:absolute;';
		hs+='left: 114px;';
		hs+='top:  728px;';
		hs+='width: 124px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._hotspots_e.setAttribute('style',hs);
		this.divSkin.appendChild(this._hotspots_e);
		this._mapholder=document.createElement('div');
		this._mapholder.ggId="Mapholder";
		this._mapholder.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mapholder.ggVisible=true;
		this._mapholder.className='ggskin ggskin_rectangle';
		this._mapholder.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -1px;';
		hs+='width: 1337px;';
		hs+='height: 420px;';
		hs+=cssPrefix + 'transform-origin: 0% 0%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		this._mapholder.setAttribute('style',hs);
		this._text_1=document.createElement('div');
		this._text_1__text=document.createElement('div');
		this._text_1.className='ggskin ggskin_textdiv';
		this._text_1.ggTextDiv=this._text_1__text;
		this._text_1.ggId="Text 1";
		this._text_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_1.ggVisible=false;
		this._text_1.className='ggskin ggskin_text';
		this._text_1.ggType='text';
		hs ='position:absolute;';
		hs+='left: 442px;';
		hs+='top:  74px;';
		hs+='width: 234px;';
		hs+='height: 87px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._text_1.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 234px;';
		hs+='height: 87px;';
		hs+='background: #000000;';
		hs+='border: 1px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_1__text.setAttribute('style',hs);
		this._text_1.ggTextDiv.innerHTML="<p style=\"font-size:30px\">2. Stock<\/p>";
		this._text_1.appendChild(this._text_1__text);
		this._mapholder.appendChild(this._text_1);
		this._stockwerk_buttons=document.createElement('div');
		this._stockwerk_buttons.ggId="Stockwerk Buttons";
		this._stockwerk_buttons.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stockwerk_buttons.ggVisible=false;
		this._stockwerk_buttons.className='ggskin ggskin_container';
		this._stockwerk_buttons.ggType='container';
		hs ='position:absolute;';
		hs+='left: 1146px;';
		hs+='top:  179px;';
		hs+='width: 182px;';
		hs+='height: 204px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._stockwerk_buttons.setAttribute('style',hs);
		this._button_3st=document.createElement('div');
		this._button_3st__text=document.createElement('div');
		this._button_3st.className='ggskin ggskin_textdiv';
		this._button_3st.ggTextDiv=this._button_3st__text;
		this._button_3st.ggId="Button_3St";
		this._button_3st.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_3st.ggVisible=true;
		this._button_3st.className='ggskin ggskin_text';
		this._button_3st.ggType='text';
		hs ='position:absolute;';
		hs+='left: -132px;';
		hs+='top:  -110px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._button_3st.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+='background: #000000;';
		hs+='border: 1px solid #ffffff;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._button_3st__text.setAttribute('style',hs);
		this._button_3st.ggTextDiv.innerHTML="<p style=\"font-size:18px\">3. Stock<\/p>";
		this._button_3st.appendChild(this._button_3st__text);
		this._button_3st.onclick=function () {
			me.player.openNext("","");
		}
		this._button_3st.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._button_3st.style[domTransition]='none';
			} else {
				me._button_3st.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_3st.ggParameter.sx=1.2;me._button_3st.ggParameter.sy=1.2;
			me._button_3st.style[domTransform]=parameterToTransform(me._button_3st.ggParameter);
		}
		this._button_3st.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._button_3st.style[domTransition]='none';
			} else {
				me._button_3st.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_3st.ggParameter.sx=1;me._button_3st.ggParameter.sy=1;
			me._button_3st.style[domTransform]=parameterToTransform(me._button_3st.ggParameter);
		}
		this._stockwerk_buttons.appendChild(this._button_3st);
		this._button_2st=document.createElement('div');
		this._button_2st__text=document.createElement('div');
		this._button_2st.className='ggskin ggskin_textdiv';
		this._button_2st.ggTextDiv=this._button_2st__text;
		this._button_2st.ggId="Button_2St";
		this._button_2st.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_2st.ggVisible=true;
		this._button_2st.className='ggskin ggskin_text';
		this._button_2st.ggType='text';
		hs ='position:absolute;';
		hs+='left: -132px;';
		hs+='top:  -40px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._button_2st.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+='background: #000000;';
		hs+='border: 1px solid #ffffff;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._button_2st__text.setAttribute('style',hs);
		this._button_2st.ggTextDiv.innerHTML="<p style=\"font-size:18px\">2. Stock<\/p>";
		this._button_2st.appendChild(this._button_2st__text);
		this._button_2st.onclick=function () {
			me.player.openNext("Gang A2_06_out.xml","");
			me._map_1.style[domTransition]='none';
			me._map_1.style.opacity='0';
			me._map_1.style.visibility='hidden';
			me._map_2.style[domTransition]='none';
			me._map_2.style.opacity='1';
			me._map_2.style.visibility=me._map_2.ggVisible?'inherit':'hidden';
			me._text_1.ggText="<p style=\"font-size:30px\">2. Stock<\/p>";
			me._text_1.ggTextDiv.innerHTML=me._text_1.ggText;
			if (me._text_1.ggUpdateText) {
				me._text_1.ggUpdateText=function() {
					var hs="<p style=\"font-size:30px\">2. Stock<\/p>";
					if (hs!=me._text_1.ggText) {
						me._text_1.ggText=hs;
						me._text_1.ggTextDiv.innerHTML=hs;
					}
				}
			}
		}
		this._button_2st.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._button_2st.style[domTransition]='none';
			} else {
				me._button_2st.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_2st.ggParameter.sx=1.2;me._button_2st.ggParameter.sy=1.2;
			me._button_2st.style[domTransform]=parameterToTransform(me._button_2st.ggParameter);
		}
		this._button_2st.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._button_2st.style[domTransition]='none';
			} else {
				me._button_2st.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_2st.ggParameter.sx=1;me._button_2st.ggParameter.sy=1;
			me._button_2st.style[domTransform]=parameterToTransform(me._button_2st.ggParameter);
		}
		this._stockwerk_buttons.appendChild(this._button_2st);
		this._button_1st=document.createElement('div');
		this._button_1st__text=document.createElement('div');
		this._button_1st.className='ggskin ggskin_textdiv';
		this._button_1st.ggTextDiv=this._button_1st__text;
		this._button_1st.ggId="Button_1St";
		this._button_1st.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_1st.ggVisible=true;
		this._button_1st.className='ggskin ggskin_text';
		this._button_1st.ggType='text';
		hs ='position:absolute;';
		hs+='left: -132px;';
		hs+='top:  30px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._button_1st.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+='background: #000000;';
		hs+='border: 1px solid #ffffff;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._button_1st__text.setAttribute('style',hs);
		this._button_1st.ggTextDiv.innerHTML="<p style=\"font-size:18px\">1. Stock<\/p>";
		this._button_1st.appendChild(this._button_1st__text);
		this._button_1st.onclick=function () {
			me.player.openNext("Gang B1_24_out.xml","");
			me._map_1.style[domTransition]='none';
			me._map_1.style.opacity='1';
			me._map_1.style.visibility=me._map_1.ggVisible?'inherit':'hidden';
			me._map_2.style[domTransition]='none';
			me._map_2.style.opacity='0';
			me._map_2.style.visibility='hidden';
			me._text_1.ggText="<p style=\"font-size:30px\">1. Stock<\/p>";
			me._text_1.ggTextDiv.innerHTML=me._text_1.ggText;
			if (me._text_1.ggUpdateText) {
				me._text_1.ggUpdateText=function() {
					var hs="<p style=\"font-size:30px\">1. Stock<\/p>";
					if (hs!=me._text_1.ggText) {
						me._text_1.ggText=hs;
						me._text_1.ggTextDiv.innerHTML=hs;
					}
				}
			}
		}
		this._button_1st.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._button_1st.style[domTransition]='none';
			} else {
				me._button_1st.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_1st.ggParameter.sx=1.2;me._button_1st.ggParameter.sy=1.2;
			me._button_1st.style[domTransform]=parameterToTransform(me._button_1st.ggParameter);
		}
		this._button_1st.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._button_1st.style[domTransition]='none';
			} else {
				me._button_1st.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_1st.ggParameter.sx=1;me._button_1st.ggParameter.sy=1;
			me._button_1st.style[domTransform]=parameterToTransform(me._button_1st.ggParameter);
		}
		this._stockwerk_buttons.appendChild(this._button_1st);
		this._button_erd=document.createElement('div');
		this._button_erd__text=document.createElement('div');
		this._button_erd.className='ggskin ggskin_textdiv';
		this._button_erd.ggTextDiv=this._button_erd__text;
		this._button_erd.ggId="Button_Erd";
		this._button_erd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_erd.ggVisible=true;
		this._button_erd.className='ggskin ggskin_text';
		this._button_erd.ggType='text';
		hs ='position:absolute;';
		hs+='left: -132px;';
		hs+='top:  100px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._button_erd.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+='background: #000000;';
		hs+='border: 1px solid #ffffff;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._button_erd__text.setAttribute('style',hs);
		this._button_erd.ggTextDiv.innerHTML="<p style=\"font-size:18px\">Erdgeschoss<\/p>";
		this._button_erd.appendChild(this._button_erd__text);
		this._button_erd.onclick=function () {
			me.player.openNext("","");
		}
		this._button_erd.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._button_erd.style[domTransition]='none';
			} else {
				me._button_erd.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_erd.ggParameter.sx=1.2;me._button_erd.ggParameter.sy=1.2;
			me._button_erd.style[domTransform]=parameterToTransform(me._button_erd.ggParameter);
		}
		this._button_erd.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._button_erd.style[domTransition]='none';
			} else {
				me._button_erd.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_erd.ggParameter.sx=1;me._button_erd.ggParameter.sy=1;
			me._button_erd.style[domTransform]=parameterToTransform(me._button_erd.ggParameter);
		}
		this._stockwerk_buttons.appendChild(this._button_erd);
		this._button_unter=document.createElement('div');
		this._button_unter__text=document.createElement('div');
		this._button_unter.className='ggskin ggskin_textdiv';
		this._button_unter.ggTextDiv=this._button_unter__text;
		this._button_unter.ggId="Button_Unter";
		this._button_unter.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_unter.ggVisible=true;
		this._button_unter.className='ggskin ggskin_text';
		this._button_unter.ggType='text';
		hs ='position:absolute;';
		hs+='left: -132px;';
		hs+='top:  170px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._button_unter.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+='background: #000000;';
		hs+='border: 1px solid #ffffff;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._button_unter__text.setAttribute('style',hs);
		this._button_unter.ggTextDiv.innerHTML="<p style=\"font-size:18px\">Untergeschoss<br\/><\/p>";
		this._button_unter.appendChild(this._button_unter__text);
		this._button_unter.onclick=function () {
			me.player.openNext("","");
		}
		this._button_unter.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._button_unter.style[domTransition]='none';
			} else {
				me._button_unter.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_unter.ggParameter.sx=1.2;me._button_unter.ggParameter.sy=1.2;
			me._button_unter.style[domTransform]=parameterToTransform(me._button_unter.ggParameter);
		}
		this._button_unter.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._button_unter.style[domTransition]='none';
			} else {
				me._button_unter.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_unter.ggParameter.sx=1;me._button_unter.ggParameter.sy=1;
			me._button_unter.style[domTransform]=parameterToTransform(me._button_unter.ggParameter);
		}
		this._stockwerk_buttons.appendChild(this._button_unter);
		this._mapholder.appendChild(this._stockwerk_buttons);
		this._stockwerk_wechsel=document.createElement('div');
		this._stockwerk_wechsel.ggId="Stockwerk_Wechsel";
		this._stockwerk_wechsel.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stockwerk_wechsel.ggVisible=true;
		this._stockwerk_wechsel.className='ggskin ggskin_container';
		this._stockwerk_wechsel.ggType='container';
		hs ='position:absolute;';
		hs+='left: 851px;';
		hs+='top:  98px;';
		hs+='width: 55px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._stockwerk_wechsel.setAttribute('style',hs);
		this._up=document.createElement('div');
		this._up.ggId="UP";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_container';
		this._up.ggType='container';
		hs ='position:absolute;';
		hs+='left: 99px;';
		hs+='top:  47px;';
		hs+='width: 339px;';
		hs+='height: 253px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._up.setAttribute('style',hs);
		this._up_3=document.createElement('div');
		this._up_3.ggId="UP_3";
		this._up_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up_3.ggVisible=false;
		this._up_3.className='ggskin ggskin_image';
		this._up_3.ggType='image';
		hs ='position:absolute;';
		hs+='left: 154px;';
		hs+='top:  -60px;';
		hs+='width: 128px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._up_3.setAttribute('style',hs);
		this._up_3__img=document.createElement('img');
		this._up_3__img.className='ggskin ggskin_image';
		this._up_3__img.setAttribute('src',basePath + 'images/up_3.png');
		this._up_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._up_3__img.className='ggskin ggskin_image';
		this._up_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._up_3__img);
		this._up_3.appendChild(this._up_3__img);
		this._up_3.onclick=function () {
			me.player.openNext("3_06_out.xml","");
			flag=(me._up_3.style.visibility=='hidden');
			me._up_3.style[domTransition]='none';
			me._up_3.style.visibility=flag?'inherit':'hidden';
			me._up_3.ggVisible=flag;
			flag=(me._do_2.style.visibility=='hidden');
			me._do_2.style[domTransition]='none';
			me._do_2.style.visibility=flag?'inherit':'hidden';
			me._do_2.ggVisible=flag;
			me._stockwerk_wechsel_text.ggText="<p style=\"font-size:40px;color:white\"><b>3. Stock<\/b><\/p>";
			me._stockwerk_wechsel_text.ggTextDiv.innerHTML=me._stockwerk_wechsel_text.ggText;
			if (me._stockwerk_wechsel_text.ggUpdateText) {
				me._stockwerk_wechsel_text.ggUpdateText=function() {
					var hs="<p style=\"font-size:40px;color:white\"><b>3. Stock<\/b><\/p>";
					if (hs!=me._stockwerk_wechsel_text.ggText) {
						me._stockwerk_wechsel_text.ggText=hs;
						me._stockwerk_wechsel_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			flag=(me._do_1.style.visibility=='hidden');
			me._do_1.style[domTransition]='none';
			me._do_1.style.visibility=flag?'inherit':'hidden';
			me._do_1.ggVisible=flag;
			me._map_3.style[domTransition]='none';
			me._map_3.style.opacity='1';
			me._map_3.style.visibility=me._map_3.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._map_2.style[domTransition]='none';
			} else {
				me._map_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_2.style.opacity='0';
			me._map_2.style.visibility='hidden';
		}
		this._up_3.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._up_3.style[domTransition]='none';
			} else {
				me._up_3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._up_3.ggParameter.sx=1.2;me._up_3.ggParameter.sy=1.2;
			me._up_3.style[domTransform]=parameterToTransform(me._up_3.ggParameter);
		}
		this._up_3.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._up_3.style[domTransition]='none';
			} else {
				me._up_3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._up_3.ggParameter.sx=1;me._up_3.ggParameter.sy=1;
			me._up_3.style[domTransform]=parameterToTransform(me._up_3.ggParameter);
		}
		this._up.appendChild(this._up_3);
		this._up_2=document.createElement('div');
		this._up_2.ggId="UP_2";
		this._up_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up_2.ggVisible=false;
		this._up_2.className='ggskin ggskin_image';
		this._up_2.ggType='image';
		hs ='position:absolute;';
		hs+='left: 154px;';
		hs+='top:  -60px;';
		hs+='width: 128px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._up_2.setAttribute('style',hs);
		this._up_2__img=document.createElement('img');
		this._up_2__img.className='ggskin ggskin_image';
		this._up_2__img.setAttribute('src',basePath + 'images/up_2.png');
		this._up_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._up_2__img.className='ggskin ggskin_image';
		this._up_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._up_2__img);
		this._up_2.appendChild(this._up_2__img);
		this._up_2.onclick=function () {
			me.player.openNext("Gang 2_06_out.xml","");
			flag=(me._up_2.style.visibility=='hidden');
			me._up_2.style[domTransition]='none';
			me._up_2.style.visibility=flag?'inherit':'hidden';
			me._up_2.ggVisible=flag;
			flag=(me._do_1.style.visibility=='hidden');
			me._do_1.style[domTransition]='none';
			me._do_1.style.visibility=flag?'inherit':'hidden';
			me._do_1.ggVisible=flag;
			flag=(me._up_3.style.visibility=='hidden');
			me._up_3.style[domTransition]='none';
			me._up_3.style.visibility=flag?'inherit':'hidden';
			me._up_3.ggVisible=flag;
			me._stockwerk_wechsel_text.ggText="<p style=\"font-size:40px;color:white\"><b>2. Stock<\/b><\/p>";
			me._stockwerk_wechsel_text.ggTextDiv.innerHTML=me._stockwerk_wechsel_text.ggText;
			if (me._stockwerk_wechsel_text.ggUpdateText) {
				me._stockwerk_wechsel_text.ggUpdateText=function() {
					var hs="<p style=\"font-size:40px;color:white\"><b>2. Stock<\/b><\/p>";
					if (hs!=me._stockwerk_wechsel_text.ggText) {
						me._stockwerk_wechsel_text.ggText=hs;
						me._stockwerk_wechsel_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			flag=(me._do_eg.style.visibility=='hidden');
			me._do_eg.style[domTransition]='none';
			me._do_eg.style.visibility=flag?'inherit':'hidden';
			me._do_eg.ggVisible=flag;
			if (me.player.transitionsDisabled) {
				me._map_2.style[domTransition]='none';
			} else {
				me._map_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_2.style.opacity='1';
			me._map_2.style.visibility=me._map_2.ggVisible?'inherit':'hidden';
			me._map_1.style[domTransition]='none';
			me._map_1.style.opacity='0';
			me._map_1.style.visibility='hidden';
		}
		this._up_2.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._up_2.style[domTransition]='none';
			} else {
				me._up_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._up_2.ggParameter.sx=1.2;me._up_2.ggParameter.sy=1.2;
			me._up_2.style[domTransform]=parameterToTransform(me._up_2.ggParameter);
		}
		this._up_2.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._up_2.style[domTransition]='none';
			} else {
				me._up_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._up_2.ggParameter.sx=1;me._up_2.ggParameter.sy=1;
			me._up_2.style[domTransform]=parameterToTransform(me._up_2.ggParameter);
		}
		this._up.appendChild(this._up_2);
		this._up_1=document.createElement('div');
		this._up_1.ggId="UP_1";
		this._up_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up_1.ggVisible=true;
		this._up_1.className='ggskin ggskin_image';
		this._up_1.ggType='image';
		hs ='position:absolute;';
		hs+='left: 154px;';
		hs+='top:  -60px;';
		hs+='width: 128px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up_1.setAttribute('style',hs);
		this._up_1__img=document.createElement('img');
		this._up_1__img.className='ggskin ggskin_image';
		this._up_1__img.setAttribute('src',basePath + 'images/up_1.png');
		this._up_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._up_1__img.className='ggskin ggskin_image';
		this._up_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._up_1__img);
		this._up_1.appendChild(this._up_1__img);
		this._up_1.onclick=function () {
			me.player.openNext("Bibliothek_out.xml","");
			flag=(me._up_1.style.visibility=='hidden');
			me._up_1.style[domTransition]='none';
			me._up_1.style.visibility=flag?'inherit':'hidden';
			me._up_1.ggVisible=flag;
			flag=(me._up_2.style.visibility=='hidden');
			me._up_2.style[domTransition]='none';
			me._up_2.style.visibility=flag?'inherit':'hidden';
			me._up_2.ggVisible=flag;
			flag=(me._do_eg.style.visibility=='hidden');
			me._do_eg.style[domTransition]='none';
			me._do_eg.style.visibility=flag?'inherit':'hidden';
			me._do_eg.ggVisible=flag;
			me._stockwerk_wechsel_text.ggText="<p style=\"font-size:40px;color:white\"><b>1. Stock<\/b><\/p>";
			me._stockwerk_wechsel_text.ggTextDiv.innerHTML=me._stockwerk_wechsel_text.ggText;
			if (me._stockwerk_wechsel_text.ggUpdateText) {
				me._stockwerk_wechsel_text.ggUpdateText=function() {
					var hs="<p style=\"font-size:40px;color:white\"><b>1. Stock<\/b><\/p>";
					if (hs!=me._stockwerk_wechsel_text.ggText) {
						me._stockwerk_wechsel_text.ggText=hs;
						me._stockwerk_wechsel_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			flag=(me._do_ug.style.visibility=='hidden');
			me._do_ug.style[domTransition]='none';
			me._do_ug.style.visibility=flag?'inherit':'hidden';
			me._do_ug.ggVisible=flag;
			if (me.player.transitionsDisabled) {
				me._map_1.style[domTransition]='none';
			} else {
				me._map_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_1.style.opacity='1';
			me._map_1.style.visibility=me._map_1.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._map_erdgeschoss.style[domTransition]='none';
			} else {
				me._map_erdgeschoss.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_erdgeschoss.style.opacity='0';
			me._map_erdgeschoss.style.visibility='hidden';
		}
		this._up_1.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._up_1.style[domTransition]='none';
			} else {
				me._up_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._up_1.ggParameter.sx=1.2;me._up_1.ggParameter.sy=1.2;
			me._up_1.style[domTransform]=parameterToTransform(me._up_1.ggParameter);
		}
		this._up_1.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._up_1.style[domTransition]='none';
			} else {
				me._up_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._up_1.ggParameter.sx=1;me._up_1.ggParameter.sy=1;
			me._up_1.style[domTransform]=parameterToTransform(me._up_1.ggParameter);
		}
		this._up.appendChild(this._up_1);
		this._up_eg=document.createElement('div');
		this._up_eg.ggId="UP_EG";
		this._up_eg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up_eg.ggVisible=false;
		this._up_eg.className='ggskin ggskin_image';
		this._up_eg.ggType='image';
		hs ='position:absolute;';
		hs+='left: 154px;';
		hs+='top:  -60px;';
		hs+='width: 128px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._up_eg.setAttribute('style',hs);
		this._up_eg__img=document.createElement('img');
		this._up_eg__img.className='ggskin ggskin_image';
		this._up_eg__img.setAttribute('src',basePath + 'images/up_eg.png');
		this._up_eg__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._up_eg__img.className='ggskin ggskin_image';
		this._up_eg__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._up_eg__img);
		this._up_eg.appendChild(this._up_eg__img);
		this._up_eg.onclick=function () {
			me.player.openNext("Aula_out.xml","");
			flag=(me._up_eg.style.visibility=='hidden');
			me._up_eg.style[domTransition]='none';
			me._up_eg.style.visibility=flag?'inherit':'hidden';
			me._up_eg.ggVisible=flag;
			flag=(me._do_ug.style.visibility=='hidden');
			me._do_ug.style[domTransition]='none';
			me._do_ug.style.visibility=flag?'inherit':'hidden';
			me._do_ug.ggVisible=flag;
			flag=(me._up_1.style.visibility=='hidden');
			me._up_1.style[domTransition]='none';
			me._up_1.style.visibility=flag?'inherit':'hidden';
			me._up_1.ggVisible=flag;
			me._stockwerk_wechsel_text.ggText="<p style=\"font-size:40px;color:white\"><b>Erdgeschoss<\/b><\/p>";
			me._stockwerk_wechsel_text.ggTextDiv.innerHTML=me._stockwerk_wechsel_text.ggText;
			if (me._stockwerk_wechsel_text.ggUpdateText) {
				me._stockwerk_wechsel_text.ggUpdateText=function() {
					var hs="<p style=\"font-size:40px;color:white\"><b>Erdgeschoss<\/b><\/p>";
					if (hs!=me._stockwerk_wechsel_text.ggText) {
						me._stockwerk_wechsel_text.ggText=hs;
						me._stockwerk_wechsel_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			if (me.player.transitionsDisabled) {
				me._map_erdgeschoss.style[domTransition]='none';
			} else {
				me._map_erdgeschoss.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_erdgeschoss.style.opacity='1';
			me._map_erdgeschoss.style.visibility=me._map_erdgeschoss.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._map_keller.style[domTransition]='none';
			} else {
				me._map_keller.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_keller.style.opacity='0';
			me._map_keller.style.visibility='hidden';
		}
		this._up_eg.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._up_eg.style[domTransition]='none';
			} else {
				me._up_eg.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._up_eg.ggParameter.sx=1.2;me._up_eg.ggParameter.sy=1.2;
			me._up_eg.style[domTransform]=parameterToTransform(me._up_eg.ggParameter);
		}
		this._up_eg.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._up_eg.style[domTransition]='none';
			} else {
				me._up_eg.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._up_eg.ggParameter.sx=1;me._up_eg.ggParameter.sy=1;
			me._up_eg.style[domTransform]=parameterToTransform(me._up_eg.ggParameter);
		}
		this._up.appendChild(this._up_eg);
		this._stockwerk_wechsel.appendChild(this._up);
		this._down=document.createElement('div');
		this._down.ggId="DOWN";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_container';
		this._down.ggType='container';
		hs ='position:absolute;';
		hs+='left: 103px;';
		hs+='top:  13px;';
		hs+='width: 339px;';
		hs+='height: 253px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._down.setAttribute('style',hs);
		this._do_ug=document.createElement('div');
		this._do_ug.ggId="DO_UG";
		this._do_ug.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._do_ug.ggVisible=true;
		this._do_ug.className='ggskin ggskin_image';
		this._do_ug.ggType='image';
		hs ='position:absolute;';
		hs+='left: 149px;';
		hs+='top:  141px;';
		hs+='width: 128px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._do_ug.setAttribute('style',hs);
		this._do_ug__img=document.createElement('img');
		this._do_ug__img.className='ggskin ggskin_image';
		this._do_ug__img.setAttribute('src',basePath + 'images/do_ug.png');
		this._do_ug__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._do_ug__img.className='ggskin ggskin_image';
		this._do_ug__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._do_ug__img);
		this._do_ug.appendChild(this._do_ug__img);
		this._do_ug.onclick=function () {
			me.player.openNext("- Untergeschoss -","");
			flag=(me._do_ug.style.visibility=='hidden');
			me._do_ug.style[domTransition]='none';
			me._do_ug.style.visibility=flag?'inherit':'hidden';
			me._do_ug.ggVisible=flag;
			flag=(me._up_1.style.visibility=='hidden');
			me._up_1.style[domTransition]='none';
			me._up_1.style.visibility=flag?'inherit':'hidden';
			me._up_1.ggVisible=flag;
			flag=(me._up_eg.style.visibility=='hidden');
			me._up_eg.style[domTransition]='none';
			me._up_eg.style.visibility=flag?'inherit':'hidden';
			me._up_eg.ggVisible=flag;
			me._stockwerk_wechsel_text.ggText="<p style=\"font-size:40px;color:white\"><b>Untergeschoss<\/b><\/p>";
			me._stockwerk_wechsel_text.ggTextDiv.innerHTML=me._stockwerk_wechsel_text.ggText;
			if (me._stockwerk_wechsel_text.ggUpdateText) {
				me._stockwerk_wechsel_text.ggUpdateText=function() {
					var hs="<p style=\"font-size:40px;color:white\"><b>Untergeschoss<\/b><\/p>";
					if (hs!=me._stockwerk_wechsel_text.ggText) {
						me._stockwerk_wechsel_text.ggText=hs;
						me._stockwerk_wechsel_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			if (me.player.transitionsDisabled) {
				me._map_keller.style[domTransition]='none';
			} else {
				me._map_keller.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_keller.style.opacity='1';
			me._map_keller.style.visibility=me._map_keller.ggVisible?'inherit':'hidden';
			me._map_erdgeschoss.style[domTransition]='none';
			me._map_erdgeschoss.style.opacity='0';
			me._map_erdgeschoss.style.visibility='hidden';
		}
		this._do_ug.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._do_ug.style[domTransition]='none';
			} else {
				me._do_ug.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._do_ug.ggParameter.sx=1.2;me._do_ug.ggParameter.sy=1.2;
			me._do_ug.style[domTransform]=parameterToTransform(me._do_ug.ggParameter);
		}
		this._do_ug.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._do_ug.style[domTransition]='none';
			} else {
				me._do_ug.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._do_ug.ggParameter.sx=1;me._do_ug.ggParameter.sy=1;
			me._do_ug.style[domTransform]=parameterToTransform(me._do_ug.ggParameter);
		}
		this._down.appendChild(this._do_ug);
		this._do_eg=document.createElement('div');
		this._do_eg.ggId="DO_EG";
		this._do_eg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._do_eg.ggVisible=false;
		this._do_eg.className='ggskin ggskin_image';
		this._do_eg.ggType='image';
		hs ='position:absolute;';
		hs+='left: 148px;';
		hs+='top:  141px;';
		hs+='width: 128px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._do_eg.setAttribute('style',hs);
		this._do_eg__img=document.createElement('img');
		this._do_eg__img.className='ggskin ggskin_image';
		this._do_eg__img.setAttribute('src',basePath + 'images/do_eg.png');
		this._do_eg__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._do_eg__img.className='ggskin ggskin_image';
		this._do_eg__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._do_eg__img);
		this._do_eg.appendChild(this._do_eg__img);
		this._do_eg.onclick=function () {
			me.player.openNext("Aula_out.xml","");
			flag=(me._do_eg.style.visibility=='hidden');
			me._do_eg.style[domTransition]='none';
			me._do_eg.style.visibility=flag?'inherit':'hidden';
			me._do_eg.ggVisible=flag;
			flag=(me._up_1.style.visibility=='hidden');
			me._up_1.style[domTransition]='none';
			me._up_1.style.visibility=flag?'inherit':'hidden';
			me._up_1.ggVisible=flag;
			flag=(me._do_ug.style.visibility=='hidden');
			me._do_ug.style[domTransition]='none';
			me._do_ug.style.visibility=flag?'inherit':'hidden';
			me._do_ug.ggVisible=flag;
			me._stockwerk_wechsel_text.ggText="<p style=\"font-size:40px;color:white\"><b>Erdgeschoss<\/b><\/p>";
			me._stockwerk_wechsel_text.ggTextDiv.innerHTML=me._stockwerk_wechsel_text.ggText;
			if (me._stockwerk_wechsel_text.ggUpdateText) {
				me._stockwerk_wechsel_text.ggUpdateText=function() {
					var hs="<p style=\"font-size:40px;color:white\"><b>Erdgeschoss<\/b><\/p>";
					if (hs!=me._stockwerk_wechsel_text.ggText) {
						me._stockwerk_wechsel_text.ggText=hs;
						me._stockwerk_wechsel_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			flag=(me._up_2.style.visibility=='hidden');
			me._up_2.style[domTransition]='none';
			me._up_2.style.visibility=flag?'inherit':'hidden';
			me._up_2.ggVisible=flag;
			me._map_1.style[domTransition]='none';
			me._map_1.style.opacity='0';
			me._map_1.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._map_erdgeschoss.style[domTransition]='none';
			} else {
				me._map_erdgeschoss.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_erdgeschoss.style.opacity='1';
			me._map_erdgeschoss.style.visibility=me._map_erdgeschoss.ggVisible?'inherit':'hidden';
		}
		this._do_eg.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._do_eg.style[domTransition]='none';
			} else {
				me._do_eg.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._do_eg.ggParameter.sx=1.2;me._do_eg.ggParameter.sy=1.2;
			me._do_eg.style[domTransform]=parameterToTransform(me._do_eg.ggParameter);
		}
		this._do_eg.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._do_eg.style[domTransition]='none';
			} else {
				me._do_eg.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._do_eg.ggParameter.sx=1;me._do_eg.ggParameter.sy=1;
			me._do_eg.style[domTransform]=parameterToTransform(me._do_eg.ggParameter);
		}
		this._down.appendChild(this._do_eg);
		this._do_1=document.createElement('div');
		this._do_1.ggId="DO_1";
		this._do_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._do_1.ggVisible=false;
		this._do_1.className='ggskin ggskin_image';
		this._do_1.ggType='image';
		hs ='position:absolute;';
		hs+='left: 148px;';
		hs+='top:  141px;';
		hs+='width: 128px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._do_1.setAttribute('style',hs);
		this._do_1__img=document.createElement('img');
		this._do_1__img.className='ggskin ggskin_image';
		this._do_1__img.setAttribute('src',basePath + 'images/do_1.png');
		this._do_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._do_1__img.className='ggskin ggskin_image';
		this._do_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._do_1__img);
		this._do_1.appendChild(this._do_1__img);
		this._do_1.onclick=function () {
			me.player.openNext("Bibliothek_out.xml","");
			flag=(me._do_1.style.visibility=='hidden');
			me._do_1.style[domTransition]='none';
			me._do_1.style.visibility=flag?'inherit':'hidden';
			me._do_1.ggVisible=flag;
			flag=(me._do_eg.style.visibility=='hidden');
			me._do_eg.style[domTransition]='none';
			me._do_eg.style.visibility=flag?'inherit':'hidden';
			me._do_eg.ggVisible=flag;
			me._stockwerk_wechsel_text.ggText="<p style=\"font-size:40px;color:white\"><b>1. Stock<\/b><\/p>";
			me._stockwerk_wechsel_text.ggTextDiv.innerHTML=me._stockwerk_wechsel_text.ggText;
			if (me._stockwerk_wechsel_text.ggUpdateText) {
				me._stockwerk_wechsel_text.ggUpdateText=function() {
					var hs="<p style=\"font-size:40px;color:white\"><b>1. Stock<\/b><\/p>";
					if (hs!=me._stockwerk_wechsel_text.ggText) {
						me._stockwerk_wechsel_text.ggText=hs;
						me._stockwerk_wechsel_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			flag=(me._up_3.style.visibility=='hidden');
			me._up_3.style[domTransition]='none';
			me._up_3.style.visibility=flag?'inherit':'hidden';
			me._up_3.ggVisible=flag;
			flag=(me._up_2.style.visibility=='hidden');
			me._up_2.style[domTransition]='none';
			me._up_2.style.visibility=flag?'inherit':'hidden';
			me._up_2.ggVisible=flag;
			me._map_2.style[domTransition]='none';
			me._map_2.style.opacity='0';
			me._map_2.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._map_1.style[domTransition]='none';
			} else {
				me._map_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_1.style.opacity='1';
			me._map_1.style.visibility=me._map_1.ggVisible?'inherit':'hidden';
		}
		this._do_1.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._do_1.style[domTransition]='none';
			} else {
				me._do_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._do_1.ggParameter.sx=1.2;me._do_1.ggParameter.sy=1.2;
			me._do_1.style[domTransform]=parameterToTransform(me._do_1.ggParameter);
		}
		this._do_1.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._do_1.style[domTransition]='none';
			} else {
				me._do_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._do_1.ggParameter.sx=1;me._do_1.ggParameter.sy=1;
			me._do_1.style[domTransform]=parameterToTransform(me._do_1.ggParameter);
		}
		this._down.appendChild(this._do_1);
		this._do_2=document.createElement('div');
		this._do_2.ggId="DO_2";
		this._do_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._do_2.ggVisible=false;
		this._do_2.className='ggskin ggskin_image';
		this._do_2.ggType='image';
		hs ='position:absolute;';
		hs+='left: 148px;';
		hs+='top:  141px;';
		hs+='width: 128px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._do_2.setAttribute('style',hs);
		this._do_2__img=document.createElement('img');
		this._do_2__img.className='ggskin ggskin_image';
		this._do_2__img.setAttribute('src',basePath + 'images/do_2.png');
		this._do_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._do_2__img.className='ggskin ggskin_image';
		this._do_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._do_2__img);
		this._do_2.appendChild(this._do_2__img);
		this._do_2.onclick=function () {
			me.player.openNext("Gang 2_06_out.xml","");
			flag=(me._do_2.style.visibility=='hidden');
			me._do_2.style[domTransition]='none';
			me._do_2.style.visibility=flag?'inherit':'hidden';
			me._do_2.ggVisible=flag;
			flag=(me._do_1.style.visibility=='hidden');
			me._do_1.style[domTransition]='none';
			me._do_1.style.visibility=flag?'inherit':'hidden';
			me._do_1.ggVisible=flag;
			flag=(me._up_3.style.visibility=='hidden');
			me._up_3.style[domTransition]='none';
			me._up_3.style.visibility=flag?'inherit':'hidden';
			me._up_3.ggVisible=flag;
			me._stockwerk_wechsel_text.ggText="<p style=\"font-size:40px;color:white\"><b>2. Stock<\/b><\/p>";
			me._stockwerk_wechsel_text.ggTextDiv.innerHTML=me._stockwerk_wechsel_text.ggText;
			if (me._stockwerk_wechsel_text.ggUpdateText) {
				me._stockwerk_wechsel_text.ggUpdateText=function() {
					var hs="<p style=\"font-size:40px;color:white\"><b>2. Stock<\/b><\/p>";
					if (hs!=me._stockwerk_wechsel_text.ggText) {
						me._stockwerk_wechsel_text.ggText=hs;
						me._stockwerk_wechsel_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			if (me.player.transitionsDisabled) {
				me._map_2.style[domTransition]='none';
			} else {
				me._map_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_2.style.opacity='1';
			me._map_2.style.visibility=me._map_2.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._map_3.style[domTransition]='none';
			} else {
				me._map_3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_3.style.opacity='0';
			me._map_3.style.visibility='hidden';
		}
		this._do_2.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._do_2.style[domTransition]='none';
			} else {
				me._do_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._do_2.ggParameter.sx=1.2;me._do_2.ggParameter.sy=1.2;
			me._do_2.style[domTransform]=parameterToTransform(me._do_2.ggParameter);
		}
		this._do_2.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._do_2.style[domTransition]='none';
			} else {
				me._do_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._do_2.ggParameter.sx=1;me._do_2.ggParameter.sy=1;
			me._do_2.style[domTransform]=parameterToTransform(me._do_2.ggParameter);
		}
		this._down.appendChild(this._do_2);
		this._stockwerk_wechsel.appendChild(this._down);
		this._stockwerk_wechsel_text=document.createElement('div');
		this._stockwerk_wechsel_text__text=document.createElement('div');
		this._stockwerk_wechsel_text.className='ggskin ggskin_textdiv';
		this._stockwerk_wechsel_text.ggTextDiv=this._stockwerk_wechsel_text__text;
		this._stockwerk_wechsel_text.ggId="Stockwerk_Wechsel_Text";
		this._stockwerk_wechsel_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stockwerk_wechsel_text.ggVisible=true;
		this._stockwerk_wechsel_text.className='ggskin ggskin_text';
		this._stockwerk_wechsel_text.ggType='text';
		this._stockwerk_wechsel_text.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=Math.floor(0 + (296-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 167px;';
		hs+='top:  44px;';
		hs+='width: 296px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._stockwerk_wechsel_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #00ff40;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._stockwerk_wechsel_text__text.setAttribute('style',hs);
		this._stockwerk_wechsel_text.ggTextDiv.innerHTML="<p style=\"font-size:40px;color:white\"><b>Erdgeschoss<\/b><\/p>";
		this._stockwerk_wechsel_text.appendChild(this._stockwerk_wechsel_text__text);
		this._stockwerk_wechsel.appendChild(this._stockwerk_wechsel_text);
		this._mapholder.appendChild(this._stockwerk_wechsel);
		this._map_3=document.createElement('div');
		this._map_3.ggId="Map_3";
		this._map_3.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		this._map_3.ggVisible=true;
		this._map_3.className='ggskin ggskin_image';
		this._map_3.ggType='image';
		hs ='position:absolute;';
		hs+='left: -33px;';
		hs+='top:  -10px;';
		hs+='width: 1137px;';
		hs+='height: 432px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._map_3.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._map_3.setAttribute('style',hs);
		this._map_3__img=document.createElement('img');
		this._map_3__img.className='ggskin ggskin_image';
		this._map_3__img.setAttribute('src',basePath + 'images/map_3.png');
		this._map_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._map_3__img.className='ggskin ggskin_image';
		this._map_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._map_3__img);
		this._map_3.appendChild(this._map_3__img);
		this._gang_3_10=document.createElement('div');
		this._gang_3_10.ggId="Gang_3_10";
		this._gang_3_10.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._gang_3_10.ggVisible=true;
		this._gang_3_10.className='ggskin ggskin_image';
		this._gang_3_10.ggType='image';
		hs ='position:absolute;';
		hs+='left: 386px;';
		hs+='top:  197px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_3_10.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._gang_3_10.setAttribute('style',hs);
		this._gang_3_10__img=document.createElement('img');
		this._gang_3_10__img.className='ggskin ggskin_image';
		this._gang_3_10__img.setAttribute('src',basePath + 'images/gang_3_10.png');
		this._gang_3_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_3_10__img.className='ggskin ggskin_image';
		this._gang_3_10__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_3_10__img);
		this._gang_3_10.appendChild(this._gang_3_10__img);
		this._gang_3_10.onclick=function () {
			me.player.openNext("fehlt noch","");
			me._current_selection3.style[domTransition]='none';
			me._current_selection3.ggParameter.rx=386;me._current_selection3.ggParameter.ry=197;
			me._current_selection3.style[domTransform]=parameterToTransform(me._current_selection3.ggParameter);
		}
		this._gang_3_10.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_3_10.style[domTransition]='none';
			} else {
				me._gang_3_10.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_3_10.ggParameter.sx=0.45;me._gang_3_10.ggParameter.sy=0.45;
			me._gang_3_10.style[domTransform]=parameterToTransform(me._gang_3_10.ggParameter);
		}
		this._gang_3_10.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_3_10.style[domTransition]='none';
			} else {
				me._gang_3_10.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_3_10.ggParameter.sx=0.4;me._gang_3_10.ggParameter.sy=0.4;
			me._gang_3_10.style[domTransform]=parameterToTransform(me._gang_3_10.ggParameter);
		}
		this._map_3.appendChild(this._gang_3_10);
		this._gang_3_13=document.createElement('div');
		this._gang_3_13.ggId="Gang_3_13";
		this._gang_3_13.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._gang_3_13.ggVisible=true;
		this._gang_3_13.className='ggskin ggskin_image';
		this._gang_3_13.ggType='image';
		hs ='position:absolute;';
		hs+='left: 659px;';
		hs+='top:  211px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_3_13.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._gang_3_13.setAttribute('style',hs);
		this._gang_3_13__img=document.createElement('img');
		this._gang_3_13__img.className='ggskin ggskin_image';
		this._gang_3_13__img.setAttribute('src',basePath + 'images/gang_3_13.png');
		this._gang_3_13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_3_13__img.className='ggskin ggskin_image';
		this._gang_3_13__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_3_13__img);
		this._gang_3_13.appendChild(this._gang_3_13__img);
		this._gang_3_13.onclick=function () {
			me.player.openNext("fehlt noch","");
			me._current_selection3.style[domTransition]='none';
			me._current_selection3.ggParameter.rx=659;me._current_selection3.ggParameter.ry=211;
			me._current_selection3.style[domTransform]=parameterToTransform(me._current_selection3.ggParameter);
		}
		this._gang_3_13.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_3_13.style[domTransition]='none';
			} else {
				me._gang_3_13.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_3_13.ggParameter.sx=0.45;me._gang_3_13.ggParameter.sy=0.45;
			me._gang_3_13.style[domTransform]=parameterToTransform(me._gang_3_13.ggParameter);
		}
		this._gang_3_13.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_3_13.style[domTransition]='none';
			} else {
				me._gang_3_13.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_3_13.ggParameter.sx=0.4;me._gang_3_13.ggParameter.sy=0.4;
			me._gang_3_13.style[domTransform]=parameterToTransform(me._gang_3_13.ggParameter);
		}
		this._map_3.appendChild(this._gang_3_13);
		this._room_3_06=document.createElement('div');
		this._room_3_06.ggId="Room_3_06";
		this._room_3_06.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._room_3_06.ggVisible=true;
		this._room_3_06.className='ggskin ggskin_image';
		this._room_3_06.ggType='image';
		hs ='position:absolute;';
		hs+='left: -12px;';
		hs+='top:  207px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_3_06.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_3_06.setAttribute('style',hs);
		this._room_3_06__img=document.createElement('img');
		this._room_3_06__img.className='ggskin ggskin_image';
		this._room_3_06__img.setAttribute('src',basePath + 'images/room_3_06.png');
		this._room_3_06__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_3_06__img.className='ggskin ggskin_image';
		this._room_3_06__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_3_06__img);
		this._room_3_06.appendChild(this._room_3_06__img);
		this._room_3_06.onclick=function () {
			me.player.openNext("3_06_out.xml","");
			me._current_selection3.style[domTransition]='none';
			me._current_selection3.ggParameter.rx=-12;me._current_selection3.ggParameter.ry=207;
			me._current_selection3.style[domTransform]=parameterToTransform(me._current_selection3.ggParameter);
		}
		this._room_3_06.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_3_06.style[domTransition]='none';
			} else {
				me._room_3_06.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_3_06.ggParameter.sx=0.45;me._room_3_06.ggParameter.sy=0.45;
			me._room_3_06.style[domTransform]=parameterToTransform(me._room_3_06.ggParameter);
		}
		this._room_3_06.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_3_06.style[domTransition]='none';
			} else {
				me._room_3_06.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_3_06.ggParameter.sx=0.4;me._room_3_06.ggParameter.sy=0.4;
			me._room_3_06.style[domTransform]=parameterToTransform(me._room_3_06.ggParameter);
		}
		this._map_3.appendChild(this._room_3_06);
		this._room_3_09=document.createElement('div');
		this._room_3_09.ggId="Room_3_09";
		this._room_3_09.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._room_3_09.ggVisible=true;
		this._room_3_09.className='ggskin ggskin_image';
		this._room_3_09.ggType='image';
		hs ='position:absolute;';
		hs+='left: 253px;';
		hs+='top:  296px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_3_09.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_3_09.setAttribute('style',hs);
		this._room_3_09__img=document.createElement('img');
		this._room_3_09__img.className='ggskin ggskin_image';
		this._room_3_09__img.setAttribute('src',basePath + 'images/room_3_09.png');
		this._room_3_09__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_3_09__img.className='ggskin ggskin_image';
		this._room_3_09__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_3_09__img);
		this._room_3_09.appendChild(this._room_3_09__img);
		this._room_3_09.onclick=function () {
			me.player.openNext("fehlt noch","");
			me._current_selection3.style[domTransition]='none';
			me._current_selection3.ggParameter.rx=253;me._current_selection3.ggParameter.ry=296;
			me._current_selection3.style[domTransform]=parameterToTransform(me._current_selection3.ggParameter);
		}
		this._room_3_09.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_3_09.style[domTransition]='none';
			} else {
				me._room_3_09.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_3_09.ggParameter.sx=0.45;me._room_3_09.ggParameter.sy=0.45;
			me._room_3_09.style[domTransform]=parameterToTransform(me._room_3_09.ggParameter);
		}
		this._room_3_09.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_3_09.style[domTransition]='none';
			} else {
				me._room_3_09.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_3_09.ggParameter.sx=0.4;me._room_3_09.ggParameter.sy=0.4;
			me._room_3_09.style[domTransform]=parameterToTransform(me._room_3_09.ggParameter);
		}
		this._map_3.appendChild(this._room_3_09);
		this._room_3_16=document.createElement('div');
		this._room_3_16.ggId="Room_3_16";
		this._room_3_16.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._room_3_16.ggVisible=true;
		this._room_3_16.className='ggskin ggskin_image';
		this._room_3_16.ggType='image';
		hs ='position:absolute;';
		hs+='left: 1010px;';
		hs+='top:  204px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_3_16.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_3_16.setAttribute('style',hs);
		this._room_3_16__img=document.createElement('img');
		this._room_3_16__img.className='ggskin ggskin_image';
		this._room_3_16__img.setAttribute('src',basePath + 'images/room_3_16.png');
		this._room_3_16__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_3_16__img.className='ggskin ggskin_image';
		this._room_3_16__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_3_16__img);
		this._room_3_16.appendChild(this._room_3_16__img);
		this._room_3_16.onclick=function () {
			me.player.openNext("fehlt noch","");
			me._current_selection3.style[domTransition]='none';
			me._current_selection3.ggParameter.rx=1010;me._current_selection3.ggParameter.ry=204;
			me._current_selection3.style[domTransform]=parameterToTransform(me._current_selection3.ggParameter);
		}
		this._room_3_16.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_3_16.style[domTransition]='none';
			} else {
				me._room_3_16.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_3_16.ggParameter.sx=0.45;me._room_3_16.ggParameter.sy=0.45;
			me._room_3_16.style[domTransform]=parameterToTransform(me._room_3_16.ggParameter);
		}
		this._room_3_16.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_3_16.style[domTransition]='none';
			} else {
				me._room_3_16.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_3_16.ggParameter.sx=0.4;me._room_3_16.ggParameter.sy=0.4;
			me._room_3_16.style[domTransform]=parameterToTransform(me._room_3_16.ggParameter);
		}
		this._map_3.appendChild(this._room_3_16);
		this._gang_3_06=document.createElement('div');
		this._gang_3_06.ggId="Gang_3_06";
		this._gang_3_06.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._gang_3_06.ggVisible=true;
		this._gang_3_06.className='ggskin ggskin_image';
		this._gang_3_06.ggType='image';
		hs ='position:absolute;';
		hs+='left: 103px;';
		hs+='top:  203px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_3_06.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._gang_3_06.setAttribute('style',hs);
		this._gang_3_06__img=document.createElement('img');
		this._gang_3_06__img.className='ggskin ggskin_image';
		this._gang_3_06__img.setAttribute('src',basePath + 'images/gang_3_06.png');
		this._gang_3_06__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_3_06__img.className='ggskin ggskin_image';
		this._gang_3_06__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_3_06__img);
		this._gang_3_06.appendChild(this._gang_3_06__img);
		this._gang_3_06.onclick=function () {
			me.player.openNext("fehlt noch","");
			me._current_selection3.style[domTransition]='none';
			me._current_selection3.ggParameter.rx=103;me._current_selection3.ggParameter.ry=203;
			me._current_selection3.style[domTransform]=parameterToTransform(me._current_selection3.ggParameter);
		}
		this._gang_3_06.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_3_06.style[domTransition]='none';
			} else {
				me._gang_3_06.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_3_06.ggParameter.sx=0.45;me._gang_3_06.ggParameter.sy=0.45;
			me._gang_3_06.style[domTransform]=parameterToTransform(me._gang_3_06.ggParameter);
		}
		this._gang_3_06.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_3_06.style[domTransition]='none';
			} else {
				me._gang_3_06.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_3_06.ggParameter.sx=0.4;me._gang_3_06.ggParameter.sy=0.4;
			me._gang_3_06.style[domTransform]=parameterToTransform(me._gang_3_06.ggParameter);
		}
		this._map_3.appendChild(this._gang_3_06);
		this._current_selection3=document.createElement('div');
		this._current_selection3.ggId="Current_Selection3";
		this._current_selection3.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._current_selection3.ggVisible=true;
		this._current_selection3.className='ggskin ggskin_image';
		this._current_selection3.ggType='image';
		this._current_selection3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-535 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-230 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -535px;';
		hs+='top:  -230px;';
		hs+='width: 300px;';
		hs+='height: 400px;';
		hs+=cssPrefix + 'transform-origin: 0% 0%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._current_selection3.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._current_selection3.setAttribute('style',hs);
		this._current_selection3__img=document.createElement('img');
		this._current_selection3__img.className='ggskin ggskin_image';
		this._current_selection3__img.setAttribute('src',basePath + 'images/current_selection3.png');
		this._current_selection3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._current_selection3__img.className='ggskin ggskin_image';
		this._current_selection3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._current_selection3__img);
		this._current_selection3.appendChild(this._current_selection3__img);
		this._map_3.appendChild(this._current_selection3);
		this._mapholder.appendChild(this._map_3);
		this._map_2=document.createElement('div');
		this._map_2.ggId="Map_2";
		this._map_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_2.ggVisible=true;
		this._map_2.className='ggskin ggskin_image';
		this._map_2.ggType='image';
		hs ='position:absolute;';
		hs+='left: 57px;';
		hs+='top:  37px;';
		hs+='width: 924px;';
		hs+='height: 343px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._map_2.setAttribute('style',hs);
		this._map_2__img=document.createElement('img');
		this._map_2__img.className='ggskin ggskin_image';
		this._map_2__img.setAttribute('src',basePath + 'images/map_2.png');
		this._map_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._map_2__img.className='ggskin ggskin_image';
		this._map_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._map_2__img);
		this._map_2.appendChild(this._map_2__img);
		this._room_2_07=document.createElement('div');
		this._room_2_07.ggId="Room_2_07";
		this._room_2_07.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._room_2_07.ggVisible=true;
		this._room_2_07.className='ggskin ggskin_image';
		this._room_2_07.ggType='image';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  231px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_2_07.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_2_07.setAttribute('style',hs);
		this._room_2_07__img=document.createElement('img');
		this._room_2_07__img.className='ggskin ggskin_image';
		this._room_2_07__img.setAttribute('src',basePath + 'images/room_2_07.png');
		this._room_2_07__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_2_07__img.className='ggskin ggskin_image';
		this._room_2_07__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_2_07__img);
		this._room_2_07.appendChild(this._room_2_07__img);
		this._room_2_07.onclick=function () {
			me.player.openNext("2_07_out.xml","");
			me._current_selection2.style[domTransition]='none';
			me._current_selection2.ggParameter.rx=10;me._current_selection2.ggParameter.ry=231;
			me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
		}
		this._room_2_07.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_07.style[domTransition]='none';
			} else {
				me._room_2_07.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_07.ggParameter.sx=0.35;me._room_2_07.ggParameter.sy=0.35;
			me._room_2_07.style[domTransform]=parameterToTransform(me._room_2_07.ggParameter);
		}
		this._room_2_07.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_07.style[domTransition]='none';
			} else {
				me._room_2_07.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_07.ggParameter.sx=0.3;me._room_2_07.ggParameter.sy=0.3;
			me._room_2_07.style[domTransform]=parameterToTransform(me._room_2_07.ggParameter);
		}
		this._map_2.appendChild(this._room_2_07);
		this._room_2_14=document.createElement('div');
		this._room_2_14.ggId="Room_2_14";
		this._room_2_14.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._room_2_14.ggVisible=true;
		this._room_2_14.className='ggskin ggskin_image';
		this._room_2_14.ggType='image';
		hs ='position:absolute;';
		hs+='left: 798px;';
		hs+='top:  234px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_2_14.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_2_14.setAttribute('style',hs);
		this._room_2_14__img=document.createElement('img');
		this._room_2_14__img.className='ggskin ggskin_image';
		this._room_2_14__img.setAttribute('src',basePath + 'images/room_2_14.png');
		this._room_2_14__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_2_14__img.className='ggskin ggskin_image';
		this._room_2_14__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_2_14__img);
		this._room_2_14.appendChild(this._room_2_14__img);
		this._room_2_14.onclick=function () {
			me.player.openNext("2_14_out.xml","");
			me._current_selection2.style[domTransition]='none';
			me._current_selection2.ggParameter.rx=798;me._current_selection2.ggParameter.ry=234;
			me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
		}
		this._room_2_14.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_14.style[domTransition]='none';
			} else {
				me._room_2_14.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_14.ggParameter.sx=0.35;me._room_2_14.ggParameter.sy=0.35;
			me._room_2_14.style[domTransform]=parameterToTransform(me._room_2_14.ggParameter);
		}
		this._room_2_14.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_14.style[domTransition]='none';
			} else {
				me._room_2_14.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_14.ggParameter.sx=0.3;me._room_2_14.ggParameter.sy=0.3;
			me._room_2_14.style[domTransform]=parameterToTransform(me._room_2_14.ggParameter);
		}
		this._map_2.appendChild(this._room_2_14);
		this._room_2_13=document.createElement('div');
		this._room_2_13.ggId="Room_2_13";
		this._room_2_13.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._room_2_13.ggVisible=true;
		this._room_2_13.className='ggskin ggskin_image';
		this._room_2_13.ggType='image';
		hs ='position:absolute;';
		hs+='left: 641px;';
		hs+='top:  234px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_2_13.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_2_13.setAttribute('style',hs);
		this._room_2_13__img=document.createElement('img');
		this._room_2_13__img.className='ggskin ggskin_image';
		this._room_2_13__img.setAttribute('src',basePath + 'images/room_2_13.png');
		this._room_2_13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_2_13__img.className='ggskin ggskin_image';
		this._room_2_13__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_2_13__img);
		this._room_2_13.appendChild(this._room_2_13__img);
		this._room_2_13.onclick=function () {
			me.player.openNext("2_13_out.xml","");
			me._current_selection2.style[domTransition]='none';
			me._current_selection2.ggParameter.rx=641;me._current_selection2.ggParameter.ry=234;
			me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
		}
		this._room_2_13.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_13.style[domTransition]='none';
			} else {
				me._room_2_13.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_13.ggParameter.sx=0.35;me._room_2_13.ggParameter.sy=0.35;
			me._room_2_13.style[domTransform]=parameterToTransform(me._room_2_13.ggParameter);
		}
		this._room_2_13.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_13.style[domTransition]='none';
			} else {
				me._room_2_13.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_13.ggParameter.sx=0.3;me._room_2_13.ggParameter.sy=0.3;
			me._room_2_13.style[domTransform]=parameterToTransform(me._room_2_13.ggParameter);
		}
		this._map_2.appendChild(this._room_2_13);
		this._room_2_11=document.createElement('div');
		this._room_2_11.ggId="Room_2_11";
		this._room_2_11.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._room_2_11.ggVisible=true;
		this._room_2_11.className='ggskin ggskin_image';
		this._room_2_11.ggType='image';
		hs ='position:absolute;';
		hs+='left: 407px;';
		hs+='top:  231px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_2_11.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_2_11.setAttribute('style',hs);
		this._room_2_11__img=document.createElement('img');
		this._room_2_11__img.className='ggskin ggskin_image';
		this._room_2_11__img.setAttribute('src',basePath + 'images/room_2_11.png');
		this._room_2_11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_2_11__img.className='ggskin ggskin_image';
		this._room_2_11__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_2_11__img);
		this._room_2_11.appendChild(this._room_2_11__img);
		this._room_2_11.onclick=function () {
			me.player.openNext("2_11_out.xml","");
			me._current_selection2.style[domTransition]='none';
			me._current_selection2.ggParameter.rx=407;me._current_selection2.ggParameter.ry=231;
			me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
		}
		this._room_2_11.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_11.style[domTransition]='none';
			} else {
				me._room_2_11.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_11.ggParameter.sx=0.35;me._room_2_11.ggParameter.sy=0.35;
			me._room_2_11.style[domTransform]=parameterToTransform(me._room_2_11.ggParameter);
		}
		this._room_2_11.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_11.style[domTransition]='none';
			} else {
				me._room_2_11.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_11.ggParameter.sx=0.3;me._room_2_11.ggParameter.sy=0.3;
			me._room_2_11.style[domTransform]=parameterToTransform(me._room_2_11.ggParameter);
		}
		this._map_2.appendChild(this._room_2_11);
		this._room_2_08=document.createElement('div');
		this._room_2_08.ggId="Room_2_08";
		this._room_2_08.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._room_2_08.ggVisible=true;
		this._room_2_08.className='ggskin ggskin_image';
		this._room_2_08.ggType='image';
		hs ='position:absolute;';
		hs+='left: 120px;';
		hs+='top:  234px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_2_08.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_2_08.setAttribute('style',hs);
		this._room_2_08__img=document.createElement('img');
		this._room_2_08__img.className='ggskin ggskin_image';
		this._room_2_08__img.setAttribute('src',basePath + 'images/room_2_08.png');
		this._room_2_08__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_2_08__img.className='ggskin ggskin_image';
		this._room_2_08__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_2_08__img);
		this._room_2_08.appendChild(this._room_2_08__img);
		this._room_2_08.onclick=function () {
			me.player.openNext("2_08_out.xml","");
			me._current_selection2.style[domTransition]='none';
			me._current_selection2.ggParameter.rx=120;me._current_selection2.ggParameter.ry=234;
			me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
		}
		this._room_2_08.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_08.style[domTransition]='none';
			} else {
				me._room_2_08.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_08.ggParameter.sx=0.35;me._room_2_08.ggParameter.sy=0.35;
			me._room_2_08.style[domTransform]=parameterToTransform(me._room_2_08.ggParameter);
		}
		this._room_2_08.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_08.style[domTransition]='none';
			} else {
				me._room_2_08.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_08.ggParameter.sx=0.3;me._room_2_08.ggParameter.sy=0.3;
			me._room_2_08.style[domTransform]=parameterToTransform(me._room_2_08.ggParameter);
		}
		this._map_2.appendChild(this._room_2_08);
		this._gang_2_06=document.createElement('div');
		this._gang_2_06.ggId="Gang_2_06";
		this._gang_2_06.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._gang_2_06.ggVisible=true;
		this._gang_2_06.className='ggskin ggskin_image';
		this._gang_2_06.ggType='image';
		hs ='position:absolute;';
		hs+='left: 80px;';
		hs+='top:  155px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_2_06.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._gang_2_06.setAttribute('style',hs);
		this._gang_2_06__img=document.createElement('img');
		this._gang_2_06__img.className='ggskin ggskin_image';
		this._gang_2_06__img.setAttribute('src',basePath + 'images/gang_2_06.png');
		this._gang_2_06__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_2_06__img.className='ggskin ggskin_image';
		this._gang_2_06__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_2_06__img);
		this._gang_2_06.appendChild(this._gang_2_06__img);
		this._gang_2_06.onclick=function () {
			me.player.openNext("Gang 2_06_out.xml","");
			me._current_selection2.style[domTransition]='none';
			me._current_selection2.ggParameter.rx=80;me._current_selection2.ggParameter.ry=155;
			me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
		}
		this._gang_2_06.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_2_06.style[domTransition]='none';
			} else {
				me._gang_2_06.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_2_06.ggParameter.sx=0.35;me._gang_2_06.ggParameter.sy=0.35;
			me._gang_2_06.style[domTransform]=parameterToTransform(me._gang_2_06.ggParameter);
		}
		this._gang_2_06.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_2_06.style[domTransition]='none';
			} else {
				me._gang_2_06.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_2_06.ggParameter.sx=0.3;me._gang_2_06.ggParameter.sy=0.3;
			me._gang_2_06.style[domTransform]=parameterToTransform(me._gang_2_06.ggParameter);
		}
		this._map_2.appendChild(this._gang_2_06);
		this._gang_2_14=document.createElement('div');
		this._gang_2_14.ggId="Gang_2_14";
		this._gang_2_14.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._gang_2_14.ggVisible=true;
		this._gang_2_14.className='ggskin ggskin_image';
		this._gang_2_14.ggType='image';
		hs ='position:absolute;';
		hs+='left: 528px;';
		hs+='top:  168px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_2_14.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._gang_2_14.setAttribute('style',hs);
		this._gang_2_14__img=document.createElement('img');
		this._gang_2_14__img.className='ggskin ggskin_image';
		this._gang_2_14__img.setAttribute('src',basePath + 'images/gang_2_14.png');
		this._gang_2_14__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_2_14__img.className='ggskin ggskin_image';
		this._gang_2_14__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_2_14__img);
		this._gang_2_14.appendChild(this._gang_2_14__img);
		this._gang_2_14.onclick=function () {
			me.player.openNext("Gang 2_14_out.xml","");
			me._current_selection2.style[domTransition]='none';
			me._current_selection2.ggParameter.rx=528;me._current_selection2.ggParameter.ry=168;
			me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
		}
		this._gang_2_14.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_2_14.style[domTransition]='none';
			} else {
				me._gang_2_14.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_2_14.ggParameter.sx=0.35;me._gang_2_14.ggParameter.sy=0.35;
			me._gang_2_14.style[domTransform]=parameterToTransform(me._gang_2_14.ggParameter);
		}
		this._gang_2_14.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_2_14.style[domTransition]='none';
			} else {
				me._gang_2_14.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_2_14.ggParameter.sx=0.3;me._gang_2_14.ggParameter.sy=0.3;
			me._gang_2_14.style[domTransform]=parameterToTransform(me._gang_2_14.ggParameter);
		}
		this._map_2.appendChild(this._gang_2_14);
		this._current_selection2=document.createElement('div');
		this._current_selection2.ggId="Current_Selection2";
		this._current_selection2.ggParameter={ rx:0,ry:0,a:0,sx:0.15,sy:0.15 };
		this._current_selection2.ggVisible=true;
		this._current_selection2.className='ggskin ggskin_image';
		this._current_selection2.ggType='image';
		this._current_selection2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-549 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-334 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -549px;';
		hs+='top:  -334px;';
		hs+='width: 300px;';
		hs+='height: 400px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._current_selection2.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._current_selection2.setAttribute('style',hs);
		this._current_selection2__img=document.createElement('img');
		this._current_selection2__img.className='ggskin ggskin_image';
		this._current_selection2__img.setAttribute('src',basePath + 'images/current_selection2.png');
		this._current_selection2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._current_selection2__img.className='ggskin ggskin_image';
		this._current_selection2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._current_selection2__img);
		this._current_selection2.appendChild(this._current_selection2__img);
		this._map_2.appendChild(this._current_selection2);
		this._mapholder.appendChild(this._map_2);
		this._map_1=document.createElement('div');
		this._map_1.ggId="Map_1";
		this._map_1.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._map_1.ggVisible=true;
		this._map_1.className='ggskin ggskin_image';
		this._map_1.ggType='image';
		hs ='position:absolute;';
		hs+='left: 73px;';
		hs+='top:  4px;';
		hs+='width: 1019px;';
		hs+='height: 444px;';
		hs+=cssPrefix + 'transform-origin: 0% 0%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._map_1.ggParameter) + ';';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		this._map_1.setAttribute('style',hs);
		this._map_1__img=document.createElement('img');
		this._map_1__img.className='ggskin ggskin_image';
		this._map_1__img.setAttribute('src',basePath + 'images/map_1.png');
		this._map_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._map_1__img.className='ggskin ggskin_image';
		this._map_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._map_1__img);
		this._map_1.appendChild(this._map_1__img);
		this._gang_1_24=document.createElement('div');
		this._gang_1_24.ggId="Gang_1_24";
		this._gang_1_24.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._gang_1_24.ggVisible=true;
		this._gang_1_24.className='ggskin ggskin_image';
		this._gang_1_24.ggType='image';
		hs ='position:absolute;';
		hs+='left: 632px;';
		hs+='top:  259px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_1_24.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._gang_1_24.setAttribute('style',hs);
		this._gang_1_24__img=document.createElement('img');
		this._gang_1_24__img.className='ggskin ggskin_image';
		this._gang_1_24__img.setAttribute('src',basePath + 'images/gang_1_24.png');
		this._gang_1_24__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_1_24__img.className='ggskin ggskin_image';
		this._gang_1_24__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_1_24__img);
		this._gang_1_24.appendChild(this._gang_1_24__img);
		this._gang_1_24.onclick=function () {
			me.player.openNext("Gang 1_24_out.xml","");
			me._current_selection1.style[domTransition]='none';
			me._current_selection1.ggParameter.rx=632;me._current_selection1.ggParameter.ry=259;
			me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
		}
		this._gang_1_24.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_1_24.style[domTransition]='none';
			} else {
				me._gang_1_24.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_1_24.ggParameter.sx=0.35;me._gang_1_24.ggParameter.sy=0.35;
			me._gang_1_24.style[domTransform]=parameterToTransform(me._gang_1_24.ggParameter);
		}
		this._gang_1_24.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_1_24.style[domTransition]='none';
			} else {
				me._gang_1_24.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_1_24.ggParameter.sx=0.3;me._gang_1_24.ggParameter.sy=0.3;
			me._gang_1_24.style[domTransform]=parameterToTransform(me._gang_1_24.ggParameter);
		}
		this._map_1.appendChild(this._gang_1_24);
		this._bibliothek=document.createElement('div');
		this._bibliothek.ggId="Bibliothek";
		this._bibliothek.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._bibliothek.ggVisible=true;
		this._bibliothek.className='ggskin ggskin_image';
		this._bibliothek.ggType='image';
		hs ='position:absolute;';
		hs+='left: 254px;';
		hs+='top:  347px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._bibliothek.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._bibliothek.setAttribute('style',hs);
		this._bibliothek__img=document.createElement('img');
		this._bibliothek__img.className='ggskin ggskin_image';
		this._bibliothek__img.setAttribute('src',basePath + 'images/bibliothek.png');
		this._bibliothek__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._bibliothek__img.className='ggskin ggskin_image';
		this._bibliothek__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._bibliothek__img);
		this._bibliothek.appendChild(this._bibliothek__img);
		this._bibliothek.onclick=function () {
			me.player.openNext("Bibliothek_out.xml","");
			me._current_selection1.style[domTransition]='none';
			me._current_selection1.ggParameter.rx=254;me._current_selection1.ggParameter.ry=347;
			me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
		}
		this._bibliothek.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._bibliothek.style[domTransition]='none';
			} else {
				me._bibliothek.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._bibliothek.ggParameter.sx=0.35;me._bibliothek.ggParameter.sy=0.35;
			me._bibliothek.style[domTransform]=parameterToTransform(me._bibliothek.ggParameter);
		}
		this._bibliothek.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._bibliothek.style[domTransition]='none';
			} else {
				me._bibliothek.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._bibliothek.ggParameter.sx=0.3;me._bibliothek.ggParameter.sy=0.3;
			me._bibliothek.style[domTransform]=parameterToTransform(me._bibliothek.ggParameter);
		}
		this._map_1.appendChild(this._bibliothek);
		this._room_1_08=document.createElement('div');
		this._room_1_08.ggId="Room_1_08";
		this._room_1_08.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._room_1_08.ggVisible=true;
		this._room_1_08.className='ggskin ggskin_image';
		this._room_1_08.ggType='image';
		hs ='position:absolute;';
		hs+='left: 101px;';
		hs+='top:  312px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_1_08.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_1_08.setAttribute('style',hs);
		this._room_1_08__img=document.createElement('img');
		this._room_1_08__img.className='ggskin ggskin_image';
		this._room_1_08__img.setAttribute('src',basePath + 'images/room_1_08.png');
		this._room_1_08__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_1_08__img.className='ggskin ggskin_image';
		this._room_1_08__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_1_08__img);
		this._room_1_08.appendChild(this._room_1_08__img);
		this._room_1_08.onclick=function () {
			me.player.openNext("1_08_out.xml","");
			me._current_selection1.style[domTransition]='none';
			me._current_selection1.ggParameter.rx=101;me._current_selection1.ggParameter.ry=312;
			me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
		}
		this._room_1_08.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_1_08.style[domTransition]='none';
			} else {
				me._room_1_08.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_1_08.ggParameter.sx=0.35;me._room_1_08.ggParameter.sy=0.35;
			me._room_1_08.style[domTransform]=parameterToTransform(me._room_1_08.ggParameter);
		}
		this._room_1_08.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_1_08.style[domTransition]='none';
			} else {
				me._room_1_08.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_1_08.ggParameter.sx=0.3;me._room_1_08.ggParameter.sy=0.3;
			me._room_1_08.style[domTransform]=parameterToTransform(me._room_1_08.ggParameter);
		}
		this._map_1.appendChild(this._room_1_08);
		this._room_1_28=document.createElement('div');
		this._room_1_28.ggId="Room_1_28";
		this._room_1_28.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._room_1_28.ggVisible=true;
		this._room_1_28.className='ggskin ggskin_image';
		this._room_1_28.ggType='image';
		hs ='position:absolute;';
		hs+='left: 699px;';
		hs+='top:  325px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_1_28.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_1_28.setAttribute('style',hs);
		this._room_1_28__img=document.createElement('img');
		this._room_1_28__img.className='ggskin ggskin_image';
		this._room_1_28__img.setAttribute('src',basePath + 'images/room_1_28.png');
		this._room_1_28__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_1_28__img.className='ggskin ggskin_image';
		this._room_1_28__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_1_28__img);
		this._room_1_28.appendChild(this._room_1_28__img);
		this._room_1_28.onclick=function () {
			me.player.openNext("1_28_out.xml","");
			me._current_selection1.style[domTransition]='none';
			me._current_selection1.ggParameter.rx=699;me._current_selection1.ggParameter.ry=325;
			me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
		}
		this._room_1_28.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_1_28.style[domTransition]='none';
			} else {
				me._room_1_28.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_1_28.ggParameter.sx=0.35;me._room_1_28.ggParameter.sy=0.35;
			me._room_1_28.style[domTransform]=parameterToTransform(me._room_1_28.ggParameter);
		}
		this._room_1_28.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_1_28.style[domTransition]='none';
			} else {
				me._room_1_28.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_1_28.ggParameter.sx=0.3;me._room_1_28.ggParameter.sy=0.3;
			me._room_1_28.style[domTransform]=parameterToTransform(me._room_1_28.ggParameter);
		}
		this._map_1.appendChild(this._room_1_28);
		this._room_1_31=document.createElement('div');
		this._room_1_31.ggId="Room_1_31";
		this._room_1_31.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._room_1_31.ggVisible=true;
		this._room_1_31.className='ggskin ggskin_image';
		this._room_1_31.ggType='image';
		hs ='position:absolute;';
		hs+='left: 905px;';
		hs+='top:  248px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_1_31.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_1_31.setAttribute('style',hs);
		this._room_1_31__img=document.createElement('img');
		this._room_1_31__img.className='ggskin ggskin_image';
		this._room_1_31__img.setAttribute('src',basePath + 'images/room_1_31.png');
		this._room_1_31__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_1_31__img.className='ggskin ggskin_image';
		this._room_1_31__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_1_31__img);
		this._room_1_31.appendChild(this._room_1_31__img);
		this._room_1_31.onclick=function () {
			me.player.openNext("Gang 1_24_out.xml","");
			me._current_selection1.style[domTransition]='none';
			me._current_selection1.ggParameter.rx=905;me._current_selection1.ggParameter.ry=248;
			me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
		}
		this._room_1_31.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_1_31.style[domTransition]='none';
			} else {
				me._room_1_31.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_1_31.ggParameter.sx=0.35;me._room_1_31.ggParameter.sy=0.35;
			me._room_1_31.style[domTransform]=parameterToTransform(me._room_1_31.ggParameter);
		}
		this._room_1_31.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_1_31.style[domTransition]='none';
			} else {
				me._room_1_31.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_1_31.ggParameter.sx=0.3;me._room_1_31.ggParameter.sy=0.3;
			me._room_1_31.style[domTransform]=parameterToTransform(me._room_1_31.ggParameter);
		}
		this._map_1.appendChild(this._room_1_31);
		this._current_selection1=document.createElement('div');
		this._current_selection1.ggId="Current_Selection1";
		this._current_selection1.ggParameter={ rx:0,ry:0,a:0,sx:0.15,sy:0.15 };
		this._current_selection1.ggVisible=true;
		this._current_selection1.className='ggskin ggskin_image';
		this._current_selection1.ggType='image';
		this._current_selection1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-595 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-214 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -595px;';
		hs+='top:  -214px;';
		hs+='width: 300px;';
		hs+='height: 400px;';
		hs+=cssPrefix + 'transform-origin: 50% 0%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._current_selection1.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._current_selection1.setAttribute('style',hs);
		this._current_selection1__img=document.createElement('img');
		this._current_selection1__img.className='ggskin ggskin_image';
		this._current_selection1__img.setAttribute('src',basePath + 'images/current_selection1.png');
		this._current_selection1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._current_selection1__img.className='ggskin ggskin_image';
		this._current_selection1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._current_selection1__img);
		this._current_selection1.appendChild(this._current_selection1__img);
		this._map_1.appendChild(this._current_selection1);
		this._mapholder.appendChild(this._map_1);
		this._map_erdgeschoss=document.createElement('div');
		this._map_erdgeschoss.ggId="Map_Erdgeschoss";
		this._map_erdgeschoss.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6 };
		this._map_erdgeschoss.ggVisible=true;
		this._map_erdgeschoss.className='ggskin ggskin_image';
		this._map_erdgeschoss.ggType='image';
		hs ='position:absolute;';
		hs+='left: -75px;';
		hs+='top:  -133px;';
		hs+='width: 1074px;';
		hs+='height: 730px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._map_erdgeschoss.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._map_erdgeschoss.setAttribute('style',hs);
		this._map_erdgeschoss__img=document.createElement('img');
		this._map_erdgeschoss__img.className='ggskin ggskin_image';
		this._map_erdgeschoss__img.setAttribute('src',basePath + 'images/map_erdgeschoss.png');
		this._map_erdgeschoss__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._map_erdgeschoss__img.className='ggskin ggskin_image';
		this._map_erdgeschoss__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._map_erdgeschoss__img);
		this._map_erdgeschoss.appendChild(this._map_erdgeschoss__img);
		this._vor_turnhalle=document.createElement('div');
		this._vor_turnhalle.ggId="Vor_Turnhalle";
		this._vor_turnhalle.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._vor_turnhalle.ggVisible=true;
		this._vor_turnhalle.className='ggskin ggskin_image';
		this._vor_turnhalle.ggType='image';
		hs ='position:absolute;';
		hs+='left: 138px;';
		hs+='top:  -9px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._vor_turnhalle.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._vor_turnhalle.setAttribute('style',hs);
		this._vor_turnhalle__img=document.createElement('img');
		this._vor_turnhalle__img.className='ggskin ggskin_image';
		this._vor_turnhalle__img.setAttribute('src',basePath + 'images/vor_turnhalle.png');
		this._vor_turnhalle__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._vor_turnhalle__img.className='ggskin ggskin_image';
		this._vor_turnhalle__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._vor_turnhalle__img);
		this._vor_turnhalle.appendChild(this._vor_turnhalle__img);
		this._vor_turnhalle.onclick=function () {
			me.player.openNext("Vor_Turnhalle_out.xml","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=138;me._current_selectione.ggParameter.ry=-9;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=138;me._orientierunge.ggParameter.ry=-9;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._vor_turnhalle.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._vor_turnhalle.style[domTransition]='none';
			} else {
				me._vor_turnhalle.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._vor_turnhalle.ggParameter.sx=0.45;me._vor_turnhalle.ggParameter.sy=0.45;
			me._vor_turnhalle.style[domTransform]=parameterToTransform(me._vor_turnhalle.ggParameter);
		}
		this._vor_turnhalle.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._vor_turnhalle.style[domTransition]='none';
			} else {
				me._vor_turnhalle.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._vor_turnhalle.ggParameter.sx=0.4;me._vor_turnhalle.ggParameter.sy=0.4;
			me._vor_turnhalle.style[domTransform]=parameterToTransform(me._vor_turnhalle.ggParameter);
		}
		this._map_erdgeschoss.appendChild(this._vor_turnhalle);
		this._turnhalle=document.createElement('div');
		this._turnhalle.ggId="Turnhalle";
		this._turnhalle.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._turnhalle.ggVisible=true;
		this._turnhalle.className='ggskin ggskin_image';
		this._turnhalle.ggType='image';
		hs ='position:absolute;';
		hs+='left: 17px;';
		hs+='top:  -11px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._turnhalle.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._turnhalle.setAttribute('style',hs);
		this._turnhalle__img=document.createElement('img');
		this._turnhalle__img.className='ggskin ggskin_image';
		this._turnhalle__img.setAttribute('src',basePath + 'images/turnhalle.png');
		this._turnhalle__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._turnhalle__img.className='ggskin ggskin_image';
		this._turnhalle__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._turnhalle__img);
		this._turnhalle.appendChild(this._turnhalle__img);
		this._turnhalle.onclick=function () {
			me.player.openNext("Turnhalle_out.xml","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=17;me._current_selectione.ggParameter.ry=-11;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=17;me._orientierunge.ggParameter.ry=-11;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._turnhalle.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._turnhalle.style[domTransition]='none';
			} else {
				me._turnhalle.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._turnhalle.ggParameter.sx=0.45;me._turnhalle.ggParameter.sy=0.45;
			me._turnhalle.style[domTransform]=parameterToTransform(me._turnhalle.ggParameter);
		}
		this._turnhalle.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._turnhalle.style[domTransition]='none';
			} else {
				me._turnhalle.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._turnhalle.ggParameter.sx=0.4;me._turnhalle.ggParameter.sy=0.4;
			me._turnhalle.style[domTransform]=parameterToTransform(me._turnhalle.ggParameter);
		}
		this._map_erdgeschoss.appendChild(this._turnhalle);
		this._gang_0_24=document.createElement('div');
		this._gang_0_24.ggId="Gang_0_24";
		this._gang_0_24.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._gang_0_24.ggVisible=true;
		this._gang_0_24.className='ggskin ggskin_image';
		this._gang_0_24.ggType='image';
		hs ='position:absolute;';
		hs+='left: 659px;';
		hs+='top:  261px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_0_24.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._gang_0_24.setAttribute('style',hs);
		this._gang_0_24__img=document.createElement('img');
		this._gang_0_24__img.className='ggskin ggskin_image';
		this._gang_0_24__img.setAttribute('src',basePath + 'images/gang_0_24.png');
		this._gang_0_24__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_0_24__img.className='ggskin ggskin_image';
		this._gang_0_24__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_0_24__img);
		this._gang_0_24.appendChild(this._gang_0_24__img);
		this._gang_0_24.onclick=function () {
			me.player.openNext("Gang 0_24_out.xml","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=659;me._current_selectione.ggParameter.ry=261;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=659;me._orientierunge.ggParameter.ry=261;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._gang_0_24.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_0_24.style[domTransition]='none';
			} else {
				me._gang_0_24.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_0_24.ggParameter.sx=0.35;me._gang_0_24.ggParameter.sy=0.35;
			me._gang_0_24.style[domTransform]=parameterToTransform(me._gang_0_24.ggParameter);
		}
		this._gang_0_24.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_0_24.style[domTransition]='none';
			} else {
				me._gang_0_24.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_0_24.ggParameter.sx=0.3;me._gang_0_24.ggParameter.sy=0.3;
			me._gang_0_24.style[domTransform]=parameterToTransform(me._gang_0_24.ggParameter);
		}
		this._map_erdgeschoss.appendChild(this._gang_0_24);
		this._room_0_01=document.createElement('div');
		this._room_0_01.ggId="Room_0_01";
		this._room_0_01.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._room_0_01.ggVisible=true;
		this._room_0_01.className='ggskin ggskin_image';
		this._room_0_01.ggType='image';
		hs ='position:absolute;';
		hs+='left: 325px;';
		hs+='top:  156px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_0_01.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_0_01.setAttribute('style',hs);
		this._room_0_01__img=document.createElement('img');
		this._room_0_01__img.className='ggskin ggskin_image';
		this._room_0_01__img.setAttribute('src',basePath + 'images/room_0_01.png');
		this._room_0_01__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_0_01__img.className='ggskin ggskin_image';
		this._room_0_01__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_0_01__img);
		this._room_0_01.appendChild(this._room_0_01__img);
		this._room_0_01.onclick=function () {
			me.player.openNext("F0_01_out.xml (Fehlt noch)","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=325;me._current_selectione.ggParameter.ry=156;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=325;me._orientierunge.ggParameter.ry=156;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._room_0_01.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_0_01.style[domTransition]='none';
			} else {
				me._room_0_01.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_0_01.ggParameter.sx=0.45;me._room_0_01.ggParameter.sy=0.45;
			me._room_0_01.style[domTransform]=parameterToTransform(me._room_0_01.ggParameter);
		}
		this._room_0_01.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_0_01.style[domTransition]='none';
			} else {
				me._room_0_01.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_0_01.ggParameter.sx=0.4;me._room_0_01.ggParameter.sy=0.4;
			me._room_0_01.style[domTransform]=parameterToTransform(me._room_0_01.ggParameter);
		}
		this._map_erdgeschoss.appendChild(this._room_0_01);
		this._room_0_16=document.createElement('div');
		this._room_0_16.ggId="Room_0_16";
		this._room_0_16.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._room_0_16.ggVisible=true;
		this._room_0_16.className='ggskin ggskin_image';
		this._room_0_16.ggType='image';
		hs ='position:absolute;';
		hs+='left: 277px;';
		hs+='top:  476px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_0_16.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_0_16.setAttribute('style',hs);
		this._room_0_16__img=document.createElement('img');
		this._room_0_16__img.className='ggskin ggskin_image';
		this._room_0_16__img.setAttribute('src',basePath + 'images/room_0_16.png');
		this._room_0_16__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_0_16__img.className='ggskin ggskin_image';
		this._room_0_16__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_0_16__img);
		this._room_0_16.appendChild(this._room_0_16__img);
		this._room_0_16.onclick=function () {
			me.player.openNext("C0_16_out.xml (Fehlt noch)","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=277;me._current_selectione.ggParameter.ry=476;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=277;me._orientierunge.ggParameter.ry=476;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._room_0_16.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_0_16.style[domTransition]='none';
			} else {
				me._room_0_16.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_0_16.ggParameter.sx=0.45;me._room_0_16.ggParameter.sy=0.45;
			me._room_0_16.style[domTransform]=parameterToTransform(me._room_0_16.ggParameter);
		}
		this._room_0_16.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_0_16.style[domTransition]='none';
			} else {
				me._room_0_16.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_0_16.ggParameter.sx=0.4;me._room_0_16.ggParameter.sy=0.4;
			me._room_0_16.style[domTransform]=parameterToTransform(me._room_0_16.ggParameter);
		}
		this._map_erdgeschoss.appendChild(this._room_0_16);
		this._room_0_13=document.createElement('div');
		this._room_0_13.ggId="Room_0_13";
		this._room_0_13.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._room_0_13.ggVisible=true;
		this._room_0_13.className='ggskin ggskin_image';
		this._room_0_13.ggType='image';
		hs ='position:absolute;';
		hs+='left: 113px;';
		hs+='top:  485px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_0_13.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_0_13.setAttribute('style',hs);
		this._room_0_13__img=document.createElement('img');
		this._room_0_13__img.className='ggskin ggskin_image';
		this._room_0_13__img.setAttribute('src',basePath + 'images/room_0_13.png');
		this._room_0_13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_0_13__img.className='ggskin ggskin_image';
		this._room_0_13__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_0_13__img);
		this._room_0_13.appendChild(this._room_0_13__img);
		this._room_0_13.onclick=function () {
			me.player.openNext("C0_13_out.xml (Fehlt noch)","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=113;me._current_selectione.ggParameter.ry=485;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=113;me._orientierunge.ggParameter.ry=485;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._room_0_13.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_0_13.style[domTransition]='none';
			} else {
				me._room_0_13.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_0_13.ggParameter.sx=0.45;me._room_0_13.ggParameter.sy=0.45;
			me._room_0_13.style[domTransform]=parameterToTransform(me._room_0_13.ggParameter);
		}
		this._room_0_13.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_0_13.style[domTransition]='none';
			} else {
				me._room_0_13.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_0_13.ggParameter.sx=0.4;me._room_0_13.ggParameter.sy=0.4;
			me._room_0_13.style[domTransform]=parameterToTransform(me._room_0_13.ggParameter);
		}
		this._map_erdgeschoss.appendChild(this._room_0_13);
		this._room_0_24=document.createElement('div');
		this._room_0_24.ggId="Room_0_24";
		this._room_0_24.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._room_0_24.ggVisible=true;
		this._room_0_24.className='ggskin ggskin_image';
		this._room_0_24.ggType='image';
		hs ='position:absolute;';
		hs+='left: 729px;';
		hs+='top:  331px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_0_24.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_0_24.setAttribute('style',hs);
		this._room_0_24__img=document.createElement('img');
		this._room_0_24__img.className='ggskin ggskin_image';
		this._room_0_24__img.setAttribute('src',basePath + 'images/room_0_24.png');
		this._room_0_24__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_0_24__img.className='ggskin ggskin_image';
		this._room_0_24__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_0_24__img);
		this._room_0_24.appendChild(this._room_0_24__img);
		this._room_0_24.onclick=function () {
			me.player.openNext("A0_24_out.xml (Fehlt noch)","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=729;me._current_selectione.ggParameter.ry=331;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=729;me._orientierunge.ggParameter.ry=331;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._room_0_24.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_0_24.style[domTransition]='none';
			} else {
				me._room_0_24.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_0_24.ggParameter.sx=0.45;me._room_0_24.ggParameter.sy=0.45;
			me._room_0_24.style[domTransform]=parameterToTransform(me._room_0_24.ggParameter);
		}
		this._room_0_24.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_0_24.style[domTransition]='none';
			} else {
				me._room_0_24.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_0_24.ggParameter.sx=0.4;me._room_0_24.ggParameter.sy=0.4;
			me._room_0_24.style[domTransform]=parameterToTransform(me._room_0_24.ggParameter);
		}
		this._map_erdgeschoss.appendChild(this._room_0_24);
		this._room_0_23=document.createElement('div');
		this._room_0_23.ggId="Room_0_23";
		this._room_0_23.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._room_0_23.ggVisible=true;
		this._room_0_23.className='ggskin ggskin_image';
		this._room_0_23.ggType='image';
		hs ='position:absolute;';
		hs+='left: 628px;';
		hs+='top:  331px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_0_23.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_0_23.setAttribute('style',hs);
		this._room_0_23__img=document.createElement('img');
		this._room_0_23__img.className='ggskin ggskin_image';
		this._room_0_23__img.setAttribute('src',basePath + 'images/room_0_23.png');
		this._room_0_23__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_0_23__img.className='ggskin ggskin_image';
		this._room_0_23__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_0_23__img);
		this._room_0_23.appendChild(this._room_0_23__img);
		this._room_0_23.onclick=function () {
			me.player.openNext("A0_23_out.xml (Fehlt noch)","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=628;me._current_selectione.ggParameter.ry=331;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=628;me._orientierunge.ggParameter.ry=331;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._room_0_23.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_0_23.style[domTransition]='none';
			} else {
				me._room_0_23.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_0_23.ggParameter.sx=0.45;me._room_0_23.ggParameter.sy=0.45;
			me._room_0_23.style[domTransform]=parameterToTransform(me._room_0_23.ggParameter);
		}
		this._room_0_23.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_0_23.style[domTransition]='none';
			} else {
				me._room_0_23.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_0_23.ggParameter.sx=0.4;me._room_0_23.ggParameter.sy=0.4;
			me._room_0_23.style[domTransform]=parameterToTransform(me._room_0_23.ggParameter);
		}
		this._map_erdgeschoss.appendChild(this._room_0_23);
		this._ogs=document.createElement('div');
		this._ogs.ggId="OGS";
		this._ogs.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._ogs.ggVisible=true;
		this._ogs.className='ggskin ggskin_image';
		this._ogs.ggType='image';
		hs ='position:absolute;';
		hs+='left: 112px;';
		hs+='top:  259px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._ogs.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._ogs.setAttribute('style',hs);
		this._ogs__img=document.createElement('img');
		this._ogs__img.className='ggskin ggskin_image';
		this._ogs__img.setAttribute('src',basePath + 'images/ogs.png');
		this._ogs__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._ogs__img.className='ggskin ggskin_image';
		this._ogs__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._ogs__img);
		this._ogs.appendChild(this._ogs__img);
		this._ogs.onclick=function () {
			me.player.openNext("OGS_out.xml","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=112;me._current_selectione.ggParameter.ry=259;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=112;me._orientierunge.ggParameter.ry=259;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._ogs.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._ogs.style[domTransition]='none';
			} else {
				me._ogs.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._ogs.ggParameter.sx=0.45;me._ogs.ggParameter.sy=0.45;
			me._ogs.style[domTransform]=parameterToTransform(me._ogs.ggParameter);
		}
		this._ogs.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._ogs.style[domTransition]='none';
			} else {
				me._ogs.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._ogs.ggParameter.sx=0.4;me._ogs.ggParameter.sy=0.4;
			me._ogs.style[domTransform]=parameterToTransform(me._ogs.ggParameter);
		}
		this._map_erdgeschoss.appendChild(this._ogs);
		this._aula=document.createElement('div');
		this._aula.ggId="Aula";
		this._aula.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._aula.ggVisible=true;
		this._aula.className='ggskin ggskin_image';
		this._aula.ggType='image';
		hs ='position:absolute;';
		hs+='left: 330px;';
		hs+='top:  305px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._aula.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._aula.setAttribute('style',hs);
		this._aula__img=document.createElement('img');
		this._aula__img.className='ggskin ggskin_image';
		this._aula__img.setAttribute('src',basePath + 'images/aula.png');
		this._aula__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._aula__img.className='ggskin ggskin_image';
		this._aula__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._aula__img);
		this._aula.appendChild(this._aula__img);
		this._aula.onclick=function () {
			me.player.openNext("Aula_out.xml","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=330;me._current_selectione.ggParameter.ry=305;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=330;me._orientierunge.ggParameter.ry=305;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._aula.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._aula.style[domTransition]='none';
			} else {
				me._aula.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._aula.ggParameter.sx=0.45;me._aula.ggParameter.sy=0.45;
			me._aula.style[domTransform]=parameterToTransform(me._aula.ggParameter);
		}
		this._aula.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._aula.style[domTransition]='none';
			} else {
				me._aula.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._aula.ggParameter.sx=0.4;me._aula.ggParameter.sy=0.4;
			me._aula.style[domTransform]=parameterToTransform(me._aula.ggParameter);
		}
		this._map_erdgeschoss.appendChild(this._aula);
		this._current_selectione=document.createElement('div');
		this._current_selectione.ggId="Current_SelectionE";
		this._current_selectione.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._current_selectione.ggVisible=true;
		this._current_selectione.className='ggskin ggskin_image';
		this._current_selectione.ggType='image';
		this._current_selectione.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-624 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-539 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -624px;';
		hs+='top:  -539px;';
		hs+='width: 300px;';
		hs+='height: 400px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._current_selectione.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._current_selectione.setAttribute('style',hs);
		this._current_selectione__img=document.createElement('img');
		this._current_selectione__img.className='ggskin ggskin_image';
		this._current_selectione__img.setAttribute('src',basePath + 'images/current_selectione.png');
		this._current_selectione__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._current_selectione__img.className='ggskin ggskin_image';
		this._current_selectione__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._current_selectione__img);
		this._current_selectione.appendChild(this._current_selectione__img);
		this._map_erdgeschoss.appendChild(this._current_selectione);
		this._orientierunge=document.createElement('div');
		this._orientierunge.ggId="OrientierungE";
		this._orientierunge.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._orientierunge.ggVisible=true;
		this._orientierunge.className='ggskin ggskin_image';
		this._orientierunge.ggType='image';
		this._orientierunge.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-537 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-366 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -537px;';
		hs+='top:  -366px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._orientierunge.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._orientierunge.setAttribute('style',hs);
		this._orientierunge__img=document.createElement('img');
		this._orientierunge__img.className='ggskin ggskin_image';
		this._orientierunge__img.setAttribute('src',basePath + 'images/orientierunge.png');
		this._orientierunge__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._orientierunge__img.className='ggskin ggskin_image';
		this._orientierunge__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._orientierunge__img);
		this._orientierunge.appendChild(this._orientierunge__img);
		this._arrow=document.createElement('div');
		this._arrow.ggId="Arrow";
		this._arrow.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
		this._arrow.ggVisible=true;
		this._arrow.className='ggskin ggskin_image';
		this._arrow.ggType='image';
		hs ='position:absolute;';
		hs+='left: 3px;';
		hs+='top:  -131px;';
		hs+='width: 120px;';
		hs+='height: 120px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._arrow.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._arrow.setAttribute('style',hs);
		this._arrow__img=document.createElement('img');
		this._arrow__img.className='ggskin ggskin_image';
		this._arrow__img.setAttribute('src',basePath + 'images/arrow.png');
		this._arrow__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._arrow__img.className='ggskin ggskin_image';
		this._arrow__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._arrow__img);
		this._arrow.appendChild(this._arrow__img);
		this._orientierunge.appendChild(this._arrow);
		this._map_erdgeschoss.appendChild(this._orientierunge);
		this._mapholder.appendChild(this._map_erdgeschoss);
		this._map_keller=document.createElement('div');
		this._map_keller.ggId="Map_Keller";
		this._map_keller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_keller.ggVisible=true;
		this._map_keller.className='ggskin ggskin_image';
		this._map_keller.ggType='image';
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  29px;';
		hs+='width: 936px;';
		hs+='height: 352px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._map_keller.setAttribute('style',hs);
		this._map_keller__img=document.createElement('img');
		this._map_keller__img.className='ggskin ggskin_image';
		this._map_keller__img.setAttribute('src',basePath + 'images/map_keller.png');
		this._map_keller__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._map_keller__img.className='ggskin ggskin_image';
		this._map_keller__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._map_keller__img);
		this._map_keller.appendChild(this._map_keller__img);
		this._gang_u_27=document.createElement('div');
		this._gang_u_27.ggId="Gang_U_27";
		this._gang_u_27.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._gang_u_27.ggVisible=true;
		this._gang_u_27.className='ggskin ggskin_image';
		this._gang_u_27.ggType='image';
		hs ='position:absolute;';
		hs+='left: 739px;';
		hs+='top:  152px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_u_27.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._gang_u_27.setAttribute('style',hs);
		this._gang_u_27__img=document.createElement('img');
		this._gang_u_27__img.className='ggskin ggskin_image';
		this._gang_u_27__img.setAttribute('src',basePath + 'images/gang_u_27.png');
		this._gang_u_27__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_u_27__img.className='ggskin ggskin_image';
		this._gang_u_27__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_u_27__img);
		this._gang_u_27.appendChild(this._gang_u_27__img);
		this._gang_u_27.onclick=function () {
			me.player.openNext("Gang B1_24_out.xml","");
			me._current_selectionu.style[domTransition]='none';
			me._current_selectionu.ggParameter.rx=739;me._current_selectionu.ggParameter.ry=152;
			me._current_selectionu.style[domTransform]=parameterToTransform(me._current_selectionu.ggParameter);
		}
		this._gang_u_27.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_u_27.style[domTransition]='none';
			} else {
				me._gang_u_27.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_u_27.ggParameter.sx=0.35;me._gang_u_27.ggParameter.sy=0.35;
			me._gang_u_27.style[domTransform]=parameterToTransform(me._gang_u_27.ggParameter);
		}
		this._gang_u_27.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_u_27.style[domTransition]='none';
			} else {
				me._gang_u_27.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_u_27.ggParameter.sx=0.3;me._gang_u_27.ggParameter.sy=0.3;
			me._gang_u_27.style[domTransform]=parameterToTransform(me._gang_u_27.ggParameter);
		}
		this._map_keller.appendChild(this._gang_u_27);
		this._room_u_27=document.createElement('div');
		this._room_u_27.ggId="Room_U_27";
		this._room_u_27.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._room_u_27.ggVisible=true;
		this._room_u_27.className='ggskin ggskin_image';
		this._room_u_27.ggType='image';
		hs ='position:absolute;';
		hs+='left: 813px;';
		hs+='top:  132px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_u_27.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_u_27.setAttribute('style',hs);
		this._room_u_27__img=document.createElement('img');
		this._room_u_27__img.className='ggskin ggskin_image';
		this._room_u_27__img.setAttribute('src',basePath + 'images/room_u_27.png');
		this._room_u_27__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_u_27__img.className='ggskin ggskin_image';
		this._room_u_27__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_u_27__img);
		this._room_u_27.appendChild(this._room_u_27__img);
		this._room_u_27.onclick=function () {
			me.player.openNext("Gang B1_24_out.xml","");
			me._current_selectionu.style[domTransition]='none';
			me._current_selectionu.ggParameter.rx=813;me._current_selectionu.ggParameter.ry=132;
			me._current_selectionu.style[domTransform]=parameterToTransform(me._current_selectionu.ggParameter);
		}
		this._room_u_27.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_u_27.style[domTransition]='none';
			} else {
				me._room_u_27.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_u_27.ggParameter.sx=0.35;me._room_u_27.ggParameter.sy=0.35;
			me._room_u_27.style[domTransform]=parameterToTransform(me._room_u_27.ggParameter);
		}
		this._room_u_27.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_u_27.style[domTransition]='none';
			} else {
				me._room_u_27.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_u_27.ggParameter.sx=0.3;me._room_u_27.ggParameter.sy=0.3;
			me._room_u_27.style[domTransform]=parameterToTransform(me._room_u_27.ggParameter);
		}
		this._map_keller.appendChild(this._room_u_27);
		this._room_u_26=document.createElement('div');
		this._room_u_26.ggId="Room_U_26";
		this._room_u_26.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._room_u_26.ggVisible=true;
		this._room_u_26.className='ggskin ggskin_image';
		this._room_u_26.ggType='image';
		hs ='position:absolute;';
		hs+='left: 400px;';
		hs+='top:  209px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_u_26.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._room_u_26.setAttribute('style',hs);
		this._room_u_26__img=document.createElement('img');
		this._room_u_26__img.className='ggskin ggskin_image';
		this._room_u_26__img.setAttribute('src',basePath + 'images/room_u_26.png');
		this._room_u_26__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_u_26__img.className='ggskin ggskin_image';
		this._room_u_26__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_u_26__img);
		this._room_u_26.appendChild(this._room_u_26__img);
		this._room_u_26.onclick=function () {
			me.player.openNext("Gang B1_24_out.xml","");
			me._current_selectionu.style[domTransition]='none';
			me._current_selectionu.ggParameter.rx=400;me._current_selectionu.ggParameter.ry=209;
			me._current_selectionu.style[domTransform]=parameterToTransform(me._current_selectionu.ggParameter);
		}
		this._room_u_26.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_u_26.style[domTransition]='none';
			} else {
				me._room_u_26.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_u_26.ggParameter.sx=0.35;me._room_u_26.ggParameter.sy=0.35;
			me._room_u_26.style[domTransform]=parameterToTransform(me._room_u_26.ggParameter);
		}
		this._room_u_26.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_u_26.style[domTransition]='none';
			} else {
				me._room_u_26.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_u_26.ggParameter.sx=0.3;me._room_u_26.ggParameter.sy=0.3;
			me._room_u_26.style[domTransform]=parameterToTransform(me._room_u_26.ggParameter);
		}
		this._map_keller.appendChild(this._room_u_26);
		this._gang_u_21=document.createElement('div');
		this._gang_u_21.ggId="Gang_U_21";
		this._gang_u_21.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._gang_u_21.ggVisible=true;
		this._gang_u_21.className='ggskin ggskin_image';
		this._gang_u_21.ggType='image';
		hs ='position:absolute;';
		hs+='left: 315px;';
		hs+='top:  132px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_u_21.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._gang_u_21.setAttribute('style',hs);
		this._gang_u_21__img=document.createElement('img');
		this._gang_u_21__img.className='ggskin ggskin_image';
		this._gang_u_21__img.setAttribute('src',basePath + 'images/gang_u_21.png');
		this._gang_u_21__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_u_21__img.className='ggskin ggskin_image';
		this._gang_u_21__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_u_21__img);
		this._gang_u_21.appendChild(this._gang_u_21__img);
		this._gang_u_21.onclick=function () {
			me.player.openNext("Gang B1_24_out.xml","");
			me._current_selectionu.style[domTransition]='none';
			me._current_selectionu.ggParameter.rx=315;me._current_selectionu.ggParameter.ry=132;
			me._current_selectionu.style[domTransform]=parameterToTransform(me._current_selectionu.ggParameter);
		}
		this._gang_u_21.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_u_21.style[domTransition]='none';
			} else {
				me._gang_u_21.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_u_21.ggParameter.sx=0.35;me._gang_u_21.ggParameter.sy=0.35;
			me._gang_u_21.style[domTransform]=parameterToTransform(me._gang_u_21.ggParameter);
		}
		this._gang_u_21.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_u_21.style[domTransition]='none';
			} else {
				me._gang_u_21.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_u_21.ggParameter.sx=0.3;me._gang_u_21.ggParameter.sy=0.3;
			me._gang_u_21.style[domTransform]=parameterToTransform(me._gang_u_21.ggParameter);
		}
		this._map_keller.appendChild(this._gang_u_21);
		this._gang_u_09=document.createElement('div');
		this._gang_u_09.ggId="Gang_U_09";
		this._gang_u_09.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3 };
		this._gang_u_09.ggVisible=true;
		this._gang_u_09.className='ggskin ggskin_image';
		this._gang_u_09.ggType='image';
		hs ='position:absolute;';
		hs+='left: 56px;';
		hs+='top:  158px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_u_09.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._gang_u_09.setAttribute('style',hs);
		this._gang_u_09__img=document.createElement('img');
		this._gang_u_09__img.className='ggskin ggskin_image';
		this._gang_u_09__img.setAttribute('src',basePath + 'images/gang_u_09.png');
		this._gang_u_09__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_u_09__img.className='ggskin ggskin_image';
		this._gang_u_09__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_u_09__img);
		this._gang_u_09.appendChild(this._gang_u_09__img);
		this._gang_u_09.onclick=function () {
			me.player.openNext("Gang B1_24_out.xml","");
			me._current_selectionu.style[domTransition]='none';
			me._current_selectionu.ggParameter.rx=56;me._current_selectionu.ggParameter.ry=158;
			me._current_selectionu.style[domTransform]=parameterToTransform(me._current_selectionu.ggParameter);
		}
		this._gang_u_09.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_u_09.style[domTransition]='none';
			} else {
				me._gang_u_09.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_u_09.ggParameter.sx=0.35;me._gang_u_09.ggParameter.sy=0.35;
			me._gang_u_09.style[domTransform]=parameterToTransform(me._gang_u_09.ggParameter);
		}
		this._gang_u_09.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_u_09.style[domTransition]='none';
			} else {
				me._gang_u_09.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_u_09.ggParameter.sx=0.3;me._gang_u_09.ggParameter.sy=0.3;
			me._gang_u_09.style[domTransform]=parameterToTransform(me._gang_u_09.ggParameter);
		}
		this._map_keller.appendChild(this._gang_u_09);
		this._current_selectionu=document.createElement('div');
		this._current_selectionu.ggId="Current_SelectionU";
		this._current_selectionu.ggParameter={ rx:0,ry:0,a:0,sx:0.15,sy:0.15 };
		this._current_selectionu.ggVisible=true;
		this._current_selectionu.className='ggskin ggskin_image';
		this._current_selectionu.ggType='image';
		this._current_selectionu.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-555 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-169 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -555px;';
		hs+='top:  -169px;';
		hs+='width: 300px;';
		hs+='height: 400px;';
		hs+=cssPrefix + 'transform-origin: 50% 0%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._current_selectionu.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._current_selectionu.setAttribute('style',hs);
		this._current_selectionu__img=document.createElement('img');
		this._current_selectionu__img.className='ggskin ggskin_image';
		this._current_selectionu__img.setAttribute('src',basePath + 'images/current_selectionu.png');
		this._current_selectionu__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._current_selectionu__img.className='ggskin ggskin_image';
		this._current_selectionu__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._current_selectionu__img);
		this._current_selectionu.appendChild(this._current_selectionu__img);
		this._map_keller.appendChild(this._current_selectionu);
		this._mapholder.appendChild(this._map_keller);
		this._closemap=document.createElement('div');
		this._closemap.ggId="CloseMap";
		this._closemap.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._closemap.ggVisible=true;
		this._closemap.className='ggskin ggskin_image';
		this._closemap.ggType='image';
		hs ='position:absolute;';
		hs+='left: -27px;';
		hs+='top:  -23px;';
		hs+='width: 120px;';
		hs+='height: 120px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._closemap.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._closemap.setAttribute('style',hs);
		this._closemap__img=document.createElement('img');
		this._closemap__img.className='ggskin ggskin_image';
		this._closemap__img.setAttribute('src',basePath + 'images/closemap.png');
		this._closemap__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._closemap__img.className='ggskin ggskin_image';
		this._closemap__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._closemap__img);
		this._closemap.appendChild(this._closemap__img);
		this._closemap.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._mapholder.style[domTransition]='none';
			} else {
				me._mapholder.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapholder.style.opacity='0';
			me._mapholder.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._openmap.style[domTransition]='none';
			} else {
				me._openmap.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._openmap.style.opacity='1';
			me._openmap.style.visibility=me._openmap.ggVisible?'inherit':'hidden';
		}
		this._closemap.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._closemap.style[domTransition]='none';
			} else {
				me._closemap.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._closemap.ggParameter.sx=0.5;me._closemap.ggParameter.sy=0.5;
			me._closemap.style[domTransform]=parameterToTransform(me._closemap.ggParameter);
		}
		this._closemap.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._closemap.style[domTransition]='none';
			} else {
				me._closemap.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._closemap.ggParameter.sx=0.4;me._closemap.ggParameter.sy=0.4;
			me._closemap.style[domTransform]=parameterToTransform(me._closemap.ggParameter);
		}
		this._mapholder.appendChild(this._closemap);
		this._karte_vergroesern_button=document.createElement('div');
		this._karte_vergroesern_button__text=document.createElement('div');
		this._karte_vergroesern_button.className='ggskin ggskin_textdiv';
		this._karte_vergroesern_button.ggTextDiv=this._karte_vergroesern_button__text;
		this._karte_vergroesern_button.ggId="Karte_Vergroesern_Button";
		this._karte_vergroesern_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._karte_vergroesern_button.ggVisible=false;
		this._karte_vergroesern_button.className='ggskin ggskin_text';
		this._karte_vergroesern_button.ggType='text';
		this._karte_vergroesern_button.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=Math.floor(0 + (170-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  369px;';
		hs+='width: 152px;';
		hs+='height: 25px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.9;';
		hs+='visibility: hidden;';
		this._karte_vergroesern_button.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='border: 8px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._karte_vergroesern_button__text.setAttribute('style',hs);
		this._karte_vergroesern_button.ggTextDiv.innerHTML="<div style=\"font-size:15px;color:white\"><b>Karte vergr\xf6\xdfern<\/b><\/div>";
		this._karte_vergroesern_button.appendChild(this._karte_vergroesern_button__text);
		this._karte_vergroesern_button.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._mapholder.style[domTransition]='none';
			} else {
				me._mapholder.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapholder.ggParameter.sx=1;me._mapholder.ggParameter.sy=1;
			me._mapholder.style[domTransform]=parameterToTransform(me._mapholder.ggParameter);
			flag=(me._karte_vergroesern_button.style.visibility=='hidden');
			me._karte_vergroesern_button.style[domTransition]='none';
			me._karte_vergroesern_button.style.visibility=flag?'inherit':'hidden';
			me._karte_vergroesern_button.ggVisible=flag;
			flag=(me._karte_verkleinern_button.style.visibility=='hidden');
			me._karte_verkleinern_button.style[domTransition]='none';
			me._karte_verkleinern_button.style.visibility=flag?'inherit':'hidden';
			me._karte_verkleinern_button.ggVisible=flag;
		}
		this._karte_vergroesern_button.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._karte_vergroesern_button.style[domTransition]='none';
			} else {
				me._karte_vergroesern_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._karte_vergroesern_button.ggParameter.sx=1.1;me._karte_vergroesern_button.ggParameter.sy=1.1;
			me._karte_vergroesern_button.style[domTransform]=parameterToTransform(me._karte_vergroesern_button.ggParameter);
		}
		this._karte_vergroesern_button.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._karte_vergroesern_button.style[domTransition]='none';
			} else {
				me._karte_vergroesern_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._karte_vergroesern_button.ggParameter.sx=1;me._karte_vergroesern_button.ggParameter.sy=1;
			me._karte_vergroesern_button.style[domTransform]=parameterToTransform(me._karte_vergroesern_button.ggParameter);
		}
		this._mapholder.appendChild(this._karte_vergroesern_button);
		this._karte_verkleinern_button=document.createElement('div');
		this._karte_verkleinern_button__text=document.createElement('div');
		this._karte_verkleinern_button.className='ggskin ggskin_textdiv';
		this._karte_verkleinern_button.ggTextDiv=this._karte_verkleinern_button__text;
		this._karte_verkleinern_button.ggId="Karte_Verkleinern_Button";
		this._karte_verkleinern_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._karte_verkleinern_button.ggVisible=true;
		this._karte_verkleinern_button.className='ggskin ggskin_text';
		this._karte_verkleinern_button.ggType='text';
		this._karte_verkleinern_button.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=Math.floor(0 + (170-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  369px;';
		hs+='width: 152px;';
		hs+='height: 25px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._karte_verkleinern_button.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='border: 8px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._karte_verkleinern_button__text.setAttribute('style',hs);
		this._karte_verkleinern_button.ggTextDiv.innerHTML="<div style=\"font-size:15px;color:white\"><b>Karte verkleinern<\/b><\/div>";
		this._karte_verkleinern_button.appendChild(this._karte_verkleinern_button__text);
		this._karte_verkleinern_button.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._mapholder.style[domTransition]='none';
			} else {
				me._mapholder.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapholder.ggParameter.sx=0.5;me._mapholder.ggParameter.sy=0.5;
			me._mapholder.style[domTransform]=parameterToTransform(me._mapholder.ggParameter);
			flag=(me._karte_verkleinern_button.style.visibility=='hidden');
			me._karte_verkleinern_button.style[domTransition]='none';
			me._karte_verkleinern_button.style.visibility=flag?'inherit':'hidden';
			me._karte_verkleinern_button.ggVisible=flag;
			flag=(me._karte_vergroesern_button.style.visibility=='hidden');
			me._karte_vergroesern_button.style[domTransition]='none';
			me._karte_vergroesern_button.style.visibility=flag?'inherit':'hidden';
			me._karte_vergroesern_button.ggVisible=flag;
		}
		this._karte_verkleinern_button.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._karte_verkleinern_button.style[domTransition]='none';
			} else {
				me._karte_verkleinern_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._karte_verkleinern_button.ggParameter.sx=1.1;me._karte_verkleinern_button.ggParameter.sy=1.1;
			me._karte_verkleinern_button.style[domTransform]=parameterToTransform(me._karte_verkleinern_button.ggParameter);
		}
		this._karte_verkleinern_button.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._karte_verkleinern_button.style[domTransition]='none';
			} else {
				me._karte_verkleinern_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._karte_verkleinern_button.ggParameter.sx=1;me._karte_verkleinern_button.ggParameter.sy=1;
			me._karte_verkleinern_button.style[domTransform]=parameterToTransform(me._karte_verkleinern_button.ggParameter);
		}
		this._mapholder.appendChild(this._karte_verkleinern_button);
		this.divSkin.appendChild(this._mapholder);
		this._openmap=document.createElement('div');
		this._openmap.ggId="OpenMap";
		this._openmap.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._openmap.ggVisible=true;
		this._openmap.className='ggskin ggskin_image';
		this._openmap.ggType='image';
		hs ='position:absolute;';
		hs+='left: -27px;';
		hs+='top:  -23px;';
		hs+='width: 120px;';
		hs+='height: 120px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._openmap.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._openmap.setAttribute('style',hs);
		this._openmap__img=document.createElement('img');
		this._openmap__img.className='ggskin ggskin_image';
		this._openmap__img.setAttribute('src',basePath + 'images/openmap.png');
		this._openmap__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._openmap__img.className='ggskin ggskin_image';
		this._openmap__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._openmap__img);
		this._openmap.appendChild(this._openmap__img);
		this._openmap.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._openmap.style[domTransition]='none';
			} else {
				me._openmap.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._openmap.style.opacity='0';
			me._openmap.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._mapholder.style[domTransition]='none';
			} else {
				me._mapholder.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapholder.style.opacity='1';
			me._mapholder.style.visibility=me._mapholder.ggVisible?'inherit':'hidden';
		}
		this._openmap.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._openmap.style[domTransition]='none';
			} else {
				me._openmap.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._openmap.ggParameter.sx=0.5;me._openmap.ggParameter.sy=0.5;
			me._openmap.style[domTransform]=parameterToTransform(me._openmap.ggParameter);
		}
		this._openmap.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._openmap.style[domTransition]='none';
			} else {
				me._openmap.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._openmap.ggParameter.sx=0.4;me._openmap.ggParameter.sy=0.4;
			me._openmap.style[domTransform]=parameterToTransform(me._openmap.ggParameter);
		}
		this.divSkin.appendChild(this._openmap);
		me.player.openNext("Gang A2_06_out.xml","");
		me._map_2.style[domTransition]='none';
		me._map_2.style.opacity='0';
		me._map_2.style.visibility='hidden';
		me._map_1.style[domTransition]='none';
		me._map_1.style.opacity='0';
		me._map_1.style.visibility='hidden';
		me._map_3.style[domTransition]='none';
		me._map_3.style.opacity='0';
		me._map_3.style.visibility='hidden';
		me._map_erdgeschoss.style[domTransition]='none';
		me._map_erdgeschoss.style.opacity='1';
		me._map_erdgeschoss.style.visibility=me._map_erdgeschoss.ggVisible?'inherit':'hidden';
		me._map_keller.style[domTransition]='none';
		me._map_keller.style.opacity='0';
		me._map_keller.style.visibility='hidden';
		me._current_selection3.style[domTransition]='none';
		me._current_selection3.ggParameter.rx=-12;me._current_selection3.ggParameter.ry=207;
		me._current_selection3.style[domTransform]=parameterToTransform(me._current_selection3.ggParameter);
		me._current_selection2.style[domTransition]='none';
		me._current_selection2.ggParameter.rx=80;me._current_selection2.ggParameter.ry=155;
		me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
		me._current_selection1.style[domTransition]='none';
		me._current_selection1.ggParameter.rx=254;me._current_selection1.ggParameter.ry=347;
		me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
		me._current_selectione.style[domTransition]='none';
		me._current_selectione.ggParameter.rx=330;me._current_selectione.ggParameter.ry=305;
		me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
		me._orientierunge.style[domTransition]='none';
		me._orientierunge.ggParameter.rx=330;me._orientierunge.ggParameter.ry=305;
		me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		me._current_selectionu.style[domTransition]='none';
		me._current_selectionu.ggParameter.rx=315;me._current_selectionu.ggParameter.ry=132;
		me._current_selectionu.style[domTransform]=parameterToTransform(me._current_selectionu.ggParameter);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		var hs='';
		if (me._orientierunge.ggParameter) {
			hs+=parameterToTransform(me._orientierunge.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 180)) + 'deg) ';
		me._orientierunge.style[domTransform]=hs;
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='Room_Out_1_28') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_1_28";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("Gang 1_24_out.xml","");
				me.skin._current_selection1.style[domTransition]='none';
				me.skin._current_selection1.ggParameter.rx=632;me.skin._current_selection1.ggParameter.ry=259;
				me.skin._current_selection1.style[domTransform]=parameterToTransform(me.skin._current_selection1.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_125=document.createElement('div');
			this._image_125.ggId="Image 1";
			this._image_125.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_125.ggVisible=true;
			this._image_125.className='ggskin ggskin_image';
			this._image_125.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_125.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_125.setAttribute('style',hs);
			this._image_125__img=document.createElement('img');
			this._image_125__img.className='ggskin ggskin_image';
			this._image_125__img.setAttribute('src',basePath + 'images/image_125.png');
			this._image_125__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_125__img.className='ggskin ggskin_image';
			this._image_125__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_125__img);
			this._image_125.appendChild(this._image_125__img);
			this._image_125.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_125.style[domTransition]='none';
				} else {
					me._image_125.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_125.ggParameter.sx=0.2;me._image_125.ggParameter.sy=0.2;
				me._image_125.style[domTransform]=parameterToTransform(me._image_125.ggParameter);
				flag=(me._text_225.style.visibility=='hidden');
				me._text_225.style[domTransition]='none';
				me._text_225.style.visibility=flag?'inherit':'hidden';
				me._text_225.ggVisible=flag;
			}
			this._image_125.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_125.style[domTransition]='none';
				} else {
					me._image_125.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_125.ggParameter.sx=0.1;me._image_125.ggParameter.sy=0.1;
				me._image_125.style[domTransform]=parameterToTransform(me._image_125.ggParameter);
				flag=(me._text_225.style.visibility=='hidden');
				me._text_225.style[domTransition]='none';
				me._text_225.style.visibility=flag?'inherit':'hidden';
				me._text_225.ggVisible=flag;
			}
			this.__div.appendChild(this._image_125);
			this._text_225=document.createElement('div');
			this._text_225__text=document.createElement('div');
			this._text_225.className='ggskin ggskin_textdiv';
			this._text_225.ggTextDiv=this._text_225__text;
			this._text_225.ggId="Text 2";
			this._text_225.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_225.ggVisible=false;
			this._text_225.className='ggskin ggskin_text';
			this._text_225.ggType='text';
			this._text_225.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_225.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_225__text.setAttribute('style',hs);
			this._text_225.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_225.appendChild(this._text_225__text);
			this.__div.appendChild(this._text_225);
		} else
		if (hotspot.skinid=='Room_In_1_28') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_1_28";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("1_28_out.xml","");
				me.skin._current_selection1.style[domTransition]='none';
				me.skin._current_selection1.ggParameter.rx=699;me.skin._current_selection1.ggParameter.ry=325;
				me.skin._current_selection1.style[domTransform]=parameterToTransform(me.skin._current_selection1.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_124=document.createElement('div');
			this._image_124.ggId="Image 1";
			this._image_124.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_124.ggVisible=true;
			this._image_124.className='ggskin ggskin_image';
			this._image_124.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_124.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_124.setAttribute('style',hs);
			this._image_124__img=document.createElement('img');
			this._image_124__img.className='ggskin ggskin_image';
			this._image_124__img.setAttribute('src',basePath + 'images/image_124.png');
			this._image_124__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_124__img.className='ggskin ggskin_image';
			this._image_124__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_124__img);
			this._image_124.appendChild(this._image_124__img);
			this._image_124.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_124.style[domTransition]='none';
				} else {
					me._image_124.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_124.ggParameter.sx=0.2;me._image_124.ggParameter.sy=0.2;
				me._image_124.style[domTransform]=parameterToTransform(me._image_124.ggParameter);
				flag=(me._text_224.style.visibility=='hidden');
				me._text_224.style[domTransition]='none';
				me._text_224.style.visibility=flag?'inherit':'hidden';
				me._text_224.ggVisible=flag;
			}
			this._image_124.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_124.style[domTransition]='none';
				} else {
					me._image_124.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_124.ggParameter.sx=0.1;me._image_124.ggParameter.sy=0.1;
				me._image_124.style[domTransform]=parameterToTransform(me._image_124.ggParameter);
				flag=(me._text_224.style.visibility=='hidden');
				me._text_224.style[domTransition]='none';
				me._text_224.style.visibility=flag?'inherit':'hidden';
				me._text_224.ggVisible=flag;
			}
			this.__div.appendChild(this._image_124);
			this._text_224=document.createElement('div');
			this._text_224__text=document.createElement('div');
			this._text_224.className='ggskin ggskin_textdiv';
			this._text_224.ggTextDiv=this._text_224__text;
			this._text_224.ggId="Text 2";
			this._text_224.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_224.ggVisible=false;
			this._text_224.className='ggskin ggskin_text';
			this._text_224.ggType='text';
			this._text_224.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_224.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_224__text.setAttribute('style',hs);
			this._text_224.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_224.appendChild(this._text_224__text);
			this.__div.appendChild(this._text_224);
		} else
		if (hotspot.skinid=='Gang_To_Gang_Bibliothek') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_To_Gang_Bibliothek";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("Bibliothek_out.xml","");
				me.skin._current_selection1.style[domTransition]='none';
				me.skin._current_selection1.ggParameter.rx=254;me.skin._current_selection1.ggParameter.ry=347;
				me.skin._current_selection1.style[domTransform]=parameterToTransform(me.skin._current_selection1.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_123=document.createElement('div');
			this._image_123.ggId="Image 1";
			this._image_123.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_123.ggVisible=true;
			this._image_123.className='ggskin ggskin_image';
			this._image_123.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_123.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_123.setAttribute('style',hs);
			this._image_123__img=document.createElement('img');
			this._image_123__img.className='ggskin ggskin_image';
			this._image_123__img.setAttribute('src',basePath + 'images/image_123.png');
			this._image_123__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_123__img.className='ggskin ggskin_image';
			this._image_123__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_123__img);
			this._image_123.appendChild(this._image_123__img);
			this._image_123.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_123.style[domTransition]='none';
				} else {
					me._image_123.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_123.ggParameter.sx=0.2;me._image_123.ggParameter.sy=0.2;
				me._image_123.style[domTransform]=parameterToTransform(me._image_123.ggParameter);
				flag=(me._text_223.style.visibility=='hidden');
				me._text_223.style[domTransition]='none';
				me._text_223.style.visibility=flag?'inherit':'hidden';
				me._text_223.ggVisible=flag;
			}
			this._image_123.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_123.style[domTransition]='none';
				} else {
					me._image_123.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_123.ggParameter.sx=0.1;me._image_123.ggParameter.sy=0.1;
				me._image_123.style[domTransform]=parameterToTransform(me._image_123.ggParameter);
				flag=(me._text_223.style.visibility=='hidden');
				me._text_223.style[domTransition]='none';
				me._text_223.style.visibility=flag?'inherit':'hidden';
				me._text_223.ggVisible=flag;
			}
			this.__div.appendChild(this._image_123);
			this._text_223=document.createElement('div');
			this._text_223__text=document.createElement('div');
			this._text_223.className='ggskin ggskin_textdiv';
			this._text_223.ggTextDiv=this._text_223__text;
			this._text_223.ggId="Text 2";
			this._text_223.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_223.ggVisible=false;
			this._text_223.className='ggskin ggskin_text';
			this._text_223.ggType='text';
			this._text_223.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_223.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_223__text.setAttribute('style',hs);
			this._text_223.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_223.appendChild(this._text_223__text);
			this.__div.appendChild(this._text_223);
		} else
		if (hotspot.skinid=='Room_In_1_08') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_1_08";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("1_08_out.xml","");
				me.skin._current_selection1.style[domTransition]='none';
				me.skin._current_selection1.ggParameter.rx=101;me.skin._current_selection1.ggParameter.ry=312;
				me.skin._current_selection1.style[domTransform]=parameterToTransform(me.skin._current_selection1.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_122=document.createElement('div');
			this._image_122.ggId="Image 1";
			this._image_122.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_122.ggVisible=true;
			this._image_122.className='ggskin ggskin_image';
			this._image_122.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_122.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_122.setAttribute('style',hs);
			this._image_122__img=document.createElement('img');
			this._image_122__img.className='ggskin ggskin_image';
			this._image_122__img.setAttribute('src',basePath + 'images/image_122.png');
			this._image_122__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_122__img.className='ggskin ggskin_image';
			this._image_122__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_122__img);
			this._image_122.appendChild(this._image_122__img);
			this._image_122.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_122.style[domTransition]='none';
				} else {
					me._image_122.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_122.ggParameter.sx=0.2;me._image_122.ggParameter.sy=0.2;
				me._image_122.style[domTransform]=parameterToTransform(me._image_122.ggParameter);
				flag=(me._text_222.style.visibility=='hidden');
				me._text_222.style[domTransition]='none';
				me._text_222.style.visibility=flag?'inherit':'hidden';
				me._text_222.ggVisible=flag;
			}
			this._image_122.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_122.style[domTransition]='none';
				} else {
					me._image_122.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_122.ggParameter.sx=0.1;me._image_122.ggParameter.sy=0.1;
				me._image_122.style[domTransform]=parameterToTransform(me._image_122.ggParameter);
				flag=(me._text_222.style.visibility=='hidden');
				me._text_222.style[domTransition]='none';
				me._text_222.style.visibility=flag?'inherit':'hidden';
				me._text_222.ggVisible=flag;
			}
			this.__div.appendChild(this._image_122);
			this._text_222=document.createElement('div');
			this._text_222__text=document.createElement('div');
			this._text_222.className='ggskin ggskin_textdiv';
			this._text_222.ggTextDiv=this._text_222__text;
			this._text_222.ggId="Text 2";
			this._text_222.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_222.ggVisible=false;
			this._text_222.className='ggskin ggskin_text';
			this._text_222.ggType='text';
			this._text_222.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_222.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_222__text.setAttribute('style',hs);
			this._text_222.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_222.appendChild(this._text_222__text);
			this.__div.appendChild(this._text_222);
		} else
		if (hotspot.skinid=='Gang_To_Gang_1_24') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_To_Gang_1_24";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("Gang 1_24_out.xml","90");
				me.skin._current_selection1.style[domTransition]='none';
				me.skin._current_selection1.ggParameter.rx=632;me.skin._current_selection1.ggParameter.ry=259;
				me.skin._current_selection1.style[domTransform]=parameterToTransform(me.skin._current_selection1.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_121=document.createElement('div');
			this._image_121.ggId="Image 1";
			this._image_121.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_121.ggVisible=true;
			this._image_121.className='ggskin ggskin_image';
			this._image_121.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_121.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_121.setAttribute('style',hs);
			this._image_121__img=document.createElement('img');
			this._image_121__img.className='ggskin ggskin_image';
			this._image_121__img.setAttribute('src',basePath + 'images/image_121.png');
			this._image_121__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_121__img.className='ggskin ggskin_image';
			this._image_121__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_121__img);
			this._image_121.appendChild(this._image_121__img);
			this._image_121.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_121.style[domTransition]='none';
				} else {
					me._image_121.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_121.ggParameter.sx=0.2;me._image_121.ggParameter.sy=0.2;
				me._image_121.style[domTransform]=parameterToTransform(me._image_121.ggParameter);
				flag=(me._text_221.style.visibility=='hidden');
				me._text_221.style[domTransition]='none';
				me._text_221.style.visibility=flag?'inherit':'hidden';
				me._text_221.ggVisible=flag;
			}
			this._image_121.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_121.style[domTransition]='none';
				} else {
					me._image_121.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_121.ggParameter.sx=0.1;me._image_121.ggParameter.sy=0.1;
				me._image_121.style[domTransform]=parameterToTransform(me._image_121.ggParameter);
				flag=(me._text_221.style.visibility=='hidden');
				me._text_221.style[domTransition]='none';
				me._text_221.style.visibility=flag?'inherit':'hidden';
				me._text_221.ggVisible=flag;
			}
			this.__div.appendChild(this._image_121);
			this._text_221=document.createElement('div');
			this._text_221__text=document.createElement('div');
			this._text_221.className='ggskin ggskin_textdiv';
			this._text_221.ggTextDiv=this._text_221__text;
			this._text_221.ggId="Text 2";
			this._text_221.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_221.ggVisible=false;
			this._text_221.className='ggskin ggskin_text';
			this._text_221.ggType='text';
			this._text_221.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_221.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_221__text.setAttribute('style',hs);
			this._text_221.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_221.appendChild(this._text_221__text);
			this.__div.appendChild(this._text_221);
		} else
		if (hotspot.skinid=='Room_Out_1_08') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_1_08";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("Bibliothek_out.xml","");
				me.skin._current_selection1.style[domTransition]='none';
				me.skin._current_selection1.ggParameter.rx=254;me.skin._current_selection1.ggParameter.ry=347;
				me.skin._current_selection1.style[domTransform]=parameterToTransform(me.skin._current_selection1.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_120=document.createElement('div');
			this._image_120.ggId="Image 1";
			this._image_120.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_120.ggVisible=true;
			this._image_120.className='ggskin ggskin_image';
			this._image_120.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_120.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_120.setAttribute('style',hs);
			this._image_120__img=document.createElement('img');
			this._image_120__img.className='ggskin ggskin_image';
			this._image_120__img.setAttribute('src',basePath + 'images/image_120.png');
			this._image_120__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_120__img.className='ggskin ggskin_image';
			this._image_120__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_120__img);
			this._image_120.appendChild(this._image_120__img);
			this._image_120.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_120.style[domTransition]='none';
				} else {
					me._image_120.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_120.ggParameter.sx=0.2;me._image_120.ggParameter.sy=0.2;
				me._image_120.style[domTransform]=parameterToTransform(me._image_120.ggParameter);
				flag=(me._text_220.style.visibility=='hidden');
				me._text_220.style[domTransition]='none';
				me._text_220.style.visibility=flag?'inherit':'hidden';
				me._text_220.ggVisible=flag;
			}
			this._image_120.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_120.style[domTransition]='none';
				} else {
					me._image_120.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_120.ggParameter.sx=0.1;me._image_120.ggParameter.sy=0.1;
				me._image_120.style[domTransform]=parameterToTransform(me._image_120.ggParameter);
				flag=(me._text_220.style.visibility=='hidden');
				me._text_220.style[domTransition]='none';
				me._text_220.style.visibility=flag?'inherit':'hidden';
				me._text_220.ggVisible=flag;
			}
			this.__div.appendChild(this._image_120);
			this._text_220=document.createElement('div');
			this._text_220__text=document.createElement('div');
			this._text_220.className='ggskin ggskin_textdiv';
			this._text_220.ggTextDiv=this._text_220__text;
			this._text_220.ggId="Text 2";
			this._text_220.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_220.ggVisible=false;
			this._text_220.className='ggskin ggskin_text';
			this._text_220.ggType='text';
			this._text_220.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_220.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_220__text.setAttribute('style',hs);
			this._text_220.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_220.appendChild(this._text_220__text);
			this.__div.appendChild(this._text_220);
		} else
		if (hotspot.skinid=='Room_Out_1_31') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_1_31";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("Gang 1_24_out.xml","180");
				me.skin._current_selection1.style[domTransition]='none';
				me.skin._current_selection1.ggParameter.rx=632;me.skin._current_selection1.ggParameter.ry=259;
				me.skin._current_selection1.style[domTransform]=parameterToTransform(me.skin._current_selection1.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_119=document.createElement('div');
			this._image_119.ggId="Image 1";
			this._image_119.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_119.ggVisible=true;
			this._image_119.className='ggskin ggskin_image';
			this._image_119.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_119.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_119.setAttribute('style',hs);
			this._image_119__img=document.createElement('img');
			this._image_119__img.className='ggskin ggskin_image';
			this._image_119__img.setAttribute('src',basePath + 'images/image_119.png');
			this._image_119__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_119__img.className='ggskin ggskin_image';
			this._image_119__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_119__img);
			this._image_119.appendChild(this._image_119__img);
			this._image_119.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_119.style[domTransition]='none';
				} else {
					me._image_119.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_119.ggParameter.sx=0.2;me._image_119.ggParameter.sy=0.2;
				me._image_119.style[domTransform]=parameterToTransform(me._image_119.ggParameter);
				flag=(me._text_219.style.visibility=='hidden');
				me._text_219.style[domTransition]='none';
				me._text_219.style.visibility=flag?'inherit':'hidden';
				me._text_219.ggVisible=flag;
			}
			this._image_119.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_119.style[domTransition]='none';
				} else {
					me._image_119.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_119.ggParameter.sx=0.1;me._image_119.ggParameter.sy=0.1;
				me._image_119.style[domTransform]=parameterToTransform(me._image_119.ggParameter);
				flag=(me._text_219.style.visibility=='hidden');
				me._text_219.style[domTransition]='none';
				me._text_219.style.visibility=flag?'inherit':'hidden';
				me._text_219.ggVisible=flag;
			}
			this.__div.appendChild(this._image_119);
			this._text_219=document.createElement('div');
			this._text_219__text=document.createElement('div');
			this._text_219.className='ggskin ggskin_textdiv';
			this._text_219.ggTextDiv=this._text_219__text;
			this._text_219.ggId="Text 2";
			this._text_219.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_219.ggVisible=false;
			this._text_219.className='ggskin ggskin_text';
			this._text_219.ggType='text';
			this._text_219.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_219.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_219__text.setAttribute('style',hs);
			this._text_219.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_219.appendChild(this._text_219__text);
			this.__div.appendChild(this._text_219);
		} else
		if (hotspot.skinid=='Room_In_1_31') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_1_31";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("- fehlt noch - ","");
				me.skin._current_selection1.style[domTransition]='none';
				me.skin._current_selection1.ggParameter.rx=905;me.skin._current_selection1.ggParameter.ry=248;
				me.skin._current_selection1.style[domTransform]=parameterToTransform(me.skin._current_selection1.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_118=document.createElement('div');
			this._image_118.ggId="Image 1";
			this._image_118.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_118.ggVisible=true;
			this._image_118.className='ggskin ggskin_image';
			this._image_118.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_118.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_118.setAttribute('style',hs);
			this._image_118__img=document.createElement('img');
			this._image_118__img.className='ggskin ggskin_image';
			this._image_118__img.setAttribute('src',basePath + 'images/image_118.png');
			this._image_118__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_118__img.className='ggskin ggskin_image';
			this._image_118__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_118__img);
			this._image_118.appendChild(this._image_118__img);
			this._image_118.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_118.style[domTransition]='none';
				} else {
					me._image_118.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_118.ggParameter.sx=0.2;me._image_118.ggParameter.sy=0.2;
				me._image_118.style[domTransform]=parameterToTransform(me._image_118.ggParameter);
				flag=(me._text_218.style.visibility=='hidden');
				me._text_218.style[domTransition]='none';
				me._text_218.style.visibility=flag?'inherit':'hidden';
				me._text_218.ggVisible=flag;
			}
			this._image_118.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_118.style[domTransition]='none';
				} else {
					me._image_118.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_118.ggParameter.sx=0.1;me._image_118.ggParameter.sy=0.1;
				me._image_118.style[domTransform]=parameterToTransform(me._image_118.ggParameter);
				flag=(me._text_218.style.visibility=='hidden');
				me._text_218.style[domTransition]='none';
				me._text_218.style.visibility=flag?'inherit':'hidden';
				me._text_218.ggVisible=flag;
			}
			this.__div.appendChild(this._image_118);
			this._text_218=document.createElement('div');
			this._text_218__text=document.createElement('div');
			this._text_218.className='ggskin ggskin_textdiv';
			this._text_218.ggTextDiv=this._text_218__text;
			this._text_218.ggId="Text 2";
			this._text_218.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_218.ggVisible=false;
			this._text_218.className='ggskin ggskin_text';
			this._text_218.ggType='text';
			this._text_218.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_218.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_218__text.setAttribute('style',hs);
			this._text_218.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_218.appendChild(this._text_218__text);
			this.__div.appendChild(this._text_218);
		} else
		if (hotspot.skinid=='Room_In_2_14') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_2_14";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("2_14_out.xml","");
				me.skin._current_selection2.style[domTransition]='none';
				me.skin._current_selection2.ggParameter.rx=798;me.skin._current_selection2.ggParameter.ry=234;
				me.skin._current_selection2.style[domTransform]=parameterToTransform(me.skin._current_selection2.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_117=document.createElement('div');
			this._image_117.ggId="Image 1";
			this._image_117.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_117.ggVisible=true;
			this._image_117.className='ggskin ggskin_image';
			this._image_117.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_117.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_117.setAttribute('style',hs);
			this._image_117__img=document.createElement('img');
			this._image_117__img.className='ggskin ggskin_image';
			this._image_117__img.setAttribute('src',basePath + 'images/image_117.png');
			this._image_117__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_117__img.className='ggskin ggskin_image';
			this._image_117__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_117__img);
			this._image_117.appendChild(this._image_117__img);
			this._image_117.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_117.style[domTransition]='none';
				} else {
					me._image_117.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_117.ggParameter.sx=0.2;me._image_117.ggParameter.sy=0.2;
				me._image_117.style[domTransform]=parameterToTransform(me._image_117.ggParameter);
				flag=(me._text_217.style.visibility=='hidden');
				me._text_217.style[domTransition]='none';
				me._text_217.style.visibility=flag?'inherit':'hidden';
				me._text_217.ggVisible=flag;
			}
			this._image_117.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_117.style[domTransition]='none';
				} else {
					me._image_117.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_117.ggParameter.sx=0.1;me._image_117.ggParameter.sy=0.1;
				me._image_117.style[domTransform]=parameterToTransform(me._image_117.ggParameter);
				flag=(me._text_217.style.visibility=='hidden');
				me._text_217.style[domTransition]='none';
				me._text_217.style.visibility=flag?'inherit':'hidden';
				me._text_217.ggVisible=flag;
			}
			this.__div.appendChild(this._image_117);
			this._text_217=document.createElement('div');
			this._text_217__text=document.createElement('div');
			this._text_217.className='ggskin ggskin_textdiv';
			this._text_217.ggTextDiv=this._text_217__text;
			this._text_217.ggId="Text 2";
			this._text_217.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_217.ggVisible=false;
			this._text_217.className='ggskin ggskin_text';
			this._text_217.ggType='text';
			this._text_217.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_217.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_217__text.setAttribute('style',hs);
			this._text_217.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_217.appendChild(this._text_217__text);
			this.__div.appendChild(this._text_217);
		} else
		if (hotspot.skinid=='Room_In_2_13') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_2_13";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("2_13_out.xml","");
				me.skin._current_selection2.style[domTransition]='none';
				me.skin._current_selection2.ggParameter.rx=641;me.skin._current_selection2.ggParameter.ry=234;
				me.skin._current_selection2.style[domTransform]=parameterToTransform(me.skin._current_selection2.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_116=document.createElement('div');
			this._image_116.ggId="Image 1";
			this._image_116.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_116.ggVisible=true;
			this._image_116.className='ggskin ggskin_image';
			this._image_116.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_116.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_116.setAttribute('style',hs);
			this._image_116__img=document.createElement('img');
			this._image_116__img.className='ggskin ggskin_image';
			this._image_116__img.setAttribute('src',basePath + 'images/image_116.png');
			this._image_116__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_116__img.className='ggskin ggskin_image';
			this._image_116__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_116__img);
			this._image_116.appendChild(this._image_116__img);
			this._image_116.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_116.style[domTransition]='none';
				} else {
					me._image_116.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_116.ggParameter.sx=0.2;me._image_116.ggParameter.sy=0.2;
				me._image_116.style[domTransform]=parameterToTransform(me._image_116.ggParameter);
				flag=(me._text_216.style.visibility=='hidden');
				me._text_216.style[domTransition]='none';
				me._text_216.style.visibility=flag?'inherit':'hidden';
				me._text_216.ggVisible=flag;
			}
			this._image_116.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_116.style[domTransition]='none';
				} else {
					me._image_116.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_116.ggParameter.sx=0.1;me._image_116.ggParameter.sy=0.1;
				me._image_116.style[domTransform]=parameterToTransform(me._image_116.ggParameter);
				flag=(me._text_216.style.visibility=='hidden');
				me._text_216.style[domTransition]='none';
				me._text_216.style.visibility=flag?'inherit':'hidden';
				me._text_216.ggVisible=flag;
			}
			this.__div.appendChild(this._image_116);
			this._text_216=document.createElement('div');
			this._text_216__text=document.createElement('div');
			this._text_216.className='ggskin ggskin_textdiv';
			this._text_216.ggTextDiv=this._text_216__text;
			this._text_216.ggId="Text 2";
			this._text_216.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_216.ggVisible=false;
			this._text_216.className='ggskin ggskin_text';
			this._text_216.ggType='text';
			this._text_216.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_216.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_216__text.setAttribute('style',hs);
			this._text_216.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_216.appendChild(this._text_216__text);
			this.__div.appendChild(this._text_216);
		} else
		if (hotspot.skinid=='Room_In_2_11') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_2_11";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("2_11_out.xml","");
				me.skin._current_selection2.style[domTransition]='none';
				me.skin._current_selection2.ggParameter.rx=407;me.skin._current_selection2.ggParameter.ry=231;
				me.skin._current_selection2.style[domTransform]=parameterToTransform(me.skin._current_selection2.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_115=document.createElement('div');
			this._image_115.ggId="Image 1";
			this._image_115.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_115.ggVisible=true;
			this._image_115.className='ggskin ggskin_image';
			this._image_115.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_115.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_115.setAttribute('style',hs);
			this._image_115__img=document.createElement('img');
			this._image_115__img.className='ggskin ggskin_image';
			this._image_115__img.setAttribute('src',basePath + 'images/image_115.png');
			this._image_115__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_115__img.className='ggskin ggskin_image';
			this._image_115__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_115__img);
			this._image_115.appendChild(this._image_115__img);
			this._image_115.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_115.style[domTransition]='none';
				} else {
					me._image_115.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_115.ggParameter.sx=0.2;me._image_115.ggParameter.sy=0.2;
				me._image_115.style[domTransform]=parameterToTransform(me._image_115.ggParameter);
				flag=(me._text_215.style.visibility=='hidden');
				me._text_215.style[domTransition]='none';
				me._text_215.style.visibility=flag?'inherit':'hidden';
				me._text_215.ggVisible=flag;
			}
			this._image_115.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_115.style[domTransition]='none';
				} else {
					me._image_115.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_115.ggParameter.sx=0.1;me._image_115.ggParameter.sy=0.1;
				me._image_115.style[domTransform]=parameterToTransform(me._image_115.ggParameter);
				flag=(me._text_215.style.visibility=='hidden');
				me._text_215.style[domTransition]='none';
				me._text_215.style.visibility=flag?'inherit':'hidden';
				me._text_215.ggVisible=flag;
			}
			this.__div.appendChild(this._image_115);
			this._text_215=document.createElement('div');
			this._text_215__text=document.createElement('div');
			this._text_215.className='ggskin ggskin_textdiv';
			this._text_215.ggTextDiv=this._text_215__text;
			this._text_215.ggId="Text 2";
			this._text_215.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_215.ggVisible=false;
			this._text_215.className='ggskin ggskin_text';
			this._text_215.ggType='text';
			this._text_215.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_215.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_215__text.setAttribute('style',hs);
			this._text_215.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_215.appendChild(this._text_215__text);
			this.__div.appendChild(this._text_215);
		} else
		if (hotspot.skinid=='Room_In_2_07') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_2_07";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("2_07_out.xml","");
				me.skin._current_selection2.style[domTransition]='none';
				me.skin._current_selection2.ggParameter.rx=10;me.skin._current_selection2.ggParameter.ry=231;
				me.skin._current_selection2.style[domTransform]=parameterToTransform(me.skin._current_selection2.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_114=document.createElement('div');
			this._image_114.ggId="Image 1";
			this._image_114.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_114.ggVisible=true;
			this._image_114.className='ggskin ggskin_image';
			this._image_114.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_114.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_114.setAttribute('style',hs);
			this._image_114__img=document.createElement('img');
			this._image_114__img.className='ggskin ggskin_image';
			this._image_114__img.setAttribute('src',basePath + 'images/image_114.png');
			this._image_114__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_114__img.className='ggskin ggskin_image';
			this._image_114__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_114__img);
			this._image_114.appendChild(this._image_114__img);
			this._image_114.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_114.style[domTransition]='none';
				} else {
					me._image_114.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_114.ggParameter.sx=0.2;me._image_114.ggParameter.sy=0.2;
				me._image_114.style[domTransform]=parameterToTransform(me._image_114.ggParameter);
				flag=(me._text_214.style.visibility=='hidden');
				me._text_214.style[domTransition]='none';
				me._text_214.style.visibility=flag?'inherit':'hidden';
				me._text_214.ggVisible=flag;
			}
			this._image_114.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_114.style[domTransition]='none';
				} else {
					me._image_114.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_114.ggParameter.sx=0.1;me._image_114.ggParameter.sy=0.1;
				me._image_114.style[domTransform]=parameterToTransform(me._image_114.ggParameter);
				flag=(me._text_214.style.visibility=='hidden');
				me._text_214.style[domTransition]='none';
				me._text_214.style.visibility=flag?'inherit':'hidden';
				me._text_214.ggVisible=flag;
			}
			this.__div.appendChild(this._image_114);
			this._text_214=document.createElement('div');
			this._text_214__text=document.createElement('div');
			this._text_214.className='ggskin ggskin_textdiv';
			this._text_214.ggTextDiv=this._text_214__text;
			this._text_214.ggId="Text 2";
			this._text_214.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_214.ggVisible=false;
			this._text_214.className='ggskin ggskin_text';
			this._text_214.ggType='text';
			this._text_214.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_214.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_214__text.setAttribute('style',hs);
			this._text_214.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_214.appendChild(this._text_214__text);
			this.__div.appendChild(this._text_214);
		} else
		if (hotspot.skinid=='Room_In_2_08') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_2_08";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("2_08_out.xml","");
				me.skin._current_selection2.style[domTransition]='none';
				me.skin._current_selection2.ggParameter.rx=120;me.skin._current_selection2.ggParameter.ry=234;
				me.skin._current_selection2.style[domTransform]=parameterToTransform(me.skin._current_selection2.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_113=document.createElement('div');
			this._image_113.ggId="Image 1";
			this._image_113.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_113.ggVisible=true;
			this._image_113.className='ggskin ggskin_image';
			this._image_113.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_113.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_113.setAttribute('style',hs);
			this._image_113__img=document.createElement('img');
			this._image_113__img.className='ggskin ggskin_image';
			this._image_113__img.setAttribute('src',basePath + 'images/image_113.png');
			this._image_113__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_113__img.className='ggskin ggskin_image';
			this._image_113__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_113__img);
			this._image_113.appendChild(this._image_113__img);
			this._image_113.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_113.style[domTransition]='none';
				} else {
					me._image_113.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_113.ggParameter.sx=0.2;me._image_113.ggParameter.sy=0.2;
				me._image_113.style[domTransform]=parameterToTransform(me._image_113.ggParameter);
				flag=(me._text_213.style.visibility=='hidden');
				me._text_213.style[domTransition]='none';
				me._text_213.style.visibility=flag?'inherit':'hidden';
				me._text_213.ggVisible=flag;
			}
			this._image_113.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_113.style[domTransition]='none';
				} else {
					me._image_113.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_113.ggParameter.sx=0.1;me._image_113.ggParameter.sy=0.1;
				me._image_113.style[domTransform]=parameterToTransform(me._image_113.ggParameter);
				flag=(me._text_213.style.visibility=='hidden');
				me._text_213.style[domTransition]='none';
				me._text_213.style.visibility=flag?'inherit':'hidden';
				me._text_213.ggVisible=flag;
			}
			this.__div.appendChild(this._image_113);
			this._text_213=document.createElement('div');
			this._text_213__text=document.createElement('div');
			this._text_213.className='ggskin ggskin_textdiv';
			this._text_213.ggTextDiv=this._text_213__text;
			this._text_213.ggId="Text 2";
			this._text_213.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_213.ggVisible=false;
			this._text_213.className='ggskin ggskin_text';
			this._text_213.ggType='text';
			this._text_213.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_213.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_213__text.setAttribute('style',hs);
			this._text_213.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_213.appendChild(this._text_213__text);
			this.__div.appendChild(this._text_213);
		} else
		if (hotspot.skinid=='Room_To_Room_2_13') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_To_Room_2_13";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("2_13_out.xml","");
				me.skin._current_selection2.style[domTransition]='none';
				me.skin._current_selection2.ggParameter.rx=641;me.skin._current_selection2.ggParameter.ry=234;
				me.skin._current_selection2.style[domTransform]=parameterToTransform(me.skin._current_selection2.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_112=document.createElement('div');
			this._image_112.ggId="Image 1";
			this._image_112.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_112.ggVisible=true;
			this._image_112.className='ggskin ggskin_image';
			this._image_112.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_112.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_112.setAttribute('style',hs);
			this._image_112__img=document.createElement('img');
			this._image_112__img.className='ggskin ggskin_image';
			this._image_112__img.setAttribute('src',basePath + 'images/image_112.png');
			this._image_112__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_112__img.className='ggskin ggskin_image';
			this._image_112__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_112__img);
			this._image_112.appendChild(this._image_112__img);
			this._image_112.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_112.style[domTransition]='none';
				} else {
					me._image_112.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_112.ggParameter.sx=0.2;me._image_112.ggParameter.sy=0.2;
				me._image_112.style[domTransform]=parameterToTransform(me._image_112.ggParameter);
				flag=(me._text_212.style.visibility=='hidden');
				me._text_212.style[domTransition]='none';
				me._text_212.style.visibility=flag?'inherit':'hidden';
				me._text_212.ggVisible=flag;
			}
			this._image_112.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_112.style[domTransition]='none';
				} else {
					me._image_112.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_112.ggParameter.sx=0.1;me._image_112.ggParameter.sy=0.1;
				me._image_112.style[domTransform]=parameterToTransform(me._image_112.ggParameter);
				flag=(me._text_212.style.visibility=='hidden');
				me._text_212.style[domTransition]='none';
				me._text_212.style.visibility=flag?'inherit':'hidden';
				me._text_212.ggVisible=flag;
			}
			this.__div.appendChild(this._image_112);
			this._text_212=document.createElement('div');
			this._text_212__text=document.createElement('div');
			this._text_212.className='ggskin ggskin_textdiv';
			this._text_212.ggTextDiv=this._text_212__text;
			this._text_212.ggId="Text 2";
			this._text_212.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_212.ggVisible=false;
			this._text_212.className='ggskin ggskin_text';
			this._text_212.ggType='text';
			this._text_212.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_212.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_212__text.setAttribute('style',hs);
			this._text_212.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_212.appendChild(this._text_212__text);
			this.__div.appendChild(this._text_212);
		} else
		if (hotspot.skinid=='Room_Out_2_14') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_2_14";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("Gang 2_14_out.xml","180");
				me.skin._current_selection2.style[domTransition]='none';
				me.skin._current_selection2.ggParameter.rx=528;me.skin._current_selection2.ggParameter.ry=168;
				me.skin._current_selection2.style[domTransform]=parameterToTransform(me.skin._current_selection2.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_111=document.createElement('div');
			this._image_111.ggId="Image 1";
			this._image_111.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_111.ggVisible=true;
			this._image_111.className='ggskin ggskin_image';
			this._image_111.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_111.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_111.setAttribute('style',hs);
			this._image_111__img=document.createElement('img');
			this._image_111__img.className='ggskin ggskin_image';
			this._image_111__img.setAttribute('src',basePath + 'images/image_111.png');
			this._image_111__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_111__img.className='ggskin ggskin_image';
			this._image_111__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_111__img);
			this._image_111.appendChild(this._image_111__img);
			this._image_111.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_111.style[domTransition]='none';
				} else {
					me._image_111.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_111.ggParameter.sx=0.2;me._image_111.ggParameter.sy=0.2;
				me._image_111.style[domTransform]=parameterToTransform(me._image_111.ggParameter);
				flag=(me._text_211.style.visibility=='hidden');
				me._text_211.style[domTransition]='none';
				me._text_211.style.visibility=flag?'inherit':'hidden';
				me._text_211.ggVisible=flag;
			}
			this._image_111.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_111.style[domTransition]='none';
				} else {
					me._image_111.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_111.ggParameter.sx=0.1;me._image_111.ggParameter.sy=0.1;
				me._image_111.style[domTransform]=parameterToTransform(me._image_111.ggParameter);
				flag=(me._text_211.style.visibility=='hidden');
				me._text_211.style[domTransition]='none';
				me._text_211.style.visibility=flag?'inherit':'hidden';
				me._text_211.ggVisible=flag;
			}
			this.__div.appendChild(this._image_111);
			this._text_211=document.createElement('div');
			this._text_211__text=document.createElement('div');
			this._text_211.className='ggskin ggskin_textdiv';
			this._text_211.ggTextDiv=this._text_211__text;
			this._text_211.ggId="Text 2";
			this._text_211.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_211.ggVisible=false;
			this._text_211.className='ggskin ggskin_text';
			this._text_211.ggType='text';
			this._text_211.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_211.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_211__text.setAttribute('style',hs);
			this._text_211.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_211.appendChild(this._text_211__text);
			this.__div.appendChild(this._text_211);
		} else
		if (hotspot.skinid=='Room_Out_2_13') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_2_13";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("Gang 2_14_out.xml","180");
				me.skin._current_selection2.style[domTransition]='none';
				me.skin._current_selection2.ggParameter.rx=528;me.skin._current_selection2.ggParameter.ry=168;
				me.skin._current_selection2.style[domTransform]=parameterToTransform(me.skin._current_selection2.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_110=document.createElement('div');
			this._image_110.ggId="Image 1";
			this._image_110.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_110.ggVisible=true;
			this._image_110.className='ggskin ggskin_image';
			this._image_110.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_110.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_110.setAttribute('style',hs);
			this._image_110__img=document.createElement('img');
			this._image_110__img.className='ggskin ggskin_image';
			this._image_110__img.setAttribute('src',basePath + 'images/image_110.png');
			this._image_110__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_110__img.className='ggskin ggskin_image';
			this._image_110__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_110__img);
			this._image_110.appendChild(this._image_110__img);
			this._image_110.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_110.style[domTransition]='none';
				} else {
					me._image_110.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_110.ggParameter.sx=0.2;me._image_110.ggParameter.sy=0.2;
				me._image_110.style[domTransform]=parameterToTransform(me._image_110.ggParameter);
				flag=(me._text_210.style.visibility=='hidden');
				me._text_210.style[domTransition]='none';
				me._text_210.style.visibility=flag?'inherit':'hidden';
				me._text_210.ggVisible=flag;
			}
			this._image_110.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_110.style[domTransition]='none';
				} else {
					me._image_110.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_110.ggParameter.sx=0.1;me._image_110.ggParameter.sy=0.1;
				me._image_110.style[domTransform]=parameterToTransform(me._image_110.ggParameter);
				flag=(me._text_210.style.visibility=='hidden');
				me._text_210.style[domTransition]='none';
				me._text_210.style.visibility=flag?'inherit':'hidden';
				me._text_210.ggVisible=flag;
			}
			this.__div.appendChild(this._image_110);
			this._text_210=document.createElement('div');
			this._text_210__text=document.createElement('div');
			this._text_210.className='ggskin ggskin_textdiv';
			this._text_210.ggTextDiv=this._text_210__text;
			this._text_210.ggId="Text 2";
			this._text_210.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_210.ggVisible=false;
			this._text_210.className='ggskin ggskin_text';
			this._text_210.ggType='text';
			this._text_210.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_210.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_210__text.setAttribute('style',hs);
			this._text_210.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_210.appendChild(this._text_210__text);
			this.__div.appendChild(this._text_210);
		} else
		if (hotspot.skinid=='Room_To_Room_2_08') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_To_Room_2_08";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("2_08_out.xml","");
				me.skin._current_selection2.style[domTransition]='none';
				me.skin._current_selection2.ggParameter.rx=120;me.skin._current_selection2.ggParameter.ry=234;
				me.skin._current_selection2.style[domTransform]=parameterToTransform(me.skin._current_selection2.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_19=document.createElement('div');
			this._image_19.ggId="Image 1";
			this._image_19.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_19.ggVisible=true;
			this._image_19.className='ggskin ggskin_image';
			this._image_19.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_19.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_19.setAttribute('style',hs);
			this._image_19__img=document.createElement('img');
			this._image_19__img.className='ggskin ggskin_image';
			this._image_19__img.setAttribute('src',basePath + 'images/image_19.png');
			this._image_19__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_19__img.className='ggskin ggskin_image';
			this._image_19__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_19__img);
			this._image_19.appendChild(this._image_19__img);
			this._image_19.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_19.style[domTransition]='none';
				} else {
					me._image_19.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_19.ggParameter.sx=0.2;me._image_19.ggParameter.sy=0.2;
				me._image_19.style[domTransform]=parameterToTransform(me._image_19.ggParameter);
				flag=(me._text_29.style.visibility=='hidden');
				me._text_29.style[domTransition]='none';
				me._text_29.style.visibility=flag?'inherit':'hidden';
				me._text_29.ggVisible=flag;
			}
			this._image_19.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_19.style[domTransition]='none';
				} else {
					me._image_19.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_19.ggParameter.sx=0.1;me._image_19.ggParameter.sy=0.1;
				me._image_19.style[domTransform]=parameterToTransform(me._image_19.ggParameter);
				flag=(me._text_29.style.visibility=='hidden');
				me._text_29.style[domTransition]='none';
				me._text_29.style.visibility=flag?'inherit':'hidden';
				me._text_29.ggVisible=flag;
			}
			this.__div.appendChild(this._image_19);
			this._text_29=document.createElement('div');
			this._text_29__text=document.createElement('div');
			this._text_29.className='ggskin ggskin_textdiv';
			this._text_29.ggTextDiv=this._text_29__text;
			this._text_29.ggId="Text 2";
			this._text_29.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_29.ggVisible=false;
			this._text_29.className='ggskin ggskin_text';
			this._text_29.ggType='text';
			this._text_29.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_29.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_29__text.setAttribute('style',hs);
			this._text_29.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_29.appendChild(this._text_29__text);
			this.__div.appendChild(this._text_29);
		} else
		if (hotspot.skinid=='Room_Out_2_07') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_2_07";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("Gang 2_06_out.xml","");
				me.skin._current_selection2.style[domTransition]='none';
				me.skin._current_selection2.ggParameter.rx=80;me.skin._current_selection2.ggParameter.ry=155;
				me.skin._current_selection2.style[domTransform]=parameterToTransform(me.skin._current_selection2.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_18=document.createElement('div');
			this._image_18.ggId="Image 1";
			this._image_18.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_18.ggVisible=true;
			this._image_18.className='ggskin ggskin_image';
			this._image_18.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_18.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_18.setAttribute('style',hs);
			this._image_18__img=document.createElement('img');
			this._image_18__img.className='ggskin ggskin_image';
			this._image_18__img.setAttribute('src',basePath + 'images/image_18.png');
			this._image_18__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_18__img.className='ggskin ggskin_image';
			this._image_18__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_18__img);
			this._image_18.appendChild(this._image_18__img);
			this._image_18.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_18.style[domTransition]='none';
				} else {
					me._image_18.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_18.ggParameter.sx=0.2;me._image_18.ggParameter.sy=0.2;
				me._image_18.style[domTransform]=parameterToTransform(me._image_18.ggParameter);
				flag=(me._text_28.style.visibility=='hidden');
				me._text_28.style[domTransition]='none';
				me._text_28.style.visibility=flag?'inherit':'hidden';
				me._text_28.ggVisible=flag;
			}
			this._image_18.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_18.style[domTransition]='none';
				} else {
					me._image_18.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_18.ggParameter.sx=0.1;me._image_18.ggParameter.sy=0.1;
				me._image_18.style[domTransform]=parameterToTransform(me._image_18.ggParameter);
				flag=(me._text_28.style.visibility=='hidden');
				me._text_28.style[domTransition]='none';
				me._text_28.style.visibility=flag?'inherit':'hidden';
				me._text_28.ggVisible=flag;
			}
			this.__div.appendChild(this._image_18);
			this._text_28=document.createElement('div');
			this._text_28__text=document.createElement('div');
			this._text_28.className='ggskin ggskin_textdiv';
			this._text_28.ggTextDiv=this._text_28__text;
			this._text_28.ggId="Text 2";
			this._text_28.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_28.ggVisible=false;
			this._text_28.className='ggskin ggskin_text';
			this._text_28.ggType='text';
			this._text_28.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_28.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_28__text.setAttribute('style',hs);
			this._text_28.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_28.appendChild(this._text_28__text);
			this.__div.appendChild(this._text_28);
		} else
		if (hotspot.skinid=='Room_Out_2_08') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_2_08";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("Gang 2_06_out.xml","");
				me.skin._current_selection2.style[domTransition]='none';
				me.skin._current_selection2.ggParameter.rx=80;me.skin._current_selection2.ggParameter.ry=155;
				me.skin._current_selection2.style[domTransform]=parameterToTransform(me.skin._current_selection2.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_17=document.createElement('div');
			this._image_17.ggId="Image 1";
			this._image_17.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_17.ggVisible=true;
			this._image_17.className='ggskin ggskin_image';
			this._image_17.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_17.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_17.setAttribute('style',hs);
			this._image_17__img=document.createElement('img');
			this._image_17__img.className='ggskin ggskin_image';
			this._image_17__img.setAttribute('src',basePath + 'images/image_17.png');
			this._image_17__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_17__img.className='ggskin ggskin_image';
			this._image_17__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_17__img);
			this._image_17.appendChild(this._image_17__img);
			this._image_17.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_17.style[domTransition]='none';
				} else {
					me._image_17.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_17.ggParameter.sx=0.2;me._image_17.ggParameter.sy=0.2;
				me._image_17.style[domTransform]=parameterToTransform(me._image_17.ggParameter);
				flag=(me._text_27.style.visibility=='hidden');
				me._text_27.style[domTransition]='none';
				me._text_27.style.visibility=flag?'inherit':'hidden';
				me._text_27.ggVisible=flag;
			}
			this._image_17.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_17.style[domTransition]='none';
				} else {
					me._image_17.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_17.ggParameter.sx=0.1;me._image_17.ggParameter.sy=0.1;
				me._image_17.style[domTransform]=parameterToTransform(me._image_17.ggParameter);
				flag=(me._text_27.style.visibility=='hidden');
				me._text_27.style[domTransition]='none';
				me._text_27.style.visibility=flag?'inherit':'hidden';
				me._text_27.ggVisible=flag;
			}
			this.__div.appendChild(this._image_17);
			this._text_27=document.createElement('div');
			this._text_27__text=document.createElement('div');
			this._text_27.className='ggskin ggskin_textdiv';
			this._text_27.ggTextDiv=this._text_27__text;
			this._text_27.ggId="Text 2";
			this._text_27.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_27.ggVisible=false;
			this._text_27.className='ggskin ggskin_text';
			this._text_27.ggType='text';
			this._text_27.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_27.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_27__text.setAttribute('style',hs);
			this._text_27.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_27.appendChild(this._text_27__text);
			this.__div.appendChild(this._text_27);
		} else
		if (hotspot.skinid=='Room_Out_2_11') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_2_11";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("Gang 2_14_out.xml","");
				me.skin._current_selection2.style[domTransition]='none';
				me.skin._current_selection2.ggParameter.rx=528;me.skin._current_selection2.ggParameter.ry=168;
				me.skin._current_selection2.style[domTransform]=parameterToTransform(me.skin._current_selection2.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_16=document.createElement('div');
			this._image_16.ggId="Image 1";
			this._image_16.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_16.ggVisible=true;
			this._image_16.className='ggskin ggskin_image';
			this._image_16.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_16.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_16.setAttribute('style',hs);
			this._image_16__img=document.createElement('img');
			this._image_16__img.className='ggskin ggskin_image';
			this._image_16__img.setAttribute('src',basePath + 'images/image_16.png');
			this._image_16__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_16__img.className='ggskin ggskin_image';
			this._image_16__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_16__img);
			this._image_16.appendChild(this._image_16__img);
			this._image_16.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_16.style[domTransition]='none';
				} else {
					me._image_16.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_16.ggParameter.sx=0.3;me._image_16.ggParameter.sy=0.3;
				me._image_16.style[domTransform]=parameterToTransform(me._image_16.ggParameter);
			}
			this._image_16.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_16.style[domTransition]='none';
				} else {
					me._image_16.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_16.ggParameter.sx=0.2;me._image_16.ggParameter.sy=0.2;
				me._image_16.style[domTransform]=parameterToTransform(me._image_16.ggParameter);
			}
			this.__div.appendChild(this._image_16);
			this._text_26=document.createElement('div');
			this._text_26__text=document.createElement('div');
			this._text_26.className='ggskin ggskin_textdiv';
			this._text_26.ggTextDiv=this._text_26__text;
			this._text_26.ggId="Text 2";
			this._text_26.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_26.ggVisible=false;
			this._text_26.className='ggskin ggskin_text';
			this._text_26.ggType='text';
			this._text_26.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_26.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_26__text.setAttribute('style',hs);
			this._text_26.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_26.appendChild(this._text_26__text);
			this.__div.appendChild(this._text_26);
		} else
		if (hotspot.skinid=='Gang_To_Gang_2_14') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_To_Gang_2_14";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("Gang 2_14_out.xml","");
				me.skin._current_selection2.style[domTransition]='none';
				me.skin._current_selection2.ggParameter.rx=528;me.skin._current_selection2.ggParameter.ry=168;
				me.skin._current_selection2.style[domTransform]=parameterToTransform(me.skin._current_selection2.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_15=document.createElement('div');
			this._image_15.ggId="Image 1";
			this._image_15.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_15.ggVisible=true;
			this._image_15.className='ggskin ggskin_image';
			this._image_15.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_15.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_15.setAttribute('style',hs);
			this._image_15__img=document.createElement('img');
			this._image_15__img.className='ggskin ggskin_image';
			this._image_15__img.setAttribute('src',basePath + 'images/image_15.png');
			this._image_15__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_15__img.className='ggskin ggskin_image';
			this._image_15__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_15__img);
			this._image_15.appendChild(this._image_15__img);
			this._image_15.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_15.style[domTransition]='none';
				} else {
					me._image_15.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_15.ggParameter.sx=0.2;me._image_15.ggParameter.sy=0.2;
				me._image_15.style[domTransform]=parameterToTransform(me._image_15.ggParameter);
				flag=(me._text_25.style.visibility=='hidden');
				me._text_25.style[domTransition]='none';
				me._text_25.style.visibility=flag?'inherit':'hidden';
				me._text_25.ggVisible=flag;
			}
			this._image_15.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_15.style[domTransition]='none';
				} else {
					me._image_15.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_15.ggParameter.sx=0.1;me._image_15.ggParameter.sy=0.1;
				me._image_15.style[domTransform]=parameterToTransform(me._image_15.ggParameter);
				flag=(me._text_25.style.visibility=='hidden');
				me._text_25.style[domTransition]='none';
				me._text_25.style.visibility=flag?'inherit':'hidden';
				me._text_25.ggVisible=flag;
			}
			this.__div.appendChild(this._image_15);
			this._text_25=document.createElement('div');
			this._text_25__text=document.createElement('div');
			this._text_25.className='ggskin ggskin_textdiv';
			this._text_25.ggTextDiv=this._text_25__text;
			this._text_25.ggId="Text 2";
			this._text_25.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_25.ggVisible=false;
			this._text_25.className='ggskin ggskin_text';
			this._text_25.ggType='text';
			this._text_25.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_25.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_25__text.setAttribute('style',hs);
			this._text_25.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_25.appendChild(this._text_25__text);
			this.__div.appendChild(this._text_25);
		} else
		if (hotspot.skinid=='Gang_To_Gang_2_06') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_To_Gang_2_06";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("Gang 2_06_out.xml","");
				me.skin._current_selection2.style[domTransition]='none';
				me.skin._current_selection2.ggParameter.rx=80;me.skin._current_selection2.ggParameter.ry=155;
				me.skin._current_selection2.style[domTransform]=parameterToTransform(me.skin._current_selection2.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_14=document.createElement('div');
			this._image_14.ggId="Image 1";
			this._image_14.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_14.ggVisible=true;
			this._image_14.className='ggskin ggskin_image';
			this._image_14.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_14.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_14.setAttribute('style',hs);
			this._image_14__img=document.createElement('img');
			this._image_14__img.className='ggskin ggskin_image';
			this._image_14__img.setAttribute('src',basePath + 'images/image_14.png');
			this._image_14__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_14__img.className='ggskin ggskin_image';
			this._image_14__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_14__img);
			this._image_14.appendChild(this._image_14__img);
			this._image_14.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_14.style[domTransition]='none';
				} else {
					me._image_14.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_14.ggParameter.sx=0.2;me._image_14.ggParameter.sy=0.2;
				me._image_14.style[domTransform]=parameterToTransform(me._image_14.ggParameter);
				flag=(me._text_24.style.visibility=='hidden');
				me._text_24.style[domTransition]='none';
				me._text_24.style.visibility=flag?'inherit':'hidden';
				me._text_24.ggVisible=flag;
			}
			this._image_14.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_14.style[domTransition]='none';
				} else {
					me._image_14.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_14.ggParameter.sx=0.1;me._image_14.ggParameter.sy=0.1;
				me._image_14.style[domTransform]=parameterToTransform(me._image_14.ggParameter);
				flag=(me._text_24.style.visibility=='hidden');
				me._text_24.style[domTransition]='none';
				me._text_24.style.visibility=flag?'inherit':'hidden';
				me._text_24.ggVisible=flag;
			}
			this.__div.appendChild(this._image_14);
			this._text_24=document.createElement('div');
			this._text_24__text=document.createElement('div');
			this._text_24.className='ggskin ggskin_textdiv';
			this._text_24.ggTextDiv=this._text_24__text;
			this._text_24.ggId="Text 2";
			this._text_24.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_24.ggVisible=false;
			this._text_24.className='ggskin ggskin_text';
			this._text_24.ggType='text';
			this._text_24.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_24.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_24__text.setAttribute('style',hs);
			this._text_24.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_24.appendChild(this._text_24__text);
			this.__div.appendChild(this._text_24);
		} else
		if (hotspot.skinid=='Gang_Aula_To_Room_OGS') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_Aula_To_Room_OGS";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("OGS_out.xml","");
				me.skin._current_selectione.style[domTransition]='none';
				me.skin._current_selectione.ggParameter.rx=112;me.skin._current_selectione.ggParameter.ry=259;
				me.skin._current_selectione.style[domTransform]=parameterToTransform(me.skin._current_selectione.ggParameter);
				me.skin._orientierunge.style[domTransition]='none';
				me.skin._orientierunge.ggParameter.rx=112;me.skin._orientierunge.ggParameter.ry=259;
				me.skin._orientierunge.style[domTransform]=parameterToTransform(me.skin._orientierunge.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_13=document.createElement('div');
			this._image_13.ggId="Image 1";
			this._image_13.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_13.ggVisible=true;
			this._image_13.className='ggskin ggskin_image';
			this._image_13.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_13.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_13.setAttribute('style',hs);
			this._image_13__img=document.createElement('img');
			this._image_13__img.className='ggskin ggskin_image';
			this._image_13__img.setAttribute('src',basePath + 'images/image_13.png');
			this._image_13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_13__img.className='ggskin ggskin_image';
			this._image_13__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_13__img);
			this._image_13.appendChild(this._image_13__img);
			this._image_13.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_13.style[domTransition]='none';
				} else {
					me._image_13.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_13.ggParameter.sx=0.2;me._image_13.ggParameter.sy=0.2;
				me._image_13.style[domTransform]=parameterToTransform(me._image_13.ggParameter);
				flag=(me._text_23.style.visibility=='hidden');
				me._text_23.style[domTransition]='none';
				me._text_23.style.visibility=flag?'inherit':'hidden';
				me._text_23.ggVisible=flag;
			}
			this._image_13.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_13.style[domTransition]='none';
				} else {
					me._image_13.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_13.ggParameter.sx=0.1;me._image_13.ggParameter.sy=0.1;
				me._image_13.style[domTransform]=parameterToTransform(me._image_13.ggParameter);
				flag=(me._text_23.style.visibility=='hidden');
				me._text_23.style[domTransition]='none';
				me._text_23.style.visibility=flag?'inherit':'hidden';
				me._text_23.ggVisible=flag;
			}
			this.__div.appendChild(this._image_13);
			this._text_23=document.createElement('div');
			this._text_23__text=document.createElement('div');
			this._text_23.className='ggskin ggskin_textdiv';
			this._text_23.ggTextDiv=this._text_23__text;
			this._text_23.ggId="Text 2";
			this._text_23.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_23.ggVisible=false;
			this._text_23.className='ggskin ggskin_text';
			this._text_23.ggType='text';
			this._text_23.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_23.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_23__text.setAttribute('style',hs);
			this._text_23.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_23.appendChild(this._text_23__text);
			this.__div.appendChild(this._text_23);
		} else
		if (hotspot.skinid=='Room_Out_OGS') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_OGS";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("Aula_out.xml","");
				me.skin._current_selectione.style[domTransition]='none';
				me.skin._current_selectione.ggParameter.rx=330;me.skin._current_selectione.ggParameter.ry=305;
				me.skin._current_selectione.style[domTransform]=parameterToTransform(me.skin._current_selectione.ggParameter);
				me.skin._orientierunge.style[domTransition]='none';
				me.skin._orientierunge.ggParameter.rx=330;me.skin._orientierunge.ggParameter.ry=305;
				me.skin._orientierunge.style[domTransform]=parameterToTransform(me.skin._orientierunge.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_12=document.createElement('div');
			this._image_12.ggId="Image 1";
			this._image_12.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_12.ggVisible=true;
			this._image_12.className='ggskin ggskin_image';
			this._image_12.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_12.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_12.setAttribute('style',hs);
			this._image_12__img=document.createElement('img');
			this._image_12__img.className='ggskin ggskin_image';
			this._image_12__img.setAttribute('src',basePath + 'images/image_12.png');
			this._image_12__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_12__img.className='ggskin ggskin_image';
			this._image_12__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_12__img);
			this._image_12.appendChild(this._image_12__img);
			this._image_12.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_12.style[domTransition]='none';
				} else {
					me._image_12.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_12.ggParameter.sx=0.2;me._image_12.ggParameter.sy=0.2;
				me._image_12.style[domTransform]=parameterToTransform(me._image_12.ggParameter);
				flag=(me._text_22.style.visibility=='hidden');
				me._text_22.style[domTransition]='none';
				me._text_22.style.visibility=flag?'inherit':'hidden';
				me._text_22.ggVisible=flag;
			}
			this._image_12.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_12.style[domTransition]='none';
				} else {
					me._image_12.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_12.ggParameter.sx=0.1;me._image_12.ggParameter.sy=0.1;
				me._image_12.style[domTransform]=parameterToTransform(me._image_12.ggParameter);
				flag=(me._text_22.style.visibility=='hidden');
				me._text_22.style[domTransition]='none';
				me._text_22.style.visibility=flag?'inherit':'hidden';
				me._text_22.ggVisible=flag;
			}
			this.__div.appendChild(this._image_12);
			this._text_22=document.createElement('div');
			this._text_22__text=document.createElement('div');
			this._text_22.className='ggskin ggskin_textdiv';
			this._text_22.ggTextDiv=this._text_22__text;
			this._text_22.ggId="Text 2";
			this._text_22.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_22.ggVisible=false;
			this._text_22.className='ggskin ggskin_text';
			this._text_22.ggType='text';
			this._text_22.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_22.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_22__text.setAttribute('style',hs);
			this._text_22.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_22.appendChild(this._text_22__text);
			this.__div.appendChild(this._text_22);
		} else
		if (hotspot.skinid=='Room_Out_Turnhalle') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_Turnhalle";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("Aula_out.xml","");
				me.skin._current_selectione.style[domTransition]='none';
				me.skin._current_selectione.ggParameter.rx=330;me.skin._current_selectione.ggParameter.ry=305;
				me.skin._current_selectione.style[domTransform]=parameterToTransform(me.skin._current_selectione.ggParameter);
				me.skin._orientierunge.style[domTransition]='none';
				me.skin._orientierunge.ggParameter.rx=330;me.skin._orientierunge.ggParameter.ry=305;
				me.skin._orientierunge.style[domTransform]=parameterToTransform(me.skin._orientierunge.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_11=document.createElement('div');
			this._image_11.ggId="Image 1";
			this._image_11.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_11.ggVisible=true;
			this._image_11.className='ggskin ggskin_image';
			this._image_11.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_11.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_11.setAttribute('style',hs);
			this._image_11__img=document.createElement('img');
			this._image_11__img.className='ggskin ggskin_image';
			this._image_11__img.setAttribute('src',basePath + 'images/image_11.png');
			this._image_11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_11__img.className='ggskin ggskin_image';
			this._image_11__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_11__img);
			this._image_11.appendChild(this._image_11__img);
			this._image_11.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_11.style[domTransition]='none';
				} else {
					me._image_11.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_11.ggParameter.sx=0.2;me._image_11.ggParameter.sy=0.2;
				me._image_11.style[domTransform]=parameterToTransform(me._image_11.ggParameter);
				flag=(me._text_21.style.visibility=='hidden');
				me._text_21.style[domTransition]='none';
				me._text_21.style.visibility=flag?'inherit':'hidden';
				me._text_21.ggVisible=flag;
			}
			this._image_11.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_11.style[domTransition]='none';
				} else {
					me._image_11.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_11.ggParameter.sx=0.1;me._image_11.ggParameter.sy=0.1;
				me._image_11.style[domTransform]=parameterToTransform(me._image_11.ggParameter);
				flag=(me._text_21.style.visibility=='hidden');
				me._text_21.style[domTransition]='none';
				me._text_21.style.visibility=flag?'inherit':'hidden';
				me._text_21.ggVisible=flag;
			}
			this.__div.appendChild(this._image_11);
			this._text_21=document.createElement('div');
			this._text_21__text=document.createElement('div');
			this._text_21.className='ggskin ggskin_textdiv';
			this._text_21.ggTextDiv=this._text_21__text;
			this._text_21.ggId="Text 2";
			this._text_21.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_21.ggVisible=false;
			this._text_21.className='ggskin ggskin_text';
			this._text_21.ggType='text';
			this._text_21.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_21.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_21__text.setAttribute('style',hs);
			this._text_21.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_21.appendChild(this._text_21__text);
			this.__div.appendChild(this._text_21);
		} else
		if (hotspot.skinid=='Gang_0_24_To_Gang_Aula') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_0_24_To_Gang_Aula";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("Aula_out.xml","");
				me.skin._current_selectione.style[domTransition]='none';
				me.skin._current_selectione.ggParameter.rx=330;me.skin._current_selectione.ggParameter.ry=305;
				me.skin._current_selectione.style[domTransform]=parameterToTransform(me.skin._current_selectione.ggParameter);
				me.skin._orientierunge.style[domTransition]='none';
				me.skin._orientierunge.ggParameter.rx=330;me.skin._orientierunge.ggParameter.ry=305;
				me.skin._orientierunge.style[domTransform]=parameterToTransform(me.skin._orientierunge.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_10=document.createElement('div');
			this._image_10.ggId="Image 1";
			this._image_10.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_10.ggVisible=true;
			this._image_10.className='ggskin ggskin_image';
			this._image_10.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_10.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_10.setAttribute('style',hs);
			this._image_10__img=document.createElement('img');
			this._image_10__img.className='ggskin ggskin_image';
			this._image_10__img.setAttribute('src',basePath + 'images/image_10.png');
			this._image_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_10__img.className='ggskin ggskin_image';
			this._image_10__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_10__img);
			this._image_10.appendChild(this._image_10__img);
			this._image_10.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_10.style[domTransition]='none';
				} else {
					me._image_10.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_10.ggParameter.sx=0.2;me._image_10.ggParameter.sy=0.2;
				me._image_10.style[domTransform]=parameterToTransform(me._image_10.ggParameter);
				flag=(me._text_20.style.visibility=='hidden');
				me._text_20.style[domTransition]='none';
				me._text_20.style.visibility=flag?'inherit':'hidden';
				me._text_20.ggVisible=flag;
			}
			this._image_10.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_10.style[domTransition]='none';
				} else {
					me._image_10.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_10.ggParameter.sx=0.1;me._image_10.ggParameter.sy=0.1;
				me._image_10.style[domTransform]=parameterToTransform(me._image_10.ggParameter);
				flag=(me._text_20.style.visibility=='hidden');
				me._text_20.style[domTransition]='none';
				me._text_20.style.visibility=flag?'inherit':'hidden';
				me._text_20.ggVisible=flag;
			}
			this.__div.appendChild(this._image_10);
			this._text_20=document.createElement('div');
			this._text_20__text=document.createElement('div');
			this._text_20.className='ggskin ggskin_textdiv';
			this._text_20.ggTextDiv=this._text_20__text;
			this._text_20.ggId="Text 2";
			this._text_20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_20.ggVisible=false;
			this._text_20.className='ggskin ggskin_text';
			this._text_20.ggType='text';
			this._text_20.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_20.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_20__text.setAttribute('style',hs);
			this._text_20.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_20.appendChild(this._text_20__text);
			this.__div.appendChild(this._text_20);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_Aula_To_Gang_0_24";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("Gang 0_24_out.xml","");
				me.skin._current_selectione.style[domTransition]='none';
				me.skin._current_selectione.ggParameter.rx=659;me.skin._current_selectione.ggParameter.ry=261;
				me.skin._current_selectione.style[domTransform]=parameterToTransform(me.skin._current_selectione.ggParameter);
				me.skin._orientierunge.style[domTransition]='none';
				me.skin._orientierunge.ggParameter.rx=659;me.skin._orientierunge.ggParameter.ry=261;
				me.skin._orientierunge.style[domTransform]=parameterToTransform(me.skin._orientierunge.ggParameter);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_1=document.createElement('div');
			this._image_1.ggId="Image 1";
			this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_1.ggVisible=true;
			this._image_1.className='ggskin ggskin_image';
			this._image_1.ggType='image';
			hs ='position:absolute;';
			hs+='left: -257px;';
			hs+='top:  -269px;';
			hs+='width: 512px;';
			hs+='height: 512px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_1.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_1.setAttribute('style',hs);
			this._image_1__img=document.createElement('img');
			this._image_1__img.className='ggskin ggskin_image';
			this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
			this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_1__img.className='ggskin ggskin_image';
			this._image_1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_1__img);
			this._image_1.appendChild(this._image_1__img);
			this._image_1.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_1.style[domTransition]='none';
				} else {
					me._image_1.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_1.ggParameter.sx=0.2;me._image_1.ggParameter.sy=0.2;
				me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
				flag=(me._text_2.style.visibility=='hidden');
				me._text_2.style[domTransition]='none';
				me._text_2.style.visibility=flag?'inherit':'hidden';
				me._text_2.ggVisible=flag;
			}
			this._image_1.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_1.style[domTransition]='none';
				} else {
					me._image_1.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_1.ggParameter.sx=0.1;me._image_1.ggParameter.sy=0.1;
				me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
				flag=(me._text_2.style.visibility=='hidden');
				me._text_2.style[domTransition]='none';
				me._text_2.style.visibility=flag?'inherit':'hidden';
				me._text_2.ggVisible=flag;
			}
			this.__div.appendChild(this._image_1);
			this._text_2=document.createElement('div');
			this._text_2__text=document.createElement('div');
			this._text_2.className='ggskin ggskin_textdiv';
			this._text_2.ggTextDiv=this._text_2__text;
			this._text_2.ggId="Text 2";
			this._text_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_2.ggVisible=false;
			this._text_2.className='ggskin ggskin_text';
			this._text_2.ggType='text';
			this._text_2.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_2.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_2__text.setAttribute('style',hs);
			this._text_2.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_2.appendChild(this._text_2__text);
			this.__div.appendChild(this._text_2);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};