
Array.prototype.oKunicateVidx = function(){
	var n = {},
        r={};
	for(var i = 0; i < this.length; i++) {
		if (!n[this[i]]) 
                {
                    n[this[i]] = true; 
                    r[this[i]]=[]
                }	
        r[this[i]].push(i) //next
    }
	return r;
}
Array.prototype.unique2 = function(){
	var n = {},r=[];
	for(var i = 0; i < this.length; i++)
	{
		if (!n[this[i]])
		{
			n[this[i]] = true;
			r.push(this[i]);
		}
	}
	return r;
}

function arr2intersectare(a1,a2){
     if (a1.length==0) {return a2}
    if (a2.length==0) {return a1}
	var ar=[],as=[],al=[]
    if (a1.length<a2.length) {
                    as=a1
                    al=a2
        } else {
            as=a2
            al=a1
        }
	
    for (var i=0;i<as.length;i++){
        for (var j=0;j<al.length;j++){
            if (al[j]==as[i]){
               ar.push(as[i])
                break;
            }
        }
    }
    return ar
}
function arr2Filtrare(aToate,aScoate){
   var arez=aToate
     aScoate.forEach(function(es){
        arez=arez.filter(function(et){
            return et!=es
        })
        
    })
    return arez
}
function arr2FiltrareDOI(aToate,aScoate){
    return aToate.filter(function(e){
            return aScoate.indexOf(e)==-1
       })
}
function vArrAdifB(o){}
function obj2intersectare(o1,o2){//01 si o2 de tip okav | orez va avea arrKey==arrKey(o1)
    var orez={}
        ,v1,v2
    for (var k in o1){
            v1=o1[k]
            if (o2[k]!=undefined){//if exista k si in o2
                v2=o2[k]
                orez[k]=arr2intersectare(v1,v2)
            }
    }
    return orez
}
function okavAdifB(oA,oB){//okavAdifB - prin ce este okavA(un obiect de tip okav) diferit de okavB //return k:av unde v exista in oA{k:av} dar nu exista in oB{k:av} ex: oA={tip:[camasa,geaca],culoare:[portocaliu]} ; oB={tip:[bluza,camasa,geaca],culoare:[portocaliu]} ; oRez={tip:[geaca]}
    var orez={}
        ,ava,avb,ar
    for (var k in oA){
            ava=oA[k]
            if (oB[k]!=undefined){//if exista k si in o2
                avb=oB[k]
                ar=arr2FiltrareDOI(ava,avb)
                if (ar.length>0) orez[k]=ar
            }
    }
    return orez
}

Array.prototype.obUniceIdx = function(){//returneaza un obiect de tip okuvai  - k(valori unice):arr[idx]
	var exista = {}
        ,oRez={}
        ,e //elem crt
	for(var i = 0; i < this.length; i++) {
        e=this[i]
		if (!exista[e]) {
                    exista[e] = true
                    oRez[e]=[]
        }	
        oRez[e].push(i) //next
    }
	return oRez;
} //(similar cu oKunicateVidx)
Array.prototype.arrUnice = function(){//return un arr cu valorile unice ale arr initial
    var oExista = {}
        ,aRez=[]
        ,e //elem crt
	for(var i = 0; i < this.length; i++) {
        e=this[i]
		if (!oExista[e]) {
                    oExista[e] = true
                    aRez.push(e)
        }
    }
	return aRez
} //(similar cu unique2)
Array.prototype.adgElmUnic = function(e){//adauga elm in arr daca nu exista deja
    var exista=false
	for(var i = 0; i < this.length; i++) {
        if (e==this[i]){
                       exista=true
                       break;
        }
    }
    if (!exista) this.push(e)
}
Array.prototype.anteriorV=function(v){
     var exista=false
         ,idx
	for(var i = 0; i < this.length; i++) {
        if (e==this[i]){
                       exista=true
                       idx=i    
                       break;
        }
    }
   // if (!exista)||
}
Array.prototype.comuta = function(e){
    var exista=false
	for(var i = 0; i < this.length; i++) {
        if (e==this[i]){
                       this.splice(i,1)
                       exista=true
        }
    }
    if (!exista) this.push(e)
}



function sortOkav(okav){
    let orez={}
    for (let k in okav){
            orez[k]=okav[k].sort()
    }
    return orez
}
function okavu(){ // clasa okavu - obiect de tip k:arr[valori Unice];
    //this.o={}
}
okavu.prototype={
    adauga:function(k,v){
        if (this[k]) {
            if (this[k].indexOf(v)==-1) this[k].push(v)
            else return false
        }
        else {
              this[k]=[] 
              this[k].push(v)
             }
        return true
    }
    ,scoate:function(k,v){              
         var idx=this[k].indexOf(v)
             ,exista=(idx!=-1)
        if (exista) this[k].splice(idx,1)
         else return exista
    }
    ,comuta:function(k,v){
        var adaugat=this.adauga(k,v)
        if (!adaugat) this.scoate(k,v)
        return adaugat
        
    }
}
function avu(){ //clasa care preia date:string si le adauga doar odata(.adauga) sau le elimina (.scoate) - arai cu valori unice
    this.d=[]
   
}
avu.prototype={
    adauga:function(e){
        var nuE=this.d.indexOf(e)==-1
            
        if (nuE) { //daca nu exista, il adauga
                    this.d.push(e)
                    return true
        }
        
    }
    ,scoate:function(e){
        var idx=this.d.indexOf(e)
        if (idx!=-1) {  this.d.splice(idx,1) }
    }
    ,comuta:function(e){
        var adaugat=this.adauga(e)
        if (!adaugat) this.scoate(e)
        
        
    }
}

