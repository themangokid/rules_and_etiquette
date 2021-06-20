<template>
<div>
<button class="mx-5 my-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-00 rounded shadow" @click='google_sign_out'> Sign out</button>
<div class="my-5 bg-gray-50">
   <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class= "my-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
         <span class="block">The rules and etiquette</span>
         <span class="block text-purple-600">for lessons at NTI</span>
      </h2>

   </div>
</div>

<!-- END -->
<div class="flex justify-center">

<!-- Checklist -->
<div class="flex items-center justify-center ">
   <div class="flex flex-col px-6 py-8 bg-white shadow-lg">
      <h1 class="mb-2 font-extrabold text-gray-800 leading-10 text-3xl">Rules and regulations to a better <br/> school environment for all. </h1>
      <h2 class="text-xl ">You have accepted the rules and regulations.</h2>
      <ul class="flex flex-col space-y-4 text-gray-900">
         <div v-if="accepted != true">
         <form @submit.prevent="accept">
              <div class="my-4 bg-purple-100 border-l-4 border-purple-300 rounded-md w-full px-6 py-4 cursor-pointer">
                  <label class="inline-flex items-center mt-3">
                      <input type="checkbox" class="form-checkbox h-5 w-5 text-pink-600" required><span class="ml-2 text-gray-700">
                        Inlämningar python</span>
                  </label>
              </div>
            <div class="my-4 bg-purple-100 border-l-4 border-purple-300 rounded-md w-full px-6 py-4 ">
              
                                <ul class="list-style-type: disc;">

<img style="width:600px; height:500px;" src="https://miro.medium.com/max/3600/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="asdf">



<li><p>Lämna in repot via github</p>
</li>
<li><p>Om jag eller du skickar en fil via discord är det en back up</p>
</li>
<li><p>Om mitt system/dator eller ert system/dator sedan kraschar då kollar vi den filen</p>
</li>
</ul>
<ul>
<li><p>Det är endast sista uppgiten som är betygsgrundande i kursolle</p>
</li>
<li><p>Döp alla mappar / repon:</p>
</li>
<li><p>uppgiftsnamn_för_efternamn</p>
</li>
</ul>
<ul>
<li><p>uppgiftsnamn</p>
</li>
<li><p>moment0X.ipynb</p>
</li>
<li><p>moment0X.py</p>
</li>
</ul>
            </div>
              <div class="my-4 bg-purple-100 border-l-4 border-purple-300 rounded-md w-full px-6 py-4 cursor-pointer">
                  <label class="inline-flex items-center mt-3">
                      <input type="checkbox" class="form-checkbox h-5 w-5 text-pink-600" required><span class="ml-2 text-gray-700">Inlämningar webbutveckling</span>
                  </label>
              </div>
              <ul>
<li><p>main/</p>
</li>
<li><p>bootstrap</p>
</li>
<li><p>sass</p>
</li>
<li><p>index.html</p>
</li>
<li><p>style.css</p>
</li>
<li><p>img/</p>
</li>
<li><p>img1.png</p>
</li>
<li><p>img2.png</p>
</li>
</ul>

              <div class="my-4 bg-purple-100 border-l-4 border-purple-300 rounded-md w-full px-6 py-4 cursor-pointer">
                  <label class="inline-flex items-center mt-3">
                      <input type="checkbox" class="form-checkbox h-5 w-5 text-pink-600" required><span class="ml-2 text-gray-700">Filer, program, filtyper</span>
                  </label>
              </div>
              <ul>
<li><p>För att konvertera använd</p>
</li>
<li><p>pandoc<a href="https://pandoc.org/installing.html">https://pandoc.org/installing.html</a></p>
</li>
<li><p><a href="https://github.com/jgm/pandoc/releases/tag/2.13">https://github.com/jgm/pandoc/releases/tag/2.13</a></p>
</li>
</ul>
<ul>
<li><p>Du ska kunna öppna alla slags zippade filer</p>
</li>
<li><p>Keka</p>
</li>
<li><p>7zip</p>
</li>
</ul>
<ul>
<li>Godkända filer att använda i kursen:</li>
</ul>
<ul>
<li><p>.pdf</p>
</li>
<li><p>.png</p>
</li>
<li><p>.mkv</p>
</li>
<li><p>.mp4</p>
</li>
<li><p>.tex</p>
</li>
<li><p>.md</p>
</li>
<li><p>.html</p>
</li>
<li><p>.ogg</p>
</li>
<li><p>.mp3</p>
</li>
<li><p>.webm</p>
</li>
</ul>
<ul>
<li>.svg</li>
</ul>

              
              <div class="my-4 bg-purple-100 border-l-4 border-purple-300 rounded-md w-full px-6 py-4 cursor-pointer">
                  <label class="inline-flex items-center mt-3">
                      <input type="checkbox" class="form-checkbox h-5 w-5 text-pink-600" required><span class="ml-2 text-gray-700">Lektioner</span>
                  </label>
              </div>
              <ul>
