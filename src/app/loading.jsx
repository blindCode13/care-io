import Spinner from '@/assets/spinner.svg'
import Image from 'next/image';

const Loading = () => {
    return (
        <div className="flex items-center justify-center">
            <Image alt='spinner' className='size-20' src={Spinner}></Image>
        </div>
    );
};

export default Loading;