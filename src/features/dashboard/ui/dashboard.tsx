import useStore from "@/shared/store/useStore"
import { useEffect } from "react";
import Chart from "@/components/template/chart";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress"
import { BadgeDollarSign, Calculator, ReceiptText } from "lucide-react";

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

const accumulateData = [ 
    { planned: {year1:3, year2:30 }},
    { proposed: {year1:100, year2:50 }},
    { accepted: {year1:34, year2:30 }},
    { cancelled: {year1:49, year2:80 }},
]

export function Dashboard() {
    const { user } = useStore();
    useEffect(() => {
    }, [user]);

    return (
        <div className="flex flex-col xl:flex-row gap-1 p-2">
            <div className="flex-1">
                <div className="px-2 py-3 border text-card-foreground bg-white rounded-xl shadow-xl">
                    <div className="flex flex-row justify-between bg-card py-3 px-2 rounded-lg">
                        <h2 className="font-bold">TOP 10 DATA</h2>
                        <Badge>Yearly</Badge>
                    </div>
                    {topData?.map((item, index) => (
                        <div
                            className={`px-2 py-3 gap-1 flex flex-row justify-between items-center ${index !== topData.length - 1 ? 'border-b border-gray-300' : ''}`}
                            key={index}
                        >
                            <span className="truncate max-w-xs">{item?.company}</span>
                            <Badge variant="outline" className="border-[#3498db] text-[#3498db] bg-transparent w-[40px] flex justify-center items-center">
                                {item?.data}
                            </Badge>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-[1.5] flex flex-col gap-1">
                <Chart chartData={chartData} />
                <div className="flex flex-row gap-1">
                    <div className="flex-1 px-2 py-3 border text-card-foreground bg-white rounded-xl shadow-xl">
                        <div className="flex flex-row justify-between bg-card py-3 px-2 rounded-lg">
                            <h2 className="font-bold">Total</h2>
                            <Badge>Monthly</Badge>
                        </div>
                        <div className="flex flex-row justify-center items-center py-6">
                            <h1 className="text-[#3498db]">66%</h1>
                            <Calculator stroke="#3498db" size={35} />
                        </div>
                    </div>
                    <div className="flex-1 px-2 py-3 border text-card-foreground bg-white rounded-xl shadow-xl">
                        <div className="flex flex-row justify-between bg-card py-3 px-2 rounded-lg">
                            <h2 className="font-bold">Orders</h2>
                            <Badge>Annual</Badge>
                        </div>
                        <div className="flex flex-row justify-center items-center py-6">
                            <h1 className="text-[#3498db]">98%</h1>
                            <ReceiptText stroke="#3498db" size={35} />
                        </div>
                    </div>
                    <div className="flex-1 px-2 py-3 border text-card-foreground bg-white rounded-xl shadow-xl">
                        <div className="flex flex-row justify-between bg-card py-3 px-2 rounded-lg">
                            <h2 className="font-bold">Count</h2>
                            <Badge>Today</Badge>
                        </div>
                        <div className="flex flex-row justify-center items-center py-6">
                            <h1 className="text-[#3498db]">55%</h1>
                            <BadgeDollarSign stroke="#3498db" size={35} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <div className="px-2 py-3 border text-card-foreground bg-white rounded-xl shadow-xl">
                    <div className="bg-card py-3 px-2 rounded-lg">
                        <h2 className="font-bold">Current VS Previous Year</h2>
                    </div>
                    <div>
                        {accumulateData?.map((item, index) => {
                            const key = Object.keys(item)[0];
                            return (
                                <div className="flex mt-2 gap-4 flex-col" key={index}>
                                    <h2 className="font-bold">{key}</h2>
                                    <div className="flex flex-col">
                                        <span>{(Number(new Date().getFullYear()))}: {item[key]?.year1}</span>
                                        <Progress key={index + 'year1'} value={item[key]?.year1 ?? 0} />
                                        <span>{(Number(new Date().getFullYear()) - 1)}: {item[key]?.year2}</span>
                                        <Progress key={index + 'year2'} value={item[key]?.year2 ?? 0} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
