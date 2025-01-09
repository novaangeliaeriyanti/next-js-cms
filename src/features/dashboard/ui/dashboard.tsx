import useStore from "@/shared/store/useStore"
import { useEffect } from "react";
export function Dashboard() {
    const {user} = useStore();
    useEffect(() => {
    }, [user])
    return (
        <div>
            DASHBOARD
        </div>
    )
}