function okavu_vch(){ // clasa okavu - obiect de tip k:arr[valori Unice];
    this.o={}
}
okavu_vch.prototype={
    adauga:function(k,v){
        if (this.o[k]) {
            if (this.o[k].indexOf(v)==-1) this.o[k].push(v)
            else return false
        }
        else {
              this.o[k]=[] 
              this.o[k].push(v)
             }
        return true
    }
    ,scoate:function(k,v){              
         var idx=this.o[k].indexOf(v)
             ,exista=(idx!=-1)
        if (exista) this.o[k].splice(idx,1)
         else return exista
    }
    ,comuta:function(k,v){
        var adaugat=this.adauga(k,v)
        if (!adaugat) this.scoate(k,v)
        
    }
}
function avu_vch(){ //clasa care preia date:string si le adauga doar odata(.adauga) sau le elimina (.scoate) - arai cu valori unice
    this.d=[]
   
}
avu_vch.prototype={
    adauga:function(e){
        var nuE=this.d.indexOf(e)==-1
            
        if (nuE) { //daca nu exista, il adauga
                    this.d.push(e)
                    return true
        }
        
    }
    ,scoate:function(e){
        var idx=this.d.indexOf(e)
        if (idx!=-1) {  this.d.splice(idx,1) }
    }
    ,comuta:function(e){
        var adaugat=this.adauga(e)
        if (!adaugat) this.scoate(e)
        
    }
}

function doarVcomune(o,ok){ // o si ok trebuie sa fie object:okav 
    var orez={}
    for (var k in ok){
        if (ok[k].length!=0){
                    orez[k]=arr2intersectare(o[k],ok[k])
        }    
    }
    return orez
}
function actualizOb(obCuNoutati,obTinta){
    for (var k in obCuNoutati){
        obTinta[k]=obCuNoutati[k]
    }
    return obTinta
}

