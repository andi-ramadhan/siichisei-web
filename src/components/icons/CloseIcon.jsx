const CloseIcon = ({ className = '', classChild = '', size = 'h-8' }) => {
  return(
    <div className={`bg-transparent w-[50px] h-[50px] flex items-center justify-center relative ${className}`}>
      <div className={`${size} w-0.5 absolute bg-black rotate-45 ${classChild}`}></div>
      <div className={`${size} w-0.5 absolute bg-black -rotate-45 ${classChild} `}></div>
    </div>
  )
}

export default CloseIcon;