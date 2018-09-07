<template><div>
    <meniufs></meniufs>
    <listafiltre v-bind:pOLF='filtre'>
    </listafiltre>
 <!--   <listaitems v-bind:pOLI='filtre.OLItems'></listaitems>
-->
</div></template>

<script>
// Imports
import Rcmfs from './components/cMeniuFS.vue'; // component meniu filtrare/sortare
import Rclf from './components/cListaFiltre.vue';
//import Rcli from './components/cListaItems.vue';

export default {
    components: {
        'meniufs': Rcmfs, // referinta la componenta meniu filtrare/sortare
        'listafiltre': Rclf,
       // 'listaitems': Rcli
    },
    data () {
        return {
            
            filtre:instanta
            ,
        }
    },
    created(){
       this.staioleacabre=true
        //filtre:fApp
        
            //<li v-for="(ao,k) in pOLF.orezViuu">{{k}}  {{' - ( 
    },
    methods: {
      
    }
}

</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>

 