var dateHaine113={
   "nArt":["ponpon.gc.clopot","ponpon.gc.clopot","ponpon.gc.clopot","ponpon.gc.clopot","ponpon.gc.clopot","ponpon.gc.clopot","ponpon.gc.clopot","motz.caciula","motz.caciula","motz.caciula","motz.caciula","812 LianBang.gc","812 LianBang.gc","812 LianBang.gc","812 LianBang.gc","812 LianBang.gc","8805aripi.gc","8805aripi.gc","8805aripi.gc","8805aripi.gc","oyn.subtire.gc","oyn.subtire.gc","oyn.subtire.gc","oyn.subtire.gc","oyn.subtire.gc","oyn.subtire.gc","oyn.subtire.gc","oyn.subtire.gc","oyn.subtire.gc","sina.ses.cdg","sina.ses.cdg","sina.ses.cdg","sina.ses.cdg","sina.ses.cdg","sina.ses.cdg","sina.ses.cdg","7113oyn.scurt.gc","7113oyn.scurt.gc","7113oyn.scurt.gc","7113oyn.scurt.gc","7113oyn.scurt.gc","7113oyn.scurt.gc","7113oyn.scurt.gc","buric.dieMore.plv","buric.dieMore.plv","buric.dieMore.plv","kuy.fermoar.gros","kuy.fermoar.gros","kuy.fermoar.gros","kuy.fermoar.gros","kuy.fermoar.gros","kuy.fermoar.gros","brugederie.blz","brugederie.blz","brugederie.blz","brugederie.blz","brugederie.blz","brugederie.blz","brugederie.blz","brugederie.blz","emoticon.trc","emoticon.trc","emoticon.trc","emoticon.trc","emoticon.trc","emoticon.trc","emoticon.trc","emoticon.trc","emoticon.trc","emoticon.trc","emoticon.trc","mrPink.cms","mrPink.cms","mrPink.cms","mrPink.cms","mrPink.cms","mrPink.cms","mrPink.cms","mrPink.cms","mrPink.cms","mrPink.cms","mrPink.cms","mrPink.cms","mrPink.cms","azda.cms","azda.cms","azda.cms","azda.cms","azda.cms","azda.cms","azda.cms","azda.cms","azda.cms","azda.cms","azda.cms","azda.cms","azda.cms","azda.cms","azda.cms","lipstick.cdg","lipstick.cdg","lipstick.cdg","lipstick.cdg","lipstick.cdg","lipstick.cdg","lipstick.cdg","lipstick.cdg","lipstick.cdg","lipstick.cdg","lipstick.cdg","lipstick.cdg","lipstick.cdg","lipstick.cdg","lipstick.cdg"],
   "codA":[1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],
   "color":["rosu","rosu","rosu","verde","verde","verde","mov","alb","gri","sclipici.negru","sclipici.gri","roz","roz","negru","negru","negru","verde","verde","mov","mov","gri","gri","gri","negru","negru","negru","galben","galben","galben","visiniu","visiniu","griDeschis","griDeschis","maron","maron","maron","crem","crem","galben","galben","roz","roz","roz","roz","roz","roz","crem","crem","crem","bleumarin","bleumarin","bleumarin","portocaliu","portocaliu","portocaliu","portocaliu","distorsionat","estompat","estompat","fistichiu","hialuriu","hialuriu","hialuriu","jeguliu","jeguliu","jeguliu","kkniu","kkniu","lucios","lucios","lucios","galben","galben","galben","maron","maron","crem","crem","crem","visiniu","visiniu","visiniu","negru","negru","maron","maron","maron","fistichiu","fistichiu","fistichiu","fistichiu","crem","crem","alb","alb","alb","portocaliu","portocaliu","portocaliu","jeguliu","jeguliu","jeguliu","hialuriu","hialuriu","hialuriu","lucios","lucios","lucios","mov","mov","mov","verde","portocaliu","portocaliu"],
   "size":["small","medium","large","medium","XL","2XL","large","oneSize","oneSize","oneSize","oneSize","medium","large","small","medium","large","small","medium","small","medium","XL","2XL","3XL","XL","2XL","3XL","XL","2XL","3XL","36","38","36","38","36","38","40","small","medium","small","medium","small","medium","large","oneSize","oneSize","oneSize","small","medium","large","small","medium","large","small","medium","large","XL","XL","medium","large","small","small","small","small","small","small","small","small","small","small","small","small","36","38","42","40","42","36","38","40","38","40","42","42","44","small","medium","large","36","40","44","46","small","large","medium","large","XL","2XL","medium","small","medium","large","2XL","36","38","40","116","118","120","small","medium","large","oneSize","34","36"],
   "sezon":["iarna","iarna","iarna","iarna","iarna","iarna","iarna","iarna","iarna","iarna","iarna","iarna","iarna","iarna","iarna","iarna","iarna","iarna","iarna","iarna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","iarna","iarna","iarna","iarna","iarna","iarna","iarna","toamna","toamna","toamna","iarna","iarna","iarna","iarna","iarna","iarna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","vara","vara","vara","vara","vara","vara","vara","vara","vara","vara","vara","vara","vara","vara","vara","vara","vara","vara","vara","vara","vara","vara","vara","vara","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna","toamna"],
   "tipP":["geaca","geaca","geaca","geaca","geaca","geaca","geaca","caciula","caciula","caciula","caciula","geaca","geaca","geaca","geaca","geaca","geaca","geaca","geaca","geaca","geaca","geaca","geaca","geaca","geaca","geaca","geaca","geaca","geaca","grosCardigan","grosCardigan","grosCardigan","grosCardigan","grosCardigan","grosCardigan","grosCardigan","geaca","geaca","geaca","geaca","geaca","geaca","geaca","plover","plover","plover","geaca","geaca","geaca","geaca","geaca","geaca","bluza","bluza","bluza","bluza","bluza","bluza","bluza","bluza","tricou","tricou","tricou","tricou","tricou","tricou","tricou","tricou","tricou","tricou","tricou","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","camasa","cardigan","cardigan","cardigan","cardigan","cardigan","cardigan","cardigan","cardigan","cardigan","cardigan","cardigan","cardigan","cardigan","cardigan","cardigan"],
   "randul":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114]
}
var bd18ian={
   "nume":["Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Stavros","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Freddie","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","Whitney","George","George","George","George","George","George","George","George","George","George","George","George","George","George"],
   "culori":["pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","pink","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","maron","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","negru","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","alb","negru","negru","negru","negru","negru","negru","negru","negru","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","siclam","crem","crem","crem","crem","crem","crem","crem","crem","crem","crem","crem","crem","crem","crem","crem","crem","rosu","rosu","rosu","rosu","rosu","rosu","rosu","rosu","rosu","rosu","rosu","rosu","rosu","rosu"],
   "luna":["noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","august","august","august","august","august","august","august","august","august","august","august","august","august","august","august","august","august","august","august","august","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","august","august","august","august","august","august","august","august","august","august","august","august","august","august","august","august","august","august","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","noiembrie","august","august","august","august","august","august","august","august","august","august","august","august","august","august","februarie","februarie","februarie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","decembrie","martie","martie","martie","martie","martie","martie","martie","martie","martie","martie","august","august","august","august","august","august","august","august","august","august","august","august","august","februarie","februarie","februarie","februarie","februarie","februarie","februarie","februarie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","septembrie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","ianuarie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","octombrie","august","august","august","august","august","august","august","august","august","august","decembrie","decembrie","decembrie","decembrie"],
   "orase":["medias","medias","medias","paris","paris","paris","istanbul","istanbul","istanbul","firenze","firenze","firenze","firenze","firenze","ankara","ankara","ankara","ankara","deva","deva","deva","deva","deva","deva","istanbul","istanbul","istanbul","istanbul","istanbul","sibiu","sibiu","sibiu","sibiu","sibiu","nice","nice","nice","nice","firenze","firenze","firenze","firenze","hamburg","hamburg","hamburg","hamburg","hamburg","roma","roma","roma","roma","roma","paris","paris","paris","paris","paris","nice","nice","nice","nice","istanbul","istanbul","istanbul","istanbul","istanbul","firenze","firenze","firenze","firenze","paris","paris","paris","paris","paris","ankara","ankara","ankara","ankara","ankara","viena","viena","viena","viena","viena","viena","hamburg","hamburg","hamburg","hamburg","hamburg","istanbul","istanbul","istanbul","istanbul","istanbul","medias","medias","medias","medias","cluj","cluj","cluj","cluj","deva","deva","deva","deva","medias","medias","medias","istanbul","istanbul","istanbul","istanbul","firenze","firenze","firenze","firenze","firenze","cluj","cluj","cluj","nice","nice","nice","nice","brasov","brasov","brasov","brasov","brasov","deva","deva","deva","deva","hamburg","hamburg","hamburg","firenze","firenze","firenze","firenze","medias","medias","medias","medias","ankara","ankara","ankara","istanbul","istanbul","istanbul","istanbul","istanbul","deva","deva","deva","deva","firenze","firenze","firenze","firenze","medias","medias","medias","medias","hamburg","hamburg","hamburg","hamburg","hamburg","deva","deva","deva","deva","deva","cluj","cluj","cluj","cluj","brasov","brasov","brasov","istanbul","istanbul","istanbul","istanbul","istanbul","deva","deva","deva","deva","ankara","ankara","ankara","ankara","paris","paris","paris","paris","medias","medias","medias","medias","istanbul","istanbul","istanbul","deva","deva","deva","deva","hamburg","hamburg","hamburg","hamburg","hamburg","hamburg","firenze","firenze","firenze","firenze","cluj","hamburg","hamburg","hamburg","hamburg","hamburg","firenze","firenze","firenze","firenze","firenze","firenze","firenze","firenze","firenze","deva","deva","deva","deva","paris","paris","paris","paris","viena","viena","viena","viena","brasov","brasov","brasov","brasov","brasov","brasov","istanbul","istanbul","istanbul","cluj","cluj","cluj","cluj","medias","medias","medias","medias","firenze","firenze","firenze","ankara","ankara","ankara","deva","deva","deva","deva","deva","brasov","brasov","brasov","brasov","hamburg","hamburg","hamburg","paris","paris","nice","nice","nice","istanbul","istanbul","istanbul","roma","roma","roma","roma","medias","firenze","firenze","firenze","firenze","firenze","paris","paris","paris","paris","paris","paris","paris","paris","paris","deva","deva","deva","hamburg","hamburg","hamburg","hamburg","istanbul","istanbul","istanbul","istanbul","deva","deva","deva","deva","cluj","cluj","cluj","cluj","hamburg","hamburg","hamburg","hamburg","medias","medias","medias","medias","istanbul","istanbul","firenze","firenze","firenze","hamburg","hamburg","hamburg","hamburg","medias","medias","medias","medias","istanbul","istanbul","istanbul","paris","paris","paris","hamburg","hamburg","hamburg","hamburg","cluj","cluj","medias","medias","medias","sibiu","sibiu","sibiu","viena","viena","viena","roma","roma","roma","roma","ankara","ankara","ankara","istanbul","istanbul","istanbul","istanbul","medias","medias","medias","cluj","cluj","cluj","roma","roma","medias","medias","istanbul","istanbul","istanbul","istanbul","paris","paris","paris","paris","istanbul","istanbul","istanbul","medias","medias","medias","medias","deva","deva","deva","firenze","firenze","firenze","hamburg","hamburg","hamburg","nice","nice","nice","nice","nice","paris","paris","paris","paris","hamburg","hamburg","hamburg","hamburg","medias","medias","medias","deva","deva","deva","cluj","cluj","cluj","cluj","brasov","brasov","brasov","brasov"],
   "country":["maroc","italia","turcia","slovacia","olanda","polonia","germania","austria","romania","maroc","olanda","slovacia","turcia","polonia","austria","romania","germania","olanda","maroc","olanda","austria","maroc","romania","polonia","romania","slovacia","austria","olanda","turcia","turcia","polonia","maroc","italia","franta","germania","romania","olanda","italia","maroc","germania","franta","italia","turcia","maroc","slovacia","austria","romania","italia","germania","olanda","franta","romania","maroc","austria","turcia","slovacia","franta","romania","franta","italia","olanda","austria","germania","polonia","maroc","italia","olanda","slovacia","franta","germania","romania","italia","polonia","olanda","franta","maroc","slovacia","olanda","polonia","romania","germania","polonia","slovacia","franta","turcia","italia","romania","maroc","turcia","slovacia","olanda","germania","polonia","olanda","italia","franta","austria","olanda","romania","franta","austria","slovacia","maroc","italia","franta","turcia","romania","maroc","germania","italia","franta","olanda","polonia","germania","austria","slovacia","turcia","italia","franta","olanda","austria","slovacia","franta","polonia","romania","turcia","germania","austria","olanda","romania","italia","franta","slovacia","maroc","italia","olanda","polonia","maroc","romania","olanda","germania","turcia","franta","austria","polonia","maroc","franta","austria","olanda","turcia","romania","austria","polonia","franta","italia","germania","maroc","franta","romania","italia","turcia","polonia","romania","polonia","austria","slovacia","olanda","italia","maroc","olanda","franta","polonia","austria","italia","slovacia","polonia","germania","franta","slovacia","austria","romania","olanda","franta","romania","maroc","italia","polonia","slovacia","olanda","austria","germania","slovacia","romania","turcia","olanda","franta","polonia","romania","italia","austria","olanda","germania","slovacia","italia","polonia","austria","maroc","franta","turcia","polonia","slovacia","olanda","romania","franta","germania","italia","polonia","austria","romania","turcia","olanda","franta","slovacia","olanda","romania","austria","slovacia","polonia","olanda","maroc","italia","turcia","franta","polonia","franta","slovacia","austria","maroc","romania","olanda","polonia","germania","turcia","olanda","austria","slovacia","romania","polonia","germania","maroc","italia","franta","austria","polonia","turcia","slovacia","olanda","romania","franta","turcia","italia","germania","maroc","slovacia","olanda","polonia","franta","germania","italia","slovacia","austria","maroc","romania","polonia","franta","olanda","italia","germania","turcia","franta","slovacia","polonia","romania","austria","italia","germania","slovacia","franta","olanda","romania","polonia","maroc","turcia","italia","germania","franta","olanda","austria","slovacia","polonia","italia","franta","romania","franta","austria","olanda","slovacia","romania","maroc","slovacia","austria","italia","olanda","slovacia","olanda","turcia","romania","maroc","franta","italia","austria","slovacia","germania","turcia","maroc","franta","polonia","italia","franta","romania","germania","austria","romania","polonia","olanda","maroc","slovacia","turcia","italia","germania","polonia","slovacia","germania","austria","romania","olanda","turcia","austria","franta","germania","polonia","maroc","italia","turcia","olanda","slovacia","romania","germania","italia","polonia","turcia","romania","franta","austria","slovacia","maroc","italia","olanda","slovacia","austria","romania","italia","germania","austria","olanda","italia","slovacia","germania","turcia","polonia","franta","italia","romania","austria","germania","franta","turcia","olanda","slovacia","polonia","romania","turcia","polonia","germania","franta","slovacia","austria","slovacia","polonia","austria","olanda","romania","germania","maroc","olanda","franta","italia","slovacia","polonia","austria","slovacia","maroc","olanda","austria","turcia","maroc","olanda","slovacia","polonia","romania","austria","germania","turcia","italia","slovacia","polonia","germania","romania","maroc","turcia","austria","slovacia","olanda","italia","franta","polonia","olanda","franta","romania","germania","italia","slovacia","polonia","austria"]
}

