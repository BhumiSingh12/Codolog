export default function Header({ name }: { name: string }) {
  return (
    <div className="w-full bg-white border-b border-gray-200 px-6 py-5">
      <h1 className="text-xl text-black font-semibold">
        Welcome Back! {name}
      </h1>
      {/* <p className="text-sm text-gray-400">
        Good Morning!!
      </p> */}
    </div>
  );
}