<li><p>Att klara kursen är ditt och endast ditt egna ansvar</p>
</li>
<li><p>Om ni vill ha hjälp</p>
</li>
<li><p>Livestream:a</p>
</li>
<li><p>Se till att ha försökt själva</p>
</li>
<li><p>Ta en printscreen och skicka med en vettig kommentar</p>
</li>
<li><p>Vänta på din tur</p>
</li>
</ul>

              <div class="my-4 bg-purple-100 border-l-4 border-purple-300 rounded-md w-full px-6 py-4 cursor-pointer">
                  <label class="inline-flex items-center mt-3">
                      <input type="checkbox" class="form-checkbox h-5 w-5 text-pink-600" required><span class="ml-2 text-gray-700">Ordningsregler</span>
                  </label>
              </div>
              <ul>
<li><p>Skriv endast ett meddelande direkt till mig om</p>
</li>
<li><p>Jag skriver till dig</p>
</li>
<li><p>Det är något privat som sjukdom/tandläkare</p>
</li>
<li><p>Annars blir du mute:ad i ca 2-3 timmar</p>
</li>
</ul>
<ul>
<li><p>Om man stör kan man utanförvarning bli:</p>
</li>
<li><p>Mute:ad</p>
</li>
<li><p>Kickad från server</p>
</li>
</ul>
<ul>
<li><p>Stream:as det något olämpligt:</p>
</li>
<li><p>4-dagar ban</p>
</li>
<li><p>Rektorssamtal</p>
</li>
</ul>

              <div class="my-4 bg-purple-100 border-l-4 border-purple-300 rounded-md w-full px-6 py-4 cursor-pointer">
                  <label class="inline-flex items-center mt-3">
                      <input type="checkbox" class="form-checkbox h-5 w-5 text-pink-600" required><span class="ml-2 text-gray-700">Gaming</span>
                  </label>
              </div>
              <ul>
<li><p>Om och endast om man är klar med alla uppgifter</p>
</li>
<li><p>Endast spelet Soldat är tillåtet</p>
</li>
<li><p>Om man inte kodar det själv</p>
</li>
</ul>
<ul>
<li><p>Om man är klar med alla uppgifter och vinner över mig i en 1on1 får man gå ifrån lektionen</p>
</li>
<li><p>AFK kills räknas ej</p>
</li>
<li><p>gg, gl hf</p>
</li>
</ul>
<ul>
<li><p>Server #1: 138.201.55.232:25140</p>
</li>
<li><p>Server #2: 138.201.55.232:25160</p>
</li>
</ul>

              
              <button  class="my-4 bg-green-100 border-l-4 border-green-300 rounded-md w-full px-6 py-4 font-semibold border border-gray-400 rounded shadow"> 
                  
                   <h2> I agree to the terms and rules of this class </h2>
              </button>
                          
        </form>
        </div> <!--- end v-if  accepted --->
         </ul>
   </div>
   </div>
</div>
</div>


</template>

<script>
import firebase from 'firebase'
import db from "../main.js"
import { ref } from '@vue/reactivity'

export default {
  name: 'Home',
  setup (){
    const accepted = ref(false)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
            db.collection('users').doc(firebase.auth().currentUser.uid).get().then(doc => {
                accepted.value = doc.data().accepted
                console.log(accepted.value)
            })
      
      } else {
        // Everything inside here happens if user is not signed in
      }
    });


    const google_sign_out = () => {
      firebase.auth().signOut().then(() => {
        console.log('sign out')
      })
    }

    const accept = () => {
      db.collection('users').doc(firebase.auth().currentUser.uid).set({
          accepted: true
        })
      accepted.value = true

    }

  return {
      google_sign_out,
      accept,
      accepted,
    }
  }
}

</script>