/*
function ffi2(od){   //clasa ffi - filtrare folosind intersectare - ian 2018 
    this.tabelUser=od
   this.aktu=Object.keys(od)   // arrkey tabel user 
    this.bzDate=this.cldOkkvu(od)//baza de date
   this.aitu=[] //arridx tabel user  
    this.setAiTU()
    
//begin filtre  
    //this.akFU=['nume','culori','country','orase','luna']
    this.akFU=['tipP','color','size','sezon']// arrK filtre user
    this.OakfuValide={}
    this.akLI=['nArt','codA','color','size','sezon','tipP']                               
    this.crtTabel={}//tabelul initial - crtTabel ar trebui sa fie recladirea lui od   - deoarece mai tarziu in aceasta clasa se va primi ca argument direct bzDate si nu od
    this.oLF={}
    this.olfGol={}
    this.initOLF()
    this.oLFinitial=this.oLF
    
    this.aiLF=[]         
    this.aifDisponibil=[]
    this.aifAles=[]

   // this.oKVf=[] //ob cu 2k -> ao:arr cu obiecte kv-filtre ex: {k:'tipP',v:'geaca'} ; 
    this.oFiltre=new okavu_vch()
    this.oAiK={}
                for (var i=0; i<this.akFU.length; i++) { // cladesc obiectu oAiK initial (gol)
                            this.oAiK[this.akFU[i]]=[]
                }
    
    this.OLItems={}
    this.aiLItems=[]
    
    this.kAnterior=''
    
    this.ist_F=new avu_vch() //istoric filtre
}
ffi2.prototype={
    // OLF - obiectul cu lista filtre ( obiect de tip okav) | ex: OLF={culoare:['alb','negru','mov'],masura:['small','medium','large']}
    initOLF:function(){ 
        this.crtTabel=this.getTabel(this.akFU,this.aitu,this.bzDate)
        this.oLF=this.getUnicate(this.crtTabel)
        this.sorteazaOLF()
    }
    ,setAiTU:function(){
        var lung=this.tabelUser[this.aktu[0]].length
        for (var i=0; i<lung; i++){
            this.aitu.push(i)
        }
    }
    ,cldOkkvu:function(okav){
        var oRez={}
            ,ak=Object.keys(okav)
        ak.forEach(function(e){
            oRez[e]=okav[e].oKunicateVidx()
            })
        return oRez 
    }
    ,getUnicate:function(okav){
        var oRez={}
            ,ak=Object.keys(okav)
        ak.forEach(function(e){
            oRez[e]=okav[e].unique2()
            })
        return oRez 
    }
    ,getTabel:function(ak,ai,od,rt){ //od - obiectul cu datele de tip okkvu | rt - root table (tabel user)
        var date=od
            ,tabel=rt
            ,j=0,xx;
        if (tabel==undefined) tabel={}
        
        for (var i=0; i<ak.length; i++){  
                tabel[ak[i]]=[]
        }
        while (j<ai.length){    
            for (var i=0; i<ak.length; i++){  
                for (var k in date[ak[i]]) {
                    xx=date[ak[i]][k].some(function(e,i){
                    return (e==ai[j]) 
                    })
                    if (xx) {
                        tabel[ak[i]].push(k)
                        if (i==ak.length-1) j++;
                        break;
                    }
                }
            }
        }
   return tabel;
    }//getTabel
    ,getAiBzDate:function(k,v){
        var ai=this.bzDate[k][v]
        return ai
    }
                                              //pana aici copiate din clasa vuk
    ,adaugFiltru:function(k,v){
         this.setFiltru(k,v)
         this.setAiK(k,v)
         this.setAiLItems()
         this.OakfuValide=this.getOLFak(this.akFU,this.aiLItems)
        if (this.aiLItems.length==0) {
            this.oLF=this.oLFinitial
        }else {
            this.setAiLF_3(k)
            this.setOLItems()
            this.oFiltre.o=this.filtrareValidare()
            this.oLF=this.olfGol
        }
        this.sorteazaOLF()
        
    }
    ,setFiltru:function(k,v){
        var  ak=[]
             ,exista
        
        this.oFiltre.comuta(k,v)
        ak=this.oFiltre.o[k]
        exista=ak.indexOf(v)!=-1
        if (ak.length==0) {
                delete this.oFiltre.o[k]
        }
        if (exista) {//nu exista k:arr[v]
                            this.ist_F.adauga(k)
        }else{
            if (ak.length==0) this.ist_F.scoate(k)
        }
        
    }
    ,setAiK:function(k){ // calculeaza ai pt toate filtrele din obiectul cu filtrele bifate de user
        
        var ak=this.oFiltre.o[k]
            ,arrR=[] // arr rezultat
            ,aiKbzd=[] //ai - araiul de indexi adus din bzdate[k]
            ,asta=this
        
            ak.forEach(function(v){
                aiKbzd=asta.getAiBzDate(k,v)
                arrR=aiKbzd.concat(arrR)
            })
        
            this.oAiK[k]=arrR
           
    }
    ,oAiKintersect:function(ak){ // return un arrIdx == intersectia k[v] din oAiK
        var kCrt=this.oAiK[ak[0]]
            ,kUrm=[]
            ,kTmp=[]
        
        for (var i=1;i<ak.length;i++){
            kUrm=this.oAiK[ak[i]]
            if (kUrm.length>0){
                kTmp=arr2intersectare(kUrm,kCrt)
                kCrt=kTmp
            }
        }
       return kCrt  
    }
    ,setAiLItems:function(){
        this.aiLItems=this.oAiKintersect(this.akFU)
    }
    
               ,intersectOaiKfaraKasta:function(kAsta){
        var ak=Object.keys(this.oAiK)
            ,akf=ak.filter(function(e){
                            return e!=kAsta
                })
        return this.oAiKintersect(akf)
    }
    ,setOLItems:function(){
        this.OLItems=this.getOLFak(this.akLI,this.aiLItems)
    }
    ,getOb_akFU_AiItems:function(){
        var orez=this.getOLFak(this.akFU,this.aiLItems)
        return orez
    }
    ,getOLF_K:function(k,ai){
        var tabel=this.getTabel([k],ai,this.bzDate)
            ,orez=this.getUnicate(tabel)
        return orez[k]
    }
    ,getOLFak:function(ak,ai){
        var tabel=this.getTabel(ak,ai,this.bzDate)
            ,orez=this.getUnicate(tabel)
        return orez
    }
    ,filtrareValidare:function(){
        var orez=obj2intersectare(this.oFiltre.o,this.OakfuValide)
        return orez
    }
    ,resetOLFgol:function(){
        this.olfGol={}
    }
    ,umpleOLFgol:function(ai){
        var aista=this
            ,akgol=Object.keys(this.olfGol)
            ,aku=arr2Filtrare(this.akFU,akgol)
        aku.forEach(function(k){          //todo: de modificat prin apelare this.getTabel(ak,ai,bzdate)
            aista.olfGol[k]=aista.getOLF_K(k,ai)
        })
    }
    ,setAiLF_3:function(k){
        var ak=this.ist_F.d 
            ,ik=ak.indexOf(k)
            //,iUltimK=ak.length-1
           // ,vUltimK=ak[iUltimK] // kCrt
            ,aik=this.oAiK[k]
            ,kCrt//,ka
            ,iCrt
            ,olfk={}
            ,aifDisponibil=[],aifDisponibilAnterior,aifKuriAnterioare
            ,aifAles,aifCrt
            //,arrk,airestu
        this.resetOLFgol()
    for (var i=0;i<ak.length;i++){
            kCrt=ak[i]
            iCrt=i
            if (i==0){
                this.olfGol[kCrt]=this.oLFinitial[kCrt]
                aifCrt=this.oAiK[kCrt]
                aifAles=arr2intersectare(aifCrt,aifDisponibil)
                aifKuriAnterioare=aifAles
                                   // aiKanterior=arr2intersectare(this.aifAles,this.aifDisponibil)
                                   // this.umpleOLFgol(aiKanterior) 
                
            }
            else {
                //ka=ak[i-1]
                
                aifDisponibilAnterior=aifDisponibil
                aifDisponibil=aifAles
               
                aifCrt=this.oAiK[kCrt]
                aifAles=arr2intersectare(aifCrt,aifDisponibil)
               
              aifKuriAnterioare=arr2intersectare(aifCrt,aifDisponibilAnterior)
         
            }//else
        }//for
         if (ak.length>1){
             this.resetOLFgol()
             olfk=this.getOLF_K(kCrt,aifDisponibil)
             this.olfGol[kCrt]=olfk                  
                                                  //0     1       2
             for (var i=iCrt-1;i>-1;i--){   //tip  culoare marime  / length=3
                 kCrt=ak[i]
                  olfk=this.getOLF_K(kCrt,aifKuriAnterioare)
                  this.olfGol[kCrt]=olfk                       
             }
         }
     this.umpleOLFgol(aifAles) 
        
    }//setAiLF_3
    ,sorteazaOLF:function(){
        var olfSortat={}
        for (var k in this.oLF){
            olfSortat[k]=this.oLF[k].sort()
        }
        this.oLF=olfSortat
    }
   
}
*/

