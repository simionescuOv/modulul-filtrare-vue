<template>
     <div>
                                       
        <div class='container'>
        <ul class='row'>
            <li v-for="(ao,k) in pOLI">{{k}} 
                <ul class='col'>
                                                           
                    <li v-for="(o,i) in ao">
                        <div v-on:click='comutatBifat(k,o.nume)'>
                            <span class='glyphicon' 
                                  v-bind:class=" o.bifat ? 'glyphicon-check' : 'glyphicon-unchecked' "
                                 ></span>
                            <span>{{o.nume}}</span>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
            <br>
        </div>
       
    </div>
</template>
<script>
export default {
    props:['pOLI'],
    data(){
        return{

        }
    },
    methods:{
        
    }
}
</script>
<style scoped>

</style>
