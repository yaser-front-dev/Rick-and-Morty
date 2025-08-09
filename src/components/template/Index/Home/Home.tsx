  import { useEffect } from 'react';
  import { Outlet, useSearchParams } from 'react-router-dom';
  import Navbar from '../../../module/Navbar/Navbar';
  import CharactersList from '../CharactersList/CharactersList';
  import { useSearchContext } from '../../../../hooks/useSearchContext';
  import { RotatingLines } from 'react-loader-spinner';
  import type { Character } from '../../../../type/type';
  import useAllCharacter from '../../../../hooks/useAllCharacter';

  function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { search, setSearch, setCharactersFound } = useSearchContext();

    // 1. مقدار اولیه سرچ از URL
    useEffect(() => {
      const filter = searchParams.get('filter') || '';
      setSearch(filter);
    }, [searchParams, setSearch]);

    // 2. دریافت داده‌ها از سرور
    const { data: allData, isPending, error } = useAllCharacter()

    // 3. فیلتر کردن داده‌ها بر اساس search
    const filteredData = allData?.results?.filter((item: Character) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ) || [];

    // 4. به‌روزرسانی URL و context بر اساس search
    useEffect(() => {
      setSearchParams({ filter: search });
      setCharactersFound(filteredData.length);
    }, [search, filteredData.length, setSearchParams, setCharactersFound]);

    return (
      <>
        <Navbar />
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-5 mt-5">
            {isPending ? (
              <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
              />
            ) : error ? (
              <p>خطا در دریافت داده‌ها</p>
            ) : (
              filteredData.map((character: Character) => (
                <CharactersList {...character} key={character.id} />
              ))
            )}
          </div>
          <div className="col-span-7 mt-5">
            <Outlet />
          </div>
        </div>
      </>
    );
  }

  export default Home;
