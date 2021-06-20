<template>
<div class=" mx-5 flex justify-center">
    <button class="mx-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" @click="google_sign_in"> Sign with google </button>
</div>
</template>



<script>
import firebase from 'firebase'

export default {
  name: 'Home',
  setup (){
    const google_sign_in = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(() => { 
        console.log('signed in')
      })
    }
  return {
      google_sign_in
    }
  }
}
</script>