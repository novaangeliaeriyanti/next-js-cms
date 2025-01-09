import { HiHome } from 'react-icons/hi2';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import NotifBell from '@/components/ui/notif-bell';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from 'sonner';
import useStore from '@/shared/store/useStore';
import { usePathname, useRouter } from 'next/navigation';
export default function Header() {
	const router = useRouter();
	const pathname = usePathname();
	const arrPath = (pathname || "").split("/")
	const { logout } = useStore();

	return (
		<header className="max-h-10 h-full flex items-center justify-between ">
			<div>
				<Breadcrumb className="text-sm">
					<BreadcrumbList>
						<div className='flex flex-row items-center gap-2'>

							<BreadcrumbItem className="flex items-center">
								<HiHome className="text-xl" />
								<BreadcrumbLink href="/" className="">
									Dashboard
								</BreadcrumbLink>
							</BreadcrumbItem>
						</div>
						{arrPath.slice(1).map((path, index) => (
							<div className='flex flex-row items-center gap-2' key={`breadcumb-path${index}`}>
								<BreadcrumbSeparator>
									<p>/</p>
								</BreadcrumbSeparator>
								<BreadcrumbItem>
									<BreadcrumbLink>{path}</BreadcrumbLink>
								</BreadcrumbItem>
							</div>
						))}

					</BreadcrumbList>
				</Breadcrumb>
			</div>
			<div className="flex gap-5 items-center">
				<NotifBell />
				<Avatar
					onClick={() => {
						logout();

					}}
				>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
		</header>
	)
}