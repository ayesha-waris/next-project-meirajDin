"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {

const router = useRouter();

const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchText = formData.get("search-text") as string;

    if(searchText){
      router.push(`/list?name=${searchText}`)
    }
}

  return ( 
      <form 
      className="flex ic justify-between items-center gap-4 bg-gray-100 p-2 rounded-md flex-1 shadow"
      onSubmit= {handleSearch}
      >
        <input 
        type="text" 
        placeholder="Search..." 
        name="search-text"
        className="bg-transparent outline-none flex-1"
      />
        <button className="cursor-pointer">
          <Image
            src="/search.png"
            alt=""
            width={16}
            height={16}/>
        </button>
      </form>
   );
}
 
export default SearchBar;