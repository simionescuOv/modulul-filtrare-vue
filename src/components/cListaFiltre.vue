<template>
 <div>                               
   <div class='container'>
    <ul class='row'>
      <li v-for="(ao,k) in pOLF.objRezultat">{{k}}  {{' - ( '+pOLF.fApp.okav.fDisp[k].length+' )'}}
        <ul class='col'>                          
         <li v-for="(o,i) in ao">
            <div v-on:click='comutatBifat(k,o.numele)'
                 v-bind:class=" o.dezactivat ? 'estompat' : '' "
                 >
                <span class='glyphicon' 
                      v-bind:class="o.bifat ? 'glyphicon-check' : 'glyphicon-unchecked'"
                     ></span>
                <span>{{o.numele}}</span>
            </div>
         </li>
        </ul>
      </li>
    </ul>
         <!--   <br>
                                        <div>
                                                {{pOLF.ist_F.d}}
                                        </div>  
                                        <div>
                                                {{pOLF.oFiltre.o}}
                                        </div>   
                                        <div>
                                                {{pOLF.aiLItems}}
                                        </div> 
        
            <br>
       
         <ul class='row'>
            <li v-for="(ao,k) in oRandareLF">{{k}} 
                <ul class='farap col'>                       
                        <li v-for="(o,i) in ao">
                            <span>{{o.nume}}</span>
                        </li>
                </ul>
            </li>
         </ul>
        -->
  </div>
</div>
    
</template>
<script>
export default {
    props:['pOLF'],
    data(){
        return{}
    },
    created(){    
       
       // this.transformOLFinOlfBifat()
    },
    methods:{
      /*  transformOLFinOlfBifat:function(){
            this.oRandareLF=okaoDate(this.argOkaoDate)
            this.hopa=true
        }, */
        comutatBifat:function(k,v){
         //   this.pOLF.adaugFiltru(k,v)
          //  this.transformOLFinOlfBifat()
            
            //this.pOLF.addFiltru(k,v)
            this.pOLF.fUser(k,v)
        }
        ,claseleGlyph:function(o){
            let r
                ,rBifat=o.bifat ? 'glyphicon-check' : 'glyphicon-unchecked'
                ,rDezactivat=o.dezactivat ? 'glyphicon-remove' : ''
            if (o.dezactivat) r=rDezactivat
            else r=rBifat
            return r
            
            /*
 v-bind:class=" o.bifat ? 'glyphicon-check' : 'glyphicon-unchecked' "
<li v-for="(ao,k) in pOLF.objRezultat">{{k}}  {{' - ( '+ao.length+' )'}}
*/
        }
       
    }
    
  
}

</script>
<style scoped>
    ul.farap{
    padding: 15px 10px;
}
    .estompat{
        color: red;
        opacity: 0.4;
    }
</style>




