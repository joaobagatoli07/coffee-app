import { CircleUser } from 'lucide-react';
import { PencilLine } from 'lucide-react';


function UserInfo({name = 'Roger', role = 'Nome'}) {

    return (

        <div>
            <div className='flex w-[300px] h-[50px] bg-white items-center justify-center shadow-lg'>
                <CircleUser className='ml-[10px]' />

                <div className='flex flex-col mr-[160px] leading-none gap-0.5 p-3 '>
                    <p className='text-[13px] text-gray-500'>{role}</p>
                    <p className='text-[15px]'>{name}</p>
                </div>

                <div className='flex justify-center items-center mr-[15px]'>
                    <button><PencilLine /></button>
                </div>
            </div>
        </div>

    )
}

export default UserInfo;