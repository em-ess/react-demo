function Header({
    setCount
}) {
    return (
        <header className='px-4 py-3 bg-gray-900 text-white flex justify-between'>
            <div className='font-bold'>Logo</div>
            <div className='flex gap-x-4'>
                <button onClick={() => {setCount((count) => count + 1);}} className='p-3 bg-white text-gray-800 rounded font-bold'>+</button>
                <button onClick={() => {setCount((count) => count -1);}} className='p-3 bg-white text-gray-800 rounded font-bold'>-</button>
            </div>
        </header>
    )
}

export default Header;