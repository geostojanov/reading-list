import { ref } from 'vue'

// firebase imports
import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

// refs
const user = ref(auth.currentUser)

// auth changes right here
onAuthStateChanged(auth, (_user) => {
  console.info('User state changed. Current user is: ', _user)
  user.value = _user
})

const getUser = () => {
  return { user }
}

export default getUser