var okaoDate=function(oArg){
    var d=oArg.datele
        ,di=d.initial
       ,kk=oArg.keile
       ,ko=oArg.kOrdinea
       ,ak=ko.okav
       ,aku=ko.kDate
       ,arrv=[]
       ,ovi=kk.initial // obiectul keile.initial care este elementul araiului ao
       ,ov={}
       ,orez={}
       ,n=oArg.dValoarek // 'nume':valoare
        ,iv=0
       
    //cladesc orez pe baza datele.initial

        ak.forEach(function(vk){
              arrv=di[vk]
                if (orez[vk]==undefined) orez[vk]=[]
              arrv.forEach(function(v,i){
                ovi[n]=v
                orez[vk].push(Object.assign({},ovi))
              }) 
        })
 
    
    aku.forEach(function(kd){
        for (var ktipp in d[kd]){
            arrv=d[kd][ktipp]
            arrv.forEach(function(v){
                iv=di[ktipp].indexOf(v)
                if (iv!=-1){
                   actualizOb(kk[kd],orez[ktipp][iv])
                }
                
            })
        }
    })
    
    return orez
}


function mFiltrare(okav){//modulul de filtrare cu date intrare = obiect okav
    this.tabelUser=okav
    this.aktu=[]// arrkey tabel user 
    this.aitu=[] //arridx tabel user 
    this.bzDate={}//baza de date
    this.akFU=[]
   // this.akFU=['nume','culori','country','orase','luna']
   // this.akFU=['tipP','color','size','sezon']// arrK filtre user
       //this.akLI=['nArt','codA','color','size','sezon','tipP'] 
    
    this.fDispInitial={}
    
    this.fDisp={}//(oLF)ob cu filtrele disponibile calculate pe baza user.input(ce va fi folosit pt view)
    this.fAles=new okavu() //(oFiltre)ob cu filtele alese de user
    this.aiLItems
    
   this.hkf=[] //(ist_F)istoric K filtre
    
    this.oAiAles={}//ob cu arrIdx pt fiecare k[v0,v1...]
    this.oAIdisponibil={}
    this.orez
    this.reset=false
   // this.init()
    
    
}
mFiltrare.prototype={
    cld_kuObUniceIdx:function(okav){//retuneaza ob={k:{Kunic:arr[idx]}} (ku-key unice;arr[idx]-arr cu idx) - cld_kuObUniceIdx cladesc ob cu ku (key din tabel user) , fiecare ku fiind un obiect cu ob[k] - valorile unice de pe fiecare coloana din tabel(ku[x]) iar ob[k][v] fiind un arrIdx - arai cu indexi unde apare fiecare k inn coloana
        var oRez={}
            ,ak=this.aktu=Object.keys(okav) //cladesc aktu
        ak.forEach(function(e){
            oRez[e]=okav[e].obUniceIdx()
            })
        return oRez 
    }
    ,init:function(){
        this.bzDate=this.cld_kuObUniceIdx(this.tabelUser)
        var lung=this.tabelUser[this.aktu[0]].length
        for (let i=0; i<lung; i++){
            this.aitu.push(i) // cladesc aitu
        }
        this.setFdispInitial()
        this.fDisp=this.fDispInitial
        this.sortFdisp()
    }
    ,setFdispInitial:function(){
        var obd=this.bzDate
            ,orez={}
            ,avu=[]
        this.akFU.forEach(function(e){
            for (let k in obd[e]){
                avu.push(k)
            }
            orez[e]=avu
            avu=[]
        })
       
        this.fDispInitial=orez
    }
    ,getTabel:function(ak,ai){
        var d=this.bzDate
            ,bzDate=this.bzDate
            ,okav//=bzDate[k]
            ,vai//arr cu idx care este v al lui okav
            ,gasit
            ,orez={}
        ak.forEach(function(k){
            orez[k]=[]
            okav=d[k]
            ai.forEach(function(eai){
                for(var v in okav){
                        vai=bzDate[k][v]
                        gasit=vai.some(function(e){
                            return eai==e
                        })
                        if (gasit){
                                orez[k].push(v)
                                break;
                            }
                }
            })
        })
        return orez
    }//getTabel_DOI
    ,getUnicate:function(okav){
        var oRez={}
            ,ak=Object.keys(okav)
        ak.forEach(function(e){
            oRez[e]=okav[e].arrUnice()
            })
        return oRez 
    }
    ,getOvu:function(ak,ai){//(getOLFak)return ob de tip okav cu valorile unice ale tabelului determinat de ak-arr de key, si ai-arr de idx
        var tabel=this.getTabel(ak,ai)
            ,orez=this.getUnicate(tabel)
        return orez
    }
    ,getKovu:function(k,ai){//(getOLFak)return ob de tip okav cu valorile unice ale tabelului determinat de ak-arr de key, si ai-arr de idx
        var tabel=this.getTabel([k],ai)
            ,orez=this.getUnicate(tabel)
        return orez[k]
    }
    ,getAiBzDate:function(k,v){
        var ai=this.bzDate[k][v]
        return ai
    }
    ,setObjAiAles:function(k){ // calculeaza ai pt toate filtrele din obiectul cu filtrele bifate de user (this.fAles)
        var ak=this.fAles[k]
            ,aRez=[] // arr rezultat
            ,aiKbzd=[] //ai - araiul de indexi adus din bzdate{k:v}
            ,asta=this
        
            ak.forEach(function(v){
                aiKbzd=asta.getAiBzDate(k,v)
                aRez=aiKbzd.concat(aRez)
            })
        
            this.oAiAles[k]=aRez//fostul oAiK
           
    }
    
    ,getIntersectOaiAles:function(){ //(oAiKintersect) return un arrIdx == intersectia tuturor k[v] din oAiAles
        var oAiAles=this.oAiAles
            ,ank=Object.keys(oAiAles)//arr cu numele k-urilor lui oAiAles
            ,ank0=ank[0]
            ,ankf=ank.filter(function(e){return e!=ank0})
            ,kCrt=oAiAles[ank0]
            ,kUrm=[],kTmp=[]
        ankf.forEach(function(e){
            kUrm=oAiAles[e]
            kTmp=arr2intersectare(kUrm,kCrt)
            kCrt=kTmp
        })
        return kCrt 
    }
    ,sortFdisp:function(){
        this.fDisp=sortOkav(this.fDisp)
    }
   ,adaugFiltru:function(k,v){
       
            this.setFiltru(k,v)
            if (this.reset){
                    this.fDisp=this.fDispInitial
                    this.reset=false
            }
            else{
                this.aiLItems=this.getIntersectOaiAles()
                this.setFdisponibil(k)
                this.sortFdisp()
            }
       
        
        
    }
    ,setFiltru:function(k,v){
        var hkf=this.hkf
            ,fa=this.fAles
            ,adaugat=fa.comuta(k,v)
        if (fa[k].length==0){//sa golit de filtre K-ul
                hkf.splice(hkf.indexOf(k),1) 
                delete fa[k]
                delete this.oAiAles[k]
            if (hkf.length==0) this.reset=true
        }
        else {
            hkf.adgElmUnic(k)
            this.setObjAiAles(k)
        }
    }
    ,setFdisponibil:function(){
        let hkf=this.hkf
            ,kZero=hkf[0]
            ,orez={}
        ,oAIdisponibil={}
        ,aista=this
        
        function minim2(){
            let arrFaraK=[]
                ,arrCelelalte=[]
            
            hkf.forEach(function(k){
                arrFaraK=hkf.filter(e => {return e!=k})
                oAIdisponibil[k]=aista.getIntersectAIak(arrFaraK) 
            })
            arrCelelalte=aista.akFU.filter(function(k){
                return oAIdisponibil[k]==undefined
            })
            arrCelelalte.forEach(function(k){
                oAIdisponibil[k]=aista.aiLItems
            })
            for (let k in oAIdisponibil){
                orez[k]=aista.getKovu(k,oAIdisponibil[k])
            }

        }
        
        if (hkf.length>1){ 
                minim2()
        }
        else {
            let ak=this.akFU.filter(e => { return e!=kZero })
                ,aiKzero=this.oAiAles[kZero]
            
            orez=this.getOvu(ak,aiKzero) 
            orez[kZero]=this.fDispInitial[kZero]
        }
        
        this.fDisp=orez
    }
        ,getAIk:function(k){
                    return this.oAiAles[k]
        }
    ,getIntersectAIak:function(arrKey){
        return this.getAIintersect(this.setOkavOaiAles(arrKey))
    }
    ,setOkavOaiAles:function(arrKey){
    //intersecteaza toate arrays din key-le lui oAiAles construit pe baza lui [arrKey]=ex=[tipP,color,size]    
        let orez={}
            ,oAiAles=this.oAiAles
        arrKey.forEach(function(e){
            orez[e]=oAiAles[e]
        })
        return orez
    }
    ,getAIintersect(okav){
        let ak=Object.keys(okav)//arr cu numele k-urilor lui okav
            ,ak0=ak[0]
            ,akf=ak.filter(function(e){return e!=ak0})
            ,aiCrt=okav[ak0]
            ,aiUrm=[],aiTmp=[]
            akf.forEach(function(e){
                aiUrm=okav[e]
                aiTmp=arr2intersectare(aiUrm,aiCrt)
                aiCrt=aiTmp
            })
        return aiCrt 
    }
}

