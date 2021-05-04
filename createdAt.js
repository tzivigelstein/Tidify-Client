import firebase from './firebase'

export default async function createdAT() {
  const p = await firebase.db.collection('products').get()

  const arr = p.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id,
    }
  })

  arr.forEach(doc =>
    firebase.db
      .collection('products')
      .doc(doc.id)
      .update({ createdAt: Date.now() })
  )
}
