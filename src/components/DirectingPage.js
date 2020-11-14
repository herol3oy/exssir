import { useEffect } from 'react'
import { db, increment } from '../firebase/config'
import { Helmet } from 'react-helmet'

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
          window.location = doc.data().longURL
        })
      })
      .catch(error => console.log('Error getting documents: ', error))
  })

  return (<Helmet><title>‌</title></Helmet>)
}
