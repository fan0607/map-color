(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function a(n="map-color",{contrast:t=123,brightness:o=80,saturate:s=200,sepia:e=120,invert:r=100,hue:i=360}={}){const l=document.createElement("style");l.innerHTML=`
    .${n}{
        filter: contrast(${t}%) brightness(${o}%) saturate(${s}%) sepia(${e}%) invert(${r}%) hue-rotate(${i}deg);
    }`;const u=document.getElementsByTagName("head");for(let c=0;c<u.length;c++)u[c].appendChild(l.cloneNode(!0))}function d(n,t={contrast:123,brightness:80,saturate:200,sepia:120,invert:100,hue:360}){console.log("GUIMapColor: ",d),a(n,t);for(let o in t)f(o)}function f(n="myRange"){var t=document.getElementById(n),o=document.getElementById(`demo-${n}`);t&&o&&(o.innerHTML=t.value),t&&o&&(t.oninput=function(){o.innerHTML=this.value,a("map-color",{[n]:this.value})})}d();
