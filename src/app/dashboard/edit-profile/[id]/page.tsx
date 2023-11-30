'use client'
import { getKidProfile, getPetProfile } from '@/app/dashboard/profile/utils'
import EditKidProfile from '@/components/edit-profile/edit-child-profile'
import EditPetProfile from '@/components/edit-profile/edit-pet-profile'

interface Params {
  id: string
}

interface ProfileProps {
  params: Params
}

export default async function Profile ({ params }: ProfileProps) {
  const profileId = params.id
  const kidProfile = await getKidProfile(profileId)
  if (kidProfile) {
    return <EditKidProfile profile={kidProfile} />
  }
  const petProfile = await getPetProfile(profileId)
  if (petProfile) {
    return <EditPetProfile profile={petProfile} />
  }
  return (
    <section className='p-4'>
      Profile not found
    </section>
  )
}
