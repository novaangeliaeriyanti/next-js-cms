import { HiHome } from 'react-icons/hi2';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { populateMenu } from '@/shared/lib/utils';
import useStore from '@/shared/store/useStore';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from '@/shared/lib/utils';
import { ChevronRight } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

interface MenuProps{
	isExpand: boolean
}

export default function Menu({
	isExpand
}: MenuProps) {
	const [menus, setMenus] = useState([]);
	const [defaultMenu, setDefaultMenu] = useState("");
	const router = useRouter();
	const pathname = usePathname();
	const { user } = useStore((state) => state);

	useEffect(() => {
		const menus = populateMenu(user);
		setMenus(menus);
	}, [populateMenu])


	const MenuExpand = () => (
		<>
			<div className="pl-3">
				<div className="flex gap-3 py-5 rounded-l-full ">
					<HiHome className="text-xl " />
					<h3 className={cn(
						"text-base font-medium",
					)}>Dashboard</h3>
				</div>
			</div>
			<Accordion
				type="single"
				defaultValue="item-AppSetting"
				collapsible
				className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto no-scrollbar">
				{menus.map((menu: any, index: number) => (
					<AccordionItem key={`item-${index}`} value={`item-${menu.feature.replace(" ", "")}`} className="pl-3 " >
						<AccordionTrigger>
							<div className='flex flex-row gap-3'>
								<HiHome className="text-xl " />
								<h3 className={cn(
									"text-base font-medium original-left duration-1000",
								)}>{menu.feature}</h3>

							</div>
						</AccordionTrigger>
						{menu.children.map((child: any, ind: number) => (
							<AccordionContent
								className={cn('rounded-l-full cursor-pointer', addActiveClass(child.feature_path))}
								key={`child-${ind}`}
								onClick={() => router.replace(child.feature_path)}>
								{child.feature}
							</AccordionContent>
						))}
					</AccordionItem>
				))}
			</Accordion>
		</>
	)


	const MenuCollapse = () => (
		<>
			<div className="px-3 cursor-pointer">
				<div className="flex gap-3 py-5 rounded-l-full ">
					<HiHome className="text-xl " />
				</div>
			</div>

			{menus.map((menu: any, index: number) => (
				<MenuDropDown menu={menu} key={`drop-${index}`} />
			))}
		</>
	)

	const MenuDropDown = ({ menu }: { menu: any }) => (
		<DropdownMenu >
			<DropdownMenuTrigger asChild>
				<div>
					<Tooltip>
						<TooltipTrigger className='flex w-full px-3 py-2 justify-between'>
							<HiHome className="text-xl " />
							<ChevronRight className="h-4 w-4 text-thgray" />
						</TooltipTrigger>
						<TooltipContent>
							<p>{menu.feature}</p>
						</TooltipContent>
					</Tooltip>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent side='right'  >
				<DropdownMenuLabel>{menu.feature}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{menu.children.map((child: any, ind: number) => (
					<DropdownMenuItem
						key={`drop-child-${ind}`}
						className='cursor-pointer'
						onClick={() => router.replace(child.feature_path)}
					>
						{child.feature}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)

	useEffect(() => {
		menus.forEach((item: any) => {
			item.children.forEach((child: any) => {
				if (child.feature_path === pathname) {
					setDefaultMenu(`item-${item.feature.replace(" ", "")}`)
				}
			})
		})
	}, [menus, pathname])

	const addActiveClass = (itemPath: string) => {
		if (itemPath === pathname) {
			return 'bg-thgraybg text-thblue'
		}
		return null;
	}

	return (
		<TooltipProvider>

			{isExpand
				? <MenuExpand />
				: <MenuCollapse />}
		</TooltipProvider>
	)
}