const ImageSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
      <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
      <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
    </div>
  );
};

export default function loading() {
  const skeletons = Array(5).fill(0)

  return (
    <div className="pt-10 mx-2 lg:pl-52 max-w-6xl flex sm:space-x-4 flex-col sm:flex-row pb-42">
      <ImageSkeleton />
      <div className="hidden sm:inline-flex sm:space-x-4">
        {skeletons.map(() => <ImageSkeleton key={Math.random()}/>)}
      </div>
    </div>
  );
}
