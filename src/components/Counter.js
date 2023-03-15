function Counter({
    count
}) {
    return (
        <div className='px-4 py-16 h-screen w-full flex items-center justify-center'>
            <h1 className='text-8xl'>{count}</h1>
        </div>
    );
}

export default Counter;