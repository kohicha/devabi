export default function Video({height, width, src}){
  return(
      <video className="rounded-2xl" width={width} height={height} preload="none" autoPlay loop muted>
        <source src={src} type="video/webm"/>
      </video>
  )
}
