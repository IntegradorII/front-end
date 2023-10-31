import { getKidProfile, getPetProfile } from '@/app/dashboard/profile/utils'
import { KidProfile } from '@/components/profile/kid-profile'

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
    return <KidProfile profile={kidProfile} />
  }
  const petProfile = await getPetProfile(profileId)
  if (petProfile) {
    return <div>Pet Profile</div>
  }
  return (
    <section className='p-4'>
      Profile not found
    </section>
  )
}
