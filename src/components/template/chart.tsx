import { CartesianGrid, Line, LineChart, XAxis, Tooltip, Legend } from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltipContent,
} from "@/components/ui/chart"

interface ChartProps<T,> {
    chartData: T[],
  }

export default function Chart<T,>({chartData,}: ChartProps<T>) {
    const strokeColors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6']; 

    const chartConfig = {
        year1: {
            label: `${(Number(new Date().getFullYear()) - 4)}`,
            color: `${strokeColors[0]}`,
        },
        year2: {
            label: `${(Number(new Date().getFullYear()) - 3)}`,
            color: `${strokeColors[1]}`,
            
        },
        year3: {
            label: `${(Number(new Date().getFullYear()) - 2)}`,
            color: `${strokeColors[2]}`,
            
        },
        year4: {
            label: `${(Number(new Date().getFullYear()) - 1)}`,
            color: `${strokeColors[3]}`,
            
        },
        year5: {
            label: `${(Number(new Date().getFullYear()))}`,
            color: `${strokeColors[4]}`,
            
        }, 
    } satisfies ChartConfig
    return(
            <Card className="bg-white rounded-xl shadow-xl">
                <CardHeader>
                    <h2 className="font-bold">Last 5 Year Data</h2>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 30,
                                right: 5,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="type"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={10}
                            />
                            <Tooltip cursor={false} content={<ChartTooltipContent />} 
                            />
                            <Legend
                                align="left"
                                verticalAlign="top"
                                layout="horizontal"
                                wrapperStyle={{ padding: '5px'}}
                            />
                            <div>
                                
                            </div>
                            {
                                ['year1', 'year2', 'year3', 'year4', 'year5'].map((item, index) => (
                                    <Line
                                        key={index}
                                        dataKey={'year'+(Number(index) + 1)}
                                        type="monotone"
                                        stroke={strokeColors[index]}
                                        strokeWidth={2}
                                        dot={true}
                                        name={`${(Number(new Date().getFullYear()) - 5) + index}`}
                                    />
                                    )
                                )
                            }
                        </LineChart>
                    </ChartContainer>
                </CardContent>
            </Card>
    )
}