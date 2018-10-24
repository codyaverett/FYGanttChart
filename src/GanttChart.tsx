import * as React from 'react'
import { Provider, Flex } from 'reakit'
import Measure from 'react-measure'

import GanttContainer from './GanttContainer'
import StepButtons from './StepButtons'
import { ChartHeading, EpicHeading, MonthHeading } from './Labels'
import { getFiscalMonthName } from './utility/index'
import { GanttWrapper } from './styles'

import { Epic } from './types'

interface ChartProps {
    team: string
    epics: Epic[]
}

class Chart extends React.Component<ChartProps> {
    constructor(props: ChartProps) {
        super(props)
    }

    render() {
        const { team, epics } = this.props

        return (
            <Provider devtools>
                <GanttContainer>
                    {({
                        quarter,
                        getFiscalYear,
                        incrementQuarter,
                        decrementQuarter,
                        months,
                        columns,
                        storeColumn,
                    }) => (
                        <GanttWrapper>
                            <ChartHeading>
                                {team} Q{quarter} {getFiscalYear()} Roadmap
                            </ChartHeading>
                            <hr />
                            <Flex>
                                {months.map((value, index) => (
                                    <Measure
                                        key={index}
                                        bounds
                                        onResize={contentRect => {
                                            storeColumn(
                                                index,
                                                contentRect.bounds.width
                                            )
                                        }}
                                    >
                                        {({ measureRef }) => (
                                            <div
                                                ref={measureRef}
                                                style={{ flexGrow: 1 }}
                                            >
                                                <MonthHeading>
                                                    {getFiscalMonthName(value)}
                                                </MonthHeading>
                                            </div>
                                        )}
                                    </Measure>
                                ))}
                            </Flex>
                            {epics.map((value, index) => (
                                <>
                                    <svg width="100%" height={25}>
                                        <g />
                                    </svg>
                                    <EpicHeading key={index}>
                                        {value.name}
                                    </EpicHeading>
                                </>
                            ))}
                            <hr />
                            <StepButtons />
                        </GanttWrapper>
                    )}
                </GanttContainer>
            </Provider>
        )
    }
}

export default Chart
