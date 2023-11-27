interface ProfilesBarProps {
  length: number
  selected: number
}

const ProfilesBar = ({ length, selected }: ProfilesBarProps) => {
  return (
    <div className='flex gap-1'>
      {Array.from({ length }).map((_, index) => (
        <div key={index}
          className={` ${selected === index ? 'profiles-bar-full' : 'profiles-bar-empty'}`}></div>
        // <div className='profiles-bar-full'></div>
        // <div className='profiles-bar-empty'></div>
      ))}
    </div>
  )
}

export { ProfilesBar }
