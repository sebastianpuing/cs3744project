import Image from "next/image";



export default function Home() {

  var myDate = new Date();
  const dateFormattingOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  var myFormattedDate = myDate.toLocaleDateString(undefined, dateFormattingOptions);

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">Water Traker</h1>
      <h3 className="text-3xl font-bold dark:text-white">{myFormattedDate}</h3>
    </div>
  );
}
