import Image from 'next/image';
import { RxDoubleArrowLeft } from 'react-icons/rx';
import useStore from '@/shared/store/useStore';
import { useState } from 'react';
import { cn } from '@/shared/lib/utils';
import Menu from './menu';
export default function Sidebar() {
	const { user } = useStore((state) => state);
	const [isExpand, setIisExpand] = useState(true);

	return (
		<aside className={
			cn(
				"flex flex-col bg-white pt-3 h-screen duration-300",
				isExpand ? 'w-[260px]' : 'w-[80px]'
			)
		}>
			<div className="flex justify-between items-center max-h-10 h-full ml-3 relative ">
				<h2 className={cn(
					"text-xl font-extrabold  ",
					!isExpand && 'hidden '
					)}>Company Logo</h2>
				<div className={cn(
					"absolute flex -right-3 border-2 rounded-full bg-white border-blue-800",
					"cursor-pointer w-7 h-7 items-center justify-center duration-500",
					!isExpand && "rotate-180"
				)}
					onClick={() => setIisExpand(!isExpand)}
				>
					<RxDoubleArrowLeft
						className='size-4'
					/>

				</div>
			</div>

			<div className="flex gap-4 items-center mx-auto my-5 ml-3">
				<Image
					height={40}
					width={40}
					src="https://placehold.co/40x40"
					alt="profile"
					className="rounded-full object-cover bg-cover h-[40px] w-[40px]"
				/>
				<div>
					<h2 className={cn(
						"font-bold text-lg",
						!isExpand && 'hidden'
					)}>{user?.user_name}</h2>

					<h4 className={cn(
						!isExpand && 'hidden'
					)}>{user?.role_name}</h4>
				</div>
			</div>
			<Menu isExpand={isExpand} />
		</aside>
	)
}