import Image from 'next/image';

const NavBar = () => {
    return (
        <div className='pl-20 pt-8 w-full'>
            <div className='flex gap-4 justify-center md:justify-start'>
                <Image
                    src='/Logo T_White Horizontal 1.png'
                    width={240}
                    height={128}
                    objectFit='contain'
                    alt='IMV Logo'
                />
            </div>
        </div>
    );
};

export default NavBar;
