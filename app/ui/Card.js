import Image from 'next/image'

export default function Card({obj}){
  const date = new Date(obj.date).toDateString()
  const price = obj.price === 0 ? 'Free' : `Starts at: $${obj.price}`
  return (
    <div>
      <div>
        <Image
          src= {obj.image}
          alt='image'
          width={200}
          height={200}
          priority={true} 
        />
      </div>
      <h2>{obj.title}</h2>
      <p>{date}</p>
      <p>{obj.location.address},{obj.location.state},{obj.location.city}</p>
      <span>{price}</span>
    </div>
  )
}