function okaoActualiz(oConfig){
    this.kConfig=oConfig.kConfig
    this.kActualizare=oConfig.kActualizare
    this.oMaster
    this.orez
}
okaoActualiz.prototype={
    rInitial:function(oMaster,arrKactualiz){
        this.oMaster=oMaster
        var ak=Object.keys(oMaster)
            ,kc=this.kConfig
            ,orez=this.orez={}
            ,arrv
            ,oe={}//ob elem crt - care va popula arrObj - orez[k]
        
        this.kActualizare.forEach(function(e,i){
            oe[e]=arrKactualiz[i]
        })
        ak.forEach(function(k){
            orez[k]=[]
            arrv=oMaster[k]
            arrv.forEach(function(v){
                oe[kc]=v
                orez[k].push(Object.assign({},oe))
            })
        })
    }
    ,rActualiz:function(oActualiz,key,valoare){
         var ak=Object.keys(oActualiz)
             ,aKactz=this.kActualizare//arr cu key de actualiz:['bifat','dezactivat']
             ,oMaster=this.oMaster
             ,orez=this.orez
             ,koA,idx
             ,oe={}//v din arr[obj]
         ak.forEach(function(k){
             koA=oActualiz[k]
             if (oMaster[k]) {
                koA.forEach(function(v){
                   idx=oMaster[k].indexOf(v) 
                   if (idx!=-1){        
                    oe=orez[k][idx]
                    oe[key]=valoare
                   }
                })    
             }
         })
    }
}






