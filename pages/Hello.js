import Image from 'next/image'


export default function HelloPage() {
  return (
    <>
      <div style={{
        zIndex: -1,
        position: "fixed",
        width: "100vw",
        height: "100vh"
      }}>
        <Image 
          src="/bg.jpg"
          alt="Mountains with snow"
          layout="fill"
          objectFit='cover'
        />
      </div>
    </>
  )
}
