const TextSkeleton = () => {
  return (
    <div className="mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse">
      <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5">

      </div>
      <div className="h-3.5 max-w-[360px] bg-gray-200 rounded-full mb-2.5">

      </div>
      <div className="h-2 max-w-[560px] bg-gray-200 rounded-full mb-2.5">

      </div>
      <div className="h-2 max-w-[530px] bg-gray-200 rounded-full mb-2.5">

      </div>
    </div>
  )

}

export default function loading() {
  const skeletons = Array(5).fill(0)
  console.log(skeletons.length)

  return (
    <>
      {skeletons.map(() => (
        <TextSkeleton key={Math.random()}/>
      ))}
    </>
  )
}