function okaoActualiz_Doi(okavMaster,oCfg){
    this.oCfg=oCfg
    this.kConfig=oCfg.configurare.kConfig
    this.kActualizare=oCfg.configurare.kActualizare
    this.okavMaster=okavMaster
    this.oAOmaster// obj master arr[{},{},..,{}]
    this.oAOrez // obj return
    this.reset()
    
}
okaoActualiz_Doi.prototype={
    reset:function(){// cladeste oAOmaster cu toate oe - arr[oe={bifat:false,dezacivat:false}]
       this.oAOmaster=this.rInitializare([false,false]) 
       this.oAOrez=this.oAOmaster
    }
    ,start:function(k,v){
       this.oAOmaster=this.rInitializare(this.oCfg.vRinitial)
        
    }// toate oe={bifat:false,dezactivat:true}
    ,rInitializare:function(arrKactualiz){  // render initializare
                          //return - obj de tip arr[{obj}..{obj}] care va fi cladit
        let oMaster=this.okavMaster
            ,ak=Object.keys(oMaster)
            ,kc=this.kConfig
            ,orez={}
            ,arrv
            ,oe={}//ob elem crt - care va popula arrObj - orez[k]
        
        this.kActualizare.forEach(function(e,i){
            oe[e]=arrKactualiz[i]
        })//cladesc oe={bifat:false,dezactivat:false}
        ak.forEach(function(k){
            orez[k]=[]
            arrv=oMaster[k]
            arrv.forEach(function(v){
                oe[kc]=v
                orez[k].push(Object.assign({},oe))
            })//cladesc oAOrez=[oe+oe[numele]=v]
        })
        return orez
    }
 
    ,rActualiz:function(oActualiz,key,valoare){
         var ak=Object.keys(oActualiz)
             ,aKactz=this.kActualizare//arr cu key de actualiz:['bifat','dezactivat']
             ,okav=this.okavMaster
             ,orez=this.oAOrez
             ,koA,idx
             ,oe={}//v din arr[obj]
         ak.forEach(function(k){
             koA=oActualiz[k]
             if (okav[k]) {
                koA.forEach(function(v){
                   idx=okav[k].indexOf(v) 
                   if (idx!=-1){        
                    oe=orez[k][idx]
                    oe[key]=valoare
                   }
                })    
             }
         }) 
    }
  
}





