import useStore from "@/shared/store/useStore"
import { useEffect } from "react";
import Chart from "@/components/template/chart";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress"

const chartData = [
    { type: "Planned", year1: 186, year2: 0, year3:20, year4:100, year5:39 },
    { type: "Acceptance", year1: 10, year2: 50, year3:200, year4:200, year5:100 },
    { type: "Proposed", year1: 305, year2: 200, year3:150, year4: 400, year5:150 },
    { type: "Cancelled", year1: 237, year2: 120, year3: 180, year4:200, year5:29 }
]

const topData =[
    {company: 'Bank Tabungan Pensiun Negara', data:10},
    {company: 'Ajinomoto', data:12},
    {company: 'Profesional Telekomunikasi Indonesia', data: 10},
    {company: 'Busan Auto Finance', data: 9},
    {company: 'M Cash Energy', data: 9},
    {company: 'Bank Danamon Indonesia', data: 8},
    {company: 'Kustodian Central Efek Indonesia', data: 7},
    {company: 'Adira Dinamika Multifinance', data: 7},
    {company: 'Optima Data International', data:6},
    {company: 'Bank Tabungan Pensiunan Negara Syariah', data: 6},
]

export function Dashboard() {
    const { user } = useStore();
    useEffect(() => {
    }, [user]);

    return (
        <div className="flex flex-row gap-2">
            <div className="flex-1">
                {/* <div className="p-2 rounded-lg border bg-card text-card-foreground shadow-sm"> */}
                <div className="px-2 py-3 border text-card-foreground bg-white rounded-xl shadow-xl">
                    <div className="flex flex-row justify-between bg-card py-4 px-2 rounded-lg">
                        <h2 className="font-bold">TOP 10 DATA</h2>
                        <Badge>Yearly</Badge>
                    </div>
                    {
                    topData?.map((item, index) => (
                        <div className={`px-2 py-3 gap-1 flex flex-row justify-between align-middle ${index !== topData.length - 1 ? 'border-b border-gray-300' : ''}`}>
                            <span className="truncate max-w-xs">{item?.company}</span>
                            <Badge variant="outline" className="border-[#3498db] text-[#3498db] bg-transparent w-[40px] flex justify-center align-middle">{item?.data}</Badge>
                        </div>
                    ))
                    }
                </div>
            </div>
            <div className="flex-[1.5]">
                <Chart chartData={chartData}/>
            </div>
            <div className="flex-1">
            <div className="flex-1">
                <div className="px-2 py-3 border text-card-foreground bg-white rounded-xl shadow-xl">
                    <div className="bg-card py-4 px-2 rounded-lg">
                        <h2 className="font-bold ">Current VS Previous Year</h2>
                    </div>
                        <div>
                        <Progress value={3}/>
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}
