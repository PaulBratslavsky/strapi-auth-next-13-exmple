import React from 'react'

export default function ProfileDynamicRoute({ params } : { params: { id: string } }) {
  return (
    <div>Dynamic Route: {params.id} </div>
  )
}