function filtreApp(tabel,arrKey){
    this.okav=new mFiltrare(tabel)
    this.okav.akFU=arrKey
    this.okav.init()
    this.okaoViuu //okaoActualiz
    this.oCfg
    //this.orezViuu={}
    this.orezViuu={}//=this.okaoViuu.oAOrez
            this.dezactivat={}
        this.primaOara=true
}
filtreApp.prototype={
    oConfig:function(oCfg){
      this.oCfg=oCfg  
      this.okaoViuu=new okaoActualiz_Doi(this.okav.fDispInitial,oCfg)
      this.exportare()
    }
    
    ,actualizare:function(){ 
        this.okaoViuu.rInitial(this.okav.fDisp,this.oCfg.vRinitial)  
        this.okaoViuu.rActualiz(this.okav.fAles,'bifat',true) 
        this.okaoViuu.rActualiz(this.dezactivat,'dezactivat',true)
        this.ordAkFU()
        
    }
    ,actualizare_Doi:function(){ 
        let ov=this.okaoViuu
        ov.oAOrez=JSON.parse(JSON.stringify(ov.oAOmaster))
       
         ov.rActualiz(this.okav.fAles,'bifat',true) 
         ov.rActualiz(this.okav.fDisp,'dezactivat',false)
        
    }
   
    ,addFiltru:function(k,v){
        if (this.okav.fDisp[k].indexOf(v)!=-1){
            this.okav.adaugFiltru(k,v)
            if (this.primaOara) {
                    this.okaoViuu.start()
                    this.primaOara=false
            }
            this.actualizare_Doi()
            this.exportare()
        }
     
    }
    ,exportare:function(){
         this.ordAkFU()
    }
    ,ordAkFU:function(){//odoneaza k lui orez conform akFU 
        let rezOkao=this.okaoViuu.oAOrez
            ,orez=this.orezViuu
        this.okav.akFU.forEach(function(k){
              orez[k]=rezOkao[k]
        })
        
    }
    
}

//----------------------------------------------------------------------------

//var //uKeyF=['nume','culori','country','orase','luna']
    //,fApp=new filtreApp(bd18ian,uKeyF)
  /*  uKeyF=['tipP','color','size','sezon']
    ,fApp=new filtreApp(dateHaine113,uKeyF)
    ,cfg={
        configurare:{
            kConfig:'numele'
            ,kActualizare:['bifat','dezactivat']
        }
        ,vRinitial:[false,false] // valori randare initiala a orez:ao - obiectul rezultat de tip arr[obj]
    }
    ,cfg_Doi={
        configurare:{
            kConfig:'numele'
            ,kActualizare:['bifat','dezactivat']
        }
        ,vRinitial:[false,true] // valori randare initiala a orez:ao - obiectul rezultat de tip arr[obj] 
        // inital toate obj-item din arr de obj (oAO) va avea {dezactivat:true}
    }
        //fApp.oConfig(cfg)
    fApp.oConfig(cfg_Doi)
*/


function vueViuu(){
    this.fApp=new filtreApp(dateHaine113,['tipP','color','size','sezon'])
    const cfg_Doi={
        configurare:{
            kConfig:'numele'
            ,kActualizare:['bifat','dezactivat']
        }
        ,vRinitial:[false,true] // valori randare initiala a orez:ao - obiectul rezultat de tip arr[obj] 
        // inital toate obj-item din arr de obj (oAO) va avea {dezactivat:true}
    }
    this.fApp.oConfig(cfg_Doi)
    this.objRezultat=this.fApp.orezViuu
}
vueViuu.prototype={
    fUser:function(k,v){
       this.fApp.addFiltru(k,v)
    }
}

var instanta=new vueViuu()


let  stai="naibii odata"

