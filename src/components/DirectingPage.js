import { useEffect } from 'react'
import { db, increment } from '../containers/Firebase'

export default function DirectingPage ({ match }) {
  const name = match.params.name

  useEffect(() => {
    const ref = db.collection('urls')

    ref
      .where('shortId', '==', name)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          const urlRef = db.collection('urls').doc(doc.id)
          urlRef.update({ visits: increment })
          window.location = doc.data().url
        })
      })
      .catch(error => console.log('Error getting documents: ', error))
  })

  return null
}
